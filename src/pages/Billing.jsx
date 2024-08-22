import React, {useState, useEffect} from 'react';
import ReturningCustomer from '../components-website/ReturningCustomer';
import axios from 'axios';
import {dailCodes} from '../components-website/DailCodeList';
import {useStore} from '../store';
import Notification from '../components-website//Notification';
import {getCaptchaToken, showCustomError, showInvalidEmailError, showMissingFieldsError} from '../utils/utils';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DiscountBanner from '../components-website/DiscountBanner';
import {useNavigate} from 'react-router-dom';
import {createUserV1} from '../api';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import CountrySelector from '../components/CountrySelect';

export default function Billing() {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notification, setNotification] = useState(null);
    const options = dailCodes;
    //const router = useRouter();
    const navigate = useNavigate();
    const {userData} = useStore();
    const [country, setCountry] = useState({value: 'US', label: '🇺🇸 United States'});

    //const { ref } = router.query;

    const {billingInfo, challenge, challengeType, selectedPurchaseDetail} = useStore();

    const isValidEmail = email => {
        // Basic regex pattern for email validation
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return pattern.test(email);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {
        });
    }, []);

    useEffect(() => {
        // Adding event listener for the button click
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11014409165';
        script.async = true;
        document.body.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());

        const button = document.querySelector('.personal-info-save-btn');
        button.addEventListener('click', function () {
            if (window && window.gtag) {
                window.gtag('event', 'billing', {
                    value: billingInfo,
                    currency: 'USD',
                    price: billingInfo,
                    challenge: selectedPurchaseDetail.label,
                    type: selectedPurchaseDetail.steps
                });
            }
        });
    }, [billingInfo, challenge, selectedPurchaseDetail]);

    useEffect(() => {
        // Dynamically add the Google Tag Manager script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QVCRV8HN9Y';
        script.async = true;
        document.body.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());

        // Setup event listener for button click
        const button = document.querySelector('.personal-info-save-btn');
        if (button) {
            button.addEventListener('click', () => {
                window.gtag('event', 'billing', {
                    send_to: 'G-QVCRV8HN9Y',
                    value: billingInfo,
                    currency: 'USD',
                    price: billingInfo,
                    challenge: selectedPurchaseDetail.label,
                    type: selectedPurchaseDetail.steps
                });
            });
        }

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            if (button) {
                button.removeEventListener('click', this);
            }
        };
    }, [billingInfo, challenge, selectedPurchaseDetail]); // Dependencies for useEffect

    const handleProceedToCheckout = async e => {
        // API call to save billing details and send email
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
            const response = await createUserV1({
                firstName,
                lastName,
                phone: phoneNumber,
                email,
                confirmEmail,
                country: country?.value,
                captcha: await getCaptchaToken()
            });

            localStorage.setItem('authToken', response.accessToken);
            const token = localStorage.getItem('authToken');
            navigate('/user-checkout', {
                replace: true
            });
        } catch (error) {
            console.error(error.response.data.message);
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen text-white bg-mainTheme">
            <DiscountBanner></DiscountBanner>
            <ReturningCustomer></ReturningCustomer>
            <div
                className="grow min-h-screen flex md:flex-row flex-col justify-center py-[64px] lg:w-[1000px] md:px-5 items-start mx-auto gap-10"
                onClick={e => {
                    setIsActive(false);
                }}
            >
                {/* left */}
                <div
                    className="py-6 flex flex-col gap-4 justify-center sm:items-stretch items-center sm:w-[500px] w-auto mx-auto"
                    onClick={e => e.stopPropagation()}
                >
                    <h2 className="text-3xl">Billing Details</h2>
                    <div className="flex flex-col">
                        <p className="pb-2">Email Address</p>
                        <input
                            type="text"
                            className="w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme"
                            placeholder="Enter email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        {email && !isValidEmail(email) && <p className="text-xs text-red-500">Invalid email address</p>}
                    </div>

                    <div className="flex flex-col">
                        <p className="pb-2">Confirm Email Address</p>
                        <input
                            type="text"
                            className="w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme"
                            placeholder="Confirm email address"
                            value={confirmEmail}
                            onChange={e => setConfirmEmail(e.target.value)}
                            required
                        />
                        {email && !isValidEmail(email) && <p className="text-xs text-red-500">Invalid email address</p>}
                        {email && confirmEmail && confirmEmail?.toLowerCase() !== email?.toLowerCase() && (
                            <p className="text-xs text-red-500">Emails do not match</p>
                        )}
                    </div>

                    <div className="flex sm:flex-row flex-col md:gap-[32px] gap-4 justify-between">
                        <div>
                            <p className="pb-2">First Name</p>
                            <input
                                type="text"
                                className="w-full h-[40px] border-none  rounded-lg flex px-2 font-normal bg-secTheme"
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="pb-2">Last Name</p>
                            <input
                                type="text"
                                className="w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme"
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Phone Number</label>
                            <div className="w-full px-2 bg-[#1C1D20] border rounded-lg shadow-sm">
                                <PhoneInput placeholder="Eg-1-800-000-0000" value={phoneNumber}
                                            onChange={setPhoneNumber}/>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Country</label>
                            <div className="w-full mb-3">
                                <CountrySelector isDarkMode={true} onChange={setCountry} value={country}/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col space-y-2">
            <label htmlFor="">Referral Code (Optional)</label>
            <input
              type='text'
              className='w-full h-[40px] border-none rounded-lg flex px-2 font-normal bg-secTheme'
              placeholder='Enter Referral Code (Optional)'
              value={referralCode}
              onChange={(event) => setReferralCode(event.target.value)}
            />
          </div> */}
                </div>

                {/* right */}
                <div
                    className="py-6 px-4 md:w-[360px] w-full flex flex-col gap-4 mx-auto bg-[#1C1D20] border-none rounded-lg">
                    <div>
                        <p className="pb-1 text-xs font-light">Item</p>
                        <span className="font-normal">Pro Traders Funded Challenge</span>
                    </div>
                    <hr/>

                    <div className="flex justify-between gap-2">
                        <div>
                            <p className="text-xs font-light">Challenge</p>
                            <p className="text-sm font-bold">{selectedPurchaseDetail.label}</p>
                        </div>
                        <div>
                            {' '}
                            <p className="text-xs font-light">Challenge Type</p>
                            <p className="text-sm font-bold">{selectedPurchaseDetail.steps}</p>
                            <p className="text-xs underline cursor-pointer underline-offset-2 text-mainColor"
                               onClick={() => navigate('/#pricing')}>
                                Change
                            </p>
                        </div>
                        <div>
                            {' '}
                            <p className="text-xs font-light">Trading Platform:</p>
                            <p className="text-sm font-bold">MetaTrader 5 (MT5)</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div className="font-normal">Subtotal</div>
                            <span>${billingInfo}.00</span>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-normal">Total</p> <span>${billingInfo}.00</span>
                        </div>
                    </div>
                    <button
                        className="rounded-lg personal-info-save-btn complete bg-mainColor"
                        onClick={handleProceedToCheckout}
                        disabled={!isValidEmail(email) || email !== confirmEmail || !email || !confirmEmail || !firstName || !lastName || !phoneNumber}
                    >
                        Proceed to checkout
                    </button>
                    <p className="text-xs font-light">
                        By clicking the button, you agree to our{' '}
                        <span className="underline cursor-pointer blue">
              <a href="/terms">Terms of Service</a>
            </span>{' '}
                        as well as{' '}
                        <span className="underline cursor-pointer blue">
              <a href="/terms#PaymentandFundingPolicy">Terms of Sale</a>.
            </span>
                    </p>
                </div>
            </div>
            {notification && <Notification message={notification.message} type={notification.type}/>}
        </div>
    );
}
