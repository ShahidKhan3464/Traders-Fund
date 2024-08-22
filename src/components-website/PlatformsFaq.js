/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  borderBottom: '1px solid #3b3d41',
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem', color: 'white' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0)',
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

export default function PlatformsFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Which platforms can I use for trading on Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>Becoming a Pro Funded Trader is simple!</p>
          <p>
            You can use the MetaTrader5 (MT5) platform to trade your Pro Trader Challenge or Funded account. To see your PTF account
            credentials, log into the client area and click the "Credentials" tab.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What are the Pro Traders Fund account specifications?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund account specification can be seen right in your trading platform. To view the instrument specification in
            MetaTrader 5, open your Market Watch, right-click on the concerned instrument and choose ‘specification’.
          </p>
          <p>
            <b>You can trade over 2000 instruments available on our trading platform in all markets:</b> <br /> Forex, stocks,
            cryptocurrencies, options and more.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I access the platform to start trading?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            To access the Pro Traders Fund platform to start trading all you need to do is login to your Pro Traders Fund dashboard and
            select any of the available challenges. You can then click on "Credentials" and follow the steps to use your credentials to
            login to your trading account. If you have any issues please email{' '}
            <a href="mailto:support@protradersfund.com" className="text-mainColor">
              support@protradersfund.com
            </a>{' '}
            and our support team will assist you.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I change my trading platform during the Pro Traders Fund Evaluation process?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            No, a change of your trading platform is not possible during the progress of your evaluation with the Pro Traders Fund platform.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
