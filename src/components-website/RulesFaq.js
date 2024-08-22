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

export default function RulesFaq() {
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
          <Typography>What are the trading restrictions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            There are no restrictions on the financial instrument and trading style you may use: You can trade any currency pair, stock,
            commodity, or cryptocurrency market and it doesn't matter if you are using fundamental analysis or technical analysis. The only
            requirements are that you follow the trading rules while completing the challenge. The evaluation will take up to 30 days
            (depending on your ability to generate profits while managing risk), but it is not a race to see who can make the most money in
            a limited amount of time. We want to see if you have what it takes to become a professional fund trader!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I get another chance if I fail the Pro Traders Fund Evaluation Challenge?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            Pro Traders Fund gives you unlimited chances to prove you know how to trade. You can try as many of the Pro Trader challenges as
            you like, so if your first try doesn't go as well as you'd hoped, don't worry. Just purchase another evaluation and get a new
            chance!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I trade the news or hold my positions overnight?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>YES - Pro Traders Fund offers traders the ability to hold their trades over weekend and trade the news.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What happens if I break the rules during step 1 or step 2?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you breach the rules of your Pro Trader Fund Evaluation Challenge your account will become forfeited, but don't worry - you
            can purchase a new Pro Trader Evaluation Challenge and test your trading skills again.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>I have successfully completed my trading assessment, what now?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Congratulations Pro Trader! <br /> You've successfully completed our Pro Trader Fund Evaluation Challenge. <br /> The next step
            is to sign the Pro Trader Contract. <br /> Once you're set up, our capital will provide you with ample opportunity to trade in
            live market conditions (as long as you follow our rules and guidelines). Keep up your great work and enjoy 90% profit share!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Which financial instruments can I trade and what strategies am I allowed to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            There are over 2000 instruments available on our trading platform in all markets: Forex, stocks, cryptocurrencies, options and
            more. Any strategies you want to execute as long as you’re trading within the rules and guidelines or our Pro Trader Challenge
            and Fund.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does Pro Traders Fund allow copy trading or EAs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund does not allow copy trading or EAs, all trades on PTF accounts must be placed manually by the trader who is
            named on the account. To learn more about PTF click here.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What if I don't understand the rules?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Don’t worry! Feel free to ask us anything for further clarification, the best way is to get in touch directly by emailing us at{' '}
            {''}
            <a href="mailto:support@protradersfund.com">support@protradersfund.com</a>. You can reach out to us on Instagram too — just
            search for @ProTradersFund, and you'll find us there.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
