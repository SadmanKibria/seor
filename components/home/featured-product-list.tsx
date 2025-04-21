'use client';

import ProductCard from '@/components/home/product-card';

type FeaturedProductListProps = {
  products: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
  }[];
};

export default function FeaturedProductList({
  products,
}: FeaturedProductListProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-light text-center mb-8 tracking-wide">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
