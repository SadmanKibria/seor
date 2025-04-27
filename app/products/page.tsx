import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { Product } from '@prisma/client';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-serif font-light text-center mb-10 tracking-wide">
            All Products
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product: Product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="mb-4 overflow-hidden">
                  <Image
                    src={product.images[0] || '/placeholder.svg'}
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
