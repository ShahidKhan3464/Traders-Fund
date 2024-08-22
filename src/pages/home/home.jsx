import { useEffect, useRef, useState } from 'react';
import Navbar2 from '../../components-website/Navbar2';
// import Footer from '../../components-website/FooterV2';
import avatar1 from '../../images/avatar1.png';
import avatar2 from '../../images/avatar2.png';
import avatar3 from '../../images/avatar3.png';
import avatar4 from '../../images/avatar4.png';
import star from '../../images/star.svg';
import star2 from '../../images/star2.svg';
import mockUp from '../../images/mockup.png';
import CustomButton from '../../components/CustomButton';
import laptop from '../../images/Macbook Pro 16 mockup.png';
import laptop2 from '../../images/Macbook Pro 16 mockup2.png';
import check from '../../images/icons/check-circle.svg';
import headset from '../../images/icons/headset.svg';
import ArtWork from '../../images/artwork.png';
import TraderToday from '../../images/BG.png';
import lineup from '../../images/icons/Line 01 Up.svg';
import column from '../../images/icons/Column 01 Up.svg';
import dollar from '../../images/icons/Coin Dollar.svg';
import heart from '../../images/icons/Heart.svg';
import discount from '../../images/icons/Discount.svg';
import mt5image from '../../images/headerImgMT42x 2.png';
import map from '../../images/map.png';
import blogimg from '../../images/blogimg.png';
import blog2 from '../../images/blogs/adam-nowakowski-D4LDw5eXhgg-unsplash.jpg';
import blog3 from '../../images/blogs/maxim-hopman-fiXLQXAhCfk-unsplash.jpg';
import playicon from '../../images/icons/Play cr-fr.svg';

import ReactGA from 'react-ga';
import { AiFillBank, AiFillTrophy, AiOutlineFieldTime, AiOutlineLineChart, AiOutlinePercentage, AiOutlinePieChart } from 'react-icons/ai';
import Faq from '../../components-website/Faq';
import { useLocation, useNavigate } from 'react-router-dom';
import PricingComponent from './PricingComponent';
import DocumentMeta from 'react-document-meta';
import PopupBanner from '../../components-website/PopupBanner';
import DiscountBanner from '../../components-website/DiscountBanner';
import { Avatar, AvatarGroup, Box, Container, Grid, Typography } from '@mui/material';
import { Button } from '@mui/base';
import Navbar from '../../components/Navbar';
import Hero from './hero';
import Video from './video';
import AccountSize from './accountSize';
import PaymentFlow from './paymentFlow';
import PayoutFaster from './payoutFaster';
import ReliableFirm from './reliableFirm';
import Transparent from './transparent';
import LoveTrader from './loveTrader';
import TraderProgram from './traderProgram';
import Questions from './questions';
import Community from './community';
import TradingSuccess from './tradingSuccess';
import PtfCommunity from './ptfCommunity';
import LeadingFunded from './leadingFunded';
import Footer from './footer';

export default function Home() {
  const meta = {
    title: 'Pro Traders Fund: The Best Prop Trading Firm',
    description:
      'Pro Traders Fund: The Best Prop Trading Firm for Beginners and Experienced Traders. Get funded to trade and keep your profits. Visit today!',
    canonical: 'https://app.protradersfund.com/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords:
          'Prop trading firm, prop firm passing service, stock trading prop firm, instant funding prop firm, proprietary trading firms, no time limit prop firm, elite trader funding, best proprietary trading firm, prop trading company'
      }
    }
  };
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [number, setNumber] = useState('');
  const [inputValidationType, setInputValidationType] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    if (!email) {
      setInputValidationType('email');
      return;
    }

    if (!fullname) {
      setInputValidationType('fullname');
      return;
    }
    if (!number) {
      setInputValidationType('number');
      return;
    }

    navigate('/thank-you');
  };
  useEffect(() => {
    localStorage.removeItem('redirect_to');
  }, []);

  useEffect(() => {
    // non interaction
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <DocumentMeta {...meta}>
      <div id="main" onClick={() => setShowPopup(false)}>
        <Navbar2 />
        <div className="flex flex-col items-center">
          <div className="flex overflow-hidden relative flex-col w-full bg-[#000501] max-md:max-w-full">
            <Hero />
            <Video />
            <AccountSize />
            <PaymentFlow />
            <PayoutFaster />
            <ReliableFirm />
            <Transparent />
            <LoveTrader />
            <TraderProgram />
            <Questions />
            <Community />
            <TradingSuccess />
            <PtfCommunity />
            <LeadingFunded />
            <Footer />
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
}
