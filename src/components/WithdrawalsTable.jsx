import React from 'react';
import moment from 'moment';

const WithdrawalsTable = ({data, pages, fetchWalletTransactionsList, pageNumber}) => {
    return (<div
        className="mt-4 sm:mt-0 flex flex-col overflow-x-scroll  w-full bg-grayTheme  border border-[#3B3C3D]  rounded-lg text-white  scrollbar-hide ">
        <div className="p-5 bg-grayTheme">
            <p className="text-lg">Wallet Transactions</p>
        </div>
        {data && data.length ? (<>
            <table className="w-full overflow-y-scroll text-center bg-secTheme">
                <tr className="uppercase table-heading">
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>FEE</th>
                    <th>STATUS</th>
                    <th>DESTINATION</th>
                    <th>FAILURE REASON</th>
                    <th>DATE</th>
                </tr>

                {data.map((val, key) => {
                    return (<tr key={key} className="text-sm   uppercase h-[60px] border-b border-gray-500/20">
                        <td>{val.type}</td>
                        <td>{Number(val.amount)?.toFixed(2)}</td>
                        <td>{Number(val.fee)?.toFixed(2)}</td>
                        <td>{val.status}</td>
                        <td>{val.destination ? val.destination : '-'}</td>
                        <td>{val.failureReason ? val.failureReason : '-'}</td>
                        <td>
                            <p>{moment(val.createdAt).format('YYYY-MM-DD hh:mm A')}</p>
                        </td>
                    </tr>);
                })}
            </table>
            <div className="flex items-center justify-between m-3 text-sm">
                <button disabled={(pageNumber - 1) < 1}
                        onClick={async () => fetchWalletTransactionsList(pageNumber - 1)}
                        className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous
                </button>
                <div>Page {pageNumber} of {pages}</div>
                <button disabled={(pageNumber + 1) > pages}
                        onClick={async () => fetchWalletTransactionsList(pageNumber + 1)}
                        className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next
                </button>
            </div>
        </>) : (<div className="p-5 text-center">
            <p className="text-mainBlue text-center">No wallet transactions found</p>
        </div>)}
    </div>);
};

export default WithdrawalsTable;
