'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="mb-4 overflow-hidden">
          <Image
            src={product.images?.[0] || '/placeholder.svg'}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-2">
        <h3 className="font-serif text-sm md:text-base font-light">
          {product.name}
        </h3>
        <p className="text-sm text-gray-700">£{product.price.toFixed(2)}</p>
        <Button
          variant="outline"
          className="w-full mt-2 rounded-none border-gray-300 text-xs tracking-wider hover:bg-gray-900 hover:text-white transition-colors duration-300"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
