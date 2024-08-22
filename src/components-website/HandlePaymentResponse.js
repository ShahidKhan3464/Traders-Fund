import {useEffect, useState} from 'react';
import {showCustomError, showError} from '../utils/utils';
import Notification from '../components-website/Notification';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {getPurchaseByTransaction} from '../api';

export default function HandlePaymentResponse(props) {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(false);
    const [notification, setNotification] = useState(null);
    const [statusText, setStatusText] = useState('Please wait while we are processing your payment');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const externalTransactionId = searchParams.get('externalTransactionId');
        let transactionId = searchParams.get('transactionId');
        const source = searchParams.get('source');
        if (source !== 'FISERV' && source !== 'PTF_WALLET') {
            transactionId = externalTransactionId;
        }
        if (transactionId) {
            const cardCheckInterval = setInterval(async () => {
                if (!processing) {
                    setProcessing(true);
                    let restartRequired = false;
                    try {
                        let purchaseTransaction = await getPurchaseByTransaction(transactionId);
                        purchaseTransaction = purchaseTransaction.purchase;
                        if (purchaseTransaction.status === 'FAILED') {
                            setStatusText('We regret to inform you that, your payment was not successful. Please try again.');
                            showCustomError(setNotification, purchaseTransaction.statusText ? purchaseTransaction.statusText : 'There was a problem processing your payment.');
                            setError(true);
                        } else if (purchaseTransaction.status === 'IN_PROGRESS' || purchaseTransaction.status === 'PROCESSING') {
                            restartRequired = true;
                            setStatusText('Please wait while we are processing your payment');
                        } else if (purchaseTransaction.status === 'COMPLETED') {
                            if (purchaseTransaction.TradingAccount) {
                                if (purchaseTransaction.TradingAccount.status === 'ACTIVE') {
                                    navigate(`/payment-successful?transaction_id=${transactionId}`);
                                } else if (purchaseTransaction.TradingAccount.status === 'PENDING' || purchaseTransaction.TradingAccount.status === 'GENERATING') {
                                    restartRequired = true;
                                    setStatusText('Your payment was successful, we are now generating trading account for you. This might take few minutes. Your can either wait here or we also notify you via email once the Trading Account is successfully generated. Thank you for your patience.');
                                } else {
                                    setStatusText('Your payment was successful, but there was an error generating Trading Account. Please contact support for further steps.');
                                    showCustomError(setNotification, 'There was a problem generating trading account, please contact support.');
                                    setError(true);
                                }
                            } else {
                                setStatusText('We regret to inform you that, your payment was not successful. Please try again.');
                                showCustomError(setNotification, 'There was a problem processing your payment.');
                                setError(true);
                            }
                        }
                    } catch (err) {
                        setError(true);
                        if (error.response && error.response.data && error.response.data.message) {
                            showCustomError(setNotification, error.response.data.message);
                            setStatusText(error.response.data.message);
                        } else {
                            showError(setNotification);
                            setStatusText('There was a problem processing your payment, please contact support for more details. Please try again.');
                        }
                    } finally {
                        if (!restartRequired) {
                            clearInterval(cardCheckInterval);
                        }
                        setProcessing(false);
                    }
                }
            }, 3000);
        } else {
            navigate('/');
        }
    }, []);

    return (<>
        <div className="py-6 px-4 md:w-[1200px] w-full flex flex-col gap-2 mx-auto border-none rounded-lg">
            <div className="text-center">
                <div className="text-center">
                    {error ? (<>
                        <div>{statusText}</div>
                        <a href={`/#pricing`}>
                            <button className="py-2 px-5 rounded-md text-white bg-[#00A4E6]">Try again</button>
                        </a>
                    </>) : (<div>{statusText}</div>)}
                    {notification && <Notification message={notification.message} type={notification.type}/>}
                </div>
            </div>
        </div>
    </>);
}
