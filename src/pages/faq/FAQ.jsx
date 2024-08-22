import { useEffect, useState } from 'react';
import Faq from '../../components-website/Faq';
import GenFaq from '../../components-website/GenFaq';
import Navbar from '../../components-website/Navbar2';
import Footer from '../../components-website/FooterV2';
import EvalFaq from '../../components-website/EvalFaq';
import RulesFaq from '../../components-website/RulesFaq';
import OrdersFaq from '../../components-website/OrdersFaq';
import AffiliateFaq from '../../components-website/AffiliateFaq';
import PlatformsFaq from '../../components-website/PlatformsFaq';
import MarketingFaq from '../../components-website/MarketingFaq';
import PayoutFaq from '../../components-website/PayoutFaq';
import { FiSearch } from 'react-icons/fi';
import TradingFaq from '../../components-website/TradingFaq';
import allFaqs from '../../components-website/FaqData';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RegulationFaq from '../../components-website/RegulationFaq';

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  borderBottom: '1px solid #3b3d41',
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem', color: 'white' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState('newto');
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  const ALLFaqs = allFaqs;
  const handleSearch = () => {
    setSelected('');
    // Filter the FAQs based on the searchQuery
    const filtered = ALLFaqs.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()));

    // Update the filteredFaqs state
    setFilteredFaqs(filtered);
  };
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const emailAddress = 'support@protradersfund.com';
  const subject = 'urgent support request';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (searchQuery !== '') {
      handleSearch();
    }
  }, [searchQuery]);

  useEffect(() => {
    localStorage.removeItem('redirect_to');
  }, []);

  return (
    <div className="bg-[#141518]">
      <Navbar></Navbar>
      <section className="h-full flex flex-col items-center text-center py-[40px]">
        <div
          className="flex flex-wrap justify-center gap-2 mb-5 text-xs text-white sm:text-sm md:text-base"
          onClick={() => setSearchQuery('')}
        >
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'newto' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('newto');
            }}
          >
            New to Pro Trader Funds?
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'general' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('general');
            }}
          >
            General Questions
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'evaluation' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('evaluation');
            }}
          >
            Performance Evaluation & <br /> Funding Process
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'rules' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('rules');
            }}
          >
            Rules for Profit Split, Bonus, <br /> Refund, Affiliate Payout
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'trading' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('trading');
            }}
          >
            Trading Rules, Features, <br /> Specification & Guidelines
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'platforms' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('platforms');
            }}
          >
            Dashboard and Trading <br /> Platform Questions
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'orders' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('orders');
            }}
          >
            Orders, Billing & Payment <br /> Process
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'affiliate' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('affiliate');
            }}
          >
            Affiliates Program
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'marketing' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('marketing');
            }}
          >
            Marketing
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'payout' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('payout');
            }}
          >
            Affiliate Payout
          </div>
          <div
            className={`header-acc flex items-center justify-center gap-1 ${selected === 'regulation' ? 'header-active' : ''}`}
            onClick={() => {
              setSelected('regulation');
            }}
          >
            Regulation & Compliance Questions
          </div>
        </div>
        <div className="text-white md:w-[639px] px-2">
          <div className="pb-4 space-y-3">
            <p className="text-xs text-[#6EFDEB]">FAQs</p>
            <h2 className="font-bold md:text-[48px] text-[30px] text-white">Frequently asked questions</h2>
            <p className="text-[#CDCECF]">
              Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <div className="flex justify-start items-center bg-secTheme sm:w-[320px] mx-auto w-[280px] px-3 rounded-md border border-[#3B3C3D]">
              <FiSearch></FiSearch>
              <input
                type="text"
                className="mx-2 bg-transparent border-none outline-none focus:ring-0 focus:ring-offset-0"
                placeholder="Search"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  handleSearch();
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {searchQuery.length > 0 ? (
        <div className="lg:w-[1000px] md:w-[724px] text-white bg-transparent mx-auto px-4 font-urbanist accordian-parent ">
          {filteredFaqs.map(faq => (
            <div key={faq.id} className="pt-3 accordian-parent">
              <Accordion
                expanded={expanded === `panel${faq.id}`}
                onChange={handleChange(`panel${faq.id}`)}
                className="text-white bg-transparent"
              >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <h3>
                    <b>{faq.question}</b>
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="pt-3">{faq.answer}</div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        <>
          {' '}
          {selected === 'newto' ? <Faq></Faq> : null}
          {selected === 'general' ? <GenFaq></GenFaq> : null}
          {selected === 'evaluation' ? <EvalFaq></EvalFaq> : null}
          {selected === 'rules' ? <RulesFaq></RulesFaq> : null}
          {selected === 'trading' ? <TradingFaq></TradingFaq> : null}
          {selected === 'orders' ? <OrdersFaq></OrdersFaq> : null}
          {selected === 'affiliate' ? <AffiliateFaq></AffiliateFaq> : null}
          {selected === 'platforms' ? <PlatformsFaq></PlatformsFaq> : null}
          {selected === 'marketing' ? <MarketingFaq></MarketingFaq> : null}
          {selected === 'payout' ? <PayoutFaq></PayoutFaq> : null}
          {selected === 'regulation' ? <RegulationFaq></RegulationFaq> : null}
        </>
      )}

      <Footer></Footer>
    </div>
  );
}
