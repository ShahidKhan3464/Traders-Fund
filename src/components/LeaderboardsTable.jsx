import React from 'react';

import left from '../images/icons/arrowleft.svg';
import right from '../images/icons/arrow-right.svg';
import Pagination from '@mui/material/Pagination';
// https://mui.com/material-ui/react-pagination/

const stuff = [
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  },
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  },
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  },
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  },
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  },
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  },
  {
    rank: '1st',
    name: 'Alexander Frang',
    profit: '$76,483.79',
    country: 'United States',
    size: '$100,000.00',
    gain: '78%'
  }
];

const LeaderboardsTable = ({ data }) => {
  return (
    <div className="flex flex-col min-w-full bg-grayTheme border  border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide ">
      <div className="p-5 ">
        <p className="text-lg">Leadership</p>
        <p className="font-light">Last updated 5 mins ago</p>
      </div>
      <table className="w-full overflow-y-scroll text-center bg-secTheme">
        <tr className="uppercase table-heading">
          <th>RANK</th>
          <th>USERNAME</th>
          <th>PROFIT</th>
          <th>% GAIN</th>
          <th>Account size</th>
          <th>Country</th>
        </tr>

        {data &&
          data.map((val, key) => {
            return (
              <tr key={key} className="text-sm h-[60px] border-b border-gray-500/20">
                <td>{val.rank}</td>
                <td>{val.user.fullname}</td>
                <td>{val.currentBalance - val.initialBalance}</td>

                <td>{(((val.currentBalance - val.initialBalance) / val.initialBalance) * 100).toFixed(2)}</td>
                <td>{val.initialBalance}</td>
                <td>USA</td>
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

export default LeaderboardsTable;
