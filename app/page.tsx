import CategorySection from '@/components/category-section';
import CraftsmanshipSection from '@/components/craftsmanship-section';
import FeaturedProducts from '@/components/featured-products';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <CraftsmanshipSection />
      <Footer />
    </div>
  );
}
