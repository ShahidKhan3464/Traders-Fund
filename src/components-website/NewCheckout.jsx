import ReturningCustomer from '../components-website/ReturningCustomer';
import React, { useEffect, useRef, useState } from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Notification from '../components-website/Notification';
import { styled } from '@mui/material/styles';
import { useStore } from './../store';
import ProcessingTransaction from '../components-website/ProcessingTransaction';
import {
  showCustomError,
  showCustomSuccess,
  showDiscountAdditionalAccountSuccessful,
  showDiscountCodeSuccessful,
  showPaymentDeclinedError
} from '../utils/utils';

import NewPaymentModal from './NewPaymentModal';
import { useNavigate } from 'react-router-dom';
import { checkCouponCode, getWalletBalance, purchaseChallenge } from '../api';

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: '1px solid #3b3c3d'
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled(props => <MuiAccordionSummary expandIcon={''} {...props} />)(({ theme }) => ({
  backgroundColor: '#141518',

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    color: 'white',
    backgroundColor: '#141518'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '1rem 2rem', // borderTop: "1px solid #3b3c3d",
  backgroundColor: '#141518',
  color: 'white'
}));

const NewCheckout = () => {
  const navigate = useNavigate();

  const {
    billingInfo,
    challenge,
    challengeType,
    challengeId,
    setBillingInfo,
    setChallengeName,
    setChallengeType,
    selectedChallenge,
    selectedPurchaseDetail,
    selectedChallengeId
  } = useStore();

  const [email, setEmail] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const [address, setAddress] = useState('');
  const [checked, setChecked] = useState(false);

  const [cardNumber, setCardNumber] = useState('');
  const [iframeString, setIframeString] = useState(null);
  const [expiry, setExpiry] = useState('');
  // ------------------------------CARD---------------------------
  const [cvv, setCvv] = useState();
  const [ccNumber, setCCNumber] = useState();
  const [ccNumberMask, setCCNumberMask] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [name, setName] = useState();
  const [ccLogo, setCCLogo] = useState(null);
  const [processing, setProcessing] = useState(false);

  const [fullname, setFullname] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);

  const [cardMethod, setCardMethod] = useState(true);
  const [tailoredPayMethod, setTailoredPayMethod] = useState(false);
  const [nuveiPayStatus, setNuveiPayStatus] = useState(false);
  const [fiserveMethod, setFiserveMethod] = useState(false);
  const [walletMethod, setWalletMethod] = useState(false);
  const [walletBalance, setWalletBalance] = useState()

  const [dataReady, setDataReady] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValidationType, setInputValidationType] = useState('');

  //---------------------------- PAYMENT MODAL-----------------------------
  let myRefname = useRef(null);
  const [clientToken, setClientToken] = useState(null);
  const [isFiservInProgress, setIsFiservInProgress] = useState(false);
  const [isWalletInProgress, setIsWalletInProgress] = useState(false)
  const [isTailoredPayInProgress, setIsTailoredPayInProgress] = useState(false);
  const [fiservResponse, setFiservResponse] = useState(null);
  const [walletResponse, setWalletResponse] = useState(null)
  const [fiservCalled, setFiservCalled] = useState(false);
  const initialOptions = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    dataClientToken: clientToken,
    components: 'hosted-fields,buttons',
    'enable-funding': 'card',
    'data-sdk-integration-source': 'integrationbuilder_ac'
  };

  useEffect(() => {
    localStorage.removeItem('redirect_to');
  }, []);

  // ----------------------PAYMENT MODAL------------------------------------
  useEffect(() => {
    (async () => {
      if (fiservResponse && !fiservCalled) {
        myRefname.click();
        setFiservCalled(true);
      }
    })();
  }, [fiservResponse]);

  useEffect(() => {
    fetchWalletBalance()
  }, [])

  const handleFiservOrder = async () => {
    try {
      setIsFiservInProgress(true);
      const fiservData = {
        challengeLevelId: selectedPurchaseDetail.challengeLevelId,
        source: 'FISERV'
      };
      if (couponCode) {
        Object.assign(fiservData, {
          couponCode: couponCode
        });
      }
      const response = await purchaseChallenge(fiservData);
      setFiservResponse(response);
      setIsFiservInProgress(false);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const fetchWalletBalance = async id => {
    try {
      const response = await getWalletBalance();
      setWalletBalance(response);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleWalletOrder = async () => {
    try {
      setIsWalletInProgress(true);
      const walletData = {
        challengeLevelId: selectedPurchaseDetail.challengeLevelId,
        source: 'WALLET'
      };
      if (couponCode) {
        Object.assign(walletData, {
          couponCode: couponCode
        });
      }
      const response = await purchaseChallenge(walletData);
      setWalletResponse(response);
      setIsWalletInProgress(false);
      navigate(`/handle-payment-response?transactionId=${response.transactionId}&source=PTF_WALLET`);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
      setIsWalletInProgress(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
  };

  const { totalPrice, challengeLevel, challengeName } = {};
  let emailAddress = '';

  const handleApplyDiscountCode = async () => {
    try {
      const response = await checkCouponCode({
        code: couponCode,
        challengeId: selectedPurchaseDetail.challengeId,
        challengeLevelId: selectedPurchaseDetail.challengeLevelId
      });
      if (response.discountedTradingAccounts > 0) {
        showDiscountAdditionalAccountSuccessful(setNotification, response.discountedTradingAccounts);
      } else {
        showDiscountCodeSuccessful(setNotification);
      }
      setDiscountPercentage(response.discount);
      calculateFinalPrice(response.discount);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const calculateFinalPrice = discount => {
    const discountMultiplier = 1 - discount / 100;
    setPriceAfterDiscount((billingInfo * discountMultiplier).toFixed(2));
  };

  // --------CARD PAY APEX-------------
  async function createFACOrder() {
    try {
      setProcessing(true);
      const data = {
        source: 'FAC',
        challengeLevelId: selectedPurchaseDetail.challengeLevelId
      };
      if (couponCode) {
        Object.assign(data, {
          couponCode
        });
      }
      const response = await purchaseChallenge(data);
      window.location.replace(response.redirectUrl);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  }

  async function createTailoredPayOrder() {
    try {
      setIsTailoredPayInProgress(true);
      window.CollectJS.startPaymentRequest();
    } catch (error) {
      console.error(error)
    }
  }

  const submitCardCharge = async () => {
    /*if (!ccNumber) {
      setInputValidationType('ccNumber');
      setNotification({ message: 'Please enter a valid card number', type: 'error' });
      return;
    }
    if (!cvv) {
      setInputValidationType('cvv');
      setNotification({ message: 'Please enter a valid CVV', type: 'error' });
      return;
    }
    if (!expiryDate) {
      setInputValidationType('expiryDate');
      setNotification({ message: 'Please enter a valid expiry date', type: 'error' });
      return;
    }
    if (!name) {
      setInputValidationType('name');
      setNotification({ message: 'Please enter a valid name', type: 'error' });
      return;
    }
*/
    setProcessing(true);
    await createFACOrder();
    setProcessing(false);
  };

  const placeNurveiOrder = async () => {
    if (!ccNumber) {
      setInputValidationType('ccNumber');
      setNotification({ message: 'Please enter a valid card number', type: 'error' });
      return;
    }
    if (!cvv) {
      setInputValidationType('cvv');
      setNotification({ message: 'Please enter a valid CVV', type: 'error' });
      return;
    }
    if (!expiryDate) {
      setInputValidationType('expiryDate');
      setNotification({ message: 'Please enter a valid expiry date', type: 'error' });
      return;
    }
    if (!name) {
      setInputValidationType('name');
      setNotification({ message: 'Please enter a valid name', type: 'error' });
      return;
    }
    const expiryData = expiryDate.split('/');
    if (expiryData.length !== 2) {
      setInputValidationType('expiryDate');
      setNotification({ message: 'Please enter a valid expiry date', type: 'error' });
      return;
    }

    setProcessing(true);
    try {
      const expirationMonth = expiryData[0];
      const expirationYear = expiryData[1];
      const data = {
        source: 'NUVEI',
        challengeLevelId: selectedPurchaseDetail.challengeLevelId
      };
      if (couponCode) {
        Object.assign(data, {
          couponCode
        });
      }
      const orderData = await purchaseChallenge(data);
      const sessionToken = orderData.nuveiSessionToken;
      const transactionId = orderData.transactionId;
      const safeCharge = window.SafeCharge({
        env: process.env.REACT_APP_NUVEI_ENV,
        merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
        merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID
      });
      safeCharge.createPayment(
        {
          sessionToken,
          paymentOption: {
            card: {
              cardHolderName: name,
              cardNumber: ccNumber.replaceAll('-', ''),
              expirationMonth,
              expirationYear,
              CVV: cvv
            }
          }
        },
        resp => {
          setProcessing(false);
          navigate(`/handle-payment-response?transactionId=${transactionId}`);
        },
        error => { }
      );
    } catch (error) {
      setProcessing(false);
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  // const submitCardCharge = async () => {
  //     setProcessing(true);
  //     const lastFourDigitsOfCard = ccNumber.slice(-4);
  //     const transactionId = await createFACOrder(lastFourDigitsOfCard);
  //     setProcessing(false);
  //     window.location.replace(`${process.env.REACT_APP_PTF_API_V2}/purchase/fac-transaction-redirect/${transactionId}`);
  // };

  // --------CARD PAY APEX-------------
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    calculateFinalPrice(0);
  }, []);
  useEffect(() => {
    const iframeContainer = document.getElementById('iframe-container');
    if (iframeContainer && iframeString) {
      iframeContainer.innerHTML = iframeString;
    }
    const form = document.getElementById('tdsMmethodForm');
    if (form) form.submit();
  }, [iframeString]);

  useEffect(() => {
    if (dataReady) {
      let price = totalPrice || billingInfo;
      let challengeAmount = challengeLevel || challenge;
      let challengeTier = challengeName || challengeType;

      // If there's "Phase 1" in challengeAmount, remove it
      challengeTier = challengeTier.replace('Phase 1', '').trim();

      if (!price || !challengeAmount || !challengeTier) {
        navigate(`${process.env.NEXT_PUBLIC_LANDING_URL}/#getfunded`);
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

  useEffect(() => {
    if (challengeId === null || !selectedPurchaseDetail.challengeLevelId) {
      navigate('/#pricing');
    }
  }, [challengeId, selectedPurchaseDetail.challengeLevelId]);


  //---------------------------- PAYMENT MODAL-----------------------------

  if (isProcessing) return <ProcessingTransaction success={success} />;

  return (
    <div className="text-white bg-mainTheme">
      {
        <>
          <form method="POST" id="myForm" action={process.env.REACT_APP_FISRVE_ACTION_URL}>
            <input type="hidden" name="chargetotal" value={fiservResponse?.chargeTotal} />
            <input type="hidden" name="checkoutoption" value={fiservResponse?.checkoutOption} />
            <input type="hidden" name="currency" value={fiservResponse?.currency} />
            <input type="hidden" name="hash_algorithm" value={fiservResponse?.hashAlgorithm} />
            <input type="hidden" name="responseFailURL" value={fiservResponse?.responseFailURL} />
            <input type="hidden" name="responseSuccessURL" value={fiservResponse?.responseSuccessURL} />
            <input type="hidden" name="transactionNotificationURL" value={fiservResponse?.transactionNotificationURL} />
            <input type="hidden" name="storename" value={fiservResponse?.storeName} />
            <input type="hidden" name="timezone" value={fiservResponse?.timezone} />
            <input type="hidden" name="txndatetime" value={fiservResponse?.txnDateTime} />
            <input type="hidden" name="txntype" value={fiservResponse?.txnType} />
            <input type="hidden" name="hashExtended" value={fiservResponse?.base64Hash} />
            <input type="hidden" name="oid" value={fiservResponse?.oid} />
            <input type="hidden" name="language" value={fiservResponse?.language} />
            <input
              style={{ display: 'none' }}
              type="submit"
              hidden
              value="Send Form"
              className="btn btn-primary"
              ref={input => (myRefname = input)}
            />
          </form>
        </>
      }

      <ReturningCustomer></ReturningCustomer>

      {notification && <Notification message={notification.message} type={notification.type} />}
      <div className="flex flex-col justify-start w-full gap-4 px-2 py-4 text-white lg:flex-row lg:justify-center bg-mainTheme">
        <div>
          <p className="text-2xl font-[500]">Select Your Payment Method</p>
          <p className="pb-3 text-sm font-light text-gray-400 ">
            Note: If one payment method does not work, please feel free to try another option from our list
          </p>

          {/*  */}
          <div className="flex flex-col items-start justify-center flex-1 w-full gap-4 md:flex-row ">
            <NewPaymentModal
              cardMethod={cardMethod}
              setCardMethod={setCardMethod}
              tailoredPayMethod={tailoredPayMethod}
              setTailoredPayMethod={setTailoredPayMethod}
              setIsTailoredPayInProgress={setIsTailoredPayInProgress}
              setNuveiPayStatus={setNuveiPayStatus}
              fiserveMethod={fiserveMethod}
              setFiserveMethod={setFiserveMethod}
              setWalletMethod={setWalletMethod}
              challengeType={challengeType + ' Phase 1'}
              challengeLevel={challenge}
              challengeId={selectedPurchaseDetail.challengeId}
              challengeLevelId={selectedPurchaseDetail.challengeLevelId}
              discountCode={couponCode}
              email={email}
              billingInfoTotal={priceAfterDiscount}
              discountCodeApplied={couponCode}
              fullname={fullname}
              phoneNumber={userDetails.phoneNumber}
              address={address}
              closeModal={closeModal}
              ccNumber={ccNumber}
              setCCNumber={setCCNumber}
              ccNumberMask={ccNumberMask}
              setCCNumberMask={setCCNumberMask}
              cvv={cvv}
              setCvv={setCvv}
              expiryDate={expiryDate}
              setExpiryDate={setExpiryDate}
              name={name}
              setName={setName}
              ccLogo={ccLogo}
              setCCLogo={setCCLogo}
              processing={processing}
              setProcessing={setProcessing}
              inputValidationType={inputValidationType}
            ></NewPaymentModal>

            <div className=" scrollbar-hide flex flex-col lg:w-[380px] w-full gap-4 p-4 box">
              <div className="flex flex-col gap-2 ">
                <p>Challenge</p>
                <p className="text-[30px] text-mainColor font-[600]">Pro Traders Funded Challenge</p>
              </div>
              <div className="border-t border-gray-400/20 border-1"></div>
              <div>
                <p className="pb-1 text-xs font-light">Email {email}</p>
              </div>
              <div className="flex justify-between text-xs text-gray-400 ">
                <div className="flex flex-col gap-1">
                  <p>Account Size:</p>{' '}
                  <p className="text-sm">
                    <b>{selectedPurchaseDetail.label}</b>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p>Challenge Type</p>{' '}
                  <p className="text-sm">
                    <b>{selectedPurchaseDetail.steps}</b>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p>Trading Platform:</p>{' '}
                  <p className="text-sm">
                    <b>MetaTrader 5 (MT5)</b>
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-400/20 border-1"></div>

              <div className="space-y-5">
                <input
                  type="text"
                  className="w-full h-[40px] border-1 border-secGrayTheme rounded-lg flex px-2 font-normal bg-secTheme"
                  placeholder="Add a discount code for discounts"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  required
                />
                <button className="w-full py-2 text-white rounded-md bg-mainBlue" onClick={handleApplyDiscountCode} disabled={!couponCode}>
                  Apply discount code
                </button>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-between">
                    <p>Subtotal</p> <p>${billingInfo}.00</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p>Total</p> <p>${priceAfterDiscount}</p>
                  </div>
                </div>
                {cardMethod && (
                  <button
                    disabled={isFiservInProgress || processing}
                    className="w-full py-2 text-black rounded-md bg-mainColor"
                    onClick={submitCardCharge}
                  // onClick={confirm}
                    onClick={createFACOrder}
                    // onClick={confirm}
                  >
                    {processing ? 'Processing...' : `Pay $${priceAfterDiscount} Now`}
                  </button>
                )}
                {tailoredPayMethod && (
                    <button
                        disabled={isTailoredPayInProgress || processing}
                        className="w-full py-2 text-black rounded-md bg-mainColor"
                        onClick={createTailoredPayOrder}
                        // onClick={confirm}
                    >
                      {isTailoredPayInProgress ? 'Processing...' : `Pay $${priceAfterDiscount} Now`}
                    </button>
                )}
                {nuveiPayStatus && (
                  <button
                    disabled={isFiservInProgress || processing}
                    className="w-full py-2 text-black rounded-md bg-mainColor"
                    onClick={placeNurveiOrder}
                  // onClick={confirm}
                  >
                    {processing ? 'Processing...' : `Pay $${priceAfterDiscount} Now`}
                  </button>
                )}
                {fiserveMethod && (
                  <button
                    disabled={isFiservInProgress}
                    className="w-full py-2 text-black rounded-md bg-mainColor"
                    onClick={async () => {
                      await handleFiservOrder();
                    }}
                  // onClick={confirm}
                  >
                    {isFiservInProgress ? 'Loading...' : `Pay $${priceAfterDiscount} Now`}
                  </button>
                )}

                {walletMethod && walletBalance?.availableBalance > 0 && Number(walletBalance?.availableBalance) >= Number(priceAfterDiscount) && (
                  <button
                    disabled={isWalletInProgress}
                    className="w-full py-2 text-black rounded-md bg-mainColor"
                    onClick={async () => {
                      await handleWalletOrder();
                    }}
                  // onClick={confirm}
                  >
                    {isWalletInProgress ? 'Loading...' : `Pay $${priceAfterDiscount} Now`}
                  </button>
                )}

                <div className="flex items-start justify-start">
                  <p className="text-xs font-light">
                    By clicking the button, you agree to our{' '}
                    <span className="underline cursor-pointer blue">
                      <a href="/terms">Terms of Service</a>
                    </span>{' '}
                    as well as{' '}
                    <span className="underline cursor-pointer blue">
                      <a href="/terms#PaymentandFundingPolicy">Terms of Sale</a>.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCheckout;
