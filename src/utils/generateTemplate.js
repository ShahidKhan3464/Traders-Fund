// generateTemplate.js
export const generateTemplate = data => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 100px;
      line-height: 1.5;
    }

    .header {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .section {
      margin-bottom: 20px;
    }

    .section-title {
      font-weight: bold;
      margin-bottom: 10px;
    }

    .section-content {
      margin-bottom: 15px;
    }

    .signature {
      max-width: 200px;
      margin-top: 20px;
    }

    .disclaimer {
      margin-top: 20px;
      font-size: 12px;
      line-height: 1.3;
    }
  </style>
</head>
<body>
  <div class="header">PRO TRADERS FUND CUSTOMER AGREEMENT</div>
  <div class="section">
    <div class="section-title">Client’s Personal Information</div>
    <div class="section-content">
      Full Name: ${data.firstName} ${data.lastName}<br>
      Gender: ${data.gender}<br>
      Date of Birth: ${data.dob}<br>
      Phone Number: ${data.phone}<br>
      Email Address: ${data.email}<br>
      Address
      ${data.addressLine1}, ${data.addressLine2}<br>
      ${data.city}<br>
      ${data.state}<br>
      ${data.zipCode}<br>
      ${data.country}<br>
      Date Signed: ${new Date().toLocaleDateString()}
    </div>
  </div>
  <div class="section">
    <div class="section-title">To: Pro Traders Funding LLC</div>
    <div class="section-content">
      Re: Payment Authorization For Pro Traders Funding LLC’s Online Software Services. <br>
      I ${data.firstName} ${data.lastName}, holder of Government ID type: ${data.idType} and
      Government ID number: ${data.idNumber}, hereby confirm the authorization of the legality and
      validity of payments made to Pro Traders Funding by card payment/bank transfers for their
      services/products. I confirm that I am the authorized holder of the above-stated identification number, and the authorized cardholder of the card used to make the payments. Thereby, verifying this non-refundable payment and future payments to Pro Traders Funding LLC pursuant to their terms of service.
      I represent and warrant that any transaction in accordance with this letter will serve as an act in full
      compliance with all the applicable local, national and international laws and regulations.
      Continually, I represent and warrant and certify that I am by no means under investigation by any
      governmental authority with regards to, have been charged with, or convicted of; money laundering, drug
      trafficking, any terrorist-related activities, or any crimes which in any jurisdiction would be predicate
      crimes or offenses that are in contravention to anti-money laundering laws.
      I affirm that I have not been assessed civil or criminal penalties under any Anti-money laundering law or
      have had any seizure of funds or forfeiture of any action under any anti-money laundering laws of any
      country/jurisdiction. Therefore, I represent and warrant that the funds for this monetary payment to Pro Traders Funding does
      not and will not derive from any illegal activity that violates any Anti-Money Laundering Laws and
      Regulations. I recognize that by law, Pro Traders Funding may disclose my name and identity in the event that such
      information is requested in relation to this letter. Additionally, I will notify Pro Traders Funding at once,
      when it is known to me that said representation is fallacious or becomes fallacious.
      Finally, subject to and upon the terms and conditions of this agreement, I shall indemnify and hold
      harmless Pro Traders Funding, its employees, affiliates, and directors from any claim or disputes that may
      arise as a result of any payments made by me in relation to Pro Traders Funding services agreement/s.
      I further confirm that this is a non-refundable monetary payment conducted pursuant to Pro Traders
      Funding's terms of service.
      Client’s Full Name: ${data.firstName} ${data.lastName}
    </div>
  </div>
  <div class="section">
    <div class="section-title">We, Pro Traders Funding LLC, acknowledge the above statements.</div>
    <div class="section-content">
      We acknowledge and understand that payments shall be made through our corporate bank account in the
      name Pro Traders Funding. We further confirm that payments made by the named payer will reach the
      stated bank account. If this is to change for any given reason, it is our duty to promptly inform the payer of
      such changes. Pro Traders Funding LLC represents and warrants that any activity in relation to this payment letter will be
      in full compliance with all applicable local, national and international laws, rules, and regulations. This
      includes Anti-Money Laundering laws and regulation of any applicable jurisdiction or to respond to
      requests for information concerning the identity of the payer from any government Authority, regulatory
      organization or financial institution in connection with its anti-money laundering compliance and to update
      such information as necessary.
    </div>
  </div>
  <div class="section">
    <div class="section-title">According to Pro Traders Refund and cancellation policy:</div>
    <div class="section-content">
      Clients are not entitled to a refund, this includes but is not limited to;<br>
      ● failure to complete any of the stages (Challenge & Verification).<br>
      ● If there is no trading activity for 30 days as a maximum permitted to complete the challenge, a
      customer’s account will be disabled;<br>
      ● If a client ends the challenge or verification stage in profits but did not meet the required target
      profit %<br>
      If a client believes that a payment was made in error please contact us at support@protradersfund.com to
      rectify the issue before requesting a refund where we can directly assist you with any payment error
      (considering that our services are strictly non-refundable). If this procedure is not adhered to the client
      then faces rejection of the request and risks cancellation or suspension of Pro Traders Funding services
      to them.
    </div>
  </div>
  <div class="section">
    <div class="section-title">Pro Traders Funding LLC Authorized Representative Signature:</div>
    <div class="section-content">
      <img src="${data.signature}" alt="Signature" class="signature">
    </div>
  </div>
  <div class="section">
    <div class="section-content disclaimer">
      Disclaimer of Warranties and Limitation of liability: Pro Traders Funding LLC operates as an E-Commerce Site and is
      a company that provides talented traders with an opportunity to manage our funds and grow their account through our
      scaling plan at no risk while keeping 80% of the profits they earn. The products and services offered on this Site are
      not in any way intended to be considered an investment. The service provided by Pro Traders Funding LLC is not to
      be confused or misconstrued to be anything else as not to prejudice the operation and goodwill of the company. Pro
      Traders Funding LLC bears no responsibility or liability for any aspect of usage by users that are not in conformity
      with our services and as per the governing laws concerning this industry. Lastly, if any provision of this agreement is
      unenforceable or held illegal in a judicial proceeding such provision shall be severed and held inoperative, whilst
      holding the remaining portion of this agreement operative and binding on both parties. Pro Traders Funding LLC and
      Pro Traders Funding Ltd are one in the same, registered in different countries.
    </div>
  </div>
  <div class="section">
    <div class="section-title">PLEASE ATTACH YOUR VALID GOVERNMENT ISSUED ID AND A PICTURE OF YOU HOLDINGYOUR GOVERNMENT ISSUED ID BESIDE YOUR FACE:</div>
  </div>
</body>
</html>
`;
