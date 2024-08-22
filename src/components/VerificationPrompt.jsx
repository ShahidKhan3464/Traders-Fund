import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationPrompt = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/verify-page');
    };

    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <p>Welcome to Pro Traders Fund, Please complete your verification to Get Started</p>
                <button
                    className="mt-4 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                    onClick={handleClick}
                >
                    Verify Now
                </button>
            </div>
        </div>
    );
};

export default VerificationPrompt;
