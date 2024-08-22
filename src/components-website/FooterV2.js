import React from 'react';
import logo from '../images/Pro Traders Fund Best Forex Broker Logo.png';
import ig from '../images/icons/Pro Traders Fund Instagram Logo Icon.svg';
import twitter from '../images/icons/Pro Traders Fund Twitter Logo Icon.svg';
import yt from '../images/icons/Pro Traders Fund Youtube Logo Icon.svg';
import tiktok from '../images/icons/tiktok.svg';
import discord from '../images/icons/discord.svg';
import trustpilot from '../images/icons/Trustpilot.svg';
import btc from '../images/icons/Pro Traders Fund Bitcoin Payment Method.svg';
import eth from '../images/icons/Pro Traders Fund Ethereum Payment Method.svg';
import mastercard from '../images/icons/Pro Traders Fund Mastercard Payment Method.svg';
import visa from '../images/icons/Pro Traders Fund Visa Card Payment Method.svg';
import apple from '../images/icons/ApplePay.svg';
import google from '../images/icons/GooglePay.svg';
import cashapp from '../images/icons/Square_Cash_app_logo.svg.png';
import {Grid} from '@mui/material';
import DiscountBanner from './DiscountBanner';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center text-lg-start bg-[#141518] text-white">
            <DiscountBanner home={true}></DiscountBanner>
            <section id="mainFooter" className="mainFooter">
                <div className="text-center container-fluid text-md-start ">
                    <div>
                        <div className="row py-[54px] ">
                            <div container
                                 className="flex flex-col flex-wrap items-center md:items-start md:flex-row justify-evenly">
                                <div className="flex mt-4 ms-4">
                                    <a href="/">
                                        <img src={logo} alt="Pro Traders Fund Best Forex Broker Logo"
                                             className="mb-3 img-fluid" id="logo"/>
                                    </a>
                                </div>
                                <div className="mt-4 space-y-3 text-left ms-4">
                                    <h6 className="mb-2">How It Works</h6>

                                    <p>
                                        <a href="/how-it-works">Evaluation Process</a>
                                    </p>
                                    <p>
                                        <a href="/#pricing">Trading Objectives</a>
                                    </p>

                                    <p>
                                        <a href="/affiliate">Affiliate Program</a>
                                    </p>
                                    <p>
                                        <a href="/faq">FAQs</a>
                                    </p>
                                    <p>
                                        <a href="/blog">Blogs</a>
                                    </p>
                                </div>

                                <div className="mt-4 space-y-3 text-left ms-4">
                                    <h6 className="mb-2">Legal</h6>
                                    <p>
                                        <a href="/terms">Terms & Conditions</a>
                                    </p>
                                    <p>
                                        <a href="/terms#PaymentProcedure">Payment Procedure</a>
                                    </p>
                                    <p>
                                        <a href="/terms#PaymentCancellationPolicy">Cancelation Policy</a>
                                    </p>
                                    <p>
                                        <a href="/terms#RefundPolicy">Refund Policy</a>
                                    </p>
                                    <p>
                                        <a href="/terms#PrivacyPolicy">Privacy Policy</a>
                                    </p>
                                </div>

                                <Grid item md={3} lg={4} xl={2}>
                                    <div className="mt-4 space-y-3 text-left ms-4">
                                        <h6 className="mb-2">Trading Apps</h6>
                                        <p>
                                            <a href="https://www.metatrader5.com/en/download" target="_blank"
                                               rel="noreferrer">
                                                Download MT5 Windows
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://www.metatrader5.com/en/download" target="_blank"
                                               rel="noreferrer">
                                                Download MT5 Android
                                            </a>
                                        </p>

                                        <p>
                                            <a
                                                href="https://trade.mql5.com/trade?servers=ApexCapitalMarkets-ECN&demo_server=ApexCapitalMarkets-ECN&version=5&mobile=1"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Launch Webtrader
                                            </a>
                                        </p>
                                    </div>
                                </Grid>
                                <Grid item md={3} lg={4} xl={3}>
                                    <div className="mt-4 space-y-3 text-left support">
                                        <h6 className="mb-2">Support</h6>
                                        <p>
                                            <span>Email us at</span>
                                        </p>
                                        <p>
                                            <a href="mailto:Support@ProTradersFund.com">Support@ProTradersFund.com</a>
                                        </p>
                                        <p>
                                            <a href="/faq">FAQ</a>
                                        </p>
                                    </div>
                                </Grid>
                            </div>
                        </div>

                        <div className="row bg-[#1C1D20] py-[54px]">
                            <div className="mb-20 col">
                                <div className="disclaimer lg:w-[1024px] md:w-[780px] text-left mx-auto px-4">
                                    <p className="pb-3 copyright">© {year} Pro Traders Funding LLC . All rights
                                        reserved.</p>
                                    <p>
                                        By accessing Pro Traders Funding LLC, Pro Traders Funding Limited Ltd., Pro
                                        Traders Fund, or any of its affiliates'
                                        (collectively, "PTF") website, you acknowledge and agree that you have read,
                                        understood, and agreed to be bound by the
                                        following disclaimer of warranties and limitation of liabilities:
                                        <br/> <br/>
                                        <b> 1. General Information</b> <br/>
                                        All content published and distributed by Pro Traders Funding LLC and its
                                        affiliates (collectively, "the Company") is
                                        provided for informational and educational purposes only. None of the
                                        information provided by the Company or contained
                                        herein should be construed as investment advice, an offer or solicitation of an
                                        offer to buy or sell securities,
                                        commodities, or financial instruments. The Company does not provide personalized
                                        investment advice or manage funds for
                                        others.
                                        <br/> <br/>
                                        <b>2. Risk Disclosure</b> <br/>
                                        Trading in financial markets involves substantial risk, including the risk of
                                        losing a significant portion or all of
                                        your capital. However, it is crucial to understand that the capital allocated
                                        during various phases of our program does
                                        not belong to the trader. <br/>
                                    </p>
                                    <ul className="pl-10 space-y-1 list-disc ">
                                        <li>
                                            <b>Evaluation Phase Capital:</b> During the evaluation phase, traders are
                                            working with virtual funds placed within
                                            demo accounts. These funds are not real capital and carry no personal
                                            financial risk to the trader.
                                        </li>
                                        <li>
                                            <b>Funded Phase Capital:</b> In the funded phase, traders utilize capital
                                            extended by Pro Traders Fund, distinct from
                                            personal ownership by the trader. The Company maintains complete control
                                            (custody) of the funds at all times, with all
                                            profits generated deemed as company assets. The distribution of payment is
                                            considered a commission for services
                                            rendered by the independent contractor considering that all requirements are
                                            met. Consequently, in the event of any
                                            breach of contractual terms by the independent contractor, entitlement to
                                            payment will be forfeited.
                                        </li>
                                        <li>
                                            <b>Risk Management Criteria:</b> To mitigate risk and protect our private
                                            fund, specific risk management parameters
                                            are in place. Traders are required to operate within these predefined
                                            guidelines. Any breach of these criteria results
                                            in automatic forfeiture, as it indicates a failure to trade within our
                                            established risk tolerance.
                                        </li>
                                        <li>
                                            <b>Information Disclaimer:</b> The information provided on the Company's
                                            websites and platforms is not intended as a
                                            specific investment recommendation, business guidance, or an analysis of
                                            investment opportunities. It should never be
                                            considered a substitute for professional financial advice.
                                        </li>
                                    </ul>
                                    <p>
                                        We encourage all traders to approach their trading activities with the
                                        responsibility that comes with managing our
                                        private fund's capital. Understanding the unique structure of our program is
                                        fundamental to your success. If you have
                                        any questions or concerns regarding this structure, please do not hesitate to
                                        contact us for further clarification.
                                    </p>
                                    <br/>
                                    <p>
                                        {' '}
                                        <b>3. Past Performance</b> <br/>
                                        Any mention of past performance is not indicative of future results.
                                        Hypothetical or simulated performance results have
                                        inherent limitations and do not represent actual trading. They may have under-
                                        or over-compensated for market factors,
                                        such as lack of liquidity, and are based on historical data.
                                        <br/> <br/> <b>4. Compliance with Laws</b> <br/>
                                        Pro Traders Fund is committed to rigorous adherence to all applicable local and
                                        international laws and regulations. Our
                                        trading activities are meticulously structured to align with prevailing legal
                                        frameworks. Traders are expressly informed
                                        that engagement with our services is contingent upon their responsibility to
                                        ensure compliance with local laws governing
                                        financial transactions and trading activities. In the event of any suspicion or
                                        evidence of breach, fraudulent conduct,
                                        or any prohibited activities, Pro Traders Fund reserves the right to take
                                        appropriate measures, including the forfeiture
                                        of user accounts, in compliance with legal and regulatory obligations.
                                        Additionally, our payment processing protocols
                                        strictly adhere to industry standards, employing reputable third-party
                                        processors and ensuring the utmost security for
                                        our clients. The Company's services and information are intended solely for
                                        educational and research purposes related to
                                        trading on financial markets. They do not constitute an offer to conduct
                                        regulated financial activities. It is your
                                        responsibility to ensure compliance with all applicable local laws and
                                        regulations before engaging in any financial
                                        activities.
                                        <br/>
                                        <br/> <b>5. No Representation of Profit or Loss</b>
                                        <br/>
                                        No representation is being made that any account will or is likely to achieve
                                        profits or losses similar to those shown.
                                        Individual trading results may vary, and success in trading depends on various
                                        factors, including market conditions,
                                        individual skills, and risk tolerance.
                                        <br/>
                                        <br/> <b>6. Consultation with a Professional</b>
                                        <br/>
                                        Before making any financial decisions or engaging in trading activities, it is
                                        strongly advised that you seek the
                                        counsel of a qualified financial professional who can assess your individual
                                        circumstances and provide personalized
                                        guidance.
                                        <br/>
                                        <br/> <b>7. Jurisdictional Considerations</b>
                                        <br/>
                                        The Company's services may not be suitable for residents of all countries or
                                        jurisdictions. It is your responsibility to
                                        determine whether your access and use of the Company's services are compliant
                                        with local laws and regulations.
                                        <br/>
                                        <br/> <b>8. Not a Broker</b>
                                        <br/>
                                        Pro Traders Funding LLC is not a financial broker or dealer, and it does not
                                        accept deposits or provide investment
                                        management services. The Company operates as a performance evaluation platform.
                                        <br/>
                                        <br/>
                                        <b> 9. Institutional Liquidity Provider</b>
                                        <br/>
                                        The offered technical solution for Pro Traders Funding LLC's platforms and data
                                        feed is powered by an institutional
                                        liquidity provider.
                                        <br/>
                                        <br/> <b>10. Copyright Notice</b>
                                        <br/>
                                        Copyright © {year}. All rights reserved. Pro Traders Funding LLC.
                                        <br/>
                                        <br/>
                                        <b>11. Modification of Terms</b>
                                        <br/>
                                        Pro Traders Funding LLC reserves the right to modify or update these terms and
                                        disclaimers at any time. Users are
                                        encouraged to review this disclaimer regularly for any changes.
                                        <br/>
                                        <br/> <b>12. Funding Disclaimer</b>
                                        <br/>
                                        Funding provided by Pro Traders Fund is contingent upon traders meeting specific
                                        guidelines and criteria set by our
                                        platform. It is not to be construed as an investment or financial service. We do
                                        not accept external investments or
                                        provide investment advice.
                                        <br/>
                                        <br/>
                                        <b>13. Limitation of Liability</b>
                                        <br/>
                                        Pro Traders Fund shall not be liable to you or any third party for any damages,
                                        whether direct, indirect, incidental,
                                        special, consequential, or punitive arising out of or in connection with your
                                        access to or use of this website, its
                                        contents, or services, even if Pro Traders Fund has been advised of the
                                        possibility of such damages. Pro Traders Fund
                                        shall not be liable for any failure or delay in performing any obligation under
                                        these terms and conditions, whether or
                                        not such failure or delay is due to causes beyond its control.
                                        <br/>
                                        <br/> <b>14. Severability</b>
                                        <br/>
                                        Lastly, if any provision of the terms of service and legal documents are
                                        unenforceable or held illegal in a judicial
                                        proceeding, such provision shall be severed and held inoperative, whilst holding
                                        the remaining portion of this document
                                        operative and binding on both parties.
                                        <br/>
                                        <br/>
                                        This comprehensive disclaimer is intended to provide clarity and protection for
                                        both Pro Traders Fund and its users. It
                                        covers key aspects related to the company's services, risk disclosure, and
                                        liability limitations. Users are encouraged
                                        to review and understand these terms before using the platform. If you do not
                                        agree with the terms of this disclaimer or
                                        the information provided within the documents, please leave this website
                                        immediately.
                                    </p>
                                    <div className="w-full pt-4 m-auto text-center ">
                                        <a href="/terms">
                                            <p className="underline underline-offset-8">View Legal Documents</p>
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="flex items-center gap-2 mt-3">
                                            <a href="https://www.instagram.com/protradersfund" target="_blank">
                                                <img src={ig} alt="Pro Traders Fund Instagram Logo Icon"
                                                     className="me-3"/>
                                            </a>
                                            <a href="https://twitter.com/protradersfund" target="_blank">
                                                <img src={twitter} alt="Twitter" className="me-3"/>
                                            </a>
                                            <a href="https://www.youtube.com/@protradersfund" target="_blank">
                                                <img src={yt} alt="Youtube Logo" className="w-8 h-8 me-3"/>
                                            </a>
                                            <a href="https://discord.gg/SCXN2wSvvz" target="_blank">
                                                <img src={discord} alt="Pro Traders Fund Discord Logo Icon"
                                                     className="w-8 h-8 me-3"/>
                                            </a>
                                            <a href="https://www.tiktok.com/@protradersfund" target="_blank">
                                                <img src={tiktok} alt="Pro Traders Fund TikTok Logo Icon"
                                                     className="object-cover w-8 h-8 me-3"/>
                                            </a>

                                            <a href="https://www.trustpilot.com/review/protradersfund.com?stars=5"
                                               target="_blank">
                                                <div className="flex items-center gap-1">
                                                    <img src={trustpilot} alt="Pro Traders Fund Youtube Logo Icon"
                                                         className="object-contain h-8 w-7"/>
                                                    <span className="text-sm">Trustpilot</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="flex items-center h-6 gap-2 mt-3">
                                            <img src={btc} alt="" className="me-3"/>
                                            <img src={eth} alt="Pro Traders Fund Ethereum Payment" className="me-3"/>
                                            <img src={mastercard} alt="Master card" className="w-8 me-3"/>
                                            <img src={visa} alt="" className="w-8 me-3"/>
                                            <img src={cashapp} alt=""
                                                 className="object-contain h-6 w-7 aspect-square me-3"/>
                                            <img src={apple} alt="Apple Pay" className="w-8 me-3"/>

                                            <img src={google} alt="" className="w-8 me-3"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
