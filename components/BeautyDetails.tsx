"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, Wrench, Shield } from "lucide-react";
import { MACRO_DETAILS } from "../data/macroDetails";

export function BeautyDetails() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="craftsmanship"
      className="relative w-full overflow-hidden bg-canvas-cream py-28 sm:py-36 text-noir selection:bg-noir selection:text-canvas-light"
      data-cursor="MACRO"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-champagne/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne-dark uppercase mb-2">
              <Sparkles className="h-3 w-3 text-champagne-dark" />
              <span>06 / ATELIER CRAFTSMANSHIP</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-noir tracking-tight">
              MICRON-LEVEL <span className="font-serif-italic text-champagne-dark">PRECISION.</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll gallery left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 bg-canvas-light text-noir transition-colors hover:bg-noir hover:text-canvas-light"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll gallery right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 bg-canvas-light text-noir transition-colors hover:bg-noir hover:text-canvas-light"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {MACRO_DETAILS.map((detail) => (
            <div
              key={detail.id}
              className="w-[320px] sm:w-[400px] shrink-0 snap-start overflow-hidden rounded-3xl border border-champagne/30 bg-canvas-light p-6 shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Macro Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-noir-surface">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-noir/70 px-3 py-1 font-sans text-[9px] font-semibold tracking-widest text-champagne backdrop-blur-md uppercase">
                    {detail.focusArea}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-canvas-light font-editorial text-lg font-light">
                  0{detail.stepNumber}
                </div>
              </div>

              {/* Information */}
              <div className="mt-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-editorial text-2xl font-light text-noir">
                    {detail.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs text-noir/70 font-light leading-relaxed">
                    {detail.description}
                  </p>
                </div>

                <div className="border-t border-champagne/20 pt-4 space-y-2 text-[11px] font-sans">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-champagne-dark uppercase shrink-0">
                      TECHNIQUE:
                    </span>
                    <span className="text-noir/80">{detail.artisanTechnique}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-champagne-dark uppercase shrink-0">
                      TOOLS:
                    </span>
                    <span className="text-noir/80">{detail.toolsUsed}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
