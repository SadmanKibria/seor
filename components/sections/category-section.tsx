import Image from 'next/image';
import Link from 'next/link';

export default function CategorySection() {
  return (
    <section className="py-16 md:py-24 space-y-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Earrings Category */}
          <div className="group relative overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative h-[400px]">
              <Image
                src="/temp-img.jpg?height=800&width=600"
                alt="Earrings Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="font-serif text-2xl font-light text-white mb-4 tracking-wide">
                Earrings
              </h3>
              <Link href="/products/earrings">
                <span className="inline-block bg-white text-gray-900 px-6 py-2 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
                  SHOP NOW
                </span>
              </Link>
            </div>
          </div>

          {/* Necklaces Category */}
          <div className="group relative overflow-hidden bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative h-[400px]">
              <Image
                src="/temp-img.jpg?height=800&width=600"
                alt="Necklaces Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="font-serif text-2xl font-light text-white mb-4 tracking-wide">
                Necklaces
              </h3>
              <Link href="/products/necklaces">
                <span className="inline-block bg-white text-gray-900 px-6 py-2 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
                  SHOP NOW
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
