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

export default function PayoutFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How do I get paid?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            We pay affiliate commissions once per month through Bank Wire Transfer, PayPal and Cryptocurrency. When you sign up, don’t
            forget to add your Bank Wire Transfer, PayPal or Cryptocurrency details to your affiliate account. For commissions exceeding
            $1,000 monthly, we support payout by direct wire transfer.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Is there a minimum payout amount? If yes, how much is it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund affiliate program has a minimum payout of USD $100. If the amount is less than $50, the commission will
            roll over to the next payment cycle.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the affiliate payout schedule?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund affiliate program aims to pay all affiliate commissions by the 15th of every month for the previous month’s
            commissions.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are the affiliate payout methods?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund can payout affiliates through a variety of methods. Wire Transfer, cryptocurrency and Paypal are all
            payment options. As an affiliate you will be able to choose which method of payment you would like to receive your payments
            through (or any combination of these methods).
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I request an affiliate payout?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund affiliate members can request a payout by logging in to the clients dashboard and clicking "PTF Affiliate" then
            requesting their payout by any of our easy to use payout methods such as wire transfer, PayPal or cryptocurrency (or a
            combination of all of the above).
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How long will my affiliate payout take to arrive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund affiliate payouts are issued on the 15th of each month, and are sent immediately to the requested cashout
            method. The time it takes to receive a payout is determined by the payout method chosen.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How long does it take to process affiliate payouts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Once a Pro Traders Fund affiliate member requests an affiliate payout we process it on the 15th of each month and all payouts
            are sent to the requested payout method immediately. If a payout request is made that contains incorrect or incomplete
            information, we will send you an email requesting the missing or corrected information. This email will be sent on the 20th of
            the month before your next payout is processed.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>When can I request my affiliate payout?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            As a Pro Traders Fund affiliate member, you can request your payout at any time before the 15th of each month. However payouts
            will be sent on the 15th of each month.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are the affiliate payout fees?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            Pro Traders Fund does NOT charge an affiliate payout fee. However, based on the method you choose for your affiliate payout you
            might incur a transfer fee. If you wish to make an early withdrawal Pro Traders Fund charges a 10% processing fee.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Do I need to be verified to receive affiliate payout?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            Pro Traders Fund takes your security as seriously as you do, so we’ll do everything within our power to protect both you and our
            business.
          </p>
          <p>
            <b>Below are the required documents for KYC verification:</b>
          </p>
          <ul className="pb-2 list-disc pl-4">
            <li>Valid Government-Issued ID [Drivers License, National ID, Passport]</li>
            <li>Signed Customer Agreement</li>
          </ul>
          <p>These documents are needed to have your Pro Traders Fund account verified for full access to our platform. </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What happens if a commission comes from a fraudulent signup? Will I still get paid?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            No. If a customer fails our fraud checks and is declined in your affiliate panel, Pro Traders Fund will not pay commissions.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does ProTraders Fund pay recurring commissions to affiliates?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            Yes, promote Pro Traders Fund and earn money for every purchase one of your referrals makes, not just a commission on their
            first purchase alone. But, all of them!
          </p>
          <br />
          <p>
            What are you waiting for? Join the Pro Traders Fund Affiliate Program TODAY! Invite a trader & Earn up to 25% commission
            INSTANTLY, they get a 10% discount OFF any purchase.
          </p>
          <br />
          <a href="/pricing">
            <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Become Our Affiliate Partner
            </button>
          </a>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
