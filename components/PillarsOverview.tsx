import React from 'react';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const PillarsOverview: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="explore" className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            THE WORLD OF LUCKY GLAMOURS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Artistry, Education & Handcrafted Skincare
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Explore our three core pillars designed to empower your beauty journey through personal makeup styling, professional training, and botanical self-care.
          </p>
        </div>

        {/* 3 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Pillar 1: Beauty & Makeup Artistry */}
          <div className="bg-ivory border border-sage/60 rounded-sm p-6 flex flex-col justify-between hover:border-olive/60 transition-all hover:shadow-sm">
            <div className="space-y-4">
              <div className="p-2 bg-ivory-dark/30 border border-sage/50 rounded-sm">
                <ImagePlaceholder
                  label="[BEAUTY SERVICES PHOTOGRAPH]"
                  aspectRatio="landscape"
                  subText="Personalized makeup styling for party, gala & special occasions"
                />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-earth bg-sage-light/60 px-2.5 py-0.5 rounded inline-block">
                BEAUTY & MAKEUP ARTISTRY
              </span>
              <h3 className="font-serif text-2xl text-charcoal font-medium">
                Occasion & Party Styling
              </h3>
              <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                Personalized beauty services for weddings, celebrations, photoshoots, and special occasions.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="w-full inline-flex items-center justify-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-xs uppercase tracking-wider font-semibold py-3 rounded-sm transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Pillar 2: Bridal & Groom Makeup */}
          <div className="bg-ivory border border-sage/60 rounded-sm p-6 flex flex-col justify-between hover:border-olive/60 transition-all hover:shadow-sm">
            <div className="space-y-4">
              <div className="p-2 bg-ivory-dark/30 border border-sage/50 rounded-sm">
                <ImagePlaceholder
                  label="[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]"
                  aspectRatio="landscape"
                  subText="Bridal & groom couture makeup styling for wedding ceremonies"
                />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-earth bg-sage-light/60 px-2.5 py-0.5 rounded inline-block">
                BRIDAL & GROOM MAKEUP
              </span>
              <h3 className="font-serif text-2xl text-charcoal font-medium">
                Couture Wedding Styling
              </h3>
              <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                Thoughtfully tailored makeup for brides, grooms, engagements, weddings, receptions, and pre-wedding celebrations.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="#bridal"
                onClick={(e) => handleScroll(e, '#bridal')}
                className="w-full inline-flex items-center justify-center bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-wider font-semibold py-3 rounded-sm transition-all shadow-xs"
              >
                Explore Bridal Services
              </a>
            </div>
          </div>

          {/* Pillar 3: Beauty Academy */}
          <div className="bg-ivory border border-sage/60 rounded-sm p-6 flex flex-col justify-between hover:border-olive/60 transition-all hover:shadow-sm">
            <div className="space-y-4">
              <div className="p-2 bg-ivory-dark/30 border border-sage/50 rounded-sm">
                <ImagePlaceholder
                  label="[BEAUTY TRAINING PHOTOGRAPH]"
                  aspectRatio="landscape"
                  subText="Hands-on beauty training & professional skill development classes"
                />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-earth bg-sage-light/60 px-2.5 py-0.5 rounded inline-block">
                BEAUTY ACADEMY
              </span>
              <h3 className="font-serif text-2xl text-charcoal font-medium">
                Skill Training Courses
              </h3>
              <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                Learn practical beauty techniques through structured training in brows, makeup, and other beauty skills offered by Lucky Glamours.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="#academy"
                onClick={(e) => handleScroll(e, '#academy')}
                className="w-full inline-flex items-center justify-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-xs uppercase tracking-wider font-semibold py-3 rounded-sm transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </div>

        </div>

        {/* Botanical Skincare Feature Banner */}
        <div className="bg-ivory border border-sage/70 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-olive" />
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-earth">
                BOTANICAL SKINCARE LINE
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal">
              Handmade Cold-Process Soaps & Botanical Oils
            </h3>
            <p className="font-sans text-xs text-charcoal/70 max-w-2xl font-light">
              Complementing our beauty services, we handcraft small-batch cold-process soaps and infused hair and body oils using pure coconut, sesame, shea butter, and Kashmiri botanicals.
            </p>
          </div>

          <a
            href="#shop"
            onClick={(e) => handleScroll(e, '#shop')}
            className="shrink-0 bg-transparent border border-olive text-olive hover:bg-olive hover:text-ivory text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-sm transition-colors"
          >
            Shop Soaps & Oils →
          </a>
        </div>

      </div>
    </section>
  );
};
