import React, { useState, useEffect } from 'react';
import logo from '../images/LogoSymbol.png';
import success from '../images/icons/Success2.svg';
import VerificationInput from '../components-website/VerificationInput';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import { getCaptchaToken, showCustomError, showError, showInvalidEmailError, showMissingFieldsError } from './../utils/utils';
import Notification from '../components-website/Notification';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createUserV1, createUserV2 } from '../api';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import CountrySelector from '../components/CountrySelect';

export default function AffiliateSignup() {
  const [index, setIndex] = useState(1);
  const [fullname, setfullname] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [notification, setNotification] = useState(null);
  const [affiliateUserName, setAffiliateUserName] = useState('');
  const [affiliateCode, setAffiliateCode] = useState('');
  const [successfullRegisterationScreen, setSuccessfullRegisterationScreen] = useState(false);
  const [country, setCountry] = useState({ value: 'US', label: '🇺🇸 United States' });

  const [affName, setAffName] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [ref] = useSearchParams();
  // const router = useRouter();

  const navigate = useNavigate();

  const isValidEmail = email => {
    // Basic regex pattern for email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const continueBtn = () => {
    if (index < 7) {
      setIndex(prevIndex => prevIndex + 1);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const userData = { fullname, email };
      // const result = await sendVerificationCode(userData);
      continueBtn();
      ///console.log(result);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handlePhoneSubmission = async event => {
    event.preventDefault();
    try {
      const userData = { phoneNumber };
      // const result = await sendPhoneVerificationCode(userData);
      continueBtn();
      //console.log(result);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleUserRegistration = async event => {
    event.preventDefault();
    try {
      const userData = { fullname, email, phoneNumber, username, password };
      // const result = await createUser(userData);
      continueBtn();
      // console.log(result);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  useEffect(() => {
    ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {});
  }, []);

  const handleProceedToPricing = async e => {
    if (email === '' || firstName === '' || lastName === '' || phoneNumber === '') {
      showMissingFieldsError(setNotification);
      return;
    }

    if (!country?.value) {
      showCustomError(setNotification, 'Please, select country!');
      return;
    }

    if (!isValidEmail(email)) {
      showInvalidEmailError(setNotification);
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        phone: phoneNumber,
        email,
        confirmEmail,
        country: country?.value,
        captcha: await getCaptchaToken()
      };

      if (affiliateCode) {
        Object.assign(userData, {
          affiliateCode
        });
      }

      const result = await createUserV1(userData);
      localStorage.setItem('authToken', result.accessToken);
      setSuccessfullRegisterationScreen(true);
      navigate('/#pricing');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  useEffect(() => {
    if (searchParams.get('username')) {
      const userName = searchParams.get('username');
      const formattedName = userName.split('-').join(' ');
      setAffiliateUserName(formattedName);
    }
    if (searchParams.get('ref')) {
      const affiliateCode = searchParams.get('ref');
      setAffiliateCode(affiliateCode);
    }
  }, []);

  return (
    <div className="min-h-[100vh] bg-[#141518] text-white">
      <section id="" className="md:pt-10">
        {successfullRegisterationScreen ? (
          <div className="flex justify-center">
            <div className="lg:w-[27%] py-12 flex flex-col">
              <div className="flex flex-col justify-center px-3 md:px-3">
                <img src={success} alt="Logo Symbol" />
                <h2 className="my-3 text-3xl font-bold">Account successfully created</h2>
                <div className="mb-3 text-[16px]">
                  <p>Your account was successfully created get funded now.</p>
                </div>
                <form>
                  <div>
                    <a
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      <button
                        type="button"
                        className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                        id="signinbtn"
                      >
                        Go to account
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full h-full lg:flex-row">
            <div className="lg:w-[50%] md:w-[70%] w-[90%] mx-auto py-12 flex flex-col">
              <div className="flex flex-col justify-center px-3 md:px-3 lg:mx-16">
                <img src={logo} alt="Logo Symbol" className="mx-auto" />
                <h2 className="my-3 text-3xl font-bold text-center">
                  Join Pro Traders Fund with {affiliateUserName ? affiliateUserName : 'a friend'} <br /> and Unlock Exclusive Perks!
                </h2>
                <div className="mb-3 text-center text-[16px]">
                  <p>
                    Get up to 150% Refund, Weekly Trading Tips, VIP Benefits, and Priority Support. <br /> Create your Pro Traders Fund
                    account now:
                  </p>
                </div>
                <form>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          className="mb-1 bg-[#1C1D20] rounded-lg border relative w-full"
                          placeholder="Enter your email address"
                          aria-label="Email"
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                        {email && !isValidEmail(email) && <p className="text-xs text-red-500">Invalid email address</p>}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Confirm Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          className="mb-1 bg-[#1C1D20] rounded-lg border relative w-full"
                          placeholder="Enter your email address"
                          aria-label="Email"
                          value={confirmEmail}
                          onChange={event => setConfirmEmail(event.target.value)}
                        />
                        {confirmEmail && !isValidEmail(confirmEmail) && <p className="text-xs text-red-500">Invalid email address</p>}
                        {email && confirmEmail && confirmEmail?.toLowerCase() !== email?.toLowerCase() && (
                          <p className="text-xs text-red-500">Emails do not match</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 flex sm:flex-row flex-col md:gap-[32px] gap-4 justify-between">
                    <div className="flex-1">
                      <p className="pb-2">First Name</p>
                      <input
                        type="text"
                        className="w-full h-[40px] border rounded-lg flex px-2 font-normal bg-[#1C1D20]"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="pb-2">Last Name</p>
                      <input
                        type="text"
                        className="w-full h-[40px] border rounded-lg flex px-2 font-normal bg-[#1C1D20]"
                        placeholder="Enter last name"
                        onChange={e => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Phone Number</label>
                      <div className="w-full px-2 bg-[#1C1D20] border rounded-lg shadow-sm">
                        <PhoneInput placeholder="Eg-1-800-000-0000" value={phoneNumber} onChange={setPhoneNumber} />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="">Country</label>
                      <div className="w-full px-2 bg-[#1C1D20] border rounded-lg shadow-sm">
                        <CountrySelector isDarkMode={true} onChange={setCountry} value={country} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mb-3 w-full signinbtn"
                      id="signinbtn"
                      onClick={event => {
                        handleProceedToPricing(event);
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
}
