import React, { useEffect, useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'react-router-dom';

export default function CheckoutForm() {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const billingInfo = searchParams.get('billingInfo');
  const challenge = searchParams.get('challenge');
  const challengeType = searchParams.get('challengeType');

  let elements = useElements();

  // Pass the appearance object to the Elements instance
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_PUBLIC_LANDING_URL}/processing-transaction?billingInfo=${billingInfo}&challengeType=${challengeType}&challenge=${challenge}`
      }
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: {
      type: 'accordion',
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="px-40 py-2 text-black border-none rounded-lg cursor-pointer btn btn-info btn-lg btn-block"
      >
        <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}</span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div class="alert alert-danger d-flex align-items-center" role="alert" id="payment-message">
          {message}
        </div>
      )}
      {/* {message &&       
     <div className="h-[50vh]" id="payment-message">
          <div className="flex text-center mx-auto flex-col items-center h-[30%] justify-center lg:w-[382px] sm:w-[40%]">
            <p className="text-2xl text-danger">Sorry !! Your payment is not successful, your amount is not debited from the account.</p>
            <p className="text-xl text-secondary">
              {message}
            </p>
            <p className="text-xl text-info">
              Request you to please try again .
            </p>
          </div>
          <div class="text-center">
          <button ctype="button" class="btn btn-info"
            onClick={routeChange}
              >
              Home
            </button>
            </div>
        </div>} */}
    </form>
  );
}
