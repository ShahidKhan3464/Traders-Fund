import {Radio, Typography} from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import React, {useEffect, useState} from 'react';
import visa from '../images/icons/checkout/Payment method icon.svg';
import visacard from '../images/icons/visa.svg';
import mastercard from '../images/icons/mastercard.svg';
import mc from '../images/icons/checkout/Payment method icon-1.svg';
import amex from '../images/icons/checkout/Payment method icon-2.svg';
import discover from '../images/icons/checkout/Payment method icon-3.svg';
import {styled} from '@mui/material/styles';
import {useStore} from "../store";
import {purchaseChallenge} from "../api";
import {showCustomError} from "../utils/utils";
import Notification from "./Notification";
import loading from '../images/loading.svg';

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({theme}) => ({
    border: `none`, '&:not(:last-child)': {
        borderBottom: '1px solid #3b3c3d'
    }, '&:before': {
        display: 'none'
    }
}));

const AccordionSummary = styled(props => <MuiAccordionSummary expandIcon={''} {...props} />)(({theme}) => ({
    backgroundColor: '#141518',

    flexDirection: 'row-reverse', '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1), color: 'white', backgroundColor: '#141518'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: '1rem 2rem', // borderTop: "1px solid #3b3c3d",
    backgroundColor: '#141518', color: 'white'
}));
const TailoredPay = ({
                         cardMethod,
                         setCardMethod,
                         tailoredPayMethod,
                         setTailoredPayMethod,
                         setIsTailoredPayInProgress,
                         setNuveiPayStatus,
                         handleChange,
                         setFiserveMethod,
                         setIsPaypalSelected,
                         setIsCryptoSelected,
                         challengeType,
                         challengeLevel,
                         discountCode,
                         challengeId,
                         challengeLevelId,
                         billingInfoTotal,
                         discountCodeApplied,
                         fullName,
                         phoneNumber,
                         closeModal,
                         ccNumber,
                         setCCNumber,
                         ccNumberMask,
                         setCCNumberMask,
                         cvv,
                         setCvv,
                         expiryDate,
                         setExpiryDate,
                         name,
                         setName,
                         ccLogo,
                         setCCLogo,
                         processing,
                         setProcessing,
                         inputValidationType
                     }) => {
    const [showThreeDS, setShowThreeDS] = useState(false)
    const [loadingThreeDS, setLoadingThreeDS] = useState(true)
    const [gateway, setGateway] = useState()
    const {userData, setUserData} = useStore();
    const [notification, setNotification] = useState(null);

    function cc_format(value) {
        const v = value
            .replace(/\s+/g, '')
            .replace(/[^0-9]/gi, '')
            .substr(0, 16);
        const parts = [];

        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }

        return parts.length > 1 ? parts.join(' ') : value;
    }

    async function createTailoredPayOrder(paymentToken, threedsData) {
        try {
            setIsTailoredPayInProgress(true);
            const data = {
                source: 'TAILORED_PAY', challengeLevelId, paymentToken
            };
            if (discountCode) {
                Object.assign(data, {
                    couponCode: discountCode
                });
            }
            if (threedsData) {
                Object.assign(data, {
                    tailoredPayThreeDSData: threedsData
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

    const handleCreditCardInput = event => {
        const value = event.target.value;
        let mask = '9999-9999-9999-9999';
        let logo = null;
        if (/^3[47]/.test(value)) {
            mask = '9999-999999-99999';
        }
        if (/^4[1-9]/.test(value)) {
            logo = visacard;
        }
        if (/^5[1-5]/.test(value)) {
            logo = mastercard;
        }
        setCCNumberMask(mask);
        setCCNumber(value);
        setCCLogo(logo);
    };

    useEffect(() => {
        if (billingInfoTotal) {
            window.CollectJS.configure({
                'validationCallback': function (field, status, message) {
                    if (status) {
                        const message = field + " is now OK: " + message;
                        console.log(message);
                    } else {
                        const message = field + " is now Invalid: " + message;
                        console.error(message);
                    }
                }, variant: 'inline', styleSniffer: true, callback: (response) => {
                    setShowThreeDS(true)
                    const options = {
                        paymentToken: response.token,
                        currency: 'USD',
                        amount: String(billingInfoTotal),
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        phone: userData.phone,
                        country: userData.countryCode || 'US'

                    };
                    const gateway = window.Gateway.create(process.env.REACT_APP_ZIPPY_PAYMENTS_TAILORED_PAY_PUBLIC_KEY)
                    const threeDS = gateway.get3DSecure();
                    const threeDSecureInterface = threeDS.createUI(options);
                    threeDSecureInterface.start('#threeDSMountPoint');
                    threeDSecureInterface.on('challenge', function (e) {
                        console.log('Challenged');
                        setLoadingThreeDS(false)
                    });

                    threeDSecureInterface.on('complete', function (e) {
                        setShowThreeDS(false)
                        setIsTailoredPayInProgress(false);
                        createTailoredPayOrder(response.token, e)
                    });

                    threeDSecureInterface.on('failure', function (e) {
                        setShowThreeDS(false)
                        setIsTailoredPayInProgress(false);
                        console.error(e);
                    });
                }, 'price': billingInfoTotal, 'currency': 'USD', 'country': userData.country || 'US', fields: {
                    ccnumber: {
                        placeholder: 'CC Number', selector: '#ccnumber'
                    }, ccexp: {
                        placeholder: 'CC Expiration', selector: '#ccexp'
                    }, cvv: {
                        placeholder: 'CVV', selector: '#cvv'
                    },
                    googlePay: {
                        selector: '#googlePayButton', billingAddressRequired: true, billingAddressParameters: {
                            phoneNumberRequired: true, format: 'MIN'
                        }, emailRequired: true, buttonType: 'short', buttonColor: 'white', buttonLocale: 'en'
                    }, applePay: {
                        selector: '#applePayButton',
                        requiredBillingContactFields: ['postalAddress', 'name'],
                        contactFields: ['phone', 'email'],
                        contactFieldsMappedTo: 'billing',
                        totalLabel: 'Pay',
                        type: 'plain',
                        style: {
                            'button-style': 'white-outline', height: '50px', 'border-radius': '0'
                        }
                    }
                }
            });
        }
    }, [billingInfoTotal])

    const isThreeDSContentLoaded = () => {
        const contents = document.querySelector("#threeDSMountPoint");
        const result = contents.innerHTML.trim();
        return !!result.length
    }
    return (<>
        {notification && <Notification message={notification.message} type={notification.type}/>}
        {showThreeDS && <div
            className="fixed z-[10000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={e => {
                e.stopPropagation();
            }}
        >
            <div
                className="flex mx-auto md:h-[400px] h-[400px] md:w-[400px] w-[400px] justify-center items-center relative rounded-md py-4 px-20 bg-white">
                <div id="threeDSMountPoint">
                    {loadingThreeDS && <img src={loading} className="ml-auto"/>}
                </div>
            </div>
        </div>}
        <Accordion
            expanded={tailoredPayMethod}
            onChange={handleChange('panel-tailoredpay')}
            onClick={() => {
                setNuveiPayStatus(false);
                setCardMethod(false);
                setFiserveMethod(false);
                setIsPaypalSelected(false);
                setIsCryptoSelected(false);
                setTailoredPayMethod(true);
            }}
        >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <div className="flex items-center justify-between w-full space-x-3">
                    <div className="flex items-center gap-1">
                        <Radio
                            checked={tailoredPayMethod}
                            className="text-gray-400 "
                            // Handle onChange if needed
                        />
                        <Typography>Card Pay (2)</Typography>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <img src={visa} alt=""/>
                        <img src={mc} alt=""/>
                        <img src={amex} alt=""/>
                        <img src={discover} alt=""/>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="space-y-5">
                <div className="flex gap-3">
                    <div className="flex flex-col w-[50%]">
                        <div id="googlePayButton"></div>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div id="applePayButton"></div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col w-[55%]">
                        <p className="pb-2 text-sm">Card number</p>
                        <div
                            className="w-[full] h-[40px] border-1 border-secGrayTheme rounded-lg flex px-2 font-normal bg-secTheme">
                            <div id="ccnumber"/>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="pb-2 text-sm">Expiry</p>
                        <div id="ccexp"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="pb-2 text-sm">CVV</p>
                        <div id="cvv"/>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-[300]">Amount to be paid:</span>
                    <span className="font-[300]">${billingInfoTotal}</span>
                </div>
                <div className="flex gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.83154 7.5C4.45071 7.5 3.33154 8.61917 3.33154 10V15.8333C3.33154 17.2142 4.45071 18.3333 5.83154 18.3333H14.1649C15.5457 18.3333 16.6649 17.2142 16.6649 15.8333V10C16.6649 8.61917 15.5457 7.5 14.1649 7.5C13.3334 7.50003 6.66671 7.50002 5.83154 7.5ZM9.99821 10C10.919 10 11.6649 10.7458 11.6649 11.6667C11.6649 12.2583 11.2957 12.6733 10.8315 12.9683V15C10.8315 15.46 10.4582 15.8333 9.99821 15.8333C9.53821 15.8333 9.16488 15.46 9.16488 15V12.9683C8.70071 12.6725 8.33154 12.2583 8.33154 11.6667C8.33154 10.7458 9.07738 10 9.99821 10Z"
                            fill="#98A2B3"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.99992 3.33464C8.61921 3.33464 7.49992 4.45392 7.49992 5.83464V7.5013H5.83325V5.83464C5.83325 3.53345 7.69873 1.66797 9.99992 1.66797C12.3011 1.66797 14.1666 3.53345 14.1666 5.83464V7.5013H12.4999V5.83464C12.4999 4.45392 11.3806 3.33464 9.99992 3.33464Z"
                            fill="#98A2B3"
                        />
                    </svg>

                    <p className="text-sm font-light text-gray-400">Your transaction is secured with SSL
                        encryption.</p>
                </div>
            </AccordionDetails>
        </Accordion>

    </>);
};

export default TailoredPay;
