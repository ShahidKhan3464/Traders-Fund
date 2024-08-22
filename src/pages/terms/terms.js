/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Navbar from '../../components-website/Navbar2';
import Footer from '../../components-website/FooterV2';

export default function Terms() {
  const [newto, setNewto] = useState(false);
  const [general, setGeneral] = useState(false);
  const [evalualtion, setEvalualtion] = useState(false);
  const [rules, setRules] = useState(false);
  const [orders, setOrders] = useState(false);
  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    const smoothScrollToElement = (element, duration) => {
      const targetElement = document.getElementById(element);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();

        const animation = currentTime => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          window.scrollTo(0, startPosition + distance * progress);

          if (progress < 1) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    };
    // Define the scrollBehavior function
    function scrollBehavior(targetId, yOffset, duration) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop + yOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();

        function easeInOutQuad(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        function animate(currentTime) {
          const timeElapsed = currentTime - startTime;

          window.scrollTo(0, easeInOutQuad(timeElapsed, startPosition, distance, duration));

          if (timeElapsed < duration) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      }
    }

    // Add smooth scroll behavior to links with hash fragments
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
        scrollBehavior(targetId, -150, 500); // Adjust the yOffset and duration as needed
      });
    });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <main className="bg-[#141518]  text-white">
        <section className="h-full flex flex-col items-center text-center py-[54px] bg-gradient-to-r from-[#1797F8] to-[#005046]">
          <div className="text-white md:w-[639px] px-2">
            <div className="space-y-4">
              {/* <p className="text-sm font-bold">Current as of 20 Jan 2022</p> */}
              <h1 className="font-bold md:text-[48px] text-[30px]">Terms & Conditions:</h1>
              <p>
                By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and
                agree that you are responsible for compliance with any applicable local laws.
              </p>
            </div>
          </div>
        </section>
        <section className="flex lg:px-[180px] py-[54px] mx-4 gap-4 justify-center ">
          <div className="hidden pl-10 text-xs sm:block md:text-base">
            <h1 className="py-1 text-sm underline md:text-lg underline-offset-4">Table of Contents</h1>
            <ol className="flex flex-col gap-2 list-decimal">
              <a href="#Introduction">
                {' '}
                <li className="cursor-pointer">Introduction</li>
              </a>
              <a href="#About">
                {' '}
                <li className="cursor-pointer">About Pro Traders Fund</li>
              </a>
              <a href="#Definitions">
                {' '}
                <li className="cursor-pointer">Definitions</li>
              </a>
              <a href="#UserAgreement">
                {' '}
                <li className="cursor-pointer">User Agreement</li>
              </a>
              <a href="#AcceptanceofTerms">
                {' '}
                <li className="cursor-pointer">Acceptance of Terms</li>
              </a>
              <a href="#UserEligibility">
                {' '}
                <li className="cursor-pointer">User Eligibility</li>
              </a>
              <a href="#DenialofService">
                {' '}
                <li className="cursor-pointer">Denial of Service</li>
              </a>
              <a href="#UserResponsibilities">
                {' '}
                <li className="cursor-pointer">User Responsibilities</li>
              </a>
              <a href="#CommunityConduct">
                {' '}
                <li className="cursor-pointer">Community Conduct and Legal Recourse</li>
              </a>
              <a href="#AccountInformation">
                <li className="cursor-pointer">Account Information</li>
              </a>
              <a href="#ExclusiveUse">
                <li className="cursor-pointer">Exclusive Use of Account and Prohibition of External Access</li>
              </a>
              <a href="#Compliance">
                <li className="cursor-pointer">Compliance</li>
              </a>
              <a href="#OperationalFocus">
                <li className="cursor-pointer">Operational Focus</li>
              </a>
              <a href="#PaymentProcedure">
                <li className="cursor-pointer">Payment Procedure</li>
              </a>
              <a href="#GlobalOperations">
                <li className="cursor-pointer">Global Operations</li>
              </a>
              <a href="#StructuredCompliance">
                <li className="cursor-pointer">Structured Compliance</li>
              </a>
              <a href="#EducationalContent">
                <li className="cursor-pointer">Educational Content</li>
              </a>
              <a href="#DocumentedPolicies">
                <li className="cursor-pointer">Documented Policies</li>
              </a>
              <a href="#RiskManagement">
                <li className="cursor-pointer">Risk Management</li>
              </a>
              <a href="#NonAdvisoryRole">
                <li className="cursor-pointer">Non-Advisory Role</li>
              </a>
              <a href="#DisclaimerofWarrantiesandLimitationofLiabilities">
                <li className="cursor-pointer">Disclaimer of Warranties and Limitation of Liabilities</li>
              </a>
              <a href="#DisputeResolutionandArbitration">
                <li className="cursor-pointer">Dispute Resolution and Arbitration</li>
              </a>
              <a href="#AmendmentstoTermsandConditions">
                <li className="cursor-pointer">Amendments to Terms and Conditions</li>
              </a>
              <a href="#CommunicationPreferences">
                <li className="cursor-pointer">Communication Preferences</li>
              </a>
              <a href="#CustomerSupport">
                <li className="cursor-pointer">Customer Support</li>
              </a>
              <a href="#GoverningLaw">
                <li className="cursor-pointer">Governing Law</li>
              </a>
              <a href="#SecurityMeasures">
                <li className="cursor-pointer">Security Measures</li>
              </a>
              <a href="#CookiesandTracking">
                <li className="cursor-pointer">Cookies and Tracking</li>
              </a>
              <a href="#UserObligations">
                <li className="cursor-pointer">User Obligations</li>
              </a>
              <a href="#ThirdPartyServices">
                <li className="cursor-pointer">Third-Party Services</li>
              </a>
              <a href="#Confidentiality">
                <li className="cursor-pointer">Confidentiality</li>
              </a>
              <a href="#IntellectualPropertyRights">
                <li className="cursor-pointer">Intellectual Property Rights</li>
              </a>
              <a href="#UserReviewsandFeedback">
                <li className="cursor-pointer">User Reviews and Feedback</li>
              </a>
              <a href="#FutureFeaturesandServices">
                <li className="cursor-pointer">Future Features and Services</li>
              </a>
              <a href="#ClientProtection">
                <li className="cursor-pointer">Client Protection</li>
              </a>
              <a href="#FinancialAdvice">
                <li className="cursor-pointer">Financial Advice</li>
              </a>
              <a href="#TraderIndependence">
                <li className="cursor-pointer">Trader Independence</li>
              </a>
              <a href="#FundingandEvaluationCriteria">
                <li className="cursor-pointer">Funding and Evaluation Criteria</li>
              </a>
              <a href="#PaymentandFundingPolicy">
                <li className="cursor-pointer">Payment and Funding Policy</li>
              </a>
              <a href="#PayoutSplitStructure">
                <li className="cursor-pointer">Payout Split Structure</li>
              </a>
              <a href="#RefundPolicy">
                <li className="cursor-pointer">Refund Policy</li>
              </a>
              <a href="#PaymentCancellationPolicy">
                <li className="cursor-pointer">Payment Cancellation Policy</li>
              </a>
              <a href="#CancellationPolicyforFundedTraderAgreements">
                <li className="cursor-pointer">Cancellation Policy for Funded Trader Agreements</li>
              </a>
              <a href="#KYCandAMLPolicy">
                <li className="cursor-pointer">KYC and AML Policy</li>
              </a>
              <a href="#PrivacyPolicy">
                <li className="cursor-pointer">Privacy Policy</li>
              </a>
              <a href="#RiskDisclosure">
                <li className="cursor-pointer">Risk Disclosure</li>
              </a>
              <a href="#Giveaways">
                <li className="cursor-pointer">Giveaways and Promotions Terms and Conditions</li>
              </a>
              <a href="#Conclusion">
                <li className="cursor-pointer">Conclusion</li>
              </a>
              <a href="#ContactUs">
                <li className="cursor-pointer">Contact Us</li>
              </a>
            </ol>
          </div>

          <div className="md:w-[80%] w-[90%] space-y-4 md:text-base text-sm scroll-mt-[150px]">
            <div className="space-y-3 " id="Introduction">
              <span className="text-2xl font-medium text-[30px]">Introduction</span>
              <p>
                Welcome to Pro Traders Fund, an innovative e-commerce platform powered by AI-driven software, dedicated to evaluating
                trading performance and providing funding opportunities. These Terms and Conditions ("Terms") govern your use of our website
                and services. By accessing or using our platform, you agree to these Terms. If you do not agree, please do not use our
                services.
              </p>
            </div>
            <div className="space-y-3 " id="About">
              <span className="text-2xl font-medium text-[30px]">About Pro Traders Fund</span>
              <p>
                <b>Vision:</b> <br /> Pro Traders Fund's vision is to be the global leader in providing aspiring and experienced traders
                with innovative, accessible, and transparent opportunities to advance their trading careers. We aim to create a community of
                successful traders empowered by our AI-driven performance evaluation platform and funding solutions.
              </p>
              <p>
                <b>Mission:</b> <br /> Our mission at Pro Traders Fund is to:
              </p>
              <ul className="pl-5 space-y-1 list-disc">
                <li>
                  <b>Empower Traders:</b> We leverage cutting-edge AI technology to rigorously assess and verify traders' performance based
                  on a comprehensive set of rules and guidelines.
                </li>
                <li>
                  <b>Provide Funding Opportunities:</b> Traders who meet our stringent criteria and guidelines have the opportunity to
                  access funding opportunities and manage a portion of our private fund as independent contractors.
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
              </ul>

              <p>
                In summary, Pro Traders Fund is an innovative e-commerce platform powered by AI-driven software that evaluates trading
                performance. We rigorously assess and verify traders' performance based on a comprehensive set of rules and guidelines.
                Those who meet our stringent criteria and guidelines have the opportunity to access funding opportunities and manage a
                portion of our private fund as independent contractors.
              </p>
            </div>
            <div className="space-y-3 " id="Definitions">
              <span className="text-2xl font-medium text-[30px]">Definitions</span>
              <p>In this document:</p>
              <ul className="pl-5 space-y-1 list-disc">
                <li>"Pro Traders Fund," "we," "us,", “our”, or "the company" refers to Pro Traders Funding LLC.</li>
                <li>"Site" means our website, www.protradersfund.com, and all its services and interactions.</li>
                <li>"User", "you", “your”, “Contractor” refers to anyone accessing or using our platform.</li>
                <li>"Services" include all features, tools, and information provided by Pro Traders Fund.</li>
                <li>"Privacy Policy" refers to our policy governing the collection and use of user data.</li>
                <li>"AML" refers to Anti Money Laundering.</li>
                <li>"KYC" refers to Know Your Customer.</li>
                <li>Services: Refers collectively to our website, evaluation process, funding opportunities, and any related features.</li>
                <li>Trader: A user who participates in our evaluation process and, if successful, becomes eligible for funding.</li>
                <li>Funding: Provision of capital to traders to manage in accordance with our guidelines.</li>
                <li>Content: All information, data, text, graphics, and materials provided on our platform.</li>
              </ul>
            </div>

            <div className="space-y-3 " id="UserAgreement">
              <span className="text-2xl font-medium text-[30px]">User Agreement</span>
              <p>
                By signing up for Pro Traders Fund, you ("User") enter into a binding agreement with Pro Traders Fund, LLC, LTD ("Pro
                Traders Fund," "we," "us," or "our"). This User Agreement ("Agreement") outlines the terms and conditions governing your use
                of our services. Please read this Agreement carefully and ensure your full understanding of its provisions before using our
                platform. If you do not agree with these terms, please do not proceed with our services. We reserve the right to deny
                services to customers who exceed our risk tolerance.
              </p>
            </div>
            <div className="space-y-3 " id="AcceptanceofTerms">
              <span className="text-2xl font-medium text-[30px]">Acceptance of Terms</span>
              <ul className="pl-5 list-disc ">
                <li>
                  <b>Acknowledgment:</b> By using our platform, you acknowledge that you have read, understood, accepted and agreed to abide
                  by the terms and conditions of this agreement and, our Refund Policy, KYC Policy, AML Policy, Privacy Policy, and all
                  other policies referenced herein. If you do not agree with any part of these Terms, please do not use our services.
                </li>
                <li>
                  <b>Updates: </b>
                  Pro Traders Fund reserves the right to modify or update this Agreement at any time without prior notice. It is your
                  responsibility to regularly review this Agreement for any changes. Continued use of our services after modifications
                  constitutes your acceptance of the revised terms.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="UserEligibility">
              <span className="text-2xl font-medium text-[30px]">User Eligibility</span>

              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Age of Consent: Users must be at or above the age of consent required to use online services in their respective
                  jurisdictions. If you do not meet this age requirement, you may only use our site and services with the explicit
                  permission of a parent or legal guardian.
                </li>
                <li>
                  Evaluation Challenge: To participate in our program, traders must successfully pass our evaluation challenge. There are no
                  other qualifications or prerequisites. We value and prioritize a consistent, profitable trading track record as the
                  primary qualification for our program.
                </li>
                <li>
                  Equal Opportunity: At Pro Traders Fund, we believe in equal opportunities for all traders. Each trader, regardless of
                  their background or location, has the same opportunities as their peers in our program.
                </li>
              </ul>
              <p>
                We are committed to providing a fair and inclusive environment for traders worldwide, and we evaluate traders based on their
                trading performance rather than any other qualification. <br /> <br /> If you have any questions or require further
                clarification regarding our user eligibility criteria, please don't hesitate to contact us at support@protradersfund.com.
              </p>
            </div>
            <div className="space-y-3 " id="DenialofService">
              <span className="text-2xl font-medium text-[30px]">Denial of Services</span>
              <p>
                Pro Traders Fund reserves the right to deny access to its services to any User at its sole discretion, without providing a
                reason. We may refuse service to Users who exceed our risk tolerance, violate our policies, or pose a potential risk to our
                platform.
              </p>
            </div>

            <div className="space-y-3 " id="UserResponsibilities">
              <span className="text-2xl font-medium text-[30px]">User Responsibilities</span>
              <p>
                <b>Account Security</b>
              </p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>a. Confidentiality:</b> <br />
                  Users are solely responsible for maintaining the security and confidentiality of their accounts, including usernames,
                  passwords and all access credentials. You are prohibited from sharing your login details with any third party. Any
                  unauthorized use of your account must be reported to us immediately.
                </li>

                <li>
                  <b>b .Unauthorized Access:</b> <br />
                  Pro Traders Fund is not liable for any losses incurred due to unauthorized access to your account. It is your
                  responsibility to secure your login information.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="CommunityConduct">
              <span className="text-2xl font-medium text-[30px]">Community Conduct and Legal Recourse</span>

              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>a. Respectful Communication:</b> <br />
                  Members of the Pro Traders Fund community are required to communicate with respect and integrity. Bullying, hate speech,
                  and defamation, including the spreading of falsehoods or unsubstantiated claims, are expressly prohibited.
                </li>

                <li>
                  <b>b. Reputation and Brand Protection:</b> <br />
                  Members must avoid public disparagement of Pro Traders Fund, including in private groups or individual discussions.
                  Allegations or use of defamatory language such as "scam," "thief," or "fraud" without evidence are detrimental to the
                  reputation of Pro Traders Fund and are strictly forbidden.
                </li>
                <li>
                  <b>c. Resolution of Grievances:</b> <br />
                  Should concerns arise, members are obliged to address them through official channels by contacting support at
                  support@protradersfund.com. Pro Traders Fund prioritizes constructive resolution of issues and values direct
                  communication.
                </li>
                <li>
                  <b>d. Enforcement and Consequences: paragraph a & b should be joined as well as paragraph d & e. </b> <br />
                  Violations of this policy, including defamation and the spreading of lies, will result in permanent banning and
                  deactivation of all related accounts and services. Pro Traders Fund reserves the right to pursue legal action against any
                  individual or entity that engages in such harmful conduct.
                </li>
                <li>
                  <b>e. Legal Recourse: </b> <br />
                  Pro Traders Fund takes its reputation seriously and will consider court action to address any defamatory acts, lies, or
                  other unlawful behaviors that could damage the company’s standing. This legal recourse is intended to deter such actions
                  and maintain the integrity of the Pro Traders Fund community.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="AccountInformation">
              <span className="text-2xl font-medium text-[30px]">Account Information</span>
              <ul className="pl-5 list-disc ">
                <li>
                  <b>Accuracy: </b>
                  <br />
                  You agree to provide accurate, current, and complete information during the registration process. It is your
                  responsibility to update your account information promptly should any changes occur.
                </li>
              </ul>
            </div>

            <div className="space-y-3 " id="ExclusiveUse">
              <span className="text-2xl font-medium text-[30px]">Exclusive Use of Account and Prohibition of External Access</span>

              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>a. Exclusive Use by Contractor:</b> <br />
                  he User shall use the trading account(s) provided by Pro Traders Funding LLC exclusively for the purpose of performing
                  contracted services. The User acknowledges that the account and any associated services are non-transferable and are
                  strictly limited to their personal use.
                </li>

                <li>
                  <b>b. Prohibition of External Access:</b> <br />
                  The User agrees not to grant access to, share, or disclose any details of the trading account(s), including login
                  credentials, with any external parties. This includes prohibiting any external party from taking any action on the
                  account(s) provided by the Company.
                </li>
                <li>
                  <b>c. No Delegation or Assignment:</b> <br />
                  The User is prohibited from delegating or assigning any of their trading activities or responsibilities under this
                  Agreement to any third party. All trading and related activities must be conducted personally by the User.
                </li>
                <li>
                  <b>d. Liability and Reporting:</b> <br />
                  Pro Traders Fund is not liable for any losses incurred due to unauthorized access to the Contractor’s account. It is the
                  User's responsibility to secure their login information and to immediately report any unauthorized use of their account to
                  Pro Traders Fund.
                </li>
                <li>
                  <b>e. Acknowledgment of Risk and Security Measures:</b> <br />
                  The User acknowledges that sharing account details jeopardizes the security of the account and the integrity of Pro
                  Traders Fund’s trading ecosystem. In cases of breach, Pro Traders Fund reserves the right to take necessary measures to
                  protect its interests and those of its clients, including terminating the account.
                </li>
                <li>
                  <b>f. Consequences of Breach:</b> <br />
                  Any breach of this clause will result in immediate forfeiture of the Contractor’s trading account(s) and/or termination of
                  this Agreement. Such a breach will be considered a material violation of the terms of the Agreement and may lead to legal
                  action, in addition to forfeiture of any commissions or payments due.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="Compliance">
              <span className="text-2xl font-medium text-[30px]">Compliance</span>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>
                    <p>Regulatory Compliance: </p>
                  </b>
                  Pro Traders Fund is committed to full compliance with the terms and conditions stipulated by all regulatory authorities,
                  government bodies, payment processors, and third-party service providers ("Providers") with which it integrates. This
                  commitment ensures that Pro Traders Fund, its clients, do not engage in any activities that contravene the policies and
                  regulations set forth by these Providers.
                </li>
                <li>
                  <b>
                    <p>Restricted Business Activities: </p>
                  </b>
                  Pro Traders Fund strictly prohibits and does not engage in or facilitate any of the following restricted business
                  activities, as determined by its Providers:
                  <ul className="pl-5 space-y-1 list-decimal ">
                    <li>Sale or distribution of illegal products and services.</li>
                    <li>
                      Involvement with illegal drugs, substances designed to mimic illegal drugs, or equipment designed for making or using
                      drugs.
                    </li>
                    <li>Providing fake references or ID-providing services.</li>
                    <li>
                      Engagement in unlawful violence, physical harm, or promotion of such activities based on race, religion, disability,
                      gender, sexual orientation, national origin, or any other immutable characteristic.
                    </li>
                    <li>Any other products or services that are in violation of local laws or regulations.</li>
                  </ul>
                </li>
                <li>
                  <b>
                    <p>Financial Services: </p>
                  </b>
                  Pro Traders Fund does not provide or engage in lending services, insurance services, or any other financial services that
                  may be restricted by its Providers.
                </li>
                <li>
                  <b>
                    <p>International Restrictions: </p>
                  </b>
                  Pro Traders Fund ensures that its services are not used for any dealings in jurisdictions or with individuals deemed high
                  risk by its Providers. Clients must not originate from or conduct business in these regions.
                </li>
                <li>
                  <b>
                    <p>Guidelines and Policies: </p>
                  </b>
                  Users must use our services in strict accordance with our guidelines and policies, including but not limited to Anti-Money
                  Laundering (AML) and Know Your Customer (KYC) procedures.
                </li>

                <li>
                  <b>
                    <p>Laws and Regulations: </p>
                  </b>
                  Users must comply with all applicable local, national, and international laws and regulations while using our services.
                  You acknowledge that it is your responsibility to understand and adhere to these laws.
                </li>
                <li>
                  <b>
                    <p>Regular Compliance Checks: </p>
                  </b>
                  Pro Traders Fund conducts routine compliance checks to ensure that its activities and clients do not contravene any
                  policies and regulations established by its Providers. Any user found to be in violation will be subject to account
                  suspension or termination.
                </li>
              </ul>{' '}
              <p>
                By accepting these terms, clients acknowledge their understanding of and compliance with these policies as established by
                Pro Traders Fund and its Providers.
              </p>
            </div>
            <div className="space-y-3 " id="OperationalFocus">
              <span className="text-2xl font-medium text-[30px]">Operational Focus</span>
              <p>
                Our platform operates as an AI-driven performance evaluation platform designed to assess traders' skills. We do not provide
                investment advice, manage funds for others, or operate as a broker or direct liquidity provider.
              </p>
            </div>
            <div className="space-y-3 " id="PaymentProcedure">
              <span className="text-2xl font-medium text-[30px]">Payment Procedure</span>
              <p>
                Payments for our services are made online through third-party payment processors. We do not accept payments via email,
                phone, social media, or in person. Users must complete all required payment authorization forms and verification processes.
                We reserve the right to deny any suspicious or high risk payment.
              </p>
            </div>
            <div className="space-y-3 " id="GlobalOperations">
              <span className="text-2xl font-medium text-[30px]">Global Operations</span>
              <p>
                Our trading entities are based internationally and not directed at residents of any jurisdiction where the activities of Pro
                Traders Fund and its affiliates are restricted or prohibited by local laws or regulations. We offer our services globally
                but do not target residents of jurisdictions where our activities may be restricted by local laws or regulations. It is your
                responsibility to ensure compliance with local laws.
              </p>
            </div>
            <div className="space-y-3 " id="StructuredCompliance">
              <span className="text-2xl font-medium text-[30px]">Structured Compliance</span>
              <p>
                We have established a structure that aligns with current regulatory requirements and ensures ongoing compliance. This
                structure covers all aspects of our service, from evaluation to funding.
              </p>
            </div>
            <div className="space-y-3 " id="EducationalContent">
              <span className="text-2xl font-medium text-[30px]">Educational Content</span>
              <p>
                Articles and market analyses on our website are prepared by authors in their personal capacity and should not be considered
                financial advice. We provide informational content to help traders make informed decisions.
              </p>
            </div>
            <div className="space-y-3 " id="DocumentedPolicies">
              <span className="text-2xl font-medium text-[30px]">Documented Policies</span>
              <p>
                We have a comprehensive set of policies, including Legal information, Disclaimers, Acceptable Use Policy, Privacy Policy,
                Cookie Policy, Anti Money Laundering, and KYC policies. These documents are available in English, and users are encouraged
                to review them.
              </p>
            </div>
            <div className="space-y-3 " id="RiskManagement">
              <span className="text-2xl font-medium text-[30px]">Risk Management</span>
              <p>
                Risk Management We emphasize risk management and have established specific guidelines for evaluating traders' performance.
                Successful traders who meet our criteria are funded and operate as independent contractors.
              </p>
            </div>
            <div className="space-y-3 " id="NonAdvisoryRole">
              <span className="text-2xl font-medium text-[30px]">Non-Advisory Role</span>
              <p>
                We do not provide trading advice, recommendations, or guidance. Our focus is on evaluating and supporting traders who
                perform well within our guidelines.
              </p>
            </div>
            <div className="space-y-3 " id="DisclaimerofWarrantiesandLimitationofLiabilities">
              <span className="text-2xl font-medium text-[30px]">Disclaimer of Warranties and Limitation of Liabilities:</span>{' '}
              <p>
                By accessing Pro Traders Funding LLC, Pro Traders Funding Limited Ltd., Pro Traders Fund, or any of its affiliates'
                (collectively, "PTF") website, you acknowledge and agree that you have read, understood, and agreed to be bound by the
                following disclaimer of warranties and limitation of liabilities:
                <br /> <br />
                <b> 1. General Information</b> <br />
                All content published and distributed by Pro Traders Funding LLC and its affiliates (collectively, "the Company") is
                provided for informational and educational purposes only. None of the information provided by the Company or contained
                herein should be construed as investment advice, an offer or solicitation of an offer to buy or sell securities,
                commodities, or financial instruments. The Company does not provide personalized investment advice or manage funds for
                others.
                <br /> <br />
                <b>2. Risk Disclosure</b> <br />
                Trading in financial markets involves substantial risk, including the risk of losing a significant portion or all of your
                capital. However, it is crucial to understand that the capital allocated during various phases of our program does not
                belong to the trader. <br />
              </p>
              <ul className="pl-10 space-y-1 list-disc ">
                <li>
                  <b>Evaluation Phase Capital:</b> During the evaluation phase, traders are working with virtual funds placed within demo
                  accounts. These funds are not real capital and carry no personal financial risk to the trader.
                </li>
                <li>
                  <b>Funded Phase Capital:</b> In the funded phase, traders utilize capital extended by Pro Traders Fund, distinct from
                  personal ownership by the trader. The Company maintains complete control (custody) of the funds at all times, with all
                  profits generated deemed as company assets. The distribution of payment is considered a commission for services rendered
                  by the independent contractor considering that all requirements are met. Consequently, in the event of any breach of
                  contractual terms by the independent contractor, entitlement to payment will be forfeited.
                </li>
                <li>
                  <b>Risk Management Criteria:</b> To mitigate risk and protect our private fund, specific risk management parameters are in
                  place. Traders are required to operate within these predefined guidelines. Any breach of these criteria results in
                  automatic forfeiture, as it indicates a failure to trade within our established risk tolerance.
                </li>
                <li>
                  <b>Information Disclaimer:</b> The information provided on the Company's websites and platforms is not intended as a
                  specific investment recommendation, business guidance, or an analysis of investment opportunities. It should never be
                  considered a substitute for professional financial advice.
                </li>
              </ul>
              <p>
                We encourage all traders to approach their trading activities with the responsibility that comes with managing our private
                fund's capital. Understanding the unique structure of our program is fundamental to your success. If you have any questions
                or concerns regarding this structure, please do not hesitate to contact us for further clarification.
              </p>
              <br />
              <p>
                {' '}
                <b>3. Past Performance</b> <br />
                Any mention of past performance is not indicative of future results. Hypothetical or simulated performance results have
                inherent limitations and do not represent actual trading. They may have under- or over-compensated for market factors, such
                as lack of liquidity, and are based on historical data.
                <br /> <br /> <b>4. Compliance with Laws</b> <br />
                Pro Traders Fund is committed to rigorous adherence to all applicable local and international laws and regulations. Our
                trading activities are meticulously structured to align with prevailing legal frameworks. Traders are expressly informed
                that engagement with our services is contingent upon their responsibility to ensure compliance with local laws governing
                financial transactions and trading activities. In the event of any suspicion or evidence of breach, fraudulent conduct, or
                any prohibited activities, Pro Traders Fund reserves the right to take appropriate measures, including the forfeiture of
                user accounts, in compliance with legal and regulatory obligations. Additionally, our payment processing protocols strictly
                adhere to industry standards, employing reputable third-party processors and ensuring the utmost security for our clients.
                The Company's services and information are intended solely for educational and research purposes related to trading on
                financial markets. They do not constitute an offer to conduct regulated financial activities. It is your responsibility to
                ensure compliance with all applicable local laws and regulations before engaging in any financial activities.
                <br />
                <br /> <b>5. No Representation of Profit or Loss</b>
                <br />
                No representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
                Individual trading results may vary, and success in trading depends on various factors, including market conditions,
                individual skills, and risk tolerance.
                <br />
                <br /> <b>6. Consultation with a Professional</b>
                <br />
                Before making any financial decisions or engaging in trading activities, it is strongly advised that you seek the counsel of
                a qualified financial professional who can assess your individual circumstances and provide personalized guidance.
                <br />
                <br /> <b>7. Jurisdictional Considerations</b>
                <br />
                The Company's services may not be suitable for residents of all countries or jurisdictions. It is your responsibility to
                determine whether your access and use of the Company's services are compliant with local laws and regulations.
                <br />
                <br /> <b>8. Not a Broker</b>
                <br />
                Pro Traders Funding LLC is not a financial broker or dealer, and it does not accept deposits or provide investment
                management services. The Company operates as a performance evaluation platform.
                <br />
                <br />
                <b> 9. Institutional Liquidity Provider</b>
                <br />
                The offered technical solution for Pro Traders Funding LLC's platforms and data feed is powered by an institutional
                liquidity provider.
                <br />
                <br /> <b>10. Copyright Notice</b>
                <br />
                Copyright © {year}. All rights reserved. Pro Traders Funding LLC.
                <br />
                <br />
                <b>11. Modification of Terms</b>
                <br />
                Pro Traders Funding LLC reserves the right to modify or update these terms and disclaimers at any time. Users are encouraged
                to review this disclaimer regularly for any changes.
                <br />
                <br /> <b>12. Funding Disclaimer</b>
                <br />
                Funding provided by Pro Traders Fund is contingent upon traders meeting specific guidelines and criteria set by our
                platform. It is not to be construed as an investment or financial service. We do not accept external investments or provide
                investment advice.
                <br />
                <br />
                <b>13. Limitation of Liability</b>
                <br />
                Pro Traders Fund shall not be liable to you or any third party for any damages, whether direct, indirect, incidental,
                special, consequential, or punitive arising out of or in connection with your access to or use of this website, its
                contents, or services, even if Pro Traders Fund has been advised of the possibility of such damages. Pro Traders Fund shall
                not be liable for any failure or delay in performing any obligation under these terms and conditions, whether or not such
                failure or delay is due to causes beyond its control.
                <br />
                <br /> <b>14. Severability</b>
                <br />
                Lastly, if any provision of the terms of service and legal documents are unenforceable or held illegal in a judicial
                proceeding, such provision shall be severed and held inoperative, whilst holding the remaining portion of this document
                operative and binding on both parties.
                <br />
                <br />
                This comprehensive disclaimer is intended to provide clarity and protection for both Pro Traders Fund and its users. It
                covers key aspects related to the company's services, risk disclosure, and liability limitations. Users are encouraged to
                review and understand these terms before using the platform. If you do not agree with the terms of this disclaimer or the
                information provided within the documents, please leave this website immediately.
              </p>
            </div>
            <div className="space-y-3 " id="DisputeResolutionandArbitration">
              <span className="text-2xl font-medium text-[30px]">Dispute Resolution and Arbitration </span>

              <b>
                {' '}
                <p>Dispute Resolution:</p>
              </b>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Any dispute, controversy, or claim arising out of or relating to this Agreement, including its formation, interpretation,
                  performance, breach, or termination, or any related product or service (hereinafter referred to as "Dispute"), shall first
                  be attempted to be resolved through good faith negotiations between the Parties.
                </li>
                <li>
                  If the Parties are unable to resolve the Dispute within [30] days of the initiation of negotiations, either Party may
                  initiate binding arbitration as provided herein.
                </li>
              </ul>
              <b>
                <p>Arbitration:</p>
              </b>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Any Dispute not resolved through negotiation shall be submitted to arbitration administered by an arbitration organization
                  operating in Jamaica, such as the [Jamaica International Arbitration Centre (JIAC)] or any other organization mutually
                  agreed upon by the Parties (hereinafter referred to as the "Arbitration Organization").
                </li>
                <li>
                  The arbitration shall be conducted in accordance with the rules and procedures of the Arbitration Organization in effect
                  at the time of the arbitration, except as they may be modified herein or by mutual agreement of the Parties.
                </li>
                <li>
                  The language of the arbitration shall be English, and the arbitration hearing shall take place in [Kingston, Jamaica],
                  unless the Parties agree otherwise in writing.
                </li>
                <li>
                  The arbitral tribunal shall consist of [one/three] arbitrator(s) appointed in accordance with the rules of the Arbitration
                  Organization.
                </li>
                <li>
                  The arbitral award shall be final and binding on both Parties, and judgment upon the award may be entered in any court of
                  competent jurisdiction.
                </li>
              </ul>
              <b>
                <p>Costs:</p>
              </b>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  The costs of the arbitration, including the fees of the arbitrator(s), shall be borne equally by the Parties, unless the
                  arbitral tribunal determines otherwise in its award.
                </li>
              </ul>
              <b>
                <p>Equitable Remedies:</p>
              </b>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Notwithstanding the foregoing, either Party may seek equitable relief, including injunctive relief, in a court of
                  competent jurisdiction to protect its intellectual property rights or confidential information.
                </li>
              </ul>
              <b>
                <p>Governing Law and Jurisdiction:</p>
              </b>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  This Agreement shall be governed by and construed in accordance with the laws of Jamaica, without regard to its conflict
                  of law principles.
                </li>
                <li>
                  Any action arising out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the courts of
                  Jamaica.
                </li>
              </ul>
              <b>
                <p> Waiver of Class Actions:</p>
              </b>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Any disputes subject to arbitration under this clause shall be conducted on an individual basis only, and not on a class,
                  collective, or representative basis. No party may bring a claim in a representative capacity, whether as a class
                  representative, private attorney general, or otherwise.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="AmendmentstoTermsandConditions">
              <span className="text-2xl font-medium text-[30px]">Amendments to Terms and Conditions</span>
              <p>
                We reserve the right to amend these Terms at any time without notice. Any changes will be effective immediately upon posting
                on the site. Your continued use of our platform after such changes constitutes acceptance of the updated Terms.
              </p>
            </div>
            <div className="space-y-3 " id="CommunicationPreferences">
              <span className="text-2xl font-medium text-[30px]">Communication Preferences</span>
              <p>
                Users can manage their communication preferences, including marketing emails, through their account settings. Opting out of
                certain communications may impact access to specific features.
              </p>
            </div>
            <div className="space-y-3 " id="CustomerSupport">
              <span className="text-2xl font-medium text-[30px]">Customer Support</span>
              <p>
                For inquiries, concerns, or support, users can reach us at support@protradersfund.com , our Contact Us page or use the live
                chat on our website: www.protradersfund.com.
              </p>
            </div>
            <div className="space-y-3 " id="GoverningLaw">
              <span className="text-2xl font-medium text-[30px]">Governing Law</span>
              <p>
                These Terms are governed by the laws of Jamaica. Users agree that any legal actions related to these Terms will be filed and
                adjudicated in Jamaica's courts.
              </p>
            </div>
            <div className="space-y-3 " id="SecurityMeasures">
              <span className="text-2xl font-medium text-[30px]">Security Measures</span>
              <p>
                We implement stringent security measures to protect user data. Any suspected data breaches will be promptly reported to
                users and applicable regulators.
              </p>
            </div>
            <div className="space-y-3 " id="CookiesandTracking">
              <span className="text-2xl font-medium text-[30px]">Cookies and Tracking</span>
              <p>
                Our platform uses cookies and tracking technologies. Users can manage their cookie preferences in their browser settings.
              </p>
            </div>

            <div className="space-y-3 " id="ThirdPartyServices">
              <span className="text-2xl font-medium text-[30px]">Third-Party Services</span>
              <p>
                Our platform may contain links to third-party websites. We disclaim responsibility for the content or actions of these third
                parties.
              </p>
            </div>
            <div className="space-y-3 " id="Confidentiality">
              <span className="text-2xl font-medium text-[30px]">Confidentiality</span>
              <p>
                User data is treated confidentially and in accordance with applicable data protection laws. For more details, refer to our
                Privacy Policy.
              </p>
            </div>
            <div className="space-y-3 " id="IntellectualPropertyRights">
              <span className="text-2xl font-medium text-[30px]">Intellectual Property Rights</span>
              <p>
                Pro Traders Fund retains all rights, title, and interest in and to its website, services, and all underlying technology and
                data including any enhancements and improvements thereto as a result of feedback, suggestions, or recommendations by you or
                any other party. All content and trademarks contained on our website are the sole property of Pro Traders Fund or their
                respective owners. Unauthorized use, reproduction, modification, distribution, or storage of any content for purposes other
                than using our services as expressly permitted by Pro Traders Fund is strictly prohibited. As a user of our services, you
                agree not to infringe upon Pro Traders Fund’s intellectual property or use it for any unlawful or unauthorized purpose.
                Violation of this clause may result in legal action and termination of your access to our services.
              </p>
            </div>
            <div className="space-y-3 " id="UserReviewsandFeedback">
              <span className="text-2xl font-medium text-[30px]">User Reviews and Feedback</span>
              <p>
                Users are encouraged to provide feedback and reviews on our services. We may use this feedback for improvement and
                promotional purposes.
              </p>
            </div>
            <div className="space-y-3 " id="FutureFeaturesandServices">
              <span className="text-2xl font-medium text-[30px]">Future Features and Services</span>
              <p>We reserve the right to add, modify, or discontinue features and services on our platform as we see fit.</p>
            </div>
            <div className="space-y-3 " id="ClientProtection">
              <span className="text-2xl font-medium text-[30px]">Client Protection</span>
              <p>
                At Pro Traders Fund, we want to emphasize that our clients do not hold direct assets with our organization. Instead, they
                are granted access to a secure and transparent trading environment facilitated through our extensive network of third-party
                providers and reputable brokers. Our utmost priority is safeguarding our clients' interests. <br />
                <br />
                Our unique evaluation process is meticulously crafted to strike a balance between offering opportunities for talented
                traders and mitigating potential risks. We firmly believe in providing a platform that empowers skilled individuals while
                maintaining the highest standards of security and integrity.
                <br />
                <br />
                To uphold this commitment, we have established stringent security measures to protect both our clients and our company. One
                crucial aspect of this security framework is the strict prohibition against sharing login credentials, including passwords
                and other access details, with any third parties.
                <br />
                <br />
                This prohibition serves as a critical safeguard. It not only shields our clients from potential security breaches but also
                fortifies the integrity of our trading ecosystem. In the event of a breach where login credentials are shared, we must take
                stringent action to protect both the client and our organization.
                <br />
                <br />
                As such, it is imperative for clients to understand that sharing login details is strictly prohibited. Doing so jeopardizes
                the security of the account and the investments therein. In such cases, we regrettably reserve the right to take measures,
                including the potential termination of the account, as a means of safeguarding both the client's interests and the integrity
                of our platform.
                <br />
                <br />
                This policy is implemented not only to protect our clients but also to maintain the highest level of trust and security
                within our trading community. We remain steadfast in our commitment to providing a secure, transparent, and rewarding
                trading experience for all our valued clients.
              </p>
            </div>
            <div className="space-y-3 " id="FinancialAdvice">
              <span className="text-2xl font-medium text-[30px]">Financial Advice</span>
              <p>
                We do not provide financial advice, and nothing on our platform should be considered as such. Users are solely responsible
                for their trading decisions.
              </p>
            </div>
            <div className="space-y-3 " id="TraderIndependence">
              <span className="text-2xl font-medium text-[30px]">Trader Independence</span>
              <p>Funded traders operate independently and are responsible for their trading activities, strategies, and decisions.</p>
            </div>
            <div className="space-y-3 " id="FundingandEvaluationCriteria">
              <span className="text-2xl font-medium text-[30px]">Funding and Evaluation Criteria</span>

              <p>
                Pro Traders Fund is committed to providing funding opportunities to talented traders who demonstrate their trading prowess
                through our rigorous evaluation process. It's important to understand the principles and criteria that govern this funding
                opportunity. Please carefully review the following terms:
              </p>
              <ul className="pl-5 space-y-2 list-disc">
                <li>
                  Independent Trading Contractors <br />
                  Traders accepted into the Pro Traders Fund program operate as independent contractors. This means that you, as a trader,
                  retain complete autonomy in your trading decisions. We value your expertise and rely on your trading skills to navigate
                  the financial markets effectively. While we provide access to funding (via our private fund), you are responsible for your
                  trading strategies, risk management, and trade execution.
                </li>
                <li>
                  Performance-Based Funding Criteria
                  <br />
                  Our funding criteria are purely performance-based. To qualify for funding, traders must meet and consistently maintain
                  predefined performance metrics. These metrics are designed to assess your trading abilities, risk management skills, and
                  overall performance in the financial markets. It is your responsibility to familiarize yourself with these metrics and
                  work towards meeting and exceeding them.
                </li>
                <li>
                  No Client Assets with Pro Traders Fund
                  <br />
                  It's important to clarify that clients of Pro Traders Fund do not hold assets or funds with our organization. Instead, we
                  provide you with access to a secure and transparent trading environment through our network of trusted third-party
                  providers and brokers. While you will execute your trades and manage your trading account directly through these
                  third-party platforms, please be aware that at all times, the Company retains full control (custody) of the funds. There
                  is no access to these funds for any purpose other than generating profits.
                  <br />
                  Furthermore, any profit share that is paid to traders is at the sole discretion of the company and is considered a
                  commission for the provision of independent contractor services. The commission payable is based on specific performance
                  criteria being met. This structure ensures the safeguarding of our private fund's interests while providing opportunities
                  for skilled traders.
                </li>
                <li>
                  Evaluation Process
                  <br />
                  The evaluation process is a crucial step in determining eligibility for funding. During this process, your trading
                  performance will be thoroughly assessed against our predefined criteria. This evaluation process may include, but is not
                  limited to, an analysis of your trading history, risk management practices, and adherence to our trading guidelines.
                  Successful completion of this evaluation is a prerequisite for funding.
                </li>
                <li>
                  Continuous Monitoring <br />
                  Your journey with Pro Traders Fund doesn't end with funding. We continuously monitor traders' performance to ensure that
                  the predefined metrics are consistently met. This ongoing evaluation helps us maintain a high standard of trading
                  excellence and risk management within our program.
                </li>
                <li>
                  Transparent and Fair Evaluation
                  <br />
                  Pro Traders Fund is committed to transparency and fairness in the evaluation and funding process. Our goal is to provide
                  equal opportunities to traders from diverse backgrounds and locations. We assess traders solely based on their trading
                  performance, and all evaluations are conducted objectively.
                </li>
                <li>
                  Termination for Non-Compliance <br />
                  Traders who fail to meet the predefined performance metrics or who violate our trading guidelines may face termination
                  from our program. It is essential to adhere to our policies and trading standards to maintain eligibility for funding.
                  <br />
                  By participating in the Pro Traders Fund program, you acknowledge and agree to these funding and evaluation criteria. We
                  encourage you to review these terms carefully and reach out to our support team if you have any questions or require
                  further clarification.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="PaymentandFundingPolicy">
              <span className="text-2xl font-medium text-[30px]">Payment and Funding Policy</span>
              <p>
                Pro Traders Fund is committed to ensuring a transparent and efficient process for funding traders and facilitating profit
                withdrawals. It's important to understand the policies and criteria that govern these financial transactions. Please
                carefully review the following terms:
              </p>
              <p>
                <b>a. Funding Process</b>
              </p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Initial Payment: To begin your journey with Pro Traders Fund, an initial payment, which covers the evaluation process and
                  access to our trading resources, is required. This payment is non-refundable and should be made as specified on our
                  platform.
                </li>
                <li>
                  Evaluation Completion: After successfully completing the evaluation process and meeting the predefined performance
                  metrics, traders become eligible for funding. The funding amount will be determined based on your performance during the
                  evaluation.
                </li>
                <li>
                  Payment Forfeiture: Any payment to the independent contractor is solely at the discretion of the company; in instances of
                  suspected or proven breach, fraudulent activity, or any engagement in prohibited activities, we reserve the authority to
                  forfeit the user's account. Consequently, there exists no obligation to make any payment in such circumstances.
                </li>
              </ul>
              <p>
                <b>b. Funding Amount Determination</b> <br />
                The funding amount is determined based on your performance during the evaluation process. This amount may vary among traders
                and is calculated using a combination of factors, including profit percentage, risk management, and overall trading
                performance.
              </p>
              <p>
                <b>c. Profit Withdrawal</b>
              </p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Eligibility: Traders are eligible to withdraw profits from their funded accounts. To be eligible, traders must meet and
                  maintain the profit withdrawal criteria specified by Pro Traders Fund.
                </li>
                <li>
                  {' '}
                  Withdrawal Process: Profit withdrawals can be requested through our platform, subject to the specified withdrawal terms
                  and conditions. Withdrawal requests are processed promptly, but processing times may vary depending on the withdrawal
                  method chosen.
                </li>
              </ul>
              <p>
                <b>d. Funding and Withdrawal Fees</b>
              </p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Funding Fees: Pro Traders Fund may charge fees associated with the funding process. These fees, if applicable, will be
                  clearly communicated to traders during the funding process.
                </li>
                <li>
                  Withdrawal Fees: Depending on the chosen withdrawal method and third-party service providers, withdrawal fees may apply.
                  These fees, if applicable, will be detailed in the withdrawal request process.
                </li>
              </ul>
              <p>
                <b>e. Currency and Payment Methods</b>
              </p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Accepted Currencies: Pro Traders Fund processes payments and sends funds in USD (United States Dollars). Please note that,
                  based on your location and bank account, some banks may convert these funds to your local currency. The conversion rates
                  and any associated fees are determined by your bank and are beyond our control.
                </li>
                <li>
                  Payment Methods: Traders can choose from a range of payment methods for the initial payment. These methods may include
                  credit/debit cards, bank transfers, and other secure online payment options.
                </li>
              </ul>
              <p>
                <b>f. Withdrawal Limits</b> <br />
                Pro Traders Fund may impose withdrawal limits or minimum withdrawal thresholds. These limits, if applicable, will be
                communicated to traders through our platform.
              </p>
              <p>
                <b>g.Payment Security </b>
                <br />
                Pro Traders Fund is committed to ensuring the security of payment transactions. We employ advanced encryption and security
                measures to protect your financial data and transactions.
              </p>
              <p>
                <b>h. Modification of Payment and Funding Policies</b> <br />
                Pro Traders Fund reserves the right to modify or update its payment and funding policies at any time. Traders are encouraged
                to review these policies regularly for any changes.
              </p>
              <p>
                <b>i. Funded Account Size</b> <br />
                The funded account size (amount) is the amount initially selected when registering for the performance evaluation account
                challenge. <br />
                <br />
                By participating in the Pro Traders Fund program, you acknowledge and agree to these payment and funding policy criteria. We
                encourage you to review these terms carefully and reach out to our support team if you have any questions or require further
                clarification.
              </p>
            </div>
            <div className="space-y-3 scroll-mt[150px]" id="PayoutSplitStructure">
              <span className="text-2xl font-medium text-[30px] ">Payout Split Structure</span>
              <p>
                The payout profit split structure for a trader is designed to progressively reward longer-term trading success with a higher
                share of profits. The splits are organized by the number of payouts:
              </p>
              <ul className="pl-5 space-y-1 list-decimal ">
                <li>
                  <b className="font-bold">Initial Payout (0th):</b>{' '}
                  <span className="font-light">
                    The profit is split such that the trader receives 70% and the PTF (Profit Taking Facility) retains 30%. This applies to
                    the very first payout.
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
                    For long-term traders who reach beyond 52 payouts, the profit split further favors the trader at 90%, leaving only 10%
                    for the PTF.
                  </span>
                </li>
              </ul>
              <p>
                This structure incentivizes sustained trading performance, with incremental increases in the trader's percentage share as
                milestones are reached in the number of payouts.
              </p>
            </div>
            <div className="space-y-3 " id="RefundPolicy">
              <span className="text-2xl font-medium text-[30px]">Refund Policy</span>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>Introduction:</b> <br />
                  At Pro Traders Fund, our refund policy is designed to provide clarity and fairness to our valued clients. It's important
                  to understand that when you make a payment to us, it is for participation in our performance evaluation program, which
                  includes specific criteria and guidelines. This payment covers administrative costs associated with granting access to
                  this program and is non-refundable under any circumstances.
                </li>
                <li>
                  <b>Non-Refundable Payment:</b> <br />
                  Please be aware that the payment made for our services is non-refundable. We strongly advise clients to make payments only
                  if they intend to fully participate in the program.
                </li>
                <li>
                  <b>
                    Criteria and Guidelines: <br />
                  </b>
                  Clients must adhere to the criteria and guidelines set by Pro Traders Fund throughout the evaluation process. Failure to
                  meet these criteria will not make a client eligible for a refund.
                </li>
                <li>
                  <b>
                    Inactivity Clause: <br />
                  </b>
                  To maintain an active account, clients must engage in trading activities for at least one day within every 30-day cycle.
                  Failure to do so will result in account deactivation and forfeiture, without any eligibility for a refund.
                </li>
                <li>
                  <b>
                    Target Profit Percentage: <br />
                  </b>
                  Clients who complete the performance evaluation phase in profits but do not meet the required target profit percentage
                  will not be eligible for a refund or a retry without making a new initial payment.
                </li>
                <li>
                  <b>
                    Responsibility Clause: <br />
                  </b>
                  It is the client's responsibility to thoroughly understand and comply with the rules, regulations, and parameters of the
                  Pro Traders Fund performance evaluation program.
                </li>
                <li>
                  <b>
                    Error Resolution: <br />
                  </b>
                  If a client believes they made a payment in error, they should contact Pro Traders Fund at support@protradersfund.com to
                  rectify the issue before requesting a refund or chargeback.
                </li>
                <li>
                  <b>
                    Chargeback Consequences: <br />
                  </b>
                  Any chargeback will result in an automatic lifetime ban from our services.
                </li>
                <li>
                  <b>
                    Consumer Protection Compliance: <br />
                  </b>
                  Our refund policy complies with all relevant consumer protection laws, ensuring your rights and interests are safeguarded.
                </li>
                <li>
                  <b>
                    Payment Processor Compliance: <br />
                  </b>
                  We have reviewed our third party payment processor’s policies and ensured that our refund policy aligns with their
                  requirements and allowed business activities.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="PaymentCancellationPolicy">
              <span className="text-2xl font-medium text-[30px]">Cancellation Policy for Payments</span>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>
                    Introduction: <br />
                  </b>
                  Clients who wish to cancel their service can do so by contacting Pro Traders Funding support via email at
                  support@protradersfund.com.
                </li>
                <li>
                  <b>
                    Cancellation Period: <br />
                  </b>
                  Clients may cancel their service at least 2 days after purchase if they have not used the account.
                </li>
                <li>
                  <b>
                    Non-Refundable Clarification: <br />
                  </b>
                  Making a cancellation request after payment does not entitle the client to a refund. This policy includes instances where
                  clients have not completed any of the stages of the performance evaluation program, including the Challenge and
                  Verification phases.
                </li>
                <li>
                  <b>
                    Overpayment Resolution: <br />
                  </b>
                  If you have overpaid or purchased the wrong Pro Traders Fund Evaluation challenge by mistake, please contact us, and we
                  will work to resolve the issue promptly.
                </li>
                <li>
                  Chargeback Consequences: <br />
                  Any accounts associated with a chargeback will automatically be forfeited.
                </li>
                <li>
                  <b>
                    Consumer Protection Compliance: <br />
                  </b>
                  Our cancellation policy is in full compliance with all relevant consumer protection laws, providing you with the necessary
                  protections.
                </li>
                <li>
                  <b>
                    Payment Processor Compliance: <br />
                  </b>
                  We have ensured that our cancellation policy aligns with payment processors policies and allowed business activities,
                  maintaining a seamless payment process.
                  <br />
                  These policies are effective as of the date of publication. By using our services, you agree to abide by the terms
                  outlined in both the refund and cancellation policies. If you have any questions or concerns regarding these policies,
                  please contact us at support@protradersfund.com.
                </li>
              </ul>
            </div>
            <div className="space-y-3" id="CancellationPolicyforFundedTraderAgreements">
              <span className="text-2xl font-medium text-[30px]">Cancellation Policy for Funded Trader Agreements</span>

              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>
                    Introduction <br />
                  </b>
                  Pro Traders Fund is committed to ensuring a transparent and fair process for the cancellation of funded trader agreements.
                  This Cancellation Policy outlines the procedures and terms associated with the termination of such agreements.
                </li>
                <li>
                  <b>
                    Agreement Termination <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Voluntary Termination: A funded trader may request the termination of their agreement with Pro Traders Fund at any
                      time, subject to the terms and conditions outlined herein.
                    </li>
                    <li>
                      Involuntary Termination: Pro Traders Fund reserves the right to terminate a funded trader agreement in cases of
                      violation of the terms and conditions, failure to meet performance criteria, or other breaches of agreement. In such
                      cases, the termination will be at the discretion of Pro Traders Fund.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>
                    Voluntary Termination by Funded Trader <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Notification: To initiate the voluntary termination process, a funded trader must provide written notification to Pro
                      Traders Fund via email at support@protradersfund.com. The email should include the trader's name, account details, and
                      the reason for termination.
                    </li>
                    <li>
                      Review: Pro Traders Fund will review the termination request and may request additional information if necessary.
                    </li>
                    <li>
                      Account Settlement: Upon approval of the termination request, Pro Traders Fund will settle any outstanding balances,
                      including profits and losses, as per the terms of the funded trader agreement.
                    </li>
                    <li>Account Closure: The funded trader's account will be closed upon completion of the settlement process.</li>
                  </ul>
                </li>
                <li>
                  <b>
                    Involuntary Termination by Pro Traders Fund <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Notification: In cases of involuntary termination, Pro Traders Fund will provide written notification to the funded
                      trader via email. The email will include details of the termination, the reason(s) for termination, and any associated
                      actions to be taken.
                    </li>
                    <li>
                      Appeal: The funded trader has the right to appeal an involuntary termination within a reasonable timeframe specified
                      in the termination notification. The appeal should be submitted in writing to support@protradersfund.com.
                    </li>
                    <li>
                      Final Decision: Pro Traders Fund will review the appeal and make a final decision, which will be communicated to the
                      funded trader in writing.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>
                    Refund Policy <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Fees: Fees paid by the funded trader for the evaluation program are non-refundable, regardless of whether the
                      termination is voluntary or involuntary.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>
                    Account Activity and Criteria <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Maintenance of Account: To avoid involuntary termination, funded traders must maintain activity on their accounts by
                      trading for at least one day within every 30-day cycle.
                    </li>
                    <li>
                      Criteria: Funded traders must adhere to the criteria specified in the funded trader agreement to remain in good
                      standing.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>
                    Amendments to Policy <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Policy Updates: Pro Traders Fund reserves the right to update or amend this Cancellation Policy as needed. Funded
                      traders will be notified of any policy changes.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>
                    Contact <br />
                  </b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Questions or Concerns: For questions or concerns related to this Cancellation Policy, please contact our customer
                      support team at support@protradersfund.com.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>
                    Conclusion <br />
                  </b>
                  Pro Traders Fund is dedicated to providing a fair and transparent process for the cancellation of funded trader
                  agreements. This Cancellation Policy ensures that both the funded trader and Pro Traders Fund understand the procedures
                  and terms associated with agreement termination.
                  <br />
                  By participating in our evaluation program and becoming a funded trader, you acknowledge and agree to abide by the terms
                  and conditions outlined in this policy.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="KYCandAMLPolicy">
              <span className="text-2xl font-medium text-[30px]">KYC and AML Policy</span>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>Introduction</b>
                  <p>
                    Pro Traders Fund is committed to maintaining the highest standards of ethical conduct, professionalism, and regulatory
                    compliance. Our Know Your Customer (KYC) and Anti-Money Laundering (AML) Policy is designed to prevent and mitigate
                    risks related to identity fraud, financial crimes, and money laundering.
                  </p>
                </li>
                <li>
                  <b>Purpose</b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Establish clear procedures for the verification of the identity of our clients, ensuring they meet the necessary
                      regulatory requirements.
                    </li>
                    <li>
                      Detect and prevent any suspicious activities that may involve money laundering, fraud, or any other financial crime.
                    </li>
                    <li>
                      Comply with all applicable laws and regulations, including but not limited to Anti-Money Laundering (AML) laws and
                      regulations.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Customer Due Diligence (CDD)</b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Identification: When a customer registers an account with Pro Traders Fund, we require them to provide accurate and
                      up-to-date information, including personal identification, financial information, and contact details.
                    </li>
                    <li>
                      Verification: We verify customer information through reputable and independent sources. This may include
                      government-issued identification, utility bills, and other relevant documents.
                    </li>
                    <li>
                      Ongoing Monitoring: We continuously monitor customer accounts for unusual or suspicious activity. This includes
                      transactions that appear inconsistent with a customer's profile or that contravene AML laws and regulations.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Reporting and Compliance</b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Suspicious Activity Reporting: Pro Traders Fund maintains procedures to identify and report any suspicious activity or
                      transactions to the appropriate authorities as required by law.
                    </li>
                    <li>
                      Compliance: Our company complies with all applicable AML laws and regulations, both domestically and internationally.
                      We cooperate fully with law enforcement agencies, regulators, and other authorities as required.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Record Keeping</b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Document Retention: All customer identification and transaction records are retained for a period as required by
                      applicable laws and regulations.
                    </li>
                    <li>
                      Data Security: We employ strict data security measures to protect customer information and records from unauthorized
                      access or disclosure.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Training and Awareness</b>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Employee Training: Pro Traders Fund provides training to employees to ensure they are aware of and compliant with our
                      KYC and AML procedures.
                    </li>
                    <li>
                      Customer Awareness: We educate our customers about the importance of KYC and AML compliance and their role in
                      maintaining the integrity of our platform.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Non-Discrimination</b>
                  <p>
                    Equal Treatment: Pro Traders Fund applies its KYC and AML procedures consistently to all customers without
                    discrimination.
                  </p>
                </li>
                <li>
                  <b>Amendments to Policy</b>
                  <p>
                    Policy Updates: We reserve the right to update or amend this KYC and AML Policy as needed to reflect changes in laws,
                    regulations, or industry best practices.
                  </p>
                </li>
                <li>
                  <b>Conclusion</b>
                  <p>
                    Pro Traders Fund is committed to maintaining a safe, secure, and compliant trading environment. Our KYC and AML Policy
                    is an integral part of our commitment to transparency, integrity, and ethical business conduct.
                  </p>
                  <p>
                    By using our services, customers agree to comply with our KYC and AML procedures and acknowledge their importance in
                    preserving the security and integrity of our platform.
                  </p>
                  <p>For any questions or concerns related to this policy, please contact our customer support team.</p>
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="PrivacyPolicy">
              <span className="text-2xl font-medium text-[30px]">Privacy Policy</span>
              <p>
                This Privacy Policy, aligned with the General Data Protection Regulation (GDPR) (EU) 2016/679 and adapted for global
                applicability, outlines how Pro Traders Funding collects, uses, and protects data. Your privacy when using our platform is
                paramount, and we encourage you to read this policy carefully.
              </p>

              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Information Collected
                  <p>
                    In the course of registration, account creation, form submissions, service subscriptions, and other interactions with
                    our website, Pro Traders Funding may collect and store personal data for administrative, service-related, and legal
                    purposes.
                  </p>
                </li>
                <li>
                  <b>Directly Provided Information</b>
                  <p>
                    Personal Information, including names, addresses, personal registration numbers, national identification numbers,
                    passport numbers, and email addresses, may be collected. Additionally, optional information like financial details,
                    trading experience, and employment information may be gathered, depending on the context.
                  </p>
                  <p>
                    Client email addresses may be used for product and service-related communications, including marketing campaigns. You
                    can unsubscribe from these communications at any time.
                  </p>
                </li>
                <li>
                  <b>Purpose of Data Collection</b>
                  <p>
                    Our data collection is driven by compliance with anti-money laundering (AML) laws, regulatory obligations such as Know
                    Your Client (KYC) and client due diligence, and identity verification processes. Personal information may include
                    gender, name, date of birth, address, ethnicity, citizenship, and identification numbers, and is collected to perform
                    these checks and comply with relevant regulations.
                  </p>
                  <p>Other related purposes include fraud detection policies and electronic AML screening checks.</p>
                </li>
                <li>
                  <b>Third-Party Data Processing</b>
                  <p>
                    Pro Traders Funding does not store or directly interact with client payment data for purchases. All payments are handled
                    by third-party payment providers, ensuring your payment data remains secure and compliant.
                  </p>
                  <p>
                    Similarly, KYC (Know Your Client) verifications are handled by third-party providers, adding an extra layer of security
                    to your personal information.
                  </p>
                </li>
                <li>
                  <b>Responding to Legal Requests and Preventing Harm</b>
                  <p>
                    While Pro Traders Funding does not directly interact with client payment data, we may access, preserve, and share
                    information as required by law, especially when there's a good-faith belief that it is legally required or necessary to
                    detect, prevent, or address fraud, unauthorized use, violations of our terms or policies, or other harmful or illegal
                    activities.
                  </p>
                </li>
                <li>
                  <b>Data Security</b>
                  <p>
                    We are committed to safeguarding your data and ensuring its confidentiality. Appropriate security measures are in place
                    to prevent unauthorized access, loss, misuse, modification, or disclosure of personal information. Access is limited to
                    personnel with a genuine business, need to know basis, and they are bound by confidentiality obligations. Procedures are
                    established to address suspected data security breaches, which will be reported to you and relevant regulators if
                    required by law.
                  </p>
                </li>
                <li>
                  <b>Legal Basis for Data Processing</b>
                  <p>Our data processing is conducted under lawful bases, including:</p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Contractual Necessity: Processing is necessary for contract performance or to enter into a contract, such as
                      conducting regulated activities.
                    </li>
                    <li>
                      Compliance with Legal Obligations: Processing is necessary to comply with legal obligations, including AML laws.
                    </li>
                    <li>
                      Legitimate Interest: Data is processed for legitimate interests such as business expansion, fraud prevention, system
                      security, and service enhancement, provided that the interests do not override the data subject's rights and freedoms.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Your Rights as a Client</b>
                  <p>
                    If you are a resident within the European Union, you have rights under the General Data Protection Regulation (GDPR),
                    including the right to fair processing and the right to request corrections to your personal data.
                  </p>
                  <p>
                    For inquiries or requests related to your data or privacy rights, please contact us at{' '}
                    <a href="mailto:support@protradersfund.com">support@protradersfund.com</a> or reach out through our live chat on{' '}
                    <a href="https://www.protradersfund.com">www.Protradersfund.com</a>.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="RiskDisclosure">
              <span className="text-2xl font-medium text-[30px]">Risk Disclosure</span>
              <p>
                At Pro Traders Fund, we place utmost importance on transparency and understanding the potential risks associated with
                trading. It's crucial for both our platform and our traders that these risks are clearly outlined. Please review the
                following risk warning:
              </p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  <b>General Information</b>
                  <p>
                    All content published and distributed by Pro Traders Funding LLC and its affiliates is provided for informational
                    purposes only. It's imperative to note:
                  </p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>None of the information provided should be construed as investment advice.</li>
                    <li>
                      The information does not constitute an offer or solicitation to buy or sell securities, commodities, or financial
                      instruments.
                    </li>
                    <li>
                      Testimonials featured on our websites may not accurately reflect the experiences of other clients and should not be
                      considered a guarantee of future performance or success.
                    </li>
                    <li>
                      Using the information from our websites carries inherent risks. Pro Traders Funding LLC, along with its partners,
                      representatives, agents, employees, and contractors, assumes no responsibility or liability for any consequences
                      resulting from the use or misuse of this information.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Third-Party Links</b>
                  <p>Our website may contain links to third-party websites. It is important to understand:</p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Pro Traders Funding LLC has not reviewed and disclaims responsibility for any information or materials posted on these
                      third-party websites.
                    </li>
                    <li>
                      Inclusion of a link to a third-party website does not imply endorsement or recommendation of any products or services
                      offered on that website.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Information Purposes Only</b>
                  <p>
                    The information provided on our site is intended solely for informational purposes. Therefore, it should not be
                    considered:
                  </p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>An offer or solicitation in any jurisdiction where such activities are not authorized.</li>
                    <li>A recommendation to buy, sell, or engage in any particular currency or precious metal trade.</li>
                  </ul>
                </li>
                <li>
                  <b>Independent Advice</b>
                  <p>Before proceeding with any currency or spot metals trade, it is strongly advised that you:</p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Seek independent financial, legal, and tax advice to ensure your actions align with your financial goals and local
                      regulations.
                    </li>
                    <li>Understand the potential risks and rewards associated with trading in currency and spot metals.</li>
                  </ul>
                </li>
                <li>
                  <b>Compliance with Local Laws</b>
                  <p>
                    The services provided by Pro Traders Fund and the information available on our site are not directed toward or intended
                    for distribution to:
                  </p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>
                      Any person in any country or jurisdiction where such distribution or use would contravene local laws or regulations.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Responsibilities of Funded Traders</b>
                  <p>
                    Funded traders on our platform are considered independent contractors managing our company's funds. They do not hold
                    assets with us, and their involvement carries no personal financial risk. It's important for funded traders to:
                  </p>
                  <ul className="pl-5 space-y-1 list-disc ">
                    <li>Utilize rigorous risk management strategies to safeguard company capital.</li>
                    <li>Seek independent advice for their trading activities.</li>
                    <li>Ensure compliance with local laws and regulations relevant to their location.</li>
                    <li>
                      Understand that the information on this site is strictly for informational purposes and not a guarantee of success.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Third Party Link Disclaimer</b>
                  <p>
                    We want to emphasize that Pro Traders Fund assumes no liability for the content or activities of third-party websites
                    linked to our platform. Users who navigate to third-party sites do so at their own risk.
                  </p>
                </li>
                <li>
                  <b>Virtual Nature of Evaluation Phase</b>
                  <p>
                    During the evaluation phase, traders utilize demo accounts with virtual funds. There is no personal financial risk
                    involved in this phase, and traders can restart by purchasing a new evaluation challenge if any criteria is not met.
                  </p>
                </li>
                <li>
                  <b>User Responsibility</b>
                  <p>
                    Users are solely responsible for their trading decisions and activities on our platform. While we provide information
                    and resources, success ultimately depends on individual skills, market conditions, and risk management.
                  </p>
                </li>
                <li>
                  <b>Lack of Assets</b>
                  <p>
                    Clients do not hold assets with Pro Traders Fund. They access a transparent trading environment through third-party
                    providers and brokers.
                  </p>
                </li>
                <li>
                  By accessing and using our services, you acknowledge and accept the risks and responsibilities outlined in this risk
                  warning. Trading involves inherent risks, and we encourage all users to make informed decisions and seek professional
                  guidance where necessary.
                </li>
              </ul>
            </div>
            <div className="space-y-3 " id="Giveaways">
              <span className="text-2xl font-medium text-[30px]">Giveaways and Promotions Terms and Conditions</span>
              <ul className="pl-5 space-y-1 list-disc">
                <li>
                  <b>Eligibility:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>
                      Pro Traders Fund's giveaways and promotions ("Promotions") are open only to active members of our private community
                      ("Members").
                    </li>
                    <li>To enter a Promotion, individuals must be a Member in good standing at the time of entry.</li>
                    <li>
                      The Company reserves the right to verify Membership status and disqualify any entrant who is not an active Member.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Compliance with Local Laws:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>
                      The Company's services, including Promotions, may not be suitable for residents of all countries or jurisdictions.
                    </li>
                    <li>
                      It is the sole responsibility of each Member to determine whether their access and participation in the Company's
                      Promotions are compliant with local laws and regulations.
                    </li>
                    <li>
                      By entering a Promotion, Members affirm that they have reviewed and complied with their local laws and regulations.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>No Risk to the Client:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>Members acknowledge and understand that participation in Promotions involves no financial risk to them.</li>
                    <li>
                      Promotions may include prizes or benefits for Members but do not require any financial investment from the Member.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Participant Responsibility:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>
                      Members participating in Promotions fully understand and accept that they bear all responsibility for their
                      participation.
                    </li>
                    <li>
                      The Company, its affiliates, and employees shall not be held liable for any consequences, financial or otherwise,
                      arising from Members' participation in Promotions.
                    </li>
                    <li>
                      Members expressly release the Company from any liability, including but not limited to financial losses, injuries, or
                      disputes related to Promotions.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Termination or Modification:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>
                      The Company reserves the right to modify, suspend, or terminate any Promotion, in whole or in part, at its sole
                      discretion, without notice, for any reason, including but not limited to fraud, technical failures, or any other
                      factors beyond the Company's control.
                    </li>
                    <li>
                      The Company's decision regarding Promotions, including winners' selection and prize allocation, shall be final and
                      binding.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Privacy and Data Use:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>
                      By participating in Promotions, Members consent to the collection and use of their personal information by the Company
                      for the purpose of administering the Promotion.
                    </li>
                    <li>
                      Personal information collected during Promotions will be handled in accordance with the Company's Privacy Policy.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Governing Law and Jurisdiction:</b>
                  <ul className="pl-5 space-y-1 list-disc">
                    <li>
                      These Promotions Terms and Conditions are governed by the laws of the jurisdiction where Pro Traders Fund operates.
                    </li>
                    <li>
                      Any disputes arising from or related to Promotions shall be subject to the exclusive jurisdiction of the competent
                      courts in that jurisdiction.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                By participating in Pro Traders Fund's Promotions, Members acknowledge that they have read, understood, and agree to abide
                by these Terms and Conditions. These Terms and Conditions supersede any prior agreements or understandings, whether oral or
                written, relating to Promotions.
              </p>
            </div>
            <div className="space-y-3 " id="Conclusion">
              <span className="text-2xl font-medium text-[30px]">Conclusion</span>
              <p>
                By agreeing to these terms, you accept the responsibilities outlined herein and acknowledge that failure to adhere to these
                obligations may result in the termination of your account and access to Pro Traders Fund services.
              </p>
            </div>
            <div className="space-y-3 " id="Contact">
              <span className="text-2xl font-medium text-[30px]">Contact us:</span>
              <p>For questions, concerns, or feedback, please contact us at:</p>
              <ul className="pl-5 space-y-1 list-disc ">
                <li>
                  Email (24/7):{' '}
                  <a href="mailto:support@protradersfund.com" className="underline">
                    support@protradersfund.com
                  </a>
                </li>
                <li>
                  HR Department (24/7):{' '}
                  <a href="mailto:careers@protradersfund.com" className="underline">
                    careers@protradersfund.com
                  </a>
                </li>
                <li>
                  Contact form (24/7):{' '}
                  <a href="/contact" className="underline">
                    https://protradersfund.com/contact
                  </a>
                </li>
                <li>
                  Live Chat (8am to 5pm EST):{' '}
                  <a href="https://www.protradersfund.com" className="underline">
                    www.protradersfund.com
                  </a>
                </li>
                <li>Office Line (8am to 5pm EST): 1-786-864-0122</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
