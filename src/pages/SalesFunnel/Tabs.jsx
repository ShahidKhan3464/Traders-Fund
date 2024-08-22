import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import Locked from '../../images/locked.png';
import LeftArrow from '../../images/left-arrow.png';
import Star from '../../images/star.png';
import Link from '../../images/link-03.png';
import axios from 'axios';
import { isUserAuthenticated } from '../../utils/utils';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DefaultTabs() {
  const [allChallenges, setAllChallenges] = useState([]);
  const [currentChallengeDetails, setCurrentChallengeDetails] = useState({});
  const [activeLevel, setActiveLevel] = useState();
  const { setSelectedPurchaseDetail, setBillingInfo } = useStore();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(2);

  useEffect(() => {
    async function fetchGetLevels() {
      try {
        axios
          .get(`${process.env.REACT_APP_PTF_API_V2}/challenge/list`)
          .then(response => {
            setAllChallenges(response.data.challenges);
            setCurrentChallengeDetails(response.data.challenges[1]);

            setActiveLevel({
              challengeId: response.data.challenges[1].challengeId,
              challengeLabel: response.data.challenges[1].label,
              steps: response.data.challenges[1].stepsLabel,
              ...response.data.challenges[1].challengeLevels[4]
            });
          })
          .catch(error => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }

    fetchGetLevels();

    //  checkAuthStatus();
  }, []);

  let [prices] = useState([5000, 10000, 100000]);
  const handleActiveLevel = level => {
    const currentLevel = currentChallengeDetails?.challengeLevels.filter(challenge => challenge.level === Number(level)).pop();
    setActiveLevel(currentLevel);
  };

  const handlePurchase = async () => {
    setBillingInfo(activeLevel?.price);
    setSelectedPurchaseDetail(activeLevel);
    navigate('/user-checkout');
  };
  return (
    <div className="w-full  max-w-[903px] px-2 pb-10  pt-10 sm:px-0">
      <h4 className="mb-6 text-2xl text-center">Select Challenge Funding Amount</h4>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex items-center space-x-1 rounded-xl bg-[#1C1D20] p-1 tabs-spacing">
          {prices.map(price => (
            <Tab
              key={price}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 leading-5 justify-center h-[60px] text-2xl font-semibold',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 h-[60px] text-2xl font-semibold',
                  selected
                    ? 'bg-[#00A4E6] text-white shadow  h-[60px] text-2xl font-semibold'
                    : 'text-blue-100 hover:bg-[#00A4E6]/[0.12] hover:text-white  h-[60px] text-2xl font-semibold'
                )
              }
              onClick={() => {
                handleActiveLevel(price);
              }}
            >
              $ {price}
            </Tab>
          ))}
        </Tab.List>
        <h1 class={'link-color text-center text-2xl font-semibold'}> Thats ${activeLevel?.level}!</h1>
        <Tab.Panels className="mt-2">
          {prices.map(idx => (
            <Tab.Panel
              key={idx}
              className={classNames('rounded-xl bg-transparent p-3', 'ring-white/60 ring-offset-2 ring-offset-blue-400')}
            >
              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-[#1C1D20] p-6 rounded-2xl">
                  <h1 class={'mb-6'}>Phase 1</h1>
                  <div className={'mb-6'}>
                    <h6>
                      <img className={'inline mr-2 mb-3'} src={LeftArrow} alt={'left-arrow'} />
                      Prove your skills
                    </h6>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={LeftArrow} alt={'left-arrow'} />
                      7% Profit Target
                    </h4>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={LeftArrow} alt={'left-arrow'} />
                      12% Max Overall Loss
                    </h4>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={LeftArrow} alt={'left-arrow'} />
                      Unlimited Trading Days
                    </h4>
                  </div>
                  <button className="btn-bg-color text-[#141518] w-full py-3  rounded-full " onClick={() => handlePurchase()}>
                    ${activeLevel?.price} Get Access Now
                  </button>
                </div>
                <div class="bg-[#1C1D20] p-6 rounded-2xl">
                  <h1 class={'mb-6'}>Phase 2</h1>
                  <div className={'mb-6'}>
                    <h6>
                      <img className={'inline mr-2 mb-3'} src={Star} alt={'left-arrow'} />
                      Verify Your Results
                    </h6>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={Link} alt={'left-arrow'} />
                      5% Profit Target
                    </h4>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={Link} alt={'left-arrow'} />
                      12% Max Overall Loss
                    </h4>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={Link} alt={'left-arrow'} />
                      Unlimited Trading Days
                    </h4>
                  </div>
                  <button className="bg-[#141518] text-opacity-60 text-white w-full py-3 rounded-full">
                    <img className={'inline mr-2'} src={Locked} alt="locked" />
                    Unlocked
                  </button>
                </div>
                <div class="bg-[#1C1D20] p-6 rounded-2xl">
                  <h1 class={'mb-6'}>Phase 3</h1>
                  <div className={'mb-6'}>
                    <h6>
                      <img className={'inline mr-2 mb-3'} src={Star} alt={'left-arrow'} />
                      You’re Now Funded!
                    </h6>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={Link} alt={'left-arrow'} />
                      1% Profit Target
                    </h4>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={Link} alt={'left-arrow'} />
                      12% Max Overall Loss
                    </h4>
                    <h4>
                      <img className={'inline mr-2 mb-3'} src={Link} alt={'left-arrow'} />
                      14 Days To 1st Payout
                    </h4>
                  </div>
                  <button className="bg-[#141518] text-opacity-60 text-white w-full py-3 rounded-full">
                    <img className={'inline mr-2'} src={Locked} alt="locked" />
                    Unlocked
                  </button>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
