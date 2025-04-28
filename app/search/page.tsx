import { prisma } from '@/lib/prisma';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import ProductCard from '@/components/home/product-card';

type SearchPageProps = {
  searchParams: { query?: string };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = searchParams.query;

  const products = searchQuery
    ? await prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: searchQuery, mode: 'insensitive' } },
            { description: { contains: searchQuery, mode: 'insensitive' } },
            { category: { contains: searchQuery, mode: 'insensitive' } },
          ],
        },
        orderBy: { createdAt: 'desc' },
      })
    : [];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 min-h-[60vh]">
        {!searchQuery ? (
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">No search query provided.</h1>
            <p className="text-gray-600">
              Please type something in the search bar.
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">
              No products found for &quot;{searchQuery}&quot;
            </h1>
            <p className="text-gray-600">
              Try searching for something else or browse our latest collections.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center">
              Search Results for &quot;{searchQuery}&quot;
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    image: product.images?.[0] || '/placeholder.svg',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
