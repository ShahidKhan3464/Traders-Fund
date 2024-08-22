import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import Logo from '../images/PTF LOGO.svg';
import btc from '../images/icons/Bitcoin.svg';
import {BsChevronDown} from 'react-icons/bs';
import {MdArrowBackIos} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';
import {HiOutlineTrash} from 'react-icons/hi';
import Account from '../components/Account';
import {
    addBankAccount,
    getMT5WithdrawalEligibleList,
    getProfile,
    getTradingList,
    getUserProfileDetails,
    postRequestProfitSplit
} from '../api';
import eth from '../images/icons/Pro Traders Fund Ethereum Payment Method.svg';
import successicon from '../images/icons/check-icon.svg';
import './Wallet.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Box, styled} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import CurrencyInput from 'react-currency-input-field';

import FadeLoader from 'react-spinners/FadeLoader';
import Notification from '../components-website/Notification';
import {showCustomError, showCustomSuccess} from '../utils/utils';

const data = [{
    date: 'Jan 26, 2023', method: 'Credit card (****5656)', amount: '$100,000.00', status: 'Processing', invoice: 'PDF'
}, {
    date: 'Jan 26, 2023', method: 'Bitcoin (****5cf4)', amount: '$100,000.00', status: 'Success', invoice: 'PDF'
}, {
    date: 'Jan 26, 2023', method: 'Wire transfer (****5656)', amount: '$100,000.00', status: 'Declined', invoice: 'PDF'
}];

