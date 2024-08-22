import React, { useEffect, useState } from 'react';
import eye from '../../images/icons/eye.svg';
import laptop from '../../images/Macbook Pro 16 mockup3.png';
import logo from '../../images/LogoSymbol.png';
import { getCaptchaToken, showCustomError, showCustomSuccess, showError } from '../../utils/utils';
import Notification from '../../components-website/Notification';
import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { login, resendNotificationAPI, resetPasswordByAuthAPI, twoFaLogin, verifyAccount } from '../../api';
import { handleToken } from '../../utils/token-decoder';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../store';
const languagesList = [
  'af',
  'sq',
  'am',
  'ar',
  'hy',
  'az',
  'eu',
  'be',
  'bn',
  'bs',
  'bg',
  'ca',
  'ceb',
  'zh-CN',
  'zh-TW',
  'co',
  'hr',
  'cs',
  'da',
  'nl',
  'en',
  'eo',
  'et',
  'fi',
  'fr',
  'fy',
  'gl',
  'ka',
  'de',
  'el',
  'gu',
  'ht',
  'ha',
  'hi',
  'hmn',
  'hu',
  'is',
  'ig',
  'id',
  'ga',
  'it',
  'ja',
  'kn',
  'kk',
  'km',
  'ko',
  'ku',
  'ky',
  'lo',
  'la',
  'lv',
  'lt',
  'lb',
  'mk',
  'mg',
  'ms',
  'ml',
  'mt',
  'mi',
  'mr',
  'mn',
  'my',
  'ne',
  'no',
  'ny',
  'or',
  'ps',
  'fa',
  'pl',
  'pt',
  'pa',
  'ro',
  'ru',
  'sm',
  'gd',
  'sr',
  'st',
  'sn',
  'sd',
  'si',
  'sk',
  'sl',
  'so',
  'es',
  'su',
  'sw',
  'sv',
  'tg',
  'ta',
  'te',
  'th',
  'tr',
  'uk',
  'ur',
  'uz',
  'vi',
  'cy',
  'xh',
  'yi',
  'yo',
  'zu'
];
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [notification, setNotification] = useState('');
  const [mailSend, setMailSend] = useState(false);
  const [twoFaScreen, setTwoFaScreen] = useState(false);
  const [resetPasswordScreen, setResetPasswordScreen] = useState(false);
  const [authLogin, setAuthLogin] = useState(true);
  const [verificationScreen, setVerificationScreen] = useState(false);
  const [otpForVerify, setOtpForVerify] = useState(false);
  const [otpCode, setOtpCode] = useState(null);
  const [openAlertVerify, setOpenAlertVerify] = useState(null);
  const [accessToken, setAccessToken] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const isPartner = searchParams.get('isPartner') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {});
  }, []);

  const handleLoginLocal = async event => {
    event.preventDefault();

    try {
      const token = await getCaptchaToken();
      const data = {
        email,
        password,
        captcha: token
      };
      const response = await login(data);

      if (response.country) {
        // const script = document.createElement('script');
        // script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
        // script.defer = true;
        // document.body.appendChild(script);
        // window.gtranslateSettings = {
        //   default_language: response?.country,
        //   detect_browser_language: true,
        //   languages: languagesList,
        //   wrapper_selector: '.gtranslate_wrapper',
        //   switcher_horizontal_position: 'right',
        //   switcher_vertical_position: 'top'
        // };
      }
      const tokenDetails = handleToken(response.accessToken);
      setAuthLogin(false);
      setEmail('');
      setPassword('');
      if (tokenDetails.auth) {
        localStorage.setItem('authToken', response.accessToken);
        const redirectTo = localStorage.getItem('redirect_to');
        navigate(
          `${redirectTo ?? '/dashboard'}`,
          redirectTo
            ? {
                replace: true
              }
            : {}
        );
      } else if (tokenDetails.pendingTwoFa) {
        setAccessToken(response.accessToken);
        setTwoFaScreen(true);
      } else if (tokenDetails.pendingAccountVerification) {
        setAccessToken(response.accessToken);
        localStorage.setItem('authToken', response.accessToken);
        setVerificationScreen(true);
      } else if (tokenDetails.pendingResetPassword) {
        setResetPasswordScreen(tokenDetails.pendingResetPassword);
        setAccessToken(response.accessToken);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleTwoFaLogin = async event => {
    try {
      const data = {
        code: String(otpCode)
      };
      const response = await twoFaLogin(accessToken, data);
      const receivedAccessToken = response.accessToken;
      setAccessToken(accessToken);
      const tokenDetails = handleToken(receivedAccessToken);
      setTwoFaScreen(false);
      setOtpCode('');
      if (tokenDetails.auth) {
        localStorage.setItem('authToken', receivedAccessToken);
        const redirectTo = localStorage.getItem('redirect_to');
        navigate(
          `${redirectTo ?? '/dashboard'}`,
          redirectTo
            ? {
                replace: true
              }
            : {}
        );
      } else if (tokenDetails.pendingTwoFa) {
        setTwoFaScreen(true);
      } else if (tokenDetails.pendingAccountVerification) {
        localStorage.setItem('authToken', response.accessToken);
        setVerificationScreen(true);
      } else if (tokenDetails.pendingResetPassword) {
        setResetPasswordScreen(tokenDetails.pendingResetPassword);
        setAccessToken(response.accessToken);
      }
    } catch (error) {
      setOpenAlertVerify(true);
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleVerifyAccount = async event => {
    try {
      const data = {
        code: String(otpCode)
      };
      const response = await verifyAccount(data, accessToken);
      const receivedAccessToken = response.accessToken;
      setAccessToken(accessToken);
      const tokenDetails = handleToken(receivedAccessToken);
      setVerificationScreen(false);
      setOtpCode('');
      if (tokenDetails.auth) {
        localStorage.setItem('authToken', receivedAccessToken);
        const redirectTo = localStorage.getItem('redirect_to');
        navigate(
          `${redirectTo ?? '/dashboard'}`,
          redirectTo
            ? {
                replace: true
              }
            : {}
        );
      } else if (tokenDetails.pendingTwoFa) {
        setTwoFaScreen(true);
      } else if (tokenDetails.pendingAccountVerification) {
        localStorage.setItem('authToken', response.accessToken);
        setVerificationScreen(true);
      } else if (tokenDetails.pendingResetPassword) {
        setResetPasswordScreen(tokenDetails.pendingResetPassword);
        setAccessToken(response.accessToken);
      }
    } catch (error) {
      setOpenAlertVerify(true);
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleResetPassword = async event => {
    try {
      const token = await getCaptchaToken();
      const data = {
        password,
        confirmPassword,
        captcha: token
      };
      const response = await resetPasswordByAuthAPI(data, accessToken);
      const receivedAccessToken = response.accessToken;
      setAccessToken(accessToken);
      const tokenDetails = handleToken(receivedAccessToken);
      setResetPasswordScreen(false);
      setPassword('');
      setConfirmPassword('');
      if (tokenDetails.auth) {
        localStorage.setItem('authToken', receivedAccessToken);
        const redirectTo = localStorage.getItem('redirect_to');
        navigate(
          `${redirectTo ?? '/dashboard'}`,
          redirectTo
            ? {
                replace: true
              }
            : {}
        );
      } else if (tokenDetails.pendingTwoFa) {
        setTwoFaScreen(true);
      } else if (tokenDetails.pendingAccountVerification) {
        localStorage.setItem('authToken', response.accessToken);
        setVerificationScreen(true);
      } else if (tokenDetails.pendingResetPassword) {
        setResetPasswordScreen(tokenDetails.pendingResetPassword);
        setAccessToken(response.accessToken);
      }
    } catch (error) {
      setOpenAlertVerify(true);
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
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

  const resendNotificationCode = async () => {
    try {
      const response = await resendNotificationAPI(email);
      showCustomSuccess(setNotification, response.data.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  return (
    <div className="min-h-[100vh] bg-[#141518] text-white">
      <section id="" className="">
        <div className="flex flex-col justify-center w-full lg:flex-row">
          <div className="md:w-[35%] lg:w-[35%]  mx-auto py-12 flex flex-col">
            <div className="flex flex-col justify-center px-3 md:px-3 lg:mx-16">
              <a
                onClick={() => {
                  navigate('/');
                }}
              >
                <img src={logo} alt="Logo Symbol" />
              </a>
              {verificationScreen && (
                <>
                  <h2 className="my-3 text-3xl font-bold">Verify Your Account</h2>
                  <div className="mb-3  text-[16px]">
                    <p>Please enter the 6-digits code sent your Email/Phone </p>
                  </div>
                  <form>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex flex-col justify-center w-full space-y-1">
                        <p className="text-sm font-light text-left">Enter code here</p>
                        <input
                          type="text"
                          value={otpCode}
                          onChange={otpOnChange}
                          className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                          placeholder="6-digits code"
                        />
                      </div>
                    </div>
                    <br />
                    <div>
                      <a>
                        <button
                          type="button"
                          disabled={!otpCode}
                          className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center  flex items-center justify-center mb-3 w-full"
                          onClick={event => handleVerifyAccount(event)}
                        >
                          Proceed
                        </button>
                        <div className="mb-3 text-center text-[14px]">
                          <p
                            onClick={() => {
                              resendNotificationCode();
                            }}
                          >
                            Didn’t receive code? <span className="cursor-pointer text-mainColor">Resend</span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </form>
                </>
              )}
              {twoFaScreen && (
                <>
                  <h2 className="my-3 text-3xl font-bold">Verify it’s you</h2>
                  <div className="mb-3  text-[16px]">
                    <p>Please enter the 6-digits Two Factor Code </p>
                  </div>
                  <form>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex flex-col justify-center w-full space-y-1">
                        <p className="text-sm font-light text-left">Enter code here</p>
                        <input
                          type="text"
                          value={otpCode}
                          onChange={otpOnChange}
                          className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                          placeholder="6-digits code"
                        />
                        {openAlertVerify && (
                          <>
                            <Alert
                              severity="error"
                              action={
                                <IconButton
                                  aria-label="close"
                                  color="inherit"
                                  size="small"
                                  onClick={() => {
                                    setOpenAlertVerify(false);
                                  }}
                                >
                                  {' '}
                                  <CloseIcon fontSize="inherit" />{' '}
                                </IconButton>
                              }
                              sx={{ mb: 2 }}
                            >
                              {' '}
                              Invalid OTP{' '}
                            </Alert>
                          </>
                        )}
                      </div>
                    </div>
                    <br />
                    <div>
                      <a>
                        <button
                          type="button"
                          disabled={!otpCode}
                          className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center  flex items-center justify-center mb-3 w-full"
                          onClick={event => handleTwoFaLogin(event)}
                        >
                          Proceed
                        </button>
                      </a>
                    </div>
                  </form>
                </>
              )}
              {resetPasswordScreen && (
                <>
                  <h2 className="my-3 text-3xl font-bold">Change Your Password</h2>
                  <div className="mb-3  text-[16px]">
                    <p>You are required to reset your password</p>
                  </div>
                  <form>
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
                    <br />
                    <div>
                      <a>
                        <button
                          type="button"
                          disabled={!password || !confirmPassword || confirmPassword !== password}
                          className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center  flex items-center justify-center mb-3 w-full"
                          onClick={event => handleResetPassword(event)}
                        >
                          Reset Password
                        </button>
                      </a>
                    </div>
                  </form>
                </>
              )}

              {authLogin && (
                <>
                  <h2 className="my-3 text-3xl font-bold">Log in to your account</h2>
                  <div className="mb-3  text-[16px]">
                    <p>Welcome back! Please enter your details.</p>
                  </div>
                  <form>
                    {!mailSend ? (
                      <>
                        <div className="mb-3">
                          <div className="flex flex-col space-y-2">
                            <label htmlFor="">Email</label>
                            <input
                              type="text"
                              className="mb-1 bg-[#1C1D20] rounded-lg"
                              placeholder="Enter your email address"
                              aria-label="Email"
                              value={email}
                              onChange={event => setEmail(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="flex flex-col space-y-2">
                            <label htmlFor="">Password</label>
                            <div className="relative">
                              <input
                                type={showPassword ? 'text' : 'password'}
                                className="mb-1 bg-[#1C1D20] rounded-lg relative w-full"
                                placeholder="8+ characters"
                                aria-label="Password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                              />
                              <img
                                src={eye}
                                alt=""
                                className="absolute w-5 h-5 cursor-pointer top-3 right-4"
                                onClick={() => setShowPassword(!showPassword)}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <div className="flex flex-col gap-2 ">
                          <p className="mt-5 text-xl">Verify it’s you</p>
                          <p className="text-sm font-light text-left text-gray-200">Please enter the 6-digits code we’ve sent to {email}</p>
                          <div className="flex flex-col justify-center w-full space-y-1">
                            <p className="text-sm font-light text-left">Enter code here</p>
                            <input
                              onChange={e => setOtpForVerify(e.target.value)}
                              type="text"
                              className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                              placeholder="6-digits code"
                            />
                          </div>
                        </div>
                        {openAlertVerify && (
                          <>
                            <br />
                            <Alert
                              severity="error"
                              action={
                                <IconButton
                                  aria-label="close"
                                  color="inherit"
                                  size="small"
                                  onClick={() => {
                                    setOpenAlertVerify(false);
                                  }}
                                >
                                  {' '}
                                  <CloseIcon fontSize="inherit" />{' '}
                                </IconButton>
                              }
                              sx={{ mb: 2 }}
                            >
                              {' '}
                              Invalid OTP{' '}
                            </Alert>
                          </>
                        )}
                        <br />
                      </div>
                    )}
                    <div className="mb-3 flex items-center justify-between text-[14px]">
                      <div className="flex">
                        <input
                          type="checkbox"
                          className=""
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={e => setRememberMe(e.target.checked)} // Update the state when the checkbox is clicked
                        />
                        <p className="ms-2">Remember for 30 days</p>
                      </div>
                      <a onClick={() => navigate('/password-reset')}>
                        <p className="text-mainColor">Forgot password</p>
                      </a>
                    </div>
                    <div>
                      <a>
                        <button
                          type="button"
                          class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center  flex items-center justify-center mb-3 w-full"
                          onClick={event => handleLoginLocal(event)}
                        >
                          Log in
                        </button>
                      </a>
                    </div>
                    <div className="mb-3 text-center text-[14px]">
                      <p>
                        Dont have an account?{' '}
                        <span className="cursor-pointer text-mainColor">
                          <a
                            onClick={() => {
                              navigate(isPartner ? `/signup?isPartner=true`: '/signup');
                            }}
                          >
                            Sign up
                          </a>
                        </span>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="min-h-[100vh] pl-10 flex-1 h-full bg-[#262729] pt-10 lg:flex flex-col hidden">
            <div className="space-y-2 pb-10 text-white md:w-[639px] px-2">
              <p className="text-xs text-[#6EFDEB]">Pro Traders Fund is The Best Prop Trading Firm</p>
              <h1 className="font-bold md:text-[60px] text-[30px]">Trade Our Funds</h1>
              <p className="text-[#CDCECF]">
                Prove your skills, get funded & scale up to 3+ million dollars. <br />
                You keep <span className="font-bold text-white">up to 90%</span> of the profits, we cover the losses.
              </p>
            </div>
            <div className="h-full mt-auto ml-auto">
              <img src={laptop} alt="Trade Our Funds" className="ml-auto " />
            </div>
          </div>
        </div>
      </section>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
}
