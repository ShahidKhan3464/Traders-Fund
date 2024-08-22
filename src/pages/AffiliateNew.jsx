import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FiCopy} from 'react-icons/fi';
import {useCopyToClipboard} from '../utils/copy';
import {useStore} from '../store';
import Notification from '../components/Notification';
import {getDuration, showCustomError, showCustomSuccess} from '../utils/utils';
import {
    affiliateEarningsAPI,
    affiliatePayoutStatisticsAPI,
    affiliateStatisticsAPI,
    affiliateUsersAPI,
    getProfile,
    inviteUsersAPI,
} from '../api';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HowItWorks from '../components/Affiliate/HowItWorks';
import Leaderboard from '../components/Affiliate/Leaderboard';
import styled from 'styled-components';
import SignUpTable from '../components/Affiliate/SignUpTable';
import PurchaseTable from '../components/Affiliate/PurchaseTable';
import PaymentsTable from '../components/Affiliate/PaymentsTable';
import {formatDate} from "@fullcalendar/core";
import QRCode from 'qrcode';
import fileDownload from "js-file-download";

const TabBtn = styled.button`
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    opacity: 0.6;

    border: 0;
    outline: 0;
    ${({active}) => active && `
    background: "#3B3C3D";
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
    display: flex;
`;
const types = ['Sign up', 'Purchase'];

const AffiliateNew = ({activeNav, setActiveNav}) => {
    const [active, setActive] = useState(types[0]);
    const [value, copy] = useCopyToClipboard();
    const [noReferrals, setNoReferrals] = useState(false);
    const [affiliateCode, setAffiliateCode] = useState('');
    const [affiliateUrl, setAffiliateUrl] = useState('');
    const [profile, setProfile] = useState('');
    const [copied1, setCopied1] = useState(false);
    const [copied2, setCopied2] = useState(false);
    const [filter, setFilter] = useState('This Month');
    const [affiliateStats, setAffiliateStats] = useState(null)
    const [affiliateUsers, setAffiliateUsers] = useState([])
    const [affiliatePayments, setAffiliatePayments] = useState([])
    const [affiliateEarnings, setAffiliateEarnings] = useState([])
    const [statistics, setStatistics] = useState(null);
    const [payoutStatistics, setPayoutStatistics] = useState(null);
    const [duration, setDuration] = useState('TODAY');
    const [pageNumber, setPageNumber] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [maxPages, setMaxPages] = useState(0);
    const [earningsPageNumber, setEarningsPageNumber] = useState(1);
    const [earningsPerPage, setEarningsPerPage] = useState(10);
    const [maxEarningsPages, setMaxEarningsPages] = useState(0);

    const handleFilterChange = event => {
        setFilter(event.target.value);
    };
    const navigate = useNavigate();

    const {userData} = useStore();
    const [affiliatePurchass, setAffiliatePurchass] = useState([]);
    //const affiliateLink = `${process.env.REACT_APP_LANDING_URL}/affiliate-signup?ref=${userProfile.affiliateCode}&username=${userProfile.firstName}-${userProfile.lastName}}`;
    const [notification, setNotification] = useState(null);
    const [emailInput, setEmailInput] = useState('');

    const sendInvitationHandler = async () => {
        try {
            const response = await inviteUsersAPI({
                emails: emailInput.split(',')
            });
            setEmailInput('');
            showCustomSuccess(setNotification, response.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    const handleCopyClick = () => {
        copy(affiliateUrl);
        setCopied1(true);
        setTimeout(() => {
            setCopied1(false);
        }, 2000);
    };
    const handleCopyClickCode = () => {
        copy(affiliateCode.split('/')[affiliateCode.split('/').length - 1]);
        setCopied2(true);
        setTimeout(() => {
            setCopied2(false);
        }, 2000);
    };

    function CustomTabPanel(props) {
        const {children, value, index, ...other} = props;

        return (<div
            className=""
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (<Box sx={{}}>
                <Typography>{children}</Typography>
            </Box>)}
        </div>);
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`
        };
    }

    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
        if (newValue === 1 || newValue === 2) {
            setMaxPages(0)
            setAffiliateUsers([]);
            setPageNumber(1);
            setMaxEarningsPages(0);
            setAffiliateEarnings([]);
            setEarningsPageNumber(1);
            (async () => {
                await fetchAffiliateUsers(pageNumber, newValue)
                await fetchAffiliateEarnings(pageNumber, newValue)
            })()
        }
        if (newValue === 3) {
            setMaxEarningsPages(0);
            setAffiliateEarnings([]);
            setEarningsPageNumber(1);
            (async () => {
                await fetchAffiliateEarnings(pageNumber, newValue)
            })()
        }
    };
    const handleFileChange = event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async function (e) {
                const text = e.target.result;
                const rows = text.split(/\r?\n/);
                const emails = rows.slice(1) // Skip the header
                    .filter(row => row.trim()) // Remove empty rows
                    .map(row => {
                        const columns = row.split(';');
                        return columns[0].trim(); // Trim whitespace around emails
                    });

                const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                const validEmails = emails.filter(email => isValidEmail(email));

                await sendInvitations(validEmails);
            };
            reader.readAsText(file);
        }
    };

    const sendInvitations = async (emails) => {
        try {
            const response = await inviteUsersAPI({emails});
            showCustomSuccess(setNotification, `Invitations sent! ${response.message}`);
        } catch (error) {
            console.error("Failed to send invitations:", error);
            showCustomError(setNotification, error.message);
        }
    };


    useEffect(() => {
        (async () => {
            try {
                const userProfile = await getProfile();
                setProfile(userProfile);
                setAffiliateCode(userProfile.affiliateCode);
                const referralUrl = `${process.env.REACT_APP_LANDING_URL}/affiliate-signup?ref=${userProfile.affiliateCode}&username=${userProfile.firstName}-${userProfile.lastName}`;
                setAffiliateUrl(referralUrl);
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    showCustomError(setNotification, error.response.data.message);
                } else {
                    showCustomError(setNotification, error.message);
                }
            }
            await fetchAffiliateStatistics()
            await fetchAffiliatePayoutStatistics('TODAY')
        })();
    }, []);


    const fetchAffiliateStatistics = async () => {
        try {
            setStatistics(await affiliateStatisticsAPI())
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    }

    const fetchAffiliatePayoutStatistics = async (d) => {
        try {
            setDuration(d)
            setPayoutStatistics(await affiliatePayoutStatisticsAPI(d));
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    }

    const fetchAffiliateUsers = async (pageNumber, tab) => {
        try {
            setPageNumber(pageNumber)
            const response = await affiliateUsersAPI(pageNumber, perPage, tab === 2)
            setAffiliateUsers(response.users);
            setMaxPages(Math.ceil(response.pagination.total / perPage))
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    }

    const fetchAffiliateEarnings = async (pageNumber, tab) => {
        try {
            setEarningsPageNumber(pageNumber)
            const response = await affiliateEarningsAPI(earningsPageNumber, earningsPerPage, tab === 3 ? '' : tab === 1 ? 'T1' : 'T2')
            setAffiliateEarnings(response.earnings);
            setMaxEarningsPages(Math.ceil(response.pagination.total / earningsPerPage))
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    }

    useEffect(() => {
        setActiveNav(true);
        window.scrollTo(0, 0);
    }, []);

    const handleEmailInput = e => {
        setEmailInput(e.target.value);
    };

    return (<div className="flex flex-col items-start gap-4 lg:flex-row ">
        <div className="w-full space-y-6 lg:w-2/4">
            <div className="flex flex-col gap-3 vd-box4 bg-secTheme">
                <div className="w-[261px] px-2 py-1 text-sm text-black rounded-full bg-mainColor">
                    <p className="text-center">Join Pro Traders Fund Affiliate Club</p>
                </div>
                <p className="md:text-[32px] text-[24px] text-[#6EFDEB] font-light leading-[1.2]">
                    Earn over USD $5000+ in Commissions & Exclusive Rewards!
                </p>
                <p className="font-medium text-gray-400">
                    Refer your friends and unlock unlimited earning potential. Earn from your referrals, and when
                    they refer others, you earn from
                    them too!
                </p>

                <div className="w-full space-y-4 ">
                    <div className="flex justify-between text-sm text-right">
                        <p className="text-left text-[#6EFDEB]">Invite Code</p>
                        <p>Tell friends to use at checkout</p>
                    </div>
                    <div className="h-[40px] flex">
                        <input
                            value={affiliateCode.split('/')[affiliateCode.split('/').length - 1]}
                            type=""
                            className="w-full font-light h-full px-3 border rounded-l-lg border-[#00A4E6] bg-secTheme"
                        />
                        <div
                            className={`flex items-center justify-center h-full px-6 border rounded-r-lg shadow-lg cursor-pointer border-[#00A4E6] text-[#00A4E6] ${copied2 ? '' : 'bg-secTheme'}`}
                            onClick={handleCopyClickCode}
                        >
                            {copied2 === false ? (<div className="flex items-center gap-1 ">
                                <FiCopy/>
                                <p>Copy</p>
                            </div>) : ('Copied!')}
                        </div>
                    </div>
                    <p className="text-sm text-center text-gray-400">OR </p>
                </div>

                <div className="w-full space-y-4 ">
                    <div className="flex justify-between text-sm text-right">
                        <p className="text-left text-[#6EFDEB]">Invite Link</p>
                        <p>Copy and Send the link to your friend</p>
                    </div>
                    <div className="h-[40px] flex">
                        <input
                            value={affiliateUrl}
                            type=""
                            className="w-full h-full px-3 border rounded-l-lg border-[#00A4E6] bg-secTheme font-light"
                        />
                        <div
                            className={`flex items-center justify-center h-full px-6 border rounded-r-lg shadow-lg cursor-pointer border-[#00A4E6] text-[#00A4E6] ${copied1 ? '' : 'bg-secTheme'}`}
                            onClick={handleCopyClick}
                        >
                            {copied1 === false ? (<div className="flex items-center gap-1 ">
                                <FiCopy/>
                                <p>Copy</p>
                            </div>) : ('Copied!')}
                        </div>
                    </div>
                    <p className="text-sm text-center text-gray-400">OR </p>
                </div>

                <div className="w-full space-y-4 ">
                    <div className="flex justify-between text-sm text-right">
                        <p className="text-left text-[#6EFDEB]">Invite by Email</p>
                        <p>Enter your friend email to invite</p>
                    </div>
                    <div className="flex flex-col justify-between w-full gap-2 text-sm sm:flex-row">
                        <div className="h-[40px] flex w-full">
                            <input
                                value={emailInput}
                                onChange={e => handleEmailInput(e)}
                                type=""
                                placeholder="Enter email address"
                                className=" h-full w-full font-light px-3 border rounded-l-lg border-[#00A4E6] bg-secTheme"
                            />
                            <div
                                className={`flex items-center justify-center h-full  border rounded-r-lg shadow-lg cursor-pointer border-[#00A4E6] text-[#00A4E6] ${copied1 ? '' : 'bg-secTheme'}`}
                                onClick={handleCopyClick}
                            >
                                <button
                                    className={`h-full px-2 rounded-r-lg shadow-lg flex gap-2 items-center cursor-pointer  ${emailInput && 'hover:bg-blue-600'}`}
                                    onClick={sendInvitationHandler}
                                    disabled={!emailInput}
                                >
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g id="ideate/line/arrow02">
                                            <path
                                                id="ideateicons"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.02084 5.39668C7.04384 5.05227 7.34169 4.79172 7.6861 4.81472L14.2295 5.25177C14.5418 5.27264 14.7906 5.52137 14.8114 5.83373L15.2485 12.3771C15.2715 12.7215 15.0109 13.0194 14.6665 13.0424C14.3221 13.0654 14.0243 12.8048 14.0013 12.4604L13.656 7.29108L6.38017 14.5669C6.1361 14.811 5.74037 14.811 5.49629 14.5669C5.25221 14.3228 5.25221 13.9271 5.49629 13.683L12.7721 6.40721L7.6028 6.06194C7.25839 6.03894 6.99783 5.74109 7.02084 5.39668Z"
                                                fill="#00A4E6"
                                            />
                                        </g>
                                    </svg>
                                    Invite
                                </button>
                            </div>
                        </div>
                        <div className="h-[40px] flex text-sm w-full">
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleFileChange}
                                style={{display: 'none'}}
                                id="csvInput"
                            />
                            <label htmlFor="csvInput"
                                   className="flex items-center w-full justify-center px-6 gap-2 h-full border rounded-lg shadow-lg cursor-pointer border-[#00A4E6] text-[#00A4E6]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                     fill="none">
                                    {/* SVG path here */}
                                </svg>
                                Invite with CSV
                            </label>
                        </div>
                    </div>
                    <p className="text-sm text-center text-gray-400">OR </p>
                    <div className="w-full space-y-4 ">
                        <div className="flex justify-between text-sm text-right">
                            <p className="text-left text-[#6EFDEB]">Invite by QR Code</p>
                            <p>Download and share QR code to scan</p>
                        </div>
                        <div className="h-[40px] flex text-sm w-full"
                             onClick={async () => fileDownload(await (await fetch(await QRCode.toDataURL(String(affiliateUrl)))).blob(), `${profile?.firstName}${profile?.lastName}AffiliateQR.png`)}>
                            <div
                                className={`flex items-center w-full justify-center px-6 gap-2  h-full  border rounded-lg shadow-lg cursor-pointer border-[#00A4E6] text-[#00A4E6] `}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="figicon/line/download">
                                        <path
                                            id="ideateicons"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.0001 3.37963C10.3453 3.37963 10.6251 3.65945 10.6251 4.00463L10.6251 11.1397L13.0016 8.94085C13.2549 8.70642 13.6504 8.72178 13.8848 8.97514C14.1192 9.22851 14.1039 9.62394 13.8505 9.85836L10.4246 13.0282C10.185 13.2499 9.8152 13.2499 9.57563 13.0282L6.14971 9.85836C5.89635 9.62393 5.881 9.2285 6.11542 8.97514C6.34985 8.72178 6.74528 8.70642 6.99864 8.94085L9.3751 11.1397V4.00463C9.3751 3.65945 9.65493 3.37963 10.0001 3.37963ZM2.29175 7.66204C2.63693 7.66204 2.91675 7.94186 2.91675 8.28704C2.91675 12.1991 6.08806 15.3704 10.0001 15.3704C13.9121 15.3704 17.0834 12.1991 17.0834 8.28704C17.0834 7.94186 17.3632 7.66204 17.7084 7.66204C18.0536 7.66204 18.3334 7.94186 18.3334 8.28704C18.3334 12.8894 14.6025 16.6204 10.0001 16.6204C5.39771 16.6204 1.66675 12.8894 1.66675 8.28704C1.66675 7.94186 1.94657 7.66204 2.29175 7.66204Z"
                                            fill="#00A4E6"
                                        />
                                    </g>
                                </svg>
                                Download your QR Code
                            </div>
                        </div>
                    </div>
                </div>

                {/* {noReferrals ? (
            <div className="flex flex-col  items-center justify-center text-center w-[300px]">
              <img src={empty} alt="" />
              <p className="mt-8 text-xl">No referrals yet</p>
              <p className="text-sm font-medium text-gray-300">Start referring friends and start earning when they buy a challenge.</p>
            </div>
          ) : (
            <div className="w-full px-5 space-y-5">
              <div className="flex items-center justify-between pb-5 border-b border-[#00A4E6]">
                <p className="text-lg">Invited friends</p>{' '}
                <button
                  className="h-full px-4 py-2 rounded-lg shadow-lg bg-mainBlue hover:bg-blue-600"
                  onClick={() => navigate('/user-affiliate/referrals')}
                >
                  See overview
                </button>
              </div>
              {affiliatePurchass.map((purchase, index) => (
                <div key={index} className="flex items-center justify-between pb-5 border-b border-[#00A4E6]">
                  <p>{purchase.email}</p>
                  <p className={`text-${purchase.status === 'Invite sent' ? 'yellow-500' : 'green-500'}`}>
                    {purchase.status === 'Invite sent' ? 'Invite sent' : `$${purchase.purchaseTotal}`}
                  </p>
                </div>
              ))}
            </div>
          )} */}
            </div>
            <div className="flex vd-box4 bg-secTheme">
                <Box sx={{width: '100%', overflowX: 'auto'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs
                            value={tabValue}
                            onChange={handleChange}
                            textColor="white"
                            aria-label="secondary tabs example"
                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                        >
                            <Tab label="Overview" {...a11yProps(0)} sx={{fontSize: '14px'}}/>
                            <Tab label="Direct Affiliate" {...a11yProps(1)} />
                            <Tab label="Indirect Affiliate" {...a11yProps(2)} />
                            <Tab label="Payment" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={tabValue} index={0}>
                        <div className="flex flex-col items-center justify-center w-full gap-4 pt-4 mx-auto">
                            <select className="border-none" defaultValue={duration} style={{appearance: 'auto'}}
                                    onChange={e => fetchAffiliatePayoutStatistics(e.target.value)}
                            >
                                <option value="TODAY">Today</option>
                                <option value="CURRENT_WEEK">This week</option>
                                <option value="LAST_WEEK">Last week</option>
                                <option value="CURRENT_MONTH">This month</option>
                                <option value="LAST_MONTH">Last month</option>
                                <option value="LAST_3_MONTHS">Last 3 months</option>
                                <option value="LAST_6_MONTHS">Last 6 months</option>
                                <option value="LAST_1_YEAR">Last 1 year</option>
                            </select>
                            <p className="text-[#00A4E6] text-3xl tracking-wide">${payoutStatistics?.totalEarningsByDuration?.toFixed(2) || 0}</p>
                            {payoutStatistics?.totalUnpaid > 0 && <>
                                <p className="text-sm font-light text-gray-300">Next Payout
                                    (${payoutStatistics?.totalUnpaid.toFixed(2)} ) {formatDate(payoutStatistics?.nextPayoutDate, {
                                        month: 'long', year: 'numeric', day: 'numeric', locale: 'en'
                                    })} (In {getDuration(new Date(payoutStatistics?.nextPayoutDate))})</p></>}
                            <p></p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Earnings</p>
                                <p className="text-lg">${statistics?.totalEarnings?.toFixed(2) || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Direct Earnings</p>
                                <p className="text-lg">${statistics?.directEarnings?.toFixed(2) || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Indirect Earnings</p>
                                <p className="text-lg">${statistics?.indirectEarnings?.toFixed(2) || 0}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Payout</p>
                                <p className="text-lg">${statistics?.totalPayout?.toFixed(2) || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Top Performing Referral </p>
                                <p className="text-lg">{statistics?.topAffiliate}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Signups</p>
                                <p className="text-lg">{statistics?.totalAffiliates || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Purchase</p>
                                <p className="text-lg">${statistics?.totalPurchaseAmount?.toFixed(2) || 0}</p>
                            </div>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1}>
                        <div className="grid grid-cols-2 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Direct Signups</p>
                                <p className="text-lg">{statistics?.directAffiliates || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Direct Purchase </p>
                                <p className="text-lg">${statistics?.directPurchaseAmount?.toFixed(2) || 0}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Direct Earnings</p>
                                <p className="text-lg">${statistics?.directEarnings?.toFixed(2) || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Conversion Rate</p>
                                <p className="text-lg">{((statistics?.directAffiliates || 0) * 100 / (statistics?.totalDirectAffiliates || 1)).toFixed(2) || 0}%</p>
                            </div>
                        </div>
                        <>
                            <ButtonGroup>
                                {types.map(type => (
                                    <TabBtn key={type} active={active === type} onClick={() => setActive(type)}>
                                        {type}
                                    </TabBtn>))}
                            </ButtonGroup>
                            {active === 'Sign up' ? (<>
                                {affiliateUsers.length ? <SignUpTable data={affiliateUsers || []}></SignUpTable> : <div>
                                    No users found
                                </div>}{' '}
                                {maxPages > 1 && <div
                                    className="flex cursor-pointer items-center justify-center w-full p-2 text-center border border-[#3B3C3D] rounded-md"
                                    onClick={() => navigate('/user-affiliate/direct-affiliate')}
                                >
                                    View All
                                </div>}
                            </>) : (<>
                                {affiliateEarnings.length ? <PurchaseTable
                                    data={affiliateEarnings || []}></PurchaseTable> : <div>No transactions found</div>}
                                {maxEarningsPages > 1 && <div
                                    className="flex cursor-pointer items-center justify-center w-full p-2 text-center border border-[#3B3C3D] rounded-md"
                                    onClick={() => navigate('/user-affiliate/direct-affiliate')}
                                >
                                    View All
                                </div>}
                            </>)}
                        </>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={2}>
                        <div className="grid grid-cols-2 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Indirect Signups</p>
                                <p className="text-lg">{statistics?.indirectAffiliates || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Indirect Purchase </p>
                                <p className="text-lg">${statistics?.indirectPurchaseAmount?.toFixed(2) || 0}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-4 ">
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Total Indirect Earnings </p>
                                <p className="text-lg">${statistics?.indirectEarnings?.toFixed(2) || 0}</p>
                            </div>
                            <div className="flex flex-col p-4 space-y-2 rounded-md bg-mainTheme">
                                <p className="font-light">Conversion Rate</p>
                                <p className="text-lg">{((statistics?.indirectAffiliates || 0) * 100 / (statistics?.totalIndirectAffiliates || 1)).toFixed(2) || 0}%</p>
                            </div>
                        </div>
                        <>
                            <ButtonGroup>
                                {types.map(type => (
                                    <TabBtn key={type} active={active === type} onClick={() => setActive(type)}>
                                        {type}
                                    </TabBtn>))}
                            </ButtonGroup>
                            {active === 'Sign up' ? (<>
                                {affiliateUsers.length ? <SignUpTable data={affiliateUsers || []}></SignUpTable> : <div>
                                    No users found
                                </div>}{' '}
                                {maxPages > 1 && <div
                                    className="flex cursor-pointer items-center justify-center w-full p-2 text-center border border-[#3B3C3D] rounded-md"
                                    onClick={() => navigate('/user-affiliate/indirect-affiliate')}
                                >
                                    View All
                                </div>}
                            </>) : (<>
                                {affiliateEarnings.length ? <PurchaseTable
                                    data={affiliateEarnings || []}></PurchaseTable> : <div>No transactions found</div>}
                                {maxEarningsPages > 1 && <div
                                    className="flex cursor-pointer items-center justify-center w-full p-2 text-center border border-[#3B3C3D] rounded-md"
                                    onClick={() => navigate('/user-affiliate/indirect-affiliate')}
                                >
                                    View All
                                </div>}
                            </>)}
                        </>
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={3}>
                        <div className="flex flex-col items-center justify-center w-full gap-4 pt-6 mx-auto">
                            <select className="border-none" defaultValue={duration} style={{appearance: 'auto'}}
                                    onChange={e => fetchAffiliatePayoutStatistics(e.target.value)}
                            >
                                <option value="TODAY">Today</option>
                                <option value="CURRENT_WEEK">This week</option>
                                <option value="LAST_WEEK">Last week</option>
                                <option value="CURRENT_MONTH">This month</option>
                                <option value="LAST_MONTH">Last month</option>
                                <option value="LAST_3_MONTHS">Last 3 months</option>
                                <option value="LAST_6_MONTHS">Last 6 months</option>
                                <option value="LAST_1_YEAR">Last 1 year</option>
                            </select>
                            <p className="text-[#00A4E6] text-3xl tracking-wide">${payoutStatistics?.totalEarningsByDuration?.toFixed(2) || 0}</p>
                            {payoutStatistics?.totalUnpaid > 0 &&
                                <p className="text-sm font-light text-gray-300">Next Payout
                                    (${payoutStatistics?.totalUnpaid.toFixed(2)} ) {formatDate(payoutStatistics?.nextPayoutDate, {
                                        month: 'long', year: 'numeric', day: 'numeric', timeZone: 'UTC', locale: 'en'
                                    })} (In {getDuration(new Date(payoutStatistics?.nextPayoutDate))})</p>}
                            <p></p>
                        </div>
                        {affiliateEarnings.length ? <PaymentsTable data={affiliateEarnings || []}></PaymentsTable> :
                            <div>No transactions found</div>}
                        {maxEarningsPages > 1 && <div
                            className="flex cursor-pointer items-center justify-center w-full p-2 text-center border border-[#3B3C3D] rounded-md"
                            onClick={() => navigate('/user-affiliate/payments')}
                        >
                            View All
                        </div>}
                    </CustomTabPanel>
                </Box>
            </div>
        </div>
        <div className="w-full space-y-6 lg:w-1/3">
            <HowItWorks></HowItWorks>
            <Leaderboard></Leaderboard>
        </div>
        {notification && <Notification message={notification.message} type={notification.type}/>}
    </div>);
};

export default AffiliateNew;
