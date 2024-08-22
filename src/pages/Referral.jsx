import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import LeaderboardsTable from '../components/LeaderboardsTable';

import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Box} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
// https://mui.com/material-ui/react-pagination/
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import profilepic from '../images/profilepic.png';
import upload from '../images/icons/upload-cloud-02.svg';
import howitworks from '../images/Group 7108.png';
import Tab from './Tab';
import close from '../images/icons/Close.svg';
import send from '../images/icons/send.svg';
import check from '../images/icons/check.svg';
import money from '../images/icons/money.svg';
import success from '../images/icons/Success.svg';
import inivtes from '../images/icons/invite icon.svg';
import clicks from '../images/icons/clicks icon.svg';
import closed from '../images/icons/closed icon.svg';
import earned from '../images/icons/earned icon.svg';
import axios from 'axios';
// react-copy-to-clipboard
import {CopyToClipboard} from 'react-copy-to-clipboard';
// https://www.npmjs.com/package/react-copy-to-clipboard

// https://mui.com/material-ui/react-switch/
import Switch from '@mui/material/Switch';

import left from '../images/icons/arrowleft.svg';
import right from '../images/icons/arrow-right.svg';

// https://mui.com/material-ui/react-pagination/
import {makeStyles, createStyles} from '@material-ui/core/styles';

import IconButton from '@mui/material/IconButton';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {AiOutlineClose, AiOutlineQuestionCircle} from 'react-icons/ai';

import {useStore} from '../store';
import {BsChevronLeft} from 'react-icons/bs';
import {affiliateStatsAPI, affiliateTransactionsAPI} from "../api";
import {showCustomError} from "../utils/utils";
import Notification from "../components/Notification";

const data = [{
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}, {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}, {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}, {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}, {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}, {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}, {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
}];

const earningdata = [{
    id: '1', item: 'PTF Phase 1', size: '$5,000.00', earned: '$250.57 ', invitee: 'pajamabillionare@mail.com'
}, {
    id: '2', item: 'PTF Phase 1', size: '$5,000.00', earned: '$250.57 ', invitee: 'pajamabillionare@mail.com'
}, {
    id: '3', item: 'PTF Phase 1', size: '$5,000.00', earned: '$250.57 ', invitee: 'pajamabillionare@mail.com'
}, {
    id: '4', item: 'PTF Phase 1', size: '$5,000.00', earned: '$250.57 ', invitee: 'pajamabillionare@mail.com'
}, {
    id: '5', item: 'PTF Phase 1', size: '$5,000.00', earned: '$250.57 ', invitee: 'pajamabillionare@mail.com'
}];
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

