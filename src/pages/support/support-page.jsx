import React, { useState } from 'react';
import { FadeLoader } from 'react-spinners';
import { getTradingAccount } from '../../api';
import { showCustomError } from '../../utils/utils';
import Notification from '../../components/Notification';

const API_BASE_URL = process.env.REACT_APP_PTF_API_V2;

const SupportPage = () => {
  const [info, setInfo] = useState();
  const [accountId, setAccountId] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  let [color, setColor] = useState('#008ffd');

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getTradingAccount(accountId);
      setInfo(response.tradingAccount);
      setAccountId('');
      setEmail('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error.response.data.message);
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <div className="bg-[#141518] min-h-screen text-white py-10 w-ful flex flex-col items-center justify-center">
        <div className="md:w-[70%] w-[80%] space-y-3">
          <div className="flex flex-col gap-2 md:space-x-4 sm:flex-row">
            <input
              type="text"
              className="flex-1 px-3 py-2 bg-transparent border border-gray-300 rounded-md"
              placeholder="Enter account ID"
              onChange={e => setAccountId(e.target.value)}
            />
            {/* <input
            type="text"
            className="flex-1 px-3 py-2 bg-transparent border border-gray-300 rounded-md"
            placeholder="Enter account email"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
            <button
              class="bg-mainColor  text-black font-medium py-2 flex-1 px-4 rounded"
              disabled={email === '' && accountId === ''}
              onClick={fetchData}
            >
              Search
            </button>
          </div>
          <div className="w-full overflow-x-auto support ">
            <div className="flex items-center justify-center">
              <FadeLoader loading={loading} color={color}></FadeLoader>
            </div>
            {info && (
              <table className="w-full table-auto ">
                <tbody>
                  <tr>
                    <td>
                      <b>login</b>
                    </td>
                    <td>{info?.login}</td>
                  </tr>
                  <tr>
                    <td>initialBalance</td>
                    <td>${info?.initialBalance}</td>
                  </tr>
                  <tr>
                    <td>openingBalance</td>
                    <td>${info?.openingBalance}</td>
                  </tr>
                  <tr>
                    <td>currentBalance</td>
                    <td>${info?.currentBalance}</td>
                  </tr>
                  <tr>
                    <td>equity</td>
                    <td>${info?.equity}</td>
                  </tr>
                  <tr>
                    <td>totalVolumeTraded</td>
                    <td>{info?.totalVolumeTraded}</td>
                  </tr>
                  <tr>
                    <td>status</td>
                    <td>{info?.status}</td>
                  </tr>
                  <tr>
                    <td>lastTradeDate</td>
                    <td>{info?.lastTradeDate}</td>
                  </tr>
                  <tr>
                    <td>profitFactor</td>
                    <td>{info?.profitFactor}</td>
                  </tr>
                  <tr>
                    <td>maxEquity</td>
                    <td>{info?.maxEquity}</td>
                  </tr>
                  <tr>
                    <td>gainAmount</td>
                    <td>{info?.gainAmount}</td>
                  </tr>
                  <tr>
                    <td>totalTrades</td>
                    <td>{info?.totalTrades}</td>
                  </tr>
                  <tr>
                    <td>totalWinningTrades</td>
                    <td>{info?.totalWinningTrades}</td>
                  </tr>
                  <tr>
                    <td>totalLosingTrades</td>
                    <td>{info?.totalLosingTrades}</td>
                  </tr>
                  <tr>
                    <td>totalBuys</td>
                    <td>{info?.totalBuys}</td>
                  </tr>
                  <tr>
                    <td>totalSells</td>
                    <td>{info?.totalSells}</td>
                  </tr>
                  <tr>
                    <td>startDate</td>
                    <td>{info?.startDate}</td>
                  </tr>
                  <tr>
                    <td>highestBalance</td>
                    <td>${info?.highestBalance}</td>
                  </tr>
                  <tr>
                    <td>totalProfit</td>
                    <td>${info?.totalProfit}</td>
                  </tr>
                  <tr>
                    <td>totalLoss</td>
                    <td>${info?.totalLoss}</td>
                  </tr>
                  <tr>
                    <td>reason</td>
                    <td>{info?.reason}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
