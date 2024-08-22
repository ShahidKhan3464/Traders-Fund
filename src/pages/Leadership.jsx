import React, { useEffect, useState } from 'react';
import LeaderboardsTable from '../components/LeaderboardsTable';
import left from '../images/icons/arrowleft.svg';
import right from '../images/icons/arrow-right.svg';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
// https://mui.com/material-ui/react-pagination/

const data = [
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

export default function Leadership({ activeNav, setActiveNav }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);

    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`${process.env.REACT_APP_PTF_API}/challenges/leaderboard`);
    //     setData(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(`Error fetching ranked accounts: ${error}`);
    //   }
    // };

    //fetchData();
  }, []);

  return <LeaderboardsTable data={data}></LeaderboardsTable>;
}
