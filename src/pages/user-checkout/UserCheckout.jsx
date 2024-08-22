import React, {useState, useEffect} from 'react';
import Footer from '../../components-website/Footer';
import axios from 'axios';
import ProcessingTransaction from '../../components-website/ProcessingTransaction';
import {useStore} from '../../store';
import {
    showDiscountCodeNotFoundError,
    showDiscountCodeSuccessful,
    showDiscountUsedTooMuch,
    showInvalidPaymentInputsError,
    showPaymentDeclinedError
} from '../../utils/utils';
import Notification from '../../components-website/Notification';
import Modal from '../../components-website/Modal';
import StripeModal from '../../components-website/StripeModal';
import {useSearchParams} from 'react-router-dom';

export default function UserCheckout(second) {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [userDetails, setUserDetails] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [iframeString, setIframeString] = useState(null);
    const [expiry, setExpiry] = useState('');
    const [cvv, setCVV] = useState('');
    const [fullname, setFullname] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const {billingInfo, challenge, challengeType, setBillingInfo, setChallengeName, setChallengeType} = useStore();
    const [success, setSuccess] = useState(false);
    const [notification, setNotification] = useState(null);
    const [previewDiscountCode, setPreviewDiscountCode] = useState('');
    const [committedDiscountAmount, setcommittedDiscountAmount] = useState('');
    const [committedDiscountCode, setCommittedDiscountCode] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const totalPrice = searchParams.get('totalPrice');
    const challengeLevel = searchParams.get('challengeLevel');
    const challengeName = searchParams.get('challengeName');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleApplyDiscountCode = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_PTF_API}/billing/get-discount-code?code=${previewDiscountCode}&challengeType=${challengeType}&challengeLevel=${challenge}`
            );
            let discount = response.data;

            if (discount.numOfUses >= discount.numPermittedUses) {
                showDiscountUsedTooMuch(setNotification);
                return;
            }

            showDiscountCodeSuccessful(setNotification);
            setcommittedDiscountAmount(discount.discountAmount);
            setCommittedDiscountCode(discount.code);
        } catch (error) {
            showDiscountCodeNotFoundError(setNotification);
            console.log(error);
        }
    };

    const calculateFinalPrice = () => {
        if (committedDiscountAmount) {
            const discountMultiplier = 1 - committedDiscountAmount / 100;
            return (billingInfo * discountMultiplier).toFixed(2);
        }
        return billingInfo.toFixed(2);
    };

    const handleCheckout = async () => {
        const expiryParts = expiry.split('/');
        const exp_month = parseInt(expiryParts[0], 10); // Convert string to number
        const exp_year = parseInt(expiryParts[1], 10);

        setIsProcessing(true);

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_PTF_API}/billing/checkout`,
                {
                    test_card: cardNumber,
                    total: billingInfo,
                    exp_month: exp_month,
                    exp_year: exp_year,
                    code: cvv,
                    challengeType: challengeType + ' Phase 1',
                    challengeLevel: challenge,
                    discountCode: committedDiscountCode
                },
                {
                    withCredentials: true
                }
            );

            const {orderId} = response.data;

            const result = response.data['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ipgapi:IPGApiOrderResponse'][0];

            if (result['ipgapi:TransactionResult'] && result['ipgapi:TransactionResult'][0] === 'APPROVED') {
                // Should redirect the user to the dashboard
                setSuccess(true);
                setInterval(async () => {
                    try {
                        const response = await axios.get(`${process.env.NEXT_PUBLIC_PTF_API}/billing/get-user`, {withCredentials: true});
                        const userData = response.data;
                        const allChallengesHaveTradingAccounts = userData.userChallenges.every(challenge => challenge.tradingAccount !== null);
                        if (allChallengesHaveTradingAccounts) {
                            setTimeout(() => {
                                setIsProcessing(false);
                                window.location.href = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}`;
                            }, 3000); // delay is 3000 milliseconds, or 3 seconds
                            return;
                        } else {
                            // console.log("NOT ALL USER CHALLENGES HAVE A TRADING ACCOUNT.");
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }, 3000);
            }

            if (result['ipgapi:ApprovalCode'] && result['ipgapi:ApprovalCode'][0].includes('?:waiting 3dsecure')) {
                // Should handle 3ds measures
                const secureResponse =
                    response.data['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ipgapi:IPGApiOrderResponse'][0]['ipgapi:Secure3DResponse'][0];

                if (secureResponse['v1:Secure3DVerificationResponse']) {
                    const verificationResponse = secureResponse['v1:Secure3DVerificationResponse'][0]['v1:VerificationRedirectResponse'][0];

                    const acsUrl = verificationResponse['v1:AcsURL'][0];
                    const creq = verificationResponse['v1:CReq'][0];
                    const termUrl = verificationResponse['v1:TermUrl'][0];

                    let form = document.createElement('form');
                    document.body.appendChild(form);
                    form.method = 'POST';
                    form.action = acsUrl;

                    // Add creq input
                    let creqInput = document.createElement('input');
                    creqInput.type = 'hidden';
                    creqInput.name = 'creq';
                    creqInput.value = creq;
                    form.appendChild(creqInput);

                    // Add termUrl input
                    let termUrlInput = document.createElement('input');
                    termUrlInput.type = 'hidden';
                    termUrlInput.name = 'termUrl';
                    termUrlInput.value = termUrl;
                    form.appendChild(termUrlInput);

                    // Submit the form
                    form.submit();
                }
                if (secureResponse['v1:Secure3DMethod']) {
                    setIframeString(iframeString);
                    setTimeout(async () => {
                        let result;
                        try {
                            const response = await axios.get(`${process.env.NEXT_PUBLIC_PTF_API}/billing/check-notification`, {
                                params: {
                                    orderId: orderId
                                }
                            });
                            result = response.data;
                            if (result['ipgapi:TransactionResult'] && result['ipgapi:TransactionResult'][0] === 'APPROVED') {
                                // Should redirect the user to the dashboard
                                setSuccess(true);
                                setInterval(async () => {
                                    try {
                                        const response = await axios.get(`${process.env.NEXT_PUBLIC_PTF_API}/billing/get-user`, {withCredentials: true});
                                        const userData = response.data;
                                        const allChallengesHaveTradingAccounts = userData.userChallenges.every(challenge => challenge.tradingAccount !== null);
                                        if (allChallengesHaveTradingAccounts) {
                                            setTimeout(() => {
                                                setIsProcessing(false);
                                                window.location.href = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}`;
                                            }, 3000); // delay is 3000 milliseconds, or 3 seconds
                                            return;
                                        } else {
                                        }
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }, 3000);
                            }

                            if (result['ipgapi:ApprovalCode'] && result['ipgapi:ApprovalCode'][0].includes('?:waiting 3dsecure')) {
                                // Should handle 3ds measures
                                const verificationResponse =
                                    result['ipgapi:Secure3DResponse'][0]['v1:Secure3DVerificationResponse'][0]['v1:VerificationRedirectResponse'][0];

                                const acsUrl = verificationResponse['v1:AcsURL'][0];
                                const creq = verificationResponse['v1:CReq'][0];
                                const termUrl = verificationResponse['v1:TermUrl'][0];

                                let form = document.createElement('form');
                                document.body.appendChild(form);
                                form.method = 'POST';
                                form.action = acsUrl;

                                // Add creq input
                                let creqInput = document.createElement('input');
                                creqInput.type = 'hidden';
                                creqInput.name = 'creq';
                                creqInput.value = creq;
                                form.appendChild(creqInput);

                                // Add termUrl input
                                let termUrlInput = document.createElement('input');
                                termUrlInput.type = 'hidden';
                                termUrlInput.name = 'termUrl';
                                termUrlInput.value = termUrl;
                                form.appendChild(termUrlInput);

                                // Submit the form
                                form.submit();
                            }
                        } catch (error) {
                            setIsProcessing(false);
                            showPaymentDeclinedError(setNotification);
                        }
                    }, 10000);
                } else {
                    // console.log("oculd be fricitonless");
                }
            }
        } catch (error) {
            setIsProcessing(false);
            showInvalidPaymentInputsError(setNotification);
        }
    };

    useEffect(() => {
        localStorage.removeItem('redirect_to')
    }, [])

    useEffect(() => {
        const iframeContainer = document.getElementById('iframe-container');
        if (iframeContainer && iframeString) {
            iframeContainer.innerHTML = iframeString;
        }
        const form = document.getElementById('tdsMmethodForm');
        if (form) form.submit();
    }, [iframeString]);

    const [dataReady, setDataReady] = useState(false);

    // useEffect(() => {
    //   if (router.isReady) {
    //     setDataReady(true);
    //   }
    // }, [router.isReady]);

    useEffect(() => {
        if (dataReady) {
            let price = totalPrice || billingInfo;
            let challengeAmount = challengeLevel || challenge;
            let challengeTier = challengeName || challengeType;

            // If there's "Phase 1" in challengeAmount, remove it
            challengeTier = challengeTier.replace('Phase 1', '').trim();

            if (!price || !challengeAmount || !challengeTier) {
                console.log('In user-checkout not equal 375');
                window.location.href = `${process.env.NEXT_PUBLIC_LANDING_URL}/#getfunded`;
            }
            if (price && challengeAmount && challengeTier) {
                setBillingInfo(price);
                setChallengeType(challengeTier);
                setChallengeName(challengeAmount);
            }
            if (totalPrice) {
                showPaymentDeclinedError(setNotification);
            }
        }
    }, [dataReady, totalPrice, challengeLevel, challengeName]);

    useEffect(() => {
        // const fetchData = async () => {
        //   try {
        //     const response = await axios.get(
        //       `${process.env.NEXT_PUBLIC_PTF_API}/billing/get-user`,
        //       { withCredentials: true }
        //     );
        //     const userData = response.data;
        //     console.log("userdata,", userData);
        //     // Process the user data as needed emailAddress
        //     setFullname(userData.fullname);
        //     setEmail(userData.profile.emailAddress);
        //     setUserDetails(userData);
        //     setAddress(userData.profile.addressLine1);
        //   } catch (error) {
        //     console.error(error);
        //   }
        // };
        //
        // fetchData();
    }, []);

    if (isProcessing) return <ProcessingTransaction success={success}/>;

    return (
        <div className="text-white bg-mainTheme">
            {/*<Head>*/}
            {/*  <title></title>*/}
            {/*  <meta name="description" content="" />*/}
            {/*  <link rel="icon" href="/favicon.ico" />*/}
            {/*</Head>*/}

            {/* <ReturningCustomer></ReturningCustomer> */}

            <div
                className="flex md:flex-row flex-col justify-center py-[64px] items-start lg:w-[1000px] md:px-5 gap-10 mx-auto"
                onClick={e => {
                    setIsActive(false);
                }}
            >
                {/* right */}

                <div
                    className="py-6 px-4 md:w-[1200px] w-full flex flex-col gap-2 mx-auto bg-[#1C1D20] border-none rounded-lg">
                    <div>
                        <p className="pb-1 text-xs font-light">Item</p>
                        <span className="font-normal">Pro Traders Funded Challenge</span>
                    </div>
                    <hr/>
                    <div>
                        <p className="pb-1 text-xs font-light">Email {email}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div>
                            <p className="text-xs font-light">Challenge</p>
                            <p className="text-sm font-bold">{challenge}</p>
                        </div>
                        <div>
                            {' '}
                            <p className="text-xs font-light">Challenge Type</p>
                            <p className="text-sm font-bold">{challengeType}</p>
                        </div>
                        <div>
                            {' '}
                            <p className="text-xs font-light">Trading Platform:</p>
                            <p className="text-sm font-bold">MetaTrader 5 (MT5)</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div className="font-normal">Subtotal</div>
                            <span>${billingInfo}.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-normal">Discount</div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className="border rounded-sm w-[150px] bg-secTheme"
                                    value={previewDiscountCode}
                                    onChange={e => setPreviewDiscountCode(e.target.value)}
                                />
                                <button
                                    className="px-2 py-1 text-black border-none rounded-lg cursor-pointer bg-mainColor"
                                    onClick={handleApplyDiscountCode}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-normal">Total</p> <span>${calculateFinalPrice()}</span>
                        </div>
                    </div>
                    <button className="px-2 py-1 text-black border-none rounded-lg cursor-pointer bg-mainColor"
                            onClick={openModal}>
                        Pay ${calculateFinalPrice()}
                    </button>
                    <p className="text-xs font-light">
                        By clicking the button, you agree to our <span
                        className="underline blue">Terms of Service</span> as well as{' '}
                        <span className="underline blue">Terms of Sale.</span>
                    </p>
                </div>
            </div>
            <Footer></Footer>
            {notification && <Notification message={notification.message} type={notification.type}/>}

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <StripeModal
                    challengeType={challengeType + ' Phase 1'}
                    challengeLevel={challenge}
                    discountCode={committedDiscountCode}
                    email={email}
                    billingInfoTotal={billingInfo}
                    discountCodeApplied={committedDiscountCode}
                    fullname={fullname}
                    phoneNumber={userDetails.phoneNumber}
                    address={address}
                />
            </Modal>
            <div id="iframe-container"></div>
        </div>
    );
}
