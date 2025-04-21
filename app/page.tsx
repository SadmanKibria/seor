import CategorySection from '@/components/sections/category-section';
import CraftsmanshipSection from '@/components/sections/craftsmanship-section';
import FeaturedProducts from '@/components/sections/featured-products';
import HeroSection from '@/components/sections/hero-section';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

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
