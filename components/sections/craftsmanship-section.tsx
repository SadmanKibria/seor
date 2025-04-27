import Image from 'next/image';

export default function CraftsmanshipSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-widest mb-6 text-gray-500">
            Our Promise
          </h2>

          <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 tracking-wide">
            Quality You Can Afford
          </h3>

          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/3 order-2 md:order-1">
              <Image
                src="/temp-img.jpg?height=400&width=300"
                alt="Jewelry craftsmanship"
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-2/3 order-1 md:order-2 text-left">
              <p className="text-gray-600 leading-relaxed mb-5 font-light">
                At SEOR, we believe beautiful jewelry shouldn&apos;t come with a
                luxury price tag. Each piece is thoughtfully designed and
                carefully crafted using quality materials that look premium
                without the markup.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                We source directly from trusted manufacturers and sell directly
                to you, cutting out the middlemen and passing the savings on.
                The result? Stylish, on-trend jewelry that&apos;s accessible to
                everyone, with prices ranging from £10 to £25.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
