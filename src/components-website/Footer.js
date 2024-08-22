import React from 'react';
import logo from '../images/Pro Traders Fund Best Forex Broker Logo.png';
import ig from '../images/icons/Pro Traders Fund Instagram Logo Icon.svg';
import twitter from '../images/icons/Pro Traders Fund Twitter Logo Icon.svg';
import yt from '../images/icons/Pro Traders Fund Youtube Logo Icon.svg';
import btc from '../images/icons/Pro Traders Fund Bitcoin Payment Method.svg';
import eth from '../images/icons/Pro Traders Fund Ethereum Payment Method.svg';
import mastercard from '../images/icons/Pro Traders Fund Mastercard Payment Method.svg';
import visa from '../images/icons/Pro Traders Fund Visa Card Payment Method.svg';
import { Grid } from '@mui/material';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center text-lg-start bg-[#141518] text-white">
      {/*<DiscountBanner home={true}></DiscountBanner>*/}
      <section id="mainFooter" className="mainFooter">
        <div className="text-center container-fluid text-md-start ">
          <div>
            <div className="row py-[54px]">
              <Grid container spacing={2}>
                <Grid item md={3} lg={4} xl={3}>
                  <div className="flex justify-center mx-auto mt-4 ms-4">
                    <a href="/">
                      <img src={logo} alt="Pro Traders Fund Best Forex Broker Logo" className="mb-3 img-fluid" id="logo" />
                    </a>
                  </div>
                </Grid>
                <Grid item md={3} lg={4} xl={2}>
                  <div className="mt-4 space-y-3 text-left ms-4">
                    <h6 className="mb-2">How It Works</h6>
                    <p>
                      <a href="/#why">Why Pro Traders Fund?</a>
                    </p>
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
                </Grid>
                <Grid item md={3} lg={4} xl={2}>
                  <div className="mt-4 space-y-3 text-left ms-4">
                    <h6 className="mb-2">Legal</h6>
                    <p>
                      <a href="/terms">Terms & Conditions</a>
                    </p>
                    <p>
                      <a href="/terms#payment">Payment Procedure</a>
                    </p>
                    <p>
                      <a href="/terms#cancel">Cancelation Policy</a>
                    </p>
                    <p>
                      <a href="/terms#refund">Refund Policy</a>
                    </p>
                    <p>
                      <a href="/terms#privacy">Privacy Policy</a>
                    </p>
                  </div>
                </Grid>
                <Grid item md={3} lg={4} xl={2}>
                  <div className="mt-4 space-y-3 text-left ms-4">
                    <h6 className="mb-2">Trading Apps</h6>
                    <p>
                      <a href="https://www.metatrader5.com/en/download" target="_blank">
                        Download MT5 Windows
                      </a>
                    </p>
                    <p>
                      <a href="https://www.metatrader5.com/en/download" target="_blank">
                        Download MT5 Android
                      </a>
                    </p>

                    <p>
                      <a
                        href="https://trade.mql5.com/trade?servers=ApexCapitalMarkets-ECN&demo_server=ApexCapitalMarkets-ECN&version=5&mobile=1"
                        target="_blank"
                      >
                        Launch Webtrader
                      </a>
                    </p>
                  </div>
                </Grid>
                <Grid item md={3} lg={4} xl={3}>
                  <div className="mt-4 space-y-3 text-left ms-4 support">
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
              </Grid>
            </div>

            <div className="row bg-[#262729] py-[54px]">
              <div className="col">
                <div className="disclaimer lg:w-[1024px] md:w-[780px] text-left mx-auto px-4">
                  <p className="pb-3 copyright">© {year} Pro Traders Funding LLC . All rights reserved.</p>
                  <p>
                    All content published and distributed by Pro Traders Funding LLC, Pro Traders Fund, and its affiliates (collectively,
                    the “Company”) is to be treated as general information only. None of the information provided by the Company or
                    contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a
                    recommendation, endorsement, or sponsorship of any security, company, or fund. Use of the information contained on the
                    Company’s websites is at your own risk and the Company and assumes no responsibility or liability for any use or misuse
                    of such information. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex.
                    Past performance is not necessarily indicative of future results. <br /> Hypothetical or simulated performance results
                    have certain limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also,
                    because the trades have not actually been executed, the results may have under-or-over compensated for the impact, if
                    any, of certain market factors, such as lack of liquidity. Simulated trading programs, in general, are also subject to
                    the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or
                    is likely to achieve profit or losses similar to those shown. CFTC Rule 4.41
                  </p>
                  <div className="flex flex-wrap justify-between">
                    <div className="flex items-center mt-3">
                      <a href="https://www.instagram.com/protradersfund" target="_blank">
                        <img src={ig} alt="Pro Traders Fund Instagram Logo Icon" className="me-3" />
                      </a>
                      <a href="https://twitter.com/protradersfund" target="_blank">
                        <img src={twitter} alt="Pro Traders Fund Twitter Logo Icon" className="me-3" />
                      </a>
                      <a href="https://www.youtube.com/protradersfund" target="_blank">
                        <img src={yt} alt="Pro Traders Fund Youtube Logo Icon" className="w-8 h-8 me-3" />
                      </a>
                    </div>
                    <div className="flex items-center mt-3">
                      <img src={btc} alt="" className="me-3" />
                      <img src={eth} alt="" className="me-3" />
                      <img src={mastercard} alt="" className="w-8 me-3" />
                      <img src={visa} alt="" className="w-8 me-3" />
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
