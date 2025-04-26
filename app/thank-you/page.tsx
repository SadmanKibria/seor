'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-md shadow-md text-center max-w-md w-full">
        <div className="text-green-500 mb-6">
          <svg
            className="w-20 h-20 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. You&apos;ll receive an email
          confirmation soon.
        </p>
        <Link href="/products">
          <Button className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-md">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
