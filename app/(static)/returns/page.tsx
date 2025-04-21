import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-serif font-light text-center mb-8">
            Return Policy
          </h1>

          <div className="space-y-8 text-gray-700">
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Our Promise
              </h2>
              <p>
                We want you to be completely happy with your SEOR purchase. If
                for any reason you&apos;re not satisfied, we offer a
                straightforward returns process to ensure your shopping
                experience remains positive.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Return Period
              </h2>
              <p>
                You have 30 days from the date of delivery to return unworn
                items in their original packaging. This return window gives you
                plenty of time to try on your jewellery and decide if it&apos;s
                right for you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                How to Return
              </h2>
              <p>
                To initiate a return, please email us at
                fazulhaquekhan@gmail.com with your order number and the items
                you wish to return. We&apos;ll provide a return address and
                instructions. Please note that customers are responsible for the
                cost of return postage unless the item is faulty or incorrect.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">Refunds</h2>
              <p>
                Once we receive your return, we&apos;ll process your refund
                within 5 working days. Refunds will be issued to the original
                payment method. Please allow up to 10 working days for the
                refund to appear in your account, depending on your bank&apos;s
                processing times.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">Exchanges</h2>
              <p>
                If you&apos;d like to exchange an item for a different size or
                style, please indicate this in your return email. We&apos;ll do
                our best to accommodate your request, subject to stock
                availability. If your preferred item is unavailable, we&apos;ll
                process a refund instead.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
