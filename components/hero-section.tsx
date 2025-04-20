import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-32 md:py-48 lg:py-56">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] bg-repeat opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center space-y-8">
        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900">
          Timeless Elegance, <br className="hidden sm:block" />
          <span className="font-normal">Crafted for You</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto font-light tracking-wide leading-relaxed">
          Discover our handcrafted collection of fine jewelry, designed to
          elevate your personal style with understated luxury.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            asChild
            className="bg-gray-900 hover:bg-black text-white rounded-none px-8 py-6 h-auto text-sm tracking-widest transition-all duration-300"
          >
            <Link href="/products/earrings">SHOP EARRINGS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
