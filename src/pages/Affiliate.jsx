import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import insta from '../images/instagram.svg';
import wa from '../images/whatsapp.svg';
import fb from '../images/facebook.svg';
import empty from '../images/no referrals.svg';
import mail from '../images/icons/mail-01.svg';
import cursor from '../images/icons/cursor-click-02.svg';
import coins from '../images/icons/coins-stacked-03.svg';
import { useCopyToClipboard } from '../utils/copy';
import { useStore } from '../store';
import axios from 'axios';
import Notification from '../components/Notification';
import { showCustomError, showCustomSuccess, showError, showSuccess } from '../utils/utils';
import { affiliateStatsAPI, getProfile, inviteUsersAPI } from '../api';

const Affiliate = ({ activeNav, setActiveNav }) => {
  const [value, copy] = useCopyToClipboard();
  const [noReferrals, setNoReferrals] = useState(false);
  const [affiliateCode, setAffiliateCode] = useState('');
  const [affiliateUrl, setAffiliateUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const { userData } = useStore();
  const [affiliatePurchass, setAffiliatePurchass] = useState([]);
  //const affiliateLink = `${process.env.REACT_APP_LANDING_URL}/affiliate-signup?ref=${userProfile.affiliateCode}&username=${userProfile.firstName}-${userProfile.lastName}}`;
  const [notification, setNotification] = useState(null);
  const [emailInput, setEmailInput] = useState('');

  const sendInvitationHandler = async () => {
    try {
      const response = await inviteUsersAPI({
        emails: emailInput.split(',')
      });
      setEmailInput('');
      showCustomSuccess(setNotification, response.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleCopyClick = () => {
    copy(affiliateUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    (async () => {
      try {
        const userProfile = await getProfile();
        setAffiliateCode(userProfile.affiliateCode);
        setAffiliateUrl(
          `${process.env.REACT_APP_LANDING_URL}/affiliate-signup?ref=${userProfile.affiliateCode}&username=${userProfile.firstName}-${userProfile.lastName}`
        );
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          showCustomError(setNotification, error.response.data.message);
        } else {
          showCustomError(setNotification, error.message);
        }
      }
    })();
  }, []);

  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);

  const handleEmailInput = e => {
    setEmailInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center vd-box4">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <p className="text-sm text-mainColor">Earn big on our program</p>
        <p className="md:text-[32px] text-[24px]">Start inviting friends and get cash back</p>
        <p className="font-medium text-gray-400">Receive 10% back from PTF purchases from friends. </p>
        <div className="flex items-center justify-center gap-5 px-5 text-xs md:text-base">
          <div className="flex items-center justify-center gap-1">
            <img src={mail} alt="" className="h-4" />
            Send invitation
          </div>
          <hr class="w-6 h-1 mx-auto my-4 border-gray-100 border-1 border-dashed rounded md:my-10" />
          <div className="flex items-center justify-center gap-1">
            <img src={cursor} alt="" className="h-4" />
            Friends sign up
          </div>
          <hr class="w-6  h-1 mx-auto my-4 border-gray-100 border-1 border-dashed rounded md:my-10" />
          <div className="flex items-center justify-center gap-1">
            <img src={coins} alt="" className="h-4" />
            You earn
          </div>
        </div>
        <div className="border w-full border-[#262729] p-5 space-y-4">
          <p className="text-sm text-left">Invite your friends</p>
          <div className="h-[40px] flex">
            <input
              value={emailInput}
              onChange={e => handleEmailInput(e)}
              type=""
              className="flex-1 h-full px-3 border rounded-l-lg border-gray-500/20 bg-secTheme"
            />
            <button
              className={`h-full px-6 rounded-r-lg shadow-lg flex-2 bg-mainBlue ${emailInput && 'hover:bg-blue-600'}`}
              onClick={sendInvitationHandler}
              disabled={!emailInput}
            >
              Invite
            </button>
          </div>
          <p className="text-sm text-left text-gray-400">Use commas “,” to separate multiple people </p>
        </div>
        <div className="h-[40px] flex items-center justify-center">
          <input
            value={affiliateCode.split('/')[affiliateCode.split('/').length - 1]}
            type=""
            className="h-full md:w-[330px] border border-gray-500/20 bg-secTheme rounded-l-lg px-3"
          />
          <div
            className={`flex items-center justify-center h-full px-6 border rounded-r-lg shadow-lg cursor-pointer border-gray-500/20 ${copied ? 'bg-green-400' : 'bg-secTheme'}`}
            onClick={handleCopyClick}
          >
            {copied === false ? 'Copy' : 'Copied!'}
          </div>
        </div>
        <div className="flex gap-5 cursor-pointer">
          <img src={insta} alt="Instagram" />
          <img src={wa} alt="Whatsapp" />
          <img src={fb} alt="Facebook" />
        </div>
        <p className="cursor-pointer text-mainBlue">How it works</p>

        {noReferrals ? (
          <div className="flex flex-col  items-center justify-center text-center w-[300px]">
            <img src={empty} alt="" />
            <p className="mt-8 text-xl">No referrals yet</p>
            <p className="text-sm font-medium text-gray-300">Start referring friends and start earning when they buy a challenge.</p>
          </div>
        ) : (
          <div className="w-full px-5 space-y-5">
            <div className="flex items-center justify-between pb-5 border-b border-gray-500/20">
              <p className="text-lg">Invited friends</p>{' '}
              <button
                className="h-full px-4 py-2 rounded-lg shadow-lg bg-mainBlue hover:bg-blue-600"
                onClick={() => navigate('/user-affiliate/referrals')}
              >
                See overview
              </button>
            </div>
            {affiliatePurchass.map((purchase, index) => (
              <div key={index} className="flex items-center justify-between pb-5 border-b border-gray-500/20">
                <p>{purchase.email}</p>
                <p className={`text-${purchase.status === 'Invite sent' ? 'yellow-500' : 'green-500'}`}>
                  {purchase.status === 'Invite sent' ? 'Invite sent' : `$${purchase.purchaseTotal}`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
};

export default Affiliate;
