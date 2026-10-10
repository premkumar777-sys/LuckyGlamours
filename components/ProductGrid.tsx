"use client";

import React, { useState } from 'react';
import { PRODUCTS_CATALOG, CATEGORIES, Product } from '../data/products';
import { ProductCard } from './ProductCard';

export interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-16 md:py-24 bg-ivory border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            OUR HANDMADE COLLECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Thoughtfully Crafted Soaps & Oils
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Browse our small-batch handmade soaps, infused hair oils, and body infusions. All orders are fulfilled directly via WhatsApp.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Product categories">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50 ${
                  isActive
                    ? 'bg-olive text-ivory shadow-xs'
                    : 'bg-ivory-dark/40 border border-sage/60 text-charcoal hover:border-olive/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
