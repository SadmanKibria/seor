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
import { createOrder } from '@/app/actions/create-order';
import { useCart } from '@/app/context/cart-context';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
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
      <StripeCheckoutForm />
    </Elements>
  );
}

function StripeCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { items, clearCart } = useCart();
  const { user } = useUser();
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/thank-you`,
      },
      redirect: 'if_required', // prevent full page reload
    });

    if (error) {
      console.log(error.message);
      toast.error(error.message || 'Payment failed.');
      return;
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        await createOrder({
          userId: user?.id || '',
          totalPrice: items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ),
          cartItems: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        });

        clearCart(); // clear cart after successful order
        toast.success('Order placed successfully!');
        router.push('/thank-you');
        router.refresh();
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong saving your order.');
      }
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
