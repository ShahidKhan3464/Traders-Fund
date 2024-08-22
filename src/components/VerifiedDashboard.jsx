import React, {useEffect, useState} from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Account from './Account';
import linedown from '../images/icons/Line 02 Down.svg';
import {BsChevronDown} from 'react-icons/bs';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {AiOutlineArrowRight, AiOutlineClose, AiOutlineQuestionCircle} from 'react-icons/ai';
import Calendar from './Calendar';
import '../pages/Dashboard.css';
import Chart from './TradesChart';
import ProgressBar from './ProgressBar';
import CredentialsModal from './CredentialsModal';
import RulesModal from './RulesModal';
import ClipLoader from 'react-spinners/ClipLoader';
import {Alert} from '@mui/material';
import {
    BG_COLOR_BY_TRADING_ACCOUNT_STATUS,
    getDateUpdatedAtString,
    showCustomError,
    showCustomSuccess
} from '../utils/utils';
import {
    advanceToNextPhaseRequest,
    getCalenderDataAPI,
    getChartsDataAPI,
    getTradingAccountDetailsAPI, getUserProfileDetails
} from '../api';
import Notification from '../components-website/Notification';
import DashboardProgressBar from './DashboardProgressBar';
import BreachInformationModal from './BreachInformationModal';
import {
    DOCUMENT_TYPE_TEXT,
    getStatusColor,
    KYC_BUTTON_TEXT,
    KYC_DASHBOARD_STATUS_TEXT,
    KYC_STATUS_TEXT
} from "../utils/constants";

const LightTooltip = styled(({className, ...props}) => <Tooltip {...props}
                                                                classes={{popper: className}}/>)(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11
    }
}));

const override = {
    display: 'block', margin: '0 auto', borderColor: '#0ba6e3'
};

