import React, { useEffect, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from 'react-router-dom';
import TopAffiliates from '../components/Affiliate/TopAffiliates';
import { affiliateLeadersAPI } from "../api";
import { getOrdinalNumber, showCustomError, getBadge } from "../utils/utils";

const TopAffiliatesLeaderboard = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);
    const [leaderboard, setLeaderboard] = useState([]);
    const [top3Leaders, setTop3Leaders] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [maxPages, setMaxPages] = useState(0);
    const [name, setName] = useState()

    const fetchLeaderboard = async (pageNumber, name) => {
        try {
            setPageNumber(pageNumber);
            const data = await affiliateLeadersAPI(pageNumber, 10, name);
            setLeaderboard(pageNumber === 1 ? data.leaders.splice(3) : data.leaders)
            setMaxPages(Math.ceil(data.pagination.total / perPage));
            if (pageNumber === 1 && data.leaders.length) {
                setTop3Leaders(data.leaders.slice(0, data.leaders.length >= 3 ? 3 : data.leaders.length));
            }
        } catch (error) {
            showCustomError(setNotification, error.message);
        }
    };

    useEffect(() => {
        fetchLeaderboard(pageNumber, name);
    }, [pageNumber, name]);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/user-affiliate')}>
                <BsChevronLeft className="cursor-pointer"/>
                <p className="text-gray-600">Top Affiliates Leaderboard</p>
            </div>
            {/* top affiliates */}
            <TopAffiliates data={top3Leaders}/>
            {/* top affiliates */}
            <div className={'flex justify-end'}>
                <div className='w-[250px]'>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                        placeholder="Client name"
                    />
                </div>
            </div>


            <div className="space-y-4 overflow-scroll vd-box">
                <table className="text-sm table-auto" style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead className="border-b border-[#3B3C3D]">
                    <tr>
                        <td style={{textAlign: 'center', padding: '8px'}}>#Rank</td>
                        <td style={{textAlign: 'center', padding: '8px'}}>Country & Name</td>
                        <td style={{textAlign: 'center', padding: '8px'}}>Total Affiliate Signup</td>
                        <td style={{textAlign: 'center', padding: '8px'}}>Direct Earnings</td>
                        <td style={{textAlign: 'center', padding: '8px'}}>Indirect Earnings</td>
                        <td style={{textAlign: 'center', padding: '8px'}}>Total Earnings</td>
                    </tr>
                    </thead>
                    <tbody className="bg-secTheme">
                    {leaderboard.map((item, index) => (
                        <tr key={index}>
                            <td className="whitespace-nowrap" style={{textAlign: 'center', padding: '8px'}}>
                                {getOrdinalNumber(((index + 1) + ((pageNumber - 1) * perPage)) + (pageNumber === 1 ? 3 : 0))}
                            </td>
                            <td className="capitalize" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                textAlign: 'center',
                                padding: '8px'
                            }}>
                                <ReactCountryFlag countryCode={item.country || 'us'} svg/>
                                {item.firstName} {item.lastName}
                                {getBadge(item.affiliateType)}
                            </td>
                            <td style={{textAlign: 'center', padding: '8px'}}>{item.totalAffiliates}</td>
                            <td style={{textAlign: 'center', padding: '8px'}}>${item.directEarnings.toFixed(2)}</td>
                            <td style={{textAlign: 'center', padding: '8px'}}>${item.indirectEarnings.toFixed(2)}</td>
                            <td style={{textAlign: 'center', padding: '8px'}}>${item.totalEarnings.toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between mt-3 text-sm">
                    <button
                        disabled={(pageNumber - 1) < 1}
                        onClick={() => fetchLeaderboard(pageNumber - 1)}
                        className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]"
                    >
                        Previous
                    </button>
                    <div>Page {pageNumber} of {maxPages}</div>
                    <button
                        disabled={(pageNumber + 1) > maxPages}
                        onClick={() => fetchLeaderboard(pageNumber + 1)}
                        className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopAffiliatesLeaderboard;
