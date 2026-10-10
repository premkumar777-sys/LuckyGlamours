"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Compass } from "lucide-react";

export function BrandIntro() {
  return (
    <section
      id="philosophy"
      className="relative w-full overflow-hidden bg-noir py-28 sm:py-36 text-canvas-light selection:bg-champagne selection:text-noir"
      data-cursor="MANIFESTO"
    >
      {/* Ambient background glow & fine grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,168,128,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Section Tag */}
        <div className="flex items-center gap-3 border-b border-champagne/20 pb-4 text-[10px] font-sans tracking-[0.3em] text-champagne uppercase">
          <Sparkles className="h-3 w-3 text-champagne" />
          <span>01 / THE PHILOSOPHY</span>
          <span className="text-canvas-light/40">· ARTISTRY WITHOUT COMPROMISE</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block font-sans text-xs tracking-mega-wide text-champagne uppercase mb-3">
              THE LUCKYGLAMOURS DOCTRINE
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-canvas-light leading-[0.95]">
              BEAUTY IS NOT <br />
              <span className="font-serif-italic font-normal text-champagne">
                A TEMPLATE.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Split Editorial Composition */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: The 3 Core Tenets */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              {[
                {
                  number: "I",
                  lead: "Every face has its own character.",
                  description:
                    "We do not erase natural asymmetry. We analyze the high points of your cranial structure, the cadence of your expression, and amplify the singular beauty you already embody.",
                },
                {
                  number: "II",
                  lead: "Every detail deserves intention.",
                  description:
                    "From the microscopic tension of a feathered brow stroke to the refractive index of a cheekbone highlighter, every pigment is selected with surgical intentionality.",
                },
                {
                  number: "III",
                  lead: "Every transformation should still feel like you.",
                  description:
                    "The ultimate sign of mastery is not that people see makeup—it is that they are mesmerized by you. You remain unmistakably yourself, illuminated at your highest frequency.",
                },
              ].map((tenet, idx) => (
                <motion.div
                  key={tenet.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group rounded-2xl border border-champagne/15 bg-noir-surface/60 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-champagne/40 hover:bg-noir-surface"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-editorial text-xl font-light text-champagne">
                      {tenet.number}
                    </span>
                    <span className="font-sans text-[9px] tracking-widest text-canvas-light/40 uppercase">
                      PRINCIPLE
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-light text-canvas-light group-hover:text-champagne transition-colors">
                    {tenet.lead}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-canvas-light/70 font-light leading-relaxed">
                    {tenet.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Atelier Note */}
            <div className="flex items-center gap-4 rounded-xl border border-champagne/20 bg-champagne/5 p-4 text-xs font-sans text-canvas-light/80">
              <Compass className="h-5 w-5 text-champagne shrink-0" />
              <span>
                Formulated without heavy waxes, parabens, or synthetic fragrance. Breathable, hypoallergenic, cruelty-free European formulations.
              </span>
            </div>
          </div>

          {/* Right Column: Layered Editorial Imagery & Architectural Artifacts */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Backing framed backdrop */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl border border-champagne/20 bg-gradient-to-br from-champagne/15 via-transparent to-transparent pointer-events-none" />

              {/* Large Editorial Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-champagne/30 shadow-2xl bg-noir-surface">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
                  alt="Haute couture editorial close up showing luminous skin and understated luxury beauty by LuckyGlamours"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/30 pointer-events-none" />

                {/* Floating Bottom Quote */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-champagne/30 bg-noir/80 p-5 backdrop-blur-md">
                  <p className="font-editorial text-lg text-canvas-light italic leading-snug">
                    "True luxury is the confidence of being completely seen in your purest light."
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-champagne/20 pt-2 text-[9px] font-sans tracking-widest text-champagne uppercase">
                    <span>ELENA ROSTOVA</span>
                    <span>FOUNDER & CREATIVE DIRECTOR</span>
                  </div>
                </div>
              </div>

              {/* Floating Monogram Chip */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-champagne/40 bg-noir-light/95 p-3 shadow-2xl backdrop-blur-md">
                <span className="font-editorial text-3xl text-champagne">LG</span>
                <span className="font-sans text-[7px] tracking-widest text-canvas-light/60 uppercase">
                  EST. 2012
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
