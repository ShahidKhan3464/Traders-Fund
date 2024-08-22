import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('traderFund');
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Accordion content
  const accordionItems = [
    {
      title: 'What is Pro Traders Fund?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    },
    {
      title: 'What is remarkable about the Pro Traders Fund brand, products, and service?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    },
    {
      title: 'What does Pro Traders Fund AI Driven, Decentralized Performance Evaluation and Funding Platform Mean?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    },
    {
      title: 'Does Pro Traders Fund offer free funded account challenge?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    },
    {
      title: 'Why is Pro Traders Fund one of the best instant funding prop firms?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    },
    {
      title: 'Why Should I Join the Pro Traders Fund?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    },
    {
      title: 'What sets Pro Traders Fund apart from other risk free proprietary trading firms?',
      content:
        "A prop firm, short for proprietary trading firm, is a company that provides its own capital to its traders, who then trade in financial markets with that capital.Unlike traditional brokerage firms where clients use their own money to trade, prop firms invest their resources and take on the risk. In return, they take a share of the profits generated from these trades.This arrangement allows traders to leverage more capital than they might have access to personally, while also benefiting from the firm's technology, research, and trading platforms."
    }
  ];

  return (
    <section className="flex overflow-hidden z-0 flex-col px-56 py-24 w-full bg-[#141518] max-md:px-5 max-md:py-10">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center px-56 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="gap-2.5 self-center px-4 py-2.5 text-sm font-matter font-semibold leading-none text-[#6EFDEB] border border-solid border-[#6EFDEB] rounded-[50px]">
              Got questions? We got answers
            </div>
            <div className="flex-1 shrink gap-2.5 self-stretch mt-5 w-full text-6xl font-matter font-medium tracking-tighter text-center text-white capitalize max-md:max-w-full max-md:text-4xl">
              Frequently Asked Questions
            </div>
            <div className="flex-1 shrink gap-2.5 self-stretch mt-5 w-full text-xl font-matter font-normal leading-8 text-center text-[#D0D5DD] max-md:max-w-full max-md:text-lg">
              All you need to know to get you started on your trading journey with the best prop firm for traders.
            </div>
          </div>
          <button
            onClick={() => {
              navigate('/#pricing');
            }}
            type="button"
            className="overflow-hidden cursor-pointer gap-2 self-center px-5 py-3 mt-10 text-base font-matter font-semibold bg-[#6EFDEB] shadow-sm rounded-[30px] text-[#141518]"
          >
            Get funded
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 self-center mt-10 max-md:max-w-full max-md:justify-center max-sm:flex-col max-md:items-center">
          <div className="flex flex-wrap gap-2 items-center p-1 my-auto text-sm font-semibold leading-none text-center text-[#6EFDEB] rounded-lg bg-[#1C1D20] min-w-[240px] max-md:max-w-full max-sm:flex-col">
            <button
              type="button"
              onClick={() => setActiveTab('traderFund')}
              className={`overflow-hidden gap-2 self-stretch cursor-pointer font-matter px-3 py-3 my-auto rounded-md ${activeTab === 'traderFund' ? 'bg-[#6EFDEB] text-[#0B142B]' : 'text-[#667085]'}`}
            >
              New to Pro Traders Fund?
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('general')}
              className={`overflow-hidden gap-2 self-stretch cursor-pointer font-matter px-3 py-3 my-auto rounded-md ${activeTab === 'general' ? 'bg-[#6EFDEB] text-[#0B142B]' : 'text-[#667085]'}`}
            >
              General Questions
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('evaluation')}
              className={`overflow-hidden gap-2 self-stretch cursor-pointer font-matter px-3 py-3 my-auto rounded-md ${activeTab === 'evaluation' ? 'bg-[#6EFDEB] text-[#0B142B]' : 'text-[#667085]'}`}
            >
              Evaluation Process
            </button>
          </div>
          <div className="flex flex-col justify-center text-base font-medium text-white w-[130px]">
            <button
              type="button"
              className="overflow-hidden cursor-pointer flex-1 gap-2 self-stretch font-matter font-medium px-5 py-3 rounded-lg bg-[#3B3C3D] size-full"
            >
              See all FAQs
            </button>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex overflow-hidden flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center p-6 mt-4 w-full text-lg font-medium leading-loose text-white rounded-2xl border border-solid bg-[#1C1D20] border-[#262729] max-md:px-5 max-md:max-w-full"
            >
              <div
                className="flex flex-wrap gap-2 items-start w-full cursor-pointer"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                <div className="flex-1 font-matter font-medium shrink basis-0 max-md:max-w-full">{item.title}</div>
                <img
                  alt="img"
                  loading="lazy"
                  className="object-contain shrink-0 w-6 aspect-square"
                  src={
                    activeAccordion === index
                      ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/1956867a407fb9f18f437b07c2dccff31d0b62b1fd7368d1615c952a952859a7?apiKey=227fffdadf2841c0827fed858fc04b84&'
                      : 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f3f5912550bfda0ed36373e84bc50739efa73e2611dbae1367ac127f0c187ca?apiKey=227fffdadf2841c0827fed858fc04b84&'
                  }
                />
              </div>
              {activeAccordion === index && (
                <div
                  className={`mt-4 text-base font-matter font-normal leading-6 text-[#D0D5DD] transition-all duration-300 ease-in-out overflow-hidden ${activeAccordion === index ? 'max-h-[500px]' : 'max-h-0'}`}
                >
                  {item.content}
                </div>
              )}
            </div>
          ))}
          <div className="overflow-hidden gap-2 self-center font-matter mt-4 text-base font-medium text-[#6EFDEB] rounded-[30px]">
            See all FAQs
          </div>
          <div className="flex gap-6 justify-center items-center self-center mt-4 text-base font-medium text-white">
            <button
              type="button"
              className="overflow-hidden cursor-pointer gap-2 self-stretch font-matter font-medium px-5 py-3 my-auto bg-[#3B3C3D] rounded-[30px]"
            >
              Contact support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