// ! Modal
const BackdropUnstyled = React.forwardRef((props, ref) => {
    const {open, className, ...other} = props;
    return <div className={clsx({'MuiBackdrop-open': open}, className)} ref={ref} {...other} />;
});
BackdropUnstyled.propTypes = {
    className: PropTypes.string.isRequired, open: PropTypes.bool
};
const Modal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
`;
const Backdrop = styled(BackdropUnstyled)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;
const style = theme => ({
    width: 400,
    bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    border: '1px solid currentColor',
    padding: '12px 24px',
    borderRadius: '8px'
});

export default function RequestProfitSplit({activeNav, setActiveNav}) {
    const [searchParams] = useSearchParams();
    const tradingAccountId = searchParams.get('tradingAccountId');
    const navigate = useNavigate();
    const [card, setCard] = useState(false);
    const [crypto, setCrypto] = useState(false);
    const [wire, setWire] = useState(true);
    const [tradingAccounts, setTradingAccounts] = useState([]);
    const [tradingAccount, setTradingAccount] = useState(null);
    const [payoutType, setPayoutType] = useState();
    const [remainingDays, setRemainingDays] = useState(-1)

    // Keep track of amount entered in deposit
    const [valueAmt, setValueAmt] = useState('');
    const [currentPercentage, setCurrentPercentage] = useState();
    const [tradingAccountExists, setTradingAccountExists] = useState(true);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [deleteopen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };
    const [bankopen, setBankOpen] = useState(false);
    const handleBankOpen = () => setBankOpen(true);
    const handleBankClose = () => {
        setBankOpen(false);
        setBankIndex(1);
        setOpen(false);
    };

    const [index, setIndex] = useState(1);
    const [bankindex, setBankIndex] = useState(1);
    const [pageIndex, setPageIndex] = useState(1);
    const [notification, setNotification] = useState(null);
    const [user, setUser] = useState()

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await getTradingList();
                const accounts = response.tradingAccounts;
                setTradingAccounts(accounts);

                if (accounts && accounts.length > 0) {
                    setTradingAccountExists(true);
                } else {
                    setTradingAccountExists(false);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
          try {
            const userData = await getProfile();
            setUser(userData);
          } catch (error) {
            console.error(error);
          }
        })();
      }, []);

    useEffect(() => {
        if (tradingAccounts[0]) {
            handleTradingAccount(tradingAccountId || tradingAccounts[0]?.id, 0);
        }
    }, [tradingAccounts]);

    const continueBtn = () => {
        if (index < 4) {
            setIndex(prevIndex => prevIndex + 1);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    };
    const continueBank = () => {
        if (bankindex < 2) {
            setBankIndex(prevIndex => prevIndex + 1);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    };

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState('#008ffd');
    const [isVisible, setIsVisible] = useState(true);
    const [beneficiaryNameOfAccount, setBeneficiaryNameOfAccount] = useState('');
    const [beneficiaryNameOfBank, setBeneficiaryNameOfBank] = useState('');
    const [beneficiaryBankAddress, setBeneficiaryBankAddress] = useState('');
    const [beneficiaryBankCode, setBeneficiaryBankCode] = useState('');
    const [beneficiaryBankNumber, setBeneficiaryBankNumber] = useState('');
    const [intermediaryBankName, setIntermediaryBankName] = useState('');
    const [intermediaryBankAddress, setIntermediaryBankAddress] = useState('');
    const [intermediarySwiftCode, setIntermediarySwiftCode] = useState('');
    const [intermediaryRoutingCode, setIntermediaryRoutingCode] = useState('');
    const [bankData, setBankData] = useState([]);
    const [selectedBankAccountId, setSelectedBankAccountId] = useState(null);
    const [maxPayoutAmount, setMaxPayoutAmount] = useState(0);
    const [showAccounts, setShowAccounts] = useState(false);
    const [accountDetails, setAccountDetails] = useState(null);
    const [data, setData] = useState(null);
    const [withdrawalInProgress, setWithdrawalInProgress] = useState(null);
    const [dataList, setDataList] = useState([])
    const [traderProfitShareAmount, setTraderProfitShareAmount] = useState(0);
    const [PTFShareAmount, setPTFShareAmount] = useState(0);
    const [processingFee, setProcessingFee] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);

    const fetchMT5WithdrawalEligibleList = async id => {
        try {
            const response = await getMT5WithdrawalEligibleList(id);
            setData(response);
            if (response.payoutAvailabilityDate) {
                const inputDate = new Date(response.payoutAvailabilityDate);
                const currentDate = new Date();
                const timeDiff = inputDate.getTime() - currentDate.getTime();
                const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                const diff = Math.abs(daysDiff);
                setRemainingDays(diff)
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };


    const handleClose = async () => {
        const bankData = {
            beneficiaryNameOfAccount,
            beneficiaryNameOfBank,
            beneficiaryBankAddress,
            beneficiaryBankCode,
            beneficiaryBankNumber,
            intermediaryBankName,
            intermediaryBankAddress,
            intermediarySwiftCode,
            intermediaryRoutingCode
        };

        try {
            const response = await addBankAccount(bankData);
            setOpen(false);
            setBankIndex(1);
            setIndex(1);
            showCustomSuccess(setNotification, response.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };
    //! CRYPTO
    const [openNetwork, setOpenNetwork] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState('Select withdrawal network');
    const networkOptions = ['ETHERIUM STANDARD NETWORK', 'BITCOIN STANDARD NETWORK'];
    const [openCoin, setOpenCoin] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState('BTC');
    const coinOptions = [[<img src={btc} alt=""/>, 'Bitcoin'], [<img src={eth} alt=""/>, 'Ethereum']];
    const [bitcoin, setBitcoin] = useState(true);
    const [ethereum, setEthereum] = useState(false);
    const [kycDocdata, setKycDocdata] = useState([]);

    const fetchUserProfileData = async () => {
        try {
            const response = await getUserProfileDetails();
            setKycDocdata(response?.KYC)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserProfileData()
    }, []);

    useEffect(() => {
        setActiveNav(false);
        window.scrollTo(0, 0);
        // timer to make the loading component visible after 2000 milliseconds (2 seconds)
    }, []);

    const handleRequestProfitSplit = async () => {
        console.log('userrrr:', user)
        if(user?.kycStatus !== 'APPROVED'){
            if (kycDocdata.filter(d => d.status === 'APPROVED').length < 4) {
                if (kycDocdata.length >= 3) {
                    navigate('/kyc-document-status');
                } else {
                    navigate('/verification');
                }
            }
        }
        if (tradingAccount?.id) {
            setWithdrawalInProgress(true)
            try {
                const response = await postRequestProfitSplit(tradingAccount.id, Number(valueAmt), payoutType);
                showCustomSuccess(setNotification, response.message);
                await fetchMT5WithdrawalEligibleList(tradingAccount.id)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    showCustomError(setNotification, error.response.data.message);
                } else {
                    showCustomError(setNotification, error.message);
                }
            } finally {
                setWithdrawalInProgress(false);
            }
        } else {
            showCustomError(setNotification, 'Trading Account is not selected');
        }
    };

    const handleAccsOpen = () => setShowAccounts(!showAccounts);

    const handleAccsClose = () => {
        setShowAccounts(false);
    };

    const handleTradingAccount = (accountId, index) => {
        setTradingAccount(tradingAccounts?.find(t => t?.id === accountId) || tradingAccounts[index]);
        localStorage.setItem('currentTradingAccount', JSON.stringify(tradingAccounts[index]));
        (async () => {
            await fetchMT5WithdrawalEligibleList(accountId);
        })();

    };

    const withdrawableAmount = new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(data?.profitAmount || 0);


    const calculatePayout = (amount, type) => {
        const traderProfitSharePercentage = data?.profitSplitPercentage
        const PTFProfitPercentage = data?.PTFSplitPercentage
        let payoutFeePercentage = data?.payoutFeePercentage
        if (type) {
            payoutFeePercentage = type === 'INSTANT' ? payoutFeePercentage : 0;
            let calculatedProcessingFee = 0
            if (type === 'INSTANT') {
                calculatedProcessingFee = payoutFeePercentage * amount / 100
            }
            setProcessingFee(calculatedProcessingFee)
            const calculatedTraderProfitShareAmount = traderProfitSharePercentage * amount / 100
            setTraderProfitShareAmount(calculatedTraderProfitShareAmount)
            setPTFShareAmount(PTFProfitPercentage * amount / 100)
            setFinalAmount(calculatedTraderProfitShareAmount - calculatedProcessingFee)
        }
    }

    return (<div
        className="flex min-h-[100vh] lg:flex-row flex-col lg:justify-center justify-start items-center
    w-full gap-4 mt-2 text-white lg:items-start px-2"
    >
        {pageIndex === 1 ? (<>
            {open ? (<>
                {crypto ? (<>
                    <Modal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open}
                        onClose={() => setOpen(false)}
                        slots={{backdrop: Backdrop}}
                    >
                        <Box sx={style} className="space-y-3">
                            <div className="flex items-center justify-between mb-5">
                                <p className="text-lg">Add crypto wallet address</p>
                                <button
                                    onClick={() => {
                                        handleClose();
                                    }}
                                >
                                    <GrClose></GrClose>
                                </button>
                            </div>
                            <p>Network</p>
                            <div
                                className="flex justify-between gap-2 py-1 text-xs bg-gray-100 rounded-md md:px-2 md:text-base">
                                <div
                                    className={`rounded-md flex justify-center flex-1 items-center py-2 md:px-5 px-2  cursor-pointer gap-2 ${ethereum ? 'text-white bg-secGrayTheme' : 'text-gray-500'}`}
                                    onClick={() => {
                                        setBitcoin(false);
                                        setEthereum(true);
                                    }}
                                >
                                    Ethereum
                                </div>
                                <div
                                    className={`rounded-md flex flex-1 justify-center items-center py-2 md:px-5 px-2  cursor-pointer gap-2 ${bitcoin ? 'text-white bg-secGrayTheme' : 'text-gray-500'}`}
                                    onClick={() => {
                                        setBitcoin(true);
                                        setEthereum(false);
                                    }}
                                >
                                    Bitcoin
                                </div>
                            </div>
                            <div>
                                <p>Wallet address</p>
                                <div
                                    className="bg-white text-black rounded-md flex justify-between border border-blue-600 py-1 px-2 h-[40px] gap-5">
                                    <input type="text" name="" id=""
                                           placeholder="Paste wallet address here"
                                           className="w-full bg-transparent"/>
                                </div>
                                <p className="mt-1 text-xs text-gray-600">
                                    Important: Ensure the address is correct. We can’t return your money
                                    if sent to an incorrect wallet.
                                </p>
                            </div>

                            <div>
                                <p>Add a nickname (Optional)</p>
                                <div
                                    className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                    <input type="text" name="" id="" placeholder=""
                                           className="w-full bg-transparent"/>
                                </div>
                                <p className="mt-1 text-xs text-gray-600">This helps you to recognize
                                    your address.</p>
                            </div>

                            {/* ---SELECT WALLET ADDRESS--- */}
                            <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md"
                                    onClick={continueBtn}>
                                Add wallet address
                            </button>
                        </Box>
                    </Modal>
                </>) : null}
                {wire ? (<>
                    {index === 1 ? (<>
                        {/*  IF USER HAS A SAVED BANK ACCOUNT */}

                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={deleteopen}
                            onClose={handleDeleteClose}
                            slots={{backdrop: Backdrop}}
                        >
                            <Box sx={style} className="space-y-3 text-sm">
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => {
                                            handleDeleteClose();
                                        }}
                                    >
                                        <GrClose></GrClose>
                                    </button>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center text-center">
                                    <HiOutlineTrash
                                        className="text-4xl text-red-500"></HiOutlineTrash>
                                    <p className="text-2xl">Delete bank account</p>
                                    <p className="font-light">Are you sure you want to delete
                                        account (Bank of America ****6545) ?</p>
                                </div>

                                <button className="w-full py-3 text-white bg-red-500 rounded-md"
                                        onClick={handleDeleteClose}>
                                    Delete
                                </button>
                                <button className="w-full py-3 rounded-md"
                                        onClick={handleDeleteClose}>
                                    No, cancel
                                </button>
                            </Box>
                        </Modal>
                        {bankindex === 1 ? (<Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleBankClose}
                            slots={{backdrop: Backdrop}}
                        >
                            <Box sx={style} className="space-y-3 text-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-lg">Add Bank Account</p>
                                    <button onClick={() => setOpen(false)}>
                                        <GrClose></GrClose>
                                    </button>
                                </div>

                                <p className="text-lg">Beneficiary bank details</p>
                                <div>
                                    <p>Name on account</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            onChange={e => setBeneficiaryNameOfAccount(e.target.value)}
                                            value={beneficiaryNameOfAccount}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="First and last name"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-600">
                                        Important: The name on the bank account you are
                                        withdrawing to must match the name on the account you
                                        are
                                        withdrawing from.
                                    </p>
                                </div>
                                <div>
                                    <p>Name of bank</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={beneficiaryNameOfBank}
                                            onChange={e => setBeneficiaryNameOfBank(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter bank name"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p>Bank address</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={beneficiaryBankAddress}
                                            onChange={e => setBeneficiaryBankAddress(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Beneficiary bank address"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>Beneficiary Bank BIC/SWIFT Code</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={beneficiaryBankCode}
                                            onChange={e => setBeneficiaryBankCode(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter code"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-600">
                                        Check any paper or digital banking statements, or look
                                        at your account details on your online banking.{' '}
                                        <br/>
                                        <span
                                            className="underline text-mainBlue">Find my code</span>
                                    </p>
                                </div>
                                <div>
                                    <p>Bank Account Number</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={beneficiaryBankNumber}
                                            onChange={e => setBeneficiaryBankNumber(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter Beneficiary bank account number"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                </div>

                                <button
                                    className="bg-[#00A4E6] text-white w-full py-3 rounded-md"
                                    onClick={continueBank}>
                                    Step 1/2: Add bank account
                                </button>
                            </Box>
                        </Modal>) : null}
                        {bankindex === 2 ? (<Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleBankClose}
                            slots={{backdrop: Backdrop}}
                        >
                            <Box sx={style} className="space-y-3 text-sm">
                                <div className="flex items-center justify-between">
                                    <div className='flex items-center justify-start'>
                                        <div className='cursor-pointer' onClick={() => setBankIndex(1)}>
                                            <MdArrowBackIos/></div>
                                        <p className="text-lg">Add Bank Account</p>
                                    </div>
                                    <button onClick={() => setOpen(false)}>
                                        <GrClose></GrClose>
                                    </button>
                                </div>

                                <div>
                                    <p className="text-lg">Intermediary information</p>
                                    <p className="text-xs text-gray-600 ">
                                        Take care entering your account details (copy + paste is
                                        best) and double-check to make sure you've entered
                                        all the information correctly.
                                    </p>
                                </div>
                                <div>
                                    <p>Intermediary Bank Name</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={intermediaryBankName}
                                            onChange={e => setIntermediaryBankName(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter bank name"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-600">
                                        Important: The name on the bank account you are
                                        withdrawing to must match the name on the account you
                                        are
                                        withdrawing from.
                                    </p>
                                </div>

                                <div>
                                    <p>Bank address</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={intermediaryBankAddress}
                                            onChange={e => setIntermediaryBankAddress(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Intermediary bank address"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>Intermediary Swift Code</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={intermediarySwiftCode}
                                            onChange={e => setIntermediarySwiftCode(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter code"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-600">
                                        Check any paper or digital banking statements, or look
                                        at your account details on your online banking.{' '}
                                        <br/>
                                        <span
                                            className="underline text-mainBlue">Find my code</span>
                                    </p>
                                </div>
                                <div>
                                    <p>Intermediary Routing/Sort Code</p>
                                    <div
                                        className="bg-white text-black rounded-md flex justify-between border border-gray-600 py-1 px-2 h-[40px] gap-5">
                                        <input
                                            value={intermediaryRoutingCode}
                                            onChange={e => setIntermediaryRoutingCode(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Intermediary routing/Sort code"
                                            className="w-full bg-transparent"
                                        />
                                    </div>
                                </div>

                                <button
                                    className="bg-[#00A4E6] text-white w-full py-3 rounded-md"
                                    onClick={handleClose}>
                                    Step 2/2: Add Intermediary Information
                                </button>
                            </Box>
                        </Modal>) : null}
                    </>) : null}
                </>) : null}
            </>) : null}

            <div className="flex flex-col items-start flex-1 w-full gap-4 basis-1/2 lg:flex-col">
                <div className="cursor-pointer flex justify-start items-center gap-1"
                     onClick={() => navigate(-1)}>
                    <MdArrowBackIos/>
                    <p>Withdraw</p>
                </div>
                <p className="mb-2 text-medium text-sm leading-5 ">
                    Account <span className="text-[#667085]">(Switch between accounts)</span>
                </p>
                {!showAccounts && (<button
                    className="flex gap-2 justify-center items-center outline outline-1 py-2 px-4 outline-[#3B3C3D] rounded-md"
                    onClick={e => {
                        handleAccsOpen();
                        e.stopPropagation();
                    }}
                >
                    <span>{tradingAccount?.login}</span> <BsChevronDown></BsChevronDown>
                </button>)}
                {showAccounts && (<div
                    className="z-[9999] absolute top-10 mt-2 md:w-[500px]  w-full outline outline-1  rounded-md"
                    onClick={e => e.stopPropagation()}
                >
                    <div>
                        <div className="flex justify-between items-center p-4 bg-[#141518]">
                            <p>Switch between accounts</p> <AiOutlineClose className="cursor-pointer"
                                                                           onClick={handleAccsClose}></AiOutlineClose>
                        </div>
                        {' '}
                        <div className=" bg-secTheme h-[400px] overflow-x-scroll">
                            {tradingAccounts ? (tradingAccounts.map((account, index) => (<Account
                                index={index}
                                key={account.id}
                                userAccountId={account.id}
                                isFreeAccount={account.isDiscountedAccount}
                                type={account.status || 'PENDING'}
                                accountId={account.login || '000'}
                                accountBalance={account.currentBalance || 0}
                                handleAccsClose={handleAccsClose}
                                handleTradingAccount={handleTradingAccount}
                                login={account.login}
                            />))) : (<p>No data available.</p>)}
                        </div>
                    </div>
                </div>)}
                {remainingDays > 0 &&
                    <p className='text-[#FF0000]'>{`You need to wait ${remainingDays} days to request profit split.`}</p>}
                <div className="pt-4 px-4 space-y-5 lg:w-[400px] w-full box ">
                    <p className="text-[16px] font-medium leading-6">Withdraw from MT5 Wallet to PTF Wallet</p>
                    {/*<div
                        className="bg-[#262729] rounded-md flex justify-between py-1 md:px-2 md:text-base text-xs gap-2">
                        <div
                            className={`rounded-md flex justify-center flex-1 items-center py-2 md:px-5 px-2 cursor-pointer gap-2 ${wire ? 'text-black bg-white' : null}`}
                            onClick={() => {
                                setCard(false);
                                setCrypto(false);
                                setWire(true);
                            }}
                        >
                            {wire ? <img src={bank} alt=""/> : <img src={bankwhite} alt=""/>}
                            Wire Transfer
                        </div>
                        <div
                            className={`rounded-md flex flex-1 justify-center items-center py-2 md:px-5 px-2 cursor-pointer gap-2 ${crypto ? 'text-black bg-white' : null}`}
                            onClick={() => {
                                setCard(false);
                                setCrypto(true);
                                setWire(false);
                            }}
                        >
                            <img src={btc} alt=""/>
                            Crypto
                        </div>
                    </div>*/}
                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium leading-5">Amount</p>
                        <p className="text-sm text-[#00A4E6] font-medium  leading-5">{`Available Amount: ${withdrawableAmount}`}</p>
                    </div>
                    <div
                        className="bg-[#262729] rounded-md flex justify-between py-1 px-2 h-[40px] gap-5 text-white">
                        <CurrencyInput
                            onFocus={e => (e.target.placeholder = '')}
                            onBlur={e => (e.target.placeholder = '$0.00')}
                            id="input-example"
                            name="input-name"
                            defaultValue={valueAmt}
                            placeholder="$0.00"
                            prefix="$"
                            value={valueAmt}
                            onValueChange={value => {
                                setValueAmt(value)
                                if (value) {
                                    calculatePayout(Number(value), payoutType)
                                }
                            }}
                            className="w-full bg-transparent border-0 text-[#FCFCFC] font-normal text-[16px] leading-6"
                        />
                        <div
                            className="flex items-center gap-2  text-[#667085] text-base font-normal leading-6">USD
                        </div>
                    </div>
                    {/* PERCENTAGE SELECTORS */}
                    <div className="flex justify-between gap-2 text-sm">
                        {' '}
                        <div
                            onClick={e => {
                                setCurrentPercentage('25')
                                const amount = ((data?.profitAmount * 25) / 100);
                                setValueAmt(amount.toFixed(2))
                                calculatePayout(amount, payoutType)
                            }}
                            className={`${currentPercentage === '25' ? 'bg-[#00A4E6] text-[#FFFFFF]' : 'bg-[#262729] text-[#667085]'}font-semibold rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer`}
                        >
                            25%
                        </div>
                        <div
                            onClick={e => {
                                setCurrentPercentage('50')
                                const amount = ((data?.profitAmount * 50) / 100);
                                setValueAmt(amount.toFixed(2))
                                calculatePayout(amount, payoutType)
                            }}
                            className={`${currentPercentage === '50' ? 'bg-[#00A4E6] text-[#FFFFFF]' : 'bg-[#262729] text-[#667085]'}font-semibold rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer`}
                        >
                            50%
                        </div>
                        <div
                            onClick={e => {
                                setCurrentPercentage('75')
                                const amount = ((data?.profitAmount * 75) / 100);
                                setValueAmt(amount.toFixed(2))
                                calculatePayout(amount, payoutType)
                            }}
                            className={`${currentPercentage === '75' ? 'bg-[#00A4E6] text-[#FFFFFF]' : 'bg-[#262729] text-[#667085]'}font-semibold rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer`}
                        >
                            75%
                        </div>
                        <div
                            onClick={e => {
                                setCurrentPercentage('100')
                                const amount = data?.profitAmount;
                                setValueAmt(amount.toFixed(2))
                                calculatePayout(amount, payoutType)
                            }}
                            className={`${currentPercentage === '100' ? 'bg-[#00A4E6] text-[#FFFFFF]' : 'bg-[#262729] text-[#667085]'}font-semibold rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer`}
                        >
                            100%
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 text-sm">
                        {' '}
                        <div
                            onClick={e => {
                                setPayoutType('INSTANT')
                                calculatePayout(Number(valueAmt), 'INSTANT')
                            }}
                            className={`${payoutType === 'INSTANT' ? 'bg-[#00A4E6] text-[#FFFFFF]' : 'bg-[#262729] text-[#667085]'} font-semibold rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer`}
                        >
                            Instant
                        </div>
                        <div
                            onClick={e => {
                                setPayoutType('DELAYED')
                                calculatePayout(Number(valueAmt), 'DELAYED')
                            }}
                            className={`${payoutType === 'DELAYED' ? 'bg-[#00A4E6] text-[#FFFFFF]' : 'bg-[#262729] text-[#667085]'} font-semibold rounded-md py-1 px-2 h-[40px] text-white w-full flex justify-center items-center cursor-pointer`}
                        >
                            In 3 days
                        </div>
                    </div>
                    {/* PERCENTAGE SELECTORS */}
                    {crypto && (<div className="space-y-2">
                        <p className="text-sm">Converted to</p>
                        <div className="flex justify-between w-full rounded-md shadow">
                            <input type="text" className="flex-1 px-2 rounded-l-md bg-grayTheme"
                                   onClick={() => setOpenCoin(false)}/>
                            <div class="relative">
                                <button
                                    onClick={() => setOpenCoin(!openCoin)}
                                    class="flex w-full flex-row justify-between items-center gap-1 bg-secGrayTheme rounded-r-md px-2 py-2 text-white"
                                >
                                    <span>{selectedCoin}</span>
                                    <BsChevronDown></BsChevronDown>
                                </button>
                                {openCoin && (<div
                                    id="options"
                                    class="absolute z-[999] bg-grayTheme rounded-md  shadow-xl cursor-pointer text-white w-full"
                                    onClick={() => setOpenCoin(false)}
                                >
                                    <div
                                        href="#"
                                        class="block px-4 py-2 hover:bg-secGrayTheme  "
                                        onClick={() => {
                                            setBitcoin(true);
                                            setEthereum(false);
                                            setSelectedCoin('BTC');
                                        }}
                                    >
                                        BTC
                                    </div>
                                    <div
                                        href="#"
                                        class="block px-4 py-2 hover:bg-secGrayTheme "
                                        onClick={() => {
                                            setBitcoin(false);
                                            setEthereum(true);
                                            setSelectedCoin('ETH');
                                        }}
                                    >
                                        ETH
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>)}
                    <div className="flex items-center justify-between text-sm">
                        <p className="text-[#98A2B3] font-normal text-sm leading-5">Estimated time of
                            arrival </p>
                        <p className="text-[#EAECF0] font-normal text-sm leading-5">{payoutType ? payoutType === 'INSTANT' ? 'Instant' : '~3 days' : '-'}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <p className="text-[#98A2B3] font-normal text-sm leading-5">Traders Profit Share
                            ({data?.profitSplitPercentage?.toFixed(2)}%)</p>
                        <p className="text-[#EAECF0] font-normal text-sm leading-5">${traderProfitShareAmount.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <p className="text-[#98A2B3] font-normal text-sm leading-5">PTF Profit Share
                            ({data?.PTFSplitPercentage?.toFixed(2)}%)</p>
                        <p className="text-[#EAECF0] font-normal text-sm leading-5">${PTFShareAmount.toFixed(2)}</p>
                    </div>
                    {payoutType && payoutType === 'INSTANT' &&
                        <div className="flex items-center justify-between text-sm">
                            <p className="text-[#98A2B3] font-normal text-sm leading-5">Processing Fee
                                ({data?.payoutFeePercentage?.toFixed(2)}%)</p>
                            <p className="text-[#EAECF0] font-normal text-sm leading-5">${processingFee.toFixed(2)}</p>
                        </div>}
                    <div className="flex items-center justify-between text-sm">
                        <p className="text-[#98A2B3] font-normal text-sm leading-5">Amount you will receive</p>
                        <p className="text-[#EAECF0] font-normal text-sm leading-5">${finalAmount.toFixed(2)}</p>
                    </div>
                    <button
                        disabled={!valueAmt || valueAmt <= 0 || !payoutType}
                        onClick={handleRequestProfitSplit}
                        className={`${!valueAmt || valueAmt <= 0 || !payoutType ? 'bg-gray-600' : 'bg-[#00A4E6]'} text-white w-full py-3 rounded-md`}
                    >
                        {withdrawalInProgress ? 'Processing' : 'Confirm and withdraw'}
                    </button>
                    {/* BANK ACCOUNTS */}
                    {wire && (<div className="space-y-4">
                        {/* Bank Account */}
                        {bankData.map(item => {
                            return (<div className="flex items-center justify-between">
                                <div className="flex flex-col text-left ">
                                    <p>{item.beneficiaryNameOfBank}</p>
                                    <p className="font-light ">Ending {item?.beneficiaryBankNumber.slice(item?.beneficiaryBankNumber.length - 4)}</p>
                                </div>
                                <input
                                    type="checkbox"
                                    className="checkbox-round"
                                    checked={selectedBankAccountId === item.id}
                                    onChange={e => setSelectedBankAccountId(item.id)}
                                />
                            </div>);
                        })}
                        {/* Bank Account */}
                    </div>)}
                    {/* CRYPTO ADDRESSES */}
                    {crypto && (<div className="space-y-4">
                        {/* ADDRESS */}
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col text-left ">
                                <p>My Coinbase BTC withdrawal address</p>
                                <p className="font-light ">mkVyPGfmHCSn1YkRA...CnYfibmwDVRco2</p>
                            </div>
                            <input type="checkbox" className="checkbox-round"/>
                        </div>
                        {/* ADDRESS */}
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col text-left ">
                                <p>My Coinbase BTC withdrawal address</p>
                                <p className="font-light ">mkVyPGfmHCSn1YkRA...CnYfibmwDVRco2</p>
                            </div>
                            <input type="checkbox" className="checkbox-round"/>
                        </div>
                    </div>)}
                </div>
            </div>
        </>) : null}
        {pageIndex === 2 && (<>
            {isVisible ? (<div
                className="flex text-center flex-col items-center justify-center mt-10 lg:w-[382px] sm:w-[60%]">
                <FadeLoader loading={loading} color={color}></FadeLoader>
                <p className="text-2xl">Hang on while we process your withdrawal</p>
                <p className="font-light text-gray-200">Please DO NOT close tab, this my take a while.</p>
            </div>) : (<div
                className="flex text-center space-y-3 flex-col items-center justify-center mt-10 lg:w-[512px] sm:w-[60%]">
                <img src={Logo} alt=""/>

                <img src={successicon} alt="" className="h-[60px] aspect-square"/>

                <p className="text-2xl">Your withdrawal was successful</p>
                <p className="font-light text-gray-200">
                    Hi {user?.firstName} your withdrawal was successfully. Please check email for receipt
                    sent to {user?.email}' '}
                </p>
                <button className="w-full py-2 rounded-md bg-mainBlue" onClick={() => navigate('/')}>
                    Go to Dashboard
                </button>
                <button className="w-full py-2 text-sm rounded-md text-mainBlue">Download receipt</button>
            </div>)}
        </>)}
        {notification && <Notification message={notification.message} type={notification.type}/>}
    </div>);
}
