import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import profilepic from '../images/profilepic.png';
import upload from '../images/icons/upload-cloud-02.svg';
import success from '../images/icons/Success.svg';
import uploadicon from '../images/icons/fi_upload.svg';
import download from '../images/icons/fi_download.svg';

const invoicedata = [
  {
    id: '01',
    item: 'PTF Challenge',
    invoiceid: 'XXXXXXXXXX',
    name: 'Alexander Bendithe',
    method: 'VISA',
    amt: '$1000.00',
    status: 'Paid'
  },
  {
    id: '02',
    item: 'PTF Challenge',
    invoiceid: 'XXXXXXXXXX',
    name: 'Alexander Bendithe',
    method: 'VISA',
    amt: '$1000.00',
    status: 'Paid'
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

const types = ['All Invoices', 'Paid', 'Unpaid', 'Pending'];
function TabGroup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState(types[0]);
  const [invStatus, setInvStatus] = useState('Paid');

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
        {active === 'All Invoices' ? (
          <>
            <table className="w-full text-center">
              <tr className="border-b border-t border-gray-600 h-[60px]">
                <th>#</th>
                <th>Item</th>
                <th>Invoice ID</th>
                <th>Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {invoicedata.map((val, key) => {
                return (
                  <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                    <td>{val.id}</td>
                    <td className="text-yellow-600">{val.item}</td>
                    <td>{val.invoiceid}</td>
                    <td>{val.name}</td>
                    <td>{val.method}</td>
                    <td>{val.amt}</td>
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
          </>
        ) : null}
        {active === 'Unpaid' ? (
          <>
            <table className="w-full text-center">
              <tr className="border-b border-t border-gray-600 h-[60px]">
                <th>#</th>
                <th>Item</th>
                <th>Invoice ID</th>
                <th>Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {invoicedata.map((val, key) => {
                return (
                  <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                    <td>{val.id}</td>
                    <td className="text-yellow-600">{val.item}</td>
                    <td>{val.invoiceid}</td>
                    <td>{val.name}</td>
                    <td>{val.method}</td>
                    <td>{val.amt}</td>
                    <td>
                      <div>
                        {' '}
                        <div
                          className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                            invStatus === 'Paid' ? 'text-mainColor bg-mainColor/20' : 'text-red-600 bg-red-500/20'
                          }`}
                        >
                          {invStatus === 'Paid' ? <img src={success} alt="" /> : null}

                          {invStatus}
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
          </>
        ) : null}
        {active === 'Paid' ? (
          <>
            <table className="w-full text-center">
              <tr className="border-b border-t border-gray-600 h-[60px]">
                <th>#</th>
                <th>Item</th>
                <th>Invoice ID</th>
                <th>Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {invoicedata.map((val, key) => {
                return (
                  <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                    <td>{val.id}</td>
                    <td className="text-yellow-600">{val.item}</td>
                    <td>{val.invoiceid}</td>
                    <td>{val.name}</td>
                    <td>{val.method}</td>
                    <td>{val.amt}</td>
                    <td>
                      <div>
                        {' '}
                        <div
                          className={`bg-mainColor/20 rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                            invStatus === 'Paid' ? 'text-mainColor' : 'text-red-600'
                          }`}
                        >
                          {invStatus === 'Paid' ? <img src={success} alt="" /> : null}

                          {invStatus}
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
          </>
        ) : null}
        {active === 'Pending' ? (
          <>
            <table className="w-full text-center">
              <tr className="border-b border-t border-gray-600 h-[60px]">
                <th>#</th>
                <th>Item</th>
                <th>Invoice ID</th>
                <th>Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {invoicedata.map((val, key) => {
                return (
                  <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                    <td>{val.id}</td>
                    <td className="text-yellow-600">{val.item}</td>
                    <td>{val.invoiceid}</td>
                    <td>{val.name}</td>
                    <td>{val.method}</td>
                    <td>{val.amt}</td>
                    <td>
                      <div>
                        {' '}
                        <div
                          className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                            invStatus === 'Paid' ? 'text-mainColor' : 'text-red-600'
                          }`}
                        >
                          {invStatus === 'Paid' ? <img src={success} alt="" /> : null}

                          {invStatus}
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
          </>
        ) : null}
      </div>
    </>
  );
}
export default function Billings({ activeNav, setActiveNav }) {
  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide overflow-y-scroll h-[428px]">
      <p>Billing</p>
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
  );
}
