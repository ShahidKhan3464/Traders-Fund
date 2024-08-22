import { useEffect, useState } from 'react';
import Navbar from './SalesNavbar';
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import DocumentMeta from 'react-document-meta';

export default function Sales() {
  const meta = {
    title: 'Trading Quiz  | Forex Trading Quiz | Trading Quiz Questions',
    description:
      'Test your trading knowledge with our Forex Trading Quiz. Challenge yourself with questions designed to enhance your trading skills and knowledge.',
    canonical: 'https://app.protradersfund.com/tradingquiz',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Forex Trading Quiz'
      }
    }
  };
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/thank-you');
  };
  useEffect(() => {
    localStorage.removeItem('redirect_to');
  }, []);

  const [, setShowButton] = useState(false);

  useEffect(() => {
    // non interaction
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    // Load Google Tag Manager script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q9CXGEY46T';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-Q9CXGEY46T');

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <DocumentMeta {...meta}>
      <div id="main">
        <Navbar></Navbar>
        <main className="bg-[#141518] overflow-hidden text-white main bg-sales">
          <section className="h-full flex flex-col  items-center text-center bg-contain bg-top bg-no-repeat pt-[54px]">
            <div className="pb-10 space-y-2">
              <h1 className="font-bold md:text-[46px] text-[30px]">
                Traders <span className="link-color">FREE CHANCE</span> to
              </h1>
              <h1 className="font-bold md:text-[46px] text-[30px]">Connect With Successful Traders</h1>
              <h1 className="font-bold md:text-[46px] text-[30px]">
                On An <span className="link-color">All Expense Paid Vacation</span>
              </h1>
              <h6 className={'mt-0 pb-4'}>Take this 1 min quiz below find to out if you're an eligible trader!</h6>
            </div>
          </section>
          <div class="grid place-items-center">
            <Quiz />
          </div>
        </main>
      </div>
    </DocumentMeta>
  );
}
