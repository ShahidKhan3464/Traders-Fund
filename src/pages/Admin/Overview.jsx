import React from 'react';
import inivtes from '../../images/icons/invite icon.svg';
import xcircle from '../../images/icons/x-circle.svg';
import closed from '../../images/icons/closed icon.svg';
import earned from '../../images/icons/earned icon.svg';
import TradesLineChart from '../../components/Admin/TradesLineChart';
import ChallengeChart from '../../components/Admin/ChallengesChart';
import Chart from '../../components/Admin/PieChart';

const top5data = [
  {
    profitandloss: '$23.67',
    trades: '100',
    instrument: 'GDP',
    change: '+1.50%'
  },
  {
    profitandloss: '$23.67',
    trades: '100',
    instrument: 'GDP',
    change: '+1.50%'
  },
  {
    profitandloss: '$23.67',
    trades: '100',
    instrument: 'GDP',
    change: '+1.50%'
  },
  {
    profitandloss: '$23.67',
    trades: '100',
    instrument: 'GDP',
    change: '+1.50%'
  },
  {
    profitandloss: '$23.67',
    trades: '100',
    instrument: 'GDP',
    change: '+1.50%'
  },
  {
    profitandloss: '$23.67',
    trades: '100',
    instrument: 'GDP',
    change: '+1.50%'
  }
];
const Overview = ({ admin, setAdmin }) => {
  setAdmin(true);
  return (
    <div className="space-y-4 sm:mt-0 mt-4">
      {/* ROW */}
      <div className="flex md:flex-row gap-4 sm:justify-start justify-center items-center flex-wrap">
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="bg-mainTheme p-3 flex justify-center items-center rounded-lg">
              <img src={inivtes} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>
            Total Purchases <span className="text-[#777E90]">(100,000)</span>
          </p>
          <p className="text-[#22C36B] text-[28px]">4,750,000</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="bg-mainTheme p-3 flex justify-center items-center rounded-lg">
              {' '}
              <img src={earned} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>
            Total Payouts <span className="text-[#777E90]">(100,000)</span>
          </p>
          <p className="text-[#22C36B] text-[28px]">$4,750,000</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="bg-mainTheme p-3 flex justify-center items-center rounded-lg">
              {' '}
              <img src={closed} alt="" />
            </div>
            <div className="text-right">
              <p className="text-[#22C36B]">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>
            Live Traders <span className="text-[#777E90]">(100,000)</span>
          </p>
          <p className="text-[#22C36B] text-[28px]">4,750,000</p>
        </div>
        <div className="vd-box w-[250px]">
          <div className="flex justify-between pb-3">
            <div className="bg-mainTheme p-3 flex justify-center items-center rounded-lg">
              {' '}
              <img src={xcircle} alt="" />
            </div>
            <div className="text-right">
              {/* <p className="text-[#22C36B]">+6.9%</p> */}
              <p className="text-red-500">+6.9%</p>
              <p className="text-xs text-[#777E90] ">(Since last week)</p>
            </div>
          </div>
          <p>
            Failures <span className="text-[#777E90]">(100,000)</span>
          </p>
          <p className="text-[#22C36B] text-[28px]">50,000</p>
        </div>
      </div>
      {/* ROW */}
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="vd-box lg:w-[60%]">
          <div>
            <p>Trades per month</p>
            <div style={{ position: 'relative', height: '100%', width: '100%' }} className="flex justify-center items-center">
              <TradesLineChart></TradesLineChart>
            </div>
          </div>
        </div>
        <div className="vd-box lg:w-[40%]">
          <div>
            <p>Income & Expenses</p>
            <div
              style={{ position: 'relative', width: '100%' }}
              className="flex justify-center items-center md:h-[300px] h-[100%] md:py-0 py-5"
            >
              <Chart></Chart>
            </div>
          </div>
        </div>
      </div>
      {/* ROW */}
      <div className="vd-box">
        <div>
          <p>Challenges per month</p>
          <div
            style={{ position: 'relative', width: '100%' }}
            className="flex justify-center items-center md:h-[400px] h-[100%] md:py-0 py-5"
          >
            <ChallengeChart></ChallengeChart>
          </div>
        </div>
      </div>
      {/* ROW */}
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="vd-box lg:w-[30%]">
          <div>
            <p>KYC</p>
          </div>
        </div>
        <div className="vd-box2 lg:w-[70%] flex flex-col gap-2 h-[300px] overflow-y-scroll">
          <p className="px-5">Insights</p>{' '}
          <table className="w-full text-center">
            <tr className="border-b border-t border-gray-600 h-[35px] table-heading text-xs">
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
            {top5data.map((val, key) => {
              return (
                <tr key={key} className="text-xs h-[40px] border-b border-gray-600 items-center">
                  <td>Donald Blythe</td>
                  <td>January 12, 2021</td>
                  <td className="text-[#22C36B]">$100,000.00</td>
                  <td>Wire</td>
                  <td>Paid</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