const VerifiedDashboard = tradingAccounts => {
    const today = new Date();
    const [profile, setProfile] = useState(null);
    const [tradingAccount, setTradingAccount] = useState(null);
    const [tradingAccountDetails, setTradingAccountDetails] = useState(null);
    const [percentageBalanceUsed, setPercentageBalanceUsed] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [payableResponse, setPayableResponse] = useState(null);
    const [profit, setProfit] = useState(0);
    const [profitPercentage, setProfitPercentage] = useState(0);
    const [lossRate, setLossRate] = useState(0);
    const [notification, setNotification] = useState('');
    const [currentYear, setCurrentYear] = useState(today.getUTCFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getUTCMonth());

    const [profitTargetAmount, setProfitTargetAmount] = useState(0);
    const [profitTargetPercentage, setProfitTargetPercentage] = useState(0);
    const [profitTargetSoFarValue, setProfitTargetSoFarValue] = useState(0);
    const [profitTargetSoFarPercentange, setProfitTargetSoFarPercentage] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const receivedLogin = searchParams.get('trading_account');
    const [state, setState] = React.useState({
        alertOpen: false, vertical: 'top', horizontal: 'center'
    });
    const {vertical, horizontal, alertOpen} = state;
    const [open, setOpen] = useState(false);
    const [breachModalOpen, setBreachModalOpen] = useState(false);
    const [advancingInProgress, setAdvancingInProgress] = useState(false);

    const [timeDiff, setTimeDiff] = useState({
        days: '00', hours: '00', minutes: '00', seconds: '00'
    });

    const [maxDailyLoss, setMaxDailyLoss] = useState(0);
    const [maxOverallLoss, setMaxOverallLoss] = useState(0);
    const [maxDailyLossAmount, setMaxDailyLossAmount] = useState(0);
    const [maxOverallLossAmount, setMaxOverallLossAmount] = useState(0);
    const [maxOverallLossAmountByHighestBalance, setMaxOverallLossAmountByHighestBalance] = useState(0);
    const [reason, setReason] = useState(null);
    const [profitSplit, setProfitSplit] = useState(0);
    const [funded, setFunded] = useState(false);
    const [difference, setDifference] = useState(0);
    const [percentageLost, setPercentageLost] = useState(0);
    const [overallDifference, setOverallDifference] = useState(0);
    const [overallDifferencePercentage, setOverallDifferencePercentage] = useState(0);
    const [overallDifferencePercentageByHighestBalance, setOverallDifferencePercentageByHighestBalance] = useState(0);
    const [loader, setLoader] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [lastUpdatedString, setLastUpdatedString] = useState(null);
    const [tradeData, setTradeData] = useState(null);
    const [tradingPeriod, setTradingPeriod] = useState(null);
    const [kycDocdata, setKycDocdata] = useState([]);
    const [userActiveStatus, setUserActiveStatus] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleBreachOpen = () => setBreachModalOpen(true);
    const handleBreachClose = () => {
        setBreachModalOpen(false);
    };
    const [rulesopen, setrulesOpen] = useState(false);
    const handlerulesOpen = () => setrulesOpen(true);
    const handlerulesClose = () => {
        setrulesOpen(false);
    };

    const handleAlertClose = () => {
        setState({...state, alertOpen: false});
    };

    const navigate = useNavigate();

    const [showAccounts, setShowAccounts] = useState(false);

    const handleAccsOpen = () => setShowAccounts(!showAccounts);

    const handleAccsClose = () => {
        setShowAccounts(false);
    };

    const handleTradingAccount = (accountId, index) => {
        setTradingAccount(tradingAccounts.accounts[index]);
        localStorage.setItem('currentTradingAccount', JSON.stringify(tradingAccounts.accounts[index]));
        (async () => {
            await fetchData(accountId);
        })();
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (startDate) {
                const now = new Date();
                const inception = new Date(startDate);

                // Converting both times to UTC
                const utcNow = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
                const utcInception = Date.UTC(inception.getUTCFullYear(), inception.getUTCMonth(), inception.getUTCDate(), inception.getUTCHours(), inception.getUTCMinutes(), inception.getUTCSeconds());

                const diffInSeconds = Math.abs((utcNow - utcInception) / 1000);

                const days = Math.floor(diffInSeconds / 86400);
                const hours = Math.floor((diffInSeconds / 3600) % 24);
                const minutes = Math.floor((diffInSeconds / 60) % 60);
                const seconds = Math.floor(diffInSeconds % 60);

                setTimeDiff({
                    days: String(days).padStart(2, '0'),
                    hours: String(hours).padStart(2, '0'),
                    minutes: String(minutes).padStart(2, '0'),
                    seconds: String(seconds).padStart(2, '0')
                });
            } else {
                setTimeDiff({
                    days: '00', hours: '00', minutes: '00', seconds: '00'
                });
            }
        }, 500);

        return () => clearInterval(intervalId);
    }, [startDate]);

    const getTradingAccountDetails = async tradingAccountId => {
        try {
            const accountDetailsResponse = await getTradingAccountDetailsAPI(tradingAccountId);
            const calculatedProfitPercentage = accountDetailsResponse?.initialBalance ? ((accountDetailsResponse?.equity - accountDetailsResponse?.initialBalance) * 100) / accountDetailsResponse?.initialBalance : 0;
            const calculatedProfit = accountDetailsResponse.equity - accountDetailsResponse.initialBalance;
            const loseRateCalculated = accountDetailsResponse.winRate ? 1 - accountDetailsResponse.winRate : 0;
            const maxDailyAmount = accountDetailsResponse.Challenge.maxDailyLoss * accountDetailsResponse.openingBalance;
            const maxOverallAmount = accountDetailsResponse.Challenge.maxOverallLoss * accountDetailsResponse.initialBalance;
            const maxOverallAmountByHighestBalance = accountDetailsResponse.Challenge.maxOverallLoss * accountDetailsResponse.highestBalance;
            //Max Daily Loss
            let difference = accountDetailsResponse.maxDrawdownDaily;
            let percentageLost = accountDetailsResponse.openingBalance ? (difference * 100) / accountDetailsResponse.openingBalance : 0;
            //Max Overall Loss
            let overallDifference = accountDetailsResponse.maxDrawdownOverall;
            let overallDifferencePercentage = accountDetailsResponse.initialBalance ? (overallDifference * 100) / accountDetailsResponse.initialBalance : 0;
            let overallDifferencePercentageByHighestBalance = accountDetailsResponse.highestBalance ? (overallDifference * 100) / accountDetailsResponse.highestBalance : 0;

            const profitTargetAmount = accountDetailsResponse.Challenge?.profitTarget * accountDetailsResponse?.initialBalance;
            const profitTargetPercentage = accountDetailsResponse?.Challenge.profitTarget * 100;
            const profitTargetSoFarValue = accountDetailsResponse.currentBalance - accountDetailsResponse.initialBalance;
            const profitTargetSoFarPercentage = (profitTargetSoFarValue * accountDetailsResponse.Challenge.profitTarget * 100) / (accountDetailsResponse.Challenge.profitTarget * accountDetailsResponse.initialBalance);

            setProfitTargetAmount(profitTargetAmount);
            setProfitTargetPercentage(profitTargetPercentage);
            setProfitTargetSoFarValue(profitTargetSoFarValue > 0 ? profitTargetSoFarValue : 0);
            setProfitTargetSoFarPercentage(profitTargetSoFarPercentage > 0 ? profitTargetSoFarPercentage : 0);

            if (overallDifference > 0) {
                overallDifference = 0;
            }
            if (overallDifferencePercentage > 0) {
                overallDifferencePercentage = 0;
            }
            if (overallDifferencePercentageByHighestBalance > 0) {
                overallDifferencePercentageByHighestBalance = 0;
            }
            if (difference > 0) {
                difference = 0;
            }
            if (percentageLost > 0) {
                percentageLost = 0;
            }

            setProfit(calculatedProfit);
            setProfitPercentage(calculatedProfitPercentage);
            setTradingAccountDetails(accountDetailsResponse);
            setPercentageBalanceUsed(accountDetailsResponse?.initialBalance ? ((accountDetailsResponse?.currentBalance - accountDetailsResponse?.initialBalance) * 100) / accountDetailsResponse?.initialBalance : 0);
            setStartDate(accountDetailsResponse?.firstTradeDate);
            setLossRate(loseRateCalculated);
            setMaxDailyLossAmount(maxDailyAmount);
            setDifference(difference);
            setMaxDailyLoss(accountDetailsResponse.Challenge.maxDailyLoss * 100);
            setMaxOverallLoss(accountDetailsResponse.Challenge.maxOverallLoss * 100);
            setMaxOverallLossAmount(maxOverallAmount);
            setMaxOverallLossAmountByHighestBalance(maxOverallAmountByHighestBalance);
            setTradingPeriod(accountDetailsResponse.Challenge.tradingPeriod);
            setPercentageLost(percentageLost);
            setOverallDifference(overallDifference);
            setOverallDifferencePercentage(overallDifferencePercentage);
            setOverallDifferencePercentageByHighestBalance(overallDifferencePercentageByHighestBalance);
            if (accountDetailsResponse && accountDetailsResponse.updatedAt) {
                setLastUpdatedString(getDateUpdatedAtString(new Date(accountDetailsResponse.updatedAt)));
            }
            if (accountDetailsResponse.status === 'ADVANCING_IN_PROGRESS' || accountDetailsResponse.status === 'ADVANCING_REQUEST') {
                setAdvancingInProgress(true);
            } else {
                setAdvancingInProgress(false);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const getCalenderData = async (tradingAccountId, currentMonth, currentYear) => {
        try {
            const response = await getCalenderDataAPI(tradingAccountId, currentMonth, currentYear);
            setTradeData(response.tradeData);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const fetchData = async id => {
        if (tradingAccounts && tradingAccounts.accounts && tradingAccounts.accounts.length) {
            await getTradingAccountDetails(id);
            await getChartData(id);
            await getCalenderData(id, currentMonth, currentYear);
        }
    };
    useEffect(() => {
        setLoader(false);
        (async () => {
            try {
                if (tradingAccounts && tradingAccounts.accounts && tradingAccounts.accounts.length && !tradingAccount) {
                    if (receivedLogin) {
                        for (const account of tradingAccounts.accounts) {
                            if (Number(String(account.login)) === Number(String(receivedLogin))) {
                                setTradingAccount(account);
                                await fetchData(account.id);
                                break;
                            }
                        }
                    } else {
                        const currentTradingAccount = JSON.parse(localStorage.getItem('currentTradingAccount'));
                        let found = false;
                        if (currentTradingAccount) {
                            for (const account of tradingAccounts.accounts) {
                                if (account.id === currentTradingAccount.id) {
                                    found = true;
                                }
                            }
                        }
                        if (currentTradingAccount && currentTradingAccount.id && found) {
                            await fetchData(currentTradingAccount.id);
                            setTradingAccount(currentTradingAccount);
                        } else {
                            await fetchData(tradingAccounts.accounts[0].id);
                            setTradingAccount(tradingAccounts.accounts[0]);
                        }
                    }
                }
            } catch (err) {
                console.log(err);
                setLoader(true);
            }
        })();
    }, [tradingAccounts]);

    const getChartData = async tradingAccountId => {
        try {
            const response = await getChartsDataAPI(tradingAccountId, 1, 25);
            setChartData(response.trades);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const onAdvance = newState => async () => {
        if (advancingInProgress) {
            showCustomSuccess(setNotification, `This trading account is being advanced to next phase, we will notify you via email when advancing to the next phase is successful`, 7000);
        } else if (!tradingAccountDetails || tradingAccountDetails.status !== 'READY_TO_ADVANCE') {
            if (!reason) {
                setReason(`Trading account must have READY TO ADVANCE status in order advance to next phase`);
            }
            setState({...newState, alertOpen: true});
        } else {
            setReason(null);
            setAdvancingInProgress(true);
            try {
                await advanceToNextPhaseRequest(tradingAccountDetails.id);
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    showCustomError(setNotification, error.response.data.message);
                } else {
                    showCustomError(setNotification, error.message);
                }
                setState({...newState, alertOpen: true});
                setAdvancingInProgress(false);
            }
        }
    };

    useEffect(() => {
        if (tradingAccount && currentYear) {
            (async () => {
                await getCalenderData(tradingAccount.id, currentMonth, currentYear);
            })(currentMonth, currentYear);
        }
    }, [currentMonth]);

    const formatCurrency = amount => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
    };

    const fetchUserProfileData = async () => {
        try {
            const response = await getUserProfileDetails();
            setProfile(response)
            setKycDocdata(response?.KYC)
            setUserActiveStatus(response?.kycStatus)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserProfileData()
    }, []);

    const handleRequestProfitSplit = () => {
        if (userActiveStatus === 'APPROVED') {
            navigate('/Payout');
        } else {
            if (kycDocdata.filter(d => d.status === 'APPROVED').length < 4) {
                if (kycDocdata.length >= 3) {
                    navigate('/kyc-document-status');
                } else {
                    navigate('/verification');
                }
            }
        }
    };


    const rejectedKYCs = profile?.KYC?.filter(d => d.status === 'REJECTED');


    return loader ? (
        <ClipLoader color={'#008ffd'} loading={loader} cssOverride={override} size={150} aria-label="Loading Spinner"
                    data-testid="loader"/>) : (<div
        className="space-y-2 vd-grid"
        onClick={e => {
            handleAccsClose();
        }}
    >
        {tradingAccount ? (<>
            <Snackbar anchorOrigin={{vertical, horizontal}} open={alertOpen && reason}
                      key={vertical + horizontal}>
                <Alert onClose={handleAlertClose} severity="error" sx={{width: '100%'}}>
                    {reason}
                </Alert>
            </Snackbar>
            {/* CREDENTIALS MODAL */}
            <div>
                <CredentialsModal
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                    setOpen={setOpen}
                    mainPass={tradingAccountDetails?.mainPassword}
                    investorPass={tradingAccountDetails?.investPassword}
                    login={tradingAccount?.login}
                ></CredentialsModal>
            </div>
            {/* CREDENTIALS MODAL */}
            {/* CREDENTIALS MODAL */}
            <div>
                {(kycDocdata.filter(d => d.status === 'APPROVED').length < 3 || profile?.kycStatus === 'PENDING_AGREEMENT') && (
                    <div className="bg-[#1c1d20] text-white">
                        {/* Verify Button */}
                        <div className="text-center py-6">
                            {rejectedKYCs?.length > 0 ? (
                                <>
                                    <h1 className="text-lg mb-4">
                                        Welcome to Pro Traders Fund. The following KYC documents should be
                                        re-uploaded:
                                    </h1>
                                    <h1 className="text-lg mb-4 gap-2">
                                        {rejectedKYCs?.map(doc => (
                                            <button
                                                className={`w-25 px-3 py-1 bg-white rounded-full text-red-600 mx-2 px-2 py-1`}>
                                                <div key={doc.id}>
                                                    {DOCUMENT_TYPE_TEXT[doc?.documentType]}
                                                </div>
                                            </button>
                                        ))}
                                    </h1>
                                    <button
                                        onClick={kycDocdata.length >= 3 ? () => navigate('/kyc-document-status') : () => navigate('/verification')}
                                        className={`bg-[#00A4E6] px-4 py-2 rounded-md hover:bg-[#c0c0c0] transition-colors uppercase`}
                                    >
                                        {KYC_BUTTON_TEXT[profile?.kycStatus]}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-lg mb-4">
                                        Welcome to Pro Traders Fund. {KYC_DASHBOARD_STATUS_TEXT[profile?.kycStatus]}.
                                    </h1>
                                    <h1 className="text-lg mb-4">
                                        <button
                                            className={`w-25 px-3 py-1 bg-white rounded-full ${getStatusColor(profile?.kycStatus)}`}>
                                            {KYC_STATUS_TEXT[profile?.kycStatus]}
                                        </button>
                                    </h1>
                                    <h1 className="text-lg mb-4">
                                        Current Status
                                    </h1>
                                    <button
                                        onClick={kycDocdata.length >= 3 ? () => navigate('/kyc-document-status') : () => navigate('/verification')}
                                        className={`bg-[#00A4E6] px-4 py-2 rounded-md hover:bg-[#c0c0c0] transition-colors uppercase`}
                                    >
                                        {KYC_BUTTON_TEXT[profile?.kycStatus]}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
                <BreachInformationModal
                    handleClose={handleBreachClose}
                    handleOpen={handleBreachOpen}
                    open={breachModalOpen}
                    setOpen={setBreachModalOpen}
                    login={tradingAccountDetails?.login}
                    reason={tradingAccountDetails?.evaluationMetadata?.reason}
                    openingBalance={tradingAccountDetails?.openingBalance}
                    equity={tradingAccountDetails?.equity}
                    maxDrawdownLimit={tradingAccountDetails?.Challenge?.maxDailyLoss}
                ></BreachInformationModal>
            </div>
            {/* CREDENTIALS MODAL */}
            {/* RULES MODAL */}
            <RulesModal handleClose={handlerulesClose} handleOpen={handlerulesOpen} open={rulesopen}
                        setOpen={setrulesOpen}></RulesModal>
            {/* RULES MODAL */}

            <p className="text-sm">
                <b>Account</b> <span className="font-light">(Switch between accounts)</span>
            </p>

            <div className="relative flex flex-wrap items-center justify-between gap-3 ">
                <button
                    className="flex gap-2 justify-center items-center outline outline-1 py-2 px-4 outline-[#3B3C3D] rounded-md"
                    onClick={e => {
                        handleAccsOpen();
                        e.stopPropagation();
                    }}
                >
                    <span>{tradingAccount?.login}</span> <BsChevronDown></BsChevronDown>
                </button>
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
                            {tradingAccounts && tradingAccounts.accounts ? (tradingAccounts.accounts.map((account, index) => (
                                <Account
                                    index={index}
                                    key={account.id}
                                    userAccountId={account.id}
                                    type={account.status || 'PENDING'}
                                    isFreeAccount={account.isDiscountedAccount}
                                    accountId={account.login || '000'}
                                    accountBalance={account.currentBalance || 0}
                                    handleAccsClose={handleAccsClose}
                                    handleTradingAccount={handleTradingAccount}
                                    login={account.login}
                                />))) : (<p>No data available.</p>)}
                        </div>
                    </div>
                </div>)}
                <div className="flex gap-3 text-sm sm:text-base">
                    <button
                        className="flex items-center gap-2 px-4 py-2 text-white rounded-md bg-mainBlue"
                        onClick={handleRequestProfitSplit}
                    >
                        Request profit split
                    </button>
                    <button
                        style={{
                            backgroundColor: '#D3D3D3', cursor: 'pointer'
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-black rounded-md"
                        onClick={onAdvance({vertical: 'top', horizontal: 'right'})}
                    >
                        {advancingInProgress ? 'Advancing in progress...' : 'Advance to next phase'}{' '}
                        {!advancingInProgress && <AiOutlineArrowRight></AiOutlineArrowRight>}
                    </button>
                </div>
            </div>

            {/* ------------------------------ MY BALANCE ROW ----------------------*/}
            <div
                className="grid items-center grid-cols-1 gap-3 text-white lg:flex lg:justify-between scrollbar-hide">
                {/*  column */}
                <div className="flex flex-col w-full justify-around vd-box h-[160px] ">
                    <div className="flex items-center gap-1">
                        <p className="text-lg">Balance</p>{' '}
                        <LightTooltip
                            title="Balance refers to the total amount of money in a trader's trading account. It includes both the initial capital and any profits or losses from trades executed. The balance is a crucial metric as it determines the trader's overall financial position within the account. It is essential to manage the balance carefully to ensure sustainable and successful trading."
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-2xl">
                            {tradingAccount?.currentBalance === 0 ? '0' : new Intl.NumberFormat('en-US', {
                                style: 'currency', currency: 'USD'
                            }).format(tradingAccount?.currentBalance)}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-light leading-3">
                            Your balance has changed by{' '}
                            <span
                                className={percentageBalanceUsed >= 0 ? percentageBalanceUsed > 0 && 'text-green-400' : 'text-red-400'}>
                    {percentageBalanceUsed.toFixed(2)}%
                  </span>{' '}
                            of your account balance
                        </p>
                        {/* <span className="text-green-500">+2%</span> */}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm">
                        <button
                            className="flex items-center gap-2 p-2 rounded-md bg-[#00A4E6] hover:bg-blue-600"
                            onClick={e => {
                                handlerulesOpen();
                            }}
                        >
                            View rules
                        </button>
                    </div>
                </div>

                {/*  column */}
                <div className="flex flex-col w-full vd-box h-[160px] justify-around">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <p className="text-sm">Account Type</p>{' '}
                            <LightTooltip
                                title="Account type refers to the specific category or level of trading account a trader has on Pro Traders Fund. The platform offers different types of accounts with varying features, benefits, and requirements. The account type chosen by the trader will determine the trading conditions, profit sharing percentages, and access to specific privileges. Common account types may include Regular Pro Trader Challenge, Premium Pro Trader Challenge, and Instant Funded Account."
                                placement="top-start"
                            >
                                <IconButton>
                                    <AiOutlineQuestionCircle className="text-sm text-white"/>
                                </IconButton>
                            </LightTooltip>
                        </div>
                        <button
                            className={`text-[#B54708] text-xs flex rounded-full items-center justify-center py-1 px-2 gap-1 ${BG_COLOR_BY_TRADING_ACCOUNT_STATUS[tradingAccountDetails?.status]}`}
                            onClick={e => {
                                if (tradingAccountDetails?.status === 'FAILED_PERMANENTLY') {
                                    handleBreachOpen();
                                    e.stopPropagation();
                                }
                            }}
                        >
                            <p className={`text-white`}>{tradingAccountDetails?.status}</p>
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-2xl leading-7">
                            {`PTF ${tradingAccountDetails?.ChallengeLevel?.level / 1000}K ${tradingAccountDetails?.Challenge?.phase}`}
                            {/*  //  {challengeType === 'Pro Trader Challenge Phase 2' || challengeType === 'Premium Pro Trader Challenge Phase 3' || challengeType === 'Premium+ Instant Funding' ? `PTF ${tradingAccountDetails?.initialBalance / 1000}K FUNDED` : `PTF ${tradingAccountDetails?.initialBalance / 1000}K Phase ${challengeType?.match(/Phase (\d+)/)?.[1] || ''}`}*/}
                            {/*</p>*/}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-light leading-3">
                            {tradingAccountDetails?.Challenge?.phase !== 'FUNDED' ? tradingAccountDetails?.Challenge?.label.slice(0, 28) : tradingAccountDetails?.Challenge?.label}
                        </p>
                    </div>
                    <div className="flex gap-2 mt-2 text-sm">
                        <button
                            className="flex items-center gap-2 p-2 rounded-md bg-[#00A4E6] hover:bg-blue-600"
                            onClick={e => {
                                handleOpen();
                                e.stopPropagation();
                            }}
                        >
                            See credentials
                        </button>
                        {tradingAccount?.login && (<button
                            className="flex items-center gap-1 text-xs text-white"
                            onClick={() => navigate('/metrix', {
                                state: {
                                    selectedId: tradingAccount?.id, tradingAccounts: tradingAccounts?.accounts
                                }
                            })}
                        >
                            <img src={linedown} alt="" className="h-5"/>
                            See metrics
                        </button>)}
                    </div>
                </div>

                {/*  column */}
                <div className="flex flex-col w-full justify-around vd-box h-[160px]">
                    <div className="flex flex-wrap items-center gap-1">
                        <p className="text-sm">Time since inception</p>{' '}
                        <LightTooltip
                            title="Time since inception is the period that has elapsed since a trader's account was initially created or funded on Pro Traders Fund. This metric is essential in evaluating the trader's trading journey and performance over a specific time frame. Traders can monitor their progress and track improvements over time since inception. It provides valuable insights into the trader's consistency, profitability, and growth as a trader on the platform."
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <p className="text-lg leading-5">
                        <span>{timeDiff.days}</span> days <span>{timeDiff.hours}</span> hours
                        and <span>{timeDiff.minutes}</span> mins{' '}
                        <span>{timeDiff.seconds}</span> secs{' '}
                    </p>
                    <div>
                        <p
                          className="text-xs font-light">{tradingAccountDetails?.Challenge?.phase === 'Phase 1' ? 'Complete Phase 1 in 5 days or less and earn refunds & bonuses.'
                          : tradingAccountDetails?.Challenge?.phase === 'Phase 2' ? 'Complete Phase 2 in 5 days or less and earn refunds & bonuses.'
                            : tradingAccountDetails?.Challenge?.phase === 'Phase 3' ? 'To stay active, trade at least once every 30 days.'
                              : 'Complete Phase 1 in 5 days or less and earn refunds & bonuses.'}</p>
                    </div>
                    <button className="flex items-center gap-2 text-xs text-[#00A4E6]">Learn more</button>
                </div>
            </div>
            {/* ------------------------------ MY BALANCE ROW ----------------------*/}

            {/* ---------------- */}
            <div
                className="grid lg:flex justify-between  grid-cols-2  gap-4 px-[8px] lg:px-0 text-sm lg:text-base ">
                <div>
                    <p className="text-gray-400 uppercase">bonus</p>
                    <p className={payableResponse?.bonusAmount >= 0 ? payableResponse?.bonusAmount > 0 && 'text-green-400' : 'text-red-400'}>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: 'USD'
                        }).format(payableResponse?.bonusAmount ?? 0)}
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 uppercase">Withdrawable</p>
                    <p
                        className={payableResponse?.withdrawableAmount >= 0 ? payableResponse?.withdrawableAmount > 0 && 'text-green-400' : 'text-red-400'}
                    >
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: 'USD'
                        }).format(payableResponse?.withdrawableAmount ?? 0)}
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 uppercase">profit split</p>
                    <p className={profitSplit >= 0 ? profitSplit > 0 && 'text-green-400' : 'text-red-400'}>
                        {profitSplit != 0 ? formatCurrency(profitSplit) : 'N/A'}
                    </p>
                </div>

                <div>
                    <p className="text-gray-400 uppercase">NEXT withdrawal</p>
                    <p>N/A</p>
                </div>
                <div>
                    <p className="text-gray-400 uppercase">Last Updated</p>
                    <p>{lastUpdatedString}</p>
                </div>
            </div>
            {/* ---------------- */}

            {/* ------------------------------ Profit target----------------------*/}

            <div
                className="relative flex flex-col justify-between h-auto text-white scrollbar-hide vd-box3 lg:flex-row sm:gap-0 sm:space-y-0 ">
                {/*  column */}
                <div
                    className=" lg:w-[30%] px-2 w-full h-[360px] pt-[12px] flex flex-col gap-10 border-[#3b3c3d] lg:border-r-[1px] ">
                    <div>
                        <div className="flex items-center">
                            <div className="flex items-center gap-4">
                                <p>Floating profits </p>{' '}
                                <span
                                    className={profitPercentage >= 0 ? profitPercentage > 0 && 'text-[#28C794] text-xs' : 'text-red-400 text-xs'}>
                      {profitPercentage.toFixed(2)}%
                    </span>
                            </div>
                            {' '}
                        </div>
                        <div className="flex flex-col justify-between gap-4">
                            <p
                                className={profit >= 0 ? profit === 0 ? 'text-3xl text-white mt-3' : 'text-3xl text-[#28C794] mt-3' : 'text-3xl text-red-400 mt-3'}
                            >
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency', currency: 'USD'
                                }).format(profit)}
                            </p>
                            {/*<p className="text-xs font-light">Increased 10% from last month</p>*/}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="text-sm font-light">Win rate by trades</p>
                        <div className="flex justify-between gap-4">
                            <div className="lg:h-[120px] lg:w-[120px] w-[100px] h-[100px]">
                                <CircularProgressbar
                                    value={tradingAccountDetails?.winRate ? Math.ceil(tradingAccountDetails?.winRate) : 0}
                                    text={`${Math.ceil(tradingAccountDetails?.winRate)}%`}
                                    styles={{
                                        path: {
                                            // Path color
                                            stroke: `#3CCB7F`, // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt', // Customize transition animation
                                            transition: 'stroke-dashoffset 0.5s ease 0s', // Rotate the path
                                            transform: '', transformOrigin: 'center center'
                                        }, // Customize  the circle behind the path, i.e. the "total progress"
                                        trail: {
                                            // Trail color
                                            stroke: ' #F04438', // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt', // Rotate the trail
                                            transform: 'rotate(0.25turn)', transformOrigin: 'center center'
                                        }, // Customize the text
                                        text: {
                                            // Text color
                                            fill: '#ffffff', // Text size
                                            fontSize: '16px'
                                        }, // Customize background - only used when the `background` prop is true
                                        background: {
                                            fill: ''
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex flex-col flex-1 gap-4 text-xs shrink-0">
                                <div className="flex flex-col gap-2">
                                    <p className="whitespace-nowrap">{tradingAccountDetails?.totalWinningTrades} Wins</p>
                                    <ProgressBar
                                        progressPercentage={tradingAccountDetails?.totalTrades ? (tradingAccountDetails?.totalWinningTrades / tradingAccountDetails?.totalTrades) * 100 : 0}
                                        color={'bg-[#3CCB7F]'}
                                    ></ProgressBar>
                                </div>
                                {' '}
                                <div className="flex flex-col gap-2">
                                    <p className="whitespace-nowrap">{tradingAccountDetails?.totalLosingTrades} Losses</p>
                                    <ProgressBar
                                        progressPercentage={tradingAccountDetails?.totalTrades ? (tradingAccountDetails?.totalLosingTrades / tradingAccountDetails?.totalTrades) * 100 : 0}
                                        color={'bg-[#F04438]'}
                                    ></ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  column */}
                <div className="flex flex-col lg:w-[70%] h-full  w-full overflow-x-scroll gap-4 pt-[12px]">
                    <div
                        style={{position: 'relative', width: '100%'}}
                        className="flex justify-center items-center md:h-[400px] h-[100%] md:py-0 py-5"
                    >
                        <Chart charData={chartData}></Chart>
                    </div>
                </div>
            </div>
            {/* ------------------------------ Profit target----------------------*/}

            {/* ------------------------------ Max loss----------------------*/}
            <div className="flex flex-col items-center lg:h-[132px] h-auto gap-4 text-white lg:flex-row">
                <div className="flex flex-col w-full h-full gap-2 vd-box">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <p className="text-sm">Profit target</p>{' '}
                            <LightTooltip
                                title="This is the maximum amount of the initial trading account balance you can lose in a single day. It helps manage risk by setting a limit on daily losses."
                                placement="top-start"
                            >
                                <IconButton>
                                    <AiOutlineQuestionCircle className="text-sm text-white"/>
                                </IconButton>
                            </LightTooltip>
                        </div>
                        {profitTargetSoFarPercentange > profitTargetPercentage && (
                            <p className="bg-[#ECFDF3] text-[#027A48] text-sm rounded-3xl px-3 py-[2px] ">Passed</p>)}
                    </div>

                    <div>
                        <DashboardProgressBar
                            value={(profitTargetSoFarPercentange / profitTargetPercentage) * 100}
                            positiveOutcome/>
                    </div>

                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">
                            <p className="text-2xl">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency', currency: 'USD'
                                }).format(profitTargetAmount)}
                            </p>
                        </p>
                        <p> {Number(profitTargetPercentage).toFixed(2)}%</p>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-xs font-light ">
                            So far you've made
                            <br/>
                            <span
                                className={profitTargetSoFarValue >= 0 ? (profitTargetSoFarValue === 0 ? 'text-mainColor' : 'text-green-400') : 'text-mainColor'}
                            >
                    {formatCurrency(profitTargetSoFarValue)}
                  </span>
                        </p>
                        <p className="text-xs font-light ">
                            <br/>
                            <span
                                className={profitTargetSoFarPercentange >= 0 ? profitTargetSoFarPercentange === 0 ? 'text-mainColor' : 'text-green-400' : 'text-mainColor'}
                            >
                    {profitTargetSoFarPercentange.toFixed(2)}%
                  </span>
                        </p>
                    </div>
                </div>
                {/*  column */}
                <div className="flex flex-col w-full h-full gap-2 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-sm">Max daily risk</p>{' '}
                        <LightTooltip
                            title="This is the maximum amount of the initial trading account balance you can lose in a single day. It helps manage risk by setting a limit on daily losses."
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div>
                        <DashboardProgressBar value={Math.abs((percentageLost / maxDailyLoss) * 100)}/>
                    </div>

                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">
                            <p className="text-2xl">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency', currency: 'USD'
                                }).format(maxDailyLossAmount)}
                            </p>
                        </p>
                        <p> {maxDailyLoss}%</p>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-xs font-light ">
                            Today you’ve risked <br/>
                            <span
                                className={difference >= 0 ? (difference === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}>
                    {formatCurrency(tradingAccountDetails?.maxDrawdownDaily)}
                  </span>
                        </p>
                        <p className="text-xs font-light ">
                            <br/>
                            <span
                                className={percentageLost >= 0 ? (percentageLost === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}>
                    {percentageLost.toFixed(2)}%
                  </span>
                        </p>
                    </div>
                </div>
                {/*  column */}
                <div className="flex flex-col w-full h-full gap-2 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-sm">Max overall risk</p>{' '}
                        <LightTooltip
                            title="This represents the maximum amount of the initial trading account balance you can lose overall. It serves as a safeguard to prevent excessive losses."
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div>
                        <DashboardProgressBar
                            value={Math.abs((overallDifferencePercentage / maxOverallLoss) * 100)}/>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">
                            {' '}
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency', currency: 'USD'
                            }).format(maxOverallLossAmount)}
                        </p>
                        <p>{maxOverallLoss}%</p>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-xs font-light ">
                            So far you’ve risked <br/>
                            <span
                                className={overallDifference >= 0 ? (overallDifference === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}
                            >
                    {formatCurrency(overallDifference)}
                  </span>
                        </p>
                        <p className="text-xs font-light ">
                            <br/>
                            <span
                                className={overallDifferencePercentage >= 0 ? overallDifferencePercentage === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                    {overallDifferencePercentage.toFixed(2)}%
                  </span>
                        </p>
                    </div>
                </div>
                {/*  column */}
                {/*    <div className="flex flex-col w-full h-full gap-2 overflow-scroll vd-box">*/}
                {/*        <div className="flex items-center gap-1">*/}
                {/*            <p className="text-sm">Bonus & refund </p>{' '}*/}
                {/*            <LightTooltip title={BonusAndRefund} placement="top-start">*/}
                {/*                <IconButton>*/}
                {/*                    <AiOutlineQuestionCircle className="text-sm text-white"/>*/}
                {/*                </IconButton>*/}
                {/*            </LightTooltip>*/}
                {/*        </div>*/}

                {/*        <div className="flex items-center justify-between gap-10">*/}
                {/*            <p className="text-lg">Pending</p>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center justify-between gap-10">*/}
                {/*            /!* <p className="text-xs font-light ">*/}
                {/*  Days remaining*/}
                {/*  <br />*/}
                {/*  18*/}
                {/*</p> *!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*  column */}
                <div className="flex flex-col w-full h-full gap-2 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-sm">Max overall risk by highest balance</p>{' '}
                        <LightTooltip
                            title="This represents the maximum amount of the highest trading account balance you can lose overall. It serves as a safeguard to prevent excessive losses."
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div>
                        <DashboardProgressBar
                            value={Math.abs((overallDifferencePercentageByHighestBalance / maxOverallLoss) * 100)}/>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">
                            {' '}
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency', currency: 'USD'
                            }).format(maxOverallLossAmountByHighestBalance)}
                        </p>
                        <p>{maxOverallLoss}%</p>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-xs font-light ">
                            So far you’ve risked <br/>
                            <span
                                className={overallDifference >= 0 ? (overallDifference === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}
                            >
                    {formatCurrency(overallDifference)}
                  </span>
                        </p>
                        <p className="text-xs font-light ">
                            <br/>
                            <span
                                className={overallDifferencePercentageByHighestBalance >= 0 ? overallDifferencePercentageByHighestBalance === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                    {overallDifferencePercentageByHighestBalance.toFixed(2)}%
                  </span>
                        </p>
                    </div>
                </div>
                {/* ------------------------------ Max loss----------------------*/}
            </div>
            {/* --------------------Daily trade breakdown--------------- */}
            <div className="items-center grid-cols-1 gap-10 text-white vd-box5">
                {/*  column */}
                {tradeData && <Calendar tradeData={tradeData} setCurrentMonth={setCurrentMonth}
                                        setCurrentYear={setCurrentYear}/>}
            </div>
        </>) : (<div className="mt-8 text-center">Loading...</div>)}
        {notification && <Notification message={notification.message} type={notification.type}/>}
    </div>);
};

export default VerifiedDashboard;
