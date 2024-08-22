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

export default function RegulationFaq({ faqs }) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const emailAddress = 'support@protradersfund.com';
  const subject = 'urgent support request';
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How does Pro Traders Fund ensure regulatory compliance with its trading evaluation and funding platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Ans: Pro Traders Fund is dedicated to upholding regulatory standards and ensuring the integrity of our services. Here are key
            points that highlight our commitment:
          </p>{' '}
          <br />
          <ol className="pl-5 space-y-1 list-decimal ">
            <li>
              <b>Operational Focus:</b> Our platform operates as an AI-driven performance evaluation platform designed to assess traders'
              skills. We do not provide investment advice, manage funds for others, or operate as a broker or direct liquidity provider.
            </li>
            <li>
              <b>Payment Process:</b> Payments for our services are made online through third-party payment processors. We do not accept
              payments via email, phone, social media, or in person.
            </li>
            <li>
              <b>Global Operations:</b> Our trading entities are based internationally and not directed at residents of any jurisdiction
              where the activities of Pro Traders Fund and its affiliates are restricted or prohibited by local laws or regulations. We
              offer our services globally, but we do not target residents of jurisdictions where our activities may be restricted by local
              laws or regulations.
            </li>
            <li>
              <b>Structured Compliance:</b> We have established a structure that aligns with current regulatory requirements and ensures
              ongoing compliance. This structure covers all aspects of our service, from evaluation to funding.
            </li>
            <li>
              <b>Educational Content:</b> Articles and market analyses on our website are prepared by authors in their personal capacity and
              should not be considered financial advice. We provide informational content to help traders make informed decisions.
            </li>
            <li>
              <b>Documented Policies:</b> We have a comprehensive set of policies, including Legal information, Disclaimers, Acceptable Use
              Policy, Privacy Policy, Cookie Policy, Anti Money Laundering, and KYC policies. These documents are available in English, and
              users are encouraged to review them.
            </li>
            <li>
              <b>User Agreement:</b> By signing up, users agree to our terms and conditions, acknowledging their understanding of our
              policies and practices. We reserve the right to deny services to customers who exceed our risk tolerance.
            </li>
            <li>
              <b>Risk Management:</b> We emphasize risk management and have established specific guidelines for evaluating traders'
              performance. Successful traders who meet our criteria are funded and operate as independent contractors.
            </li>
            <li>
              <b>Non-Advisory Role:</b> We do not provide trading advice, recommendations, or guidance. Our focus is on evaluating and
              supporting traders who perform well within our guidelines.
            </li>
            <li>
              <b>Liability Limitation:</b> We have a comprehensive disclaimer that outlines the extent of our liability for damages arising
              from website access, services, or content. This disclaimer safeguards both Pro Traders Fund and its affiliates.
            </li>
          </ol>
          <p>
            It's important to note that our platform is designed for traders seeking performance evaluation and funding opportunities, and
            our approach is transparent, structured, and focused on regulatory compliance. <br />
            <br />
            If you have any further inquiries or concerns about our regulatory practices, please do not hesitate to contact our support team
            at support@protradersfund.com.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
