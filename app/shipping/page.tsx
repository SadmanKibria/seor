import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-serif font-light text-center mb-8">
            Shipping Information
          </h1>

          <div className="space-y-8 text-gray-700">
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                UK Delivery
              </h2>
              <p>
                We offer free standard delivery on all UK orders over £25. For
                orders under £25, a flat rate of £2.95 applies. Standard
                delivery typically takes 2-4 working days from the date of
                dispatch. We also offer next-day delivery for £4.95, available
                on orders placed before 2pm Monday to Friday (excluding bank
                holidays).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                International Shipping
              </h2>
              <p>
                We currently ship to selected European countries with a flat
                rate of £7.95. Delivery typically takes 5-10 working days,
                depending on the destination. Please note that international
                orders may be subject to customs charges, which are the
                responsibility of the customer.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Order Processing
              </h2>
              <p>
                We aim to process all orders within 1-2 working days. During
                busy periods such as sales or holidays, processing may take
                slightly longer. You&apos;ll receive a confirmation email when
                your order is dispatched, including tracking information where
                available.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">Packaging</h2>
              <p>
                All SEOR jewellery comes beautifully presented in our signature
                packaging, making it perfect for gifting. Our packaging is
                designed to be both elegant and environmentally friendly, using
                recyclable materials wherever possible.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Delivery Issues
              </h2>
              <p>
                In the rare event that your order is delayed or goes missing,
                please contact us at fazulhaquekhan@gmail.com. We&apos;ll work
                with our delivery partners to locate your package or arrange a
                replacement if necessary.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
