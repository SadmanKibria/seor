'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

const product = {
  id: 'silver-hoop-earrings',
  name: 'Silver Hoop Earrings',
  price: 14.99,
  description:
    'Elegant sterling silver-plated hoop earrings, perfect for everyday wear.',
  features: [
    'Nickel-free and hypoallergenic',
    'Diameter: 3cm',
    'Sterling silver plating',
    'Secure clasp fastening',
  ],
  images: ['/temp-img.jpg', '/icons/visa.svg'],
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div
                className="relative bg-gray-50 flex items-center justify-center p-4 overflow-hidden cursor-zoom-in"
                onClick={() => openModal(product.images.indexOf(selectedImage))}
              >
                <div className="relative w-full max-w-[600px] h-[600px]">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex space-x-4 mt-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 border border-gray-200 overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedImage(img);
                    }}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
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

                <ul className="space-y-2 text-sm text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>

            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-4xl hover:text-gray-300"
            >
              &#8592;
            </button>

            {/* Image */}
            <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center">
              <Image
                src={product.images[currentIndex]}
                alt="Zoomed Product"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-4xl hover:text-gray-300"
            >
              &#8594;
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
