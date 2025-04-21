import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

// Sample product data
const products = [
  {
    id: 'silver-hoop-earrings',
    name: 'Silver Hoop Earrings',
    price: 14.99,
    image: '/temp-img.jpg',
  },
  {
    id: 'crystal-stud-earrings',
    name: 'Crystal Stud Earrings',
    price: 12.99,
    image: '/temp-img.jpg',
  },
  {
    id: 'beaded-necklace',
    name: 'Beaded Pendant Necklace',
    price: 15.5,
    image: '/temp-img.jpg',
  },
  {
    id: 'gold-chain-bracelet',
    name: 'Gold-Plated Chain Bracelet',
    price: 19.99,
    image: '/temp-img.jpg',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-serif font-light text-center mb-10 tracking-wide">
            All Products
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm md:text-base font-light">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    £{product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
