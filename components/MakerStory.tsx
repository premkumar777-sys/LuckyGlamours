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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
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

          {/* Founder & Work Process Placeholders (Preserved) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-2 bg-ivory border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[FOUNDER PHOTOGRAPH]"
                aspectRatio="portrait"
                src="/images/founder.jpg"
                altText="Founder of Lucky Glamours"
                subText="Founder & Lead Artist at Lucky Glamours"
              />
            </div>
            <div className="p-2 bg-ivory border border-sage/60 rounded-sm">
              <ImagePlaceholder
                label="[BEAUTY WORK PROCESS PHOTOGRAPH]"
                aspectRatio="portrait"
                src="/images/bridal/bridal_hairstyle.jpeg"
                altText="Traditional bridal hair styling artistry"
                subText="Artist applying bridal hair styling and ornamentation"
              />
            </div>
          </div>

        </div>

        {/* Real Client Moments Showcase Strip */}
        <div className="pt-8 border-t border-sage/40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-earth font-semibold block">
                AUTHENTIC PORTFOLIO ARCHIVE
              </span>
              <h3 className="font-serif text-2xl font-medium text-charcoal">
                Celebrated Moments by Lucky Glamours
              </h3>
            </div>
            <span className="text-xs font-sans text-earth">
              Bridal, Muhurtham, Haldi & Reception Client Works
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="group bg-ivory border border-sage/60 rounded-sm overflow-hidden p-2 hover:border-olive/60 transition-colors">
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-ivory-dark/20 mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/LuckyGlamours/traditional_bride_pink_teal_kanjeevaram.jpeg"
                  alt="Traditional South Indian Bride by Lucky Glamours"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="block font-serif text-xs font-medium text-charcoal truncate">Traditional Muhurtham</span>
              <span className="block text-[10px] font-sans text-earth">Kanjeevaram Saree & Temple Jewels</span>
            </div>

            <div className="group bg-ivory border border-sage/60 rounded-sm overflow-hidden p-2 hover:border-olive/60 transition-colors">
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-ivory-dark/20 mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/LuckyGlamours/wedding_couple_forehead_stage.jpeg"
                  alt="Wedding Mandap Sacred Moment by Lucky Glamours"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="block font-serif text-xs font-medium text-charcoal truncate">Sacred Stage Moment</span>
              <span className="block text-[10px] font-sans text-earth">Mandap Couple Styling</span>
            </div>

            <div className="group bg-ivory border border-sage/60 rounded-sm overflow-hidden p-2 hover:border-olive/60 transition-colors">
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-ivory-dark/20 mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/LuckyGlamours/haldi_mehendi_bride_yellow.jpeg"
                  alt="Haldi Ceremony Glow by Lucky Glamours"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="block font-serif text-xs font-medium text-charcoal truncate">Haldi & Mehendi Ritual</span>
              <span className="block text-[10px] font-sans text-earth">Dewy Sunlit Glamour</span>
            </div>

            <div className="group bg-ivory border border-sage/60 rounded-sm overflow-hidden p-2 hover:border-olive/60 transition-colors">
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-ivory-dark/20 mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/LuckyGlamours/reception_couple_navy_blue.jpeg"
                  alt="Midnight Navy Reception Couple by Lucky Glamours"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="block font-serif text-xs font-medium text-charcoal truncate">Gala Reception Couple</span>
              <span className="block text-[10px] font-sans text-earth">High-Definition Evening Glam</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
