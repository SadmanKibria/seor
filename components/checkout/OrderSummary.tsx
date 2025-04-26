'use client';

import { useCart } from '@/app/context/cart-context';

export default function OrderSummary() {
  const { items } = useCart();

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
      <h2 className="text-lg font-serif font-light mb-6">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>£{calculateTotalPrice().toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="border-t pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>£{calculateTotalPrice().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
