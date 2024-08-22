import React from 'react';
import moment from 'moment';

import left from '../images/icons/arrowleft.svg';
import right from '../images/icons/arrow-right.svg';
import Pagination from '@mui/material/Pagination';
// https://mui.com/material-ui/react-pagination/

const MT5WithdrawalsTable = ({data, pages, fetchMT5WithdrawalsList, pageNumber}) => {
    return (
        <div
            className="mt-4 sm:mt-0 flex flex-col overflow-x-scroll  w-full bg-grayTheme  border border-[#3B3C3D]  rounded-lg text-white  scrollbar-hide ">
            <div className="p-5 bg-grayTheme">
                <p className="text-lg">Payout Transactions</p>
            </div>
            {data && data.length ? (
                <>
                    <table className="w-full overflow-y-scroll text-center bg-secTheme">
                        <tr className="uppercase table-heading">
                            <th>ACCOUNT</th>
                            <th>AMOUNT</th>
                            <th>FEE</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                        </tr>

                        {data.map((val, key) => {
                            return (
                                <tr key={key} className="text-sm   uppercase h-[60px] border-b border-gray-500/20">
                                    <td>{val.TradingAccount?.login}</td>
                                    <td>{Number(val.amount)?.toFixed(2)}</td>
                                    <td>{Number(val.fee)?.toFixed(2)}</td>
                                    <td>{val.status}</td>
                                    <td>{moment(val.updatedAt).format('YYYY-MM-DD hh:mm A')}</td>
                                    {/* <td>
                {' '}
                <div className="flex items-center justify-center gap-4 cursor-pointer">
                  <img src={download} alt="" />
                  <img src={mail} alt="" />
                </div>{' '}
              </td> */}
                                </tr>
                            );
                        })}
                    </table>
                    <div className="flex items-center justify-between m-3 text-sm">
                        <button disabled={(pageNumber - 1) < 1}
                                onClick={async () => fetchMT5WithdrawalsList(pageNumber - 1)}
                                className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous
                        </button>
                        <div>Page {pageNumber} of {pages}</div>
                        <button disabled={(pageNumber + 1) > pages}
                                onClick={async () => fetchMT5WithdrawalsList(pageNumber + 1)}
                                className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next
                        </button>
                    </div>
                </>) : (
                <div className="p-5 text-center">
                    <p className="text-mainBlue text-center">No payout transactions found</p>
                </div>
            )}
        </div>
    );
};

export default MT5WithdrawalsTable;
