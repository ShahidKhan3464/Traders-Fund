import React, { useEffect, useState } from 'react';
import inivtes from '../../images/icons/invite icon.svg';
import xcircle from '../../images/icons/x-circle.svg';
import closed from '../../images/icons/closed icon.svg';
import earned from '../../images/icons/earned icon.svg';
import upload from '../../images/icons/upload-cloud-02.svg';
import success from '../../images/icons/Success.svg';
import uploadicon from '../../images/icons/fi_upload.svg';
import download from '../../images/icons/fi_download.svg';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const invoicedata = [
  {
    id: '01',
    name: 'Alexander Blythe',
    method: 'Wire transfer',
    amt: '$1000.00',
    status: 'Pending',
    date: 'Sept 9, 2021'
  },
  {
    id: '01',
    name: 'Alexander Bendithe',
    method: 'Wire transfer',
    amt: '$1000.00',
    status: 'Paid',
    date: 'Sept 9, 2021'
  },
  {
    id: '01',
    name: 'Alexander Bendithe',
    method: 'Wire transfer',
    amt: '$1000.00',
    status: 'Unpaid',
    date: 'Sept 9, 2021'
  }
];

const Tab = styled.button`
  padding: 10px 10px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 8px;
  border: 0;
  outline: 0;
  color: #3b3c3d;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    background: #6EFDEB;
    opacity: 1;
  `}
`;

const types = ['All Payouts', 'Paid', 'Unpaid', 'Pending'];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  const [invStatus, setInvStatus] = useState('All Payouts');

  return (
    <>
      <div className="flex flex-wrap mx-3 my-3 space-x-2 md:mx-0">
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => {
              setActive(type);
              setInvStatus(type);
            }}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <div>
        {active === 'All Payouts' ? (
          <>
            <table className="w-full text-center">
              <tr className="border-b border-t border-gray-600 h-[60px]">
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>#</th>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
              {invoicedata.map((val, key) => {
                return (
                  <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.date}</td>
                    <td>{val.amt}</td>
                    <td>{val.method}</td>
                    <td>
                      <div>
                        {' '}
                        <div
                          className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                            val.status === 'Paid' ? 'text-mainColor bg-mainColor/20' : null
                          } ${val.status === 'Pending' ? 'text-yellow-500 bg-yellow-500/20' : null} ${
                            val.status === 'Unpaid' ? 'text-red-500 bg-red-500/20' : null
                          }`}
                        >
                          <p>{val.status}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </>
        ) : null}
      </div>
    </>
  );
}

const Payout = ({ admin, setAdmin }) => {
  setAdmin(true);
  return (
    <div className="mt-4 space-y-4 sm:mt-0">
      {/* ROW */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:flex-row sm:justify-start">
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3"></div>
          <p>Unpaid Payouts</p>
          <p className="text-mainColor text-[28px]">12</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3"></div>
          <p>Awaiting Approval</p>
          <p className="text-mainColor text-[28px]">12</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3"></div>
          <p>Number of Payments</p>
          <p className="text-mainColor text-[28px]">12</p>
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
      <div className="sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide h-[428px]">
        <p>Payout Requests</p>
        <TabGroup />
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
    </div>
  );
};

export default Payout;
