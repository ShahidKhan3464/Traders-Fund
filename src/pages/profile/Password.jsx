import React, {useEffect, useState} from 'react';
import 'react-phone-number-input/style.css';
import {Alert, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {changePasswordAPI, getActivities} from '../../api';
import {getCaptchaToken, showCustomError, showError} from '../../utils/utils';
import ReactRecaptcha3 from "react-google-recaptcha3";

const Password = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loginHistories, setLoginHistories] = useState([]);
    const [successfullResponse, setSuccessfullResponse] = useState(null);
    const [failureResponse, setFailureResponse] = useState(null);

    useEffect(() => {
        ReactRecaptcha3.init(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY).then(status => {
        });
    }, []);

    const changePassword = async () => {
        try {
            const token = await getCaptchaToken();
            const response = await changePasswordAPI({oldPassword, password, confirmPassword, captcha: token});
            setPassword('');
            setOldPassword('');
            setConfirmPassword('');
            setSuccessfullResponse(response);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setFailureResponse(error.response.data.message);
            } else {
                setFailureResponse(error.message);
            }
        }
    };

    useEffect(() => {
        (async () => {
            await listActivities();
        })();
    }, []);

    const listActivities = async () => {
        try {
            const activities = await getActivities(1, 10);
            setLoginHistories(activities.activities);
        } catch {
        }
    };

    return (<>
        {successfullResponse && (<Alert
            action={<IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setSuccessfullResponse(null);
                }}
            >
                {' '}
                <CloseIcon fontSize="inherit"/>{' '}
            </IconButton>}
            sx={{mb: 2}}
        >
            {' '}
            Password Update Successfully{' '}
        </Alert>)}
        {failureResponse && (<Alert
            severity="error"
            action={<IconButton
                aria-label="close"
                color="red"
                size="small"
                onClick={() => {
                    setFailureResponse(null);
                }}
            >
                {' '}
                <CloseIcon fontSize="inherit"/>{' '}
            </IconButton>}
            sx={{mb: 2}}
        >
            {' '}
            {failureResponse}{' '}
        </Alert>)}
        <div
            className="my-2 flex md:flex-row flex-col gap-10 justify-center md:items-start items-center border-[#3B3C3D] py-4 w-auto rounded-lg px-3 space-y-3 border">
            <div className="lg:w-[50%] space-y-4">
                <div>
                    <p>Change Password</p>
                    {/*<p className="text-sm text-gray-400">Please enter your current password to change your
                            password.</p>*/}
                </div>
                <div className="w-full gap-4 ">
                    <div className="flex flex-col gap-1 text-sm">
                        <p>Current password</p>
                        <input
                            type="password"
                            className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                            value={oldPassword}
                            onChange={e => setOldPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full gap-4 ">
                    <div className="flex flex-col gap-1 text-sm">
                        <p>New password</p>
                        <input
                            type="password"
                            className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <p className="text-xs text-gray-400">Your new password must be more than 8 characters.</p>
                    </div>
                </div>
                <div className="w-full gap-4 pb-4">
                    <div className="flex flex-col gap-1 text-sm">
                        <p>Confirm new password</p>
                        <input
                            type="password"
                            className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        {password && confirmPassword && confirmPassword.length > password.length && password !== confirmPassword && (
                            <p className="text-xs text-red-500">Passwords do not match</p>)}
                    </div>
                </div>

                <div className="flex justify-end w-full gap-4 pt-4 mr-auto">
                    {/*<button
                            className="flex items-center gap-2 px-4 py-2 text-sm text-black bg-white rounded-md">Cancel
                        </button>*/}
                    <button
                        disabled={(password && confirmPassword && password !== confirmPassword) || !password || !oldPassword || !confirmPassword}
                        className={`flex items-center gap-2 px-4 rounded-md py-2 text-sm ${(password && confirmPassword && password !== confirmPassword) || !password || !oldPassword || !confirmPassword ? 'bg-gray-400' : 'bg-[#00A4E6]'}`}
                        onClick={changePassword}
                    >
                        Update Password
                    </button>
                </div>
            </div>
            {/*<div className="lg:w-[50%] space-y-4">
                    <div className="pb-4 border-b border-gray-600">
                        <p>Where you’re logged in</p>
                        <p className="text-sm text-gray-400">
                            We’ll alert you via example@email.com if there is any unusual activity on your account.
                        </p>
                    </div>
                    <div className="pb-4 border-b border-gray-600">
                        {loginHistories.map(history => {
                            return (
                                <>
                                    <img src={monitor} alt=""/>
                                    <p className="text-sm font-light text-gray-500">
                                        {history.type} • {history.ip} • {format(new Date(history.createdAt), 'dd MMM \'at\' hh:mma')}
                                    </p>
                                </>);
                        })}
                    </div>
                </div>*/}
        </div>
    </>);
};
export default Password;
