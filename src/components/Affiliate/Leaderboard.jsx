import React, {useEffect, useState} from 'react';
import ReactCountryFlag from "react-country-flag"
import {useNavigate} from 'react-router-dom';
import {affiliateLeadersAPI} from '../../api'
import {getOrdinalNumber, showCustomError,} from '../../utils/utils';
import AL_1 from '../../images/affiliate/AL_1.svg';
import AL_2 from '../../images/affiliate/AL_2.svg';
import AL_3 from '../../images/affiliate/AL_3.svg';

const Leaderboard = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);
    const [leaderboard, setLeaderboard] = useState([])

    const fetchLeaderboard = async () => {
        try {
            const data = await affiliateLeadersAPI(1, 10);
            setLeaderboard(data.leaders)
        } catch (error) {
            showCustomError(setNotification, error.message);
        }
    }

    useEffect(() => {
        fetchLeaderboard()
    }, []);

    return (
        <div className="space-y-4 vd-box4 leaderboard-table bg-secTheme">
            <div className="flex justify-between">
                <p className=" text-[24px] text-[#6EFDEB] font-light leading-[1.2]">Top Affiliates Leaderboard</p>
                <button className="text-sm underline" onClick={() => navigate('/user-affiliate/leaderboards')}>
                    See All
                </button>
            </div>
            <table className="w-full text-xs table-auto">
                <thead>
                <tr className="border-b border-[#3B3C3D] ">
                    <td>Position/Name</td>
                    <td>Country</td>
                    <td>Direct</td>
                    <td>Indirect</td>
                    <td>Earnings</td>
                </tr>
                </thead>

                <tbody>
                {leaderboard.map((item, index) => (
                    <tr>
                        {/*{index >= 0 && index <= 2 ?
                            <td className=" whitespace-nowrap">
                                <img
                                    src={AL_1}
                                    alt=""
                                    className="absolute w-5 h-5 cursor-pointer top-3 right-4"
                                />
                                {item?.firstName} {item?.lastName}
                            </td> :
                            <td className=" whitespace-nowrap">
                                {getOrdinalNumber(index + 1)}{item?.firstName} {item?.lastName}
                            </td>
                        }*/}
                        <td className=" whitespace-nowrap">
                            {getOrdinalNumber(index + 1)} {item?.firstName} {item?.lastName}
                        </td>
                        <td>
                            <ReactCountryFlag countryCode={item?.country || 'us'} svg/>
                        </td>
                        <td>{item?.directAffiliates}</td>
                        <td>{item?.indirectAffiliates}</td>
                        <td>${item?.totalEarnings.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    );
};

export default Leaderboard;
