"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientWidth, clientHeight } = document.documentElement;
    const x = (e.clientX / clientWidth - 0.5) * 20;
    const y = (e.clientY / clientHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-canvas-light pt-28 pb-16 flex flex-col justify-between selection:bg-noir selection:text-canvas-light"
    >
      {/* Background Subtle Gradient & Grain */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(222,203,179,0.35)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-canvas-light to-transparent" />

      {/* Main Cinematic Grid Composition */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16 my-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Dramatic Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >

              <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.2rem] font-light leading-[0.92] tracking-tight text-noir">
                BEAUTY, <br />
                <span className="font-serif-italic font-normal text-champagne-dark">
                  REIMAGINED.
                </span>
              </h1>

              <p className="mt-8 max-w-xl font-sans text-base sm:text-lg text-noir/70 leading-relaxed font-light">
                Where artistry, precision, and individuality converge. We craft bespoke beauty architecture that honors your distinct facial topography—revealing an elevated, unforgettable aura.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <MagneticButton
                  onClick={onOpenBooking}
                  variant="primary"
                  cursorText="BOOK"
                  className="shadow-2xl"
                >
                  <span>BOOK YOUR EXPERIENCE</span>
                  <ArrowUpRight className="h-4 w-4 text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>

                <a href="#services">
                  <MagneticButton
                    variant="outline"
                    cursorText="EXPLORE"
                  >
                    DISCOVER OUR SERVICES
                  </MagneticButton>
                </a>
              </div>

              {/* Metrics micro-strip */}
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-champagne/30 pt-6 max-w-lg">
                <div>
                  <span className="block font-editorial text-2xl sm:text-3xl font-light text-noir">
                    14+
                  </span>
                  <span className="font-sans text-[9px] tracking-widest text-noir/60 uppercase">
                    YEARS OF ARTISTRY
                  </span>
                </div>
                <div>
                  <span className="block font-editorial text-2xl sm:text-3xl font-light text-noir">
                    1,200+
                  </span>
                  <span className="font-sans text-[9px] tracking-widest text-noir/60 uppercase">
                    EDITORIAL & BRIDAL LOOKS
                  </span>
                </div>
                <div>
                  <span className="block font-editorial text-2xl sm:text-3xl font-light text-noir">
                    100%
                  </span>
                  <span className="font-sans text-[9px] tracking-widest text-noir/60 uppercase">
                    PRIVATE BESPOKE SUITE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Parallax Editorial Hero Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              style={{
                x: mousePos.x,
                y: mousePos.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              className="relative w-full max-w-md sm:max-w-lg"
            >
              {/* Backing decorative architectural frame */}
              <div className="absolute -inset-4 rounded-3xl border border-champagne/40 -rotate-2 bg-gradient-to-tr from-champagne/10 to-transparent pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-champagne/30 aspect-[3/4] bg-noir-surface">
                {/* Visual Image */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85"
                  alt="High fashion beauty editorial portrait showcasing radiant complexion and sculpted couture makeup by LuckyGlamours"
                  className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette & sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption tag */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-noir/70 p-3.5 backdrop-blur-md border border-champagne/20 text-canvas-light">
                  <div>
                    <span className="block font-sans text-[9px] tracking-widest text-champagne uppercase">
                      L'AURA COUTURE LOOK 01
                    </span>
                    <span className="font-editorial text-sm tracking-wide">
                      Translucent Dermal Glow & Velvet Lip
                    </span>
                  </div>
                  <span className="rounded-full bg-champagne/20 px-2.5 py-1 font-sans text-[9px] text-champagne tracking-widest uppercase">
                    PARIS
                  </span>
                </div>
              </div>

              {/* Secondary overlapping luxury floating detail badge */}
              <motion.div
                style={{
                  x: -mousePos.x * 1.4,
                  y: -mousePos.y * 1.4,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
                className="absolute -top-6 -left-6 sm:-left-10 rounded-2xl border border-champagne/40 bg-canvas-light/95 p-4 shadow-xl backdrop-blur-md hidden sm:block max-w-[190px]"
              >
                <span className="block font-sans text-[8px] tracking-widest text-champagne-dark uppercase font-semibold">
                  PRIVATE MASTER ARTIST
                </span>
                <p className="mt-1 font-editorial text-base text-noir italic leading-snug">
                  "Every face is a sovereign canvas."
                </p>
                <span className="mt-1 block font-sans text-[9px] tracking-wider text-noir/60 uppercase">
                  Elena Rostova · Founder
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16 flex items-center justify-between pt-4">
        <a
          href="#philosophy"
          data-cursor="SCROLL"
          className="group inline-flex items-center gap-3 text-[10px] font-sans tracking-[0.25em] text-noir/60 hover:text-noir transition-colors uppercase"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-champagne/40 group-hover:border-champagne group-hover:translate-y-1 transition-transform">
            <ArrowDown className="h-3.5 w-3.5 text-champagne-dark" />
          </div>
          <span>SCROLL TO EXPLORE THE ATELIER</span>
        </a>

        <div className="hidden sm:flex items-center gap-3">
          <span className="h-[1px] w-12 bg-champagne/40" />
          <span className="font-editorial text-sm tracking-widest text-champagne-dark italic">
            Maison de Haute Beauté
          </span>
        </div>
      </div>
    </section>
  );
}
