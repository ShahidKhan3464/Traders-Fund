import Navbar from '../../components-website/Navbar2';
import Footer from '../../components-website/Footer';
import laptop2 from '../../images/Macbook Pro 16 mockup2.png';
import beach from '../../images/tradingonthebeach.png';
import headset from '../../images/icons/headset.svg';
import lineup from '../../images/icons/Line 01 Up.svg';
import column from '../../images/icons/Column 01 Up.svg';
import dollar from '../../images/icons/Coin Dollar.svg';
import heart from '../../images/icons/Heart.svg';
import discount from '../../images/icons/Discount.svg';
import people from '../../images/people.png';
import mt5image from '../../images/MT42x 2.png';
import { useNavigate } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

export default function HowItWorks() {
  const meta = {
    title: 'Instant Funding Prop Firms | Pro Traders Fund',
    description:
      'Pro Traders Fund is the best Instant Funding Prop Firm around. Get funded instantly and start trading & book your profit. Visit the website for more details.',
    canonical: 'https://app.protradersfund.com/how-it-works',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'instant funding prop firms, the funded trader prop firm'
      }
    }
  };
  const navigate = useNavigate();
  return (
    <DocumentMeta {...meta}>
      <Navbar></Navbar>
      <main className="bg-[#141518] overflow-hidden text-white">
        <section className="h-full flex flex-col items-center text-center py-[54px] bg-gradient-to-r from-[#1797F8] to-[#005046]">
          <div className="text-white md:w-[639px] px-">
            <div className="pb-10 space-y-4">
              <h1 className="font-bold md:text-[60px] text-[30px]">How it works</h1>
              <p>Prove your skills, get funded & scale up to 3+ million dollars. You keep up to 90% of the profits, we cover the losses.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 text-base sm:gap-10">
              <div className="flex flex-col items-center gap-8 sm:gap-8 sm:flex-row">
                <a
                  onClick={() => {
                    navigate('/#pricing');
                  }}
                >
                  <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                    Get Funded
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="h-full flex flex-col md:pl-[148px] py-[54px]">
          <div className="px-2 text-white">
            <div className="pb-10 space-y-2">
              <p className="text-xs">Become a Pro Funded Trader now</p>
              <h2 className="font-bold md:text-[48px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                How to become a Pro Funded trader
              </h2>
              <p className="text-[#CDCECF]">
                Trade our funds & keep <span className="font-bold text-white">up to 90%</span> of the profits, we cover the losses.
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-10">
                <div className="flex gap-4">
                  <span className="bg-[#6EFDEB] h-6 w-6 rounded-full flex items-center justify-center text-black shrink-0">1</span>{' '}
                  <div className="space-y-1">
                    <p className="font-semibold">Sign up</p>
                    <p className="text-sm md:w-[80%] text-[#CDCECF]">Register for your Pro Traders Fund account</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#6EFDEB] h-6 w-6 rounded-full flex items-center justify-center text-black shrink-0">2</span>{' '}
                  <div className="space-y-1">
                    <p className="font-semibold">Prove your skills</p>
                    <p className="text-sm md:w-[80%] text-[#CDCECF]">
                      Prove your skills by selecting one of our trading challenges and successfully completing the trading objectives.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#6EFDEB] h-6 w-6 rounded-full flex items-center justify-center text-black shrink-0">3</span>{' '}
                  <div className="space-y-1">
                    <p className="font-semibold">Verify your results</p>
                    <p className="text-sm md:w-[80%] text-[#CDCECF]">
                      Complete the second set of trading objectives required to become a Pro Funded Trader.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#6EFDEB] h-6 w-6 rounded-full flex items-center justify-center text-black shrink-0">4</span>{' '}
                  <div className="space-y-1">
                    <p className="font-semibold">Become a Pro Funded Trader</p>
                    <p className="text-sm md:w-[80%] text-[#CDCECF]">
                      Scale up to 3+ Million Dollars as a Pro Funded Trader & keep up to 90% of the profits you make.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden ml-auto md:block">
                <img src={laptop2} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="h-full flex flex-col items-center text-center py-[54px]">
          <div className="text-white md:w-[639px] px-2">
            <div className="pb-10 space-y-2">
              <p className="text-xs">We Are The Superior Proprietary Trading Firm</p>
              <h2 className="font-bold md:text-[48px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                What makes us better
              </h2>
              <p className="text-[#CDCECF]">
                We&apos;re the best prop trading firm out there. <br /> Our success rate is unbeatable!
              </p>
            </div>
          </div>
          <div className="text-white text-left w-full flex flex-col md:gap-[72px] gap-[24px] lg:px-[148px] md:py-0 py-[24px] md:px-8 px-4">
            <div className="flex md:flex-row flex-col justify-between items-center xl:px-[148px] gap-6">
              <div className="flex flex-col w-[250px] gap-2">
                <span className="bg-[#2b2c2f] h-12 w-12 rounded-full flex items-center justify-center text-black shrink-0">
                  <img src={headset} alt="" />
                </span>
                <p className="font-semibold">Dedicated customer support</p>
                <p className="font-light text-sm text-[#CDCECF]">
                  Dedicated support via email, phone, and live chat, 24/7 to answer your questions at any time.
                </p>
              </div>
              <div className="flex flex-col w-[250px] gap-2">
                <span className="bg-[#2b2c2f] h-12 w-12 rounded-full flex items-center justify-center text-black shrink-0">
                  <img src={lineup} alt="" />
                </span>
                <p className="font-semibold">No Limits On Trading Style!</p>
                <p className="font-light text-sm text-[#CDCECF]">
                  Trade your own trading strategy, hold trades overnight or the weekend and trade the news with no limits or restrictions.
                </p>
              </div>
              <div className="flex flex-col w-[250px] gap-2">
                <span className="bg-[#2b2c2f] h-12 w-12 rounded-full flex items-center justify-center text-black shrink-0">
                  <img src={column} alt="" />
                </span>
                <p className="font-semibold">Trade Every Instrument You Want</p>
                <p className="font-light text-sm text-[#CDCECF]">
                  Whatever your preferences, we’ve got you covered.Trade Forex, Cryptocurrency, Stocks, Commodities, Indices, Metals and
                  More!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center xl:px-[148px] gap-6">
              <div className="flex flex-col w-[250px] gap-2">
                <span className="bg-[#2b2c2f] h-12 w-12 rounded-full flex items-center justify-center text-black shrink-0">
                  <img src={dollar} alt="" />
                </span>
                <p className="font-semibold">Bi-weekly Payout</p>
                <p className="font-light text-sm text-[#CDCECF]">
                  Become a Pro Funded Trader and withdraw your profit split anytime YOU want!
                </p>
              </div>
              <div className="flex flex-col w-[250px] gap-2">
                <span className="bg-[#2b2c2f] h-12 w-12 rounded-full flex items-center justify-center text-black shrink-0">
                  <img src={heart} alt="" />
                </span>
                <p className="font-semibold">No Risks to you</p>
                <p className="font-light text-sm text-[#CDCECF]">
                  The best prop firms minimize their client’s risk. Working with Pro Traders Fund guarantees a risk-free experience.
                </p>
              </div>
              <div className="flex flex-col w-[250px] gap-2">
                <span className="bg-[#2b2c2f] h-12 w-12 rounded-full flex items-center justify-center text-black shrink-0">
                  <img src={discount} alt="" />
                </span>
                <p className="font-semibold">Refundable Startup Fee </p>
                <p className="font-light text-sm text-[#CDCECF]">
                  The fee is refunded to you with the first Profit Split when you become a Pro Funded Trader.
                </p>
              </div>
            </div>
          </div>
          <a
            onClick={() => {
              navigate('/#pricing');
            }}
            className="mt-[54px]"
          >
            <button className=" bg-white text-black sm:w-auto w-full py-2 px-5 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Get Funded
            </button>
          </a>
        </section>
        <section className="h-full flex flex-col md:px-[148px] py-[54px]">
          <div className="px-2 text-white">
            <div className="flex items-center justify-center gap-20">
              <div className="hidden md:block">
                <img src={beach} alt="trading on the beach" className="lg:h-[250px] w-[500px] object-contain" />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-bold md:text-[48px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                  Trade any instrument, <br /> any market
                </h2>
                <p>
                  No limits! Trade Forex, Cryptocurrency, <br /> Stocks, Commodities, Indices, Metals and More!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="h-full flex flex-col md:px-[148px] py-[54px]">
          <div className="px-2 text-white">
            <div className="flex items-center justify-center gap-20">
              <div className="flex flex-col gap-5">
                <h2 className="font-bold md:text-[48px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                  Join the team of our <br /> experienced traders
                </h2>
                <p>
                  If you are ready, accept our PTF Challenge and become our PTF <br />
                  Trader. You can even try the entire process completely free of charge.
                </p>
              </div>
              <div className="hidden md:block">
                <img src={people} alt="Picture of people" className="lg:h-[250px] w-[500px] object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="h-full flex flex-col md:pr-[148px] py-[54px]">
          <div className="px-2 text-white">
            <div className="flex items-center justify-center gap-20">
              <div className="hidden mr-auto md:block">
                <img src={mt5image} alt="" />
              </div>
              <div className="flex flex-col gap-5 md:w-[40%]">
                <h2 className="font-bold md:text-[48px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                  The most popular <br /> retail trading platforms
                </h2>
                <p>
                  All our traders have the access to the best available trading solution in the form of our Metatrader 5 (MT5), and cTrader
                  accounts powered by the data feed directly from our aggregated pool of prime liquidity providers. We do our best to
                  simulate the real market conditions with tight spreads and very low commission on all our trading accounts with virtual
                  funds.
                </p>
                <div>
                  <button className="w-[160px] bg-mainColor shadow-lg shadow-mainColor text-black py-2 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                    <a
                      onClick={() => {
                        navigate('/#pricing');
                      }}
                    >
                      Get Funded
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-full flex flex-col md:pl-[148px] py-[54px] bg-funded bg-no-repeat bg-cover bg-center">
          <div className="px-2 text-white">
            <div className="space-y-2 pb-10 md:w-[500px]">
              <h2 className="font-bold md:text-[48px] text-[30px]">Become a Pro Funded Trader Today.</h2>
              <p>
                Join thousands of people who choose to trade with Pro Traders Fund on over 2000 instruments including 24/7 trading of
                cryptocurrencies.
              </p>
            </div>
            <div className="flex flex-col items-center gap-8 sm:gap-8 sm:flex-row">
              <a
                onClick={() => {
                  navigate('/#pricing');
                }}
              >
                <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
                  Get Funded
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </DocumentMeta>
  );
}
