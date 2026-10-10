"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

export function Footer() {
  const [timeNY, setTimeNY] = useState("");
  const [timeParis, setTimeParis] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimeNY(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setTimeParis(
        now.toLocaleTimeString("fr-FR", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-noir pt-24 pb-12 text-canvas-light selection:bg-champagne selection:text-noir border-t border-champagne/20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(197,168,128,0.12)_0%,transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Large Final Brand Statement */}
        <div className="border-b border-champagne/20 pb-16">
          <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.35em] text-champagne uppercase mb-4">
            <Sparkles className="h-3 w-3 text-champagne" />
            <span>THE FINAL COLOPHON</span>
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-canvas-light tracking-tight leading-[0.92]">
            BEAUTY, <br />
            <span className="font-serif-italic text-champagne">WITH INTENTION.</span>
          </h2>
        </div>

        {/* Multi-column architectural links & studio clocks */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10 text-xs font-sans">
          {/* Col 1: Brand */}
          <div className="col-span-2 space-y-4">
            <span className="font-editorial text-2xl tracking-[0.2em] text-canvas-light font-medium block">
              LUCKYGLAMOURS
            </span>
            <p className="font-sans text-xs text-canvas-light/65 max-w-sm font-light leading-relaxed">
              Haute Beauté & Aesthetic Sanctuary. Transforming facial architecture through classical French artistry, biological dermal precision, and modern editorial discipline.
            </p>

            {/* Atelier Live Clocks */}
            <div className="flex items-center gap-6 pt-2 font-mono text-[11px] text-champagne">
              <div>
                <span className="block text-[9px] text-canvas-light/50 tracking-widest uppercase">
                  NEW YORK ATELIER
                </span>
                <span>{timeNY || "10:30 AM EST"}</span>
              </div>
              <div className="h-6 w-[1px] bg-champagne/30" />
              <div>
                <span className="block text-[9px] text-canvas-light/50 tracking-widest uppercase">
                  PARIS RESIDENCY
                </span>
                <span>{timeParis || "16:30 CET"}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Atelier Nav */}
          <div className="space-y-3">
            <span className="font-sans text-[10px] tracking-widest text-champagne uppercase font-bold block">
              ATELIER
            </span>
            <ul className="space-y-2 text-canvas-light/70">
              <li>
                <a href="#philosophy" className="hover:text-champagne transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-champagne transition-colors">
                  Haute Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-champagne transition-colors">
                  The Signature Journey
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-champagne transition-colors">
                  Metamorphosis Before & After
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Experience */}
          <div className="space-y-3">
            <span className="font-sans text-[10px] tracking-widest text-champagne uppercase font-bold block">
              ARCHIVE
            </span>
            <ul className="space-y-2 text-canvas-light/70">
              <li>
                <a href="#portfolio" className="hover:text-champagne transition-colors">
                  Editorial Portfolio
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-champagne transition-colors">
                  Craftsmanship Details
                </a>
              </li>
              <li>
                <a href="#artist" className="hover:text-champagne transition-colors">
                  The Artist
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-champagne transition-colors">
                  Private Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Sanctuaries & Social */}
          <div className="space-y-3">
            <span className="font-sans text-[10px] tracking-widest text-champagne uppercase font-bold block">
              SANCTUARIES
            </span>
            <ul className="space-y-2 text-canvas-light/70">
              <li>742 Madison Ave, New York</li>
              <li>18 Place Vendôme, Paris</li>
              <li>Via Montenapoleone, Milan</li>
              <li className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-champagne hover:underline inline-flex items-center gap-1"
                >
                  Instagram @luckyglamours
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-champagne/20 pt-8 text-[11px] font-sans text-canvas-light/50">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} LUCKYGLAMOURS HAUTE BEAUTÉ ATELIER.</span>
            <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-champagne hover:text-canvas-light transition-colors"
              data-cursor="TOP"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
