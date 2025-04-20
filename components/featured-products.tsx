import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Diamond Stud Earrings',
    price: '£1,250',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 2,
    name: 'Pearl Drop Pendant',
    price: '£890',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 3,
    name: 'Gold Chain Bracelet',
    price: '£750',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    id: 4,
    name: 'Sapphire Halo Ring',
    price: '£1,890',
    image: '/placeholder.svg?height=400&width=400',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-light text-center mb-12 tracking-wide">
          Featured Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="mb-4 overflow-hidden">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-sm md:text-base font-light">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700">{product.price}</p>
                <Button
                  variant="outline"
                  className="w-full mt-2 rounded-none border-gray-300 text-xs tracking-wider hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
