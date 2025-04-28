'use client';

import { useCart } from '@/app/context/cart-context';
import { toast } from 'sonner';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type ProductDetailsProps = {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
  };
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || '/placeholder.svg'
  );
  const [isImageLoading, setIsImageLoading] = useState(true);

  function handleAddToCart() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage,
      quantity: 1,
    });

    toast.success(`${product.name} added to bag!`);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
      {/* Product Images */}
      <div className="flex flex-col space-y-4">
        <div className="relative w-full overflow-hidden rounded-md">
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
          )}
          <Image
            src={selectedImage}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
            onLoadingComplete={() => setIsImageLoading(false)}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-4 mt-2">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 overflow-hidden rounded-md cursor-pointer border-2 ${
                selectedImage === img ? 'border-gray-800' : 'border-transparent'
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} thumbnail ${idx + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-xl font-light text-gray-700">
            £{product.price.toFixed(2)}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <div className="pt-4 space-y-4">
          <Button
            className="bg-gray-900 hover:bg-black text-white rounded-none px-8 py-6 h-auto text-sm tracking-widest transition-all duration-300 flex-1 md:flex-none md:min-w-[180px]"
            onClick={handleAddToCart}
          >
            Add to Bag
          </Button>
          <p className="text-xs text-gray-500">
            Free UK delivery on all orders
          </p>
        </div>
      </div>
    </div>
  );
}
