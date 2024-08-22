import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Billings from './pages/Billings';
import Metrix from './pages/Metrix';
import Leadership from './pages/Leadership';
import Wallet from './pages/Wallet';
import PayoutRoute from './pages/Payout';
import ShopPage from './pages/ShopPage';
import Transactions from './pages/Transactions';
import Affiliate from './pages/Affiliate';
import Referral from './pages/Referral';
import Download from './pages/Download';
import NotFoundPage from './pages/NotFoundPage';
import Verification from './pages/Verification';
import Accounts from './pages/Accounts';
import Certificates from './pages/Certificates';
import Checkout from './pages/Checkout';
import Billing from './pages/Billing';
import KycDocStatus from './pages/KycDocStatus';
import Withdraw from './pages/Withdraw';
import GetChallenge from './pages/Challenges';
import ProfitSplit from './pages/ProfitSplit';
// ADMIN
import Overview from './pages/Admin/Overview';
import Messaging from './pages/Admin/Messaging';
import AdminTraders from './pages/Admin/AdminTraders';
import Challenges from './pages/Admin/Challenges';
import Invoicing from './pages/Admin/Invoicing';
import Payout from './pages/Admin/Payout';
import Revenue from './pages/Admin/Revenue';
import Discount from './pages/Admin/Discount';
import Staff from './pages/Admin/Staff';
import { useStore } from './store';
import Home from './pages/home/home';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/FAQ';
import Login from './pages/login/login';
import Signup from './pages/signup/Signup';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import NavbarLayout from './components-website/NavbarLayout';
import '../src/styles/globals.css';
import UserAffiliate from './pages/affiliate/UserAffiliate';
import Events from './pages/ptfevents/Events';
import HowItWorks from './pages/how-it-works/HowItWorks';
import ProtectedRoute from './hoc/withAuth';
import NewCheckout from './components-website/NewCheckout';
import ContactFormSubmitted from './pages/contact/ContactFormSubmitted';
import HandlePaymentResponse from './components-website/HandlePaymentResponse';
import PaymentSuccessful from './components-website/payment-successful';
import { isUserAuthenticated } from './utils/utils';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import { Toaster } from 'react-hot-toast';
import Terms from './pages/terms/terms';
import Blog from './pages/blog';
import Blog1 from './pages/blogs/how-to-pass-a-prop-trading-firm-challenge-account-easily-and-benefit-from-proprietary-trading-funds';
import Blog2 from './pages/blogs/pro-trading-firms-for-beginners';
import Blog3 from './pages/blogs/how-to-be-a-professional-trader-without-using-your-own-money';
import Blog4 from './pages/blogs/3-proprietary-trading-strategies-for-professional-traders';
import Blog5 from './pages/blogs/5-reasons-why-traders-should-choose-proprietary-trading-funds';
import Blog6 from './pages/blogs/what-is-a-prop-trading-firm';
import Blog7 from './pages/blogs/best-proprietary-trading-firm';
import Blog8 from './pages/blogs/funded-account-challenge';
import Blog9 from './pages/blogs/best-funded-trader-program';
import Blog10 from './pages/blogs/best-forex-trader';
import Blog11 from './pages/blogs/looking-for-an-instant-prop-firm';
import Blog12 from './pages/blogs/tips-that-can-make-you-a-successful-trader';
import ThankYou from './pages/ThankYou';
import AffiliateSignup from './components/AffiliateSignup';
import Sales from './pages/SalesFunnel/Sales';
import SalesVideo from './pages/SalesFunnel/SalesVideo';
import SupportPage from './pages/support/support-page';
import TagManager from 'react-gtm-module';
import RequestProfitSplit from './pages/RequestProfitSplit';
import AffiliateNew from './pages/AffiliateNew';
import TopAffiliatesLeaderboard from './pages/TopAffiliatesLeaderboard';
import DirectAffiliate from './pages/DirectAffiliate';
import IndirectAffiliate from './pages/IndirectAffiliate';
import AffiliatePayments from './pages/AffiliatePayments';

import GlobalTradersConnect from './pages/ptfevents/GlobalTradersConnect';

const tagManagerArgs = {
  gtmId: 'GTM-NV6DCSSM'
};

