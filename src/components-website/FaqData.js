const emailAddress = 'support@protradersfund.com';
const subject = 'urgent support request';
/* eslint-disable react/no-unescaped-entities */
const faqData = [
  {
    id: 1,
    question: 'What is Pro Traders Fund?',
    answer: (
      <div>
        <p>
          Pro Traders Fund is an innovative performance evaluation proprietary trading platform powered by AI-driven software. We rigorously
          assess and verify traders' performance based on a comprehensive set of rules and guidelines. Those who meet our stringent criteria
          and guidelines have the chance to access funding opportunities and manage a portion of our private fund as independent
          contractors.
        </p>
        <br />
        <p>
          Joining Pro Traders Fund means you can grow your trading career with zero risk, enjoying the potential to retain up to 90% of your
          hard-earned profits. Don't miss this opportunity to elevate your trading journey and unlock the benefits of partnering with us.
        </p>
        <br />
        <p>
          Get funded:{' '}
          <a href="https://protradersfund.com/" className="text-mainColor">
            www.protradersfund.com
          </a>
        </p>
      </div>
    )
  },
  {
    id: 2,
    question: 'What is Pro Traders Fund’s Vision and Mission?',
    answer: (
      <div>
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
            <b>Promote Transparency:</b> We are committed to transparency in all our processes, from evaluation criteria to profit sharing.
            We want traders to have a clear understanding of their progress and potential.
          </li>

          <li>
            <b>Drive Innovation:</b> We continuously innovate our platform to stay at the forefront of the trading industry. We aim to
            provide traders with the best tools and features to enhance their trading performance.
          </li>

          <li>
            <b>Support Growth:</b> We provide educational resources and a supportive community to help traders grow their skills and succeed
            in their trading careers.
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
      </div>
    )
  },
  {
    id: 3,
    question: ' What is remarkable about the Pro Traders Fund brand, products, and service?',
    answer: (
      <div>
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
            <b>Funding Opportunities:</b> We offer a path to becoming a professional trader by providing access to funding from our private
            fund or partner firms. This funding empowers traders to trade with substantial capital, making it a remarkable opportunity for
            those looking to advance their trading careers.
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
            <b>Innovation:</b> We are continually innovating our platform to provide traders with the best experience possible. From regular
            updates to new features, we are committed to staying at the forefront of trading technology.
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
      </div>
    )
  },
  {
    id: 4,
    question: 'What does Pro Traders Fund AI Driven, Decentralize Performance Evaluation and Funding Platform Mean?',
    answer: (
      <div>
        Pro Traders Fund being an "AI-driven, decentralized performance evaluation and funding for traders platform" means that our platform
        utilizes artificial intelligence (AI) technology to objectively assess the trading performance of individuals who aspire to become
        traders. Here's what each part of this statement entails:
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
            Performance Evaluation: We assess traders' performance based on specific criteria and metrics. Traders participate in challenges
            or evaluations, during which their trading activities are monitored and evaluated against predefined standards.
          </li>
          <li>
            Funding for Traders: Once traders meet the evaluation criteria and demonstrate their trading competence, they become eligible
            for funding. This funding allows them to trade with real capital, often provided by Pro Traders Fund or its partner funds, while
            sharing a portion of the profits they generate.
          </li>
        </ul>
        <br />
        In essence, Pro Traders Fund's AI-driven, decentralized platform leverages technology to fairly evaluate traders' skills and provide
        them with funding opportunities, democratizing access to the financial markets and removing traditional barriers to entry in the
        trading industry.
      </div>
    )
  },
  {
    id: 5,
    question: 'Is Pro Traders Fund a Brokerage?',
    answer: (
      <div>
        <p>
          Pro Traders Fund is an innovative performance evaluation proprietary trading firm powered by AI-driven software that evaluates
          traders and funds traders who pass our evaluation challenge before providing them with the opportunity to trade independently. The
          company does not operate as an investment firm or broker, and does not provide brokerage services.
        </p>
      </div>
    )
  },
  {
    id: 6,
    question: 'Who can join the Pro Traders Fund?',
    answer: (
      <div>
        Pro Traders Fund accepts people from all around the world who are at or above the age of consent required to use online services in
        their respective jurisdictions and are able to pass our evaluation challenge. If you are under the age for consent required to use
        online services in your jurisdiction, you may use the site and services only with permission of a parent or guardian. The traders we
        accept must have demonstrated a consistent, profitable track record of trading; there is no other qualification required. Every
        trader has the same opportunities as the next.
      </div>
    )
  },
  {
    id: 7,
    question: 'Why Should I Join the Pro Traders Fund?',
    answer: (
      <div>
        <p>
          You get to trade with our money risk-free in real life market conditions, while keeping up to 90% of the profits! Pro Traders Fund
          is one of the best prop trading firms in the world. All you have to do is prove your skills to become a Pro Funded Trader. Join us
          today, and you’ll have everything you need to become a Pro Funded Trader.
          <br />
          <br />
          Get funded:{' '}
          <a href="www.protradersfund.com" className="text-mainColor">
            www.protradersfund.com
          </a>
        </p>
      </div>
    )
  },
  {
    id: 8,
    question: 'What sets Pro Traders Fund apart from other proprietary trading firms?',
    answer: (
      <div>
        {' '}
        Pro Traders Fund combines cutting-edge AI and machine learning technologies to meticulously evaluate and verify traders'
        performance. Unlike typical proprietary trading firms, we're not an investment platform; instead, we specialize in performance
        evaluation.
      </div>
    )
  },
  {
    id: 9,
    question: "   How does Pro Traders Fund's AI-driven evaluation process differ from other prop firms?",
    answer: (
      <div>
        <p>
          Our evaluation process stands out with its AI-powered approach. We rigorously assess traders based on predefined criteria,
          emphasizing risk management, consistency, and profitability. This sets us apart from many other prop firms that may lack such
          advanced evaluation methods.
        </p>
      </div>
    )
  },
  {
    id: 10,
    question: ' What are the primary benefits of partnering with Pro Traders Fund compared to traditional proprietary trading firms?',
    answer: (
      <div>
        {' '}
        Pro Traders Fund provides traders with a unique opportunity to grow their capital without personal risk. You can trade using our
        private fund after meeting our guidelines, keeping up to 90% of your profits. This distinct offering sets us apart from conventional
        proprietary trading firms.
      </div>
    )
  },
  {
    id: 11,
    question: ' Is a deposit required to start trading with Pro Traders Fund?',
    answer: (
      <div>
        No, we do not require traders to deposit their own capital. At Pro Traders Fund, we fund your trading account based on your
        performance during our evaluation process, making it distinct from firms that typically demand a personal deposit.
      </div>
    )
  },
  {
    id: 12,
    question: 'How flexible is Pro Traders Fund compared to other proprietary trading firms?',
    answer: (
      <div>
        Our platform offers unparalleled flexibility. Traders can engage in news trading, employ EAs (Expert Advisors), and utilize trading
        bots—a level of flexibility not commonly found in other prop firms.
      </div>
    )
  },
  {
    id: 13,
    question: ' Can I withdraw profits from my Pro Traders Fund account?',
    answer: (
      <>
        Yes, you can withdraw profits earned through your trading activities with Pro Traders Fund. We provide a flexible profit withdrawal
        process, allowing you to manage your earnings with ease.
      </>
    )
  },
  {
    id: 14,
    question: "What is Pro Traders Fund's maximum allowable drawdown?",
    answer: (
      <>
        {' '}
        Pro Traders Fund maintains a maximum drawdown of 12%, which is notably the most flexible within the industry providing more room for
        traders to trade comfortably than what many other prop firms permit. This emphasizes our commitment to flexibility while still
        protecting our capital.
      </>
    )
  },
  {
    id: 15,
    question: '  Is trading with Pro Traders Fund considered an independent contractor opportunity?',
    answer: (
      <>
        {' '}
        Yes, when you trade with Pro Traders Fund, you operate as an independent contractor, affording you significant autonomy over your
        trading activities—another distinction from traditional proprietary trading firms.
      </>
    )
  },
  {
    id: 16,
    question: ' Does Pro Traders Fund offer an affiliate program?',
    answer: (
      <>
        {' '}
        Absolutely! We have an affiliate program in place where you can earn commissions of up to 30% by inviting others to join Pro Traders
        Fund.
      </>
    )
  },
  {
    id: 17,
    question: 'How does Pro Traders Fund handle trader inactivity compared to other firms?',
    answer: (
      <>
        {' '}
        We maintain a more lenient inactivity policy, requiring traders to place at least one trade every 30 days to remain active—a feature
        that offers greater flexibility compared to some other firms.
      </>
    )
  },
  {
    id: 18,
    question: 'How do I get started with Pro Traders Fund?',
    answer: (
      <>
        Here’s what you’ll need to get started with Pro Traders Fund:
        <br />
        Step 1: Click the ‘Get Funded’ button on the landing page or ‘New Challenge’ on your client office dashboard . <br /> Step 2: Choose
        from available proprietary trading challenge packages and click ‘Buy Package’. <br /> Step 3: Prove your skills by completing the
        instant funding, 1-Step or 2-Step evaluation process to become a Pro Funded trader.
      </>
    )
  },
  {
    id: 19,
    question: 'Does Pro Traders Fund require KYC documents?',
    answer: (
      <>
        {' '}
        <p className="text-white ">
          Pro Traders Fund values your security and takes it seriously. We have implemented a fast and easy KYC (Know Your Customer) process
          to ensure the safety of both our traders and our business.
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
        Once you submit these documents correctly, our platform will swiftly review them. You can expect your account to be verified within
        minutes, as our KYC process takes less than 1 minute to complete. This verification will grant you full access to the Pro Traders
        Fund platform.
      </>
    )
  },
  {
    id: 20,
    question: 'How do I upload my KYC verification documents?',
    answer: (
      <>
        {' '}
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
      </>
    )
  },
  {
    id: 21,
    question: ' Why is Pro Traders Fund one of the best prop trading firms you can find?',
    answer: (
      <>
        Pro Traders Fund is one of the best proprietary trading firms you can find, because it enables you to trade with our money risk-free
        in real life market conditions, while keeping up to 90% of the profits you earn! Pro Traders Fund is one of the best prop trading
        firms in the world. All you have to do is prove your skills to become a Pro Funded Trader. Join us today, and you’ll have everything
        you need to become a Pro Funded Trader.
      </>
    )
  },
  {
    id: 22,
    question: 'How can I contact the Pro Traders Fund support team?',
    answer: (
      <>
        {' '}
        <p className="text-white ">
          We'd love to hear from you! The best way is to get in touch directly through our live chat or by emailing us at{' '}
          <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
            {emailAddress}
          </a>
          . You can reach out to us on Instagram too — just search for @ProTradersFund, and you'll find us there.
        </p>
      </>
    )
  },
  {
    id: 23,
    question: ' Will Pro Traders Fund Be Affected by Regulatory Authorities?',
    answer: (
      <div>
        <p>
          Rest assured, Pro Traders Fund operates internationally and is not directed at residents of any jurisdiction where the activities
          of Pro Traders Fund and its affiliates are restricted or prohibited by local laws or regulations. We offer our services globally,
          but we do not target residents of jurisdictions where our activities may be restricted by local laws or regulations.
        </p>
        <br />
        <ul className="space-y-2 list-disc">
          <li>
            <b>Financial Advice:</b> Pro Traders Fund does not provide financial advice. We do not engage in managing clients' funds or
            offering personalized investment guidance. Our role is to provide traders with an opportunity to access private funds based on
            their trading performance.
          </li>
          <li>
            <b>Trader Independence:</b> Traders who successfully pass our performance evaluation will have the opportunity to work as
            independent contractors. They may manage private funds provided by our affiliated private fund company. However, this
            arrangement does not imply an employer-employee relationship. Traders retain full autonomy in their trading decisions and
            strategies.
          </li>
          <li>
            <b>Funding Criteria:</b> The allocation of private funds to traders is strictly based on their performance within the predefined
            metrics set during the evaluation phase. Traders must consistently meet and adhere to these criteria and guidelines to qualify
            for funding.
          </li>
          <li>
            <b>Client Protection:</b> As a provider of capital to traders, we take client protection seriously. It's important to note that
            clients do not have assets with Pro Traders Fund. Instead, we ensure that our traders have access to a fair and transparent
            trading environment through our network of third-party providers and brokers. This includes access to live market data,
            competitive spreads, and reliable execution.
          </li>
        </ul>
        <br />
        <p>
          Our commitment to client protection extends to maintaining a secure and compliant platform. We continuously assess and enhance our
          procedures to ensure that traders can confidently participate in our program while adhering to the highest industry standards.
          <br />
          If you have any further questions or need additional clarification, please feel free to reach out to our support team at{' '}
          <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
            support@protradersfund.com
          </a>
          , and we will be happy to assist you. <br /> <br /> Thank you for choosing Pro Traders Fund for your trading journey.
        </p>
      </div>
    )
  },
  {
    id: 24,
    question: 'Are there any discounts available on Pro Traders Fund challenges?',
    answer: (
      <div>
        <p>
          Pro Traders Fund is committed to providing the most competitive pricing in the industry to ensure accessibility to our challenges.
          Our challenge prices are already among the lowest you'll find. However, from time to time, we do offer discounts and promotions
          through various channels. Here's how you can stay updated on any available discounts:
        </p>
        <br />
        <ul className="space-y-2 list-disc">
          <li>
            <b>Affiliate Discount Codes:</b> Some of our affiliates may offer discount codes to their audience. If you are referred by an
            affiliate or partner, check if they have any active discount codes that you can apply during the registration process.
          </li>
          <li>
            <b>Promotional Campaigns:</b> Pro Traders Fund periodically runs promotional campaigns and offers special discounts to both new
            and existing traders. Keep an eye on our official website, social media channels, and email newsletters for announcements
            regarding these promotions.
          </li>
          <li>
            <b>Customer Support Codes:</b> Our customer support team is dedicated to assisting our traders. In certain cases, they may
            provide unique discount codes as a token of appreciation or to resolve specific issues. If you have a support code, you can use
            it during registration to avail of the discount.
          </li>
          <li>
            <b>Newsletter Subscriptions:</b> Subscribing to our newsletter is an excellent way to stay informed about upcoming promotions,
            discounts, and updates. You can sign up for our newsletter on our website.
          </li>
          <li>
            <b>Follow Us on Social Media:</b> We often share information about ongoing promotions, discounts, and offers on our social media
            platforms. Make sure to follow us on platforms like Twitter, Instagram, and Facebook to stay in the loop.
          </li>
        </ul>
        <br />
        <p>
          While our challenge prices are already highly competitive, we believe in providing opportunities for our traders to benefit from
          discounts when available. Be sure to explore these options to maximize the value of your trading experience with Pro Traders Fund.
        </p>
      </div>
    )
  },
  {
    id: 25,
    question: 'Where can I find or get a Pro Traders Fund discount code?',
    answer: (
      <div>
        Pro Traders Fund occasionally offers discount codes and promotions to make our services more accessible to traders. Here's how you
        can find or obtain a discount code: <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Visit Our Website:</b> Regularly check our official website (www.ProTradersFund.com) for any ongoing promotions, special
            offers, or discount codes. These are often prominently displayed on our homepage or the pricing page.
          </li>
          <li>
            <b>Subscribe to Our Newsletter:</b> Consider subscribing to our newsletter if available. We often send out exclusive discount
            codes and updates to our subscribers.
          </li>
          <li>
            <b>Follow Us on Social Media:</b> Connect with us on social media platforms such as Instagram, Facebook, Twitter, and LinkedIn.
            We may share discount codes and promotions on our social media channels.
          </li>
          <li>
            <b>Affiliate Referral:</b> If you're part of our affiliate program or referred by an affiliate, they might provide you with a
            referral code that grants you access to special discounts or promotions. Contact your referring affiliate for more information.
          </li>
          <li>
            <b>Contact Support:</b> If you have specific questions about discounts or promotions, you can always reach out to our support
            team through live chat on our website or by sending an email to{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>{' '}
            They can provide you with the most up-to-date information on available discounts.
          </li>
        </ul>
        <br />
        Remember that discount codes may have expiration dates or specific terms and conditions, so be sure to use them within the specified
        timeframe and in accordance with any associated guidelines.
      </div>
    )
  },
  {
    id: 26,
    question: 'Is there a maximum lot size limit?',
    answer: (
      <>
        <p>
          No, Pro Traders Fund does not place any limits on your lot size. However, If you want to be successful, protect your capital and
          scale your account; limit your lot size. We're a Pro Traders Fund, after all.
        </p>
      </>
    )
  },

  {
    id: 28,
    question: 'What does `Trading according to a real market’ mean?',
    answer: (
      <>
        {' '}
        <p>
          Trading according to a real market means that all strategies are allowed, provided they don’t interfere with legitimate trading or
          exploit practices that are intended to cause us any harm or misuse the Evaluation Process in any way.
        </p>
      </>
    )
  },
  {
    id: 29,
    question: 'What is the profit split?',
    answer: (
      <>
        <p>
          Pro Traders Fund offers up to 90% profit split to all of its Pro Funded Traders. In fact, the more of our funds you manage and
          grow, the more you’ll be able to take home.
        </p>
        <br />
        {/* <a href="/terms#PayoutSplitStructure">
          Click here to see <span className="font-bold underline">Payout Profit Split Structure</span>
        </a> */}
        <p className="pb-2">
          The payout profit split structure for a trader is designed to progressively reward longer-term trading success with a higher share
          of profits. The splits are organized by the number of payouts:
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
              For long-term traders who reach beyond 52 payouts, the profit split further favors the trader at 90%, leaving only 10% for the
              PTF.
            </span>
          </li>
        </ul>
        <p>
          This structure incentivizes sustained trading performance, with incremental increases in the trader's percentage share as
          milestones are reached in the number of payouts.
        </p>
      </>
    )
  },
  {
    id: 30,
    question: 'How are profit splits processed?',
    answer: (
      <div>
        Here's how to request a payout:
        <br /> <br />
        <p>
          To request payment of your profit split, please generate an invoice on the ‘Profit Split’ section of the Pro Traders client area
          dashboard. We offer a variety of payment methods for you to choose from, including Wire Transfer, Bitcoin and PayPal. Please note
          that all payments are processed in USD and that any fees associated with the payment method chosen will be deducted from your
          profit split. <br /> <br />
          Traders must have their Pro Funded Trader account active for 21 days before requesting their first payout. After that, traders are
          eligible for biweekly payouts. <br /> <br /> The biweekly payouts are processed 14 days from the last payout once eligible.
        </p>
      </div>
    )
  },
  {
    id: 31,
    question: 'What is the Pro Traders Fund scaling plan?',
    answer: (
      <>
        {' '}
        <p>
          The Pro Traders Fund traders scaling plan allows you to grow your account size based on consistent performance. This plan allows
          you to increase your potential payouts over time, you must be profitable for 2 out of 3 months and have an average of 6% profit or
          more over the 3-month period. Scale increases are 25% of the original starting account balance and can be earned all the way up to
          $3M USD.
        </p>
      </>
    )
  },
  {
    id: 32,
    question: 'How does the Drawdown work?',
    answer: (
      <div>
        <p>
          Drawdown represents the amount of money you have lost as a percentage of your account starting balance. Therefore, as a trader,
          you want this figure to be as low as possible. Understanding drawdown ensures that you remain profitable for as long as possible.
        </p>
        <br />
        <ul className="space-y-2 list-disc ">
          <li>
            During your Pro Trader Challenge, you will have an allowed Max Daily Loss (Drawdown) of 5% of the daily starting balance. When
            calculating Drawdown, we include all floating losses and profits. Your Max Daily Loss will reset each day at 5:00 PM Eastern
            Time.
            <br /> <br />→ For example, if you start with a $100,000 account your Max Daily Loss will be set at 5% ($5,000). If you end the
            day with a $4,000 profit your account balance will now be at $104,000. At 5:00 PM Eastern Time your Max Daily Loss will reset
            and will now be 5% of the daily starting balance which is $104,000. So, your Max Daily Loss for that day is $5,200.
          </li>
          <li>
            You will also have an allowed Max Overall Loss (Drawdown) of up to 12% of the initial account balance you purchased initially or
            the highest balance the account reaches, whichever is valid at the time. <br /> <br />→ For example, if you start with a
            $100,000 account your Max Overall Loss will be set at 12% ($12,000). This means your account should never exceed below $88,000
            in equity at any given time.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 33,
    question: 'What is considered a trading day?',
    answer: (
      <p>
        {' '}
        A trading day is simply the period of a single trading session and is counted ONLY when a trade is placed, however, in order for
        your day to be valid you must stay in a trade for at least 1 minute, otherwise, our system won't count it towards your progress.
        Example: If you opened a trade on Monday and closed it on a Friday this will count as ONE TRADING DAY.
      </p>
    )
  },
  {
    id: 34,
    question: 'What is the legal relationship between a trader and Pro Traders Fund during account management?',
    answer: (
      <p>
        {' '}
        After successfully completing our evaluation process, eligible traders will be invited to join Pro Traders Fund and reap the
        benefits of a strong community of passionate partners. But before you can get started, we want to know that you’re prepared to take
        your trading career to the next level. In order to join us, we ask that you successfully complete our evaluation challenge.
      </p>
    )
  },
  {
    id: 35,
    question: 'How much capital will I work with?',
    answer: (
      <div>
        Pro Funded Traders will have the same account balance size as chosen for their preceding Pro Trader Challenge and Verification.{' '}
        <br />
        <br />
        To avoid any confusion, after a client becomes a Pro Funded Trader, he/she will be provided with a demo account with virtual funds.
        The Pro Trader's Funded Account is connected to our Proprietary Trading Firm’s live trading account with real capital. That is where
        we generate real cash flow. Clients are entitled to up to 90% of profits generated on the Pro Trader's Funded Account. This solution
        is administratively much easier and gives our company the freedom to actively manage risk in certain markets.
        <br />
        <br />
        We do not have upgrading options so you need to choose the appropriate account size right at the beginning when you are configuring
        your Pro Trader Challenge.
        <br />
        <br />
        If you are successful and stable in the long run, the account balance can be increased according to our Scaling Plan. The Scale-up
        can only be accommodated during the Profit Split processing. If your account is about to fulfill the eligibility criteria, please
        contact us a few business days ahead of your upcoming Profit Split Day so we can review your track record and provide a scaled-up
        Pro Trader's Funded Account for you for the upcoming trading period.
      </div>
    )
  },
  {
    id: 36,
    question: 'How does account management look from the technical side?',
    answer: (
      <div>
        Account management at Pro Traders Fund involves a sophisticated technical infrastructure. Here's a simplified overview:
        <br />
        <br />
        <ul>
          <li className="space-y-2 list-disc ">
            <b>Registration:</b> When you register for a Pro Traders Fund evaluation challenge, our system records your details, payment
            information, and challenge preferences.
          </li>
          <li>
            <b>Challenge Account Creation:</b> Upon successful registration and payment, a demo evaluation account is created for you on our
            partnered trading platform. This account mimics real market conditions.
          </li>
          <li>
            <b>Trading Data:</b> As you trade in the evaluation account, our system collects data on your trades, including entry/exit
            times, lot sizes, direction (buy/sell), and more. This data helps us evaluate your performance.
          </li>
          <li>
            <b>Performance Evaluation:</b> Our AI-driven evaluation platform assesses your trading performance based on predefined criteria,
            such as maximum daily/overall loss, profit targets, and minimum trading days.
          </li>
          <li>
            <b>Pass/Fail Decision:</b> If you meet our evaluation criteria, you'll receive a report and certificate stating your
            qualification for funding. If not, you'll be informed of the areas that require improvement.
          </li>
          <li>
            <b>Funded Account Generation:</b> Once qualified, a funded trading account is generated for you. This is the account where
            you'll trade with real capital.
          </li>
          <li>
            <b>Live Trading:</b> You'll continue trading in your funded account, and our system will monitor your trading activity.
          </li>
          <li>
            <b>Profit Split Calculation:</b> Our system calculates your profit share based on the trading results in your funded account,
            considering profit targets and other factors.
          </li>
          <li>
            <b>Withdrawal Requests:</b> You can request withdrawals of your profits, which will be processed based on our withdrawal
            policies.
          </li>
          <li>
            <b>Account Monitoring:</b> Our platform continuously monitors traders to ensure compliance with trading rules and guidelines.
          </li>
        </ul>
        <br />
        Remember, our technical infrastructure is designed to make the evaluation and funding process seamless while maintaining fairness
        and transparency.
        <br />
        <br />
        If you have more specific technical questions or encounter any issues, feel free to reach out to our support team for assistance.
      </div>
    )
  },
  {
    id: 37,
    question: 'How do I withdraw my profits?',
    answer: (
      <p>
        {' '}
        To request payment of your profit split, please generate an invoice on the ‘Profit Split’ section of the Pro Traders client area
        dashboard. We offer a variety of payment methods for you to choose from, including Wire Transfer. Please note that all payments are
        processed in USD and that any fees associated with the payment method chosen will be deducted from your profit split. Traders must
        have their Pro Funded Trader account active for 30 days before requesting their first payout. After that, traders are eligible for
        biweekly payouts. The biweekly payouts are processed 14 days from the last payout once eligible.
      </p>
    )
  },
  {
    id: 38,
    question: 'Do I have to pay taxes on profits earned?',
    answer: (
      <>
        {' '}
        After we sign the Pro Funded Trader contract, you'll be receiving up to 90% of your profits when using your Pro Traders Funded
        Account. For tax purposes, you'll be responsible for taxes in accordance with your local laws and regulations.
      </>
    )
  },
  {
    id: 39,
    question: 'Does Pro Traders Fund have an Affiliate or Referral Program?',
    answer: (
      <>
        {' '}
        Yes, when someone you refer purchases any Pro Trader Evaluation Challenge, you automatically receive up to 30% of the purchase price
        as a commission. But that's not all… When your referrals make their purchase, they also receive a 10% discount on their purchase
        instantly.
      </>
    )
  },
  {
    id: 40,
    question: " I'm interested in job opportunities at Pro Traders Fund. How can I apply?",
    answer: (
      <div className="space-y-2">
        Thank you for your interest in joining the Pro Traders Fund team. We are always on the lookout for talented individuals to join our
        organization. To apply for a job opportunity with us, please follow these steps:
        <br />
        <ul className="space-y-2 list-disc ">
          <li>
            Email Your Resume: Prepare your resume, highlighting your relevant skills and experiences. Send your resume to
            careers@protradersfund.com. In the email subject line, specify the position you are applying for.
          </li>
          <li>
            Include Contact Details: In your email, include your full name, contact details (phone number and email address), and any
            additional information that you believe is relevant to your application.
          </li>{' '}
          <li>
            Specify Desired Position: Clearly mention the position you are seeking within the Pro Traders Fund. This helps our HR team match
            your application to the right job openings.
          </li>
          <li>
            Attach Relevant Documents: If there are any supporting documents, certifications, or references you'd like to include, please
            attach them to your email.
          </li>
          <li>
            Wait for Response: Once your application is received, our HR team will review it. If your qualifications align with our current
            job openings, you will be contacted for further discussions and potential interviews.
          </li>
        </ul>
        <br />
        <br />
        Please note that while we strive to respond to all job inquiries, the volume of applications we receive can sometimes delay our
        response. Rest assured, your application is valuable to us, and we will get back to you as soon as possible. We appreciate your
        interest in becoming part of the Pro Traders Fund team and look forward to potentially welcoming you aboard. Good luck with your
        application!
      </div>
    )
  },
  {
    id: 41,
    question: 'How do I become a Pro Funded Trader?',
    answer: (
      <div className="space-y-2">
        Becoming a Pro Funded Trader with Pro Traders Fund is a straightforward process that involves the following steps:
        <br />
        <ul className="space-y-2 list-disc ">
          <li>
            <b>Registration:</b> Start by registering on our platform at{' '}
            <a href="https://protradersfund.com/" className="underline text-mainColor">
              www.protradersfund.com.
            </a>
          </li>
          <li>
            <b>Performance Evaluation:</b> Once registered, you'll need to complete our performance evaluation exercise on demo/simulated
            trading accounts. This evaluation is designed to assess your trading skills based on specific criteria.
          </li>{' '}
          <li>
            <b>Evaluation Results:</b> After completing the evaluation, our AI-driven performance evaluation platform will provide you with
            a report and certificate indicating whether you've met the criteria for funding.
          </li>
          <li>
            <b>Funding Opportunity:</b> If you meet the evaluation criteria, you'll have the opportunity to receive funding from our private
            fund or partner private funds. This funding allows you to trade live with the capital provided by the fund.
          </li>
          <li>
            <b>Independent Contractor:</b> As a Pro Funded Trader, you'll operate as an independent contractor. You'll trade with the
            provided capital, and your earnings will be based on your trading performance within the established guidelines.
          </li>
          <li>
            <b>Profit Sharing:</b> You'll be eligible to share in the profits generated from your trading activities. The profit-sharing
            percentage may vary based on your performance and the terms of your agreement.
          </li>
          <br />
          Please note that Pro Traders Fund does not provide financial advice, and participation in the performance evaluation and funding
          process is subject to meeting our specific criteria. If you have further questions or require more detailed information, feel free
          to contact our support team or visit our website for additional resources.
        </ul>
      </div>
    )
  },
  {
    id: 42,
    question: "Do I need to create a broker's account on my own, or will Pro Traders Fund handle that for me?",
    answer: (
      <div>
        When you sign up with Pro Traders Fund and purchase an evaluation challenge, we streamline the process for you. Upon purchase, you
        will receive access to trading account credentials from our trusted third-party partnered trading platforms and brokers. This means
        you won't need to go through the process of creating a broker's account on your own.
        <br />
        <br />
        Here's how it works:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Purchase Challenge:</b> Once you've selected and purchased the Pro Traders Fund evaluation challenge that suits your trading
            goals, we take care of the rest.
          </li>
          <li>
            <b>Credential Access:</b> After your purchase is completed, we provide you with the necessary login credentials for the trading
            account associated with your challenge. These credentials will grant you access to the trading platform where you'll execute
            your trades.
          </li>
          <li>
            <b>Trade and Succeed:</b> With the provided credentials, you can log in to the trading platform and start trading. Your goal is
            to meet our trading objectives and performance metrics within the rules and guidelines we've set for the challenge.
          </li>
        </ul>{' '}
        <br />
        Pro Traders Fund simplifies the process by giving you access to everything you need to get started. As long as you follow our
        guidelines and adhere to the rules of the evaluation challenge, you'll have the opportunity to advance and potentially receive
        funding. If you ever have questions or need support during your journey, our team is here to assist you.
      </div>
    )
  },
  {
    id: 43,
    question: 'If I breach the rules, do I get a second chance?',
    answer: (
      <>
        If you breach the rules of your Pro Trader Challenge your account will become forfeited, but don't worry - you can purchase a new
        Pro Trader challenge and test your trading skills again.
      </>
    )
  },
  {
    id: 44,
    question: 'What capital will I trade as a Pro Funded Trader?',
    answer: (
      <>
        {' '}
        <div className="space-y-2">
          As a Pro Funded Trader with Pro Traders Fund, you will trade with the capital provided by the private fund associated with our
          platform. This capital is made available to traders who have successfully completed our AI-driven performance evaluation and have
          met our specific criteria. <br />
          <br /> It's important to note that you won't be trading with your personal capital. Instead, you'll have access to the private
          fund's capital to trade within the guidelines and risk management parameters set by our platform. This arrangement allows traders
          to benefit from the trading capital provided while sharing profits based on their performance.
          <br />
          <br /> If you have any further questions or need more details about the trading capital and how it works, please don't hesitate to
          reach out to our support team for clarification and assistance.
        </div>
      </>
    )
  },
  {
    id: 45,
    question:
      "I just advanced from one phase to another in the Pro Traders Fund evaluation challenge, but I can't see the rules. What should I do?",
    answer: (
      <div>
        When you advance to a new phase in the Pro Traders Fund performance evaluation challenge, we provide you with the necessary
        information, including the trading account credentials, rules, objectives, and guidelines. Here's what to do if you can't find this
        information: <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Check Your Email:</b> First, check your email inbox. We send this important information to your email address immediately
            upon your phase advancement. Be sure to look in your inbox, spam, junk, and promotions folders.
          </li>
          <li>
            <b>Visit Your Dashboard:</b> Additionally, log in to your Pro Traders Fund dashboard at www.Protradersfund.com. The information
            should also be accessible there.
          </li>
          <li>
            <b>Contact Support:</b> If you still can't find the details you need, don't worry. Contact our support team at{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>
            or use our live chat feature on www.Protradersfund.com. When you reach out, please provide us with your email, full name, phone
            number, the trading account number you're advancing from, payment receipts, the type of challenge, and the phase you've advanced
            to. Including screenshots, if possible, will help our support specialists assist you more effectively.
          </li>
        </ul>{' '}
        <br />
        Our team will promptly investigate and ensure you receive the necessary information to continue your Pro Traders Fund journey
        successfully.
      </div>
    )
  },
  {
    id: 46,
    question:
      'I can\'t click the "Advance to Next Phase" button, or when I try to advance to the next phase, it doesn\'t work. How can I fix this issue, and what might be causing it?',
    answer: (
      <div>
        To advance to the next phase of the Pro Traders Fund performance evaluation process, you must meet specific trading objectives and
        criteria, including minimum trading days, profit targets, and compliance with our rules and guidelines. If you believe you've met
        all these conditions, followed the rules, and still can't advance, here's what to do: <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Clear Browser Data:</b> First, try clearing your browser's history and cache. Sometimes, accumulated data can cause issues
            with website functionality. Alternatively, you can attempt to use a different web browser to see if that resolves the problem.
          </li>
          <li>
            <b>Contact Support:</b> If clearing your browser data or using a different browser doesn't work, please contact our support team
            for assistance. You can reach us at support@protradersfund.com or use the live chat feature on www.Protradersfund.com.
          </li>
        </ul>{' '}
        <br />
        When reaching out to our support team, provide the following information to help us assist you efficiently:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>Your full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Screenshot of the dashboard and trading account</li>
          <li>Purchase receipt</li>
          <li>A detailed explanation of the issue you're experiencing</li>
        </ul>{' '}
        <br />
        Our support specialists will promptly investigate the problem and work to resolve it so you can continue your Pro Traders Fund
        evaluation challenge.
      </div>
    )
  },
  {
    id: 47,
    question: ' I\'m seeing "NaN$" on my account. What does this mean, and what should I do?',
    answer: (
      <div>
        When you see "NaN$" on your account, it typically indicates that your account hasn't been loaded with data correctly, or there is no
        data to display. To address this issue, follow these steps:
        <br /> <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Clear Browser Data:</b> Start by clearing your browser's history and cache. Accumulated data can sometimes interfere with the
            correct display of account information.
          </li>
          <li>
            <b>Try Different Browser:</b> If clearing your browser data doesn't resolve the problem, attempt to access your account using a
            different web browser. This can help rule out browser-specific issues.
          </li>
          <li>
            <b>Contact Support:</b> If you continue to see "NaN$" after trying the above steps, please reach out to our support team for
            further assistance. You can contact us at{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>{' '}
            or use the live chat feature on www.Protradersfund.com.
          </li>
        </ul>{' '}
        <br />
        When contacting support, make sure to provide the following details:
        <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>Your full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Description of the issue</li>
          <li>Any relevant screenshots or error messages</li>
        </ul>{' '}
        <br />
        Our dedicated support team will investigate the problem and work to resolve it promptly, ensuring that you have access to your
        account and accurate information.
      </div>
    )
  },
  {
    id: 48,
    question:
      'Can I trade various instruments such as cryptocurrencies, metals, stocks, indices, forex, and other markets through Pro Traders Fund?',
    answer: (
      <div>
        Absolutely! Pro Traders Fund provides access to an extensive range of trading instruments, including over 2000+ symbols spanning
        different asset classes. To explore the available instruments, follow these steps:
        <br />
        <br />{' '}
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Access Your Trading Account:</b> Once you've received your trading account credentials, log in to your MetaTrader 5 (MT5)
            account.
          </li>
          <li>
            <b>Explore the Quotes Tab:</b> In your MT5 account, navigate to the "Quotes" tab. Here, you'll find a comprehensive list of
            symbols and instruments offered by our third-party trading platform and broker.
          </li>
          <li>
            <b>Symbol Specifications:</b> Click on any symbol to view its specifications, including trading conditions, spreads, leverage,
            and other relevant details.
          </li>
        </ul>{' '}
        <br />
        If you can't locate a specific instrument or symbol you're interested in trading, don't worry. Reach out to our support team via
        email at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>{' '}
        or use the live chat feature on our website, www.protradersfund.com. Provide details about the missing instrument, and our team will
        promptly investigate the issue to ensure you have access to the instruments you want to trade. Your trading experience matters to
        us, and we're here to assist you in any way we can.
      </div>
    )
  },
  {
    id: 49,
    question: "I've noticed that my Pro Traders Fund dashboard is displaying incorrect values. How can I rectify this issue?",
    answer: (
      <div>
        When you encounter incorrect values on your Pro Traders Fund dashboard, it usually indicates a data loading error. To resolve this
        issue, please follow these steps:
        <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Clear Browser History and Cache:</b> Start by clearing your browser's history and cache. Sometimes, stored data can cause
            discrepancies in the displayed values.
          </li>
          <li>
            <b>Use a Different Browser:</b> If clearing your browser's history and cache doesn't resolve the issue, try accessing your
            dashboard using a different web browser. This can often correct display problems.
          </li>
        </ul>{' '}
        <br />
        If the problem persists despite trying these steps, we recommend reaching out to our dedicated support team for assistance. You can
        contact us via email at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>{' '}
        or through the live chat feature on our website, www.protradersfund.com.
        <br />
        <br />
        When contacting support, please provide the following information to help us assist you effectively:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>Your full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>A screenshot of both the dashboard and your trading account</li>
          <li>Proof of purchase (receipt)</li>
          <li>A detailed explanation of the issue you're encountering</li>
        </ul>{' '}
        <br />
        Our experienced support team will investigate the problem promptly and work diligently to resolve it, ensuring that your Pro Traders
        Fund evaluation challenge proceeds smoothly. Your success is our priority, and we're here to ensure you have a seamless experience.
      </div>
    )
  },
  {
    id: 50,
    question: 'Can I use a trade copier with Pro Traders Fund?',
    answer: (
      <>
        Yes, you are allowed to use a trade copier when participating in Pro Traders Fund's evaluation challenges. We do not have any
        restrictions on trading styles, provided that your trading practices are ethical and comply with our guidelines and rules. It's
        important to ensure that your trading activity is in line with our objectives and criteria. As long as you are trading responsibly
        and within the parameters set by Pro Traders Fund, using a trade copier is acceptable. Our primary concern is that traders adhere to
        our guidelines and demonstrate their trading skills ethically and professionally.
      </>
    )
  },
  {
    id: 51,
    question:
      "What time does the new trading day start on Pro Traders Fund? I'm getting close to my daily drawdown limit and want to know when I can safely place trades to avoid going over the limit.",
    answer: (
      <>
        The new trading day on Pro Traders Fund begins at 5:00 PM Eastern Standard Time (EST). At this point, your daily loss limit will
        reset, and your new daily loss limit will be based on your account balance for the new day. <br />
        <br />
        It's important to manage your risk effectively and ensure that your daily losses do not accumulate to reach your maximum overall
        loss limit. Once your maximum daily or overall loss limit is reached, you will no longer be able to trade in the evaluation
        challenge. Therefore, it's crucial to trade prudently and avoid breaching your loss limits to continue trading successfully.
      </>
    )
  },
  {
    id: 52,
    question:
      'I breached my maximum daily or overall loss limit on my Pro Traders Fund evaluation or funded account. What happens now, and what should I do?',
    answer: (
      <div>
        If you breach your maximum daily or overall loss limit on your Pro Traders Fund evaluation or funded account, it's important to
        understand the consequences and the steps to take:
        <br />
        <br />
        <b>Consequences:</b> Breaching your loss limits will lead to the deactivation of your trading account for the specific phase or
        challenge you're in.
        <br />
        <br />
        <b>What to Do:</b>
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>Recognize that your current account for that phase is no longer active.</li>
          <li>
            To continue with the evaluation or funded phase, you'll need to purchase a new Pro Traders Fund performance evaluation account.
          </li>
          <li>
            When purchasing a new account, make sure to adhere strictly to the rules and guidelines to avoid breaching the limits again.
          </li>
          <li>Learn from your previous trading experiences and focus on improved risk management and strategy.</li>
        </ul>{' '}
        <br />
        Remember that breaching loss limits can impact your progress in the Pro Traders Fund evaluation or funded account. To resume your
        journey, you'll need to purchase a new account and trade within the specified guidelines.
      </div>
    )
  },
  {
    id: 53,
    question:
      "I read the terms wrong and accidentally breached the Pro Traders Fund trading account. I made a payment for another Pro Traders Fund performance evaluation account. The money has been deducted from my payment method, but I haven't received any updates or instructions on how to activate the new account I purchased. What should I do, and how can I fix this?",
    answer: (
      <div>
        It's essential to address this situation promptly to ensure you can continue with your Pro Traders Fund performance evaluation:
        <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            Contact Support: Reach out to our support team immediately. You can contact us via live chat on our website
            (www.ProTradersFund.com) or send an email to{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>
          </li>
          <li>
            Provide Details: When contacting support, make sure to include the following details: <br />
            <ul className="pl-5 space-y-1 list-disc ">
              <li>Your full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Screenshot or proof of payment</li>
              <li>Explanation of the issue, including the accidental breach and the purchase of a new account</li>
            </ul>
          </li>

          <li>
            <b>Wait for Resolution:</b> Our support team will investigate your situation and work to resolve it as quickly as possible. They
            will provide you with the necessary instructions to activate your new Pro Traders Fund performance evaluation account.
          </li>
          <li>
            <b>Learn from the Experience:</b> Take this as an opportunity to learn and ensure you fully understand the terms and guidelines
            of your new account to avoid accidental breaches in the future.
          </li>
        </ul>
        <br />
        Remember, our support team is here to assist you, and they will guide you through the process of activating your new account once
        they have reviewed your case.
      </div>
    )
  },
  {
    id: 54,
    question: 'What does it mean to verify your results on Pro Traders Fund?',
    answer: (
      <div>
        Verifying your results on Pro Traders Fund is an essential part of our performance evaluation process. Here's how it works:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Real-Time Evaluation:</b> When you participate in our evaluation challenge, your trading performance is continuously
            monitored in real-time. This means that every trade you make is analyzed and assessed by our automated AI-driven performance
            evaluation software.
          </li>
          <li>
            <b>Objective Evaluation:</b> Our software objectively evaluates your trading results based on a set of predefined rules,
            criteria, and guidelines. This evaluation is unbiased and consistent, ensuring that all traders are assessed fairly.
          </li>
          <li>
            <b>Performance Reports:</b> As you trade, you can access performance reports that provide detailed insights into your trading
            activity. These reports include information about your daily and overall profits and losses, risk management, trading behavior,
            and more.
          </li>
          <li>
            <b>Self-Improvement:</b> Verifying your results serves as a valuable tool for self-improvement. By reviewing your performance
            reports, you can gain a better understanding of your strengths and weaknesses as a trader. This information can help you make
            informed decisions to enhance your trading strategies.
          </li>
          <li>
            <b>Funding Opportunity:</b> The ultimate goal of our verification process is to provide talented traders with the opportunity to
            be funded with real capital as independent contractors. To achieve this, you must meet the specific rules, criteria, objectives,
            and guidelines set forth in our evaluation challenge.
          </li>
        </ul>
        <br />
        In summary, verifying your results on Pro Traders Fund involves real-time evaluation of your trading performance, providing you with
        valuable insights to become a better trader. Successful verification opens the door to funding opportunities and a pathway to
        managing real capital as a skilled trader.
      </div>
    )
  },
  {
    id: 55,
    question: 'Why did my trade automatically close?',
    answer: (
      <div>
        If your trade automatically closed, it might be due to breaching your loss limits as per our rules and guidelines. Here's what you
        need to understand:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Loss Limits:</b> In Pro Traders Fund, we have specific loss limits that traders must adhere to. These limits are in place to
            help manage risk and protect both the trader and the capital provided for evaluation.
          </li>
          <li>
            <b>Daily and Overall Loss Limits:</b> We have daily loss limits, which restrict the maximum amount you can lose in a single
            trading day. There are also overall loss limits, which limit the total losses you can incur over the entire evaluation period.
          </li>
          <li>
            <b>Account Deactivation:</b> If you breach any of these loss limits, your trading account will be automatically deactivated.
            This means your trades will be closed, and you will no longer be able to trade on that account.
          </li>
          <li>
            <b>Starting Over:</b> If your account is deactivated due to breaching loss limits, you'll need to purchase a new Pro Traders
            Fund performance evaluation challenge to start over. This includes creating a new trading account, meeting the challenge's
            criteria, and working towards achieving your objectives.
          </li>
        </ul>
        <br />
        It's important to manage your risk effectively and ensure that you do not exceed the specified loss limits to maintain an active
        trading account. Breaching these limits leads to automatic account deactivation, and the process must be restarted with a new
        challenge purchase.
      </div>
    )
  },
  {
    id: 56,
    question: 'How many trading days are allowed to pass my Pro Traders Fund performance evaluation challenge?',
    answer: (
      <div>
        The number of trading days allowed in the Pro Traders Fund performance evaluation challenge depends on the specific challenge phase
        you are in:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Evaluation Phase 1 and 2:</b> During these evaluation phases, traders have a minimum requirement of trading for 1 actual
            trading day. These days are counted from the moment you begin trading.
          </li>
          <li>
            <b>Funded Phase (Phase 3):</b> Once you successfully pass the evaluation phase and advance to the funded phase, the initial
            requirement is 7 actual trading days. However, after these initial 7 days, you will have unlimited trading days as long as you
            place at least one trade within each 30-day period.
          </li>
        </ul>{' '}
        <br />
        It's essential to meet these minimum trading day requirements to progress through the evaluation process successfully. Always refer
        to the specific challenge's guidelines and objectives to ensure you are meeting all criteria for advancement.
      </div>
    )
  },
  {
    id: 57,
    question: 'How long does it take to become a Pro Funded Trader?',
    answer: (
      <>
        To become a Pro Funded Trader, you must first pass our evaluation process. Then, and only then, may you join the Pro Traders Fund
        and reap the benefits of a strong community of passionate partners. So what will it take? The initial minimum trading days required
        at the funded phase is 7 days and goes to 1 trading day after the first withdrawal of profits.
      </>
    )
  },
  {
    id: 58,
    question: 'I have successfully passed the Pro Traders Fund Evaluation Challenge, now what?',
    answer: (
      <>
        Congratulations Pro Trader! <br /> You've successfully completed our Pro Trader Fund Evaluation Challenge. <br /> The next step is
        to sign the Pro Trader Contract. <br /> Once you're set up, our capital will provide you with ample opportunity to trade in live
        market conditions (as long as you follow our rules and guidelines). Keep up your great work and enjoy 90% profit share!
      </>
    )
  },
  {
    id: 59,
    question: 'Which Pro Traders Fund performance evaluation challenge is better: One Phase, Two Phases, or Instant Funded?',
    answer: (
      <div>
        The choice between the One Phase, Two Phases, or Instant Funded Pro Traders Fund performance evaluation challenges depends on your
        trading preferences, risk tolerance, and trading goals. Each challenge offers unique features and criteria. To make an informed
        decision, we recommend visiting the Pro Traders Fund Pricing page, where you can find up-to-date information on each package's
        specifications.
        <br />
        <b>Here's an overview of the current specifications for each challenge:</b>
        <br />
        <br />
        <b>One Phase PTF Challenge:</b>
        <br />
        <ul className="list-disc ">
          <li>Must pass 1 phase to get funded.</li>
          <li>Max Daily Loss: 3%</li>
          <li>Max Overall Loss: 6%</li>
          <li>Profit Target: 10%</li>
          <li>Profit Split: 80%</li>
          <li>In-phase Bonus: 5%</li>
          <li>Min Trading Days: 1 during evaluation, 7 at the funded phase initially, then 1 afterward.</li>
          <li>Max Days: Unlimited</li>
          <li>Price: Lower price point</li>
        </ul>
        <br />
        <br />
        <b>Two Phase PTF Challenge:</b>
        <br />
        <ul className="list-disc ">
          <li>Must pass 2 phases to get funded.</li>
          <li>Max Daily Loss: 5%</li>
          <li>Max Overall Loss: 12%</li>
          <li>Profit Target (Phase 1): 7%</li>
          <li>Profit Target (Phase 2): 5%</li>
          <li>Profit Split: Up to 90%</li>
          <li>In-phase Bonus: 5%</li>
          <li>Min Trading Days: 1 during evaluation, 7 at the funded phase initially, then 1 afterward.</li>
          <li>Max Days: Unlimited</li>
          <li>Price: Lower price point</li>
        </ul>
        <br />
        <br />
        <b>PTF Instant Funded Accounts:</b>
        <br />
        <ul className="list-disc ">
          <li>Capital is allocated instantly.</li>
          <li>Max Daily Loss: N/A</li>
          <li>Max Overall Loss: 10%</li>
          <li>Target: 20% to increase capital allocation</li>
          <li>Profit Split: 50%</li>
          <li>Min Trading Days: 7 at the funded phase initially, then 1 afterward.</li>
          <li>Max Days: Unlimited</li>
          <li>Price: Higher price point</li>
        </ul>
        <br />
        By reviewing these specifications on the Pricing page, you can determine which challenge aligns best with your trading style and
        goals. Keep in mind that trading involves risk, so it's essential to choose the challenge that matches your risk tolerance and
        trading strategy. If you have specific questions or need further guidance, our support team is here to assist you.
      </div>
    )
  },
  {
    id: 60,
    question: 'What is the minimum withdrawal amount from the Pro Traders Fund platform wallet?',
    answer: <>The minimum withdrawal amount is 1% of the initial account balance.</>
  },
  {
    id: 61,
    question: 'What are the stipulations for receiving an in-phase bonus or refund during the evaluation phases?',
    answer: (
      <div className="space-y-2">
        To be eligible for an in-phase bonus or refund, you must pass each phase in less than 5 days. If any phase exceeds this timeframe,
        you won't qualify for a refund or bonus. At Pro Traders Fund, we're here to support your trading journey. If you have any more
        questions or need further assistance, please don't hesitate to reach out to our team at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>
        . Join us today and start trading with confidence!
      </div>
    )
  },
  {
    id: 62,
    question: 'When can I request a profit split, and when do I see the "Advance to Next Phase" button?',
    answer: (
      <>
        The "Advance to Next Phase" button is available in Phase 1 and Phase 2. You'll find the "Request Profit Split" option in Phase 3,
        the funded phase, after meeting the minimum requirements.
      </>
    )
  },
  {
    id: 63,
    question: 'How do affiliate earnings work, and how can I withdraw them?',
    answer: (
      <>
        When you earn affiliate commissions through invitations, they are accumulated in your affiliate wallet. Every Wednesday at 12 AM
        EST, these funds are automatically paid out to your main PTF wallet, from where you can withdraw them to your preferred method,
        minus any applicable fees.
      </>
    )
  },
  {
    id: 64,
    question: 'What is the process for withdrawing trading profits from my Trading account to my PTF wallet?',
    answer: (
      <div>
        The process is as follows:
        <br />
        <ul className="list-disc ">
          <li>Ensure your account is in profits.</li>
          <li>
            Have at least (7) trading days at the funded phase. Once this minimum of 7 trading days is met the trader will have unlimited
            days as long they place at least 1 trade within each 30 day period.{' '}
          </li>
          <li>Maintain your trading account for a minimum of 14 days initially to make the first profit split withdrawal.</li>
          <li>After the initial 14 days, you can make withdrawals of your profits.</li>
          <li>Your withdrawal amount must be greater than 1% of your account size.</li>
          <li>The profit split payout button will highlight every 14 days after the initial 14-day waiting period.</li>
          <li>After your 6th payout or after 3 months, you can withdraw your profits weekly or instantly as a VIP Pro Funded Trader.</li>
          <li>
            You'll receive 80% of the generated profits minus any fees, with the percentage increasing after the 3rd month or 6th payout
            from a specific account.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 65,
    question: 'How do I reset my trading account after withdrawing profit splits to PTF wallet?',
    answer: <>Your account resets automatically after a profit withdrawal. You can continue trading immediately.</>
  },
  {
    id: 66,
    question:
      "I tried requesting a payout from my funded account, but I'm still seeing the same amount in my account, and I'm not sure why. What should I do?",
    answer: (
      <div>
        If you've requested a payout from your funded account and the balance remains unchanged, please follow these steps: <br /> <br />{' '}
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            Ensure you have met all the conditions for a payout, including minimum trading days, profit targets, and any other specific
            criteria outlined in the challenge rules.
          </li>
          <li>
            Check your account dashboard for any notifications or messages that might provide information about your payout request status.
          </li>
          <li>Make sure there are no open trades in your account, as payouts can only be processed when there are no active positions.</li>
          <li>Verify that the requested payout amount meets the minimum withdrawal requirements set in the challenge rules.</li>
          <li>
            If you've met all the conditions and still encounter issues, contact our support team via live chat on www.Protradersfund.com or
            email{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>
            . Please provide your full name, email address, phone number, trading account details, and a detailed explanation of the issue.
            Our support specialists will investigate and assist you in resolving the matter promptly.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 67,
    question:
      "I tried withdrawing funds from my Pro Traders Fund main wallet on the dashboard to my external payout method, but I'm still seeing the same amount in my account, and I'm not sure why. What should I do?",
    answer: (
      <div>
        If you've attempted to withdraw funds from your Pro Traders Fund main wallet and the balance remains unchanged, please follow these
        steps:
        <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            Ensure that the withdrawal method you've selected is valid and supported by Pro Traders Fund. Each withdrawal method may have
            specific requirements and minimum withdrawal amounts.
          </li>
          <li>
            Verify that you've met the minimum withdrawal amount for your chosen payout method, as outlined in the platform's terms and
            conditions.
          </li>
          <li>
            Double-check all the details you've provided for the withdrawal, including bank account information or payment method details,
            to ensure they are accurate.
          </li>
          <li>
            If you've met all the requirements and confirmed your withdrawal details are correct, and the issue persists, contact our
            support team for assistance. You can reach us via live chat on www.Protradersfund.com or by emailing{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>
            .
          </li>
        </ul>
        <br />
        When reaching out to our support team, please provide the following information to help us assist you efficiently:
        <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>Your full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Screenshots or details of the withdrawal request</li>
          <li>A clear explanation of the issue you're experiencing</li>
        </ul>{' '}
        <br />
        Our support specialists will investigate the matter and work to resolve it promptly, ensuring you can access your funds as intended.
      </div>
    )
  },
  {
    id: 68,
    question: 'I purchased an account, but it says "account not valid" when I enter my trading account credentials. What should I do?',
    answer: (
      <div className="space-y-2">
        If you encounter this issue, please double-check that you've entered the correct trading account number and password. If problems
        persist, reach out to our dedicated support team at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>{' '}
        for assistance.
      </div>
    )
  },
  {
    id: 69,
    question: 'I am seeing "authorization failed" on my trading account when I am trying to login. What should I do?',
    answer: (
      <div>
        If you encounter "authorization failed," please follow these steps: <br />
        <ul className="list-disc ">
          <li>
            Check your email or dashboard for the login credentials at <a href="https://protradersfund.com/">www.protradersfund.com</a> to
            ensure the login ID and Password are correct.
          </li>
          <li>Double-check that you are entering the information correctly; ensure there are no white spaces or additional characters.</li>
          <li>
            If the issue persists after following these steps, please contact our support team at support@protradersfund.com or visit our
            website to use the live chat feature.
          </li>
          <li>
            When contacting support, kindly provide your full name, email, phone number, screenshots/recordings of the issue, and a detailed
            description of the problem. This will help us resolve the issue faster and more effectively.
          </li>
        </ul>{' '}
        <br />
        We are committed to assisting you in every possible way to ensure you have the best trading experience with Pro Traders Fund. Visit
        our website at <a href="https://protradersfund.com/">www.protradersfund.com</a> for more information.
      </div>
    )
  },
  {
    id: 70,
    question: 'I am seeing "account disabled" when trying to login to my trading account. What does this mean, and what should I do?',
    answer: (
      <div className="space-y-2">
        If you encounter "account disabled," it means you may have breached the challenge rules by not trading within the guidelines set out
        by Pro Traders Fund. Here's what to do:
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
        We are committed to assisting you in every possible way to ensure you have the best trading experience with Pro Traders Fund. Visit
        our website at <a href="https://protradersfund.com/">www.protradersfund.com</a> for more information.
      </div>
    )
  },
  {
    id: 71,
    question:
      "I want to purchase a Pro Traders Fund performance evaluation challenge but don't want to start now. Will I lose the account if I don't begin trading immediately?",
    answer: (
      <>
        No, you won't lose your account. When you purchase an evaluation account, it's ready when you are. The account activates when you
        place your first trade, giving you the flexibility to start trading whenever you're comfortable.
      </>
    )
  },
  {
    id: 72,
    question: 'When does my challenge start after purchase?',
    answer: (
      <>
        Your performance evaluation begins the moment you place a trade on your account. Inactivity for 30 days or more will result in
        automatic account breach due to inactivity.
      </>
    )
  },
  {
    id: 73,
    question: 'What time does the daily reset occur?',
    answer: <>The daily reset occurs at 5 PM Eastern Standard Time (EST), marking the start of a new trading day.</>
  },
  {
    id: 74,
    question: 'What are loss limits, and how are they calculated?',
    answer: (
      <>
        Loss limits include losses from trades taken and fees charged by liquidity providers per lot traded. It's important to manage these
        limits to ensure responsible trading.
      </>
    )
  },
  {
    id: 75,
    question: 'In which currency are accounts priced?',
    answer: <>All accounts are priced in USD (United States Dollars).</>
  },
  {
    id: 76,
    question: 'What is the maximum overall loss, and what does it signify?',
    answer: (
      <>
        Maximum overall loss (max drawdown) represents the amount of losses your account can incur below the starting balance before
        breaching.
      </>
    )
  },
  {
    id: 77,
    question: 'Where can I find my trading account credentials?',
    answer: (
      <>
        You can access your trading account credentials, including login, password, and server/company/broker details, by logging into your
        dashboard and selecting "credentials."
      </>
    )
  },
  {
    id: 78,
    question: 'How can I reset my trading account after breaching?',
    answer: (
      <>
        To reset your trading account after breaching, simply purchase a new challenge. This provides a fresh start and another opportunity
        to showcase your trading skills.
      </>
    )
  },
  {
    id: 79,
    question: 'How can I reset my trading account after a profit split withdrawal?',
    answer: (
      <>Your account is automatically reset after a withdrawal of profit. This allows you to continue trading from where you left off.</>
    )
  },
  {
    id: 80,
    question: 'What is the max drawdown type used at Pro Traders Fund? Is it static or relative?',
    answer: (
      <>
        We use both balance and equity-based drawdown, depending on which comes first. Balance-based drawdown is calculated on closed
        trades, while equity-based drawdown is based on the drawdown of open positions.
      </>
    )
  },
  {
    id: 81,
    question: 'What are the rules regarding daily and max drawdown resets?',
    answer: (
      <div>
        The rules are as follows:
        <br />
        <ul className="list-disc ">
          <li>Daily drawdown amount is reset at 5 PM EST to mark the beginning of a new trading day.</li>
          <li>
            Max overall drawdown is reset to the highest balance after profits are withdrawn, whether partially or with full profit
            withdrawal. Your account should never drop below the initial starting balance.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 82,
    question: 'How are daily and max drawdown calculated?',
    answer: (
      <div>
        The calculation rules are: <br />
        <ul className="list-disc ">
          <li>
            <b>Daily Drawdown:</b> It accumulates based on the balance and equity captured throughout the trading day. This drawdown
            percentage fluctuates as your account balance changes.
          </li>
          <li>
            <b>Max Drawdown:</b> The lowest drawdown an account can reach before breaching is based on the initial account balance
            multiplied by the max drawdown percentage. As your account goes into profit, the drawdown is calculated based on the new highest
            balance and is reset after each profit withdrawal.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 83,
    question: 'Can you explain max drawdown with examples?',
    answer: (
      <div>
        Certainly! Max drawdown represents the amount of losses below your starting balance that your account can go into before it
        breaches. Here are two examples:
        <br /> <br />
        <ul className="space-y-2 list-disc ">
          <li>
            <b>Example 1:</b> If your starting balance is $100,000, the max overall loss is 12% ($12,000). So, your balance can't fall below
            $88,000 ($100,000 - $12,000).
          </li>
          <li>
            <b>Example 2:</b> If your new balance after profit is $112,000, your new overall loss limit is calculated based on this new
            highest balance. You cannot lose more than 12% of the new balance, which is $13,440. Therefore, your balance cannot dip below
            $98,560. After a withdrawal, your drawdown resets to ensure flexibility in your trading journey.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 84,
    question: 'Are synthetic indices available for trading?',
    answer: (
      <>
        We offer a wide range of over 2000 instruments to trade. You can log in with your trading account credentials to view the
        instruments available on our platform.
      </>
    )
  },
  {
    id: 85,
    question: 'How does the trade copier function on Pro Traders Fund?',
    answer: (
      <>
        Pro Traders Fund allows you to copy your trades from accounts under your profile. However, copying trades from external accounts
        will result in a breach. Be cautious with this feature.
      </>
    )
  },
  {
    id: 86,
    question: 'What is the maximum capital allocation a trader can have under their profile?',
    answer: (
      <>
        At the funded phase, a trader can have a maximum capital allocation of $900,000 USD. During the challenge phase, allocations are
        unlimited. New accounts can be added to the live allocation when space becomes available.
      </>
    )
  },
  {
    id: 87,
    question: 'Can I open both buy and sell positions on the same instrument while trading news',
    answer: (
      <>
        While trading news is allowed, opening both buy and sell orders on the same pair within the same time interval will result in a
        breach. Exercise caution during news trading.
      </>
    )
  },
  {
    id: 88,
    question: 'What leverage is available for different account types?',
    answer: (
      <>
        Leverage varies based on the account type: <br />
        <ul className="list-disc ">
          <li>1:100 for Two phase and One phase accounts.</li>
          <li>1:50 leverage for instant accounts.</li>
        </ul>
      </>
    )
  },
  {
    id: 89,
    question: 'What is the Leverage on Forex, Indices, and Crypto on Pro Traders Fund?',
    answer: (
      <>
        Pro Traders Fund offers competitive leverage, with 1:100 leverage on One and Two step challenges, and 1:50 on instant funded
        accounts. Get funded and trade with confidence at <a href="https://protradersfund.com/">www.protradersfund.com</a>.
      </>
    )
  },
  {
    id: 90,
    question: 'What are the Commissions per Lot?',
    answer: (
      <>
        At Pro Traders Fund, we keep costs transparent. Our commission per lot is $3 per side for forex pairs and indices, and 0.08% per
        side for all other instruments. Join us for low-cost trading and funding.
      </>
    )
  },
  {
    id: 91,
    question: 'Which EAs Can Be Used?',
    answer: (
      <>
        Pro Traders Fund encourages innovation. All EAs (Expert Advisors) are allowed, except those that aim to manipulate the system or
        exploit unrealistic market gaps. Unleash your trading potential with our AI-driven performance evaluation platform.
      </>
    )
  },
  {
    id: 92,
    question: "Can I use high-frequency trading bots on Pro Traders Fund's platform?",
    answer: (
      <>
        Yes, we embrace innovation and understand the benefits of automated trading. High-frequency bots are allowed on our platform, as
        long as they operate within ethical and fair parameters. Bots that attempt to cheat, manipulate our system, or generate unrealistic
        gains are not permitted. Our priority is to create a level playing field and maintain the integrity of our platform for the benefit
        of all traders. Any violation of these terms will result in account consequences to protect both our platform and fellow traders.
      </>
    )
  },
  {
    id: 93,
    question: 'Martingale and Hedging Allowed?',
    answer: (
      <div>
        We embrace diverse strategies. At Pro Traders Fund, all trading strategies are allowed. Our AI-driven system evaluates your trading
        performance, focusing on overall profitability. Visit <a href="https://protradersfund.com/">www.protradersfund.com</a> to unleash
        your trading potential.
      </div>
    )
  },
  {
    id: 94,
    question: 'If Slippage Issues Occur, Will Pro Traders Fund Be Liable?',
    answer: (
      <>
        Pro Traders Fund promotes responsible trading. Slippage often happens during news events. If you exceed loss limits, you'll breach
        them. We prioritize strict risk management to ensure your trading success. Learn more at{' '}
        <a href="https://protradersfund.com/">www.protradersfund.com</a>
      </>
    )
  },
  {
    id: 95,
    question: 'How does Stop Loss Placement Work on Pro Traders Fund?',
    answer: (
      <div>
        <ol className="space-y-2 list-decimal">
          <li>
            <b>Do I need to place a stop loss on every trade?</b> <br />
            While there's no specific requirement to place a stop loss on every trade, we strongly recommend using it as a risk management
            tool. Controlling losses is essential for successful trading.
          </li>

          <li>
            <b>Will my stop loss always be respected?</b>
            <br /> It's important to note that during high-impact news events or market rollover, stop losses might not be respected due to
            increased volatility. As a result, your trade might close at a different level than intended. Keep this in mind when trading in
            these conditions.
          </li>

          <li>
            <b>Is Pro Traders Fund liable for any issues related to stop loss execution?</b> <br /> No, Pro Traders Fund is not liable for
            any issues related to stop loss execution. While we provide a robust trading environment, market conditions and external factors
            can impact trade execution. We encourage traders to stay informed about market events and adjust their strategies accordingly.
          </li>
        </ol>{' '}
        <br />
        Remember, proper risk management, including setting appropriate stop losses, is a crucial aspect of responsible trading.
      </div>
    )
  },
  {
    id: 96,
    question:
      'I\'m doing the X phase of the Pro Traders Fund evaluation challenge. I lost $X amount, and now I can\'t log into my MetaTrader 5 (MT5) account. It says "authorization failed," and I see "failed" on the dashboard along with a $X balance. What should I do?',
    answer: (
      <div>
        If you're unable to log in due to an "authorization failed" message and see a "failed" status on your dashboard, it might be related
        to breaching one of our loss limits during the challenge. Here's what to do:
        <br />
        <ol className="pl-5 space-y-2 list-disc">
          <li>
            <b>Check for Rule Violations:</b> Review your trading activities to ensure you haven't exceeded any of the specified loss limits
            for your challenge phase. If you've gone beyond these limits, your account may be deactivated as per our guidelines.
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
        Our support team will promptly investigate your case and work to resolve it within 24-48 hours. We are committed to ensuring a fair
        evaluation process for all our traders.
      </div>
    )
  },
  {
    id: 97,
    question:
      'I’m trying to access my MetaTrader 5 (MT5) trading account, and it keeps saying "invalid account." What does this mean, and what should I do?',
    answer: (
      <div>
        If you encounter the "invalid account" message when trying to access your MT5 trading account, consider the following steps:
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Rule Compliance:</b> First, check if you've breached any rules or guidelines during your Pro Traders Fund challenge.
            Breaching rules might lead to the deactivation of your account. Review the challenge's specific loss limits and rules to ensure
            compliance.
          </li>
          <li>
            <b>Phase Transition:</b> If you've recently advanced from one challenge phase to another, be aware that your old phase's account
            can become deactivated. Ensure you're attempting to log in with the correct, active account.
          </li>
          <li>
            <b>Account Credentials:</b> Verify that the account credentials you're using are accurate. Double-check your login ID and
            password to make sure there are no typos or errors.
          </li>
          <li>
            <b>Contact Support:</b> If the issue persists or you believe there's an error, please don't hesitate to reach out to our support
            team. You can utilize our website's live chat feature at www.Protradersfund.com or send an email to{' '}
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
        Our support team will promptly investigate your case and work to resolve it within 24-48 hours. We are committed to ensuring a fair
        evaluation process for all our traders.
      </div>
    )
  },
  {
    id: 98,
    question:
      "I have moved or advanced to the next step or phase of the Pro Traders Fund performance evaluation challenge and was given a new MetaTrader 5 (MT5) account. However, I can no longer log into the first account that I have advanced from, and I can't access the profits I made from it. What should I do? Please explain.",
    answer: (
      <div>
        The Pro Traders Fund evaluation phases, specifically Phase 1 and Phase 2, are designed for evaluation purposes and utilize demo
        accounts to assess your trading performance. When you successfully pass each of these evaluation phases and advance to the next
        step, the old demo account is deactivated, and a new one is generated for the new phase. This process is normal and ensures that you
        continue your evaluation with a clean slate.
        <br /> <br />
        Access to the profits generated during Phase 1 and Phase 2 is not available because these phases are meant for testing and
        evaluation. The real opportunity to access profits occurs in Phase 3, which is the funded phase of the evaluation process. <br />
        <br /> In the funded phase (Phase 3), you'll be trading with real capital provided by Pro Traders Fund. Once you meet all the
        conditions, rules, and guidelines set for this phase, you can request a profit split. This means you can withdraw a portion of the
        profits generated on your live funded account. <br /> <br />
        To summarize, it's essential to understand that Phase 1 and Phase 2 are for evaluation and practice. The actual opportunity to
        access profits is in Phase 3, the funded phase. During the evaluation phases, old demo accounts are deactivated, and new ones are
        generated as you progress. If you have any questions or concerns about your specific situation, please don't hesitate to contact our
        support team for further assistance via our website's live chat at www.Protradersfund.com or by emailing{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>
        . We're here to help you succeed in your trading journey.
      </div>
    )
  },
  {
    id: 99,
    question:
      "I'm interested in purchasing a Pro Traders Fund performance evaluation challenge account, but I'm encountering difficulties accessing the payment form. How can I resolve this issue?",
    answer: (
      <div className="space-y-2">
        If you're facing challenges while trying to access the payment form for a Pro Traders Fund performance evaluation challenge account,
        follow these steps to troubleshoot and resolve the issue: <br /> <br />
        <ul className="space-y-2 list-disc">
          <li>
            <b>Clear Browser Cache:</b> Clear your browser's history and cache to ensure that stored data isn't causing problems when
            loading web pages. After clearing, attempt to access the payment form again.
          </li>
          <li>
            <b>Try Another Browser:</b> Experiment with a different web browser to determine if the issue is specific to your current
            browser. Using an alternative browser may help you access the payment form successfully.
          </li>
          <li>
            <b>Review Submitted Information:</b> If you're in the process of signing up or have already entered your information,
            double-check that you've accurately completed all required fields. Ensure that you've provided all necessary details during the
            registration process.
          </li>
          <li>
            <b>Confirm Login Status: </b>Make sure you're logged into your Pro Traders Fund account (if applicable). Being logged in is
            sometimes necessary for accessing payment forms.
          </li>
          <li>
            <b>Disable Browser Extensions:</b> Temporarily disable any browser extensions or add-ons that could interfere with website
            functionality. Try to access the payment form after disabling these extensions.
          </li>
          <li>
            <b>Pop-Up Blocker:</b> Check if your browser's pop-up blocker is enabled. The payment form may open in a new window, and a
            pop-up blocker might prevent it from appearing.
          </li>
          <li>
            <b>Check Network Connection:</b> Ensure a stable and consistent internet connection. An unreliable connection can hinder the
            loading of the payment form.
          </li>
          <li>
            <b>Verify Payment Method:</b> Confirm that the payment method you intend to use is supported on the Pro Traders Fund website.
          </li>
        </ul>
        <br />
        If, after following these troubleshooting steps, you still encounter issues with the payment form, please reach out to our dedicated
        support team for further assistance. You can contact us via email at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="underline text-mainColor">
          {emailAddress}
        </a>{' '}
        or utilize the live chat feature on our website,{' '}
        <a href="https://protradersfund.com/" className="underline">
          www.protradersfund.com
        </a>{' '}
        Our team is ready to assist you in resolving the problem and facilitating your purchase of a Pro Traders Fund performance evaluation
        challenge account.
      </div>
    )
  },
  {
    id: 100,
    question:
      'I\'ve been attempting to purchase a new challenge on Pro Traders Fund, but I encounter an issue where the "Buy New Challenge" option is clickable but doesn\'t proceed further. Can someone please assist me?',
    answer: (
      <div>
        If you're facing difficulties when trying to purchase a new Pro Traders Fund challenge, follow these steps to troubleshoot and
        resolve the issue: <br /> <br />{' '}
        <ul className="space-y-2 list-disc">
          <li>
            <b>Clear Browser Cache:</b> Clear your browser's history and cache to ensure that stored data isn't causing problems when
            loading web pages. After clearing, attempt to access the payment form again.
          </li>
          <li>
            <b>Try Another Browser:</b> Experiment with a different web browser to determine if the issue is specific to your current
            browser. Using an alternative browser may help you access the payment form successfully.
          </li>
          <li>
            <b>Review Submitted Information:</b> If you're in the process of signing up or have already entered your information,
            double-check that you've accurately completed all required fields. Ensure that you've provided all necessary details during the
            registration process.
          </li>
          <li>
            <b>Confirm Login Status: </b>Make sure you're logged into your Pro Traders Fund account (if applicable). Being logged in is
            sometimes necessary for accessing payment forms.
          </li>
          <li>
            <b>Disable Browser Extensions:</b> Temporarily disable any browser extensions or add-ons that could interfere with website
            functionality. Try to access the payment form after disabling these extensions.
          </li>
          <li>
            <b>Pop-Up Blocker:</b> Check if your browser's pop-up blocker is enabled. The payment form may open in a new window, and a
            pop-up blocker might prevent it from appearing.
          </li>
          <li>
            <b>Check Network Connection:</b> Ensure a stable and consistent internet connection. An unreliable connection can hinder the
            loading of the payment form.
          </li>
          <li>
            <b>Verify Payment Method:</b> Confirm that the payment method you intend to use is supported on the Pro Traders Fund website.
          </li>
        </ul>{' '}
        <br /> If, after following these troubleshooting steps, you still encounter issues with the payment form, please reach out to our
        dedicated support team for further assistance. You can contact us via email at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="underline text-mainColor">
          {emailAddress}
        </a>{' '}
        or utilize the live chat feature on our website,{' '}
        <a href="https://protradersfund.com/" className="underline">
          www.protradersfund.com
        </a>{' '}
        Our team is ready to assist you in resolving the problem and facilitating your purchase of a Pro Traders Fund performance evaluation
        challenge account.
      </div>
    )
  },
  {
    id: 101,
    question: 'Why is there a fee for the Pro Traders Fund Evaluation Challenge?',
    answer: (
      <>
        The evaluation fee is a trader’s commitment to treat the Pro Traders Fund account with the utmost care and responsibility. The fee
        is paid once, and it is less than 1% of the total funds in your Pro Traders Fund account. As compensation for this insignificant
        amount, not only will you get a Funded account upon passing the Evaluation Process, but we will also cover any potential losses that
        might occur during this process. You keep 90% of all profits from your funded trading account and we reimburse you for the
        evaluation fee with profit shares from your Pro Traders Funded account.
      </>
    )
  },
  {
    id: 102,
    question: 'How many accounts can I have?',
    answer: (
      <>
        Pro Traders Fund does not have a limit on the number of accounts you can have. As long as you are following our rules and Terms and
        Conditions, you will be able to trade without issue.
      </>
    )
  },
  {
    id: 103,
    question: 'What Payment Methods Are Accepted for Funding on Pro Traders Fund?',
    answer: (
      <div>
        At Pro Traders Fund, we understand the importance of flexibility and convenience when it comes to the payment of your performance
        evaluation account in the prop firm trading industry. We offer a wide range of payment methods, including cryptocurrency, to cater
        to your preferences and needs. Here are the payment methods we gladly accept: <br /> <br />
        <ul className="space-y-2 list-disc ">
          <li>
            <b>Visa Card:</b> The globally recognized Visa card provides a secure and efficient way to make payments for your performance
            evaluation account, ensuring you have the capital you need to get started.
          </li>
          <li>
            <b>Mastercard:</b> As a trusted payment provider, Mastercard allows you to easily pay for your performance evaluation account,
            so you can embark on your trading adventure.
          </li>
          <li>
            <b>Discover Card:</b> Discover cards offer a reliable option for making payments for your performance evaluation account, giving
            you access to live capital once you've met our performance evaluation guidelines.
          </li>
          <li>
            <b>Amex Card (American Express):</b> Enjoy the convenience of using your American Express card to make payments for your
            performance evaluation account securely and swiftly.
          </li>
          <li>
            <b>Apple Pay:</b> For Apple enthusiasts, Apple Pay offers a seamless and convenient way to initiate payments and start your
            journey toward live capital trading.
          </li>
          <li>
            <b>Google Pay:</b> Google Pay users can make quick and hassle-free payments, ensuring you have the resources you need to pursue
            your trading goals.
          </li>
          <li>
            <b>Cash App Pay:</b> Cash App Pay is a straightforward and efficient method to make payments for your performance evaluation
            account, providing you with the financial support necessary for success.
          </li>
          <li>
            <b>ACH Transfer:</b> Automated Clearing House (ACH) transfers are a trusted way to move money electronically, simplifying the
            payment process for traders.
          </li>
          <li>
            <b>PayPal:</b> PayPal's secure payment platform is another option for making payments for your performance evaluation account,
            offering ease of use and peace of mind.
          </li>
          <li>
            <b>Cryptocurrency: </b>Pro Traders Fund welcomes cryptocurrency enthusiasts. You can use popular cryptocurrencies like Bitcoin,
            Ethereum, and others to make payments for your performance evaluation account securely and privately.
          </li>
        </ul>{' '}
        <br /> Our goal at Pro Traders Fund is to empower traders with the means to succeed in the prop firm trading industry. We invite you
        to sign up today at www.protradersfund.com and explore the possibilities of getting your performance evaluation account and start
        your journey toward live capital trading after meeting our performance evaluation guidelines. Join us and take the next step toward
        achieving your trading ambitions.
        <br /> <br />
        <i>
          Disclaimer: Please note that all payments are for evaluation services, and we do not provide investment advice or manage funds for
          others.
        </i>
      </div>
    )
  },
  {
    id: 104,
    question: 'How long does it take to process orders?',
    answer: (
      <div>
        If you've made an order on Pro Traders Fund, rest assured that it'll be processed immediately and we'll send an update to your email
        — check your spam folder first. But if you have any issues along the way (like a message not getting through your spam filter), then
        email us at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>{' '}
        and our team will get back to you as soon as possible.
      </div>
    )
  },
  {
    id: 105,
    question: 'How do I purchase the Pro Traders Fund Evaluation Challenge?',
    answer: (
      <>
        Applications to participate in the Pro Traders Fund Evaluation Challenge are open. To apply, click ‘Get Funded’, sign up/login to
        your client office, select ‘New Challenge’, select your account parameters, and click 'Pay' Upon completion of the process you will
        receive an email confirming your order.
      </>
    )
  },
  {
    id: 106,
    question: 'Does Pro Traders Fund charge any other fees? Are the fees recurrent?',
    answer: (
      <>
        Pro Traders Fund does not charge any recurrent fees or any other hidden fees. Moreover, the fee is automatically reimbursed to you
        with the first Profit Split.
      </>
    )
  },
  {
    id: 107,
    question: 'I paid for my Pro Traders Fund Challenge, when will I get the account?',
    answer: (
      <div>
        Once you have purchased a Pro Traders Fund Challenge Package, you will receive credentials (via email) right away. Check your spam
        folder just in case! If you need help, please email{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>{' '}
        and we can assist you immediately.
      </div>
    )
  },
  {
    id: 108,
    question: 'I overpaid. What can I do?',
    answer: (
      <>
        {' '}
        If you have overpaid for any of the services or products offered by Pro Traders Fund, reach out directly by emailing us at{' '}
        <a href="mailto:support@protradersfund.com" className="text-mainColor">
          support@protradersfund.com
        </a>{' '}
        to resolve this issue for you.
      </>
    )
  },
  {
    id: 109,
    question: 'I purchased the wrong Pro Traders Fund Evaluation challenge by accident. Can I change it?',
    answer: (
      <>
        If you’ve purchased the wrong Pro Traders Fund Evaluation challenge by mistake, don’t worry! Just email us at{' '}
        <a href="mailto:support@protradersfund.com" className="text-mainColor">
          support@protradersfund.com
        </a>{' '}
        and we’ll help resolve this for you!
      </>
    )
  },
  {
    id: 110,
    question: 'My payment to Pro Traders Fund has declined/failed, what should I do?',
    answer: (
      <>
        Oh no, your payment failed, but don't panic. You can click the 'Try Again' button on the payment page to try again. If your payment
        seems to still be stuck then please check that you have enough balance on your card to make this payment, if you do and your payment
        still doesn't work then try to contact your bank and notify them that you're paying Pro Traders Funding Limited.
      </>
    )
  },
  {
    id: 111,
    question: 'What happens if I request a chargeback?',
    answer: <>All accounts associated with the chargeback will automatically be forfeited.</>
  },
  {
    id: 112,
    question:
      "I'm encountering an error when attempting to complete a transaction to purchase a Pro Traders Fund performance evaluation challenge account. The error message states that there are insufficient funds in my payment method, but I'm certain that I have enough funds. What should I do to resolve this issue?",
    answer: (
      <div>
        We're here to assist you with this concern. Please keep in mind that all our transactions are processed in USD (U.S. Dollars). To
        troubleshoot this issue:
        <br />
        <br />
        <ul className="pl-5 space-y-1 list-disc ">
          <li>
            <b>Currency Check:</b> Verify that your payment method holds sufficient funds in USD. If your payment method uses a different
            currency, ensure that you have an equivalent amount in USD. Currency conversion rates and fees may apply.
          </li>
          <li>
            <b>Payment Method Blocks:</b> Sometimes, financial institutions or payment account providers impose temporary blocks on
            transactions for security reasons. Check if there are any such blocks on your payment method. If you suspect this might be the
            case, it's advisable to contact your bank or payment account provider to have them remove any blocks related to your
            transaction.
          </li>
        </ul>{' '}
        <br />
        If, after performing these checks, you still encounter issues or require further assistance, we recommend reaching out to our
        support team. You can connect with our support experts via our website's live chat at www.Protradersfund.com or by sending an email
        to{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>
        . When contacting support, please provide all relevant personal and payment details so that we can assist you promptly and
        effectively. Your success in the Pro Traders Fund evaluation challenge is important to us, and we're here to help you get started on
        your trading journey.
      </div>
    )
  },
  {
    id: 113,
    question: 'I\'m trying to make a purchase, but it keeps saying "invalid email." What should I do?',
    answer: (
      <div>
        If you encounter an "invalid email" error while making a purchase, please double-check the email address you have entered. Ensure
        there are no typos or extra spaces. If you are confident that the email address is correct, and you continue to experience this
        issue, please reach out to our support team for assistance.
        <br /> <br />
        You can contact us through our live chat on our website at www.Protradersfund.com or via email at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
          {emailAddress}
        </a>
        . Be sure to include your full name, phone number, and a detailed description of the issue you are facing. Our support team will
        promptly investigate and help resolve the problem so you can complete your purchase.
      </div>
    )
  },
  {
    id: 114,
    question: 'Is there a discount available if I am repurchasing a Pro Traders Fund performance evaluation challenge?',
    answer: (
      <>
        Pro Traders Fund offers competitive pricing for its evaluation challenges. While we don't typically provide discounts for
        repurchasing challenges, we occasionally offer promotions, affiliate discount codes, or special offers. These promotions can vary
        over time. <br /> <br />
        To stay updated on any available discounts or promotions, please visit our website at www.Protradersfund.com and check our pricing
        page. Additionally, consider joining our affiliate program to earn rewards that can reduce the cost of your challenges.
      </>
    )
  },
  {
    id: 115,
    question: 'What is the Pro Traders Fund Affiliate Program?',
    answer: (
      <>
        The Pro Traders Fund Affiliate Program allows you to promote the products and services of Pro Traders Fund and earn up to 30%
        commission. There are no complicated application forms or long waiting times and by signing up, we’ll give you your own unique
        referral link. Use this link to help sell our evaluation challenge to people you know in your personal network. If anyone clicks the
        link and registers, they’ll be automatically attributed as your referee. You’ll receive a commission of up to 30% of their purchase
        cost on every purchase they make.
      </>
    )
  },
  {
    id: 116,
    question: 'How does the Pro Traders Fund Affiliate Program work?',
    answer: (
      <div>
        You promote the Pro Traders Fund and receive a commission for every new referred customer.
        <br />
        <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Sign up to become our partner</b> <br />
            Submit your application by clicking the ‘Become Our Partner’ button below.
          </li>
          <li>
            <b>Create and share your invite link</b> <br />
            Create, manage and track tour performance of your invite links right from your Pro Traders Fund dashboard.
          </li>
          <li>
            <b>Earn up to 30% commission on each purchase they make.</b> <br />
            When users create an account using your invite link, you’ll receive commission on every purchase they make.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 117,
    question: 'How can I withdraw my affiliate commission from Pro Traders Fund?',
    answer: (
      <>
        When you earn affiliate commissions through invitations, they are accumulated in your affiliate wallet. Every Wednesday at 12 AM
        EST, these funds are automatically paid out to your main PTF wallet, from where you can withdraw them to your preferred method,
        minus any applicable fees.
      </>
    )
  },
  {
    id: 118,
    question: 'What are the benefits of becoming a Pro Traders Fund Affiliate?',
    answer: (
      <div>
        <p>Recommend Pro Traders Fund. Earn up to 30% commission. We pay the HIGHEST commission in the trading industry!</p>
        <p>Here are some additional benefits: </p>
        <ul className="pb-2 pl-4 space-y-2 list-disc">
          <li>Earn up to 30% commission for every person you recommend</li>
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
      </div>
    )
  },
  {
    id: 119,
    question: 'What are the requirements to become a Pro Traders Fund affiliate partner?',
    answer: (
      <>
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
      </>
    )
  },
  {
    id: 120,
    question: 'Who should sign up to become a Pro Traders Fund Affiliate Partner?',
    answer: (
      <>
        Do you have a social media account, community, group, business or organization with active followers? <br />
        Are you a YouTuber, writer in media or any other content creator? <br />
        Are you a Forex, Crypto, Stock, or Indices trader or trading community leader? <br />
        Well, if your answer to any of the above questions is “YES” then you should sign up and become a Pro Traders Fund affiliate partner.
        Simply signup, copy your affiliate invite link and share it with traders and earn up to 25% of the purchase amount, they get a 10%
        discount. You will be paid via Bank Wire Transfer, Cryptocurrency or Paypal. <br />
        If you’re interested in becoming a Pro Traders Fund Affiliate partner click the button below and sign up TODAY!
      </>
    )
  },
  {
    id: 121,
    question: 'What is the Pro Traders Fund Affiliate commission rate?',
    answer: (
      <div>
        <p>
          Individual Pro Traders Fund affiliates are able to scale and earn additional income on successful referrals. The Pro Traders Fund
          Affiliate Program is based on the total number of successful referrals made, so increasing your volume of successful referrals
          will amount to a proportional increase in your monthly income.
        </p>
        <br />
        <p>The chart below details how an affiliate is rewarded at each level and can be scaled or downsized with each referral made:</p>
        <div className="tg-wrap">
          <table className="border border-collapse border-white">
            <thead>
              <tr>
                <th className="border border-white">Total # Of Referred Traders</th>
                <th className="border border-white">1 or MORE</th>
                <th className="border border-white">VIP Affiliate Partner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white">1st Challenge Purchased</td>
                <td className="text-center border border-white">10%</td>
                <td className="text-center border border-white">20%+</td>
              </tr>
              <tr>
                <td className="border border-white">
                  Each Additional <br /> Challenges Purchased
                </td>
                <td className="text-center border border-white">5%</td>
                <td className="text-center border border-white">5%</td>
              </tr>
              <tr>
                <td className="border border-white">They Get Referral Discount</td>
                <td className="text-center border border-white">10%</td>
                <td className="text-center border border-white">10%</td>
              </tr>
            </tbody>
          </table>
          <p className="pt-2 text-sm">
            *Total referred traders: the total referred traders is the total number of traders who use your discount code to purchase our
            products and services. Automatic affiliate payout weekly (7 days, every wednesday){' '}
          </p>
        </div>
        <br />
        <a href="/pricing">
          <button className=" bg-white text-black sm:w-auto w-full py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
            Become Our Affiliate Partner
          </button>
        </a>
      </div>
    )
  },
  {
    id: 122,
    question: 'What is the Pro Traders Fund Affiliate cookie life and how long does it last?',
    answer: (
      <>
        The Pro Traders Fund affiliate cookie life refers to the length of time allotted for the person you refer to Pro Traders Fund to
        make a purchase, also referred to as the duration of a cookie. By default, the Pro Traders Fund affiliate cookie life is set to 30
        days. This means, if a person you referred to comes to our website via your affiliate invite link and makes a purchase within 30
        days, it is tracked by our affiliate system and you will be paid a commission of up to 30% of the purchase amount immediately.
      </>
    )
  },
  {
    id: 123,
    question: 'How does the Pro Traders Fund affiliate program work?',
    answer: (
      <>
        The Pro Traders Fund affiliate program is straightforward: <br /> You promote the Pro Traders Fund and receive a commission for
        every new referred customer. Promote us like you would any business opportunity or product you use daily. There is no monthly fee to
        be a Pro Trader Fund Affiliate, so you can become an Affiliate and be up and running with only one click of your mouse!
      </>
    )
  },
  {
    id: 124,
    question: 'How can I refer traders?',
    answer: (
      <>
        Sign in to your Pro Traders Fund account and select Refer Traders. You can copy your unique referral link to share on your own
        channels, or share directly via email, YouTube, Instagram, Facebook, Twitter, What’s App, Telegram and LinkedIn.
      </>
    )
  },
  {
    id: 125,
    question: 'Which platforms can I use for trading on Pro Traders Fund?',
    answer: (
      <>
        You can use the MetaTrader5 (MT5) platform to trade your Pro Trader Challenge or Funded account. To see your PTF account
        credentials, log into the client area and click the "Credentials" tab.
      </>
    )
  },
  {
    id: 126,
    question: 'What are the Pro Traders Fund account specifications?',
    answer: (
      <>
        <p>
          The Pro Traders Fund account specification can be seen right in your trading platform. To view the instrument specification in
          MetaTrader 5, open your Market Watch, right-click on the concerned instrument and choose ‘specification’.
        </p>
        <p>
          <b>You can trade over 2000 instruments available on our trading platform in all markets:</b> <br /> Forex, stocks,
          cryptocurrencies, options and more.
        </p>
      </>
    )
  },
  {
    id: 127,
    question: 'How do I access the platform to start trading?',
    answer: (
      <>
        <p>
          To access the Pro Traders Fund platform to start trading all you need to do is login to your Pro Traders Fund dashboard and select
          any of the available challenges. You can then click on "Credentials" and follow the steps to use your credentials to login to your
          trading account. If you have any issues please email{' '}
          <a href="mailto:support@protradersfund.com" className="text-mainColor">
            support@protradersfund.com
          </a>{' '}
          and our support team will assist you.
        </p>
      </>
    )
  },
  {
    id: 128,
    question: 'How Do I Log In to MetaTrader 5 (MT5) and Start Trading with Pro Traders Fund?',
    answer: (
      <div>
        Logging in to MetaTrader 5 (MT5) and commencing your trading journey with Pro Traders Fund is a straightforward process. Follow
        these steps to get started and access live capital funding opportunities after successfully meeting our performance evaluation
        guidelines: <br /> <br />
        <ul className="space-y-2 list-disc">
          <li>
            <b>Step 1: Purchase an Evaluation Package</b> <br />
            Before you can log in and start trading with Pro Traders Fund, you'll need to select and purchase an evaluation package that
            suits your trading goals. Visit <a href="https://protradersfund.com/">www.protradersfund.com</a> to explore our packages and
            choose the one that's right for you.
          </li>

          <li>
            <b>Step 2: Receive Your Trading Account Credentials </b>
            <br />
            Once you've completed your purchase, your trading account credentials will be generated instantly. You can find these
            credentials in the following locations:
            <ul className="pl-5 list-disc">
              <li>
                Pro Traders Fund Dashboard: Log in to your Pro Traders Fund account, where you'll find your MetaTrader 5 (MT5) login and
                password in the dashboard. These credentials are essential for accessing the MT5 platform.
              </li>
              <li>
                Email Inbox: Additionally, you'll receive an email notification containing your MT5 login details. Please check your email
                inbox, including the spam or junk folder, as sometimes emails can be filtered there.
              </li>
            </ul>
          </li>

          <li>
            <b>Step 3: Download and Install MetaTrader 5 (MT5)</b> <br />
            If you haven't already done so, download and install the MetaTrader 5 (MT5) application on your device. MT5 is available for
            various operating systems, including Windows, macOS, iOS, and Android. You can download it from the official MetaQuotes website
            or your device's app store.
          </li>

          <li>
            <b>Step 4: Launch MetaTrader 5 (MT5)</b>
            <br />
            After installation, launch the MT5 application on your device.
          </li>

          <li>
            <b>Step 5: Log In</b>
            <br />
            To log in to MT5, use the credentials provided in your Pro Traders Fund dashboard or email. Enter your MetaTrader 5 login and
            password in the respective fields.
          </li>

          <li>
            <b>Step 6: Choose a Server</b>
            <br />
            When prompted to select a server, choose the server name provided in your Pro Traders Fund dashboard, along with your login and
            password. This server name ensures that you are connected to the Pro Traders Fund trading environment.
          </li>

          <li>
            <b>Step 7: Start Trading</b>
            <br />
            Once you've successfully logged in and chosen a server, you'll have access to the MetaTrader 5 (MT5) platform. Now, you can
            start trading, manage your account, and explore the exciting opportunities offered by Pro Traders Fund.
          </li>
        </ul>{' '}
        <br />
        We encourage you to sign up at <a href="https://protradersfund.com/">www.protradersfund.com</a> today, purchase your evaluation
        package, and begin your journey towards live capital trading after meeting our performance evaluation guidelines. Don't miss out on
        the chance to leverage our platform and funding to achieve your trading ambitions. <br /> <br />
        <i>
          Disclaimer: Please note that all payments are for evaluation services, and we do not provide investment advice or manage funds for
          others.
        </i>
      </div>
    )
  },
  {
    id: 129,
    question: 'Can I change my trading platform during the Pro Traders Fund Evaluation process?',
    answer: (
      <>No, a change of your trading platform is not possible during the progress of your evaluation with the Pro Traders Fund platform.</>
    )
  },
  {
    id: 130,
    question: 'I am not seeing anything on my Pro Traders Fund dashboard. What should I do?',
    answer: (
      <div>
        If your Pro Traders Fund dashboard is not displaying as expected, please follow these steps to troubleshoot the issue: <br />
        <ul className="space-y-1 list-disc ">
          <li>
            Verify Purchase: First, double-check to ensure that your purchase was successful. Review your payment method for any issues,
            such as declined transactions.
          </li>
          <li>
            Clear Browser Cache: Sometimes, cached data can cause display issues. Clear your web browser's cache and cookies to ensure
            you're loading the latest version of the website.
          </li>
          <li>Check for Updates: Ensure that your web browser is up to date. Outdated browsers may have compatibility issues.</li>
          <li>
            Use a Different Browser: Try accessing your dashboard using a different web browser. This can help identify if the issue is
            specific to your current browser.
          </li>
          <li>
            Try a Different Device: Attempt to access your dashboard from another device, such as a mobile device or a different computer,
            to see if the problem persists.
          </li>
          <li>
            Contact Support: If the issue continues after trying the above steps, or if you're sure your purchase was successful, please
            reach out to the Pro Traders Fund support team. You can contact us via email at support@protradersfund.com or through the live
            chat feature on our website. When contacting us, please provide:
            <ul className="pl-5 list-disc">
              <li>Proof of Purchase</li>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Any Screenshots or Recordings (if applicable)</li>
              <li>A Detailed Explanation of the Issue</li>
            </ul>
          </li>
        </ul>{' '}
        <br />
        Our support team will promptly investigate and work to resolve the problem so you can access your Pro Traders Fund dashboard. We
        appreciate your patience and are committed to providing you with the best trading experience.
      </div>
    )
  },
  {
    id: 131,
    question: 'Why Is My Dashboard Saying "No Trading Accounts Present?"',
    answer: (
      <div>
        If you're encountering this message on your dashboard, here are some steps to resolve the issue:
        <br />
        <ul className="space-y-1 list-disc ">
          <li>
            Check Registration: For new users, please ensure that your registration process was successful. Verify if your payment method
            has been approved and that you've received confirmation of your payment.
          </li>
          <li>
            Advancement to Next Phase: If you're an existing user in an evaluation process (Phase 1 or Phase 2), remember that a trading
            account is generated when you advance to the next phase. Make sure to click the "Advance to Next Phase" button on your dashboard
            once you've met the criteria for advancement.
          </li>
          <li>
            Meeting Advancement Criteria: Before advancing to the next phase, ensure that you've met the specific criteria outlined for each
            phase. This may include minimum trading days, performance targets, or other requirements.
          </li>
          <li>
            Reach Out to Support: If you've followed these steps and are still experiencing issues with your dashboard or trading accounts
            not appearing, please contact our support team. Provide proof of purchase for new evaluation challenge accounts, your full name,
            email address, and phone number. For existing users with challenge accounts who need to advance but are not seeing credentials
            or new trading accounts generated, our support team will investigate and resolve the issue promptly.
          </li>
        </ul>{' '}
        <br />
        Remember, our support team is here to assist you, and we aim to ensure a smooth and hassle-free experience for all our users. Don't
        hesitate to reach out if you require further assistance.
      </div>
    )
  },
  {
    id: 132,
    question: "I purchased a Pro Traders Fund account, but I haven't received any login credentials. What should I do?",
    answer: (
      <div>
        We apologize for any inconvenience you've encountered. If you've purchased an account and haven't received your login credentials,
        please follow these steps to resolve the issue:
        <br /> <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Check Your Email:</b> First, please check the email address associated with your account for any communication from us. The
            login credentials, along with instructions, are usually sent to the email address provided during the registration and purchase
            process. Ensure that the email hasn't been filtered into your spam or junk folder.
          </li>
          <li>
            <b>Check Payment Status:</b> To confirm that your purchase was successful, review your payment method. Ensure that the payment
            was approved and processed without any issues. If there were payment problems, this could have affected the account creation
            process.
          </li>
          <li>
            <b>Wait for Confirmation:</b> Sometimes, there may be a slight delay in the delivery of email notifications due to various
            factors. We recommend waiting for a reasonable amount of time (up to a few hours) to see if you receive the email.
          </li>
          <li>
            <b>Contact Support:</b> If you've checked your email, including spam and junk folders, and still haven't received your login
            credentials, please don't hesitate to contact our support team. They will assist you in resolving this issue promptly. When
            contacting support, provide them with your full name, email address, phone number, and any purchase confirmation or receipt you
            may have received. This information will help our team locate your account and address the issue efficiently.
          </li>
        </ul>{' '}
        <br /> Our goal is to ensure that you have a smooth and seamless experience with us. Rest assured that our support team will work
        diligently to resolve any issues related to account credentials and get you on track for your trading journey.
      </div>
    )
  },
  {
    id: 133,
    question:
      "I successfully passed a phase on my Pro Traders Fund performance evaluation account, but I haven't received the credentials for the next phase. What should I do?",
    answer: (
      <div>
        We appreciate your commitment to advancing through our performance evaluation phases. If you've passed a phase and are awaiting
        credentials for the next phase, here are the steps to take: <br />
        <br />
        <ul className="space-y-2 list-disc ">
          <li>
            Check Your Email: First, please check your email, including your spam or junk folder. We typically send important information,
            including login credentials, to the email address associated with your Pro Traders Fund account.
          </li>

          <li>
            <b>Review Your Dashboard:</b> Log in to your Pro Traders Fund dashboard. Ensure that you've clicked the "Advance to Next Phase"
            button if it's available. This button becomes active when you meet the criteria for advancing to the next phase. Make sure
            you've met these criteria before advancing.
          </li>

          <li>
            <b>Contact Support:</b> If you've checked your email and dashboard and still haven't received your credentials, or if you have
            any doubts or questions, please reach out to our dedicated support team. They will promptly investigate the issue and assist you
            in obtaining the necessary credentials for your next phase.
          </li>
        </ul>{' '}
        <br />
        When contacting our support team, provide them with your full name, email address, and any relevant information about your current
        phase and the phase you're attempting to advance to. This will help us expedite the resolution process and ensure you can continue
        your journey with Pro Traders Fund without delays.
        <br /> <br />
        We are committed to ensuring a smooth and transparent experience for our traders, and our support team is here to assist you every
        step of the way.
      </div>
    )
  },
  {
    id: 134,
    question: 'I am unable to see my account metrics or trading results on my Pro Traders Fund dashboard. What should I do?',
    answer: (
      <div>
        We understand the importance of accessing your trading metrics and results. If you are experiencing issues with viewing your account
        metrics or trading results on your Pro Traders Fund dashboard, please follow these steps to resolve the issue:
        <br />
        <br />
        <ul className="space-y-2 list-disc ">
          <li>
            <b>Check Your Dashboard:</b> Ensure that you are correctly logged into your Pro Traders Fund dashboard. Double-check your login
            credentials to make sure you are accessing the right account.
          </li>

          <li>
            <b>Refresh the Page:</b> Sometimes, web pages may experience loading issues. Try refreshing the dashboard page in your web
            browser to see if the metrics and results appear.
          </li>

          <li>
            <b>Browser Compatibility:</b> Ensure that you are using a compatible web browser to access the dashboard. Pro Traders Fund is
            designed to work optimally with modern web browsers. You may want to try a different browser if the issue persists.
          </li>

          <li>
            <b>Check for Notifications:</b> Look for any notifications or alerts on your dashboard that might provide insights into the
            issue. There could be important updates or messages that need your attention.
          </li>

          <li>
            <b>Clear Browser Cache:</b> Clearing your browser's cache and cookies can resolve certain display problems. Refer to your
            browser's settings for instructions on how to clear cache and cookies.
          </li>

          <li>
            <b>Contact Support:</b> If none of the above steps resolve the issue, please don't hesitate to contact our support team. They
            will assist you in diagnosing and resolving the problem. When reaching out to support, provide them with your full name, email
            address, and a detailed description of the issue, including any error messages you may have encountered. This information will
            help our team address your concern efficiently.
          </li>
        </ul>{' '}
        <br />
        We are committed to ensuring that you have access to your trading metrics and results as part of your trading experience. Our
        support team is here to assist you and resolve any technical issues you may encounter with your dashboard.
      </div>
    )
  },
  {
    id: 135,
    question: 'I encountered an "Undefined Trading Account" message. What should I do?',
    answer: (
      <div>
        If you see the "Undefined Trading Account" message on your Pro Traders Fund dashboard, it can be resolved through a few
        troubleshooting steps. Follow these steps before reaching out to our support team:
        <br />
        <br />
        <ul className="space-y-2 list-disc ">
          <li>
            <b>Check Payment Status:</b> Ensure that your payment for the challenge or evaluation was successful. Verify your payment method
            for any issues, like declined transactions.
          </li>

          <li>
            <b>Verify Advancement Criteria:</b> If you're trying to advance to the next phase, make sure you meet the criteria set for
            advancement. Ensure you've met requirements like trading days, account age, or profit targets.
          </li>

          <li>
            <b>Logout and Log Back In:</b> Sometimes, a simple logout and login to your Pro Traders Fund Dashboard can refresh your account
            information. Try logging out of your Pro Traders Fund account and then log back in.
          </li>

          <li>
            <b>Clear Browser Cache:</b> If you're using a web browser, clear your browser's cache and cookies. Cached data can sometimes
            cause display issues.
          </li>

          <li>
            <b>Use a Different Browser:</b> If the problem persists, try accessing your dashboard from a different web browser. This can
            help identify if the issue is browser-specific.
          </li>

          <li>
            <b>Try a Different Device:</b> Attempt to access your account from a different device (e.g., a mobile device or another
            computer) to see if the problem persists.
          </li>

          <li>
            <b>Check for Updates:</b> Ensure that your web browser is up to date. Outdated browsers can sometimes have compatibility issues.
          </li>

          <li>
            <b>Contact Support:</b> If none of the above steps resolve the issue, or if you have proof of payment and still encounter the
            problem, reach out to the Pro Traders Fund support team. In your email to{' '}
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="text-mainColor">
              {emailAddress}
            </a>
            , include:{' '}
            <ul className="pl-5 list-disc ">
              <li>Proof of Purchase</li>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Screenshots or Recordings (if applicable)</li>
              <li>Detailed Explanation of the Issue</li>
            </ul>
          </li>
        </ul>{' '}
        <br />
        By following these troubleshooting steps, you can address the "Undefined Trading Account" message. If the issue persists, our
        support team will investigate and assist you further. We appreciate your effort in resolving the problem and are here to support you
        on your trading journey.
      </div>
    )
  },
  {
    id: 136,
    question: 'When will my Pro Traders Fund trading account login number be generated?',
    answer: (
      <div>
        Your Pro Traders Fund trading account login number is typically generated either after you purchase an evaluation challenge account
        or after you successfully pass an evaluation phase and click "Advance to Next Phase" instantly once the conditions are met. Here's
        how the process works:
        <br /> <br />
        <ul className="space-y-2 list-disc ">
          <li>
            <b>Evaluation Challenge Purchase:</b> If you've purchased an evaluation challenge account, you'll receive your login
            credentials, including the trading account login number, shortly after your purchase is successfully processed. You can then
            start your evaluation challenge.
          </li>

          <li>
            <b>Evaluation Phase Advancement:</b> If you're already in the evaluation phase and have successfully met the criteria required
            for advancement, you can click "Advance to Next Phase" instantly within your dashboard. Once you do this, your live trading
            account will be generated, and you'll receive your login credentials.
          </li>

          <li>
            <b>Meeting Criteria:</b> To receive your trading account login number, you must meet the criteria established for funding. These
            criteria may include a minimum number of actual trading days, a minimum profit percentage, and other performance metrics.
          </li>

          <li>
            <b>Access to Funding:</b> With your live trading account, you'll have access to Pro Traders Fund's private fund capital, and you
            can start trading as an independent contractor.
          </li>
        </ul>{' '}
        <br />
        The specific timeline for account generation can vary based on your trading performance and how quickly you meet the criteria.
        Typically, traders who perform well can progress to the funded phase relatively quickly. <br /> <br />
        If you have questions about the status of your account or need assistance, feel free to contact our support team at{' '}
        <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="underline">
          {emailAddress}
        </a>
        . We're here to help you through the process and provide the support you need to succeed.
      </div>
    )
  },
  {
    id: 137,
    question: 'Do you have any banners or marketing materials for me to promote the Pro Traders Fund?',
    answer: (
      <>
        Yes! We’ll provide you with all marketing materials, such as banners, screenshots, infographics, videos, and logos, once you sign up
        for our Pro Traders Fund affiliate program.
      </>
    )
  },
  {
    id: 138,
    question: 'How does the Pro Traders Fund Affiliate Program track clicks?',
    answer: (
      <>
        Pro Traders Fund affiliate programs track clicks with our reliable in-house system, so you never lose any of the commissions you
        refer.
      </>
    )
  },
  {
    id: 139,
    question: 'What marketing methods are not allowed?',
    answer: [
      'We do not allow the following:',
      [
        'Spam or unsolicited email promotions',
        'Spamming',
        'Any other type of illegal or deceptive marketing',
        'Use of materials that infringe on our intellectual property rights',
        'Cookie-stuffing'
      ],
      'For more info, please refer to our Affiliate Terms of Service page.',
      'Pro Traders Fund affiliates found violating or attempting to circumvent these rules will have their commissions voided and payments withheld. Additionally, they will be banned from further participation in the Pro Traders Fund Affiliate Program.'
    ]
  },
  {
    id: 140,
    question: 'How does Pro Traders Fund ensure regulatory compliance with its trading evaluation and funding platform?',
    answer: (
      <div>
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
            <b>Global Operations:</b> Our trading entities are based internationally and not directed at residents of any jurisdiction where
            the activities of Pro Traders Fund and its affiliates are restricted or prohibited by local laws or regulations. We offer our
            services globally, but we do not target residents of jurisdictions where our activities may be restricted by local laws or
            regulations.
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
            <b>User Agreement:</b> By signing up, users agree to our terms and conditions, acknowledging their understanding of our policies
            and practices. We reserve the right to deny services to customers who exceed our risk tolerance.
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
          It's important to note that our platform is designed for traders seeking performance evaluation and funding opportunities, and our
          approach is transparent, structured, and focused on regulatory compliance. <br />
          <br />
          If you have any further inquiries or concerns about our regulatory practices, please do not hesitate to contact our support team
          at support@protradersfund.com.
        </p>
      </div>
    )
  },
  {
    id: 141,
    question: 'How do Pro Traders Fund affiliates get paid?',
    answer: (
      <div>
        At Pro Traders Fund, we offer a straightforward and transparent process for affiliate payouts. Here's how it works: <br />
        <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Affiliate Wallet:</b> Your affiliate earnings are initially accumulated in your Affiliate Wallet within your Pro Traders Fund
            account. This wallet serves as a dedicated holding account for your affiliate commissions.
          </li>
          <li>
            <b>Payout Frequency:</b> Affiliate payouts from your Affiliate Wallet to your Main Wallet are processed on a weekly basis. These
            payouts occur every Wednesday.
          </li>
          <li>
            <b>Minimum Payment Amount:</b> To be eligible for a payout, your Affiliate Wallet balance must reach a minimum threshold of $50
            USD.
          </li>
          <li>
            <b>Request Payout:</b> Once the minimum payment amount is met, you can request a payout from your Affiliate Wallet to your Main
            Wallet. This can be done directly from your Pro Traders Fund account.
          </li>
          <li>
            <b>Payout Method:</b> After the funds are in your Main Wallet, you can choose your preferred payout method. We offer various
            payout methods, such as bank transfers, PayPal, or other options. The time it takes to receive your payout depends on the method
            you select.
          </li>
          <li>
            <b>Transfer Fees:</b> While Pro Traders Fund itself does not charge an affiliate payout fee, please be aware that the chosen
            payout method may have its own associated transfer fees. These fees are determined by the selected payout method and are not
            imposed by Pro Traders Fund.
          </li>
          <li>
            <b>Early Withdrawal:</b> If you decide to make an early withdrawal of your affiliate earnings, please note that Pro Traders Fund
            charges a 10% processing fee for such requests. This fee helps cover administrative and processing costs.
          </li>
        </ul>{' '}
        <br />
        We prioritize providing our affiliates with clear and efficient payout options. If you have any specific questions about the payout
        process or need assistance with your affiliate account, our support team is available to help. Your success as a Pro Traders Fund
        affiliate is important to us, and we're here to support you every step of the way.
      </div>
    )
  },
  {
    id: 142,
    question: 'Is there a minimum payout amount? If yes, how much is it?',
    answer: (
      <>
        The Pro Traders Fund affiliate program has a minimum payout of USD $50. If the amount is less than $50, the commission will roll
        over to the next payment cycle.
      </>
    )
  },
  {
    id: 143,
    question: 'What is the affiliate payout schedule?',
    answer: (
      <>
        The Pro Traders Fund affiliate commission is sent from the clients affiliate wallet to their main wallet every wednesday of each
        week once the minimum conditions for payout is met.
      </>
    )
  },
  {
    id: 144,
    question: 'What are the affiliate payout methods?',
    answer: (
      <>
        The Pro Traders Fund can payout affiliates through a variety of methods which can be found on your Pro Traders Fund Dashboard when
        you login and go to the Wallet section. As an affiliate you will be able to choose which method of payment you would like to receive
        your payments through (or any combination of these methods).
      </>
    )
  },
  {
    id: 145,
    question: 'How can I request an affiliate payout?',
    answer: (
      <>
        Pro Traders Fund affiliate members are paid automatically every Wednesday from their Affiliate Wallet to their Pro Traders Fund main
        wallet. Clients can request a payout by logging in to the dashboard and clicking “Wallet" then requesting their payout by any of our
        easy to use payout methods.
      </>
    )
  },
  {
    id: 146,
    question: 'How long will my affiliate payout take to arrive?',
    answer: (
      <div>
        Pro Traders Fund affiliate payouts follow a specific process:
        <br /> <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Internal Processing:</b> Affiliate payouts from the Affiliate Wallet to the Main Wallet are initiated every Wednesday,
            provided that the minimum payout amount of $50 USD has been reached, and all other payout conditions have been met.
          </li>
          <li>
            <b>Requesting Payout:</b> Once the funds are inside your Main Wallet, you can request a payout to your preferred payment method.
            The available payout methods are determined by the Pro Traders Fund.
          </li>
          <li>
            <b>Immediate Processing:</b> Once you submit a payout request, it is processed internally by our team. Upon approval, the payout
            is sent to your chosen payout method immediately.
          </li>
          <li>
            The time it takes to receive your payout is influenced by the specific payout method you've selected. Different methods have
            varying processing times. For precise details on the processing times associated with your chosen payout method, please refer to
            the information provided during the payout request process.
          </li>
        </ul>{' '}
        <br />
        We are committed to ensuring that your affiliate payouts are processed efficiently and in a timely manner. If you have any questions
        or require further assistance regarding your affiliate payout, please feel free to reach out to our support team. We're here to
        assist you with any concerns you may have.
      </div>
    )
  },
  {
    id: 147,
    question: 'How long does it take to process affiliate payouts at Pro Traders Fund?',
    answer: (
      <div>
        Pro Traders Fund strives to ensure efficient and prompt processing of affiliate payouts. Here's a breakdown of the process:
        <br /> <br />{' '}
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Initiation:</b> Affiliate payouts from the Affiliate Wallet to the Main Wallet are initiated every Wednesday, assuming that
            the minimum payout threshold of $50 USD has been met, and all other payout conditions have been satisfied.
          </li>
          <li>
            <b>Payout Request:</b> Once the funds are available in your Main Wallet, you can request a payout. The available payout methods
            depend on Pro Traders Fund's options.
          </li>
          <li>
            <b>Immediate Processing:</b> When you request a payout, our team processes it internally. Once approved, the payout is sent to
            your chosen payout method immediately.
          </li>
        </ul>{' '}
        <br />
        The actual time it takes to receive your affiliate payout can vary depending on the specific payout method you select. Different
        payout methods have different processing times. For precise details on the processing times associated with your chosen payout
        method, please consult the information provided during the payout request process. <br /> <br />
        We are dedicated to delivering timely and efficient affiliate payouts. If you have any inquiries or require further assistance
        regarding your affiliate payout, please don't hesitate to contact our support team. We're here to address any questions or concerns
        you may have.
      </div>
    )
  },
  {
    id: 148,
    question: 'When can I request my affiliate payout?',
    answer: (
      <div>
        At Pro Traders Fund, you have the flexibility to request your affiliate payout at your convenience. Here's how it works:
        <br />
        <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Minimum Payout Threshold:</b> To initiate an affiliate payout, please ensure that you have reached the minimum payout
            threshold. As of our current policy, the minimum payout amount is $50 USD.
          </li>
          <li>
            <b>Payout Availability:</b> Affiliate commissions are typically credited to your Affiliate Wallet. Once the required threshold
            is met and you have accumulated commissions in your Affiliate Wallet, you can request a payout.
          </li>
          <li>
            <b>Payout Request:</b> To request your affiliate payout, navigate to your Pro Traders Fund account and follow the instructions
            for requesting payouts. You'll be able to select your preferred payout method.
          </li>
          <li>
            <b>Processing Time:</b> After you've submitted your payout request, our internal team will process it promptly. Once approved,
            the payout is sent to your selected payout method.
          </li>
          <li>
            <b>Payout Method Processing:</b> The time it takes to receive your affiliate payout depends on the specific payout method you
            choose. Different methods have different processing times.
          </li>
        </ul>{' '}
        <br />
        We aim to provide a seamless and efficient experience for our affiliates. If you have any questions about the payout process or need
        further assistance, please feel free to reach out to our support team. We're here to assist you with any inquiries or concerns you
        may have.
      </div>
    )
  },
  {
    id: 149,
    question: 'What are the affiliate payout fees?',
    answer: (
      <div>
        At Pro Traders Fund, we believe in transparency and strive to keep our fees as minimal as possible. Here's what you need to know
        about affiliate payout fees:
        <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Pro Traders Fund Fees:</b> Pro Traders Fund does NOT charge an affiliate payout fee. We do not impose additional fees for
            processing affiliate payouts within our system.
          </li>
          <li>
            <b>Transfer Fees: </b>While Pro Traders Fund itself does not charge any fees, please be aware that the financial institution or
            payment method you choose for your affiliate payout may have its own transfer fees. These fees are typically determined by the
            chosen payout method and are beyond our control. We recommend reviewing the fee structure of your selected payout method to
            understand any associated costs.
          </li>
          <li>
            <b>Early Withdrawal:</b> If you opt for an early withdrawal of your affiliate earnings, Pro Traders Fund does charge a 10%
            processing fee. Early withdrawals are subject to this fee to cover administrative and processing costs.
          </li>
        </ul>{' '}
        <br />
        We prioritize offering a fair and competitive affiliate program, and we aim to ensure that your earnings are delivered to you with
        as few fees as possible. If you have specific questions about payout methods or fees, please don't hesitate to contact our support
        team for further assistance. Your success as an affiliate is important to us, and we're here to help.
      </div>
    )
  },
  {
    id: 150,
    question: 'Do I need to be verified to receive affiliate payout?',
    answer: (
      <div>
        Yes, verification is required for receiving affiliate payouts at Pro Traders Fund. We have a standard verification process in place
        to ensure the security and legitimacy of all financial transactions, including affiliate payouts.
        <br />
        <b>Here's how the verification process works:</b> <br />
        <br />
        <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Account Verification:</b> To be eligible for affiliate payouts, you must have a fully verified Pro Traders Fund account. This
            involves providing accurate and up-to-date personal information, including your name, contact details, and payment information.
          </li>
          <li>
            <b>KYC (Know Your Customer) Verification:</b> As part of the verification process, you may be required to complete a KYC
            verification. This may include submitting government-issued identification documents, such as a passport or driver's license, as
            well as proof of address.
          </li>
          <li>
            <b>Affiliate Program Agreement:</b> Ensure that you have read and agreed to the terms and conditions of the Pro Traders Fund
            Affiliate Program. Compliance with program rules is essential to receive affiliate commissions.
          </li>
          <li>
            <b>Minimum Payout Threshold:</b> Remember that there is a minimum payout threshold of $50 USD in your Affiliate Wallet before
            you can request a payout.
          </li>
        </ul>{' '}
        <br />
        Once your Pro Traders Fund account is fully verified and you meet the minimum payout requirement, you can request an affiliate
        payout. The verification process adds an extra layer of security to protect your earnings and ensure that they are sent to the
        correct recipient. <br /> <br />
        If you have any questions or need assistance with the verification process, our support team is available to help you navigate the
        requirements and ensure a smooth payout experience. We value the trust of our affiliates and are committed to providing a secure and
        efficient payout process.
      </div>
    )
  },
  {
    id: 151,
    question: 'What happens if a commission comes from a fraudulent signup? Will I still get paid?',
    answer: (
      <div>
        At Pro Traders Fund, we take fraudulent signups and activities seriously, and we have measures in place to identify and prevent
        them. If a commission arises from a fraudulent signup or activity, it may be subject to review and investigation.
        <br />
        <br />
        <b>Here's what you need to know:</b> <br />
        <ul className="space-y-1 list-disc ">
          <li>
            <b>Fraudulent Activities:</b> If a commission is linked to a fraudulent signup, it may be withheld or reversed during the review
            process. Fraudulent sign ups include, but are not limited to, fake or unauthorized accounts, multiple accounts created by the
            same individual, or any activity that violates our terms of service.
          </li>
          <li>
            <b>Account Verification</b>: We encourage all affiliates to promote our services ethically and within the boundaries of our
            terms and conditions. Ensure that your referrals are genuine traders who comply with our policies.
          </li>
          <li>
            <b>Affiliate Agreement:</b> Adherence to the Pro Traders Fund Affiliate Program Agreement is essential. If your referrals engage
            in fraudulent activities, it could impact your affiliate commissions. It's crucial to promote our services in an honest and
            transparent manner.
          </li>
          <li>
            <b>Contact Support:</b> If you suspect any fraudulent activities among your referrals, or if you have concerns about a specific
            commission, please reach out to our support team promptly. We will investigate and take appropriate actions to maintain the
            integrity of our affiliate program.
          </li>
        </ul>{' '}
        <br />
        While we aim to reward our affiliates for their legitimate efforts, we must uphold the quality and ethical standards of our
        platform. If you have any questions or require further clarification about affiliate commissions or fraud prevention, don't hesitate
        to contact our support team. We're here to assist you in ensuring a fair and transparent affiliate experience at Pro Traders Fund.
      </div>
    )
  },
  {
    id: 152,
    question: 'Does ProTraders Fund pay recurring commissions to affiliates?',
    answer: (
      <div>
        <p class=" text-white">
          Yes, promote Pro Traders Fund and earn money for every purchase one of your referrals makes, not just a commission on their first
          purchase alone. But, all of them!
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
      </div>
    )
  },
  {
    id: 153,
    question: '',
    answer: <></>
  }
];

export default faqData;
