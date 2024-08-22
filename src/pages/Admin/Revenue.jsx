import React from 'react';
import inivtes from '../../images/icons/invite icon.svg';
import xcircle from '../../images/icons/x-circle.svg';
import closed from '../../images/icons/closed icon.svg';
import earned from '../../images/icons/earned icon.svg';
import upload from '../../images/icons/upload-cloud-02.svg';
import success from '../../images/icons/Success.svg';
import uploadicon from '../../images/icons/fi_upload.svg';
import download from '../../images/icons/fi_download.svg';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';

const challengedata = [
  {
    id: '01',
    item: 'PTF Challenge',
    inv: 'XXXXXXXXXX',
    name: 'Alexander Bendithe',
    currency: 'US dollars',
    amt: '$1000.00',
    status: 'Paid'
  },
  {
    id: '01',
    item: 'PTF Challenge',
    inv: 'XXXXXXXXXX',
    name: 'Alexander Bendithe',
    currency: 'US dollars',
    amt: '$1000.00',
    status: 'Paid'
  }
];

const Revenue = () => {
  return (
    <div className="mt-4 space-y-4 sm:mt-0">
      {/* ROW */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:flex-row sm:justify-start">
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="flex items-center justify-center p-3 rounded-lg bg-mainTheme">
              <img src={closed} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>Total Income</p>
          <p className="text-[#22C36B] text-[28px]">4,750,000</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="flex items-center justify-center p-3 rounded-lg bg-mainTheme">
              {' '}
              <img src={xcircle} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>Total Expense</p>
          <p className="text-red-500 text-[28px]">4,750,000</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="flex items-center justify-center p-3 rounded-lg bg-mainTheme">
              {' '}
              <img src={earned} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>Total Profit</p>
          <p className="text-[#22C36B] text-[28px]">4,750,000</p>
        </div>
      </div>
      {/* ROW */}
      {/* SEARCH */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex justify-start items-center bg-secTheme sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
          <FiSearch></FiSearch>
          <input
            type="text"
            className="mx-2 bg-transparent border-none outline-none focus:ring-0 focus:ring-offset-0"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
          Filter <BsChevronDown></BsChevronDown>
        </div>
      </div>
      {/* SEARCH */}
      {/* TABLE */}
      <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide overflow-y-scroll h-[428px]">
        <div className="flex items-center justify-between">
          <p className="mb-3">Income</p>
          <div className="p-1 mr-4 text-xs border border-gray-400 rounded-md cursor-pointer">View</div>
        </div>
        <table className="w-full text-center">
          <tr className="border-b border-t border-gray-600 h-[60px]">
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>#</th>
            <th>Item</th>
            <th>Invoice ID</th>
            <th>Name</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {challengedata.map((val, key) => {
            return (
              <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{val.id}</td>
                <td>{val.item}</td>
                <td>{val.inv}</td>
                <td>{val.name}</td>
                <td>{val.currency}</td>
                <td className="text-green-500">{val.amt}</td>
                <td>
                  <div>
                    {' '}
                    <div
                      className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                        val.status === 'Paid' ? 'text-mainColor bg-mainColor/20' : 'text-red-600 bg-red-500/20'
                      }`}
                    >
                      <p>{val.status}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-evenly">
                    <img src={uploadicon} alt="" className="cursor-pointer" />
                    <img src={download} alt="" className="cursor-pointer" />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-auto text-sm">
          <div className="flex items-center gap-4">
            <button className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous</button>
            <p>
              Page <span className="font-bold text-mainColor">1</span> of 10{' '}
            </p>
            <button className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next</button>
          </div>
          <p>
            Showing <span className="font-bold text-mainColor">1 - 4</span> from <span className="font-bold text-mainColor">40</span> data
          </p>
        </div>
      </div>
      {/* TABLE */}
      {/* TABLE */}
      <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide overflow-y-scroll h-[428px]">
        <div className="flex items-center justify-between">
          <p className="mb-3">Expenses</p>
          <div className="p-1 mr-4 text-xs border border-gray-400 rounded-md cursor-pointer">View</div>
        </div>
        <table className="w-full text-center">
          <tr className="border-b border-t border-gray-600 h-[60px]">
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>#</th>
            <th>Item</th>
            <th>Invoice ID</th>
            <th>Name</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {challengedata.map((val, key) => {
            return (
              <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{val.id}</td>
                <td>{val.item}</td>
                <td>{val.inv}</td>
                <td>{val.name}</td>
                <td>{val.currency}</td>
                <td className="text-green-500">{val.amt}</td>
                <td>
                  <div>
                    {' '}
                    <div
                      className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                        val.status === 'Paid' ? 'text-mainColor bg-mainColor/20' : 'text-red-600 bg-red-500/20'
                      }`}
                    >
                      <p>{val.status}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-evenly">
                    <img src={uploadicon} alt="" className="cursor-pointer" />
                    <img src={download} alt="" className="cursor-pointer" />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-auto text-sm">
          <div className="flex items-center gap-4">
            <button className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous</button>
            <p>
              Page <span className="font-bold text-mainColor">1</span> of 10{' '}
            </p>
            <button className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next</button>
          </div>
          <p>
            Showing <span className="font-bold text-mainColor">1 - 4</span> from <span className="font-bold text-mainColor">40</span> data
          </p>
        </div>
      </div>
      {/* TABLE */}
    </div>
  );
};

export default Revenue;
