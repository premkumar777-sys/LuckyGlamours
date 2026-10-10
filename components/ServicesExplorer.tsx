"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, ArrowUpRight, Sparkles, Check, X, Eye } from "lucide-react";
import { SERVICES, Service } from "../data/services";
import { MagneticButton } from "./ui/MagneticButton";

interface ServicesExplorerProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function ServicesExplorer({ onOpenBooking }: ServicesExplorerProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [lookbookService, setLookbookService] = useState<Service | null>(null);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-canvas-cream py-28 sm:py-36 text-noir selection:bg-noir selection:text-canvas-light"
      data-cursor="SERVICES"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,168,128,0.25)_0%,transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-champagne/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne-dark uppercase mb-2">
              <Sparkles className="h-3 w-3 text-champagne-dark" />
              <span>02 / HAUTE SERVICES COLLECTION</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-noir tracking-tight">
              CURATED <span className="font-serif-italic text-champagne-dark">ARTISTRY.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-xs sm:text-sm text-noir/70 leading-relaxed font-light">
            Every service is an individualized masterwork. We combine dermatological precision with high-fashion aesthetics for transcendent results.
          </p>
        </div>

        {/* Fashion Collection Browser (Interactive Split View) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Service Runway Index */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-champagne/25 border-y border-champagne/25">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  data-cursor="SELECT"
                  className={`group relative flex flex-col text-left py-6 px-4 transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "bg-canvas-light shadow-sm rounded-xl border-l-4 border-champagne"
                      : "hover:bg-canvas-light/60"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-sans text-xs font-semibold tracking-widest ${
                          isActive ? "text-champagne-dark" : "text-noir/40 group-hover:text-noir/70"
                        }`}
                      >
                        {service.number}
                      </span>
                      <span className="font-sans text-[9px] tracking-widest text-champagne-dark uppercase font-semibold">
                        {service.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-sans">
                      <span className="font-medium text-noir/80">{service.price}</span>
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform ${
                          isActive
                            ? "text-champagne-dark translate-x-0.5 -translate-y-0.5"
                            : "text-noir/30 group-hover:text-noir"
                        }`}
                      />
                    </div>
                  </div>

                  <h3
                    className={`mt-2 font-editorial text-xl sm:text-2xl font-light tracking-wide transition-all ${
                      isActive
                        ? "text-noir font-normal pl-1 scale-[1.02] origin-left"
                        : "text-noir/70 group-hover:text-noir"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-1 line-clamp-1 font-sans text-xs text-noir/60 font-light ${
                      isActive ? "text-noir/80" : ""
                    }`}
                  >
                    {service.tagline}
                  </p>

                  {/* Active Service Micro-Details */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 flex items-center gap-4 text-[10px] font-sans text-noir/60 tracking-wider uppercase border-t border-champagne/20 pt-2.5"
                    >
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-champagne-dark" />
                        {service.duration}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-champagne-dark font-medium">
                        {service.badges[0]}
                      </span>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Grand Cinematic Visual Display */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="overflow-hidden rounded-3xl border border-champagne/30 bg-canvas-light shadow-2xl p-6 sm:p-8"
              >
                {/* Large Editorial Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-noir-surface">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent pointer-events-none" />

                  {/* Image Overlaid Metadata */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {activeService.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-noir/70 px-3 py-1 font-sans text-[9px] font-medium tracking-widest text-champagne backdrop-blur-md border border-champagne/30 uppercase"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-canvas-light">
                    <div>
                      <span className="font-sans text-[9px] tracking-widest text-champagne uppercase">
                        {activeService.category}
                      </span>
                      <h4 className="font-editorial text-2xl font-light text-canvas-light">
                        {activeService.title}
                      </h4>
                    </div>

                    <span className="rounded-full bg-champagne px-3 py-1 font-sans text-xs font-bold text-noir">
                      {activeService.price}
                    </span>
                  </div>
                </div>

                {/* Service Narrative & Highlights */}
                <div className="mt-6 space-y-4">
                  <p className="font-sans text-sm text-noir/80 font-light leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Process Key Points */}
                  <div className="rounded-2xl border border-champagne/20 bg-canvas-cream/60 p-4">
                    <span className="block font-sans text-[10px] font-bold tracking-widest text-champagne-dark uppercase mb-2.5">
                      ARTISANAL PROTOCOL HIGHLIGHTS
                    </span>
                    <ul className="space-y-2 text-xs font-sans text-noir/75">
                      {activeService.keySteps.slice(0, 3).map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-3.5 w-3.5 text-champagne-dark shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Two Main Actions */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setLookbookService(activeService)}
                        data-cursor="VIEW"
                        className="inline-flex items-center gap-2 rounded-full border border-noir/20 bg-transparent px-5 py-3 font-sans text-xs font-medium tracking-wider text-noir transition-colors hover:border-noir hover:bg-noir hover:text-canvas-light"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>EXPLORE LOOKBOOK</span>
                      </button>
                    </div>

                    <MagneticButton
                      onClick={() => onOpenBooking(activeService.id)}
                      variant="primary"
                      cursorText="RESERVE"
                      className="w-full sm:w-auto"
                    >
                      <span>RESERVE THIS EXPERIENCE</span>
                      <ArrowUpRight className="h-4 w-4 text-champagne" />
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lookbook Modal / Slide-over Drawer */}
      <AnimatePresence>
        {lookbookService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-noir/80 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setLookbookService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-champagne/30 bg-canvas-light p-6 sm:p-10 shadow-2xl text-noir"
            >
              {/* Close button */}
              <button
                onClick={() => setLookbookService(null)}
                aria-label="Close lookbook"
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/40 bg-canvas-cream text-noir transition-colors hover:bg-noir hover:text-canvas-light"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 font-sans text-[10px] tracking-widest text-champagne-dark uppercase mb-2">
                <span>{lookbookService.number}</span>
                <span>·</span>
                <span>{lookbookService.category}</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-light text-noir">
                {lookbookService.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-noir/70 max-w-2xl">
                {lookbookService.fullOverview}
              </p>

              {/* Gallery Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-champagne/20 bg-noir-surface">
                  <img
                    src={lookbookService.image}
                    alt={lookbookService.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                {lookbookService.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-champagne/20 bg-noir-surface"
                  >
                    <img
                      src={img}
                      alt={`${lookbookService.title} gallery ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Full Steps */}
              <div className="mt-8 border-t border-champagne/25 pt-6">
                <h4 className="font-sans text-xs font-bold tracking-widest text-noir uppercase mb-4">
                  COMPLETE BESPOKE PROTOCOL
                </h4>
                <div className="space-y-3">
                  {lookbookService.keySteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs font-sans text-noir/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/20 font-mono text-[10px] font-bold text-champagne-dark">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Booking CTA */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-champagne/25 pt-6">
                <div>
                  <span className="block font-sans text-[10px] tracking-widest text-noir/50 uppercase">
                    INVESTMENT & DURATION
                  </span>
                  <div className="flex items-center gap-3 font-sans text-sm font-semibold text-noir">
                    <span>{lookbookService.price}</span>
                    <span>·</span>
                    <span>{lookbookService.duration}</span>
                  </div>
                </div>

                <MagneticButton
                  onClick={() => {
                    const id = lookbookService.id;
                    setLookbookService(null);
                    onOpenBooking(id);
                  }}
                  variant="primary"
                  cursorText="RESERVE"
                >
                  <span>RESERVE APPOINTMENT</span>
                  <ArrowUpRight className="h-4 w-4 text-champagne" />
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
