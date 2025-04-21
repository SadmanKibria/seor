'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Billing Details */}
            <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
              <h2 className="text-lg font-serif font-light mb-6">
                Billing Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-gray-700 mb-2">
                      Postcode
                    </label>
                    <input
                      type="text"
                      placeholder="Postcode"
                      className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
              <h2 className="text-lg font-serif font-light mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>£49.97</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>£49.97</span>
                </div>

                <Button className="w-full mt-6 bg-gray-900 hover:bg-black text-white rounded-none py-4 text-sm tracking-widest">
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
