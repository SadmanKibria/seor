'use client';

import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const cartItems = [
  {
    id: 'silver-hoop-earrings',
    name: 'Silver Hoop Earrings',
    price: 14.99,
    quantity: 2,
    image: '/temp-img.jpg',
  },
  {
    id: 'gold-chain-bracelet',
    name: 'Gold-Plated Chain Bracelet',
    price: 19.99,
    quantity: 1,
    image: '/temp-img.jpg',
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-serif font-light text-center mb-10 tracking-wide">
            Your Shopping Bag
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-xl font-light mb-4">Your bag is empty.</h2>
              <p className="text-sm text-gray-600 mb-6">
                Start shopping to fill it up!
              </p>
              <Button className="bg-gray-900 hover:bg-black text-white rounded-none">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center gap-6 border-b pb-6"
                  >
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="flex-1 w-full">
                      <h2 className="font-serif font-light text-lg mb-1">
                        {item.name}
                      </h2>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mb-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-none"
                        >
                          -
                        </Button>
                        <span className="text-sm">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-none"
                        >
                          +
                        </Button>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex justify-between items-center text-sm">
                        <p className="text-gray-700 font-semibold">
                          £{item.price.toFixed(2)}
                        </p>
                        <button className="text-gray-500 hover:text-red-500 text-xs">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border p-6 space-y-6">
                <h2 className="text-lg font-serif font-light mb-4">Summary</h2>

                <div className="space-y-4">
                  {/* Discount Code Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Promo Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="w-full border rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>

                  <Button className="w-full bg-gray-900 hover:bg-black text-white rounded-none">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
