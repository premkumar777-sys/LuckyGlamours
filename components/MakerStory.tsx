import React from 'react';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const MakerStory: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block mb-2">
            ABOUT LUCKY GLAMOURS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
            Beauty is an art. Self-care is a ritual.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
              Lucky Glamours was founded on the belief that beauty should feel personal, authentic, and empowering. What began as a dedicated practice in makeup artistry has expanded into a multi-faceted beauty atelier combining tailored bridal and occasion styling, practical skill training in our Beauty Academy, and small-batch handmade soaps and botanical oils.
            </p>
            <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
              Whether styling a bride for her wedding day, mentoring aspiring artists in brow and makeup techniques, or formulating cold-process soap bars with plant oils and raw botanicals, we approach every aspect of our work with patience, precision, and intention.
            </p>
            
            <div className="p-4 bg-ivory border-l-2 border-olive rounded-r space-y-1">
              <span className="font-serif text-lg font-medium text-charcoal block">Our Philosophy</span>
              <p className="font-sans text-xs text-earth italic">
                &ldquo;We don&apos;t apply templates to beauty. Every face, every student, and every batch of botanical oil receives our personal care.&rdquo;
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-sans text-charcoal/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Personalized Bridal Styling</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Practical Academy Training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Handmade Soap Crafting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span>Cold-Pressed Botanical Oils</span>
              </div>
            </div>
          </div>

          {/* Founder & Work Process Placeholders */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-2 bg-ivory border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[FOUNDER PHOTOGRAPH]"
                aspectRatio="portrait"
                subText="Founder portrait in beauty studio / atelier"
              />
            </div>
            <div className="p-2 bg-ivory border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[BEAUTY WORK PROCESS PHOTOGRAPH]"
                aspectRatio="portrait"
                subText="Artist applying bridal makeup & hair styling"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
