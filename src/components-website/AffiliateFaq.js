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

export default function AffiliateFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is the Pro Traders Fund Affiliate Program?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund Affiliate Program allows you to promote the products and services of Pro Traders Fund and earn up to 25%
            commission. There are no complicated application forms or long waiting times and by signing up, we’ll give you your own unique
            referral link. Use this link to help sell our evaluation challenge to people you know in your personal network. If anyone clicks
            the link and registers, they’ll be automatically attributed as your referee. You’ll receive a commission of up to 25% of their
            purchase cost on every purchase they make.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How does the Pro Traders Fund Affiliate Program work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>You promote the Pro Traders Fund and receive a commission for every new referred customer.</p>
          <ul className="pb-2 list-disc pl-4">
            <li>
              <b>Sign up to become our partner.</b> <br />
              Submit your application by clicking the ‘Become Our Partner’ button below.
            </li>
            <li>
              <b>Create and share your invite link.</b> <br /> Create, manage and track tour performance of your invite links right from
              your Pro Traders Fund dashboard.
            </li>
            <li>
              <b>Earn up to 25% commission on each purchase they make.</b> <br /> When users create an account using your invite link,
              you’ll receive commission on every purchase they make.{' '}
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are the benefits of becoming a Pro Traders Fund Affiliate?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Recommend Pro Traders Fund. Earn up to 25% commission. We pay the HIGHEST commission in the trading industry!</p>
          <p>Here are some additional benefits: </p>
          <ul className="pb-2 list-disc pl-4">
            <li>Earn up to 25% commission for every person you recommend</li>
            <li>Withdraw your earnings INSTANTLY via bank transfer, cryptocurrency</li>
            <li>Each trader you invite will get a 10% discount towards their purchase</li>
            <li>We will provide you with marketing materials</li>
            <li>Additional Income Stream</li>
            <li>Unlimited earning potential</li>
            <li>No limit to your earnings</li>
          </ul>
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
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are the requirements to become a Pro Traders Fund affiliate partner?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            To become a Pro Traders Fund affiliate, signup on our website, copy your invite link and share it with your audience. For
            information about the Pro Traders Fund product range, visit our homepage.
          </p>
          <br />
          <a href="/pricing">
            <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Become Our Affiliate Partner
            </button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Who should sign up to become a Pro Traders Fund Affiliate Partner?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Do you have a social media account, community, group, business or organization with active followers? <br />
            Are you a YouTuber, writer in media or any other content creator? <br />
            Are you a Forex, Crypto, Stock, or Indices trader or trading community leader? <br />
            Well, if your answer to any of the above questions is “YES” then you should sign up and become a Pro Traders Fund affiliate
            partner. Simply signup, copy your affiliate invite link and share it with traders and earn up to 25% of the purchase amount,
            they get a 10% discount. You will be paid via Bank Wire Transfer, Cryptocurrency or Paypal. <br />
            If you’re interested in becoming a Pro Traders Fund Affiliate partner click the button below and sign up TODAY!
          </p>
          <br />
          <a href="/pricing">
            <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Become Our Affiliate Partner
            </button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the Pro Traders Fund Affiliate commission rate?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Individual Pro Traders Fund affiliates are able to scale and earn additional income on successful referrals. The Pro Traders
            Fund Affiliate Program is based on the total number of successful referrals made, so increasing your volume of successful
            referrals will amount to a proportional increase in your monthly income.
          </p>
          <br />
          <p>The chart below details how an affiliate is rewarded at each level and can be scaled or downsized with each referral made:</p>
          <div className="tg-wrap">
            <table className="border border-white">
              <thead className="border border-white">
                <tr>
                  <th>Total # Of Referred Traders</th>
                  <th>Under 25</th>
                  <th>25+ </th>
                  <th>50+</th>
                  <th>100+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Challenge Purchased</td>
                  <td>7.5%</td>
                  <td>10%</td>
                  <td>15%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>
                    2 or More <br /> Challenges Purchased
                  </td>
                  <td>5%</td>
                  <td>5%</td>
                  <td>5%</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>They Get Referral Discount</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <a href="/pricing">
            <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Become Our Affiliate Partner
            </button>
          </a>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the Pro Traders Fund Affiliate cookie life and how long does it last?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund affiliate cookie life refers to the length of time allotted for the person you refer to Pro Traders Fund to
            make a purchase, also referred to as the duration of a cookie. By default, the Pro Traders Fund affiliate cookie life is set to
            30 days. This means, if a person you referred to comes to our website via your affiliate invite link and makes a purchase within
            30 days, it is tracked by our affiliate system and you will be paid a commission of up to 25% of the purchase amount
            immediately.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does the Pro Traders Fund affiliate program work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            The Pro Traders Fund affiliate program is straightforward: You promote the Pro Traders Fund and receive a commission for every
            new referred customer. Promote us like you would any business opportunity or product you use daily. There is no monthly fee to
            be a Pro Trader Fund Affiliate, so you can become an Affiliate and be up and running with only one click of your mouse!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="bg-transparent text-white">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I refer traders?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p class=" text-white">
            Sign in to your Pro Traders Fund account and select Refer Traders. You can copy your unique referral link to share on your own
            channels, or share directly via email, YouTube, Instagram, Facebook, Twitter, What’s App, Telegram and LinkedIn.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
