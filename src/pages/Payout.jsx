import React, {useEffect, useState} from 'react';
import {createSearchParams, useNavigate} from 'react-router-dom';

import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {BsChevronDown} from 'react-icons/bs';
import {Box} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
// https://mui.com/material-ui/react-pagination/
import Account from '../components/Account';
import {showCustomError} from '../utils/utils';
import { getMT5WithdrawalEligibleList, getMT5WithdrawalsList, getTradingList, getUserProfileDetails } from '../api';
import Notification from '../components-website/Notification';
import howitworks from '../images/Group 7108.png';
import close from '../images/icons/Close.svg';
import send from '../images/icons/send.svg';
import check from '../images/icons/check.svg';
import money from '../images/icons/money.svg';
// react-copy-to-clipboard
// https://www.npmjs.com/package/react-copy-to-clipboard
// https://mui.com/material-ui/react-switch/
// https://mui.com/material-ui/react-pagination/
import IconButton from '@mui/material/IconButton';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {AiOutlineClose, AiOutlineQuestionCircle} from 'react-icons/ai';

import {useStore} from '../store';
import MT5WithdrawalsTable from '../components/MT5WithdrawalsTable';

const data = [
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    },
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    },
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    },
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    },
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    },
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    },
    {
        rank: '1st',
        name: 'Alexander Frang',
        profit: '$76,483.79',
        country: 'United States',
        size: '$100,000.00',
        gain: '78%'
    }
];

