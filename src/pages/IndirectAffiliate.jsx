import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BsChevronLeft} from 'react-icons/bs';
import {showCustomError} from "../utils/utils";
import Notification from "../components/Notification";
import {affiliateEarningsAPI, affiliateStatisticsAPI, affiliateUsersAPI} from "../api";
import SignUpTable from "../components/Affiliate/SignUpTable";
import PurchaseTable from "../components/Affiliate/PurchaseTable";

const data = [{
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined',
    item: 'PTF Phase 1'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Pending',
    item: 'PTF Phase 1'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined',
    item: 'PTF Phase 1'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined',
    item: 'PTF Phase 1'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined',
    item: 'PTF Phase 1'
}];

const IndirectAffiliate = () => {
    const navigate = useNavigate();
    const [affiliateUsers, setAffiliateUsers] = useState([])
    const [affiliateEarnings, setAffiliateEarnings] = useState([])
    const [statistics, setStatistics] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [maxPages, setMaxPages] = useState(0);
    const [earningsPageNumber, setEarningsPageNumber] = useState(1);
    const [earningsPerPage, setEarningsPerPage] = useState(10);
    const [maxEarningsPages, setMaxEarningsPages] = useState(0);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        (async () => {
            await fetchAffiliateStatistics()
            await fetchAffiliateUsers(1)
            await fetchAffiliateEarnings(1)
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

    const fetchAffiliateUsers = async (pageNumber) => {
        try {
            setPageNumber(pageNumber)
            const response = await affiliateUsersAPI(pageNumber, perPage, true)
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

    const fetchAffiliateEarnings = async (pageNumber) => {
        try {
            setEarningsPageNumber(pageNumber)
            const response = await affiliateEarningsAPI(pageNumber, earningsPerPage, 'T2')
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

    return (<>
        <div className="space-y-6 sm:w-[90%]">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/user-affiliate')}>
                <BsChevronLeft className="cursor-pointer"></BsChevronLeft>
                <p className="text-gray-600">Indirect Affiliate</p>
            </div>
            {/* top affiliates */}
            <div
                className="grid items-center grid-cols-1 gap-3 text-white lg:grid-cols-4 sm:grid-cols-2 lg:justify-between scrollbar-hide">
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Total Invite</p>{' '}
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">{statistics?.indirectAffiliates || 0}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Total Signup </p>{' '}
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">{statistics?.totalIndirectAffiliates || 0}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Total Indirect Earnings </p>{' '}
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">${statistics?.indirectEarnings.toFixed(2) || 0}</p>
                    </div>
                </div>
                {/* Column */}
                <div className="flex flex-col w-full gap-1 vd-box">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium">Conversion Rate</p>{' '}
                    </div>

                    <div className="flex items-center justify-between ">
                        <p className="text-lg">{((statistics?.indirectAffiliates || 0) * 100 / (statistics?.totalIndirectAffiliates || 1)).toFixed(2) || 0}%</p>
                    </div>
                </div>
            </div>
            {/* top affiliates */}
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="space-y-4 vd-box ">
                    <p>Invite list</p>
                    {affiliateUsers.length ? <>
                        <SignUpTable data={affiliateUsers || []}></SignUpTable>
                        <div className="flex justify-between">
                            <button disabled={(pageNumber - 1) < 1}
                                    onClick={async () => fetchAffiliateUsers(pageNumber - 1)}
                                    className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous
                            </button>
                            <div className="flex flex-1 text-sm justify-evenly join p-2">
                                <div>Page {pageNumber} of {maxPages}</div>
                            </div>
                            <button disabled={(pageNumber + 1) > maxPages}
                                    onClick={async () => fetchAffiliateUsers(pageNumber + 1)}
                                    className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next
                            </button>
                        </div>
                    </> : (<div className="p-5 text-center">
                        <p className="text-mainBlue text-center">No signups found</p>
                    </div>)}
                </div>
                <div className="space-y-4 vd-box ">
                    <p>Purchase List</p>
                    {affiliateEarnings.length ? <>
                        <PurchaseTable data={affiliateEarnings || []}></PurchaseTable>
                        <div className="flex justify-between">
                            <button disabled={(earningsPageNumber - 1) < 1}
                                    onClick={async () => fetchAffiliateEarnings(earningsPageNumber - 1)}
                                    className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous
                            </button>
                            <div className="flex flex-1 text-sm justify-evenly join p-2">
                                <div>Page {earningsPageNumber} of {maxEarningsPages}</div>
                            </div>
                            <button disabled={(earningsPageNumber + 1) > maxEarningsPages}
                                    onClick={async () => fetchAffiliateEarnings(earningsPageNumber + 1)}
                                    className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next
                            </button>
                        </div>
                    </> : (<div className="p-5 text-center">
                        <p className="text-mainBlue text-center">No purchases found</p>
                    </div>)}
                </div>
            </div>
        </div>
        {notification && <Notification message={notification.message} type={notification.type}/>}
    </>);
};

export default IndirectAffiliate;
