"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, GraduationCap, Globe, HeartHandshake, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

interface ArtistStoryProps {
  onOpenBooking: () => void;
}

export function ArtistStory({ onOpenBooking }: ArtistStoryProps) {
  return (
    <section
      id="artist"
      className="relative w-full overflow-hidden bg-noir py-28 sm:py-36 text-canvas-light selection:bg-champagne selection:text-noir"
      data-cursor="ARTIST"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.15)_0%,transparent_65%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne uppercase mb-4 border-b border-champagne/20 pb-4">
          <Sparkles className="h-3 w-3 text-champagne" />
          <span>07 / THE CREATIVE DIRECTOR</span>
          <span className="text-canvas-light/40">· BESPOKE FACIAL SCULPTOR</span>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Portrait with Architectural Accents */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Backing decorative frame */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl border border-champagne/30 -rotate-1 bg-gradient-to-bl from-champagne/15 via-transparent to-transparent pointer-events-none" />

              {/* Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-champagne/40 bg-noir-surface shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=85"
                  alt="Elena Rostova, Founder & Master Aesthetician of LuckyGlamours"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-80" />

                {/* Overlaid Title Badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-champagne/30 bg-noir/85 p-5 backdrop-blur-md">
                  <span className="font-sans text-[9px] tracking-widest text-champagne uppercase font-medium">
                    FOUNDER & LEAD ARTISAN
                  </span>
                  <h4 className="font-editorial text-2xl font-light text-canvas-light">
                    Elena Rostova
                  </h4>
                  <p className="font-sans text-xs text-canvas-light/70 font-light mt-1">
                    Master of Dermal Architecture & Editorial Aesthetics
                  </p>
                </div>
              </div>

              {/* Floating Monogram Insignia */}
              <div className="absolute -top-4 -right-4 sm:-right-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-champagne/40 bg-noir-light/95 shadow-xl backdrop-blur-md">
                <span className="font-editorial text-2xl text-champagne">LG</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-canvas-light leading-[0.95] tracking-tight">
                THE ARTIST <br />
                <span className="font-serif-italic font-normal text-champagne">
                  BEHIND THE TRANSFORMATION.
                </span>
              </h2>

              {/* High-Impact Philosophy Statement */}
              <blockquote className="mt-8 rounded-2xl border-l-2 border-champagne bg-noir-surface/60 p-6 sm:p-8 backdrop-blur-sm">
                <p className="font-editorial text-2xl sm:text-3xl font-light text-canvas-light italic leading-snug">
                  "Beauty should never hide who you are. It should reveal the version of yourself you want the world to see."
                </p>
                <cite className="mt-4 block font-sans text-[10px] tracking-mega-wide text-champagne uppercase not-italic">
                  — ELENA ROSTOVA
                </cite>
              </blockquote>

              {/* Editorial Bio Copy */}
              <div className="mt-8 space-y-4 font-sans text-sm sm:text-base text-canvas-light/75 font-light leading-relaxed">
                <p>
                  Trained under classical Parisian master artists at the École Supérieure de Maquillage and with over fourteen years directing backstage aesthetics for Paris, Milan, and New York Fashion Weeks, Elena brings a sculptor's discerning eye to facial harmony.
                </p>
                <p>
                  Rather than applying uniform templates, she formulates each client's pigments fresh at the vanity. Her approach treats the face as living architecture—balancing light bounce, biological skin vitality, and bespoke brow elevation so that you command the room effortlessly.
                </p>
              </div>

              {/* Credential Metrics */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-champagne/20 pt-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-semibold text-canvas-light">
                      Paris Trained
                    </span>
                    <span className="font-sans text-[11px] text-canvas-light/60">
                      École Supérieure de Maquillage
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-semibold text-canvas-light">
                      Fashion Week Lead
                    </span>
                    <span className="font-sans text-[11px] text-canvas-light/60">
                      Paris · Milan · New York
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-semibold text-canvas-light">
                      Celebrity & Bridal
                    </span>
                    <span className="font-sans text-[11px] text-canvas-light/60">
                      Vogue, Harper's, Cannes Gala
                    </span>
                  </div>
                </div>
              </div>

              {/* Private Consultation CTA */}
              <div className="mt-8 pt-4 flex items-center gap-4">
                <MagneticButton
                  onClick={onOpenBooking}
                  variant="primary"
                  cursorText="BOOK"
                >
                  <span>RESERVE PRIVATE SESSION WITH ELENA</span>
                  <ArrowUpRight className="h-4 w-4 text-champagne" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
