import React, { useEffect, useState } from 'react';
import logo from '../../images/LogoSymbol.png';
import arrow from '../../images/icons/arrow-left.svg';
import Notification from '../../components-website/Notification';
import { getCaptchaToken, showCustomError, showCustomSuccess, showError, showSuccess } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { resetPasswordAPI, sendPasswordRequest } from '../../api';
import ReactRecaptcha3 from 'react-google-recaptcha3';

export default function ForgotPassword() {
  const [index, setIndex] = useState(1);
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');

  useEffect(() => {
    ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {});
  }, []);

  const isValidEmail = email => {
    // Basic regex pattern for email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const otpOnChange = e => {
    //replace non-digits with blank
    const value = e.target.value.replace(/[^\d]/, '');
    if (parseInt(value) !== 0) {
      if (String(value).length <= 6) {
        setOtpCode(value);
      }
    }
  };
  const handleForgotPassword = async () => {
    try {
      const token = await getCaptchaToken();
      const response = await sendPasswordRequest({ email, destination: 'EMAIL', captcha: token });
      if (response) {
        showCustomSuccess(setNotification, response.message);
        continueBtn();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const changePassword = async e => {
    e.preventDefault();

    try {
      const response = await resetPasswordAPI({
        email,
        code: otpCode,
        password,
        confirmPassword
      });
      if (response) {
        setPassword('');
        setConfirmPassword('');
        setEmail('');
        showCustomSuccess(setNotification, response.message);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const continueBtn = () => {
    if (index < 2) {
      setIndex(prevIndex => prevIndex + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100vh] bg-[#141518] text-white">
      <section id="" className="">
        {index === 1 ? (
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
                <h2 className="my-3 text-3xl font-bold">Forgot password?</h2>
                <div className="mb-3 text-[16px]">
                  <p>Welcome back! Please enter your details.</p>
                </div>
                <form>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="Enter your email address"
                        aria-label="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      {email && !isValidEmail(email) && <p className="text-xs text-red-500">Invalid email address</p>}
                    </div>
                  </div>

                  <div>
                    <a onClick={() => handleForgotPassword()}>
                      <button
                        type="button"
                        class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                      >
                        Send Reset Email
                      </button>
                    </a>
                  </div>
                  <div className="mb-3 text-center justify-center text-[14px] flex">
                    <a onClick={() => navigate('/login')}>
                      <div className="flex gap-2">
                        <img src={arrow} alt="" />
                        <p>Back to log in </p>
                      </div>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
        {index === 2 ? (
          <>
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
                  <h2 className="my-3 text-3xl font-bold">Check your email</h2>
                  <div className="mb-3 text-[16px]">
                    <p>We have sent a 6-digits code to your email</p>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Password</label>
                      <div className="relative">
                        <input
                          type={'password'}
                          className="mb-1 bg-[#1C1D20] rounded-lg relative w-full"
                          placeholder="8+ characters"
                          aria-label="Password"
                          value={password}
                          onChange={event => setPassword(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Confirm Password</label>
                      <div className="relative">
                        <input
                          type={'password'}
                          className="mb-1 bg-[#1C1D20] rounded-lg relative w-full"
                          placeholder="8+ characters"
                          aria-label="Password"
                          value={confirmPassword}
                          onChange={event => setConfirmPassword(event.target.value)}
                        />
                        {password && confirmPassword && confirmPassword.length > password.length && password !== confirmPassword && (
                          <p className="text-xs text-red-500">Passwords do not match</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">OTP Code</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={otpCode}
                          onChange={otpOnChange}
                          className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                          placeholder="6-digits code"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <a>
                      <button
                        disabled={!password || !confirmPassword || confirmPassword !== password}
                        type="button"
                        className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                        onClick={e => changePassword(e)}
                      >
                        Proceed
                      </button>
                    </a>
                  </div>
                  <form>
                    <div></div>
                    <div className="mb-3 text-center text-[14px]">
                      <p>
                        Didn’t receive an email?{' '}
                        <span className="cursor-pointer text-mainColor" onClick={() => handleForgotPassword()}>
                          Resend
                        </span>
                      </p>
                    </div>
                    <div className="mb-3 text-center justify-center text-[14px] flex">
                      <a
                        onClick={() => {
                          navigate('/login');
                        }}
                      >
                        <div className="flex gap-2">
                          <img src={arrow} alt="" />
                          <p>Back to log in </p>
                        </div>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </section>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
}
