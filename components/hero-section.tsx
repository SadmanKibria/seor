import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] bg-repeat opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center space-y-6">
        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-900">
          Stylish Jewelry <br className="hidden sm:block" />
          <span className="font-normal">For Modern Women</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto font-light tracking-wide leading-relaxed">
          Discover our affordable collection of trendy jewelry pieces, designed
          to elevate your everyday style without breaking the bank.
        </p>

        {/* Price point */}
        <p className="text-sm text-gray-500 font-light">All pieces £10–25</p>

        {/* CTA Button */}
        <div className="pt-2">
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
