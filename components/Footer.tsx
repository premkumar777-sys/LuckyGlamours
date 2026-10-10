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
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src="/logo.jpg"
                alt="Lucky Glamours Logo"
                className="w-12 h-12 rounded-full border border-sage/40 object-cover group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-ivory tracking-wide font-medium group-hover:text-sage transition-colors">
                  LUCKY GLAMOURS
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-sage/70 block">
                  Beauty Artistry · Bridal · Academy
                </span>
              </div>
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

            <div className="pt-3 border-t border-charcoal-muted/30 space-y-3">
              <span className="font-serif text-xs uppercase tracking-wider text-sage font-medium block">Follow Our Artistry</span>
              <div className="flex items-center space-x-3 text-ivory">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Lucky Glamours on Instagram"
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#E4405F] hover:bg-[#d03451] text-white rounded-full transition-all text-xs font-sans font-medium shadow-xs group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="pr-1">Instagram</span>
                </a>

                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Lucky Glamours on YouTube"
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-full transition-all text-xs font-sans font-medium shadow-xs group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="pr-1">YouTube</span>
                </a>
              </div>
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
