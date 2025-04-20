import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-serif font-light text-center mb-8">
            Terms of Service
          </h1>

          <div className="space-y-8 text-gray-700">
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Introduction
              </h2>
              <p>
                Welcome to SEOR. These terms and conditions govern your use of
                our website and the purchase of products from our online shop.
                By using our website and placing an order with us, you accept
                these terms in full. If you disagree with any part of these
                terms, please do not use our website or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Orders and Payment
              </h2>
              <p>
                When you place an order, you are offering to purchase a product
                at the price stated. All orders are subject to acceptance and
                availability. We accept payment via credit/debit card and
                PayPal. By submitting an order, you confirm that the payment
                details provided are valid and correct. All prices are in
                British Pounds (£) and include VAT where applicable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Product Information
              </h2>
              <p>
                We make every effort to display our products accurately, but
                slight variations in colour and design may occur due to screen
                settings. All measurements and sizes are approximate. We reserve
                the right to change product specifications without notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Intellectual Property
              </h2>
              <p>
                All content on our website, including text, graphics, logos,
                images and software, is the property of SEOR and is protected by
                UK and international copyright laws. You may view and download
                content for personal, non-commercial use only.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Limitation of Liability
              </h2>
              <p>
                While we strive to provide accurate information, we do not
                guarantee that our website will be error-free or uninterrupted.
                We will not be liable for any indirect, consequential or
                incidental damages arising from your use of our website or
                products. Our liability is limited to the purchase price of the
                products you have ordered.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
