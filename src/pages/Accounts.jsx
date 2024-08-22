import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CredentialsModal from '../components/CredentialsModal';
import { useStore } from '../store';
import Account from '../components/Account';
import axios from 'axios';

const data = [
  {
    id: '01',
    name: 'Donald Blythe',
    joined: 'January 12, 2021',
    status: 'Success'
  },
  {
    id: '01',
    name: 'Donald Blythe',
    joined: 'January 12, 2021',
    status: 'Success'
  },
  {
    id: '01',
    name: 'Donald Blythe',
    joined: 'January 12, 2021',
    status: 'Pending'
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
const types = ['All', 'Passed', 'Failed', 'In Progress', 'Hidden'];

function TabGroup() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(types[0]);
  const [value, setValue] = useState('{invite-code}');
  const [copied, setCopied] = useState(false);
  const { userData, userChallengesData, setUserChallengesData } = useStore();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    // if (!userChallengesData || Object.keys(userChallengesData).length === 0) {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`${process.env.REACT_APP_PTF_API}/billing/get-user`, { withCredentials: true });
    //       const user = response.data;
    //       setUserChallengesData(user);
    //       console.log(user);
    //     } catch (error) {
    //       // Handle error
    //       console.error('Error fetching user data:', error);
    //     }
    //   };
    //   fetchData();
    // }
  }, []);

  return (
    <>
      <div className="flex flex-wrap mx-3 my-3 space-x-2 md:mx-0">
        {types.map(type => (
          <Tab key={type} active={active === type} onClick={() => setActive(type)}>
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <div className="space-y-4 text-white">
        {active === 'All' ? (
          <>
            <CredentialsModal handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}></CredentialsModal>
            <div className="my-2 space-y-2 vd-grid">
              {userChallengesData && userChallengesData.userChallenges ? (
                userChallengesData.userChallenges.map(userChallenge => (
                  <Account
                    key={userChallenge.id}
                    userAccountId={userChallenge.id}
                    accStatus={userChallenge.tradingAccount.status || 'Pending'}
                    accountId={userChallenge.tradingAccount.login || '000'}
                    accountPhaseName={userChallenge.challenge.name || 'Phase 1'}
                    accountBalance={userChallenge.tradingAccount.currentBalance || 0}
                    accountPercentUsed={userChallenge.accountPercentUsed || 0}
                    accountCredentials={userChallenge.accountCredentials || []}
                  />
                ))
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </>
        ) : null}
        {active === 'Passed' ? (
          <>
            {/* CREDENTIALS MODAL */}
            <CredentialsModal handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}></CredentialsModal>
            {/* CREDENTIALS MODAL */}
            <div className="my-2 space-y-2 vd-grid ">
              {/* ACC */}
              {userChallengesData.userChallenges
                .filter(challenge => challenge.tradingAccount.status === 'passed')
                .map(userChallenge => (
                  <Account
                    key={userChallenge.id}
                    userAccountId={userChallenge.id}
                    accStatus={userChallenge.tradingAccount.status || 'Pending'}
                    accountId={userChallenge.tradingAccount.login || '000'}
                    accountPhaseName={userChallenge.challenge.name || 'Phase 1'}
                    accountBalance={userChallenge.tradingAccount.currentBalance || 0}
                    accountPercentUsed={userChallenge.accountPercentUsed || 0}
                    accountCredentials={userChallenge.accountCredentials || []}
                  />
                ))}
            </div>
          </>
        ) : null}
        {active === 'In Progress' ? (
          <>
            {/* CREDENTIALS MODAL */}
            <CredentialsModal handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}></CredentialsModal>
            {/* CREDENTIALS MODAL */}
            <div className="my-2 space-y-2 vd-grid ">
              {/* ACC */}
              <div className="my-2 space-y-2 vd-grid ">
                {/* ACC */}
                {userChallengesData.userChallenges
                  .filter(challenge => challenge.tradingAccount.status === 'in-progress')
                  .map(userChallenge => (
                    <Account
                      key={userChallenge.id}
                      userAccountId={userChallenge.id}
                      accStatus={userChallenge.tradingAccount.status || 'Pending'}
                      accountId={userChallenge.tradingAccount.login || '000'}
                      accountPhaseName={userChallenge.challenge.name || 'Phase 1'}
                      accountBalance={userChallenge.tradingAccount.currentBalance || 0}
                      accountPercentUsed={userChallenge.accountPercentUsed || 0}
                      accountCredentials={userChallenge.accountCredentials || []}
                    />
                  ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
export default function Accounts({ activeNav, setActiveNav }) {
  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const { userData } = useStore();

  return (
    <>
      {' '}
      <TabGroup />
    </>

    //
  );
}
