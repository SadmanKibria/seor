'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="bg-white p-8 rounded-sm shadow-sm w-full max-w-md">
          <h1 className="text-2xl font-serif font-light text-center mb-8 tracking-wide">
            Create Account
          </h1>

          <form className="space-y-6">
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
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <Button className="w-full bg-gray-900 hover:bg-black text-white rounded-none py-3 text-sm tracking-widest">
              Register
            </Button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{' '}
            <a href="/login" className="underline hover:text-gray-700">
              Sign In
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
