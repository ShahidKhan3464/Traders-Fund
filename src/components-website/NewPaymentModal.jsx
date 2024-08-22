import React, {useEffect, useRef, useState} from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import visa from '../images/icons/checkout/Payment method icon.svg';
import btcicon from '../images/icons/checkout/btc.svg';
import ethicon from '../images/icons/checkout/eth.svg';
import tether from '../images/icons/checkout/tether.svg';
import Notification from '../components-website/Notification';
import CardPayApex from '../components-website/CardPayApex';
import {styled} from '@mui/material/styles';
import {Radio} from '@mui/material';
import {MdErrorOutline} from 'react-icons/md';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {showCustomError} from '../utils/utils';
import {useNavigate} from 'react-router-dom';
import {useStore} from './../store';
import {getWalletBalance, purchaseChallenge} from '../api';
import TailoredPay from "./TailoredPay";

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

const NewPaymentModal = ({
                             cardMethod,
                             setCardMethod,
                             tailoredPayMethod,
                             setTailoredPayMethod,
                             setIsTailoredPayInProgress,
                             setNuveiPayStatus,
                             fiserveMethod,
                             setFiserveMethod,
                             setWalletMethod,
                             challengeType,
                             challengeLevel,
                             challengeId,
                             challengeLevelId,
                             discountCode,
                             email,
                             billingInfoTotal,
                             discountCodeApplied,
                             phoneNumber,
                             address,
                             fullname,
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
    const {selectedPurchaseDetail} = useStore();
    const navigate = useNavigate();

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [btc, setBtc] = useState(true);
    const [eth, setEth] = useState(false);
    const [erc, setErc] = useState(false);
    const [trc, setTrc] = useState(false);
    let myRefname = useRef(null);
    const [notification, setNotification] = useState(null);
    const [isPaypalSelected, setIsPaypalSelected] = useState(false);
    const [m2PayError, setM2PayError] = useState(null);
    const [isCredSelected, setIsCredSelected] = useState(false);
    const [isCryptoSelected, setIsCryptoSelected] = useState(false);
    const [clientToken, setClientToken] = useState(null);
    const [isCryptoPaymentUrlGenerating, setIsCryptoPaymentUrlGenerating] = useState(false);
    const [isFiservInProgress, setIsFiservInProgress] = useState(false);
    const [fiservResponse, setFiservResponse] = useState(null);
    const [fiservCalled, setFiservCalled] = useState(false);
    const [walletBalance, setWalletBalance] = useState()
    const initialOptions = {
        'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        dataClientToken: clientToken,
        components: 'hosted-fields,buttons',
        'enable-funding': 'card',
        'data-sdk-integration-source': 'integrationbuilder_ac'
    };

    useEffect(() => {
        (async () => {
            if (fiservResponse && !fiservCalled) {
                myRefname.click();
                setFiservCalled(true);
            }
        })();
    }, [fiservResponse]);

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

    useEffect(() => {
        fetchWalletBalance()
    }, [])

    const getCryptoPaymentUrl = async currency => {
        try {
            setM2PayError(null);
            setIsCryptoPaymentUrlGenerating(true);
            const data = {
                cryptoCurrency: currency, challengeLevelId: selectedPurchaseDetail.challengeLevelId, source: 'M2PAY'
            };
            if (discountCode) {
                Object.assign(data, {
                    couponCode: discountCode
                });
            }
            const orderData = await purchaseChallenge(data);
            window.location.replace(orderData.paymentUrl);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    return (<div className="py-2 lg:w-[508px] w-full box">
        {<>
            <form method="POST" id="myForm" action={process.env.NEXT_PUBLIC_FISRVE_ACTION_URL}>
                <input type="hidden" name="chargetotal" value={fiservResponse?.chargetotal}/>
                <input type="hidden" name="checkoutoption" value={fiservResponse?.checkoutoption}/>
                <input type="hidden" name="currency" value={fiservResponse?.currency}/>
                <input type="hidden" name="hash_algorithm" value={fiservResponse?.hash_algorithm}/>
                <input type="hidden" name="responseFailURL" value={fiservResponse?.responseFailURL}/>
                <input type="hidden" name="responseSuccessURL" value={fiservResponse?.responseSuccessURL}/>
                <input type="hidden" name="transactionNotificationURL"
                       value={fiservResponse?.transactionNotificationURL}/>
                <input type="hidden" name="storename" value={fiservResponse?.storename}/>
                <input type="hidden" name="timezone" value={fiservResponse?.timezone}/>
                <input type="hidden" name="txndatetime" value={fiservResponse?.txndatetime}/>
                <input type="hidden" name="txntype" value={fiservResponse?.txntype}/>
                <input type="hidden" name="hashExtended" value={fiservResponse?.base64Hash}/>
                <input type="hidden" name="oid" value={fiservResponse?.oid}/>
                <input type="hidden" name="language" value={fiservResponse?.language}/>
                {/*<input*/}
                {/*  type="submit"*/}
                {/*  hidden*/}
                {/*  value="Send Form"*/}
                {/*  className="btn btn-primary"*/}
                {/*  ref={(input) => (myRefname = input)}*/}
                {/*/>*/}
            </form>
        </>}
        {/*<NuveiPay
            inputValidationType={inputValidationType}
            cardMethod={cardMethod}
            setCardMethod={setCardMethod}
            tailoredPayMethod={tailoredPayMethod}
            setTailoredPayMethod={setTailoredPayMethod}
            setNuveiPayStatus={setNuveiPayStatus}
            setIsPaypalSelected={setIsPaypalSelected}
            setIsCryptoSelected={setIsCryptoSelected}
            expanded={expanded}
            handleChange={handleChange}
            setFiserveMethod={setFiserveMethod}
            billingInfoTotal={billingInfoTotal}
            challengeType={challengeType + ' Phase 1'}
            challengeLevel={challengeLevel}
            challengeId={challengeId}
            challengeLevelId={challengeLevelId}
            discountCode={discountCode}
            email={email}
            discountCodeApplied={discountCodeApplied}
            fullname={fullname}
            phoneNumber={phoneNumber}
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
        ></NuveiPay>*/}
        <CardPayApex
            inputValidationType={inputValidationType}
            cardMethod={cardMethod}
            setCardMethod={setCardMethod}
            tailoredPayMethod={tailoredPayMethod}
            setTailoredPayMethod={setTailoredPayMethod}
            setNuveiPayStatus={setNuveiPayStatus}
            setIsPaypalSelected={setIsPaypalSelected}
            setIsCryptoSelected={setIsCryptoSelected}
            handleChange={handleChange}
            setFiserveMethod={setFiserveMethod}
            billingInfoTotal={billingInfoTotal}
            challengeType={challengeType + ' Phase 1'}
            challengeLevel={challengeLevel}
            challengeId={challengeId}
            discountCode={discountCode}
            email={email}
            discountCodeApplied={discountCodeApplied}
            fullname={fullname}
            phoneNumber={phoneNumber}
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
        ></CardPayApex>
        <TailoredPay
            inputValidationType={inputValidationType}
            cardMethod={cardMethod}
            setCardMethod={setCardMethod}
            tailoredPayMethod={tailoredPayMethod}
            setTailoredPayMethod={setTailoredPayMethod}
            setIsTailoredPayInProgress={setIsTailoredPayInProgress}
            setNuveiPayStatus={setNuveiPayStatus}
            setIsPaypalSelected={setIsPaypalSelected}
            setIsCryptoSelected={setIsCryptoSelected}
            handleChange={handleChange}
            setFiserveMethod={setFiserveMethod}
            billingInfoTotal={billingInfoTotal}
            challengeType={challengeType + ' Phase 1'}
            challengeLevel={challengeLevel}
            challengeId={challengeId}
            challengeLevelId={challengeLevelId}
            discountCode={discountCode}
            email={email}
            discountCodeApplied={discountCodeApplied}
            fullname={fullname}
            phoneNumber={phoneNumber}
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
        ></TailoredPay>
        <Accordion
            expanded={expanded === 'panel7'}
            onChange={handleChange('panel7')}
            onClick={() => {
                setNuveiPayStatus(false);
                setCardMethod(false);
                setFiserveMethod(true);
                setIsPaypalSelected(false);
                setIsCryptoSelected(false);
                setTailoredPayMethod(false);
            }}
        >
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                <div className="flex items-center justify-between w-full space-x-3">
                    <div className="flex items-center gap-1">
                        <Radio
                            checked={expanded === 'panel7'}
                            className="text-gray-400 "
                            // Handle onChange if needed
                        />
                        <Typography> {isFiservInProgress ? 'Loading...' : 'Card Pay (3)'}</Typography>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <img src={visa} alt=""/>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="space-y-5">
                {' '}
                <div className="flex items-center gap-2">
                    <span className="font-[300]">Amount to be paid:</span>
                    <span className="font-[300]">${billingInfoTotal}</span>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            onClick={() => {
                setNuveiPayStatus(false);
                setIsCryptoSelected(true);
                setCardMethod(false);
                setFiserveMethod(false);
                setIsPaypalSelected(false);
                setTailoredPayMethod(false);
            }}
        >
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <div className="flex items-center justify-between w-full space-x-3">
                    <div className="flex items-center gap-1">
                        <Radio
                            checked={expanded === 'panel2'}
                            className="text-gray-400 "
                            // Handle onChange if needed
                        />
                        <Typography>Crypto (M2P)</Typography>
                    </div>
                    <div className="flex gap-2">
                        {' '}
                        <img src={btcicon} alt=""/>
                        <img src={ethicon} alt=""/>
                        <img src={tether} alt=""/>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="space-y-5">
                <div
                    className="bg-[#262729] rounded-md sm:flex justify-between py-1 md:px-1 md:text-base text-xs gap-2 sm:h-[44px] h-[88px] grid grid-cols-2">
                    <div
                        className={`rounded-md flex justify-center flex-1 items-center py-2 md:px-3 px-2 cursor-pointer gap-2 ${btc ? 'text-white bg-secGrayTheme' : null}`}
                        onClick={() => {
                            setBtc(true);
                            setEth(false);
                            setErc(false);
                            setTrc(false);
                        }}
                    >
                        Bitcoin
                    </div>
                    <div
                        className={`rounded-md flex flex-1 justify-center items-center py-2 md:px-3 px-2 cursor-pointer gap-2 ${eth ? 'text-white bg-secGrayTheme' : null}`}
                        onClick={() => {
                            setBtc(false);
                            setEth(true);
                            setErc(false);
                            setTrc(false);
                        }}
                    >
                        Ethereum
                    </div>
                    <div
                        className={`rounded-md flex flex-1 justify-center whitespace-nowrap items-center py-2 md:px-3 px-2 cursor-pointer gap-2 ${erc ? 'text-white bg-secGrayTheme' : null}`}
                        onClick={() => {
                            setBtc(false);
                            setEth(false);
                            setErc(true);
                            setTrc(false);
                        }}
                    >
                        USDT ERC20
                    </div>
                    <div
                        className={`rounded-md flex flex-1 justify-center whitespace-nowrap items-center py-2 md:px-3 px-2 cursor-pointer gap-2 ${trc ? 'text-white bg-secGrayTheme' : null}`}
                        onClick={() => {
                            setBtc(false);
                            setEth(false);
                            setErc(false);
                            setTrc(true);
                        }}
                    >
                        USDT TRC20
                    </div>
                </div>

                {btc && (<button
                    className={`w-full py-2 text-white  rounded-md bg-mainBlue `}
                    disabled={isCryptoPaymentUrlGenerating}
                    onClick={async () => {
                        await getCryptoPaymentUrl('BTC');
                    }}
                >
                    Pay with Bitcoin
                </button>)}
                {eth && (<button
                    className={`w-full py-2 text-white  rounded-md bg-mainBlue `}
                    disabled={isCryptoPaymentUrlGenerating}
                    onClick={async () => {
                        await getCryptoPaymentUrl('ETH');
                    }}
                >
                    Pay with Ethereum
                </button>)}
                {erc && (<button
                    className={`w-full py-2 text-white  rounded-md bg-mainBlue `}
                    disabled={isCryptoPaymentUrlGenerating}
                    onClick={async () => {
                        await getCryptoPaymentUrl('UST');
                    }}
                >
                    Pay with USDT ERC20
                </button>)}
                {trc && (<button
                    className={`w-full py-2 text-white  rounded-md bg-mainBlue `}
                    disabled={isCryptoPaymentUrlGenerating}
                    onClick={async () => {
                        await getCryptoPaymentUrl('USX');
                    }}
                >
                    Pay with USDT TRC20
                </button>)}

                <div className="flex gap-1 text-gray-400">
                    <AiOutlineQuestionCircle/>

                    <p className="text-sm font-light leading-4">Your transaction may take 24 hrs to process.</p>
                </div>
            </AccordionDetails>
            {m2PayError && (<div className="p-3 text-red-700 bg-white">
                <div className="flex items-start justify-center gap-3 text-base font-[600]">
                    <MdErrorOutline className="text-xl text-center shrink-0"/>
                    <div className="space-y-2">
                        <iframe srcDoc={m2PayError} className="w-[350px]"/>
                    </div>
                </div>
            </div>)}
        </Accordion>
        <Accordion
            expanded={expanded === 'panel12'}
            onChange={handleChange('panel12')}
            onClick={() => {
                setNuveiPayStatus(false);
                setIsCryptoSelected(true);
                setCardMethod(false);
                setFiserveMethod(false);
                setIsPaypalSelected(false);
                setWalletMethod(true)
            }}
        >
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <div className="flex items-center justify-between w-full space-x-3">
                    <div className="flex items-center gap-1">
                        <Radio
                            checked={expanded === 'panel12'}
                            className="text-gray-400 "
                            // Handle onChange if needed
                        />
                        <Typography>PTF Wallet</Typography>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="space-y-5">
                <div className="flex items-center gap-2">
                    <p className="font-[300]">Current Balance:</p>
                    <p className="font-[300]">${walletBalance?.availableBalance?.toFixed(2)}</p>
                </div>
                {Number(walletBalance?.availableBalance) <= Number(billingInfoTotal) &&
                    <p className='text-[#FF0000] block'>Your PTF Wallet balance is not enough to make the
                        purchase.</p>}
            </AccordionDetails>
            {m2PayError && (<div className="p-3 text-red-700 bg-white">
                <div className="flex items-start justify-center gap-3 text-base font-[600]">
                    <MdErrorOutline className="text-xl text-center shrink-0"/>
                    <div className="space-y-2">
                        <iframe srcDoc={m2PayError} className="w-[350px]"/>
                    </div>
                </div>
            </div>)}
        </Accordion>
        {notification && <Notification message={notification.message} type={notification.type}/>}
    </div>);
};

export default NewPaymentModal;
