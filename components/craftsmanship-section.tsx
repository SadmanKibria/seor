import Image from 'next/image';

export default function CraftsmanshipSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-widest mb-6 text-gray-500">
            Our Craftsmanship
          </h2>

          <h3 className="font-serif text-2xl md:text-3xl font-light mb-8 tracking-wide">
            Artistry in Every Detail
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Jewelry craftsmanship"
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-2/3 order-1 md:order-2 text-left">
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                Each SEOR piece is meticulously handcrafted by our master
                artisans, who bring decades of expertise to their work. We
                source only the finest ethically-obtained materials from
                brilliant diamonds to lustrous pearls ensuring that every
                creation meets our exacting standards.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                Our commitment to excellence extends beyond aesthetics. Each
                piece undergoes rigorous quality control, guaranteeing jewelry
                that is not only beautiful but built to become an heirloom,
                passed down through generations as a testament to timeless
                elegance and superior craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
