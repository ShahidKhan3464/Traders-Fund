import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {BsChevronLeft} from 'react-icons/bs';
import PaymentsTable from '../components/Affiliate/PaymentsTable';
import {affiliateEarningsAPI, affiliatePayoutStatisticsAPI, affiliateStatisticsAPI} from "../api";
import {showCustomError} from "../utils/utils";
import Notification from "../components/Notification";


const AffiliatePayments = () => {
    const navigate = useNavigate();
    const [earningsPageNumber, setEarningsPageNumber] = useState(1);
    const [earningsPerPage, setEarningsPerPage] = useState(10);
    const [maxEarningsPages, setMaxEarningsPages] = useState(0);
    const [affiliateEarnings, setAffiliateEarnings] = useState([])
    const [statistics, setStatistics] = useState(null);
    const [payoutStatistics, setPayoutStatistics] = useState(null);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        (async () => {
            await fetchAffiliateStatistics()
            await fetchAffiliateEarnings(1)
            await fetchAffiliatePayoutStatistics('CURRENT_MONTH')
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
            setPayoutStatistics(await affiliatePayoutStatisticsAPI(d));
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
            const response = await affiliateEarningsAPI(pageNumber, earningsPerPage)
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
    return (
        <>
            <div className="space-y-6 sm:w-[90%]">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/user-affiliate')}>
                    <BsChevronLeft className="cursor-pointer"></BsChevronLeft>
                    <p className="text-gray-600">Payment</p>
                </div>
                {/* top affiliates */}
                <div
                    className="grid items-center grid-cols-1 gap-3 text-white lg:grid-cols-4 sm:grid-cols-2 lg:justify-between scrollbar-hide ">
                    {/* Column */}
                    <div className="flex flex-col w-full gap-1 vd-box">
                        <div className="flex items-center gap-1">
                            <p className="text-lg font-medium">This Month</p>{' '}
                        </div>

                        <div className="flex items-center justify-between ">
                            <p className="text-lg">${payoutStatistics?.totalEarningsByDuration?.toFixed(2) || 0}</p>
                        </div>
                    </div>
                    {/* Column */}
                    <div className="flex flex-col w-full gap-1 vd-box">
                        <div className="flex items-center gap-1">
                            <p className="text-lg font-medium">Total Earnings</p>{' '}
                        </div>

                        <div className="flex items-center justify-between ">
                            <p className="text-lg">${statistics?.totalEarnings?.toFixed(2) || 0}</p>
                        </div>
                    </div>
                    {/* Column */}
                    <div className="flex flex-col w-full gap-1 vd-box">
                        <div className="flex items-center gap-1">
                            <p className="text-lg font-medium">Total Direct Earnings </p>{' '}
                        </div>

                        <div className="flex items-center justify-between ">
                            <p className="text-lg">${statistics?.directEarnings?.toFixed(2) || 0}</p>
                        </div>
                    </div>
                    {/* Column */}
                    <div className="flex flex-col w-full gap-1 vd-box">
                        <div className="flex items-center gap-1">
                            <p className="text-lg font-medium">Total Indirect Earnings</p>{' '}
                        </div>

                        <div className="flex items-center justify-between ">
                            <p className="text-lg">${statistics?.indirectEarnings?.toFixed(2) || 0}</p>
                        </div>
                    </div>
                </div>
                {/* top affiliates */}

                <div className="space-y-4 vd-box ">
                    {affiliateEarnings.length ? <>
                        <PaymentsTable data={affiliateEarnings || []}></PaymentsTable>
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
            {notification && <Notification message={notification.message} type={notification.type}/>}
        </>
    );
};

export default AffiliatePayments;
