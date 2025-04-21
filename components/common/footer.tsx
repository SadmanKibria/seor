import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main footer links */}
        <div className="flex flex-col items-center mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/returns"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Return Policy
            </Link>
            <Link
              href="/shipping"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Shipping Info
            </Link>
          </div>

          {/* Contact email */}
          <div className="flex justify-center items-center mb-6">
            <Mail className="h-4 w-4 mr-2 text-gray-500" />
            <a
              href="mailto:fazulhaquekhan@gmail.com"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              fazulhaquekhan@gmail.com
            </a>
          </div>

          {/* Payment methods */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-10 h-6 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="/images/icons/visa.svg"
                alt="Visa"
                width={40}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="w-10 h-6 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="/images/icons/mastercard.svg"
                alt="Mastercard"
                width={40}
                height={24}
                className="object-contain"
              />
            </div>
          </div>

          {/* Copyright and attribution */}
          <div className="text-xs text-gray-400 text-center">
            <p className="mb-2">
              © {new Date().getFullYear()} SEOR. All rights reserved.
            </p>
            <p>
              Powered by{' '}
              <a
                href="https://sadmankibria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Sadman Kibria
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
