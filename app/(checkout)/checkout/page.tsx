'use client';

import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import CheckoutForm, { BillingData } from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import { CheckoutStripeForm } from '@/components/checkout/CheckoutStripeForm';

export default function CheckoutPage() {
  const [billingData, setBillingData] = useState<BillingData | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-light text-center mb-2 tracking-wide">
            Checkout
          </h1>
          <p className="text-center text-gray-500 text-sm mb-10">
            Enter your details to complete your purchase
          </p>

          <SignedIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              <CheckoutForm onSave={(data) => setBillingData(data)} />
              <OrderSummary />
            </div>

            {billingData && (
              <div className="max-w-2xl mx-auto mt-12">
                <h2 className="text-xl font-semibold mb-4">Payment</h2>
                <CheckoutStripeForm amount={5000} billingData={billingData} />
              </div>
            )}
          </SignedIn>

          <SignedOut>
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-gray-700 mb-4 text-sm">
                You must sign in to access checkout.
              </p>
              <SignInButton mode="modal">
                <button className="bg-gray-900 text-white rounded-none px-6 py-3 text-sm hover:bg-black transition">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </main>
      <Footer />
    </div>
  );
}
