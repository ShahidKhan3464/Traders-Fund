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

export default function OrdersFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Why is there a fee for the Pro Traders Fund Evaluation Challenge?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            The evaluation fee is a trader’s commitment to treat the Pro Traders Fund account with the utmost care and responsibility. The
            fee is paid once, and it is less than 1% of the total funds in your Pro Traders Fund account. As compensation for this
            insignificant amount, not only will you get a Funded account upon passing the Evaluation Process, but we will also cover any
            potential losses that might occur during this process. You keep 90% of all profits from your funded trading account and we
            reimburse you for the evaluation fee with profit shares from your Pro Traders Funded account.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How many accounts can I have?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund does not have a limit on the number of accounts you can have. As long as you are following our rules and Terms
            and Conditions, you will be able to trade without issue.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What payment methods are available on Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>We accept Credit/Debit Card, Wire Transfer, Cryptocurrency and Paypal as payment methods on Pro Traders Fund.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How long does it take to process orders?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you've made an order on Pro Traders Fund, rest assured that it'll be processed immediately and we'll send an update to your
            email — check your spam folder first. But if you have any issues along the way (like a message not getting through your spam
            filter), then email us at{' '}
            <a href="mailto:support@protradersfund.com" className="text-mainColor">
              support@protradersfund.com
            </a>{' '}
            and our team will get back to you as soon as possible.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I purchase the Pro Traders Fund Evaluation Challenge?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Applications to participate in the Pro Traders Fund Evaluation Challenge are open. To apply, click ‘Get Funded’, sign up/login
            to your client office, select ‘New Challenge’, select your account parameters, and click 'Buy Package.' Upon completion of the
            process you will receive an email confirming your order.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does Pro Traders Fund charge any other fees? Are the fees recurrent?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund does not charge any recurrent fees or any other hidden fees. Moreover, the fee is automatically reimbursed to
            you with the first Profit Split.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>I paid for my Pro Traders Fund Challenge, when will I get the account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Once you have purchased a Pro Traders Fund Challenge Package, you will receive credentials (via email) right away. Check your
            spam folder just in case! If you need help, please email
            <a href="mailto:support@protradersfund.com" className="text-mainColor">
              support@protradersfund.com
            </a>{' '}
            and we can assist you immediately.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>I overpaid. What can I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you have overpaid for any of the services or products offered by Pro Traders Fund, reach out directly by emailing us at
            <a href="mailto:support@protradersfund.com" className="text-mainColor">
              support@protradersfund.com
            </a>{' '}
            to resolve this issue for you.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>I purchased the wrong Pro Traders Fund Evaluation challenge by accident. Can I change it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you’ve purchased the wrong Pro Traders Fund Evaluation challenge by mistake, don’t worry! Just email us at{' '}
            <a href="mailto:support@protradersfund.com" className="text-mainColor">
              support@protradersfund.com
            </a>{' '}
            and we’ll help resolve this for you!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>My payment to Pro Traders Fund has declined/failed, what should I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Oh no, your payment failed, but don't panic. You can click the 'Try Again' button on the payment page to try again. If your
            payment seems to still be stuck then please check that you have enough balance on your card to make this payment, if you do and
            your payment still doesn't work then try to contact your bank and notify them that you're paying Pro Traders Funding Limited.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What happens if I request a chargeback?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>All accounts associated with the chargeback will automatically be forfeited.</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
