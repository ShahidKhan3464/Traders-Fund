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

export default function GenFaq() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Is there a maximum lot size limit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            No, Pro Traders Fund does not place any limits on your lot size. However, If you want to be successful, protect your capital and
            scale your account; limit your lot size. We're a Pro Traders Fund, after all.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography> What does 'Trading according to a real market' mean?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Trading according to a real market means that all strategies are allowed, provided they don't interfere with legitimate trading
            or exploit practices that are intended to cause us any harm or misuse the Evaluation Process in any way.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the profit split?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund offers up to 90% profit split to all of its Pro Funded Traders. In fact, the more of our funds you manage and
            grow, the more you’ll be able to take home.
          </p>
          <br />
          {/* <a href="/terms#PayoutSplitStructure">
          Click here to see <span className="font-bold underline">Payout Profit Split Structure</span>
        </a> */}
          <p className="pb-2">
            The payout profit split structure for a trader is designed to progressively reward longer-term trading success with a higher
            share of profits. The splits are organized by the number of payouts:
          </p>
          <ul className="pl-5 space-y-2 list-decimal ">
            <li>
              <b className="font-bold">Initial Payout (0th):</b>{' '}
              <span className="font-light">
                The profit is split such that the trader receives 70% and the PTF (Profit Taking Facility) retains 30%. This applies to the
                very first payout.
              </span>
            </li>
            <li>
              <b>From the 1st to the 6th Payout:</b>{' '}
              <span className="font-light">
                {' '}
                The split remains the same as the initial payout, with the trader receiving 70% of the profits and the PTF taking 30%.
              </span>
            </li>
            <li>
              <b>From the 7th to the 14th Payout: </b>{' '}
              <span className="font-light">
                The trader's share increases to 75%, while the PTF's share decreases to 25%. This rewards the trader for consistency.
              </span>
            </li>
            <li>
              <b>From the 15th to the 29th Payout:</b>{' '}
              <span className="font-light">The profit share for the trader improves further to 80%, with the PTF receiving 20%.</span>
            </li>
            <li>
              <b>From the 30th to the 44th Payout:</b>{' '}
              <span className="font-light">
                The trader receives an enhanced 85% of the profits, with the PTF taking a reduced share of 15%.
              </span>
            </li>
            <li>
              <b>From the 45th to the 52nd Payout:</b>{' '}
              <span className="font-light">The distribution remains at 85% for the trader and 15% for the PTF.</span>
            </li>
            <li>
              <b>Above the 52nd Payout:</b>{' '}
              <span className="font-light">
                For long-term traders who reach beyond 52 payouts, the profit split further favors the trader at 90%, leaving only 10% for
                the PTF.
              </span>
            </li>
          </ul>
          <p>
            This structure incentivizes sustained trading performance, with incremental increases in the trader's percentage share as
            milestones are reached in the number of payouts.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How are profit splits processed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            To request payment of your profit split, please generate an invoice on the ‘Profit Split’ section of the Pro Traders client area
            dashboard. We offer a variety of payment methods for you to choose from, including Wire Transfer, Bitcoin and PayPal. Please
            note that all payments are processed in USD and that any fees associated with the payment method chosen will be deducted from
            your profit split. Traders must have their Pro Funded Trader account active for 30 days before requesting their first payout.
            After that, traders are eligible for biweekly payouts. The biweekly payouts are processed 14 days from the last payout once
            eligible.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the Pro Traders Fund scaling plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The Pro Traders Fund traders scaling plan allows you to grow your account size based on consistent performance. This plan allows
            you to increase your potential payouts over time, you must be profitable for 2 out of 3 months and have an average of 6% profit
            or more over the 3-month period. Scale increases are 25% of the original starting account balance and can be earned all the way
            up to $3M USD.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the time extension?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Time Extension is a way for traders to extend the time limit of a challenge. If you fail to reach your profit target in the
            allotted time in stage 1 of the Pro Traders Fund evaluation challenge, you may apply for a Time Extension from the “Time
            Extension” section of your dashboard. Time Extension cannot be used If you successfully reach your profit target before your
            regular deadline.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I apply for a time extension?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            All persons participating in the Pro Traders Fund evaluation challenge are given 30 days to complete stage 1 of the challenge
            and reach a 8% profit target goal. Considering that:
          </p>
          <ul className="py-2 ml-5 list-decimal">
            <li>Your account is above the initial balance,</li>
            <li>You have no drawdown violations, </li>
            <li>Your profits generated on your Pro Traders Fund evaluation challenge account is at least 5%</li>
          </ul>
          <p>
            You may apply for a FREE time extension; However, if you do NOT meet the above criteria for a FREE Time Extension, you may
            purchase a Time Extension. This is going to cost half (50%) of the original cost of the Pro Traders Fund evaluation challenge
            that you initially bought. This qualifies you for 15 extra trading days to reach the 8% profit target goal to pass stage 1 of
            the challenge. You will receive a refund for the time-extension, but not the original package. You must pass stage 2 to receive
            a refund on the time extension. We look forward to you becoming our next Pro Funded Trader
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I get a FREE time extension?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you were unable to reach the profit target in stage 1 of the Pro Traders Fund evaluation challenge, you may be eligible for a
            FREE time extension if you meet the following criteria:
          </p>
          <ul className="py-2 ml-5 list-disc">
            <li>Your account is above the initial balance,</li>
            <li>Your account does NOT have any violations. </li>
            <li>Your profits generated on your Pro Traders Fund challenge account is at least 5%</li>
          </ul>
          <p>Please click the “time extension” button on your dashboard to request a FREE time extension.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does the Drawdown work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Drawdown represents the amount of money you have lost as a percentage of your account starting balance. Therefore, as a trader,
            you want this figure to be as low as possible. Understanding drawdown ensures that you remain profitable for as long as
            possible.
          </p>
          <ul className="py-2 ml-5 space-y-3 list-disc">
            <li>
              During your Pro Trader Challenge, you will have an allowed Max Daily Loss (Drawdown) of 5% of the daily starting balance. When
              calculating Drawdown, we include all floating losses and profits. Your Max Daily Loss will reset each day at 5:00 PM Eastern
              Time. <br /> <br />→ For example, if you start with a $100,000 account your Max Daily Loss will be set at 5% ($5,000). If you
              end the day with a $4,000 profit your account balance will now be at $104,000. At 5:00 PM Eastern Time your Max Daily Loss
              will reset and will now be 5% of the daily starting balance which is $104,000. So, your Max Daily Loss for that day is $5,200.
            </li>
            <li>
              You will also have an allowed Max Overall Loss (Drawdown) of 8% of the initial account balance you purchased. <br /> <br />→
              For example, if you start with a $100,000 account your Max Overall Loss will be set at 8% ($8,000). This means your account
              should never exceed below $92,000 in equity at any given time.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is considered a trading day?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            A trading day is simply the period of a single trading session and is counted ONLY when a trade is placed, however, in order for
            your day to be valid you must stay in a trade for at least 3 minutes, otherwise, our system won't count it towards your
            progress. <br /> <br />
            Example: If you opened a trade on Monday and closed it on a Friday this will count as ONE TRADING DAY.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the legal relationship between a trader and Pro Traders Fund during account management?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            After successfully completing our evaluation process, eligible traders will be invited to join Pro Traders Fund and reap the
            benefits of a strong community of passionate partners. But before you can get started, we want to know that you’re prepared to
            take your trading career to the next level. In order to join us, we ask that you successfully complete our evaluation challenge.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How much capital will I work with?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Funded Traders will have the same account balance size as chosen for their preceding Pro Trader Challenge and Verification.
            <br />
            <br />
            To avoid any confusion, after a client becomes a Pro Funded Trader, he/she will be provided with a demo account with virtual
            funds. The Pro Trader's Funded Account is connected to our Proprietary Trading Firm’s live trading account with real capital.
            That is where we generate real cash flow. Clients are entitled to up to 90% of profits generated on the Pro Trader's Funded
            Account. This solution is administratively much easier and gives our company the freedom to actively manage risk in certain
            markets.
            <br />
            <br />
            We do not have upgrading options so you need to choose the appropriate account size right at the beginning when you are
            configuring your Pro Trader Challenge.
            <br />
            <br />
            If you are successful and stable in the long run, the account balance can be increased according to our Scaling Plan. The
            Scale-up can only be accommodated during the Profit Split processing. If your account is about to fulfill the eligibility
            criteria, please contact us a few business days ahead of your upcoming Profit Split Day so we can review your track record and
            provide a scaled-up Pro Trader's Funded Account for you for the upcoming trading period.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does account management look from the technical side?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>After a client becomes a Pro Funded Trader, they will be provided with a demo account with virtual funds.</p>
          <p>
            A Pro Trader Funded Account is a fully simulated account with real market quotes from liquidity providers. We copy the trades at
            our own discretion using aggregated orders thanks to our proprietary risk management algorithm. Clients are entitled to up to
            90% of profits generated on the Pro Trader Funded Account.
          </p>
          <p>This solution is administratively much easier and gives us more freedom to actively manage risk.</p>
          <p>
            Please beware of trading activities that are forbidden. Some trading practices can be used to generate risk-free, consistent
            profits or exploit conditions or services. You may refer to the Terms & Conditions for more information on what constitutes
            Forbidden Trading Practices.
          </p>
          <p>Learn more about the Execution Policy & Trading Conditions in the Terms & Conditions section of our website.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I withdraw my profits?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            To request payment of your profit split, please generate an invoice on the ‘Profit Split’ section of the Pro Traders client area
            dashboard. We offer a variety of payment methods for you to choose from, including Wire Transfer. Please note that all payments
            are processed in USD and that any fees associated with the payment method chosen will be deducted from your profit split.
          </p>
          <p>
            Traders must have their Pro Funded Trader account active for 30 days before requesting their first payout. After that, traders
            are eligible for biweekly payouts.
          </p>
          <p>The biweekly payouts are processed 14 days from the last payout once eligible.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Do I have to pay taxes on profits earned?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            After we sign the Pro Funded Trader contract, you'll be receiving up to 90% of your profits when using your Pro Traders Funded
            Account. For tax purposes, you'll be responsible for taxes in accordance with your local laws and regulations.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does Pro Traders Fund have an Affiliate or Referral Program?</Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          <p>
            Yes, when someone you refer purchases any Pro Trader Evaluation Challenge, you automatically receive 25% of the purchase price
            as a commission. But that's not all… When your referrals make their purchase, they also receive a 10% discount on their purchase
            instantly.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
