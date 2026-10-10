import React from 'react';
import { siteConfig, getWhatsAppGeneralUrl } from '../config/site';

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppGeneralUrl("General Inquiry");

  return (
    <footer id="footer" className="bg-charcoal text-ivory pt-16 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-charcoal-muted/40">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide font-medium">
                LUCKY GLAMOURS
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-sage/70 block mt-1">
                Botanical Skincare & Artisan Oils
              </span>
            </a>
            <p className="font-sans text-xs text-ivory/70 leading-relaxed max-w-sm font-light">
              Handcrafted small-batch soaps and slow-infused botanical hair & body oils. Made with cold-pressed oils, unrefined shea butter, and organic botanicals.
            </p>
            <div className="text-xs font-sans text-sage/80 pt-2">
              <span>{siteConfig.locationPlaceholder}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-medium text-ivory uppercase tracking-wider text-sage">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-sans text-ivory/80">
              <li>
                <a href="#hero" className="hover:text-sage transition-colors">Home</a>
              </li>
              <li>
                <a href="#shop" className="hover:text-sage transition-colors">Shop Collection</a>
              </li>
              <li>
                <a href="#story" className="hover:text-sage transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-sage transition-colors">Botanical Ingredients</a>
              </li>
              <li>
                <a href="#gifting" className="hover:text-sage transition-colors">Gift Sets</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sage transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Contact & Orders */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-base font-medium text-ivory uppercase tracking-wider text-sage">
              Orders & Contact
            </h3>
            <p className="font-sans text-xs text-ivory/70 leading-relaxed font-light">
              We process all customer inquiries and batch orders directly on WhatsApp for personal attention.
            </p>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-olive hover:bg-olive-light text-ivory text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-sm transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 text-xs font-sans text-ivory/60 space-y-1">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="underline hover:text-ivory">{siteConfig.email}</a></p>
              <p>Instagram: <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-ivory">@luckyglamours</a> (Placeholder)</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/50">
          <p>© {new Date().getFullYear()} Lucky Glamours. Handcrafted Botanical Skincare.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-ivory cursor-pointer">Privacy Policy</span>
            <span className="hover:text-ivory cursor-pointer">Shipping & Delivery</span>
            <span className="hover:text-ivory cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
