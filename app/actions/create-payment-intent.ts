'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createPaymentIntent(amount: number) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'gbp',
    payment_method_types: ['card'],
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
}
