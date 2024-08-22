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

export default function MarketingFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Do you have any banners or marketing materials for me to promote the Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            Yes! We’ll provide you with all marketing materials, such as banners, screenshots, infographics, videos, and logos, once you
            sign up for our Pro Traders Fund affiliate program.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How does the Pro Traders Fund Affiliate Program track clicks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund affiliate programs track clicks with our reliable in-house system, so you never lose any of the commissions you
            refer.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What marketing methods are not allowed?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            <b>We do not allow the following:</b>
          </p>
          <ul className="pb-2 list-disc pl-4">
            <li>Spam or unsolicited email promotions</li>
            <li>Spamming on blogs, forums, social media, or any other commenting systems</li>
            <li>Any other type of illegal or deceptive marketing</li>
            <li>Use of materials that infringe on our intellectual property rights</li>
            <li>Cookie-stuffing</li>
            <li>Brokering or sub-affiliates</li>
            <li>Pop-up or pop-under advertising</li>
          </ul>
          <p>
            For more info, please refer to our Affiliate Terms of Service page. Pro Traders Fund affiliates found violating or attempting to
            circumvent these rules will have their commissions voided and payments withheld. Additionally, they will be banned from further
            participation in the Pro Traders Fund Affiliate Program.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
