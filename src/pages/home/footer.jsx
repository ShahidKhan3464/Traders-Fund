import React from 'react';

const Footer = () => {
  const socialIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/2d1d54a3c67ab22aacfa419f6ba0fc66563a41aa4bdd26590cba2b2cef861f2e?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/4e46657c1a619391f39861f27c3b37b152ff5e3ff1f270a9127040edb4795181?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/246cb09e1567819d2f23c859431892ccf63ba93dd88793a01a661a104b25f561?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/eda5d51f78358a4f59596cfab8f163c914c48ad88d64d3654bba1a0281ecb4e5?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/0951c63a1e34e25904a2f55cbebf859195237889233272ada59548e12b622286?apiKey=227fffdadf2841c0827fed858fc04b84&'
  ];

  const paymentIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/782c7df819b5b8b8fa8f759dc9786b5079bc692a1d020e9de74ad0bf893e489f?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/a127de29dd110cc1293c86f781358ed22c4606b8d0706fb4f283b76c22bb7ffc?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/f00d2ccf85d303bdc7cabd6e07fcc050aefa863427a10f240e7385da0d9e90f2?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/12dff4c3f023b5565500154148e42be322b7ef8b3bdc1e34f1462d799f0395c7?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/cb381031a5f6a41c548e70f53bfc7d524f76a0d6b3ae58197c4dcef9d5235eff?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/0e1f89595e0f4e67ec8f24c1abf630c0d5d3715f3aaba73b5ed4337414492eb4?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d1403dd57e72f9b5641d6b27aeea9f2d27491c523a695bd0908360f8e6989c17?apiKey=227fffdadf2841c0827fed858fc04b84&',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/6147649d8120127d3020861d24d9a0f8afdc85a4012aa729435d7d9a4ecb6c6c?apiKey=227fffdadf2841c0827fed858fc04b84&'
  ];

  return (
    <footer className="flex z-0 flex-col pt-10 w-full bg-[#1C1D20] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start px-36 w-full max-md:px-5 max-md:max-w-full">
        <img
          alt="img"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aecc99ab66812734bf1b3b320aa30d587f594d833983de34f945efbe9212647?apiKey=227fffdadf2841c0827fed858fc04b84&"
          className="object-contain shrink-0 aspect-[2.22] w-[140px]"
        />
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-start basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col rounded-none w-[148px]">
            <div className="self-start text-lg font-matter font-semibold leading-loose text-[#F9FAFB] max-md:font-medium">How it works</div>
            <div className="mt-5 text-sm font-matter font-normal leading-5 text-[#D0D5DD]">
              Why Pro Traders Fund?
              <br />
              <br />
              Evaluation Process
              <br />
              <br />
              Trading Objectives
              <br />
              <br />
              Scaling Plan
              <br />
              <br />
              Affiliate Program
              <br />
              <br />
              Blogs
            </div>
          </div>
          <div className="flex flex-col rounded-none w-[126px]">
            <div className="self-start text-lg font-matter font-semibold leading-loose text-[#F9FAFB] max-md:font-medium">Legal</div>
            <div className="mt-5 text-sm font-matter font-normal leading-5 text-[#D0D5DD]">
              Terms & Conditions
              <br />
              <br />
              Payment Procedure
              <br />
              <br />
              Cancellation Policy
              <br />
              <br />
              Refund Policy
              <br />
              <br />
              Privacy policy
            </div>
          </div>
          <div className="flex flex-col rounded-none w-[157px]">
            <div className="self-start text-lg font-matter font-semibold leading-loose text-[#F9FAFB] max-md:font-medium">Trading Apps</div>
            <div className="mt-6 text-sm font-matter font-normal leading-5 text-[#D0D5DD]">
              Download MT5 Windows
              <br />
              <br />
              Download MT5 Android
              <br />
              <br />
              Download MT5 IOS
              <br />
              <br />
              Launch Webtrader
            </div>
          </div>
          <div className="flex flex-col text-sm min-w-[240px] w-[289px]">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-start max-w-full rounded-none w-[289px]">
                <div className="text-lg font-matter font-semibold leading-loose text-[#F9FAFB] max-md:font-medium">Support</div>
                <div className="mt-6 font-matter font-medium leading-none text-[#EAECF0]">Email us at</div>
                <div className="self-stretch font-matter font-normal mt-1.5 leading-5 text-[#D0D5DD]">
                  <span className="text-xl font-matter font-medium leading-8 text-white max-md:text-sm">Support@ ProTradersFund.com</span>
                  <br />
                  FAQ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center self-center px-36 py-10 w-full max-md:px-5">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-sm font-matter font-normal leading-5 text-[#98A2B3] max-md:max-w-full">
              By accessing Pro Traders Funding LLC, Pro Traders Funding Limited Ltd., Pro Traders Fund, or any of its affiliates'
              (collectively, &quot;PTF&quot;) website, you acknowledge and agree that you have read, understood, and agreed to be bound by
              the following disclaimer of warranties and limitation of liabilities: <br />
              <br />
              1. General Information
              <br />
              All content published and distributed by Pro Traders Funding LLC and its affiliates (collectively, &quot;the Company&quot;) is
              provided for informational and educational purposes only. None of the information provided by the Company or contained herein
              should be construed as investment advice, an offer or solicitation of an offer to buy or sell securities, commodities, or
              financial instruments. The Company does not provide personalized investment advice or manage funds for others.
              <br />
              <br />
              2. Risk Disclosure Trading in financial markets involves substantial risk, including the risk of losing a significant portion
              or all of your capital. However, it is crucial to understand that the capital allocated during various phases of our program
              does not belong to the trader.
              <br /> <br />
              Evaluation Phase Capital: During the evaluation phase, traders are working with virtual funds placed within demo accounts.
              These funds are not real capital and carry no personal financial risk to the trader.
              <br />
              Funded Phase Capital: In the funded phase, traders utilize capital extended by Pro Traders Fund, distinct from personal
              ownership by the trader. The Company maintains complete control (custody) of the funds at all times, with all profits
              generated deemed as company assets. The distribution of payment is considered a commission for services rendered by the
              independent contractor considering that all requirements are met. Consequently, in the event of any breach of contractual
              terms by the independent contractor, entitlement to payment will be forfeited.
              <br />
              Risk Management Criteria: To mitigate risk and protect our private fund, specific risk management parameters are in place.
              Traders are required to operate within these predefined guidelines. Any breach of these criteria results in automatic
              forfeiture, as it indicates a failure to trade within our established risk tolerance.
              <br />
              Information Disclaimer: The information provided on the Company's websites and platforms is not intended as a specific
              investment recommendation, business guidance, or an analysis of investment opportunities. It should never be considered a
              substitute for professional financial advice.
              <br />
              We encourage all traders to approach their trading activities with the responsibility that comes with managing our private
              fund's capital. Understanding the unique structure of our program is fundamental to your success. If you have any questions or
              concerns regarding this structure, please do not hesitate to contact us for further clarification.
              <br />
              <br />
              3. Past Performance
              <br />
              Any mention of past performance is not indicative of future results. Hypothetical or simulated performance results have
              inherent limitations and do not represent actual trading. They may have under- or over-compensated for market factors, such as
              lack of liquidity, and are based on historical data.
              <br />
              <br />
              4. Compliance with Laws
              <br />
              Pro Traders Fund is committed to rigorous adherence to all applicable local and international laws and regulations. Our
              trading activities are meticulously structured to align with prevailing legal frameworks. Traders are expressly informed that
              engagement with our services is contingent upon their responsibility to ensure compliance with local laws governing financial
              transactions and trading activities. In the event of any suspicion or evidence of breach, fraudulent conduct, or any
              prohibited activities, Pro Traders Fund reserves the right to take appropriate measures, including the forfeiture of user
              accounts, in compliance with legal and regulatory obligations. Additionally, our payment processing protocols strictly adhere
              to industry standards, employing reputable third-party processors and ensuring the utmost security for our clients. The
              Company's services and information are intended solely for educational and research purposes related to trading on financial
              markets. They do not constitute an offer to conduct regulated financial activities. It is your responsibility to ensure
              compliance with all applicable local laws and regulations before engaging in any financial activities.
              <br />
              <br />
              5. No Representation of Profit or Loss
              <br />
              No representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
              Individual trading results may vary, and success in trading depends on various factors, including market conditions,
              individual skills, and risk tolerance.
              <br />
              <br />
              6. Consultation with a Professional
              <br />
              Before making any financial decisions or engaging in trading activities, it is strongly advised that you seek the counsel of a
              qualified financial professional who can assess your individual circumstances and provide personalized guidance.
              <br />
              <br />
              7. Jurisdictional Considerations
              <br />
              The Company's services may not be suitable for residents of all countries or jurisdictions. It is your responsibility to
              determine whether your access and use of the Company's services are compliant with local laws and regulations.
              <br />
              <br />
              8. Not a Broker
              <br />
              Pro Traders Funding LLC is not a financial broker or dealer, and it does not accept deposits or provide investment management
              services. The Company operates as a performance evaluation platform.
              <br />
              <br />
              9. Institutional Liquidity Provider
              <br />
              The offered technical solution for Pro Traders Funding LLC's platforms and data feed is powered by an institutional liquidity
              provider.
              <br />
              <br />
              10. Copyright Notice
              <br />
              Copyright © 2024. All rights reserved. Pro Traders Funding LLC.
              <br />
              <br />
              11. Modification of Terms
              <br />
              Pro Traders Funding LLC reserves the right to modify or update these terms and disclaimers at any time. Users are encouraged
              to review this disclaimer regularly for any changes.
              <br />
              <br />
              12. Funding Disclaimer
              <br />
              Funding provided by Pro Traders Fund is contingent upon traders meeting specific guidelines and criteria set by our platform.
              It is not to be construed as an investment or financial service. We do not accept external investments or provide investment
              advice.
              <br />
              <br />
              13. Limitation of Liability
              <br />
              Pro Traders Fund shall not be liable to you or any third party for any damages, whether direct, indirect, incidental, special,
              consequential, or punitive arising out of or in connection with your access to or use of this website, its contents, or
              services, even if Pro Traders Fund has been advised of the possibility of such damages. Pro Traders Fund shall not be liable
              for any failure or delay in performing any obligation under these terms and conditions, whether or not such failure or delay
              is due to causes beyond its control.
              <br />
              <br />
              14. Severability <br />
              Lastly, if any provision of the terms of service and legal documents are unenforceable or held illegal in a judicial
              proceeding, such provision shall be severed and held inoperative, whilst holding the remaining portion of this document
              operative and binding on both parties.
              <br />
              <br />
              This comprehensive disclaimer is intended to provide clarity and protection for both Pro Traders Fund and its users. It covers
              key aspects related to the company's services, risk disclosure, and liability limitations. Users are encouraged to review and
              understand these terms before using the platform. If you do not agree with the terms of this disclaimer or the information
              provided within the documents, please leave this website immediately.
            </div>

            <div className="gap-5 self-stretch mt-5 max-w-full font-matter text-sm font-medium leading-none text-[#98A2B3] w-[907px] max-md:max-w-full">
              © 2023 Pro Traders Funding LLC . All rights reserved
            </div>
            <div className="overflow-hidden flex items-center justify-center gap-2 self-stretch mt-5 w-full text-base font-matter font-medium text-[#6EFDEB] rounded-[30px] max-md:max-w-full">
              View legal documents
            </div>
            <div className="flex flex-wrap justify-between items-center mt-5 w-full gap-[30px_30px] max-md:max-w-full max-md:justify-center max-md:mt-10">
              <div className="flex gap-4 items-center self-stretch my-auto ">
                {socialIcons.map((icon, index) => (
                  <img
                    key={index}
                    alt={`Social Media Icon ${index + 1}`}
                    src={icon}
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                ))}
              </div>
              <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] max-md:gap-2 max-md:flex-wrap">
                {paymentIcons.map((icon, index) => (
                  <img
                    key={index}
                    alt={`Payment Icon ${index + 1}`}
                    src={icon}
                    className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] fill-white stroke-[1px] stroke-gray-100 w-[34px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
