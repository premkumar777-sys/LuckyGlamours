"use client";

import React, { useState } from 'react';
import { BEAUTY_SERVICES, SERVICE_CATEGORIES, BeautyService } from '../data/services';
import { getWhatsAppServiceUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const BeautyServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<BeautyService | null>(null);

  const filteredServices = activeCategory === 'all'
    ? BEAUTY_SERVICES
    : BEAUTY_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-ivory border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            PROFESSIONAL MAKEUP ARTISTRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Beauty, Bridal & Occasion Makeup
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Bespoke makeup styling for brides, grooms, pre-wedding shoots, engagements, and festive celebrations. All services are tailored through direct consultation on WhatsApp.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Service categories">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-olive/50 ${
                  isActive
                    ? 'bg-olive text-ivory shadow-xs'
                    : 'bg-ivory-dark/40 border border-sage/60 text-charcoal hover:border-olive/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const whatsappUrl = getWhatsAppServiceUrl(service.name);

            return (
              <div
                key={service.id}
                className="group bg-ivory-light border border-sage/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-olive/60 hover:shadow-sm"
              >
                <div>
                  {/* Service Image Placeholder */}
                  <div className="p-3 bg-ivory relative">
                    <span className="absolute top-5 left-5 z-10 font-sans text-[10px] uppercase tracking-widest font-semibold bg-ivory/90 text-earth px-2 py-0.5 rounded border border-sage/60">
                      {service.categoryLabel}
                    </span>
                    <ImagePlaceholder
                      label={service.placeholderLabel}
                      aspectRatio="landscape"
                      subText={`Image placeholder for ${service.name}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl text-charcoal font-medium leading-snug group-hover:text-olive transition-colors">
                        {service.name}
                      </h3>
                      <span className="font-sans text-xs font-semibold text-olive shrink-0 bg-sage-light/70 px-2 py-1 rounded">
                        {service.startingPrice || "Enquire for pricing"}
                      </span>
                    </div>

                    <div className="text-[11px] font-sans text-earth">
                      <span className="font-semibold text-charcoal">Suitable Occasion:</span> {service.occasion}
                    </div>

                    <p className="font-sans text-xs text-charcoal/70 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    {service.packageDetails && (
                      <div className="pt-2">
                        <span className="text-[11px] font-serif font-medium text-charcoal block mb-1">Package Highlights:</span>
                        <ul className="space-y-1 text-[11px] font-sans text-charcoal/80">
                          {service.packageDetails.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-olive shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="w-full text-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-[11px] uppercase tracking-wider font-semibold py-2.5 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-olive/40"
                  >
                    View Specs
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-olive hover:bg-olive-dark text-ivory text-[11px] uppercase tracking-wider font-semibold py-2.5 rounded-sm transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-olive/40"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Modal Popup */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0" onClick={() => setSelectedService(null)} aria-hidden="true" />
            <div className="relative bg-ivory border border-sage/80 rounded-sm w-full max-w-2xl overflow-hidden shadow-2xl z-10 p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-sage/40 pb-4">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-earth font-semibold block">
                    {selectedService.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-charcoal">{selectedService.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="p-1 text-charcoal/70 hover:text-charcoal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs font-sans text-charcoal/80">
                <ImagePlaceholder
                  label={selectedService.placeholderLabel}
                  aspectRatio="landscape"
                  subText={`Detailed placeholder for ${selectedService.name}`}
                />
                <p className="text-sm leading-relaxed">{selectedService.description}</p>
                
                <div className="p-3 bg-sage-light/40 rounded border border-sage/40">
                  <span className="font-semibold block text-charcoal mb-1">Pricing & Customization:</span>
                  {selectedService.startingPrice || "Enquire for pricing"}. Exact pricing depends on event date, venue location, and package inclusions.
                </div>

                {selectedService.packageDetails && (
                  <div className="space-y-2">
                    <span className="font-semibold block text-charcoal">Package Features Included:</span>
                    <ul className="space-y-1">
                      {selectedService.packageDetails.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-sage/40 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 text-xs uppercase font-semibold border border-sage-dark text-charcoal rounded-sm"
                >
                  Close
                </button>
                <a
                  href={getWhatsAppServiceUrl(selectedService.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-olive text-ivory text-xs uppercase font-semibold px-6 py-2.5 rounded-sm"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
