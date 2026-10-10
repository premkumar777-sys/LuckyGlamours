"use client";

import React, { useState } from 'react';
import { siteConfig, getWhatsAppGeneralUrl } from '../config/site';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Beauty Services', href: '#services' },
    { name: 'Bridal & Events', href: '#bridal' },
    { name: 'Beauty Academy', href: '#academy' },
    { name: 'Shop Soaps & Oils', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur-md border-b border-sage/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, '#hero')}
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-wide text-charcoal font-medium group-hover:text-olive transition-colors">
            LUCKY GLAMOURS
          </span>
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-earth/80">
            Beauty · Bridal · Academy · Botanicals
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs font-sans font-medium text-charcoal/90 hover:text-olive tracking-wide transition-colors py-1 border-b border-transparent hover:border-olive/40"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={getWhatsAppGeneralUrl("Beauty & Bridal Enquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md focus:ring-2 focus:ring-olive/50"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-charcoal hover:text-olive focus:outline-none focus:ring-2 focus:ring-olive/50 rounded"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-b border-sage px-4 pt-4 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base font-sans font-medium text-charcoal hover:text-olive py-2 border-b border-sage/30"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={getWhatsAppGeneralUrl("General Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-olive text-ivory text-sm uppercase tracking-wider font-semibold py-3 rounded-sm shadow"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
