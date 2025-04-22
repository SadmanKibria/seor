'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { createPaymentIntent } from '@/app/actions/create-payment-intent';
import { toast } from 'sonner';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export function CheckoutStripeForm({ amount }: { amount: number }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    async function setupPayment() {
      const { clientSecret } = await createPaymentIntent(amount);
      setClientSecret(clientSecret);
    }

    setupPayment();
  }, [amount]);

  if (!clientSecret) {
    return <div>Loading Payment...</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/thank-you`, // After success
      },
    });

    if (error) {
      console.log(error.message);
      toast.error(error.message || 'Payment failed.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition"
      >
        Pay
      </button>
    </form>
  );
}
