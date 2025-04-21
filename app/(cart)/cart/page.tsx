'use client';

import { useCart } from '@/app/context/cart-context';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { items: cart, updateQuantity, removeItem } = useCart();

  const subtotal = (cart ?? []).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-light text-center mb-8 tracking-wide">
            Shopping Bag
          </h1>

          {(cart ?? []).length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600">Your cart is empty.</p>
              <Link href="/">
                <Button className="mt-6 bg-gray-900 hover:bg-black rounded-none text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Cart Items */}
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-6 bg-white p-4 rounded-sm shadow-sm"
                  >
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 space-y-1">
                      <h3 className="font-serif font-light text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        £{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() =>
                            item.quantity > 1
                              ? updateQuantity(item.id, item.quantity - 1)
                              : removeItem(item.id)
                          }
                        >
                          -
                        </Button>
                        <span className="px-2">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
                <h2 className="text-lg font-serif font-light mb-6">
                  Order Summary
                </h2>
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

                <Link href="/checkout">
                  <Button className="w-full mt-6 bg-gray-900 hover:bg-black text-white rounded-none py-4 text-sm tracking-widest">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
