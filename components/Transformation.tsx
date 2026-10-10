"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, MoveHorizontal, Info, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  notes: string[];
}

const CASES: CaseStudy[] = [
  {
    id: "case-01",
    title: "HAUTE BRIDAL LUMINESCENCE",
    subtitle: "Venice Destination Wedding · 14-Hour Humidity Endurance",
    category: "BRIDAL METAMORPHOSIS",
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=85",
    afterImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "RAW PREP · DERMAL HYDRATION ONLY",
    afterLabel: "COUTURE BRIDAL · FINISHED METAMORPHOSIS",
    notes: [
      "Micro-fine airbrushed complexion with zero heavy cake",
      "Hand-fanned featherweight cashmere lash clusters",
      "Rose-gold eyelid wash calibrated for sunset and candlelight",
      "Transfer-proof velvet lip stain with plumping botanical oils"
    ]
  },
  {
    id: "case-02",
    title: "RED CARPET SCULPTURAL GLAM",
    subtitle: "Cannes Film Festival · 8K Cinema & Flash-Proof",
    category: "RED CARPET CINEMA",
    beforeImg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=85",
    afterImg: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "PRE-SESSION · LYMPHATIC DRAINAGE",
    afterLabel: "RED CARPET · BONE STRUCTURE SCULPT",
    notes: [
      "Light-refracting contouring on zygomatic arch and jawline",
      "Smoked liquid velvet cat-eye with 18-hour hold",
      "High-beam pearlescent dew points on collarbones and temples",
      "Infrared flash-tested to eliminate ghosting flashback"
    ]
  },
  {
    id: "case-03",
    title: "DERMAL COUTURE & BROW ARCH",
    subtitle: "Paris Fashion Week · Pure Radiance & Feathered Brows",
    category: "EDITORIAL AESTHETIC",
    beforeImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=85",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "BARE SKIN · ASYMMETRIC BROWS",
    afterLabel: "FEATHERED GOLDEN RATIO · GLASS GLOW",
    notes: [
      "Keratin infusion lamination lifting sparse hairs",
      "Cryo-sculpted cheekbones using sub-zero thermal wands",
      "Zero-powder biological emollients for natural dew reflection",
      "Custom berry press stain blotted into center of lips"
    ]
  }
];

export function Transformation() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeCase = CASES[activeCaseIdx];

  const handlePointerMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(pct);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section
      id="transformation"
      className="relative w-full overflow-hidden bg-canvas-light py-28 sm:py-36 text-noir selection:bg-noir selection:text-canvas-light"
      data-cursor="DRAG"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.2)_0%,transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-champagne/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne-dark uppercase mb-2">
              <Sparkles className="h-3 w-3 text-champagne-dark" />
              <span>04 / METAMORPHOSIS GALLERY</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-noir tracking-tight">
              SEE THE <span className="font-serif-italic text-champagne-dark">TRANSFORMATION.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-xs sm:text-sm text-noir/70 leading-relaxed font-light">
            Slide horizontally across the canvas to observe how bespoke facial topography design elevates natural features into cinematic artistry.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {CASES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIdx(i);
                  setSliderPos(50);
                }}
                className={`rounded-full px-5 py-2 font-sans text-xs font-semibold tracking-wider uppercase transition-all ${
                  i === activeCaseIdx
                    ? "bg-noir text-canvas-light shadow-md"
                    : "border border-champagne/30 bg-canvas-cream/50 text-noir/70 hover:border-champagne hover:text-noir"
                }`}
              >
                0{i + 1} {c.category}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className="inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-canvas-cream px-4 py-2 font-sans text-[11px] font-medium text-noir/80 hover:text-noir"
          >
            <Info className="h-3.5 w-3.5 text-champagne-dark" />
            <span>{showAnnotations ? "HIDE ANNOTATIONS" : "SHOW ANNOTATIONS"}</span>
          </button>
        </div>

        {/* Large Draggable Comparison Stage */}
        <div className="mt-8 relative">
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Before and after transformation slider"
            aria-valuenow={sliderPos}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handlePointerMove(e.clientX)}
            className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-3xl border border-champagne/40 shadow-2xl select-none cursor-ew-resize bg-noir-surface"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={activeCase.afterImg}
              alt={activeCase.afterLabel}
              className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
            />

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.beforeImg}
                alt={activeCase.beforeLabel}
                className="absolute inset-0 h-full w-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                }}
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[2px] bg-gradient-to-b from-champagne/40 via-champagne to-champagne/40 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Draggable Luxury Handle */}
              <div
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-champagne bg-noir/90 shadow-2xl backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
              >
                <MoveHorizontal className="h-5 w-5 text-champagne animate-pulse" />
              </div>
            </div>

            {/* Minimal Corner Labels */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="inline-block rounded-full bg-noir/80 px-4 py-1.5 font-sans text-[10px] font-semibold tracking-widest text-canvas-light backdrop-blur-md border border-champagne/20 uppercase">
                {activeCase.beforeLabel}
              </span>
            </div>

            <div className="absolute top-6 right-6 z-10 pointer-events-none">
              <span className="inline-block rounded-full bg-champagne/90 px-4 py-1.5 font-sans text-[10px] font-bold tracking-widest text-noir backdrop-blur-md border border-noir/20 uppercase">
                {activeCase.afterLabel}
              </span>
            </div>

            {/* Bottom Case Narrative Bar */}
            <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-noir/75 p-4 backdrop-blur-md border border-champagne/25 text-canvas-light">
              <div>
                <span className="block font-sans text-[9px] tracking-widest text-champagne uppercase">
                  {activeCase.category}
                </span>
                <h4 className="font-editorial text-lg sm:text-xl font-light">
                  {activeCase.title}
                </h4>
              </div>

              <div className="hidden sm:block font-sans text-xs text-canvas-light/70 font-light">
                {activeCase.subtitle}
              </div>
            </div>
          </div>

          {/* Editorial Annotations Drawer Below */}
          {showAnnotations && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {activeCase.notes.map((note, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-champagne/25 bg-canvas-cream/50 p-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-champagne-dark shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-noir/80 font-light leading-relaxed">
                    {note}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
