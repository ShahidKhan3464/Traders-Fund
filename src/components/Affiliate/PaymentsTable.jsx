import React from 'react';
import {formatDate} from "@fullcalendar/core";

const PaymentsTable = ({title, data}) => {
    return (
        <div className="space-y-4 overflow-scroll leaderboard-table bg-secTheme">
            <table className="w-full overflow-scroll text-xs table-auto">
                <thead>
                <tr className="border-b border-[#3B3C3D] ">
                    <td>Item</td>
                    <td>Amount</td>
                    <td className="text-right">
                        <span className="mr-4">Status</span>
                    </td>
                    <td className=" whitespace-nowrap">Added At</td>
                    <td className=" whitespace-nowrap">Payout Date</td>
                </tr>
                </thead>

                <tbody>
                {data.map(item => (
                    <tr>
                        <td>{item?.label ? item?.label : '-'}</td>
                        <td>${item.amount.toFixed(2)}</td>
                        <td className="text-right">
                            <div
                                className={`sm:w-16 ml-auto flex justify-center rounded-full px-2 py-1 ${item.paid ? 'text-[#00A4E6] bg-[#00A4E6]/5' : 'text-[#FFCB30] bg-[#FFCB30]/5'}`}
                            >
                                {item.paid ? 'Paid' : 'Pending'}
                            </div>
                        </td>
                        <td>
                            <div>{item?.createdAt ? formatDate(new Date(item?.createdAt), {
                                month: 'numeric',
                                year: 'numeric',
                                day: 'numeric',
                                hour12: true,
                                hour: 'numeric',
                                minute: 'numeric',
                                locale: 'en',
                            }) : '-'}</div>
                        </td>
                        <td>
                            <div>{item?.paidAt ? formatDate(new Date(item?.paidAt), {
                                month: 'numeric',
                                year: 'numeric',
                                day: 'numeric',
                                hour12: true,
                                hour: 'numeric',
                                minute: 'numeric',
                                locale: 'en',
                            }) : '-'}</div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentsTable;
