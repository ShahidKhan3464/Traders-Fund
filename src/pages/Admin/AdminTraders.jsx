import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import success from '../../images/icons/Success.svg';

const tradersdata = [
  {
    id: '01',
    name: 'Alexander Bendithe',
    equity: '$100,000.00',
    profitandloss: '$100,000.00',
    accsize: '$100,000.00',
    gains: '10000%',
    type: 'Funded',
    status: 'Active'
  },
  {
    id: '01',
    name: 'Alexander Bendithe',
    equity: '$100,000.00',
    profitandloss: '$100,000.00',
    accsize: '$100,000.00',
    gains: '10000%',
    type: 'Funded',
    status: 'Disabled'
  }
];

const Tab = styled.button`
  padding: 10px 10px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 8px;
  border: 1px solid gray;
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

const types = ['All traders', 'Funded', 'Unfunded'];
function TabGroup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState(types[0]);
  const [invStatus, setInvStatus] = useState('All traders');

  return (
    <>
      <div className="flex flex-wrap mx-3 my-3 space-x-2 md:mx-0 ">
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
      <div className="text-white">
        {active === 'All traders' ? (
          <>
            <table className="w-full text-center">
              <tr className="border-b border-t border-gray-600 h-[60px]">
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>#</th>
                <th>Name</th>
                <th>Initial Equity</th>
                <th>Profit/Loss</th>
                <th>Account size</th>
                <th>Gains %</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
              {tradersdata.map((val, key) => {
                return (
                  <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.equity}</td>
                    <td>{val.profitandloss}</td>
                    <td>{val.accsize}</td>
                    <td className="text-yellow-600">{val.gains}</td>
                    <td>
                      <div>
                        {' '}
                        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-mainColor/20 text-mainColor">
                          <img src={success} alt="" />
                          <p>{val.type}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        {' '}
                        <div
                          className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                            val.status === 'Active' ? 'text-mainColor bg-mainColor/20' : 'text-red-600 bg-red-500/20'
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
        {active === 'Funded' ? <></> : null}
        {active === 'Unfunded' ? <></> : null}
      </div>
    </>
  );
}

const AdminTraders = ({ admin, setAdmin }) => {
  setAdmin(true);
  return (
    <div className="mt-2 space-y-4 sm:mt-0">
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

      {/* BUTTONS */}
      <div className="flex gap-2 h-[40px] overflow-x-scroll">
        <div className="flex items-center justify-center px-4 font-light border rounded-md cursor-pointer whitespace-nowrap border-mainColor text-mainColor">
          <p>Time extension</p>
        </div>
        <div className="flex items-center justify-center px-4 font-light border rounded-md cursor-pointer border-mainColor text-mainColor">
          <p>Export</p>
        </div>
        <div className="flex items-center justify-center px-4 font-light text-red-500 border border-red-500 rounded-md cursor-pointer">
          <p>Disable </p>
        </div>
        <div className="flex items-center justify-center px-4 font-light text-yellow-500 border border-yellow-500 rounded-md cursor-pointer">
          <p>Flag</p>
        </div>
        <div className="flex items-center justify-center px-4 font-light text-black rounded-md cursor-pointer bg-mainColor">
          <p>Message</p>
        </div>
      </div>
      {/* BUTTONS */}

      {/* TABLE */}
      <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide h-[428px] overflow-y-scroll ">
        <p>Traders</p>
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
      {/* TABLE */}
    </div>
  );
};

export default AdminTraders;
