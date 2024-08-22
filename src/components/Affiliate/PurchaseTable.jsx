import React from 'react';
import ReactCountryFlag from "react-country-flag"
import {formatDate} from "@fullcalendar/core";

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

const challengeLevel = {
    ONE_STEP: 'One Step',
    TWO_STEPS: 'Two Step',
    INSTANT_FUNDING: 'Instant',
}

const PurchaseTable = ({title, data}) => {
    return (<div className="space-y-4 overflow-scroll leaderboard-table bg-secTheme">
            <table className="w-full overflow-scroll text-xs table-auto">
                <thead>
                <tr className="border-b border-[#3B3C3D] ">
                    <td>Country & Name</td>
                    <td>Joined</td>
                    <td>Item</td>
                    <td>Earned</td>
                </tr>
                </thead>

                <tbody>
                {data && data.map(item => (<tr>
                        <td className="flex items-center gap-1 mt-1 sm:w-40 whitespace-nowrap">
                            <ReactCountryFlag countryCode={item?.country || 'us'} svg/>
                            <p>{item?.firstName} {item?.lastName}</p>
                        </td>
                        <td>
                            {item.createdAt && formatDate(new Date(item.createdAt), {
                                month: 'numeric',
                                year: 'numeric',
                                day: 'numeric',
                                hour12: true,
                                hour: 'numeric',
                                minute: 'numeric',
                                locale: 'en',
                            })}
                        </td>
                        <td>{item?.label ? 'PTF ' + item?.level / 1000 + 'k '+challengeLevel[item?.challengeGroupName] : '-'}</td>
                        <td>${item?.amount.toFixed(2)}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>);
};

export default PurchaseTable;