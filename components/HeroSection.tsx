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
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-charcoal font-normal leading-[1.12]">
              Your beauty, <br className="hidden sm:block" />
              <span className="italic font-serif text-olive">beautifully expressed.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-xl font-light">
              From bridal and occasion makeup to professional beauty training and thoughtfully handcrafted soaps and oils, discover the world of Lucky Glamours.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="inline-flex items-center justify-center bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-sm transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-olive/50"
              >
                Explore Beauty Services
              </a>
              <a
                href="#shop"
                onClick={(e) => handleScroll(e, '#shop')}
                className="inline-flex items-center justify-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50"
              >
                Discover Our Collection
              </a>
            </div>

            {/* Separate Academy Shortcut Link */}
            <div className="pt-2">
              <a
                href="#academy"
                onClick={(e) => handleScroll(e, '#academy')}
                className="inline-flex items-center gap-2 text-xs font-sans text-earth hover:text-olive font-medium tracking-wide underline underline-offset-4 transition-colors"
              >
                <span>Interested in professional beauty courses? Explore the Beauty Academy →</span>
              </a>
            </div>

            {/* 3 Pillars Summary Bar */}
            <div className="pt-6 border-t border-sage/50 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="block font-serif text-lg font-medium text-charcoal">Makeup Artistry</span>
                <span className="block text-xs font-sans text-earth">Bridal & Special Events</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-medium text-charcoal">Beauty Academy</span>
                <span className="block text-xs font-sans text-earth">Skill Training Courses</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-medium text-charcoal">Botanicals</span>
                <span className="block text-xs font-sans text-earth">Handmade Soaps & Oils</span>
              </div>
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="lg:col-span-6">
            <div className="relative p-2 sm:p-4 bg-ivory-dark/30 border border-sage/60 rounded-sm shadow-sm">
              <ImagePlaceholder
                label="[HERO BEAUTY PHOTOGRAPH]"
                aspectRatio="hero"
                className="shadow-sm"
                subText="Editorial hero photograph showcasing bridal makeup artistry & botanical self-care"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
