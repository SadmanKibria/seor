import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-serif font-light text-center mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-700">
            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Our Commitment to Your Privacy
              </h2>
              <p>
                At SEOR, we take your privacy seriously. This policy explains
                how we collect, use and protect your personal information when
                you use our website or shop with us. We are committed to
                ensuring that your privacy is protected in accordance with the
                UK Data Protection Act and GDPR regulations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Information We Collect
              </h2>
              <p>
                We collect information that you provide when placing an order,
                creating an account or signing up for our newsletter. This
                typically includes your name, email address, delivery address
                and payment details. We also collect certain information
                automatically when you visit our website, such as IP address and
                browsing behaviour, through cookies and similar technologies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                How We Use Your Information
              </h2>
              <p>
                We use your information to process orders, manage your account,
                personalise your shopping experience and keep you updated about
                products you might like. We may also use it to improve our
                website, prevent fraud and fulfil our legal obligations. We
                never sell your personal data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Your Rights
              </h2>
              <p>
                Under UK data protection law, you have rights including access
                to your data, correction of inaccurate data, erasure in certain
                circumstances and restriction of processing. To exercise these
                rights, please contact us at fazulhaquekhan@gmail.com.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif font-light mb-2">
                Updates to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time to reflect
                changes in our practices or for legal reasons. We will notify
                you of any significant changes by email or through our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
