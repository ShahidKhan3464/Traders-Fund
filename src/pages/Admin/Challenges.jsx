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
    name: 'Alexander Bendithe',
    Taken: '10',
    Passed: '5',
    Failed: '5',
    Country: 'USA',
    status: 'Active'
  },
  {
    id: '01',
    name: 'Alexander Bendithe',
    Taken: '10',
    Passed: '5',
    Failed: '5',
    Country: 'USA',
    status: 'Active'
  }
];

const Challenges = ({ admin, setAdmin }) => {
  setAdmin(true);
  return (
    <div className="mt-4 space-y-4 sm:mt-0">
      {/* ROW */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:flex-row sm:justify-start">
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="flex items-center justify-center p-3 rounded-lg bg-mainTheme">
              <img src={inivtes} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>Total Challenges</p>
          <p className="text-mainColor text-[28px]">4,750,000</p>
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
          <p>Challenges Passed</p>
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
          <p>Challenges Failed</p>
          <p className="text-red-500 text-[28px]">4,750,000</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="flex items-center justify-center p-3 rounded-lg bg-mainTheme">
              {' '}
              <img src={closed} alt="" />
            </div>
            <div className="text-right">
              {/* <p className="text-[#22C36B]">+6.9%</p> */}
              {/* <p className="text-red-500">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p> */}
            </div>
          </div>
          <p>Challenges In progress</p>
          <p className="text-yellow-500 text-[28px]">50,000</p>
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
      <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide h-[428px] overflow-y-scroll">
        <p className="mb-3">Challenges</p>
        <table className="w-full text-center">
          <tr className="border-b border-t border-gray-600 h-[60px]">
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>#</th>
            <th>Name</th>
            <th>Taken</th>
            <th>Passed</th>
            <th>Failed</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
          {challengedata.map((val, key) => {
            return (
              <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.Taken}</td>
                <td className="text-green-500">{val.Passed}</td>
                <td className="text-red-500">{val.Failed}</td>
                <td>{val.Country}</td>
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

export default Challenges;
