import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

interface CategoryPageProps {
  params: { category: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        equals: params.category,
        mode: 'insensitive',
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-serif font-light text-center mb-10 tracking-wide capitalize">
            {params.category}
          </h1>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-xl font-semibold mb-4">
                No products found in &quot;{params.category}&quot;
              </h2>
              <p className="text-gray-600 mb-6">
                It looks like there are no products available in this category
                yet.
              </p>
              <Link
                href="/products"
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
