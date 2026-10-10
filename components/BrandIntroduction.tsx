import React from 'react';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const BrandIntroduction: React.FC = () => {
  return (
    <section id="intro" className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Placeholder Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-3 bg-ivory border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[BOTANICAL INGREDIENT PHOTOGRAPH]"
                aspectRatio="portrait"
                subText="Detailed close-up of raw botanical petals, oils, and soap saponification process"
              />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
              OUR BRAND PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
              A more thoughtful daily ritual.
            </h2>
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
              At Lucky Glamours, we believe bath time should be a quiet, restorative pause in your day. We handcraft small batches of cold-process soaps and slow-infused hair and body oils using traditional techniques that respect the integrity of natural ingredients.
            </p>
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
              Every bar is allowed to cure slowly for four to six weeks, preserving the nourishing properties of plant oils, shea butter, and natural glycerin. No unnecessary fillers—just honest, carefully made personal care essentials for your everyday routine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-ivory/80 border border-sage/50 rounded-sm">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-1">Cold-Process Curing</h3>
                <p className="font-sans text-xs text-earth leading-normal">
                  Our soap bars age slowly in wooden molds to ensure a firm, long-lasting bar with soft, rich lather.
                </p>
              </div>
              <div className="p-4 bg-ivory/80 border border-sage/50 rounded-sm">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-1">Slow Botanical Infusions</h3>
                <p className="font-sans text-xs text-earth leading-normal">
                  Dried herbs and petals are gently warmed in pressed base oils to naturally absorb botanical extracts.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