const types = ['Referrals', 'Leadership', 'Resources'];
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
`;
const style = theme => ({
    width: 'auto', bgcolor: theme.palette.mode === 'dark' ? '' : '#1C1D20', padding: '24px 24px', borderRadius: '8px'
});

function TabGroup() {
    const [active, setActive] = useState(types[0]);
    const [value, setValue] = useState('{invite-code}');
    const [copied, setCopied] = useState(false);
    const {userData} = useStore();
    const [affiliatePurchass, setAffiliatePurchass] = useState([]);
    const affiliateLink = `${process.env.REACT_APP_LANDING_URL}/affiliate-signup?ref=${userData.affiliateCode}`;
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [paidEarning, setPaidEarning] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [totalInvites, setTotalInvites] = useState(0);
    const [affiliateStats, setAffiliateStats] = useState('');
    const [notification, setNotification] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [perPage, setPerPage] = useState(25);
    const [maxPages, setMaxPages] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            try {
                const affiliateStats = await affiliateStatsAPI()
                setAffiliateStats(affiliateStats)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    showCustomError(setNotification, error.response.data.message);
                } else {
                    showCustomError(setNotification, error.message);
                }
            }
            await loadAffiliateTransactions(1)
        })();
    }, []);


    const loadAffiliateTransactions = async (currentPageNumber) => {
        try {
            setPageNumber(currentPageNumber)
            const transactionsResponse = await affiliateTransactionsAPI(currentPageNumber, perPage)
            setMaxPages(Math.ceil(transactionsResponse.pagination.total / perPage))
            setTransactions(transactionsResponse.transactions)
            // setMaxPages(Math.ceil(earningdata.length / perPage))
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    }

    const formatCurrency = amount => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
    };

    return (<>{notification && <Notification message={notification.message} type={notification.type}/>}
        <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/user-affiliate')}>
                <BsChevronLeft className="cursor-pointer"></BsChevronLeft>
                <p className="text-gray-600">Go back</p>
            </div>
            <div className="grid items-center grid-cols-1 gap-3 text-white lg:flex lg:justify-between scrollbar-hide">
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Total Earnings</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">{formatCurrency(affiliateStats?.totalEarnings ?? 0)}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Paid Earnings </p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">{formatCurrency(affiliateStats?.totalPaidEarnings ?? 0)}</p>
                    </div>
                </div>
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
                        <p className="text-lg">{formatCurrency(affiliateStats?.totalBalance ?? 0)}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Total Invites</p>{' '}
                        <LightTooltip title="" placement="top-start">
                            <IconButton>
                                <AiOutlineQuestionCircle className="text-sm text-white"/>
                            </IconButton>
                        </LightTooltip>
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">{affiliateStats.totalInvites ?? 0}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <button className="flex flex-wrap p-1 space-x-2 md:mx-0 bg-[#1C1D20] rounded-lg w-auto">
                    <Tab active={active} setActive={setActive} types={types}></Tab>
                </button>
                <button
                    className={`bg-[#00A4E6] rounded-lg  py-2 px-4 cursor-pointer flex items-center justify-center shadow-lg`}>
                    Claim Earnings
                </button>
            </div>

            <div className="space-y-4 text-white">
                {active === 'Referrals' ? (<>
                    <div
                        className="mt-4 sm:mt-0 flex flex-col  bg-grayTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide ">
                        <div className="flex justify-between p-5 ">
                            <p className="text-lg">Referrals</p>
                            <p className="cursor-pointer text-mainBlue">How it works</p>
                        </div>
                        {transactions && transactions.length ? (<>
                            <table className="w-full overflow-y-scroll text-center bg-secTheme">
                                <tr className="uppercase table-heading">
                                    <th>#</th>
                                    <th>ITEM</th>
                                    <th>ACCOUNT SIZE</th>
                                    <th>EARNED</th>
                                    <th>INVITEE</th>
                                </tr>

                                {affiliatePurchass && affiliatePurchass.map((val, key) => {
                                    return (<tr key={key} className="text-sm h-[60px] border-b border-gray-500/20">
                                        <td>{key}</td>
                                        <td>PTF Challenge</td>
                                        <td>{val.challengeLevel}</td>
                                        <td>{(val.purchaseTotal * 0.1).toFixed(2)}</td>
                                        <td>{val.fullname}</td>
                                    </tr>);
                                })}

                                {transactions && transactions.map((val, key) => {
                                    return (<tr key={key} className="text-sm h-[60px] border-b border-gray-500/20">
                                        <td>{(key + 1) + ((pageNumber - 1) * perPage)}</td>
                                        <td>{val.Purchase.TradingAccount.Challenge.label}</td>
                                        <td>{val.Purchase.TradingAccount.initialBalance}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.Purchase.User.firstName} {val.Purchase.User.lastName}</td>
                                    </tr>);
                                })}
                            </table>
                            <div
                                className="flex items-center justify-between gap-4 px-1 pt-4 mt-auto text-sm left-1 right-1 sm:w-full md:px-8 bg-secTheme">
                                <button
                                    disabled={(pageNumber - 1) < 1}
                                    onClick={async () => loadAffiliateTransactions(pageNumber - 1)}
                                    className="bg-white flex justify-center items-center text-black p-2 px-4 rounded-lg  md:w-[87px]">
                                    <img src={left} alt="previous"/>
                                    Previous
                                </button>
                                {/*<Pagination
                                count={maxPages}
                                hidePrevButton
                                hideNextButton
                                shape="rounded"
                                sx={{
                                    '& .MuiPaginationItem-page': {color: '#475467'},
                                    '& .Mui-selected': {backgroundColor: 'white', color: 'black'}
                                }}
                            />*/}
                                <button
                                    onClick={async () => loadAffiliateTransactions(pageNumber + 1)}
                                    disabled={pageNumber + 1 > maxPages}
                                    className="bg-white text-black p-2 rounded-lg flex px-4 justify-center items-center md:w-[87px]">
                                    Next <img src={right} alt="next"/>
                                </button>
                                {/* <p>
                    Showing <span className="font-bold text-mainColor">1 - 4</span> from <span className="font-bold text-mainColor">40</span> data
                  </p> */}
                            </div>
                        </>) : (<>
                            <div className="p-5 text-center">
                                <p className="text-mainBlue text-center">No transactions found</p>
                            </div>
                        </>)}
                    </div>
                </>) : null}
                {active === 'Leadership' ? <LeaderboardsTable></LeaderboardsTable> : null}
                {active === 'Resources' ? (
                    <div className="flex flex-wrap items-center justify-center w-full gap-8 mx-auto lg:justify-start ">
                        <div
                            className="relative block overflow-hidden rounded-lg group bg-secTheme h-[240px] w-[330px]"></div>
                        <div
                            className="relative block overflow-hidden rounded-lg group bg-secTheme h-[240px] w-[330px]"></div>
                        <div
                            className="relative block overflow-hidden rounded-lg group bg-secTheme h-[240px] w-[330px]"></div>
                        <div
                            className="relative block overflow-hidden rounded-lg group bg-secTheme h-[240px] w-[330px]"></div>
                        <div
                            className="relative block overflow-hidden rounded-lg group bg-secTheme h-[240px] w-[330px]"></div>
                        <div
                            className="relative block overflow-hidden rounded-lg group bg-secTheme h-[240px] w-[330px]"></div>
                    </div>) : null}
            </div>
        </div>
    </>);
}

export default function Referral({activeNav, setActiveNav}) {
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
    return (<>
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
