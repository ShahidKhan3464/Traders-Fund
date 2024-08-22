import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {showCustomError} from '../utils/utils';
import {getWalletBalance, getWalletTransactionsList} from '../api';
import Notification from '../components-website/Notification';
import IconButton from '@mui/material/IconButton';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import WithdrawalsTable from '../components/WithdrawalsTable';

const LightTooltip = styled(({className, ...props}) => <Tooltip {...props}
                                                                classes={{popper: className}}/>)(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11
    }
}));

// ! Modal
const BackdropUnstyled = React.forwardRef((props, ref) => {
    const {open, className, ...other} = props;
    return <div className={clsx({'MuiBackdrop-open': open}, className)} ref={ref} {...other} />;
});
BackdropUnstyled.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool
};

function TabGroup() {
    const navigate = useNavigate();
    const [showAccounts, setShowAccounts] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tradingAccounts, setTradingAccounts] = useState([]);
    const [tradingAccount, setTradingAccount] = useState(null);
    const [tradingAccountExists, setTradingAccountExists] = useState(true);
    const [notification, setNotification] = useState('');
    const [balance, setBalance] = useState({});
    const [tableData, setTableData] = useState([]);
    const [tablePagination, setTablePagination] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPerPage, setMaxPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                await fetchData();
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const fetchData = async () => {
        await fetchWalletBalance();
        await fetchWalletTransactionsList(1);
    };

    const fetchWalletBalance = async id => {
        try {
            const response = await getWalletBalance();
            setBalance(response);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const fetchWalletTransactionsList = async (page = 1) => {
        try {
            setPageNumber(page)
            const response = await getWalletTransactionsList(page);
            if (response?.withdrawals) {
                setTableData(response?.withdrawals);
            }
            setPages(Math.ceil(response.pagination.total / maxPerPage));
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const onPageChange = page => {
        setPage(page);
    };

    const onPrev = async () => {
        const newPage = page - 1;
        if (page - 1 >= 0) {
            await fetchWalletTransactionsList(newPage);
            setPage(newPage);
        }
    };

    const onNext = async () => {
        const newPage = page + 1;
        if (page + 1 <= tablePagination) {
            await fetchWalletTransactionsList(newPage);
            setPage(newPage);
        }
    };

    return (
        <div className="space-y-4 vd-box4">
            <div className="flex items-center justify-between">
                <div className="bg-grayTheme">
                    <p className="text-lg">Wallet</p>
                </div>
                <div className="flex items-center justify-center gap-4 ">
                    <button onClick={() => navigate('/withdraw')}
                            className="flex items-center gap-2 px-4 py-2 text-white bg-[#00A4E6] rounded-md">
                        Withdraw
                    </button>
                </div>
            </div>
            <div className="grid items-center grid-cols-1 gap-3 text-white lg:flex lg:justify-between scrollbar-hide">
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Current Balance</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">${balance.currentBalance?.toFixed(2)}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Available Balance</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">${balance.availableBalance?.toFixed(2)}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Pending Deposit Balance</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">${balance.pendingDepositBalance?.toFixed(2)}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Pending Withdrawal Balance</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">${balance.pendingWithdrawalBalance?.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4 text-white">
                <WithdrawalsTable pages={pages} pageNumber={pageNumber} data={tableData} fetchWalletTransactionsList={fetchWalletTransactionsList}/>
            </div>
            {notification && <Notification message={notification?.message} type={notification?.type}/>}
        </div>
    );
}

export default function Wallet({activeNav, setActiveNav}) {
    useEffect(() => {
        setActiveNav(true);
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <TabGroup/>
        </>
    );
}
