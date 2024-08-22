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
  <MuiAccordionSummary
    sx={{
      backgroundColor: 'red'
    }}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem', color: 'white' }} />}
    {...props}
  />
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

export default function Faq({ faqs }) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const emailAddress = 'support@protradersfund.com';
  const subject = 'urgent support request';
  return (
    <div className="lg:w-[1000px] md:w-[724px] mx-auto px-4 font-urbanist accordian-parent">
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" s>
          <Typography>What is Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund is an innovative performance evaluation proprietary trading platform powered by AI-driven software. We
            rigorously assess and verify traders' performance based on a comprehensive set of rules and guidelines. Those who meet our
            stringent criteria and guidelines have the chance to access funding opportunities and manage a portion of our private fund as
            independent contractors.
            <br /> <br />
            Joining Pro Traders Fund means you can grow your trading career with zero risk, enjoying the potential to retain up to 90% of
            your hard-earned profits. Don't miss this opportunity to elevate your trading journey and unlock the benefits of partnering with
            us.
            <br />
            <br />
            Get funded:{' '}
            <a href="https://protradersfund.com/" className="text-mainColor">
              www.protradersfund.com
            </a>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel22'}
        onChange={handleChange('panel22')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is Pro Traders Fund’s Vision and Mission? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <b>Vision:</b> <br /> Pro Traders Fund's vision is to be the global leader in providing aspiring and experienced traders with
          innovative, accessible, and transparent opportunities to advance their trading careers. We aim to create a community of successful
          traders empowered by our performance evaluation platform and funding solutions.
          <br />
          <br />
          <b>Mission:</b> <br /> Our mission at Pro Traders Fund is to: <br />
          <br />
          <ul className="pl-5 space-y-2 list-disc ">
            <li>
              <b>Empower Traders:</b> We strive to empower traders worldwide by offering a platform that assesses their trading skills
              objectively and provides them with access to substantial capital to trade.
            </li>

            <li>
              <b>Promote Transparency:</b> We are committed to transparency in all our processes, from evaluation criteria to profit
              sharing. We want traders to have a clear understanding of their progress and potential.
            </li>

            <li>
              <b>Drive Innovation:</b> We continuously innovate our platform to stay at the forefront of the trading industry. We aim to
              provide traders with the best tools and features to enhance their trading performance.
            </li>

            <li>
              <b>Support Growth:</b> We provide educational resources and a supportive community to help traders grow their skills and
              succeed in their trading careers.
            </li>

            <li>
              <b>Expand Accessibility:</b> We make trading opportunities accessible to traders of all backgrounds, regardless of their
              financial resources or geographical location.
            </li>

            <li>
              <b>Build Trust:</b> We aim to build trust within our community and with our partners by delivering on our promises and
              maintaining the highest ethical standards.
            </li>
          </ul>{' '}
          <br />
          In summary, Pro Traders Fund's mission is to empower traders, promote transparency, drive innovation, support growth, expand
          accessibility, and build trust in the trading industry. We are dedicated to helping traders achieve their goals and advancing the
          world of trading.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel23'}
        onChange={handleChange('panel23')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is remarkable about the Pro Traders Fund brand, products, and service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund is remarkable for several key reasons:
          <br />
          <br />
          <ul className="pl-5 space-y-2 list-disc ">
            <li>
              <b>Innovative Performance Evaluation:</b> Our unique AI-driven performance evaluation platform provides traders with an
              opportunity to showcase their skills in real market conditions. Traders are rigorously assessed, ensuring that only the best
              qualify for funding.
            </li>

            <li>
              <b>Funding Opportunities:</b> We offer a path to becoming a professional trader by providing access to funding from our
              private fund or partner firms. This funding empowers traders to trade with substantial capital, making it a remarkable
              opportunity for those looking to advance their trading careers.
            </li>

            <li>
              <b>Transparency:</b> Pro Traders Fund is committed to transparency. We provide traders with clear guidelines and metrics,
              allowing them to track their progress and understand their performance better.
            </li>

            <li>
              <b>Lowest Industry Prices:</b> Our pricing for evaluation challenges is highly competitive, making it accessible to traders of
              all levels. We offer one of the lowest price points in the industry without compromising on the quality of evaluation and
              funding opportunities.
            </li>

            <li>
              <b>Community and Support:</b> We foster a supportive community of traders. Our team is readily available to assist with any
              questions or concerns, and we provide educational resources to help traders improve their skills.
            </li>

            <li>
              <b>Innovation:</b> We are continually innovating our platform to provide traders with the best experience possible. From
              regular updates to new features, we are committed to staying at the forefront of trading technology.
            </li>

            <li>
              <b>Client-Centric Approach:</b> Pro Traders Fund places the trader's success at the forefront. We are dedicated to helping
              traders achieve their goals and providing them with the tools and opportunities they need to succeed.
            </li>

            <li>
              <b>Global Reach:</b> Our services are available to traders around the world, making Pro Traders Fund a global platform for
              aspiring and experienced traders.
            </li>
          </ul>
          <br />
          In summary, Pro Traders Fund's mission is to empower traders, promote transparency, drive innovation, support growth, expand
          accessibility, and build trust in the trading industry. We are dedicated to helping traders achieve their goals and advancing the
          world of trading.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel24'}
        onChange={handleChange('panel24')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What does Pro Traders Fund AI Driven, Decentralize Performance Evaluation and Funding Platform Mean?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund being an "AI-driven, decentralized performance evaluation and funding for traders platform" means that our
          platform utilizes artificial intelligence (AI) technology to objectively assess the trading performance of individuals who aspire
          to become traders. Here's what each part of this statement entails:
          <br />
          <br />
          <ul className="pl-5 space-y-2 list-disc ">
            <li>
              AI-Driven: Our platform employs AI algorithms and machine learning techniques to evaluate and analyze trading data. This
              AI-driven approach removes human biases from the assessment process and provides objective criteria for evaluating a trader's
              skills.
            </li>
            <li>
              Decentralized: Pro Traders Fund operates in a decentralized manner, which means that it is not controlled by a single central
              authority. Instead, it relies on blockchain or distributed ledger technology to ensure transparency and security in its
              operations. This decentralization enhances trust and removes the need for intermediaries.
            </li>
            <li>
              Performance Evaluation: We assess traders' performance based on specific criteria and metrics. Traders participate in
              challenges or evaluations, during which their trading activities are monitored and evaluated against predefined standards.
            </li>
            <li>
              Funding for Traders: Once traders meet the evaluation criteria and demonstrate their trading competence, they become eligible
              for funding. This funding allows them to trade with real capital, often provided by Pro Traders Fund or its partner funds,
              while sharing a portion of the profits they generate.
            </li>
          </ul>
          <br />
          In essence, Pro Traders Fund's AI-driven, decentralized platform leverages technology to fairly evaluate traders' skills and
          provide them with funding opportunities, democratizing access to the financial markets and removing traditional barriers to entry
          in the trading industry.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Is Pro Traders Fund a Brokerage?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund is an innovative performance evaluation proprietary trading firm powered by AI-driven software that evaluates
            traders and funds traders who pass our evaluation challenge before providing them with the opportunity to trade independently.
            The company does not operate as an investment firm or broker, and does not provide brokerage services.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Who can join the Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund accepts people from all around the world who are at or above the age of consent required to use online services
            in their respective jurisdictions and are able to pass our evaluation challenge. If you are under the age for consent required
            to use online services in your jurisdiction, you may use the site and services only with permission of a parent or guardian. The
            traders we accept must have demonstrated a consistent, profitable track record of trading; there is no other qualification
            required. Every trader has the same opportunities as the next.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Why Should I Join the Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            You get to trade with our money risk-free in real life market conditions, while keeping up to 90% of the profits! Pro Traders
            Fund is one of the best prop trading firms in the world. All you have to do is prove your skills to become a Pro Funded Trader.
            Join us today, and you’ll have everything you need to become a Pro Funded Trader.
            <br />
            <br />
            Get funded:{' '}
            <a href="www.protradersfund.com" className="text-mainColor">
              www.protradersfund.com
            </a>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What sets Pro Traders Fund apart from other proprietary trading firms?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund combines cutting-edge AI and machine learning technologies to meticulously evaluate and verify traders'
            performance. Unlike typical proprietary trading firms, we're not an investment platform; instead, we specialize in performance
            evaluation.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does Pro Traders Fund's AI-driven evaluation process differ from other prop firms?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Our evaluation process stands out with its AI-powered approach. We rigorously assess traders based on predefined criteria,
            emphasizing risk management, consistency, and profitability. This sets us apart from many other prop firms that may lack such
            advanced evaluation methods.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            What are the primary benefits of partnering with Pro Traders Fund compared to traditional proprietary trading firms?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Pro Traders Fund provides traders with a unique opportunity to grow their capital without personal risk. You can trade using our
          private fund after meeting our guidelines, keeping up to 90% of your profits. This distinct offering sets us apart from
          conventional proprietary trading firms.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Is a deposit required to start trading with Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            No, we do not require traders to deposit their own capital. At Pro Traders Fund, we fund your trading account based on your
            performance during our evaluation process, making it distinct from firms that typically demand a personal deposit.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How flexible is Pro Traders Fund compared to other proprietary trading firms?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Our platform offers unparalleled flexibility. Traders can engage in news trading, employ EAs (Expert Advisors), and utilize
            trading bots—a level of flexibility not commonly found in other prop firms.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I withdraw profits from my Pro Traders Fund account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Yes, you can withdraw profits earned through your trading activities with Pro Traders Fund. We provide a flexible profit
            withdrawal process, allowing you to manage your earnings with ease.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel11'}
        onChange={handleChange('panel11')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is Pro Traders Fund's maximum allowable drawdown?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Pro Traders Fund maintains a maximum drawdown of 12%, which is notably the most flexible within the industry providing more room
            for traders to trade comfortably than what many other prop firms permit. This emphasizes our commitment to flexibility while
            still protecting our capital.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel12'}
        onChange={handleChange('panel12')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Is trading with Pro Traders Fund considered an independent contractor opportunity?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Yes, when you trade with Pro Traders Fund, you operate as an independent contractor, affording you significant autonomy over
            your trading activities—another distinction from traditional proprietary trading firms.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel13'}
        onChange={handleChange('panel13')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does Pro Traders Fund offer an affiliate program?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Absolutely! We have an affiliate program in place where you can earn commissions of up to 30% by inviting others to join Pro
            Traders Fund.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel14'}
        onChange={handleChange('panel14')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How does Pro Traders Fund handle trader inactivity compared to other firms?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We maintain a more lenient inactivity policy, requiring traders to place at least one trade every 30 days to remain active—a
          feature that offers greater flexibility compared to some other firms.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel15'}
        onChange={handleChange('panel15')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I get started with Pro Traders Fund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white ">
            Here’s what you’ll need to get started with Pro Traders Fund:
            <br />
            Step 1: Click the ‘Get Funded’ button on the landing page or ‘New Challenge’ on your client office dashboard . <br /> Step 2:
            Choose from available proprietary trading challenge packages and click ‘Buy Package’. <br /> Step 3: Prove your skills by
            completing the instant funding, 1-Step or 2-Step evaluation process to become a Pro Funded trader.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel16'}
        onChange={handleChange('panel16')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Does Pro Traders Fund require KYC documents?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white ">
            Pro Traders Fund values your security and takes it seriously. We have implemented a fast and easy KYC (Know Your Customer)
            process to ensure the safety of both our traders and our business.
            <br />
            <br />
            <b>
              To complete the KYC verification, you need to provide the following documents:
              <br />
            </b>
            + Picture of Your Valid Government-Issued ID (such as a Driver's License, National ID, or Passport) <br /> + Picture of Yourself
            Holding the Government-Issued ID Beside Your Face <br /> + Signed Customer Agreement
          </p>
          <br />
          Once you submit these documents correctly, our platform will swiftly review them. You can expect your account to be verified
          within minutes, as our KYC process takes less than 1 minute to complete. This verification will grant you full access to the Pro
          Traders Fund platform.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel17'}
        onChange={handleChange('panel17')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do I upload my KYC verification documents?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white ">
            To upload your KYC documents, you will need to: <br />
            Step 1: Navigate to the <b>KYC submission</b> section on your Pro Traders Fund client dashboard. <br />
            Step 2: Once there, simply click the <b>upload files</b> button and choose:
          </p>
          <ul className="pb-2 pl-4 text-white list-disc">
            <li>Valid Government-Issued ID [Drivers License, National ID, Passport]</li>
            <li>Picture Holding Your Government-Issued ID Beside Your Face</li>
            <li>Signed Customer Agreement</li>
          </ul>
          <p className="mb-2 text-white">
            {' '}
            Step 3: Check to ensure all information extracted from your documents are correct. <br />
            Step 4: On the Customer Agreement, Draw or upload your signature and ensure it is as close to your signature on the ID document.{' '}
            <br />
            Step 5: Once you've submitted your documents, our team will review your documents within 1 minute to a few hours and respond
            accordingly.
            <br />
            <br /> If you want to learn more about the status of your documents or have any questions, feel free to email us at{' '}
            <span className="text-[#6EFDEB] underline">
              <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}>{emailAddress}</a>
            </span>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel18'}
        onChange={handleChange('panel18')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Why is Pro Traders Fund one of the best prop trading firms you can find?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white ">
            Pro Traders Fund is one of the best proprietary trading firms you can find, because it enables you to trade with our money
            risk-free in real life market conditions, while keeping up to 90% of the profits you earn! Pro Traders Fund is one of the best
            prop trading firms in the world. All you have to do is prove your skills to become a Pro Funded Trader. Join us today, and
            you’ll have everything you need to become a Pro Funded Trader.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: 'transparent',
          borderColor: '#3b3d41',
          color: '#E5E7EB'
        }}
        expanded={expanded === 'panel19'}
        onChange={handleChange('panel19')}
        className="text-white bg-transparent"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I contact the Pro Traders Fund support team?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-white ">
            We'd love to hear from you! The best way is to get in touch directly through our live chat or by emailing us at{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>
            . You can reach out to us on Instagram too — just search for @ProTradersFund, and you'll find us there.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
