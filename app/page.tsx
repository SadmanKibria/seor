import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-center">
          Welcome to SEOR Luxury Jewelry
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Discover our exquisite collection of handcrafted jewelry.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/products">
            <Button>Shop Collection</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
