"use client";

import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const MakeupPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('bridal');

  const filteredCategories = PORTFOLIO_CATEGORIES.filter((c) => c.id === activeCategory);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
};
