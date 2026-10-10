import React from 'react';
import { INGREDIENTS_LIST } from '../data/ingredients';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const IngredientsSection: React.FC = () => {
  return (
    <section id="ingredients" className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
              TRANSPARENT FORMULATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
              Botanical Integrity & Raw Oils
            </h2>
            <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light">
              We select cold-pressed plant oils, unrefined shea butter, and dry herbs for their skin compatibility and natural richness. We share all ingredients transparently so you know exactly what touches your skin.
            </p>
          </div>

          <div className="lg:col-span-6 p-3 bg-ivory border border-sage/60 rounded-sm">
            <ImagePlaceholder
              label="[BOTANICAL INGREDIENT PHOTOGRAPH]"
              aspectRatio="wide"
              subText="Macro photograph of Kashmiri saffron, calendula petals, and unrefined cold-pressed oils"
            />
          </div>

        </div>

        {/* Ingredients Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENTS_LIST.map((ing, idx) => (
            <div
              key={idx}
              className="bg-ivory border border-sage/60 rounded-sm p-6 space-y-3 hover:border-olive/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-sans tracking-widest text-earth bg-sage-light/70 px-2 py-0.5 rounded font-semibold">
                  {ing.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl text-charcoal font-medium">
                  {ing.name}
                </h3>
                {ing.botanicalName && (
                  <span className="text-xs font-serif italic text-earth block">
                    {ing.botanicalName}
                  </span>
                )}
              </div>

              <p className="font-sans text-xs text-olive font-medium">
                {ing.role}
              </p>

              <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                {ing.description}
              </p>

              {ing.precautions && (
                <p className="text-[11px] font-sans text-earth bg-sage-light/40 p-2.5 rounded border border-sage/30 mt-2">
                  <span className="font-semibold block text-charcoal">Precaution:</span> {ing.precautions}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
