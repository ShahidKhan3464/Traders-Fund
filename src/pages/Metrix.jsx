import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from '../components/MetrixChart';
import arrow from '../images/icons/arrow-left.svg';
import axios from 'axios';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import '../pages/Dashboard.css';
import Account from '../components/Account';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';
import {useLocation} from 'react-router-dom';
import {formatDate, TEXT_COLOR_BY_TRADING_ACCOUNT_STATUS} from '../utils/utils';
import {getChartsDataAPI, getDashboardStatisticsAPI, getTradesAPI} from "../api";

const displayValue = value => (value !== null && value !== undefined ? value : '-');

const top5data = [];
const objectivedata = [];

const override = {
    display: 'block', margin: '0 auto', borderColor: '#0ba6e3'
};

const LightTooltip = styled(({className, ...props}) => <Tooltip {...props}
                                                                classes={{popper: className}}/>)(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white, color: 'rgba(0, 0, 0, 0.87)', boxShadow: theme.shadows[1]
    }
}));

const Metrix = ({activeNav, setActiveNav}) => {
    const {state} = useLocation();
    const [filter, setFilter] = useState(false);
    const [trades, setTrades] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [currentTradingAccount, setCurrentTradingAccount] = useState(0);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const percentage = 78;

    const [metrixData, setMetrixData] = useState(null);
    const [tradingAccounts, setTradingAccounts] = useState([]);
    const [tradesPageNumber, setTradesPageNumber] = useState(1);
    const [tradesPerPage, setTradesPerPage] = useState(10);
    const [tradesMaxPages, setTradesMaxPages] = useState(0);

    useEffect(() => {
        setTradingAccounts(state.tradingAccounts);
        if (state.selectedId) {
            (async tradingAccountId => {
                if (state.tradingAccounts && state.tradingAccounts.length) {
                    const selectedAccounts = state.tradingAccounts.filter(t => t.id === state.selectedId);
                    if (selectedAccounts && selectedAccounts.length) {
                        setCurrentTradingAccount(selectedAccounts[0]);
                    }
                }
                await getTradingAccountStatistics(tradingAccountId);
                await getChartData(tradingAccountId);
                await getTradesData(tradingAccountId, tradesPageNumber)
            })(state.selectedId);
        }
    }, [state.selectedId, state.tradingAccounts]);

    const getChartData = async tradingAccountId => {
        try {
            const response = await getChartsDataAPI(tradingAccountId, 1, 50)
            setChartData(response.trades);
        } catch (err) {
            console.log(err);
        } finally {
        }
    };

    const getTradesData = async (tradingAccountId, pageNumber) => {
        try {
            setTradesPageNumber(pageNumber)
            const response = await getTradesAPI(tradingAccountId, pageNumber, tradesPerPage)
            setTradesMaxPages(Math.ceil(response.pagination.total / tradesPerPage))
            setTrades(response.trades);
        } catch (err) {
            console.log(err);
        } finally {
        }
    };
    const getTradingAccountStatistics = async tradingAccountId => {
        setLoader(true);
        try {
            const response = await getDashboardStatisticsAPI(tradingAccountId)
            setMetrixData(response);
        } catch (err) {
            console.log(err);
        } finally {
            setLoader(false);
        }
    };

    const formatCurrency = amount => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
    };

    const formatDecimal = amount => {
        return amount ? amount.toFixed(2) : 0;
    };

    const handleTradingAccount = (selectedTradingAccountId, index) => {
        (async tradingAccountId => {
            const selectedAccounts = tradingAccounts.filter(t => t.id === selectedTradingAccountId);
            if (selectedAccounts && selectedAccounts.length) {
                setCurrentTradingAccount(selectedAccounts[0]);
            }
            await getTradingAccountStatistics(tradingAccountId);
            await getChartData(tradingAccountId);
        })(selectedTradingAccountId);
        if (tradingAccounts) {
            localStorage.setItem('currentTradingAccount', JSON.stringify(tradingAccounts[index]));
        }
    };

    return loader || !metrixData ? (<ClipLoader
        color={'#008ffd'}
        loading={loader || !metrixData}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />) : (<>
        {/* ACCOUNTS */}
        <dialog id="my_modal_3" className="ml-5 modal">
            <form method="dialog"
                  className="border border-gray-200 rounded-lg modal-box bg-secTheme w-[400px] space-y-4">
                <div className="flex items-center justify-between ">
                    <p>Choose an account </p>
                </div>
                {tradingAccounts && tradingAccounts.length ? (tradingAccounts.map((tradingAccount, index) => (<Account
                    index={index}
                    key={tradingAccount.id}
                    userAccountId={tradingAccount.id}
                    isFreeAccount={tradingAccount.isDiscountedAccount}
                    type={tradingAccount.status || 'PENDING'}
                    accountId={tradingAccount.login || '000'}
                    accountBalance={tradingAccount.currentBalance || 0}
                    login={tradingAccount.login}
                    handleTradingAccount={handleTradingAccount}
                />))) : (<p>No data available.</p>)}
            </form>
            <form method="dialog" className="absolute w-full h-screen modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        {/* ACCOUNTS */}
        <div className="space-y-2 text-white vd-grid lg:w-[90%] w-full overflow-y-scroll"
             onClick={() => setFilter(false)}>
            <header className="pb-2 border-b bg-mainTheme drop-shadow border-gray-400/20">
                <div className="flex flex-wrap items-center gap-2">
                    <img src={arrow} alt="back" className="cursor-pointer" onClick={() => navigate('/dashboard')}/>
                    <p className="text-sm text-gray-600 cursor-pointer" onClick={() => navigate('/dashboard')}>
                        Go back
                    </p>
                    <div className="relative" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-around gap-2 p-2 ml-3 text-sm rounded-md ">Trade
                            metrics
                        </div>
                    </div>

                    <div className="flex gap-5 text-white sm:ml-auto">
                        <div className="text-xs ">
                            <p>My MT5 trading account </p>
                            <p className="font-light">
                                <b>{currentTradingAccount.login}</b> -
                                <span
                                    className={`${TEXT_COLOR_BY_TRADING_ACCOUNT_STATUS[currentTradingAccount?.status]}`}>
                    {' '}
                                    {currentTradingAccount ? currentTradingAccount.status : 'Loading...'}
                  </span>
                            </p>
                        </div>
                        {/* <TraderType type="Intraday"></TraderType> */}
                        <button
                            className="flex items-center gap-2 px-4 py-2 text-black bg-white rounded-md"
                            onClick={() => window.my_modal_3.showModal()}
                        >
                            Switch account
                        </button>
                    </div>
                </div>
            </header>
            {/* ------------------------------  ----------------------*/}

            <div className="flex items-center lg:flex-row gap-4 text-white h-[100px] overflow-x-scroll">
                <div className="vd-box flex flex-col gap-2 min-w-[140px] w-full ">
                    <div className="flex items-center gap-1">
                        <p className="text-xs">Balance</p>{' '}
                        <LightTooltip
                            title=" Balance refers to the total amount of money in a trader's trading account. It includes both the initial capital and any profits or losses from trades executed. The balance is a crucial metric as it determines the trader's overall financial position within the account. It is essential to manage the balance carefully to ensure sustainable and successful trading."
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">{formatCurrency(metrixData?.currentBalance)}</p>
                    </div>
                </div>
                {/*  column */}
                <div className="vd-box flex flex-col gap-2 min-w-[140px] w-full ">
                    <div className="flex items-center gap-1">
                        <p className="text-xs">Profit</p>{' '}
                        <LightTooltip
                            title="Profits refer to the total amount of money gained from successful trades. It is the positive difference between the selling price and the buying price of a financial instrument. Profits are a key indicator of a trader's success in generating returns from their trading activities.
          "
                            placement="top-start"
                        >
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p
                            className={`text-lg ${metrixData?.grossProfitOnWinningTrades !== null && metrixData?.grossProfitOnWinningTrades !== undefined ? (metrixData?.grossProfitOnWinningTrades < 0 ? 'text-red-500' : 'text-mainColor') : 'text-mainColor'}`}
                        >
                            {metrixData.grossProfitOnWinningTrades.toLocaleString('en-US', {
                                style: 'currency', currency: 'USD'
                            })}
                        </p>
                    </div>
                </div>
                {/*  column */}
                <div className="vd-box flex flex-col  gap-2 min-w-[140px] w-full">
                    <div className="flex items-center gap-1">
                        <p className="text-xs">Equity</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">
                            {' '}
                            {metrixData.equity.toLocaleString('en-US', {
                                style: 'currency', currency: 'USD'
                            })}
                        </p>
                    </div>
                </div>
                {/*  column */}
                {/*  column */}
                <div className="vd-box flex flex-col gap-2  min-w-[140px] w-full">
                    <div className="flex items-center gap-1">
                        <p className="text-xs"># of trades</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">{metrixData.totalTrades}</p>
                    </div>
                </div>
                {/*  column */}
                <div className="vd-box flex flex-col gap-2 min-w-[140px] w-full">
                    <div className="flex items-center gap-1">
                        <p className="text-xs">First trade</p>
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">{metrixData.firstTradeTime ? moment(metrixData.firstTradeTime).format('DD-MM-YYYY') : 'N/A'}</p>
                    </div>
                </div>
                {/*  column */}
                {/*  column */}
                <div className="vd-box flex flex-col gap-2 min-w-[140px] w-full">
                    <div className="flex items-center gap-1">
                        <p className="text-xs">Days traded</p>
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>
                    <div className="flex items-center justify-between gap-10">
                        <p className="text-lg">{metrixData.actualTradingDays}</p>
                    </div>
                </div>
                {/* ------------------------------ Max loss----------------------*/}
            </div>
            {/* ------------------------------ ----------------------*/}
            <div className="relative flex flex-col h-full gap-5 overflow-x-scroll vd-box">
                <div className="flex items-center justify-between ">
                    <p>Statistics</p>
                </div>
                <div className="absolute w-full bg-gray-600 h-[1px] top-10 left-0 right-0"></div>
                <div className="flex flex-col h-full py-2 space-y-5 justify-evenly statistics whitespace-nowrap">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Highest win</p>
                                <LightTooltip
                                    title="The highest win represents the largest profit obtained from a single trade. It reflects the maximum positive impact a single trade has had on the trader's account balance.
"
                                    placement="top-start"
                                >
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.highestWin >= 0 ? (metrixData.highestWin === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}
                            >
                                {formatCurrency(metrixData.highestWin)}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Average profit</p>{' '}
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>

                            <p
                                className={metrixData.averageProfitPerWinningTrade >= 0 ? metrixData.averageProfitPerWinningTrade === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                                {formatCurrency(metrixData.averageProfitPerWinningTrade)}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Win rate</p>{' '}
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>

                            <p className={metrixData.winRate >= 0 ? (metrixData.winRate === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}>
                                {formatDecimal(metrixData.winRate) + '%'}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Gross profit</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>

                            <p
                                className={metrixData?.totalProfit >= 0 ? (metrixData?.totalProfit === 0 ? 'text-mainColor' : 'text-gren-400') : 'text-red-400'}
                            >
                                {formatCurrency(metrixData?.totalProfit)}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Avg. time open</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p>{metrixData.averageOpenTime || 'N/A'}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Frequency factor</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.frequencyFactor >= 0 ? metrixData.frequencyFactor === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                                {formatDecimal(metrixData.frequencyFactor)}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Highest loss</p>
                                <LightTooltip
                                    title="The highest loss represents the largest amount lost from a single trade. It reflects the maximum negative impact a single trade has had on the trader's account balance.
"
                                    placement="top-start"
                                >
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>

                            <p
                                className={metrixData.highestLoss >= 0 ? (metrixData.highestLoss === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}
                            >
                                {formatCurrency(metrixData?.highestLoss)}
                            </p>
                        </div>
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Average loss</p>
                                <LightTooltip
                                    title="The average loss is the average amount lost from all losing trades. It provides insight into the typical size of losing trades.
"
                                    placement="top-start"
                                >
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.averageGrossLoss >= 0 ? metrixData.averageGrossLoss === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                                {metrixData.averageGrossLoss >= 0 ? formatCurrency(metrixData.averageGrossLoss) : 'N/A'}
                            </p>
                        </div>
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Loss rate</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.lossRate >= 0 ? (metrixData.lossRate === 0 ? 'text-mainColor' : 'text-red-400') : 'text-green-400'}
                            >
                                {formatDecimal(metrixData.lossRate) + '%'}
                            </p>
                        </div>
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Gross loss</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.totalLoss >= 0 ? (metrixData.totalLoss === 0 ? 'text-mainColor' : 'text-red-400') : 'text-green-400'}
                            >
                                {formatCurrency(metrixData.totalLoss) || 'N/A'}
                            </p>
                        </div>
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Avg. time close</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p>{metrixData.averageCloseTime || 'N/A'}</p>
                        </div>
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Experience factor</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.experienceFactor >= 0 ? metrixData.experienceFactor === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                                {formatDecimal(metrixData.experienceFactor)}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Avg direction</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p>{metrixData.averageTradeDirection || 'N/A'}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Lots</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p>{metrixData.totalVolumeTraded}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Profit To Risk Ratio</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.averageProfitToRiskRatio >= 0 ? metrixData.averageProfitToRiskRatio === 0 ? 'text-mainColor' : 'text-green-400' : 'text-red-400'}
                            >
                                {formatDecimal(metrixData.averageProfitToRiskRatio)}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Profit factor</p>
                                <LightTooltip
                                    title="The profit factor is a performance metric used to evaluate the profitability of a trading strategy. It is calculated by dividing the total profits generated by the total losses incurred. A profit factor greater than 1 indicates that the trading strategy is profitable, while a value less than 1 suggests that the strategy is not profitable.
"
                                    placement="top-start"
                                >
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p
                                className={metrixData.profitFactor >= 0 ? (metrixData.profitFactor === 0 ? 'text-mainColor' : 'text-green-400') : 'text-red-400'}
                            >
                                {metrixData?.profitFactor.toFixed(2)}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Avg risk %</p>
                                <LightTooltip
                                    title="The average risk percentage is the average percentage of the trading account's capital that a trader risks on each trade. It is a key factor in managing risk and capital preservation.
"
                                    placement="top-start"
                                >
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p className={metrixData.averageRisk > 0 ? 'text-red-400' : 'text-mainColor'}>{metrixData?.averageRisk.toFixed(2) + '%'}</p>
                        </div>
                        <div>
                            {' '}
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-light">Avg. time held</p>
                                <LightTooltip title="" placement="top-start">
                                    <IconButton>
                                        <AiOutlineQuestionCircle className="text-sm text-white"/>
                                    </IconButton>
                                </LightTooltip>
                            </div>
                            <p>{metrixData.averageTimeHeld || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------ ----------------------*/}
            <div
                className="flex flex-col items-start h-full gap-2 overflow-x-scroll text-white md:items-stretch scrollbar-hide lg:flex-row">
                {/*  column */}
                <div className="vd-box flex flex-col flex-1 gap-5 relative min-h-full lg:w-[30%] items-stretch">
                    <div className="flex items-center justify-between">
                        <p>Win ratio</p>
                        <div className="absolute w-full bg-gray-600 h-[1px] top-10 left-0"></div>
                    </div>
                    <div className="h-full ">
                        <div className="flex flex-col justify-center h-full gap-2">
                            <div className="flex items-start gap-5">
                                <div className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px]">
                                    <CircularProgressbar
                                        value={metrixData?.winRate !== null && metrixData?.winRate !== undefined ? Math.ceil(metrixData?.winRate) : 0}
                                        text={metrixData?.winRate !== null && metrixData?.winRate !== undefined ? `${Math.ceil(metrixData?.winRate)}%` : 'N/A'}
                                        styles={{
                                            path: {
                                                // Path color
                                                stroke: `#6EFDEB`, // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                strokeLinecap: 'butt', // Customize transition animation
                                                transition: 'stroke-dashoffset 0.5s ease 0s', // Rotate the path
                                                transform: '', transformOrigin: 'center center'
                                            }, // Customize the circle behind the path, i.e. the "total progress"
                                            trail: {
                                                // Trail color
                                                stroke: ' #E84A4D', // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
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
                                <div className="flex flex-col gap-2 text-sm">
                                    <div>
                                        <p>Winning trades</p>
                                        <p className="text-mainColor">{metrixData?.winningTrades || 0}</p>
                                    </div>
                                    <div>
                                        <p>Losing trades</p>
                                        <p className="text-red-500">{metrixData?.loosingTrades || 0}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <p className="mt-10 text-xs font-light">Your win % is higher by 9% compared to 58 winning / 33 losing last month</p> */}
                        </div>
                    </div>
                </div>
                {/*  column */}
                <div className="  h-full lg:w-[70%]">
                    <div
                        className="flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide">
                        <p className="px-2">Trade profit and loss</p>
                        <div
                            style={{position: 'relative', width: '100%'}}
                            className="flex justify-center items-center md:h-[400px] h-[100%] md:py-0 py-5"
                        >
                            <Chart charData={chartData}></Chart>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------ ----------------------*/}
            <div
                className="flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide">
                <p className="px-2">Daily trade breakdown</p>
                {trades && trades.length ?( <>
                <table className="w-full mt-4 text-center">
                    <tr className="border-b border-t border-gray-600 text-xs font-light h-[60px] table-heading">
                        <th>Status</th>
                        {/* Not directly available in the Trade Entity */}
                        <th>Trade ID</th>
                        {/* Position */}
                        <th>Instrument</th>
                        {/* Symbol */}
                        <th>Open price</th>
                        {/* PriceOpen */}
                        <th>Open time</th>
                        {/* TimeCreate */}
                        <th>Close price</th>
                        {/* PriceCurrent */}
                        <th>Close time</th>
                        {/* TimeUpdate */}
                        <th>Type</th>
                        {/* Not directly available in the Trade Entity */}
                        <th>Lots</th>
                        {/* Volume */}
                        <th>Gross P&L</th>
                        {/* Profit */}
                    </tr>
                    {trades.map((val, key) => {
                        console.log('values of metrics', val);
                        let status, statusColor;
                        if (val.status === 'OPEN') {
                            status = 'OPEN';
                            statusColor = 'text-yellow-600 bg-yellow-500/20';
                        } else if (val.status === 'CLOSE' && val.profit > 0) {
                            status = 'WIN';
                            statusColor = 'text-green-600 bg-green-500/20';
                        } else if (val.status === 'CLOSE' && val.profit < 0) {
                            status = 'LOSS';
                            statusColor = 'text-red-600 bg-red-500/20';
                        }
                        return (<tr key={key} className="text-xs h-[60px] border-b border-gray-600 items-center">
                            <td>
                                <div
                                    className={`rounded-md py-2 flex justify-center items-center ${statusColor}`}>{status}</div>
                            </td>
                            <td>{displayValue(val.position)}</td>
                            <td>{displayValue(val.symbol)}</td>
                            <td>{displayValue(val.openPrice)}</td>
                            <td>{displayValue(val.createdAt ? formatDate(val.createdAt) : '-')}</td>
                            <td>{displayValue(val.closePrice)}</td>
                            <td>{displayValue(val.updatedAt ? formatDate(val.updatedAt) : '-')}</td>
                            <td>{displayValue(val.type)}</td>
                            <td>{displayValue(val.volume)}</td>
                            <td className="text-mainColor">{displayValue(val.profit)}</td>
                        </tr>);
                    })}
                </table>
                <div className="flex items-center justify-between mt-3 text-sm">
                    <button disabled={(tradesPageNumber - 1) < 1}
                            onClick={async () => getTradesData(currentTradingAccount.id, tradesPageNumber - 1)}
                            className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous
                    </button>
                    <div>Page {tradesPageNumber} of {tradesMaxPages}</div>
                    <button disabled={(tradesPageNumber + 1) > tradesMaxPages}
                            onClick={async () => getTradesData(currentTradingAccount.id, tradesPageNumber + 1)}
                            className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next
                    </button>
                </div></>): (
                    <div className="p-5 text-center">
                        <p className="text-mainBlue text-center">No trades found</p>
                    </div>
                )}
            </div>
            {/* ------------------------------ ----------------------*/}

            {/* ----------------------------------- */}
            <div
                className="flex flex-col items-start gap-2 overflow-x-scroll md:h-[290px] text-white md:items-center scrollbar-hide md:flex-row ">
                {/*  column */}
                <div className="vd-box2 flex flex-col relative h-full lg:w-[40%] w-full overflow-x-scroll">
                    <p className="px-5 font-light">Top 5 most traded instruments</p>{' '}
                    <table className="w-full mt-4 text-center metrix-table">
                        <tr className="border border-gray-600 h-[35px] table-heading text-xs">
                            <th>Instrument</th>
                            <th>Total trades</th>
                            <th>P&L</th>
                            <th>Change</th>
                        </tr>
                        {top5data.map((val, key) => {
                            return (<tr key={key} className="text-xs h-[40px] border border-gray-600 ">
                                <td>{val.instrument}</td>
                                <td>{val.trades}</td>
                                <td className="text-mainGreen">{val.profitandloss}</td>
                                <td className="text-mainGreen">{val.change}</td>
                            </tr>);
                        })}
                    </table>
                </div>
                {/*  column */}
                <div className="vd-box2 flex flex-col relative h-full lg:w-[60%] w-full overflow-x-scroll">
                    <p className="px-5 font-light">Trading objectives</p>
                    <table className="flex-1 w-full mt-4 text-center metrix-table">
                        <tr className="border-b border-t border-gray-600 h-[35px] table-heading text-xs">
                            <th>Objectives</th>
                            <th>Results</th>
                            <th>Change</th>
                        </tr>
                        {objectivedata.map((val, key) => {
                            return (<tr key={key}
                                        className="text-xs text-left h-[40px] border-b border-gray-600 items-center">
                                <td className="pl-5">{val.objective}</td>
                                <td className="pl-5">{val.result}</td>
                                <td>
                                    <div className="w-full mx-auto">
                                        {val.change === 'Success' ? (<button
                                            className="flex items-center justify-center px-3 py-1 mx-auto rounded-md text-mainGreen bg-mainGreen/20">
                                            Success
                                        </button>) : (<button
                                            className="flex items-center justify-center px-3 py-1 mx-auto text-red-500 rounded-md bg-red-500/20">
                                            Failed
                                        </button>)}
                                    </div>
                                </td>
                            </tr>);
                        })}
                    </table>
                </div>
            </div>
            {/* -------------------------------------------- */}
            <div
                className="flex md:items-center items-start gap-2 text-white overflow-x-scroll scrollbar-hide md:flex-row flex-col md:h-[260px]">
                {/*  column */}
                <div className="vd-box2 flex flex-col gap-2 relative h-full lg:w-[50%] w-full">
                    <p className="px-5 font-light">Insights</p>{' '}
                    <table className="w-full text-center metrix-table">
                        <tr className="border-b border-t border-gray-600 h-[35px] table-heading text-xs">
                            <th>Status</th>
                            <th>Provider</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                    </table>
                </div>
                <div className="vd-box flex flex-col gap-5 relative h-full lg:w-[50%] overflow-x-scroll">
                    <div className="flex items-center justify-between w-full">
                        <p className="font-light">Best and worst trading time</p>{' '}
                        <div className="absolute w-full bg-gray-600 h-[1px] top-10 left-0"></div>
                    </div>
                    <div
                        className="flex flex-col flex-1 space-y-3 text-sm justify-evenly statistics2 whitespace-nowrap">
                        <div className="flex">
                            <div>
                                <p className="text-sm font-light">Best hour</p>{' '}
                                <p className="text-lg text-mainColor">
                                    {metrixData?.bestHour - 12 > 0 ? `${metrixData?.bestHour - 12} PM` : `${metrixData?.bestHour} AM`}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-light">Best day</p> <p
                                className="text-lg text-mainColor">{metrixData?.bestDay}</p>
                            </div>
                            <div>
                                <p className="text-sm font-light ml-2">Best month</p>{' '}
                                <p className="text-lg text-mainColor ml-2">{metrixData?.bestMonth}</p>
                            </div>
                            <div>
                                <p className="text-sm font-light">Best year</p> <p
                                className="text-lg text-mainColor">{metrixData?.bestYear}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <p className="text-sm font-light">Worst hour</p>
                                <p className="text-lg text-red-500">
                                    {metrixData?.worstHour - 12 > 0 ? `${metrixData?.worstHour - 12} PM` : `${metrixData?.worstHour} AM`}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-light">Worst day</p>
                                <p className="text-lg text-red-500">{metrixData?.worstDay}</p>
                            </div>
                            <div>
                                <p className="text-sm font-light ml-2">Worst month</p>
                                <p className="text-lg text-red-500 ml-2">{metrixData?.worstMonth}</p>
                            </div>
                            <div>
                                <p className="text-sm font-light">Worst year</p>
                                <p className="text-lg text-red-500">{metrixData?.worstYear}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Metrix;
