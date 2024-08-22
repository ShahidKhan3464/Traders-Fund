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
    status: 'Joined'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Pending'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined'
}, {
    position: '1st',
    name: 'Abdul Kuddus',
    country: 'Jamaica',
    direct: '23',
    indirect: '12',
    earnings: '4543',
    date: ' Feb 27, 2024',
    status: 'Joined'
}];

const SignUpTable = ({title, data, onNext, onPrev}) => {
    return (<div className="space-y-4 overflow-scroll leaderboard-table bg-secTheme">
        <table className="w-full overflow-scroll text-xs table-auto">
            <thead>
            <tr className="border-b border-[#3B3C3D] ">
                <td>Country & Name</td>
                <td>Joined Date</td>
                <td className="text-right">Status</td>
            </tr>
            </thead>

            <tbody>
            {data && data.map(item => (<tr>
                <td className="flex items-center gap-1 mt-1 sm:w-40 whitespace-nowrap">
                    {item?.AffiliateUser && <ReactCountryFlag countryCode={item?.AffiliateUser?.country || 'us'} svg/>}
                    <p>{item?.AffiliateUser ? `${item?.AffiliateUser.firstName} ${item?.AffiliateUser.lastName}` : item?.email}</p>
                </td>
                <td>
                    <div>{item?.createdAt && formatDate(new Date(item?.createdAt), {
                        month: 'numeric',
                        year: 'numeric',
                        day: 'numeric',
                        hour12: true,
                        hour: 'numeric',
                        minute: 'numeric',
                        locale: 'en',
                    })}</div>
                </td>
                <td className="flex items-center justify-end w-full  mt-2">
                    <div
                        className={`w-auto ml-auto flex rounded-full px-2 py-1 ${item.status ? 'text-[#00A4E6] bg-[#00A4E6]/5' : 'text-[#FFCB30] bg-[#FFCB30]/5'}`}
                    >
                        {item.status ? 'Joined' : 'Pending'}
                    </div>
                </td>
            </tr>))}
            </tbody>
        </table>
    </div>);
};

export default SignUpTable;