'use client';

import { Button } from '@/components/ui/button';

export default function OrderSummary() {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
      <h2 className="text-lg font-serif font-light mb-6">Order Summary</h2>

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
  );
}
