import React from 'react';
import {useStore} from '../store';
import {TEXT_COLOR_BY_TRADING_ACCOUNT_STATUS} from "../utils/utils";

const Account = ({
                     index,
                     userAccountId,
                     isFreeAccount,
                     type,
                     accountBalance,
                     handleAccsClose,
                     login,
                     handleTradingAccount,
                 }) => {
    const {setSelectedChallenge} = useStore();

    const setSelectedChallengeWithPersistence = challengeId => {
        setSelectedChallenge(challengeId);
        localStorage.setItem('selectedChallenge', challengeId);
    };
    const handleAccountClick = () => {
        // Here you can also call setSelectedChallengeWithPersistence or any other function with userAccountId or any other prop
        setSelectedChallengeWithPersistence(userAccountId);
        handleAccsClose && handleAccsClose();
        handleTradingAccount && handleTradingAccount(userAccountId, index)
    };

    return (<div className="flex justify-between py-4 px-5 gap-10 border-b-[1px] border-gray-500/20 cursor-pointer"
                 onClick={handleAccountClick}>
        <div className="text-sm">
            <p>{login}</p>
            <p className="font-light">
                <span className={`${TEXT_COLOR_BY_TRADING_ACCOUNT_STATUS[type]}`}>
                    {type}
                </span>
                {isFreeAccount && (<span className='text-yellow-500'>
                            &nbsp;Free*
                    </span>)}
            </p>
        </div>
        <div className="text-sm">
            <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(accountBalance)}</p>
            <p>Balance</p>
        </div>
    </div>);
};

export default Account;
