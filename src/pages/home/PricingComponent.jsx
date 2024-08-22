import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import greencheck from '../../images/icons/check-icon.svg';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { motion } from 'framer-motion';
import BiWeeklyText from './BiWeeklyText';
import { useStore } from '../../store';
import { isUserAuthenticated } from '../../utils/utils';

const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 10
  }
}));

export default function PricingComponent() {
  const { setSelectedPurchaseDetail, setBillingInfo, setSelectedChallenge, setSelectedChallengeId } = useStore();
  const [allChallenges, setAllChallenges] = useState([]);

  const [challenge, setChallenge] = useState('Premium Pro Trader Challenge Phase 1');
  const [currentChallengeDetails, setCurrentChallengeDetails] = useState({});
  const [currentChallengeDetailsByPhase, setCurrentChallengeDetailsByPhase] = useState({});

  const [activeLevel, setActiveLevel] = useState();
  const navigate = useNavigate();

  const [showButton, setShowButton] = useState(false);

  const handlePurchase = async () => {
    setBillingInfo(activeLevel?.price);
    setSelectedPurchaseDetail(activeLevel);
    if (isUserAuthenticated()) {
      navigate('/user-checkout');
    } else {
      localStorage.setItem('redirect_to', '/user-checkout');
      navigate('/billing');
    }
  };

  useEffect(() => {
    // non interaction
    ReactGA.pageview(window.location.pathname);
    localStorage.removeItem('redirect_to');
  }, []);
  useEffect(() => {
    function handleScroll() {
      const specificDiv = document.getElementById('pricing');
      if (specificDiv) {
        const rect = specificDiv.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    async function fetchGetLevels() {
      try {
        axios
          .get(`${process.env.REACT_APP_PTF_API_V2}/challenge/list`)
          .then(response => {
            setAllChallenges(response.data.challenges);
            setChallenges('Premium Pro Trader Challenge Phase 1', response.data.challenges);
            setActiveLevel({
              challengeId: response.data.challenges[1].challengeId,
              challengeLabel: response.data.challenges[1].label,
              steps: response.data.challenges[1].stepsLabel,
              ...response.data.challenges[1].challengeLevels[4]
            });
            setChallenges('Premium Pro Trader Challenge Phase 1', response.data.challenges);
          })
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }

    fetchGetLevels();

    //  checkAuthStatus();
  }, []); // Empty dependency array means this effect runs once on component mount

  const setChallenges = (challenge, receivedChallenges) => {
    setChallenge(challenge);
    const challenges = receivedChallenges ? receivedChallenges : allChallenges;
    for (const singleChallenge of challenges) {
      if (challenge === singleChallenge.label) {
        setSelectedChallengeId(singleChallenge.challengeId);
        setSelectedChallenge(singleChallenge);
        setCurrentChallengeDetails(singleChallenge);
        const challengeDetailsByPhase = {};
        for (const c of singleChallenge.challengeDetails) {
          Object.assign(challengeDetailsByPhase, {
            [c.phase]: c
          });
        }
        if (!receivedChallenges && activeLevel) {
          const level = activeLevel.level;
          const selectChallengeLevelIndex = singleChallenge.steps === 'INSTANT_FUNDING' ? singleChallenge.challengeLevels.length - 1 : 4;
          let selectChallengeLevel = singleChallenge.challengeLevels[selectChallengeLevelIndex];
          for (const challengeLevel of singleChallenge.challengeLevels) {
            if (challengeLevel.level === level) {
              selectChallengeLevel = challengeLevel;
            }
          }
          setActiveLevel({
            ...selectChallengeLevel,
            challengeId: singleChallenge.challengeId,
            challengeLabel: singleChallenge.label,
            steps: singleChallenge.stepsLabel
          });
        }
        setCurrentChallengeDetailsByPhase(challengeDetailsByPhase);
      }
    }
  };

  useEffect(() => {
    function handleScroll() {
      const specificDiv = document.getElementById('getfunded');
      if (specificDiv) {
        const rect = specificDiv.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeLevel ? (
    <>
      <section className="h-full flex flex-col items-center text-center pt-[54px] pb-[24px] relative">
        <div className="floating-button " style={{ display: showButton ? 'block' : 'none' }}>
          <button
            className="md:bg-white bg-gradient-to-r from-[#1797F8] to-[#6EFDEB] text-black sm:w-auto w-full py-3 sm:px-12 px-8  rounded-lg font-bold  md:hover:bg-gradient-to-r md:from-[#1797F8] md:to-[#6EFDEB] "
            onClick={handlePurchase}
          >
            Get <span className="notranslate"> ${activeLevel?.level}</span>
          </button>
        </div>

        <div className="text-white md:w-[750px] px-2">
          <div className="pb-10 space-y-2">
            <p className="text-xs">Choose your proprietary trading challenge</p>
            <h2 className="font-bold md:text-[48px] text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Simple rules, transparent pricing
            </h2>
            <p>Select Your Challenge, Prove Your Skills & Become A Pro Funded Trader Today!</p>
          </div>
        </div>
        {allChallenges && (
          <div className="flex gap-2 md:text-sm text-xs sm:w-[700px] w-full py-2 bg-[#1C1D20] items-center justify-evenly px-1 rounded-lg mb-5">
            <div
              className={`header-acc flex items-center flex-1  justify-center gap-1 hover:bg-white hover:text-black ${challenge === 'Pro Trader Challenge Phase 1' ? 'header-active' : ''}`}
              onClick={() => setChallenges('Pro Trader Challenge Phase 1')}
            >
              <p>
                <b>ONE STEP</b> <br /> Pro Trader Challenge
              </p>
            </div>
            <div
              className={`header-acc flex items-center sm:flex-2 flex-1 hover:bg-white hover:text-black justify-center gap-1 ${challenge === 'Premium Pro Trader Challenge Phase 1' ? 'header-active' : ''}`}
              onClick={() => setChallenges('Premium Pro Trader Challenge Phase 1')}
            >
              <p>
                <b>TWO STEP</b> <br /> Premium Challenge
              </p>
            </div>
            <div
              className={`header-acc flex items-center flex-1 justify-center hover:bg-white hover:text-black gap-1 ${challenge === 'Premium+ Instant Funding' ? 'header-active' : ''}`}
              onClick={() => setChallenges('Premium+ Instant Funding')}
            >
              <p>
                Instant Funding <br /> Premium Plus Challenge
              </p>
            </div>
          </div>
        )}
        <div className="mt-[24px] pb-1 text-center">
          <p className="font-bold text-bold">Account Size</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-5 text-white">
          {currentChallengeDetails &&
            currentChallengeDetails.challengeLevels &&
            currentChallengeDetails.challengeLevels.map(function (level, i) {
              return (
                <div
                  className={`header-acc flex items-center justify-center gap-1 ${activeLevel?.level === level.level ? 'header-active' : ''}`}
                  style={{ zIndex: 9999 }}
                  onClick={() =>
                    setActiveLevel({
                      challengeId: currentChallengeDetails.challengeId,
                      challengeLabel: currentChallengeDetails.label,
                      steps: currentChallengeDetails.stepsLabel,
                      ...level
                    })
                  }
                >
                  {level.label}
                </div>
              );
            })}
        </div>
        <div className="px-2">
          <div className="relative overflow-x-auto overflow-y-auto rounded-lg shadow">
            <>
              {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                <div className="lg:flex hidden w-full justify-end gap-[100px] px-5">
                  {' '}
                  <div className="flex flex-col pb-4">
                    <span className="text-xl text-mainColor text-bold">Phase 1</span>
                    <p className=" text-bold">Prove your skills</p>
                  </div>
                  {currentChallengeDetails.steps === 'TWO_STEPS' && (
                    <div className="flex flex-col pb-4">
                      <span className="text-xl text-mainColor text-bold">Phase 2</span>
                      <p className=" text-bold">Verify your results</p>
                    </div>
                  )}
                  <div className="flex flex-col pb-4">
                    <span className="text-xl text-mainColor text-bold">Pro Funded Trader</span>
                    <p>Trade Our Funds</p>
                  </div>
                </div>
              )}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex h-auto gap-2">
                <table className="text-white border-collapse table-auto ">
                  <tbody className="text-sm">
                    <tr className=" lg:hidden">
                      <td></td>
                      <td></td>
                      <td>
                        {' '}
                        <div className="flex flex-col pb-4 text-xs md:text-sm">
                          <span className=" text-mainColor text-bold">Phase 1</span>
                          <p className=" text-bold">Prove your skills</p>
                        </div>
                      </td>

                      <td>
                        {' '}
                        <div className="flex flex-col pb-4 text-xs md:text-sm">
                          <span className=" text-mainColor text-bold">Pro Funded Trader</span>
                          <p>Trade Our Funds</p>
                        </div>
                      </td>
                    </tr>
                    {currentChallengeDetails.steps === 'INSTANT_FUNDING' && (
                      <tr className="bg-[#1C1D20]">
                        <td className="relative flex items-center justify-start ">
                          <AiOutlineInfoCircle className="invisible text-sm text-white" />
                          Target
                        </td>
                        <td></td>
                        <td>20% to get to next milestone</td>
                        <td></td>
                      </tr>
                    )}

                    <tr className="bg-[#1C1D20]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="The trading period represents the maximum time given to complete the Pro Traders Fund challenge. If you successfully meet the challenge criteria within 1 day of the allotted period, you will advance to the next phase automatically. Pro Funded Traders have unlimited time as long as they maintain an active status. Additionally, if you pass the challenge phase within 30 days or less, you will qualify for bonuses and additional rewards as an incentive to continue your high-performance trading.
"
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Trading Period
                      </td>
                      <td colSpan={currentChallengeDetails.steps === 'INSTANT_FUNDING' ? '3' : '1'}>Unlimited</td>
                      {currentChallengeDetails.steps === 'TWO_STEPS' && <td>Unlimited</td>}
                      {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && <td>Unlimited</td>}
                    </tr>
                    <tr className="bg-[#262729]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="To meet this requirement, you must trade for at least 1 day during the current duration cycle. Each day should have at least one open position. A trading day is defined as a day when at least one trade is executed for at least 3 minutes. If a trade spans multiple days, only the day it was executed is considered a trading day."
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Minimum Trading Days
                      </td>
                      {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && <td>1</td>}
                      {currentChallengeDetails.steps === 'TWO_STEPS' && <td>1</td>}
                      <td colSpan={currentChallengeDetails.steps === 'INSTANT_FUNDING' ? '3' : '1'}>1</td>
                    </tr>
                    <tr className="  bg-[#1C1D20]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="The profit target represents the amount of profits you must generate from all closed positions on top of your initial balance within the trading period. Successfully meeting the profit target criteria in Phase 1 and 2 will earn you up to 10% profit share bonus of the profit target in the challenge phase with your first payout. At the funded phase, you can receive up to 90% profit share of the generated profits.
                           "
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Profit Target
                      </td>
                      {currentChallengeDetails.steps === 'ONE_STEP' && (
                        <>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_1']?.profitTarget).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_1']?.profitTarget * 100).toFixed(2)}%)
                          </td>
                          <td>None</td>
                        </>
                      )}
                      {currentChallengeDetails.steps === 'TWO_STEPS' && (
                        <td>
                          ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_1']?.profitTarget).toFixed(0)} (
                          {(currentChallengeDetailsByPhase['PHASE_1']?.profitTarget * 100).toFixed(0)}%)
                        </td>
                      )}

                      {currentChallengeDetails.steps === 'TWO_STEPS' && (
                        <>
                          <td>
                            {' '}
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_2']?.profitTarget).toFixed(0)} (
                            {(currentChallengeDetailsByPhase['PHASE_2']?.profitTarget * 100).toFixed(0)}%)
                          </td>
                          <td>None</td>
                        </>
                      )}
                      {currentChallengeDetails.steps === 'INSTANT_FUNDING' && (
                        <>
                          <td></td>
                          <td>None</td>
                          <td></td>
                        </>
                      )}
                      {/*<td colSpan={currentChallengeDetailsByPhase['PHASE_3']?.steps === 'INSTANT_FUNDING' ? '3' : '1'}>None</td>*/}
                    </tr>
                    <tr className="bg-[#262729]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="This is the maximum amount of the initial trading account balance you can lose in a single day. It helps manage risk by setting a limit on daily losses."
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Max Daily Loss
                      </td>
                      {currentChallengeDetails.steps === 'ONE_STEP' && (
                        <>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_1']?.maxDailyLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_1']?.maxDailyLoss * 100).toFixed(2)}%)
                          </td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_3']?.maxDailyLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_3']?.maxDailyLoss * 100).toFixed(2)}%)
                          </td>
                        </>
                      )}
                      {currentChallengeDetails.steps === 'TWO_STEPS' && (
                        <>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_1']?.maxDailyLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_1']?.maxDailyLoss * 100).toFixed(2)}%)
                          </td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_2']?.maxDailyLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_2']?.maxDailyLoss * 100).toFixed(2)}%)
                          </td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_3']?.maxDailyLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_3']?.maxDailyLoss * 100).toFixed(2)}%)
                          </td>
                        </>
                      )}
                      {currentChallengeDetails.steps === 'INSTANT_FUNDING' && (
                        <>
                          <td></td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['FUNDED']?.maxDailyLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['FUNDED']?.maxDailyLoss * 100).toFixed(2)}%)
                          </td>
                          <td></td>
                        </>
                      )}
                    </tr>
                    <tr className=" bg-[#1C1D20]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="This represents the maximum amount of the initial trading account balance you can lose overall. It serves as a safeguard to prevent excessive losses."
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Max Overall Loss
                      </td>

                      {currentChallengeDetails.steps === 'ONE_STEP' && (
                        <>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_1']?.maxOverallLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_1']?.maxOverallLoss * 100).toFixed(2)}%)
                          </td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_3']?.maxOverallLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_3']?.maxOverallLoss * 100).toFixed(2)}%)
                          </td>
                        </>
                      )}
                      {currentChallengeDetails.steps === 'TWO_STEPS' && (
                        <>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_1']?.maxOverallLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_1']?.maxOverallLoss * 100).toFixed(2)}%)
                          </td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_2']?.maxOverallLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_2']?.maxOverallLoss * 100).toFixed(2)}%)
                          </td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['PHASE_3']?.maxOverallLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['PHASE_3']?.maxOverallLoss * 100).toFixed(2)}%)
                          </td>
                        </>
                      )}
                      {currentChallengeDetails.steps === 'INSTANT_FUNDING' && (
                        <>
                          <td></td>
                          <td>
                            ${(activeLevel?.level * currentChallengeDetailsByPhase['FUNDED']?.maxOverallLoss).toFixed(2)} (
                            {(currentChallengeDetailsByPhase['FUNDED']?.maxOverallLoss * 100).toFixed(2)}%)
                          </td>
                          <td></td>
                        </>
                      )}
                    </tr>
                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className="bg-[#262729]">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title="Drawdown is calculated based on either the balance or equity, whichever comes first. Balance refers to the profit and loss from your closed trades, while equity represents floating profit and loss from trades still opened. To avoid breaching drawdown rules, your balance or equity must not exceed the maximum limits for daily and overall drawdown."
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          Drawdown Type
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>Balance & Equity Based</td>
                      </tr>
                    )}
                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className="bg-[#1C1D20]">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title="Pro Traders Fund does not charge any monthly fees. You can focus on trading without worrying about additional costs.
                           "
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          Monthly Fees
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>No Monthly Fees</td>
                      </tr>
                    )}
                    <tr className="bg-[#262729]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="Pro Traders Fund offers flexible leverage of up to 1:100. This allows you to control larger positions with a smaller amount of capital, potentially increasing your trading opportunities.
                           "
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Leverage
                      </td>

                      {currentChallengeDetails.steps === 'INSTANT_FUNDING' ? (
                        <td colSpan={'3'}>
                          <span className="flex justify-center">1 : 50</span>
                        </td>
                      ) : (
                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>
                          <span className="flex justify-center">1 : 100</span>
                        </td>
                      )}
                    </tr>
                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className="bg-[#1C1D20] ">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title=" News trading is allowed on the Pro Traders Fund platform. You can take advantage of market volatility around significant news events.
                           "
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          News Trading
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>
                          {' '}
                          <span className="flex justify-center">
                            {challenge ? <img src={greencheck} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                      </tr>
                    )}
                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className=" bg-[#262729]">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title="  Pro Traders Fund permits holding positions over the weekend. You can maintain your trades beyond the usual weekday trading sessions.

                           "
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          Weekend Holding
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>
                          <span className="flex justify-center">
                            {challenge ? <img src={greencheck} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                      </tr>
                    )}
                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className="bg-[#1C1D20]">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title=" Expert Advisors (EAs) or trading bots are allowed on Pro Traders Fund, but only for traders who have developed their own EAs. You must submit the EA's source code for review and approval by the team before using it on accounts under your profile.


                           "
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          EAs Enabled
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>
                          <span className="flex justify-center">
                            {challenge ? <img src={greencheck} alt="" /> : <img src={greencheck} alt="" />}
                          </span>
                        </td>
                      </tr>
                    )}
                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className=" bg-[#262729]">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title="Traders who have multiple accounts under their profile can engage in copy trading, where one account acts as the master and the others copy its trades. However, it's crucial to ensure that external accounts do not have the same trades to avoid breaching the rules.

                           "
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          Trade Copier
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>
                          <span className="flex justify-center">
                            <img src={greencheck} alt="" />
                          </span>
                        </td>
                      </tr>
                    )}
                    <tr className=" bg-[#1C1D20]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip title={BiWeeklyText} placement="top-start">
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Bi-Weekly Payout
                      </td>

                      <td colSpan={currentChallengeDetails.steps !== 'ONE_STEP' ? '3' : '2'}>
                        <span className="flex justify-center">
                          {challenge ? <img src={greencheck} alt="" /> : <img src={greencheck} alt="" />}
                        </span>
                      </td>
                    </tr>
                    <tr className=" bg-[#262729]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="Pro Traders Fund offers traders a profit split program that allows them to scale up to a 90% profit share of the profits generated on their One Step Pro and Two Step Premium funded account. In addition, during the evaluation phase, traders receive up to 10% profit share of the profits based on the profit target reached. This bonus recognizes top traders and highlights the commitment of Pro Traders Fund to delivering exceptional payout bonuses.
                           "
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Profit Split & Bonus
                      </td>
                      {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                        <>
                          <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '2' : '1'}>
                            <span className="flex justify-center">
                              {currentChallengeDetails.steps === 'TWO_STEPS' ? '10' : '5'}% Profit Target Bonus
                            </span>
                          </td>
                          <td>You Keep {currentChallengeDetails.steps === 'TWO_STEPS' ? '90' : '80'}% Profits</td>
                        </>
                      )}

                      {currentChallengeDetails.steps === 'INSTANT_FUNDING' && <td colSpan="3">You Keep 50% Profits</td>}
                    </tr>

                    {currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                      <tr className="bg-[#1C1D20]">
                        <td className="relative flex items-center justify-start gap-0 md:gap-3">
                          <LightTooltip
                            title=" If you violate any rule and your account is suspended, you can continue with the program at a discounted price known as the 'reset' fee. This allows you to restart your trading cycle. The reset discount is applicable during Phase 1 and 2 of the evaluation challenge.
                           "
                            placement="top-start"
                          >
                            <IconButton>
                              <AiOutlineInfoCircle className="text-sm text-white" />
                            </IconButton>
                          </LightTooltip>
                          Reset Discount
                        </td>

                        <td colSpan={currentChallengeDetails.steps === 'TWO_STEPS' ? '3' : '2'}>
                          <span className="flex justify-center">10%</span>
                        </td>
                      </tr>
                    )}
                    <tr className="bg-[#262729]">
                      <td className="relative flex items-center justify-start gap-0 md:gap-3">
                        <LightTooltip
                          title="As a Pro Funded Trader, you are eligible to get back your registration fee when you request a profit share, provided you have met all the requirements.

                           "
                          placement="top-start"
                        >
                          <IconButton>
                            <AiOutlineInfoCircle className="text-sm text-white" />
                          </IconButton>
                        </LightTooltip>
                        Refundable Fee
                      </td>

                      <td colSpan={currentChallengeDetails.steps === 'INSTANT_FUNDING' && '3'}>${activeLevel?.price}</td>

                      {currentChallengeDetails.steps === 'TWO_STEPS' && <td>FREE</td>}
                      {currentChallengeDetails.steps === 'TWO_STEPS' ? (
                        <td className="font-bold text-black bg-white" onClick={handlePurchase}>
                          115% Refund
                        </td>
                      ) : (
                        currentChallengeDetails.steps !== 'INSTANT_FUNDING' && (
                          <td className="font-bold text-black bg-white" onClick={handlePurchase}>
                            100% Refund
                          </td>
                        )
                      )}
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </>
          </div>
        </div>
        <div className="buy-btn">
          <a
            onClick={() => {
              if (isUserAuthenticated()) {
                navigate('/user-checkout');
              } else {
                navigate('/billing');
              }
            }}
          >
            <button className="  text-black sm:w-auto w-full py-2 px-12 rounded-lg font-bold bg-gradient-to-r from-[#1797F8] to-[#6EFDEB]">
              Get <span className="notranslate"> ${activeLevel?.level}</span>
            </button>
          </a>
        </div>
      </section>
    </>
  ) : (
    <>Loading...</>
  );
}
