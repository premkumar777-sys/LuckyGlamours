import React from 'react';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const MakerStory: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-ivory border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block mb-2">
            CRAFTSMANSHIP & HERITAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
            Made by hand. Made with intention.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
              Lucky Glamours began as a personal passion for creating simple, honest skincare items using natural ingredients. What started in a home kitchen as small-batch experiments with cold-pressed oils and herbal infusions has grown into an artisanal botanical atelier.
            </p>
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
              We carefully formulate each soap bar and oil blend by hand. We believe in taking time—allowing our cold-process soaps to cure slowly over weeks so they remain gentle and firm, and letting botanical herbs infuse naturally into base oils.
            </p>
            
            <div className="p-4 bg-ivory-light border-l-2 border-olive rounded-r space-y-1">
              <span className="font-serif text-lg font-medium text-charcoal block">Artisan Maker Note</span>
              <p className="font-sans text-xs text-earth italic">
                &ldquo;Every soap bar is poured, cut, and wrapped by hand. No two bars are identical, but each carries our commitment to thoughtful craftsmanship.&rdquo;
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-sans text-charcoal/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Small Batch Production</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Hand-Poured & Cut</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Slow Cured 4–6 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Thoughtful Gifting</span>
              </div>
            </div>
          </div>

          {/* Placeholders Column (Founder & Process) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-2 bg-ivory-dark/20 border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[FOUNDER PHOTOGRAPH]"
                aspectRatio="portrait"
                subText="Artisan maker portrait in workshop environment"
              />
            </div>
            <div className="p-2 bg-ivory-dark/20 border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[HANDMAKING PROCESS PHOTOGRAPH]"
                aspectRatio="portrait"
                subText="Hand-cutting cured cold-process soap bars"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
