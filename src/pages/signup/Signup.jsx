import React, { useState, useEffect } from 'react';
import laptop from '../../images/Macbook Pro 16 mockup3.png';
import logo from '../../images/LogoSymbol.png';
import VerificationInput from '../../components-website/VerificationInput';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { verifyAccount, sendPhoneVerificationCode, resendNotificationAPI, createUserV2 } from '../../api';
import { checkToken, getCaptchaToken, showCustomError, showCustomSuccess, showError } from '../../utils/utils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SuccessfulRegistration from './SuccessfulRegistration';
import Notification from '../../components-website/Notification';
import VerifyByEmail from './VerifyByEmail';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import CountrySelector from '../../components/CountrySelect';

export default function Signup() {
  let navigate = useNavigate();
  const [index, setIndex] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [affiliateCode, setAffiliateCode] = useState('');
  const [affiliateCodeExternally, setAffiliateCodeExternally] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(0);
  const [phone, setPhone] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [notification, setNotification] = useState(null);
  const [country, setCountry] = useState({ "value": "US", "label": "🇺🇸 United States" });
  const isPartner = searchParams.get('isPartner') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {});
  }, []);

  const continueBtn = () => {
    if (index < 7) {
      setIndex(prevIndex => prevIndex + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleVerification = async event => {
    event.preventDefault();
    try {
      const data = { code: verificationCode };
      const result = await verifyAccount(data);
      if (result && result.accessToken) {
        const authValue = checkToken(result.accessToken);
        if (authValue === 'auth-login') {
          localStorage.setItem('authToken', result.accessToken);
          const redirectTo = localStorage.getItem('redirect_to');
          navigate(
            `${redirectTo ?? '/dashboard'}`,
            redirectTo
              ? {
                  replace: true
                }
              : {}
          );
        } else {
          navigate('/login');
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handlePhoneSubmission = async event => {
    event.preventDefault();
    try {
      const userData = { phone };
      const result = await sendPhoneVerificationCode(userData);
      continueBtn();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleUserRegistration = async event => {
    event.preventDefault();
    if (!country?.value) {
      showCustomError(setNotification, 'Please select a country!');
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
        captcha: await getCaptchaToken(),
        country: country?.value,
        isPartner: !!isPartner
      };
      if (affiliateCode) {
        Object.assign(userData, {
          affiliateCode
        });
      }
      const result = await createUserV2(userData);
      localStorage.setItem('authToken', result.accessToken);
      continueBtn();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  useEffect(() => {
    if (searchParams.get('ref')) {
      setAffiliateCodeExternally(searchParams.get('ref'));
      setAffiliateCode(searchParams.get('ref'));
    }
  }, [verificationCode]);

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
        {index === 1 ? (
          <div className="flex flex-col justify-center w-full lg:flex-row ">
            <div className="lg:w-[35%] py-12 flex flex-col">
              <div className="flex flex-col justify-center px-3 md:px-3 lg:mx-16">
                <a
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <img src={logo} alt="Logo Symbol" />
                </a>
                <>
                  <h2 className="my-3 text-3xl font-bold">Create an account</h2>
                  <div className="mb-3  text-[16px]">
                    <p>Sign up for a Pro Trader Funds account</p>
                  </div>
                </>

                <form>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">First Name</label>
                      <input
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="First Name"
                        aria-label="First Name"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Last Name</label>
                      <input
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="Last name"
                        aria-label="Last name"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Phone number</label>
                      <div className="w-full px-2 bg-[#1C1D20] border rounded-lg shadow-sm">
                        <PhoneInput placeholder="Eg-1-800-000-0000" value={phone} onChange={setPhone} />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          className="mb-1 bg-[#1C1D20] rounded-lg relative w-full"
                          placeholder="Enter your  email address"
                          aria-label="Email"
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="8+ characters"
                        aria-label="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Confirm password</label>
                      <input
                        type="password"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="8+ characters"
                        aria-label="Confirm password"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                      />
                    </div>
                    {password && confirmPassword && confirmPassword.length > password.length && password !== confirmPassword && (
                      <p className="text-xs text-red-500">Passwords do not match</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Affiliate Code</label>
                      <input
                        disabled={affiliateCodeExternally}
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="Affiliate Code (Optional)"
                        aria-label="Affiliate Code"
                        value={affiliateCode}
                        onChange={event => setAffiliateCode(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Country</label>
                      <div className="w-full">
                        <CountrySelector isDarkMode={true} onChange={setCountry} value={country} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <a>
                      <button
                        type="button"
                        class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                        onClick={event => handleUserRegistration(event)}
                      >
                        Create account
                      </button>
                    </a>
                  </div>
                  <div className="mb-3 text-center text-[14px]">
                    <p>
                      I already have an account?{' '}
                      <span className="cursor-pointer text-mainColor">
                        <a
                          onClick={() => {
                            navigate('/login');
                          }}
                        >
                          Log in
                        </a>
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="min-h-[100vh] pl-10 flex-1 bg-[#262729] pt-10 lg:flex flex-col hidden">
              <div className="space-y-2 pb-10 text-white md:w-[639px] px-2">
                <p className="text-xs text-[#6EFDEB]">Pro Traders Fund is The Best Prop Trading Firm</p>
                <h1 className="font-bold md:text-[60px] text-[30px]">Trade Our Funds</h1>
                <p className="text-[#CDCECF]">
                  Prove your skills, get funded & scale up to 3+ million dollars. <br />
                  You keep <span className="font-bold text-white">up to 90%</span> of the profits, we cover the losses.
                </p>
              </div>
              <div className="mt-auto ml-auto">
                <img src={laptop} alt="Trade Our Funds" className="ml-auto" />
              </div>
            </div>
          </div>
        ) : null}
        {index === 2 ? (
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
        {index === 3 ? (
          <div className="flex justify-center">
            <div className="lg:w-[27%] py-12 flex flex-col">
              <div className="flex flex-col justify-center px-3 md:px-3">
                <img src={logo} alt="Logo Symbol" />
                <h2 className="my-3 text-3xl font-bold">Add phone number</h2>
                <div className="mb-3 text-[16px]">
                  <p>Enter your personal phone number</p>
                </div>
                <form>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Phone number</label>
                      <div className="w-full px-2 bg-[#1C1D20] border rounded-lg shadow-sm">
                        <PhoneInput placeholder="Eg-1-800-000-0000" value={phone} onChange={setPhone} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <a>
                      <button
                        type="button"
                        class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                        onClick={event => handlePhoneSubmission(event)}
                      >
                        Verify
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
        {index === 4 ? <VerifyByEmail email={email} /> : null}
        {index === 5 ? (
          <div className="flex justify-center">
            <div className="lg:w-[27%] py-12 flex flex-col">
              <div className="flex flex-col justify-center px-3 md:px-3">
                <img src={logo} alt="Logo Symbol" />
                <h2 className="my-3 text-3xl font-bold">Create a username</h2>
                <div className="mb-3 text-[16px]">
                  <p>Create a user name, something unique to you or skip this process if you wish to use your name instead.</p>
                </div>
                <form>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Username</label>
                      <input
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="6+ characters"
                        aria-label="Username"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <a>
                      <button
                        type="button"
                        class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                        onClick={() => continueBtn()}
                      >
                        Create username
                      </button>
                    </a>
                  </div>
                  <div className="mb-3 text-center text-[14px]">
                    <p>
                      <span className="cursor-pointer text-mainColor">Skip for now</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
        {index === 6 ? (
          <div className="flex justify-center">
            <div className="lg:w-[27%] py-12 flex flex-col">
              <div className="flex flex-col justify-center px-3 md:px-3">
                <img src={logo} alt="Logo Symbol" />
                <h2 className="my-3 text-3xl font-bold">Create a password</h2>
                <div className="mb-3 text-[16px]">
                  <p>Create a password to secure your account.</p>
                </div>
                <form>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Password</label>
                      <input
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="8+ characters"
                        aria-label="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Confirm password</label>
                      <input
                        type="text"
                        className="mb-1 bg-[#1C1D20] rounded-lg"
                        placeholder="8+ characters"
                        aria-label="Confirm password"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <a>
                      <button
                        type="button"
                        class="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                        onClick={event => handleUserRegistration(event)}
                      >
                        Create password
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
        {index === 7 ? <SuccessfulRegistration /> : null}
      </section>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
}
