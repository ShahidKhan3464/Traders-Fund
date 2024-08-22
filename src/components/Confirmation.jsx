import React, { useState, useRef, useEffect } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Typography from '@mui/material/Typography';
import moment from 'moment';

// css is in
import '../pages/Verification.css';
import './SignatureModal.css';
import { useStore } from '../store';

// import "react-calendar/dist/Calendar.css";
// ! Modal
const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});
BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool
};
const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;
const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const style = theme => ({
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '1px solid currentColor',
  padding: '12px 24px',
  borderRadius: '8px'
});
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Confirmation = ({
  continueBtn,
  selectedDocument,
  selectedCountry,
  setSelectedCountry,
  firstname,
  lastname,
  idnumber,
  expDate,
  signatureImage
}) => {
  // Assuming your original date is stored in state as 'originalDate'
  const formattedDate = moment(expDate).format('MM-DD-YYYY');
  const { transparentSig } = useStore();

  useEffect(() => {
    // console.log(`signature image is: ${signatureImage}`);
  }, []);
  return (
    <>
      <div className="my-4 space-y-4">
        <p className="text-xl">Confirm Information</p>
      </div>
      <div className="space-y-4 customer-agreement-container2">
        <div>
          <p>Date Signed: Month Day, Year </p>
          <p>
            To: <span className="font-bold">Apex E-Commerce Services LLC</span>{' '}
          </p>
          <p>
            Re: <span className="font-bold">Payment Authorisation For Apex E-Commerce Services LLC’s Online Software</span>{' '}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p>
            I <b>{firstname + ' ' + lastname}</b>, holder of Government ID type <b>{selectedDocument}</b> with ID number <b>{idnumber}</b>{' '}
            and Expiry date <b>{formattedDate}</b>, hereby confirm the authorization of the legality and validity of payments made to Apex
            E-Commerce Services by card payment/bank transfers. <br /> <br /> I confirm that I am the authorized holder of the above stated
            identification number, and the authorized card holder of the card used to make the payments. Thereby, verifying this non-
            refundable payment and future payments to Apex E-Commerce Services LLC for access to their online software licenses pursuant to
            Apex E-Commerce Services' terms of service. I represent and warrant that any transaction in accordance with this letter will
            serve as an act in full compliance with all the applicable local, national and international laws and regulations. <br /> <br />{' '}
            Continually, I represent and warrant and certify that I am by no means under investigation by any governmental authority with
            regards to, have been charged with, or convicted of; money laundering, drug trafficking, any terrorist related activities, or
            any crimes which in any jurisdiction would be predicate crimes or offenses that are in contravention to anti-money laundering
            laws. <br /> <br /> I affirm that I have not been assessed civil or criminal penalties under any Anti money laundering law or
            have had any seizure of funds or forfeiture of any action under any anti-money laundering laws of any country/ jurisdiction.
            Therefore, I represent and warrant that the funds for this monetary payment to Apex E- Commerce Services does not and will not
            derive from any illegal activity that violates any Anti Money Laundering Laws and Regulations. I recognize that by law, Apex
            E-Commerce Services may disclose my name and identity in the event that such information is requested in relation to this
            letter. Additionally, I will notify Apex E- Commerce Services at once, when it is known to me that said representation is
            fallacious or becomes fallacious. <br /> <br /> Finally, subject to and upon the terms and conditions of this agreement, I shall
            indemnify and hold harmless Apex E-Commerce Services, its employees, affiliates and directors from any claim or disputes that
            may arise as a result of any payments made by me in relation to Apex E- Commerce Services software license agreement/s. I
            further confirm that this is a non refundable monetary payment conducted pursuant to Apex E- Commerce Services' terms of
            service.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <p>Client’s Full Name:</p> <p>{firstname + ' ' + lastname}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <img src={`data:;base64,${transparentSig}`} alt="" />
        </div>
        <div className="flex items-start gap-4">
          <input type="checkbox" className="mt-2" />{' '}
          <span>
            <b>
              Please verify that the information and signature you provided is indeed yours and that you agree to the Pro Traders Fund User
              Terms Of Service.
            </b>
          </span>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
