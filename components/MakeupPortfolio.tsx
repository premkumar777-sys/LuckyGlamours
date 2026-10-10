"use client";

import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';
import { getWhatsAppGeneralUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const MakeupPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? PORTFOLIO_CATEGORIES
    : PORTFOLIO_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="bridal" className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            BRIDAL & EVENT LOOKBOOK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Bridal & Event Portfolio
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Explore categories covering couture bridal transformations, groom grooming, engagement aesthetics, and pre-wedding shoots.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Portfolio categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50 ${
              activeCategory === 'all'
                ? 'bg-olive text-ivory shadow-xs'
                : 'bg-ivory/60 border border-sage/60 text-charcoal hover:border-olive/50'
            }`}
          >
            All Categories
          </button>
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50 ${
                activeCategory === cat.id
                  ? 'bg-olive text-ivory shadow-xs'
                  : 'bg-ivory/60 border border-sage/60 text-charcoal hover:border-olive/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="bg-ivory border border-sage/60 rounded-sm p-4 space-y-4 hover:border-olive/60 transition-colors"
            >
              <div className="bg-ivory-dark/20 p-2 border border-sage/50 rounded-sm">
                <ImagePlaceholder
                  label={item.placeholderLabel}
                  aspectRatio="portrait"
                  subText={`Portfolio placeholder for ${item.label}`}
                />
              </div>

              <div className="space-y-1 text-center">
                <h3 className="font-serif text-xl font-medium text-charcoal">{item.label}</h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Genuine Portfolio Notice Banner */}
        <div className="bg-ivory border border-sage/70 rounded-sm p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-light/60 rounded border border-sage/60 text-earth text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-olive" />
            <span>PORTFOLIO PREPARATION IN PROGRESS</span>
          </div>

          <p className="font-serif text-xl text-charcoal italic">
            &ldquo;Our portfolio is being prepared. Contact us to discuss your specific bridal or event requirements.&rdquo;
          </p>

          <p className="font-sans text-xs text-earth max-w-xl mx-auto font-light">
            We preserve strict privacy for our bridal clients. Get in touch directly on WhatsApp to view sample looks or request a consultation tailored to your outfit and ceremony details.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppGeneralUrl("Bridal & Portfolio Consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>Discuss Your Bridal Look on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
