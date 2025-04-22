'use server';

import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

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
