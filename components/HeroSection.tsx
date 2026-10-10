import React from 'react';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const HeroSection: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-ivory py-12 md:py-20 lg:py-24 border-b border-sage/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-light/60 border border-sage/80 rounded-full">
              <span className="w-2 h-2 rounded-full bg-olive" />
              <span className="font-sans text-[11px] font-semibold tracking-super-wide uppercase text-earth">
                THOUGHTFULLY HANDCRAFTED
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-charcoal font-normal leading-[1.15]">
              Nature, crafted <br className="hidden sm:block" />
              <span className="italic font-serif text-olive">with care.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-xl font-light">
              Discover handmade soaps and thoughtfully crafted oils for your everyday self-care rituals.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#shop"
                onClick={(e) => handleScroll(e, '#shop')}
                className="inline-flex items-center justify-center bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-sm transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-olive/50"
              >
                Explore the Collection
              </a>
              <a
                href="#story"
                onClick={(e) => handleScroll(e, '#story')}
                className="inline-flex items-center justify-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50"
              >
                Our Story
              </a>
            </div>

            {/* Factual Trust Indicators */}
            <div className="pt-8 border-t border-sage/50 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="block font-serif text-xl font-medium text-charcoal">Cold-Process</span>
                <span className="block text-xs font-sans text-earth">Slow Cured Bars</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-medium text-charcoal">Pure Oils</span>
                <span className="block text-xs font-sans text-earth">Cold-Pressed Botanicals</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-medium text-charcoal">Small Batches</span>
                <span className="block text-xs font-sans text-earth">Artisanal Craft</span>
              </div>
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="lg:col-span-6">
            <div className="relative p-2 sm:p-4 bg-ivory-dark/30 border border-sage/60 rounded-sm shadow-sm">
              <ImagePlaceholder
                label="[HERO PRODUCT PHOTOGRAPH]"
                aspectRatio="hero"
                className="shadow-sm"
                subText="Editorial hero photograph of handcrafted botanical soaps & infused oils"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
