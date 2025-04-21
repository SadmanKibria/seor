import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from '@/app/context/cart-context';
import { Toaster } from 'sonner';
import localFont from 'next/font/local';
import '../styles/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'SEOR | Affordable Jewellery for Modern Women',
  description:
    'Discover stylish, high-quality jewellery pieces at affordable prices with SEOR.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <CartProvider>
            {children}
            <Toaster richColors position="top-center" />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
