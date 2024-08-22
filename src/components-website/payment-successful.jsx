/* global fbq */
import React, { useEffect, useState } from 'react';
import logo from '../images/Logos/PTF logo.svg';
import { useStore } from '../store';
import ReactGA from 'react-ga';
import { getProfile, getPurchaseByTransaction } from '../api';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Notification from './Notification';
import { showCustomError, showError } from '../utils/utils';

// // Initialize ReactGA with your GA ID
// ReactGA.initialize('AW-11014409165');

const ThankYouPayment = () => {
  const { billingInfo, discountedPurchaseTotal } = useStore();
  const [paymentDetail, setPaymentDetail] = useState();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const userProfile = await getProfile();
        setProfile(userProfile);
        const transactionId = searchParams.get('transaction_id');
        if (transactionId) {
          const response = await getPurchaseByTransaction(transactionId);
          setPaymentDetail(response.purchase);
        } else {
          navigate('/');
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          showCustomError(setNotification, error.response.data.message);
        } else {
          showCustomError(setNotification, error.message);
        }
        navigate('/');
      }
    })();
  }, []);


  useEffect(() => {
    if (paymentDetail) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11014409165';
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ window.dataLayer.push(arguments); };
      window.gtag('js', new Date());

      window.gtag('config', 'AW-11014409165', {
        'transaction_id': paymentDetail.transactionId || '',
        'currency': 'USD',
        'value': paymentDetail.amount || 0,
      });

      window.gtag('event', 'conversion', {
        'send_to': 'AW-11014409165/q6LxCL_h65QZEM2XioQp',
        'transaction_id': paymentDetail.transactionId || '',
        'coupon': paymentDetail.CouponCode?.code || '',
        'value': paymentDetail.amount || 0,
        'currency': "USD",
        'discount': paymentDetail.CouponCode?.discount || 0,
      });
    }
  }, [paymentDetail]);
  useEffect(() => {
    if (paymentDetail) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QVCRV8HN9Y';
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ window.dataLayer.push(arguments); };
      window.gtag('js', new Date());

      window.gtag('config', 'ptf_purchase', {
        'transaction_id': paymentDetail.transactionId || '',
        'currency': 'USD',
        'value': paymentDetail.amount || 0,
      });

      window.gtag('event', 'ptf_purchase', {
        'send_to': 'G-QVCRV8HN9Y',
        'transaction_id': paymentDetail.transactionId || '',
        'coupon': paymentDetail.CouponCode?.code || '',
        'value': paymentDetail.amount || 0,
        'currency': "USD",
        'discount': paymentDetail.CouponCode?.discount || 0,
      });
    }
  }, [paymentDetail]);
  useEffect(() => {
    if (paymentDetail) {
      console.log(paymentDetail);
      // Check if fbq is defined before calling it
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', { value: paymentDetail?.amount || 0, currency: 'USD' });
      } else {
        console.warn('fbq is not defined');
      }
    }
  }, [paymentDetail]);




  return (
    <div className="bg-[#1C1D20] h-[100vh]">
      <div className="flex justify-center pt-10 text-white sm:pt-40">
        <div className="relative flex flex-col items-center pt-10 shadow-medium bg-[#1C1D20] w-auto gap-4 rounded-lg border-none pb-4 px-2">
          <img src={logo} alt="Pro Trader Fund Logo"></img>
          <h1 className="text-[32px] font-bold text-center">
            Congratulations {profile?.firstName} {profile?.lastName}!
          </h1>
          <p className="text-center">
            Your payment has been confirmed and your receipt, along with your performance evaluation challenge credentials, has been sent to
            your email. You can also access your trading account login details on the dashboard to start your challenge.
          </p>
          <p className="text-center">
            Should you have any questions or need assistance, please feel free to contact our support team via live chat or email at
            support@protradersfund.com.
          </p>
          {paymentDetail && (
            <>
              <table className="table-auto payment-details">
                <thead>
                  <tr>
                    <th>Transaction Id</th>
                    <th>Total Amount</th>
                    <th>Amount Charged</th>
                    <th>Coupon Code</th>
                    <th>Discount Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>{paymentDetail && paymentDetail.transactionId ? paymentDetail.transactionId : '-'}</td>
                    <td>{paymentDetail && paymentDetail.amount ? `$${Number(String(paymentDetail.amount)).toFixed(2)}` : '-'}</td>
                    <td>
                      {paymentDetail && paymentDetail.discountedAmount
                        ? `$${Number(String(paymentDetail.discountedAmount)).toFixed(2)}`
                        : '-'}
                    </td>
                    <td>{paymentDetail && paymentDetail.CouponCode ? paymentDetail.CouponCode.code : '-'}</td>
                    <td>
                      {paymentDetail && paymentDetail.CouponCode ? `${Number(String(paymentDetail.CouponCode.discount)).toFixed(2)}%` : '-'}
                    </td>
                  </tr>
                </tbody>
              </table>
              <a onClick={e => navigate(`/dashboard?trading_account=${paymentDetail?.TradingAccount?.login}`)}>
                <button className="py-2 px-5 rounded-md text-white bg-[#00A4E6]">Go to Dashboard</button>
              </a>
              <button hidden={true}>Download receipt</button>
            </>
          )}
        </div>
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
};

export default ThankYouPayment;