TagManager.initialize(tagManagerArgs);

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const [activeNav, setActiveNav] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [admin, setAdmin] = useState(false);
  const { userData } = useStore();
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const [isFooterv2, setIsFooterv2] = useState(false);

  const lastHash = useRef('');
  useLayoutEffect(() => {
    try {
      if (location.hash) {
        lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
      }
      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }, 100);
      }
    } catch (error) {
      console.log('error', error);
    }
  }, [location, document.getElementById(lastHash.current)]);

  useEffect(() => {
    if (location.pathname === '/sales') {
      setIsFooterv2(true);
    }
    const token = localStorage.getItem('authToken');
    try {
      if (token) {
        if (isUserAuthenticated()) {
          setAuth(true);
        } else {
          localStorage.clear();
          setAuth(false);
        }
      } else {
        const currentUrl = window.location.href;
        const openRoutes = [
          'tradingquiz',
          'tradingquizvideo',
          'billing',
          'login',
          'home',
          'contact',
          'contact-form-submitted',
          'faq',
          'affiliate',
          'events',
          'signup',
          'password-reset',
          'how-it-works',
          'terms',
          'terms#PaymentProcedure',
          'terms#PaymentandFundingPolicy',
          'terms#PaymentCancellationPolicy',
          'terms#RefundPolicy',
          'terms#PrivacyPolicy',
          'terms#PayoutSplitStructure',
          'home#pricing',
          'blog',
          'how-to-pass-a-prop-trading-firm-challenge',
          'pro-trading-firms-for-beginners',
          'how-to-be-a-professional-trader-without-using-your-own-money',
          '3-proprietary-trading-strategies-for-professional-traders',
          '5-reasons-why-traders-should-choose-proprietary-trading-funds',
          'what-is-a-prop-trading-firm',
          'best-proprietary-trading-firm',
          'funded-account-challenge',
          'best-funded-trader-program',
          'best-forex-trader',
          'looking-for-an-instant-prop-firm',
          'tips-that-can-make-you-a-successful-trader',
          'thank-you',
          'payment-successful',
          'affiliate-signup',
          'support-page',
          'global-traders-connect'
        ];

        const shortPath = currentUrl.split('/').pop();
        const searchParamsArray = currentUrl.split('?');
        if (searchParamsArray.length > 1 && searchParamsArray[1] !== '') return;
        if (currentUrl === process.env.REACT_APP_LANDING_URL + '/') return;
        if (!openRoutes.includes(shortPath) && window.location.href.split('#').pop() !== 'pricing' && checkIfSpecialUrls(currentUrl)) {
          window.location.href = `${process.env.REACT_APP_LANDING_URL}/login`;
        }
      }
    } catch (error) {
      console.log('inside error', error);
      window.location.href = `${process.env.REACT_APP_LANDING_URL}/login`;
    }
  }, [location.pathname]);

  const checkIfSpecialUrls = currentUrl => {
    return !currentUrl.includes('payment-successful');
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="main bg-mainTheme scrollbar-hide">
      <Routes>
        {/*New Routes from website app*/}
        <Route path="/global-traders-connect" element={<GlobalTradersConnect />} />
        <Route
          path="/tradingquiz"
          element={<Sales activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/tradingquizvideo"
          element={<SalesVideo activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/"
          element={<Home activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/handle-payment-response"
          element={
            <HandlePaymentResponse activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
          }
        ></Route>
        <Route
          path="/payment-successful"
          element={
            <PaymentSuccessful activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
          }
        ></Route>
        <Route
          path="/contact"
          element={<Contact activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/contact-form-submitted"
          element={
            <ContactFormSubmitted activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
          }
        ></Route>
        <Route
          path="/faq"
          element={<Faq activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/affiliate"
          element={<UserAffiliate activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/events"
          element={<Events activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/login"
          element={<Login activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/password-reset"
          element={<ForgotPassword activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/user-checkout"
          element={<NewCheckout activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/how-it-works"
          element={<HowItWorks activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/thank-you"
          element={<ThankYou activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        {/* Dashboard */}
        <Route
          path="/billing"
          element={<Billing activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/terms"
          element={<Terms activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route
          path="/affiliate-signup"
          element={<AffiliateSignup activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blogs/how-to-pass-a-prop-trading-firm-challenge" element={<Blog1 />}></Route>
        <Route path="/blogs/pro-trading-firms-for-beginners" element={<Blog2 />}></Route>
        <Route path="/blogs/how-to-be-a-professional-trader-without-using-your-own-money" element={<Blog3 />}></Route>
        <Route path="/blogs/3-proprietary-trading-strategies-for-professional-traders" element={<Blog4 />}></Route>
        <Route path="/blogs/5-reasons-why-traders-should-choose-proprietary-trading-funds" element={<Blog5 />}></Route>
        <Route path="/blogs/what-is-a-prop-trading-firm" element={<Blog6 />}></Route>
        <Route path="/blogs/best-proprietary-trading-firm" element={<Blog7 />}></Route>
        <Route path="/blogs/funded-account-challenge" element={<Blog8 />}></Route>
        <Route path="/blogs/best-funded-trader-program" element={<Blog9 />}></Route>
        <Route path="/blogs/best-forex-trader" element={<Blog10 />}></Route>
        <Route path="/blogs/looking-for-an-instant-prop-firm" element={<Blog11 />}></Route>
        <Route path="/blogs/tips-that-can-make-you-a-successful-trader" element={<Blog12 />}></Route>
        <Route path="/support/support-page" element={<SupportPage />}></Route>

        <Route element={<ProtectedRoute isAuthenticated={auth} />}>
          <Route element={<NavbarLayout />}>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  activeNav={activeNav}
                  setActiveNav={setActiveNav}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                  admin={admin}
                  setAdmin={setAdmin}
                />
              }
            ></Route>
            <Route
              path="/verification"
              element={<Verification activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/account"
              element={<Profile activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/billings"
              element={<Billings activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/metrix"
              element={<Metrix activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/leadership"
              element={<Leadership activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/wallet"
              element={<Wallet activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/payout"
              element={<PayoutRoute activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/withdraw"
              element={<Withdraw activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/request-profit-split"
              element={
                <RequestProfitSplit activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
              }
            ></Route>
            <Route
              path="/shop"
              element={<ShopPage activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/transactions"
              element={<Transactions activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/user-affiliate-old"
              element={<Affiliate activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/user-affiliate"
              element={<AffiliateNew activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/user-affiliate/leaderboards"
              element={
                <TopAffiliatesLeaderboard
                  activeNav={activeNav}
                  setActiveNav={setActiveNav}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                />
              }
            ></Route>
            <Route
              path="/user-affiliate/direct-affiliate"
              element={
                <DirectAffiliate activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
              }
            ></Route>
            <Route
              path="/user-affiliate/indirect-affiliate"
              element={
                <IndirectAffiliate activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
              }
            ></Route>
            <Route
              path="/user-affiliate/payments"
              element={
                <AffiliatePayments activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />
              }
            ></Route>
            <Route
              path="/user-affiliate/referrals"
              element={<Referral activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>

            <Route
              path="/download"
              element={<Download activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/accounts"
              element={<Accounts activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/certificates"
              element={<Certificates activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/challenges"
              element={<GetChallenge activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            <Route
              path="/checkout"
              element={<Checkout activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>

            <Route
              path="/kyc-document-status"
              element={<KycDocStatus activeNav={activeNav} setActiveNav={setActiveNav} lightMode={lightMode} setLightMode={setLightMode} />}
            ></Route>
            {/* 404 route */}
            <Route path="*" element={<NotFoundPage lightMode={lightMode} setLightMode={setLightMode} />} />

            {/* ADMIN */}
            <Route
              path="/admin/overview"
              element={
                <Overview
                  activeNav={activeNav}
                  setActiveNav={setActiveNav}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                  admin={admin}
                  setAdmin={setAdmin}
                />
              }
            ></Route>
            <Route
              path="/admin/messaging"
              element={<Messaging lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/traders"
              element={<AdminTraders lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/challenges"
              element={<Challenges lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/invoicing"
              element={<Invoicing lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/payout"
              element={<Payout lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/revenue"
              element={<Revenue lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/discount"
              element={<Discount lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            <Route
              path="/admin/staff"
              element={<Staff lightMode={lightMode} setLightMode={setLightMode} admin={admin} setAdmin={setAdmin} />}
            ></Route>
            {/* Handle other routes */}
          </Route>
        </Route>
      </Routes>
      {isFooterv2 ? (
        <footer className="bg-[#1C1D20]  mt-2 px-2">
          <div className="text-white flex text-xs justify-center items-center sm:gap-4 gap-2 h-[84px]">
            <a href="#">© {year} Pro Traders Funding LLC . All rights reserved.</a>
          </div>
        </footer>
      ) : (
        null
        // <footer className="bg-[#1C1D20]  mt-2 px-2">
        //   <div className="text-white flex text-xs justify-center items-center sm:gap-4 gap-2 h-[84px]">
        //     <a href="#">Help & resources</a>
        //     <a href="#">Customer suppport</a>
        //     <a href="#">© {year} All rights reserved</a>
        //     <>V1.0.3</>
        //   </div>
        // </footer>
      )}
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
    </div>
  );
}

export default App;
// export default App;
