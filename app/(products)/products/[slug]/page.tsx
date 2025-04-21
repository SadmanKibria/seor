import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Product Images */}
            <div>
              <div className="bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src={product.images?.[0] || '/placeholder.svg'}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-xl font-light text-gray-700">
                  £{product.price.toFixed(2)}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-24">
                    <select
                      className="w-full h-10 rounded-none border-gray-200 focus:ring-0 focus:border-gray-500 text-sm"
                      defaultValue="1"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button className="bg-gray-900 hover:bg-black text-white rounded-none px-8 py-6 h-auto text-sm tracking-widest transition-all duration-300 flex-1 md:flex-none md:min-w-[180px]">
                    Add to Bag
                  </Button>
                </div>

                <p className="text-xs text-gray-500">
                  Free UK delivery on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
