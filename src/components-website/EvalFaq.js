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

export default function EvalFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How do I become a Pro Funded Trader?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>Becoming a Pro Funded Trader is simple!</p>
          <p>
            Step 1: PROVE YOUR SKILLS <br /> Prove your skills by selecting one of our trading challenges and successfully completing the
            trading objectives.
          </p>
          <p>
            Step 2: VERIFY YOUR RESULTS <br />
            Once you have successfully completed step 1 of our evaluation process, verify your results by completing the second set of
            trading objectives required to become a Pro Funded Trader.
          </p>
          <p>
            Step 3: BECOME A PRO FUNDED TRADER <br /> Once you have proven your skills and your results have been verified you will then be
            eligible to be funded with capital to manage and scale up to 3+ Million Dollars as a Pro Funded Trader earning 90% of the
            profits you make.
          </p>
          <br />
          <a href="/#getfunded">
            <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Get Funded
            </button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>If I breach the rules, do I get a second chance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you breach the rules of your Pro Trader Challenge your account will become forfeited, but don't worry - you can purchase a
            new Pro Trader challenge and test your trading skills again.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What capital will I trade as a Pro Funded Trader?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            Pro Funded Traders will have the same account balance size as chosen for their preceding Pro Trader Challenge and Verification.
          </p>
          <p>
            To avoid any confusion, after a client becomes a Pro Funded Trader, he/she will be provided with a demo account with virtual
            funds. The Pro Trader's Funded Account is connected to our Proprietary Trading Firm’s live trading account with real capital.
            That is where we generate real cash flow. Clients are entitled to up to 90% of profits generated on the Pro Trader's Funded
            Account. This solution is administratively much easier and gives our company the freedom to actively manage risk in certain
            markets.
          </p>
          <p>
            We do not have upgrading options so you need to choose the appropriate account size right at the beginning when you are
            configuring your Pro Trader Challenge.
          </p>
          <p>
            If you are successful and stable in the long run, the account balance can be increased according to our Scaling Plan. The
            Scale-up can only be accommodated during the Profit Split processing. If your account is about to fulfill the eligibility
            criteria, please contact us a few business days ahead of your upcoming Profit Split Day so we can review your track record and
            provide a scaled-up Pro Trader's Funded Account for you for the upcoming trading period.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How long does it take to become a Pro Funded Trader?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            To become a Pro Funded Trader, you must first pass our evaluation process. Then, and only then, may you join the Pro Traders
            Fund and reap the benefits of a strong community of passionate partners. So what will it take? The minimum trading days required
            is 5 days.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>I have successfully passed the Pro Traders Fund Evaluation Challenge, now what?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Congratulations Pro Trader! <br /> You've successfully completed our Pro Trader Fund Evaluation Challenge. <br /> The next step
            is to sign the Pro Trader Contract. <br /> Once you're set up, our capital will provide you with ample opportunity to trade in
            live market conditions (as long as you follow our rules and guidelines). Keep up your great work and enjoy 90% profit share!
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
