import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-serif font-light text-center mb-8">
            About SEOR
          </h1>

          <div className="space-y-6 text-gray-700">
            <p>
              Welcome to SEOR, where style meets affordability. We&apos;re a
              British jewellery brand created with a simple mission: to offer
              beautiful, on-trend pieces that don&apos;t break the bank.
            </p>

            <p>
              Founded in 2022, SEOR was born from the belief that every woman
              deserves to express herself through stylish accessories without
              the luxury price tag. Our carefully curated collections feature
              necklaces, earrings and bracelets priced between £10–25, making
              fashion forward jewellery accessible to all.
            </p>

            <p>
              Each SEOR piece is thoughtfully designed in our London studio,
              focusing on contemporary aesthetics that complement your everyday
              style. We work with trusted manufacturers who share our commitment
              to quality and ethical practices, ensuring that our affordable
              prices never compromise on standards.
            </p>

            <p>
              We&apos;re proud to be a small, independent British brand with a
              personal touch. When you shop with SEOR, you&apos;re supporting a
              business that values sustainability, inclusivity and customer
              satisfaction above all else.
            </p>

            <p>
              Our jewellery is designed to be versatile, durable and easy to
              wear whether you&apos;re heading to the office, meeting friends
              for brunch or enjoying a night out. We believe that beautiful
              accessories should be a part of everyday life, not saved for
              special occasions.
            </p>

            <p className="text-sm text-gray-500 mt-6">
              For enquiries, please email us at{' '}
              <a
                href="mailto:fazulhaquekhan@gmail.com"
                className="text-gray-700 underline hover:text-black transition-colors"
              >
                fazulhaquekhan@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
