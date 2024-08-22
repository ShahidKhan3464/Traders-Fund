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

export default function TradingFaq() {
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
          <Typography>
            I purchased an account, but it says "account not valid" when I enter my trading account credentials. What should I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          If you encounter this issue, please double-check that you've entered the correct trading account number and password. If problems
          persist, reach out to our dedicated support team at{' '}
          <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
            {emailAddress}
          </a>{' '}
          for assistance.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>I am seeing "authorization failed" on my trading account when I am trying to login. What should I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          If you encounter "authorization failed," please follow these steps: <br />
          <ul className="list-disc ">
            <li>
              Check your email or dashboard for the login credentials at <a href="https://protradersfund.com/">www.protradersfund.com</a> to
              ensure the login ID and Password are correct.
            </li>
            <li>
              Double-check that you are entering the information correctly; ensure there are no white spaces or additional characters.
            </li>
            <li>
              If the issue persists after following these steps, please contact our support team at support@protradersfund.com or visit our
              website to use the live chat feature.
            </li>
            <li>
              When contacting support, kindly provide your full name, email, phone number, screenshots/recordings of the issue, and a
              detailed description of the problem. This will help us resolve the issue faster and more effectively.
            </li>
          </ul>{' '}
          <br />
          We are committed to assisting you in every possible way to ensure you have the best trading experience with Pro Traders Fund.
          Visit our website at <a href="https://protradersfund.com/">www.protradersfund.com</a> for more information.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            I am seeing "account disabled" when trying to login to my trading account. What does this mean, and what should I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="space-y-2">
          If you encounter "account disabled," it means you may have breached the challenge rules by not trading within the guidelines set
          out by Pro Traders Fund. Here's what to do:
          <br />
          <ul className="list-disc ">
            <li>Review the challenge rules and guidelines provided by Pro Traders Fund.</li>
            <li>Ensure that you have adhered to the specified trading criteria.</li>
            <li>
              If you believe your account was disabled in error or if you have questions regarding the disabling of your account, please
              contact our support team at support@protradersfund.com or use the live chat feature on our website.
            </li>
            <li>
              When reaching out to support, include your full name, email, phone number, screenshots/recordings, and a comprehensive
              explanation of the issue for a quicker resolution.
            </li>
          </ul>{' '}
          <br />
          We are committed to assisting you in every possible way to ensure you have the best trading experience with Pro Traders Fund.
          Visit our website at <a href="https://protradersfund.com/">www.protradersfund.com</a> for more information.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            I want to purchase a Pro Traders Fund performance evaluation challenge but don't want to start now. Will I lose the account if I
            don't begin trading immediately?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          No, you won't lose your account. When you purchase an evaluation account, it's ready when you are. The account activates when you
          place your first trade, giving you the flexibility to start trading whenever you're comfortable.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>When does my challenge start after purchase?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Your performance evaluation begins the moment you place a trade on your account. Inactivity for 30 days or more will result in
          automatic account breach due to inactivity.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What time does the daily reset occur?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          The daily reset occurs at 5 PM Eastern Standard Time (EST), marking the start of a new trading day.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are loss limits, and how are they calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Loss limits include losses from trades taken and fees charged by liquidity providers per lot traded. It's important to manage
          these limits to ensure responsible trading.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>In which currency are accounts priced?</Typography>
        </AccordionSummary>
        <AccordionDetails>All accounts are priced in USD (United States Dollars).</AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the maximum overall loss, and what does it signify?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Maximum overall loss (max drawdown) represents the amount of losses your account can incur below the starting balance before
          breaching.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Where can I find my trading account credentials?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          You can access your trading account credentials, including login, password, and server/company/broker details, by logging into
          your dashboard and selecting "credentials."
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I reset my trading account after breaching?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          To reset your trading account after breaching, simply purchase a new challenge. This provides a fresh start and another
          opportunity to showcase your trading skills.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I reset my trading account after a profit split withdrawal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Your account is automatically reset after a withdrawal of profit. This allows you to continue trading from where you left off.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the max drawdown type used at Pro Traders Fund? Is it static or relative?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We use both balance and equity-based drawdown, depending on which comes first. Balance-based drawdown is calculated on closed
          trades, while equity-based drawdown is based on the drawdown of open positions.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are the rules regarding daily and max drawdown resets?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          The rules are as follows:
          <br />
          <ul className="list-disc ">
            <li>Daily drawdown amount is reset at 5 PM EST to mark the beginning of a new trading day.</li>
            <li>
              Max overall drawdown is reset to the highest balance after profits are withdrawn, whether partially or with full profit
              withdrawal. Your account should never drop below the initial starting balance.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How are daily and max drawdown calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          The calculation rules are: <br />
          <ul className="list-disc ">
            <li>
              <b>Daily Drawdown:</b> It accumulates based on the balance and equity captured throughout the trading day. This drawdown
              percentage fluctuates as your account balance changes.
            </li>
            <li>
              <b>Max Drawdown:</b> The lowest drawdown an account can reach before breaching is based on the initial account balance
              multiplied by the max drawdown percentage. As your account goes into profit, the drawdown is calculated based on the new
              highest balance and is reset after each profit withdrawal.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can you explain max drawdown with examples?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Certainly! Max drawdown represents the amount of losses below your starting balance that your account can go into before it
          breaches. Here are two examples:
          <br /> <br />
          <ul className="space-y-2 list-disc ">
            <li>
              <b>Example 1:</b> If your starting balance is $100,000, the max overall loss is 12% ($12,000). So, your balance can't fall
              below $88,000 ($100,000 - $12,000).
            </li>
            <li>
              <b>Example 2:</b> If your new balance after profit is $112,000, your new overall loss limit is calculated based on this new
              highest balance. You cannot lose more than 12% of the new balance, which is $13,440. Therefore, your balance cannot dip below
              $98,560. After a withdrawal, your drawdown resets to ensure flexibility in your trading journey.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Are synthetic indices available for trading?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We offer a wide range of over 2000 instruments to trade. You can log in with your trading account credentials to view the
          instruments available on our platform.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does the trade copier function on Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund allows you to copy your trades from accounts under your profile. However, copying trades from external accounts
          will result in a breach. Be cautious with this feature.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the maximum capital allocation a trader can have under their profile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          At the funded phase, a trader can have a maximum capital allocation of $900,000 USD. During the challenge phase, allocations are
          unlimited. New accounts can be added to the live allocation when space becomes available.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I open both buy and sell positions on the same instrument while trading news</Typography>
        </AccordionSummary>
        <AccordionDetails>
          While trading news is allowed, opening both buy and sell orders on the same pair within the same time interval will result in a
          breach. Exercise caution during news trading.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What leverage is available for different account types?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Leverage varies based on the account type: <br />
          <ul className="list-disc ">
            <li>1:100 for Two phase and One phase accounts.</li>
            <li>1:50 leverage for instant accounts.</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the Leverage on Forex, Indices, and Crypto on Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund offers competitive leverage, with 1:100 leverage on One and Two step challenges, and 1:50 on instant funded
          accounts. Get funded and trade with confidence at <a href="https://protradersfund.com/">www.protradersfund.com</a>.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What are the Commissions per Lot?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          At Pro Traders Fund, we keep costs transparent. Our commission per lot is $3 per side for forex pairs and indices, and 0.08% per
          side for all other instruments. Join us for low-cost trading and funding.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Which EAs Can Be Used?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund encourages innovation. All EAs (Expert Advisors) are allowed, except those that aim to manipulate the system or
          exploit unrealistic market gaps. Unleash your trading potential with our AI-driven performance evaluation platform.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I use high-frequency trading bots on Pro Traders Fund's platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes, we embrace innovation and understand the benefits of automated trading. High-frequency bots are allowed on our platform, as
          long as they operate within ethical and fair parameters. Bots that attempt to cheat, manipulate our system, or generate
          unrealistic gains are not permitted. Our priority is to create a level playing field and maintain the integrity of our platform
          for the benefit of all traders. Any violation of these terms will result in account consequences to protect both our platform and
          fellow traders.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Martingale and Hedging Allowed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We embrace diverse strategies. At Pro Traders Fund, all trading strategies are allowed. Our AI-driven system evaluates your
          trading performance, focusing on overall profitability. Visit <a href="https://protradersfund.com/">www.protradersfund.com</a> to
          unleash your trading potential.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>If Slippage Issues Occur, Will Pro Traders Fund Be Liable?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund promotes responsible trading. Slippage often happens during news events. If you exceed loss limits, you'll breach
          them. We prioritize strict risk management to ensure your trading success. Learn more at{' '}
          <a href="https://protradersfund.com/">www.protradersfund.com</a>{' '}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel28'} onChange={handleChange('panel28')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does Stop Loss Placement Work on Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ol className="space-y-2 list-decimal">
            <li>
              <b>Do I need to place a stop loss on every trade?</b> <br />
              While there's no specific requirement to place a stop loss on every trade, we strongly recommend using it as a risk management
              tool. Controlling losses is essential for successful trading.
            </li>

            <li>
              <b>Will my stop loss always be respected?</b>
              <br /> It's important to note that during high-impact news events or market rollover, stop losses might not be respected due
              to increased volatility. As a result, your trade might close at a different level than intended. Keep this in mind when
              trading in these conditions.
            </li>

            <li>
              <b>Is Pro Traders Fund liable for any issues related to stop loss execution?</b> <br /> No, Pro Traders Fund is not liable for
              any issues related to stop loss execution. While we provide a robust trading environment, market conditions and external
              factors can impact trade execution. We encourage traders to stay informed about market events and adjust their strategies
              accordingly.
            </li>
          </ol>{' '}
          <br />
          Remember, proper risk management, including setting appropriate stop losses, is a crucial aspect of responsible trading.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            I'm doing the X phase of the Pro Traders Fund evaluation challenge. I lost $X amount, and now I can't log into my MetaTrader 5
            (MT5) account. It says "authorization failed," and I see "failed" on the dashboard along with a $X balance. What should I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          If you're unable to log in due to an "authorization failed" message and see a "failed" status on your dashboard, it might be
          related to breaching one of our loss limits during the challenge. Here's what to do:
          <br />
          <ol className="pl-5 space-y-2 list-disc">
            <li>
              <b>Check for Rule Violations:</b> Review your trading activities to ensure you haven't exceeded any of the specified loss
              limits for your challenge phase. If you've gone beyond these limits, your account may be deactivated as per our guidelines.
            </li>

            <li>
              <b>Restart if Necessary: </b>If you've violated the rules, don't worry; you can purchase a new challenge and start over.
            </li>

            <li>
              <b>Contact Support:</b> If you believe your account deactivation is in error or you haven't breached any rules, please contact
              our support team. You can reach out via our live chat at www.protradersfund.com or email{' '}
              <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
                {emailAddress}
              </a>
            </li>
          </ol>{' '}
          <br />
          When contacting support, provide the following details: <br />
          <ul className="pl-5 space-y-1 list-disc ">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Trading account login ID</li>
            <li>Challenge type</li>
            <li>Account size</li>
            <li>Challenge phase price paid</li>
            <li>Screenshot of your account balance</li>
            <li>Receipt of your purchase</li>
            <li>Dashboard screenshot</li>
            <li>A detailed explanation of the issue</li>
          </ul>{' '}
          <br />
          Our support team will promptly investigate your case and work to resolve it within 24-48 hours. We are committed to ensuring a
          fair evaluation process for all our traders.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel30'} onChange={handleChange('panel30')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            I’m trying to access my MetaTrader 5 (MT5) trading account, and it keeps saying "invalid account." What does this mean, and what
            should I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          If you encounter the "invalid account" message when trying to access your MT5 trading account, consider the following steps:
          <br />
          <ul className="pl-5 space-y-1 list-disc ">
            <li>
              <b>Rule Compliance:</b> First, check if you've breached any rules or guidelines during your Pro Traders Fund challenge.
              Breaching rules might lead to the deactivation of your account. Review the challenge's specific loss limits and rules to
              ensure compliance.
            </li>
            <li>
              <b>Phase Transition:</b> If you've recently advanced from one challenge phase to another, be aware that your old phase's
              account can become deactivated. Ensure you're attempting to log in with the correct, active account.
            </li>
            <li>
              <b>Account Credentials:</b> Verify that the account credentials you're using are accurate. Double-check your login ID and
              password to make sure there are no typos or errors.
            </li>
            <li>
              <b>Contact Support:</b> If the issue persists or you believe there's an error, please don't hesitate to reach out to our
              support team. You can utilize our website's live chat feature at www.Protradersfund.com or send an email to{' '}
              <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
                {emailAddress}
              </a>
            </li>
          </ul>
          <br />
          When contacting support, provide the following details: <br />
          <ul className="pl-5 space-y-1 list-disc ">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Trading account login ID</li>
            <li>Challenge type</li>
            <li>Account size</li>
            <li>Challenge phase price paid</li>
            <li>Screenshot of your account balance</li>
            <li>Receipt of your purchase</li>
            <li>Dashboard screenshot</li>
            <li>A detailed explanation of the issue</li>
          </ul>{' '}
          <br />
          Our support team will promptly investigate your case and work to resolve it within 24-48 hours. We are committed to ensuring a
          fair evaluation process for all our traders.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel31'} onChange={handleChange('panel31')} className="text-white bg-transparent">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            I have moved or advanced to the next step or phase of the Pro Traders Fund performance evaluation challenge and was given a new
            MetaTrader 5 (MT5) account. However, I can no longer log into the first account that I have advanced from, and I can't access
            the profits I made from it. What should I do? Please explain.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          The Pro Traders Fund evaluation phases, specifically Phase 1 and Phase 2, are designed for evaluation purposes and utilize demo
          accounts to assess your trading performance. When you successfully pass each of these evaluation phases and advance to the next
          step, the old demo account is deactivated, and a new one is generated for the new phase. This process is normal and ensures that
          you continue your evaluation with a clean slate.
          <br /> <br />
          Access to the profits generated during Phase 1 and Phase 2 is not available because these phases are meant for testing and
          evaluation. The real opportunity to access profits occurs in Phase 3, which is the funded phase of the evaluation process. <br />
          <br /> In the funded phase (Phase 3), you'll be trading with real capital provided by Pro Traders Fund. Once you meet all the
          conditions, rules, and guidelines set for this phase, you can request a profit split. This means you can withdraw a portion of the
          profits generated on your live funded account. <br /> <br />
          To summarize, it's essential to understand that Phase 1 and Phase 2 are for evaluation and practice. The actual opportunity to
          access profits is in Phase 3, the funded phase. During the evaluation phases, old demo accounts are deactivated, and new ones are
          generated as you progress. If you have any questions or concerns about your specific situation, please don't hesitate to contact
          our support team for further assistance via our website's live chat at www.Protradersfund.com or by emailing{' '}
          <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
            {emailAddress}
          </a>
          . We're here to help you succeed in your trading journey.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
