import React from 'react';
import { getWhatsAppGeneralUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const GiftCollection: React.FC = () => {
  const whatsappGiftingUrl = getWhatsAppGeneralUrl("Custom Botanical Gift Sets & Event Favors");

  return (
    <section id="gifting" className="py-16 md:py-24 bg-ivory border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ivory-light border border-sage/70 rounded-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image Placeholder Column */}
            <div className="lg:col-span-6 bg-ivory p-3 border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[GIFT SET PHOTOGRAPH]"
                aspectRatio="square"
                subText="Artisanal wooden gift box with ribbon tie containing cold-process soap bars & body oil"
              />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
                THOUGHTFUL GIFTING
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
                Curated Botanical Gift Sets & Wedding Favors
              </h2>

              <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light">
                Whether celebrating a special occasion, sending festive warm wishes, or planning personalized wedding favors, our handcrafted soaps and body oils make memorable, earth-conscious gifts.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sage-light border border-sage/80 flex items-center justify-center text-olive text-xs font-semibold shrink-0 mt-0.5">✓</span>
                  <div>
                    <h3 className="font-serif text-base font-medium text-charcoal">Custom Soap Selections</h3>
                    <p className="font-sans text-xs text-earth">Choose your recipient’s favorite cold-process bars and botanical oils.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sage-light border border-sage/80 flex items-center justify-center text-olive text-xs font-semibold shrink-0 mt-0.5">✓</span>
                  <div>
                    <h3 className="font-serif text-base font-medium text-charcoal">Eco-Friendly Packaging</h3>
                    <p className="font-sans text-xs text-earth">Plastic-free wrapping, unbleached cotton ribbon, and reusable wooden boxes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sage-light border border-sage/80 flex items-center justify-center text-olive text-xs font-semibold shrink-0 mt-0.5">✓</span>
                  <div>
                    <h3 className="font-serif text-base font-medium text-charcoal">Handwritten Gift Cards</h3>
                    <p className="font-sans text-xs text-earth">Include a custom personal note with every gift order sent directly to your loved ones.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={whatsappGiftingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-olive/50"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Inquire About Custom Gift Sets</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