const earningdata = [
    {
        id: '1',
        item: 'PTF Phase 1',
        size: '$5,000.00',
        earned: '$250.57 ',
        invitee: 'pajamabillionare@mail.com'
    },
    {
        id: '1',
        item: 'PTF Phase 1',
        size: '$5,000.00',
        earned: '$250.57 ',
        invitee: 'pajamabillionare@mail.com'
    },
    {
        id: '1',
        item: 'PTF Phase 1',
        size: '$5,000.00',
        earned: '$250.57 ',
        invitee: 'pajamabillionare@mail.com'
    },
    {
        id: '1',
        item: 'PTF Phase 1',
        size: '$5,000.00',
        earned: '$250.57 ',
        invitee: 'pajamabillionare@mail.com'
    },
    {
        id: '1',
        item: 'PTF Phase 1',
        size: '$5,000.00',
        earned: '$250.57 ',
        invitee: 'pajamabillionare@mail.com'
    }
];
const label = {inputProps: {'aria-label': 'Switch demo'}};
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
`;
const style = theme => ({
    width: 'auto',
    bgcolor: theme.palette.mode === 'dark' ? '' : '#1C1D20',
    padding: '24px 24px',
    borderRadius: '8px'
});

function TabGroup() {
    const [value, setValue] = useState('{invite-code}');
    const [copied, setCopied] = useState(false);
    const {userData} = useStore();
    const [affiliatePurchass, setAffiliatePurchass] = useState([]);
    const navigate = useNavigate();
    const [showAccounts, setShowAccounts] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tradingAccounts, setTradingAccounts] = useState([]);
    const [tradingAccount, setTradingAccount] = useState(null);
    const [tradingAccountDetails, setTradingAccountDetails] = useState(null);
    const [tradingAccountExists, setTradingAccountExists] = useState(true);
    const [notification, setNotification] = useState('');
    const [eligibility, setEligibility] = useState({});
    const [tableData, setTableData] = useState([]);
    const [tablePagination, setTablePagination] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPerPage, setMaxPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState(1);
    const [kycDocdata, setKycDocdata] = useState([]);
    const [userActiveStatus, setUserActiveStatus] = useState(null);
    const handleAccsOpen = () => setShowAccounts(!showAccounts);

    const handleAccsClose = () => {
        setShowAccounts(false);
    };

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
        if (tradingAccounts[0]) {
            handleTradingAccount(tradingAccounts[0]?.id, 0);
        }
    }, [tradingAccounts]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // const fetchPurchases = async () => {
        //   try {
        //     const response = await axios.get(`${process.env.REACT_APP_PTF_API}/billing/get-affiliate-purchases`, {
        //       params: {
        //         userId: userData.id
        //       }
        //     });
        //     console.log(userData);
        //     console.log(response.data);
        //     setAffiliatePurchass(response.data);
        //   } catch (error) {
        //     console.error('Error fetching purchases:', error);
        //   }
        // };

        //fetchPurchases();
    }, []);
    const fetchUserProfileData = async () => {
        try {
            const response = await getUserProfileDetails();
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
            navigate({
                pathname: '/request-profit-split',
                search: createSearchParams({
                    tradingAccountId: tradingAccount?.id
                }).toString()
            })
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
    const handleTradingAccount = (accountId, index) => {
        setTradingAccount(tradingAccounts[index]);
        localStorage.setItem('currentTradingAccount', JSON.stringify(tradingAccounts[index]));
        (async () => {
            await fetchData(accountId);
        })();
    };

    const fetchData = async id => {
        if (tradingAccounts && tradingAccounts.length) {
            await fetchMT5WithdrawalEligibleList(id);
            await fetchMT5WithdrawalsList(1);
        }
    };

    const fetchMT5WithdrawalEligibleList = async id => {
        try {
            const response = await getMT5WithdrawalEligibleList(id);
            setEligibility(response);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const fetchMT5WithdrawalsList = async (page = 1) => {
        try {
            setPageNumber(page)
            const response = await getMT5WithdrawalsList(page, maxPerPage);
            if (response.mt5Withdrawals) {
                setTableData(response?.mt5Withdrawals);
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

    const onPrev = () => {
        const newPage = page - 1;
        if (page - 1 >= 0) {
            fetchMT5WithdrawalsList(newPage);
            setPage(newPage);
        }
    };

    const onNext = () => {
        const newPage = page + 1;
        if (page + 1 <= tablePagination) {
            fetchMT5WithdrawalsList(newPage);
            setPage(newPage);
        }
    };

    return (
        <>
            <div className="mb-4">
                <p className='mb-2'> Account (Switch between accounts) </p>
                <button
                    className="flex gap-2 justify-center items-center outline outline-1 py-2 px-4 outline-[#3B3C3D] rounded-md"
                    onClick={e => {
                        handleAccsOpen();
                        e.stopPropagation();
                    }}
                >
                    <span>{tradingAccount?.login}</span> <BsChevronDown></BsChevronDown>
                </button>
                {showAccounts && (
                    <div
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
                                {tradingAccounts ? (
                                    tradingAccounts.map((account, index) => (
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
                                        />
                                    ))
                                ) : (
                                    <p>No data available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="space-y-4 vd-box4">
                <div className="flex items-center justify-between">
                    <div className="bg-grayTheme">
                        <p className="text-lg">Profit Split</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 ">
                        <button
                            onClick={handleRequestProfitSplit
                            }
                            className="flex items-center gap-2 px-4 py-2 text-black bg-white rounded-md"
                        >
                            Request profit split
                        </button>
                    </div>
                </div>
                <div
                    className="grid lg:flex justify-between  grid-cols-2  gap-4 px-[8px] lg:px-0 text-sm lg:text-base ">
                    <div>
                        <p className="text-gray-400 uppercase">Profit Amount</p>
                        <p className="text-green-400">${eligibility?.profitAmount?.toFixed(2)}</p>
                    </div>
                    <div>
                        <p className="text-gray-400 uppercase">Bonus Amount</p>
                        <p className="text-green-400">${eligibility?.bonusAmount?.toFixed(2)}</p>
                    </div>
                </div>

                <div className="space-y-4 text-white">
                    <MT5WithdrawalsTable
                        pages={pages}
                        pageNumber={pageNumber} data={tableData} fetchMT5WithdrawalsList={fetchMT5WithdrawalsList}/>
                </div>
                {notification && <Notification message={notification?.message} type={notification?.type}/>}
            </div>
        </>
    );
}

export default function Payout({activeNav, setActiveNav}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const {userData} = useStore();

    useEffect(() => {
        setActiveNav(true);
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <TabGroup/>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{backdrop: Backdrop}}
            >
                <Box sx={style} className="space-y-3 text-white">
                    <div className="flex items-center justify-between">
                        <p></p>
                        <p className="text-2xl text-center">How it works</p>
                        <button
                            className=""
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            <img src={close} alt=""/>
                        </button>
                    </div>
                    <div className="flex justify-center w-full mx-auto">
                        {' '}
                        <img src={howitworks} alt="" className="w-[50%] sm:block hidden"/>
                    </div>
                    <div
                        className="flex flex-wrap items-center justify-center w-full gap-4 mx-auto sm:flex-row md:justify-between md:p-8">
                        <div className="w-[150px] h-[150px] space-y-3">
                            <img src={send} alt=""/>
                            <p>Send invitation</p>
                            <p className="text-sm">Send your referral link to your friends and tell them how awesome PTF
                                is.</p>
                        </div>
                        <div className="w-[150px] h-[150px] space-y-3">
                            <img src={check} alt=""/>
                            <p>Registration</p>
                            <p className="text-sm">Let them register to Pro Trader fund using your referral link</p>
                        </div>
                        <div className="w-[150px] h-[150px] space-y-3">
                            <img src={money} alt=""/>
                            <p>Get rewarded!</p>
                            <p className="text-sm">Get paid when your friend purchases a PTF Challenge</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 text-lg">
                        <input type="checkbox" name="" id=""/>
                        Don’t show again
                    </div>
                </Box>
            </Modal>
        </>

        //
    );
}
