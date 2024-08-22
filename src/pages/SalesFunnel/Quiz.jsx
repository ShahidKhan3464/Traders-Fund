import React, { useEffect, useState } from 'react';
import { Questions } from './questions';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';
import Back from '../../images/back.png';
import { createUserV3, loginV2 } from '../../api';
import { getCaptchaToken, showCustomError, showCustomSuccess } from '../../utils/utils';
import ReactRecaptcha3 from 'react-google-recaptcha3';
import Notification from '../../components-website/Notification';
import PhoneInput from 'react-phone-number-input';
import Modal from '../../components-website/Modal';
import eye from '../../images/icons/eye.svg';
import { handleToken } from '../../utils/token-decoder';
import QuizForgotPassword from '../forgot-password/QuizForgotPassword';
import CountrySelector from '../../components/CountrySelect';

const Quiz = () => {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [forgot, setForgot] = useState(false);
  const [country, setCountry] = useState({ value: 'US', label: '🇺🇸 United States' });

  const { questions } = Questions;
  const { question, choices, correctAnswer, answerKeys } = questions[activeQuestion];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authLogin, setAuthLogin] = useState(true);

  const [userAnswer, setUserAnswer] = useState({
    tradingExperience: '',
    averageRiskPerTrade: '',
    isFundedByPropTradingFirm: '',
    primaryFinancialMarkets: '',
    tradingStyle: ''
  });
  const [userData, setUserData] = useState();
  const [notification, setNotification] = useState(null);

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion(prev => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onClickPrevious = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length) {
      setActiveQuestion(prev => prev - 1);
    }
  };

  const onAnswerSelected = (answer, index) => {
    const answerKey = questions[activeQuestion].type;
    setUserAnswer(prevState => ({
      ...prevState,
      [answerKey]: answer
    }));
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
    onClickNext();
  };

  useEffect(() => {
    ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {});
  }, []);

  const handleSubmit = async () => {
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      country: country?.value,
      captcha: await getCaptchaToken()
    };

    if (!userData?.country) {
      showCustomError(setNotification, 'Please, select country!');
      return;
    }

    try {
      const requestData = Object.assign({}, userData, userAnswer);
      const result = await createUserV3(requestData);
      localStorage.setItem('authToken', result.accessToken);
      if (result.accessToken) {
        setUserData({ firstName, lastName, email, phone });
      }
      navigate('/tradingquizvideo');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message.length === 1 && error.response.data.message[0] === `User with email ${email} already exists`) {
          setIsModalOpen(true);
        }
        showCustomSuccess(
          setNotification,
          ` Hey welcome back, seems you already have account with us for provided ${email} ,  please login by entering your password. Thank you.`,
          10000
        );
        setIsModalOpen(true);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const handleLoginLocal = async event => {
    event.preventDefault();

    try {
      const token = await getCaptchaToken();
      const data = {
        email,
        password,
        captcha: token,
        ...userAnswer
      };
      const response = await loginV2(data);
      const tokenDetails = handleToken(response.accessToken);
      setAuthLogin(false);
      setEmail('');
      setPassword('');
      if (tokenDetails.auth) {
        localStorage.setItem('authToken', response.accessToken);
        closeModal();
        navigate('/tradingquizvideo');
      } else {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <label htmlFor="disabled-range" className="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white">
            Question {activeQuestion + 1}/{6}
          </label>
          <input
            id="disabled-range"
            type="range"
            value={activeQuestion === 0 ? 10 : activeQuestion * 20}
            className="w-full h-2 h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            disabled
          />
          <h2 className="text-[32px]">{question}</h2>
          <h6 className="text-center">Please pick the closest option, this will help to put you in the right group of traders.</h6>
          <div class="container">
            <ul className={'pb-3'}>
              {choices.map((answer, index) => (
                <>
                  <li
                    onClick={() => onAnswerSelected(answerKeys[index], index)}
                    key={answer}
                    className={selectedAnswerIndex === index ? 'selected-answer' : null}
                  >
                    {answer}
                  </li>
                </>
              ))}
            </ul>
            {activeQuestion > 0 && (
              <a onClick={onClickPrevious}>
                <img src={Back} alt={'back'} className="inline mr-2 " />
                <h6 className="inline text-grey-gradient">Previous</h6>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="result max-w-[702px]">
          <div className="my-6">
            <label htmlFor="disabled-range" className="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white">
              Question 6/6
            </label>
            <input
              id="disabled-range"
              type="range"
              value={100}
              className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              disabled
            />
          </div>
          <h3>Get your eligibility result now!</h3>
          <p class={'text-center'}>
            Enter your email to find out if you are eligible to become a part of our community, where you get weekly strategy calls from our
            expert traders. Plus, stand a chance to win an all-expense-paid vacation – because successful traders deserve the ultimate
            break! Not to mention up to 300,000 of funding that you can trade and we take on the risks. Don't miss this opportunity to
            elevate your trading journey. Enter your info now to check your eligibility.
          </p>
          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <input
                type="text"
                className="mb-1 bg-[#1C1D20] h-[56px] rounded-lg w-full border-0 font-[700] text-white p-6"
                placeholder="First Name"
                aria-label="First Name"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="mb-1 bg-[#1C1D20]  h-[56px] rounded-lg w-full border-0 font-[700] text-white p-6"
                placeholder="Last Name"
                aria-label="Last Name"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
            </div>
            <div>
              <PhoneInput
                className="mb-1 bg-[#1C1D20]  h-[56px] rounded-lg w-full border-0 font-[700] text-white p-6"
                placeholder="Eg-1-800-000-0000"
                value={phone}
                onChange={setPhone}
              />
            </div>
            <div>
              <input
                type="text"
                className="mb-1 bg-[#1C1D20]  h-[56px] rounded-lg w-full border-0 font-[700] text-white p-6"
                placeholder="Email Address"
                aria-label="Email Address"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="w-full mt-6">
            <CountrySelector isDarkMode={true} onChange={setCountry} value={country} />
          </div>
          <div className="flex-right">
            <button onClick={() => handleSubmit()} disabled={!firstName || !lastName || !email || !phone || !country?.value}>
              Submit
            </button>
          </div>
        </div>
      )}

      {notification && <Notification message={notification.message} type={notification.type} />}
      <Modal isOpen={isModalOpen} onClose={closeModal} forgot={forgot} setForgot={setForgot} classes={'bg-black'}>
        {forgot ? (
          <QuizForgotPassword forgot={forgot} setForgot={setForgot} />
        ) : (
          <div>
            <div className="mb-3 text-center">
              <p>Log in to see your results</p>
            </div>
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
            <div className="mb-3 flex items-center justify-between text-[14px]">
              <a onClick={() => setForgot(true)}>
                <p className="underline text-mainColor">Forgot password</p>
              </a>
            </div>
            <div>
              <a>
                <button
                  type="button"
                  className="text-black bg-[#6EFDEB] font-bold rounded-lg text-sm px-5 py-2.5 text-center  flex items-center justify-center mb-3 w-full"
                  onClick={event => {
                    handleLoginLocal(event);
                    setForgot(false);
                  }}
                >
                  Log in
                </button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Quiz;
