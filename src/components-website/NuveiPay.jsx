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
import InputMask from 'react-input-mask';
import axios from 'axios';
import {styled} from '@mui/material/styles';
import {purchaseChallenge} from "../api";
import {useNavigate} from "react-router-dom";

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
const NuveiPay = ({
                      cardMethod,
                      tailoredPayMethod,
                      setTailoredPayMethod,
                      setNuveiPayStatus,
                      expanded,
                      setCardMethod,
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
    const navigate = useNavigate();
    const [safeCharge, setSafeCharge] = useState();
    const [showApplePay, setShowApplePay] = useState(false);

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

    async function createFACOrder() {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_PTF_API}/payment/fac/order`, {
                cardHolderName: name,
                cardNumber: ccNumber,
                cvv,
                expiryDate,
                challengeId,
                challengeLevel,
                discountCode: discountCode ? discountCode : null
            }, {
                withCredentials: true, headers: {
                    'Content-Type': 'application/json'
                }
            });

            const orderData = response.data;

            if (orderData.orderNo) {
                return orderData.orderNo;
            } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})` : JSON.stringify(orderData);

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            return `Could not initiate PayPal Checkout...${error}`;
        }
    }

    const handleCreditCardInput = event => {
        const value = event.target.value;
        let mask = '9999-9999-9999-9999';
        let logo = null;
        if (/^3[47]/.test(value)) {
            mask = '9999-999999-99999';
        }
        if (/^4`[1-9]`/.test(value)) {
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
        try {
            if (window.ApplePaySession) {
                const merchantIdentifier = 'staging.protradersfund.com';
                const promise = window.ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
                // Display Apple Pay Button
                promise.then(function (canMakePayments) {
                    if (canMakePayments) {
                        setShowApplePay(true);
                        document.getElementById('apple-pay-button').addEventListener('click', function () {
                            const data = {
                                source: 'NUVEI', challengeLevelId
                            };
                            if (discountCode) {
                                Object.assign(data, {
                                    couponCode: discountCode
                                });
                            }
                            purchaseChallenge(data).then((response) => {
                                const safeCharge = window.SafeCharge({
                                    sessionToken: response.nuveiSessionToken,
                                    env: process.env.REACT_APP_NUVEI_ENV,
                                    merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
                                    merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID
                                })
                                safeCharge.createApplePayPayment({
                                    sessionToken: response.nuveiSessionToken,     //received from openOrder API
                                    env: process.env.REACT_APP_NUVEI_ENV,
                                    merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
                                    merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID,
                                    countryCode: 'US',
                                    currencyCode: 'USD',
                                    billingAddress: {
                                        firstName: 'John',
                                        lastName: 'Smith',
                                        country: 'US',
                                        email: 'john.smith@email.com'
                                    },
                                    userDetails: {
                                        firstName: 'John',
                                        lastName: 'Smith',
                                        country: 'US',
                                        email: 'john.smith@email.com'
                                    },
                                    shippingAddress: {
                                        firstName: 'John',
                                        lastName: 'Smith',
                                        address: '22 Main Street',
                                        city: 'Boston',
                                        zip: '02460',
                                        state: 'MA',
                                        country: 'US'
                                    },
                                    total: {
                                        label: 'Imagine Innovation', amount: billingInfoTotal
                                    }
                                }, function (res) {
                                    console.log(res);
                                    document.getElementById('result').innerHTML = JSON.stringify(res, null, 4);
                                })
                            }, (err) => {
                                console.error(err)
                            })
                        });
                    }
                });
            }
        } catch (err) {
            console.error(err)
        }
        if (billingInfoTotal) {
            document.getElementById('googlePayContainer').innerHTML = "";
            onGooglePayLoaded()
        }
    }, [billingInfoTotal])

    var show = function (elem) {
        elem.classList.add('is-visible');
    };

    var hide = function (elem) {
        elem.classList.add('is-hide');
    };


    let allowCreditCards = true;
    let allowPrepaidCards = false;
    const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
    const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];
    let assuranceDetailsRequired = false;
    let billingAddressParameters = {
        format: "MIN", phoneNumberRequired: false
    };
    let billingAddressRequired = false;
    let checkoutOption = "COMPLETE_IMMEDIATE_PURCHASE";
    let gateway = "nuveidigital";
    let gatewayMerchantId = "googletest";
    let googleMerchantId = "BCR2DN6TR6Y2XRC2";
    let merchantName = "Imagine Innovation ";

    let tokenizationType = "PAYMENT_GATEWAY"; // М
    let totalPriceStatus = "FINAL";
    let googlePayEnv = 'TEST' // 'TEST' or 'PRODUCTION'
    let currency = "USD";


    const baseCardPaymentMethod = {
        type: 'CARD', parameters: {
            allowedAuthMethods: allowedCardAuthMethods,
            allowedCardNetworks: allowedCardNetworks,
            allowCreditCards: allowCreditCards,
            allowPrepaidCards: allowPrepaidCards,
            assuranceDetailsRequired: assuranceDetailsRequired,
            billingAddressRequired: billingAddressRequired,
            billingAddressParameters: billingAddressParameters,
        }
    };

    function getGoogleTransactionInfo() {
        return {
            currencyCode: currency,
            totalPriceStatus: totalPriceStatus,
            totalPrice: billingInfoTotal,
            checkoutOption: checkoutOption
        };
    }

    const tokenizationSpecification = {
        type: tokenizationType, parameters: {
            'gateway': gateway, 'gatewayMerchantId': gatewayMerchantId
        }
    };

    function getGooglePaymentDataRequest() {
        const paymentDataRequest = Object.assign({}, baseRequest);
        paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
        paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
        paymentDataRequest.merchantInfo = {
            merchantId: googleMerchantId, merchantName: merchantName
        };
        return paymentDataRequest;
    }


    const baseRequest = {
        apiVersion: 2, apiVersionMinor: 0
    };

    const cardPaymentMethod = Object.assign({}, baseCardPaymentMethod, {
        tokenizationSpecification: tokenizationSpecification
    });

    let paymentsClient = null;

    function getGoogleIsReadyToPayRequest() {
        return Object.assign({}, baseRequest, {
            allowedPaymentMethods: [baseCardPaymentMethod]
        });
    }

    function getGooglePaymentsClient() {
        if (paymentsClient === null) {
            paymentsClient = new window.google.payments.api.PaymentsClient({
                environment: googlePayEnv
            });
        }
        return paymentsClient;
    }


    function onGooglePayLoaded() {
        const paymentsClient = getGooglePaymentsClient();
        paymentsClient.isReadyToPay(getGoogleIsReadyToPayRequest())
            .then(function (response) {
                if (response.result) {
                    addGooglePayButton();
                }
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    function addGooglePayButton() {
        const paymentsClient = getGooglePaymentsClient();
        const button = paymentsClient.createButton({
            onClick: onGooglePaymentButtonClicked
        });
        document.getElementById('googlePayContainer').appendChild(button);
    }

    function onGooglePaymentButtonClicked() {
        const paymentDataRequest = getGooglePaymentDataRequest();

        const paymentsClient = getGooglePaymentsClient();
        paymentsClient.loadPaymentData(paymentDataRequest)
            .then(function (paymentData) {
                processPayment(paymentData);
            })
            .catch(function (err) {
                console.error(err);
            });
    }

    function processPayment(paymentData) {
        payWithGooglePay(paymentData);
        // paymentToken = paymentData.paymentMethodData.tokenizationData.token;
    }

    function payWithGooglePay(paymentToken) {
        const data = {
            source: 'NUVEI', challengeLevelId
        };
        if (discountCode) {
            Object.assign(data, {
                couponCode: discountCode
            });
        }
        purchaseChallenge(data).then((response) => {
            const safeCharge = window.SafeCharge({
                env: process.env.REACT_APP_NUVEI_ENV,
                merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
                merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID
            })
            safeCharge.createPayment({
                sessionToken: response.nuveiSessionToken,
                merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
                merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID,
                "paymentOption": {
                    "card": {
                        "externalToken": {
                            "externalTokenProvider": "GooglePay",
                            "mobileToken": JSON.stringify(paymentToken.paymentMethodData),
                        }
                    }
                },
            }, function (crRes) {
                navigate(`/handle-payment-response?transactionId=${response.transactionId}`);
            })
        });
    }

    /*useEffect(() => {
        if (showApplePay) {
            document.getElementById('apple-pay-button').addEventListener('click', function () {
                const data = {
                    source: 'NUVEI', challengeLevelId
                };
                if (discountCode) {
                    Object.assign(data, {
                        couponCode: discountCode
                    });
                }
                purchaseChallenge(data).then((response) => {
                    const safeCharge = window.SafeCharge({
                        env: process.env.REACT_APP_NUVEI_ENV,
                        merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
                        merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID
                    })
                    safeCharge.createApplePayPayment({
                        sessionToken: response.nuveiSessionToken,     //received from openOrder API
                        env: process.env.REACT_APP_NUVEI_ENV,
                        merchantId: process.env.REACT_APP_NUVEI_MERCHANT_ID,
                        merchantSiteId: process.env.REACT_APP_NUVEI_MERCHANT_SITE_ID,
                        countryCode: 'US',
                        currencyCode: 'USD',
                        total: {
                            label: 'Imagine Innovation',
                            amount: billingInfoTotal
                        }
                    }, function(res) {
                        console.log(res);
                        document.getElementById('result').innerHTML = JSON.stringify(res, null, 4);
                    })
                }, (err) => {
                    console.error(err)
                })
            });
        }
    }, [showApplePay])*/

    return (<Accordion
        expanded={expanded === 'panel-nuvei'}
        onChange={handleChange('panel-nuvei')}
        onClick={() => {
            setNuveiPayStatus(true);
            setCardMethod(false);
            setFiserveMethod(false);
            setIsPaypalSelected(false);
            setIsCryptoSelected(false);
            setTailoredPayMethod(false);
        }}
    >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="flex items-center justify-between w-full space-x-3">
                <div className="flex items-center gap-1">
                    <Radio
                        className="text-gray-400 "
                        checked={expanded === 'panel-nuvei'}
                        // Handle onChange if needed
                    />
                    <Typography>Pay (Nuvei)</Typography>
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
            <div className="flex flex-col">
                <div id="googlePayContainer"></div>
                {showApplePay && <button id="apple-pay-button">Pay</button>}
                <p className="pb-2 text-sm">Card holder name</p>
                <input
                    type="text"
                    className="w-full h-[40px] border-1 border-secGrayTheme rounded-lg flex px-2 font-normal bg-secTheme"
                    placeholder="Enter cardholder name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={processing}
                />
                {inputValidationType === 'name' && !name ?
                    <p className="text-xs text-red-500">Please enter a valid name</p> : null}
            </div>
            <div className="flex gap-3">
                <div className="flex flex-col w-[50%]">
                    <p className="pb-2 text-sm">Card number</p>
                    <div
                        className="w-[full] h-[40px] border-1 border-secGrayTheme rounded-lg flex px-2 font-normal bg-secTheme">
                        <InputMask
                            className="border-none w-[90%] border-secGrayTheme bg-secTheme"
                            mask={ccNumberMask}
                            maskChar={null}
                            type="text"
                            id="CardNumber"
                            name="CardNumber"
                            placeholder="Enter card number"
                            value={ccNumber}
                            disabled={processing}
                            onChange={e => handleCreditCardInput(e)}
                        />
                        {ccLogo && <img src={ccLogo} height={25} width={25} alt="card logo"/>}
                    </div>
                    {inputValidationType === 'ccNumber' && !ccNumber ? (
                        <p className="text-xs text-red-500">Please enter a valid card number</p>) : null}
                </div>
                <div className="flex flex-col flex-1">
                    <p className="pb-2 text-sm">Expiry</p>

                    <InputMask
                        mask="99/9999"
                        maskChar={null}
                        type="text"
                        id="ExpiryDate"
                        name="ExpiryDate"
                        placeholder="MM/YYYY"
                        className="w-full h-[40px] border-1 border-secGrayTheme rounded-lg flex px-2 font-normal bg-secTheme"
                        value={expiryDate}
                        disabled={processing}
                        onChange={e => setExpiryDate(e.target.value)}
                    />
                    {inputValidationType === 'expiryDate' && !expiryDate ? (
                        <p className="text-xs text-red-500">Please enter a valid expiry date</p>) : null}
                </div>
                <div className="flex flex-col flex-1">
                    <p className="pb-2 text-sm">CVV</p>
                    <input
                        type="password"
                        id="SecurityCode"
                        placeholder="CVV"
                        minLength={3}
                        maxLength={3}
                        className="w-full h-[40px] border-1 border-secGrayTheme rounded-lg flex px-2 font-normal bg-secTheme"
                        value={cvv}
                        disabled={processing}
                        onChange={e => setCvv(e.target.value)}
                    />
                    {inputValidationType === 'cvv' && !cvv ?
                        <p className="text-xs text-red-500">Please enter a valid CVV</p> : null}
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

                <p className="text-sm font-light text-gray-400">Your transaction is secured with SSL encryption.</p>
            </div>
        </AccordionDetails>
    </Accordion>);
};

export default NuveiPay;
