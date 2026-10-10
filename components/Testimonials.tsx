"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-canvas-light py-28 sm:py-36 text-noir selection:bg-noir selection:text-canvas-light"
      data-cursor="REVIEWS"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-champagne/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne-dark uppercase mb-2">
              <Sparkles className="h-3 w-3 text-champagne-dark" />
              <span>08 / CLIENT EXPERIENCES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-noir tracking-tight">
              VOICES OF <span className="font-serif-italic text-champagne-dark">LUCKYGLAMOURS.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              data-cursor="PREV"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 bg-canvas-cream text-noir transition-all hover:bg-noir hover:text-canvas-light"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              data-cursor="NEXT"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 bg-canvas-cream text-noir transition-all hover:bg-noir hover:text-canvas-light"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Large Typography Quote Showcase */}
        <div className="mt-16 min-h-[340px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Star rating & quote icon */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(current.ratingStars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-champagne text-champagne"
                    />
                  ))}
                </div>
                <span className="h-3 w-[1px] bg-champagne/30" />
                <span className="font-sans text-[10px] tracking-widest text-champagne-dark uppercase">
                  VERIFIED ATELIER CLIENT
                </span>
              </div>

              {/* Grand Typography Quote */}
              <blockquote className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light text-noir leading-[1.15] tracking-tight max-w-5xl">
                "{current.quote}"
              </blockquote>

              {/* Client Attributions */}
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-champagne/25 pt-6">
                <div>
                  <h4 className="font-editorial text-2xl font-light text-noir">
                    {current.author}
                  </h4>
                  <p className="font-sans text-xs text-noir/60 font-light mt-0.5">
                    {current.role} · {current.occasion}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans text-champagne-dark tracking-wider uppercase">
                  <span>{current.location}</span>
                  <span className="rounded-full bg-champagne/15 px-3 py-1 text-[10px] text-noir font-semibold">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-noir"
                  : "w-2 bg-champagne/40 hover:bg-champagne"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
