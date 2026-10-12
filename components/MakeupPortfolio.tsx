"use client";

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_FILTER_TABS, PortfolioItem } from '../data/portfolio';
import { getWhatsAppServiceUrl } from '../config/site';

export const MakeupPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('bridal');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="bridal" className="py-16 md:py-24 bg-ivory-light border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            BRIDAL & EVENT LOOKBOOK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Bridal & Event Portfolio
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Real brides, couple styling, vibrant Haldi rituals, and intricate hair artistry crafted with love and precision by Lucky Glamours.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Portfolio categories">
          {PORTFOLIO_FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50 ${
                  isActive
                    ? 'bg-olive text-ivory shadow-xs'
                    : 'bg-ivory/80 border border-sage/60 text-charcoal hover:border-olive/50 hover:bg-ivory'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-ivory border border-sage/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-olive/60 hover:shadow-md cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div>
                {/* Image Container with Tag */}
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory-dark/20">
                  {item.tag && (
                    <span className="absolute top-3 left-3 z-10 font-sans text-[10px] uppercase tracking-wider font-semibold bg-ivory/95 text-earth px-2.5 py-1 rounded-xs border border-sage/60 shadow-2xs">
                      {item.tag}
                    </span>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.altText || item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="bg-ivory/95 text-charcoal text-[11px] font-sans uppercase tracking-widest font-semibold px-4 py-2 rounded-xs border border-sage shadow-md">
                      View Full Look ↗
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-sans text-earth">
                    <span className="uppercase tracking-wider font-semibold">{item.categoryLabel}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-olive transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-sage/30 mt-3 pt-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                  className="text-[11px] font-sans uppercase tracking-wider font-semibold text-olive hover:text-olive-dark transition-colors inline-flex items-center gap-1"
                >
                  <span>Enlarge & Details</span>
                  <span>→</span>
                </button>
                <a
                  href={getWhatsAppServiceUrl(`Enquiry regarding ${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] font-sans uppercase tracking-wider font-semibold text-charcoal/70 hover:text-olive transition-colors flex items-center gap-1"
                >
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Look Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0" onClick={() => setSelectedItem(null)} aria-hidden="true" />
            <div className="relative bg-ivory border border-sage/80 rounded-sm w-full max-w-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row">
              
              {/* Image side */}
              <div className="md:w-1/2 bg-ivory-dark/30 relative flex items-center justify-center max-h-[75vh] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.altText || selectedItem.title}
                  className="w-full h-full object-contain md:object-cover max-h-[75vh]"
                />
                {selectedItem.tag && (
                  <span className="absolute top-3 left-3 font-sans text-[10px] uppercase tracking-wider font-semibold bg-ivory/95 text-earth px-2.5 py-1 rounded-xs border border-sage/60">
                    {selectedItem.tag}
                  </span>
                )}
              </div>

              {/* Details side */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-earth font-semibold block">
                        {selectedItem.categoryLabel}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-charcoal mt-1">
                        {selectedItem.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="p-1 text-charcoal/70 hover:text-charcoal text-lg"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                    {selectedItem.description}
                  </p>

                  <div className="p-3 bg-sage-light/40 rounded border border-sage/40 space-y-1.5 text-xs font-sans text-charcoal/80">
                    <span className="font-semibold text-charcoal block text-[11px] uppercase tracking-wider">
                      Lucky Glamours Artistry Notes
                    </span>
                    <ul className="space-y-1 text-[11px] text-charcoal/70">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                        <span>Tailored high-definition skin preparation & tone matching</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                        <span>Complete saree/lehenga draping & jewelry placement</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                        <span>Long-wearing, water-resistant celebration finish</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-sage/40 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="w-full sm:w-auto px-4 py-2.5 text-[11px] uppercase font-semibold border border-sage-dark text-charcoal rounded-sm hover:border-olive"
                  >
                    Close
                  </button>
                  <a
                    href={getWhatsAppServiceUrl(`Hello Lucky Glamours, I am interested in booking or enquiring about the ${selectedItem.title} look.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-ivory text-[11px] uppercase tracking-wider font-semibold py-2.5 px-4 rounded-sm transition-all shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Book This Look on WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
