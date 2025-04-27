import { getProduct } from './_get-product';
import { notFound } from 'next/navigation';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import ProductDetails from '@/components/products/product-details';

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <ProductDetails product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
