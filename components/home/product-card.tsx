'use client';

import { useCart } from '@/app/context/cart-context';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link
        href={`/products/${product.slug}`}
        className="block mb-4 overflow-hidden"
      >
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="space-y-2">
        <h3 className="font-serif text-sm md:text-base font-light">
          {product.name}
        </h3>
        <p className="text-sm text-gray-700">£{product.price.toFixed(2)}</p>

        {/* Add to Bag Button */}
        <Button
          variant="outline"
          className="w-full mt-2 rounded-none border-gray-300 text-xs tracking-wider hover:bg-gray-900 hover:text-white transition-colors duration-300"
          onClick={() => {
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            });
            toast.success(`${product.name} added to bag!`);
          }}
        >
          Add to Bag
        </Button>
      </div>
    </div>
  );
}
