import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export default function StripeModal({
  challengeType,
  challengeLevel,
  discountCode,
  email,
  billingInfoTotal,
  discountCodeApplied,
  fullname,
  phoneNumber,
  addressLine1
}) {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_PTF_API}/billing/create-payment-intent`,
          {
            challengeType,
            challengeLevel,
            discountCode,
            email,
            billingInfoTotal,
            discountCodeApplied,
            fullname,
            phoneNumber,
            addressLine1
          },
          { headers: { 'Content-Type': 'application/json' } }
        );

        setClientSecret(response.data.clientSecret);
      } catch (error) {
        // Handle error
        console.error('There was an error!', error);
      }
    };

    createPaymentIntent();
  }, []);

  const appearance = {
    theme: 'night',
    labels: 'floating'
    // variables: {
    //   fontFamily: 'Sohne, system-ui, sans-serif',
    //   fontWeightNormal: '500',
    //   borderRadius: '8px',
    //   colorBackground: '#0A2540',
    //   colorPrimary: '#EFC078',
    //   colorPrimaryText: '#1A1B25',
    //   colorText: 'white',
    //   colorTextSecondary: 'white',
    //   colorTextPlaceholder: '#727F96',
    //   colorIconTab: 'white',
    //   colorLogo: 'dark'
    // },
    // rules: {
    //   '.Input, .Block': {
    //     backgroundColor: 'transparent',
    //     border: '1.5px solid var(--colorPrimary)'
    //   }
    // }
  };
  const options = {
    clientSecret,
    appearance
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
