import Navbar from '../../components-website/Navbar2';
import Footer from '../../components-website/FooterV2';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isUserAuthenticated } from '../../utils/utils';

import DocumentMeta from 'react-document-meta';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import eventpng from '../../images/events/event.png';
import jamaicaevent from '../../images/events/image 322.png';
import drevent from '../../images/events/image 323.png';
import prevent from '../../images/events/image 324.png';
import icon5 from '../../images/affiliate/Featured icon5.svg';
import icon6 from '../../images/affiliate/Featured icon6.svg';
import icon7 from '../../images/affiliate/Featured icon7.svg';
import check from '../../images/icons/check-circle.svg';
import instagram from '../../images/events/instagram.svg';
import discord from '../../images/events/discord.svg';
import twitter from '../../images/events/twitter.svg';
import SocialMediaSection from '../../components-website/SocialMediaSection';
import GetFundedNow from '../../components-website/GetFundedNow';
import { set } from 'date-fns';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const Events = () => {
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const submit = e => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email');
      return;
    }
    setNotified(true);
    setMessage(null);
  };
  const meta = {
    title: 'Events | Pro Traders Fund',
    description:
      'Pro Trading Firm offers the best trading affiliate programs, with high commissions and a variety of marketing tools and resources to help you succeed.',
    canonical: 'https://app.protradersfund.com/events',
    meta: {
      charset: 'utf-8',
      name: {
        keywords:
          'Trading affiliate programs, trading platform affiliate programs, best trading affiliate programs, stock trading affiliate programs'
      }
    }
  };

  const navigate = useNavigate();

  const [tab, setTab] = useState('All Events');

  useEffect(() => {
    localStorage.removeItem('redirect_to');
  }, []);

  return (
    <DocumentMeta {...meta}>
      <Navbar></Navbar>
      <main className="bg-[#141518] overflow-hidden">
        <section className="flex flex-col items-center justify-start text-center bg-main bg-top bg-no-repeat sm:py-[54px] py-6 md:space-y-24 space-y-12 px-4">
          <div className="flex flex-col items-center justify-between gap-6 px-4 text-white lg:flex-row max-w-7xl sm:px-0 ">
            <div className="pb-10 space-y-4 text-center lg:text-left max-w-1/2">
              <h1 className="md:text-[56px] text-[40px] leading-[1.2] ">Pro Traders Fund Events</h1>
              <p className="md:text-[24px] font-light lg:mx-0 mx-auto sm:w-[75%] leading-[1.1]">
                Explore and Register for Upcoming Events Using Our Calendar Below. Access Past Event Recordings and Subscribe for Latest
                Event News & Updates Directly in Your Inbox. Stay Updated with Essential Event Information!
              </p>
              <form onSubmit={submit} className="flex flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <div>
                  <input
                    type="email"
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="Enter your email"
                    className="text-black h-full bg-white border rounded-lg placeholder:text-[#737373]"
                  />{' '}
                  {message ? <p className="text-sm text-red-500">{message}</p> : null}
                </div>
                <button type="submit" className="bg-[#00A4E6] flex items-center justify-between gap-1 px-4 rounded-lg h-[50px]">
                  {notified ? (
                    <p className="text-xs text-white">Subscribed</p>
                  ) : (
                    <span className="flex items-center justify-between text-sm text-white">
                      Get Notified{' '}
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="figicon/solid/arrow01">
                          <path
                            id="ideateicons"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.6602 5.81022C13.0759 5.44659 13.7077 5.48879 14.0713 5.90447L19.2527 11.8276C19.5825 12.2046 19.5825 12.7674 19.2527 13.1444L14.0713 19.0674C13.7076 19.4831 13.0759 19.5253 12.6602 19.1617C12.2445 18.7981 12.2023 18.1663 12.566 17.7506L16.2966 13.486L4.5 13.486C3.94772 13.486 3.5 13.0382 3.5 12.486C3.5 11.9337 3.94772 11.486 4.5 11.486L16.2966 11.486L12.566 7.22129C12.2023 6.80561 12.2445 6.17385 12.6602 5.81022Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
            <div className="max-w-[580px]  rounded-lg ">
              <img src={eventpng} alt="hero image" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-start  py-[54px] space-y-12">
          <div>
            <h1 className="md:text-[56px] text-white text-center text-[30px] leading-[1.2] whitespace-nowrap">Event Calendar</h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div
                className={`p-2 cursor-pointer w-[110px] rounded-full text-sm  ${tab === 'All Events' ? 'text-black bg-[#6EFDEB]' : 'text-[#6EFDEB] bg-[#6EFDEB]/5'}`}
                onClick={() => setTab('All Events')}
              >
                <p className="leading-3 text-center ">All Events</p>
              </div>
              <div
                className={`p-2 cursor-pointer  rounded-full text-sm  ${tab === 'Upcoming Events' ? 'text-black bg-[#6EFDEB]' : 'text-[#6EFDEB] bg-[#6EFDEB]/5'}`}
                onClick={() => setTab('Upcoming Events')}
              >
                <p className="leading-3 text-center ">Upcoming Events</p>
              </div>
              <div
                className={`p-2 cursor-pointer w-[110px] rounded-full text-sm  ${tab === 'Past Events' ? 'text-black bg-[#6EFDEB]' : 'text-[#6EFDEB] bg-[#6EFDEB]/5'}`}
                onClick={() => setTab('Past Events')}
              >
                <p className="leading-3 text-center ">Past Events</p>
              </div>
            </div>
          </div>

          {tab === 'All Events' && (
            <>
              {' '}
              <div className="flex flex-wrap items-center justify-center gap-4 px-8 ">
                <div className="flex-shrink-0 rounded-lg ">
                  <img src={jamaicaevent} alt="Global Traders Connect" className="object-cover h-full rounded-lg brightness-125" />
                </div>
                <div className="flex flex-col space-y-4  h-full justify-evenly max-w-[480px]">
                  <p className="text-left text-white text-[30px] leading-[1.2]">Global Traders Connect Jamaica Elevate, Network, Win!</p>
                  <div className="inline-block">
                    <div className="inline-block px-3 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900">
                      <p className="leading-3 text-white">Jamaica</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Date: March 24. 2024 </p>
                    </div>
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Time: 5 PM - 10PM EST</p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="inline-block p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Venue: AC Marriott, Kingston Jamaica</p>
                    </div>
                  </div>
                  <a href="/global-traders-connect">
                    {' '}
                    <button className="bg-[#00A4E6] w-[140px] text-sm text-white flex items-center gap-1 px-4 rounded-lg h-[50px]">
                      View Events
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="figicon/solid/arrow01">
                          <path
                            id="ideateicons"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.6602 5.81022C13.0759 5.44659 13.7077 5.48879 14.0713 5.90447L19.2527 11.8276C19.5825 12.2046 19.5825 12.7674 19.2527 13.1444L14.0713 19.0674C13.7076 19.4831 13.0759 19.5253 12.6602 19.1617C12.2445 18.7981 12.2023 18.1663 12.566 17.7506L16.2966 13.486L4.5 13.486C3.94772 13.486 3.5 13.0382 3.5 12.486C3.5 11.9337 3.94772 11.486 4.5 11.486L16.2966 11.486L12.566 7.22129C12.2023 6.80561 12.2445 6.17385 12.6602 5.81022Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 px-8">
                <div className="flex-shrink-0 rounded-lg ">
                  <img src={drevent} alt="Global Traders Connect" className="object-cover w-full h-full rounded-lg brightness-125" />
                </div>
                <div className="flex flex-col space-y-4  h-full justify-evenly max-w-[480px]">
                  <p className="text-left text-white text-[30px] leading-[1.2]">
                    Global Traders Connect Dominican Republic Elevate, Network, Win!
                  </p>
                  <div className="inline-block">
                    <div className="inline-block px-3 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900">
                      <p className="leading-3 text-white">Dominican Republic</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Date: April 24. 2024 </p>
                    </div>
                    {/* <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Time: 5 PM - 10PM EST</p>
                </div> */}
                  </div>
                  {/* <div className="inline-block">
                <div className="inline-block p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Venue: AC Marriott, Kingston Jamaica</p>
                </div>
              </div> */}
                  <div className=" w-[100px] text-sm text-white border border-[#3B3C3D] flex items-center gap-1 px-4 rounded-lg h-[50px] opacity-75 cursor-pointer">
                    Upcoming
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 px-8">
                <div className="flex-shrink-0 rounded-lg ">
                  <img src={prevent} alt="Global Traders Connect" className="object-cover w-full h-full rounded-lg brightness-125" />
                </div>
                <div className="flex flex-col space-y-4  h-full justify-evenly max-w-[480px]">
                  <p className="text-left text-white text-[30px] leading-[1.2]">
                    Global Traders Connect Puerto Rico Elevate, Network, Win!
                  </p>
                  <div className="inline-block">
                    <div className="inline-block px-3 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900">
                      <p className="leading-3 text-white">Puerto Rico </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Date: May 24. 2024 </p>
                    </div>
                    {/* <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Time: 5 PM - 10PM EST</p>
                </div> */}
                  </div>
                  {/* <div className="inline-block">
                <div className="inline-block p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Venue: AC Marriott, Kingston Jamaica</p>
                </div>
              </div> */}
                  <div className=" w-[100px] text-sm text-white border border-[#3B3C3D] flex items-center gap-1 px-4 rounded-lg h-[50px] opacity-75 cursor-pointer">
                    Upcoming
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Upcoming Events' && (
            <>
              {' '}
              <div className="flex flex-wrap items-center justify-center gap-4 px-8">
                <div className="flex-shrink-0 rounded-lg ">
                  <img src={drevent} alt="Global Traders Connect" className="object-cover w-full h-full rounded-lg brightness-125" />
                </div>
                <div className="flex flex-col space-y-4  h-full justify-evenly max-w-[480px]">
                  <p className="text-left text-white text-[30px] leading-[1.2]">
                    Global Traders Connect Dominican Republic Elevate, Network, Win!
                  </p>
                  <div className="inline-block">
                    <div className="inline-block px-3 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900">
                      <p className="leading-3 text-white">Dominican Republic</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Date: April 24. 2024 </p>
                    </div>
                    {/* <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Time: 5 PM - 10PM EST</p>
                </div> */}
                  </div>
                  {/* <div className="inline-block">
                <div className="inline-block p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Venue: AC Marriott, Kingston Jamaica</p>
                </div>
              </div> */}
                  <div className=" w-[100px] text-sm text-white border border-[#3B3C3D] flex items-center gap-1 px-4 rounded-lg h-[50px] opacity-75 cursor-pointer">
                    Upcoming
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 px-8">
                <div className="flex-shrink-0 rounded-lg ">
                  <img src={prevent} alt="Global Traders Connect" className="object-cover w-full h-full rounded-lg brightness-125" />
                </div>
                <div className="flex flex-col space-y-4  h-full justify-evenly max-w-[480px]">
                  <p className="text-left text-white text-[30px] leading-[1.2]">
                    Global Traders Connect Puerto Rico Elevate, Network, Win!
                  </p>
                  <div className="inline-block">
                    <div className="inline-block px-3 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900">
                      <p className="leading-3 text-white">Puerto Rico </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Date: May 24. 2024 </p>
                    </div>
                    {/* <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Time: 5 PM - 10PM EST</p>
                </div> */}
                  </div>
                  {/* <div className="inline-block">
                <div className="inline-block p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                  <p className="text-[#00A4E6] text-center leading-3">Venue: AC Marriott, Kingston Jamaica</p>
                </div>
              </div> */}
                  <div className=" w-[100px] text-sm text-white border border-[#3B3C3D] flex items-center gap-1 px-4 rounded-lg h-[50px] opacity-75 cursor-pointer">
                    Upcoming
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 'Past Events' && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-4 px-8 ">
                <div className="flex-shrink-0 rounded-lg ">
                  <img src={jamaicaevent} alt="Global Traders Connect" className="object-cover h-full rounded-lg brightness-125" />
                </div>
                <div className="flex flex-col space-y-4  h-full justify-evenly max-w-[480px]">
                  <p className="text-left text-white text-[30px] leading-[1.2]">Global Traders Connect Jamaica Elevate, Network, Win!</p>
                  <div className="inline-block">
                    <div className="inline-block px-3 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900">
                      <p className="leading-3 text-white">Jamaica</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Date: March 24. 2024 </p>
                    </div>
                    <div className="p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Time: 5 PM - 10PM EST</p>
                    </div>
                  </div>
                  <div className="inline-block">
                    <div className="inline-block p-2 text-sm rounded-full" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
                      <p className="text-[#00A4E6] text-center leading-3">Venue: AC Marriott, Kingston Jamaica</p>
                    </div>
                  </div>
                  <a href="/global-traders-connect">
                    {' '}
                    <button className="bg-[#00A4E6] w-[140px] text-sm text-white flex items-center gap-1 px-4 rounded-lg h-[50px]">
                      View Events
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="figicon/solid/arrow01">
                          <path
                            id="ideateicons"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.6602 5.81022C13.0759 5.44659 13.7077 5.48879 14.0713 5.90447L19.2527 11.8276C19.5825 12.2046 19.5825 12.7674 19.2527 13.1444L14.0713 19.0674C13.7076 19.4831 13.0759 19.5253 12.6602 19.1617C12.2445 18.7981 12.2023 18.1663 12.566 17.7506L16.2966 13.486L4.5 13.486C3.94772 13.486 3.5 13.0382 3.5 12.486C3.5 11.9337 3.94772 11.486 4.5 11.486L16.2966 11.486L12.566 7.22129C12.2023 6.80561 12.2445 6.17385 12.6602 5.81022Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}
        </section>
        <SocialMediaSection></SocialMediaSection>
        <GetFundedNow></GetFundedNow>
      </main>
      <Footer></Footer>
    </DocumentMeta>
  );
};

export default Events;
