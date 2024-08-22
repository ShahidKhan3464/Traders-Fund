import React, { useState } from 'react';
import logo from '../../images/LogoSymbol.png';
import VerificationInput from '../../components-website/VerificationInput';
import 'react-phone-number-input/style.css';
import { resendNotificationAPI, verifyAccount } from '../../api';
import { checkToken, showCustomSuccess } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import Notification from '../../components-website/Notification';
import arrow from '../../images/icons/arrow-left.svg';

export default function VerifyByEmail({ email }) {
  let navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [verificationCode, setVerificationCode] = useState(0);

  const resendNotificationCode = async () => {
    try {
      const response = await resendNotificationAPI(email);
      showCustomSuccess(setNotification, response.data.message);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleVerification = async event => {
    try {
      event.preventDefault();
      const data = { code: verificationCode };
      const result = await verifyAccount(data);
      if (result && result.accessToken) {
        const authValue = checkToken(result.accessToken);
        if (authValue === 'auth-login') {
          const redirectTo = localStorage.getItem('redirect_to');
          navigate(
            `${redirectTo ?? '/dashboard'}`,
            redirectTo
              ? {
                  replace: true
                }
              : {}
          );
        }
      }
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="lg:w-[27%] py-12 flex flex-col">
        <div className="flex flex-col justify-center px-3 md:px-3">
          <a
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={logo} alt="Logo Symbol" />
          </a>
          <h2 className="my-3 text-3xl font-bold">Verify your email</h2>
          <div className="mb-3 text-[16px]">
            <p>
              Enter the 6 digit code sent to <br /> <span>({email ? email : 'email address'} )</span>
            </p>
          </div>
          <form>
            <div className="mb-3">
              <VerificationInput length={6} onChange={setVerificationCode}></VerificationInput>
            </div>

            <div>
              <a>
                <button
                  type="button"
                  class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                  id="signinbtn"
                  onClick={event => handleVerification(event)}
                >
                  Verify
                </button>
              </a>
            </div>
            <div className="mb-3 text-center text-[14px]">
              <p
                onClick={() => {
                  resendNotificationCode();
                }}
              >
                Didn’t receive code? <span className="cursor-pointer text-mainColor">Resend</span>
              </p>
              <a
                className="mt-3"
                onClick={() => {
                  navigate('/login');
                }}
              >
                {' '}
                <img src={arrow} alt="" />
                Back to log in{' '}
              </a>
            </div>
          </form>
        </div>
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
}
