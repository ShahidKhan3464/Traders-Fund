import React from 'react';

import left from '../images/icons/arrowleft.svg';
import right from '../images/icons/arrow-right.svg';
import visa from '../images/icons/Visa Payment method icon.svg';
import mc from '../images/icons/MC Payment method icon.svg';
import Pagination from '@mui/material/Pagination';
// https://mui.com/material-ui/react-pagination/

import download from '../images/icons/download-01.svg';
import mail from '../images/icons/mail-02.svg';

const data = [
  // {
  //   id: '1',
  //   item: 'PTF Phase 1',
  //   invoice: 'xxxxxx',
  //   amt: '$250.57',
  //   status: 'Active ',
  //   card: visa
  // },
  // {
  //   id: '1',
  //   item: 'PTF Phase 1',
  //   invoice: 'xxxxxx',
  //   amt: '$250.57',
  //   status: 'Active ',
  //   card: mc
  // },
  // {
  //   id: '1',
  //   item: 'PTF Phase 1',
  //   invoice: 'xxxxxx',
  //   amt: '$250.57',
  //   status: 'Active ',
  //   card: visa
  // },
  // {
  //   id: '1',
  //   item: 'PTF Phase 1',
  //   invoice: 'xxxxxx',
  //   amt: '$250.57',
  //   status: 'Active ',
  //   card: mc
  // },
  // {
  //   id: '1',
  //   item: 'PTF Phase 1',
  //   invoice: 'xxxxxx',
  //   amt: '$250.57',
  //   status: 'Active ',
  //   card: visa
  // },
  // {
  //   id: '1',
  //   item: 'PTF Phase 1',
  //   invoice: 'xxxxxx',
  //   amt: '$250.57',
  //   status: 'Active ',
  //   card: mc
  // }
];

const TransactionsTable = () => {
  return (
    <div className="mt-4 sm:mt-0 flex flex-col  bg-grayTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide ">
      <div className="p-5 ">
        <p className="text-lg">Transactions</p>
      </div>
      <table className="w-full overflow-y-scroll text-center bg-secTheme">
        <tr className="uppercase table-heading">
          <th>#</th>
          <th>ITEM</th>
          <th>INVOICE ID 2</th>
          <th>PAYMENT METHOD</th>
          <th>AMOUNT</th>
          <th>STATUS</th>
          <th>ACTION </th>
        </tr>

        {data.map((val, key) => {
          return (
            <tr key={key} className="text-sm  uppercase h-[60px] border-b border-gray-500/20">
              <td>{val.id}</td>
              <td>{val.item}</td>
              <td>{val.invoice}</td>

              <td>
                <div className="flex items-center justify-center gap-2">
                  <img src={val.card} alt="" className="h-[32px] w-[46px]" />
                  <div className="flex flex-col text-left">
                    <p>My BOA bank card</p>
                    <p className="font-light ">Ending 5678</p>
                  </div>
                </div>
              </td>
              <td>{val.amt}</td>
              <td>
                {' '}
                <button className=" text-xs text-black flex justify-center bg-[#FFFAEB] rounded-full items-center mx-auto py-1 px-2 gap-1">
                  <p>{val.status}</p>
                </button>
              </td>
              <td>
                {' '}
                <div className="flex items-center justify-center gap-4 cursor-pointer">
                  <img src={download} alt="" />
                  <img src={mail} alt="" />
                </div>{' '}
              </td>
            </tr>
          );
        })}
      </table>
      <div className="flex items-center justify-between gap-4 px-1 pt-4 mt-auto text-sm left-1 right-1 sm:w-full md:px-8 bg-secTheme">
        <button className="bg-white flex justify-center items-center text-black p-2 px-4 rounded-lg  md:w-[87px]">
          <img src={left} alt="previous" />
          Previous
        </button>
        <Pagination
          count={10}
          hidePrevButton
          hideNextButton
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-page': { color: '#475467' },
            '& .Mui-selected': { backgroundColor: 'white', color: 'black' }
          }}
        />
        <button className="bg-white text-black p-2 rounded-lg flex px-4 justify-center items-center md:w-[87px]">
          Next <img src={right} alt="next" />
        </button>
        {/* <p>
                    Showing <span className="font-bold text-mainColor">1 - 4</span> from <span className="font-bold text-mainColor">40</span> data
                  </p> */}
      </div>
    </div>
  );
};

export default TransactionsTable;
