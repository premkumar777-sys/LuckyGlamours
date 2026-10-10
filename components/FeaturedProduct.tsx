import React from 'react';
import { PRODUCTS_CATALOG, Product } from '../data/products';
import { getWhatsAppProductUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export interface FeaturedProductProps {
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ onSelectProduct }) => {
  // Use the featured soap or first featured product
  const featured = PRODUCTS_CATALOG.find((p) => p.isFeatured) || PRODUCTS_CATALOG[0];
  const whatsappUrl = getWhatsAppProductUrl(featured.name, featured.size);

  return (
    <section className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ivory border border-sage/70 rounded-sm p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Featured Image Placeholder */}
            <div className="lg:col-span-6 bg-ivory-dark/30 p-3 border border-sage/50 rounded-sm">
              <ImagePlaceholder
                label="[FEATURED PRODUCT PHOTOGRAPH]"
                aspectRatio="square"
                src={featured.imageUrl}
                altText={featured.name}
                subText="Editorial photograph highlighting artisanal soap texture and botanical inclusions"
              />
            </div>

            {/* Featured Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 bg-sage-light border border-sage/80 rounded">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-earth">
                  ARTISANAL SPOTLIGHT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
                {featured.name}
              </h2>

              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl font-semibold text-olive">
                  ₹{featured.priceInINR}
                </span>
                <span className="text-xs font-sans text-earth bg-sage-light/80 px-3 py-1 rounded font-medium">
                  {featured.size}
                </span>
              </div>

              <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light">
                {featured.description}
              </p>

              {/* Factual Ingredients Snippet */}
              <div className="space-y-1.5 pt-2">
                <span className="font-serif text-base font-medium text-charcoal block">Key Ingredients</span>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                  {featured.ingredients.slice(0, 4).join(" · ")}
                </p>
              </div>

              {/* Directions & Precautions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-ivory-dark/30 border border-sage/40 rounded">
                  <span className="font-serif text-sm font-medium text-charcoal block mb-1">Directions</span>
                  <p className="font-sans text-[11px] text-earth line-clamp-3">
                    {featured.directions}
                  </p>
                </div>
                <div className="p-3 bg-ivory-dark/30 border border-sage/40 rounded">
                  <span className="font-serif text-sm font-medium text-charcoal block mb-1">Precautions</span>
                  <p className="font-sans text-[11px] text-earth line-clamp-3">
                    {featured.precautions}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-olive/50"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectProduct(featured)}
                  className="inline-flex items-center justify-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-sm transition-colors"
                >
                  Full Product Specs
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
