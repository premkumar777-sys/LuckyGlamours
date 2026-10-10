"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, Compass, ArrowRight, Eye } from "lucide-react";
import { JOURNEY_STAGES, JourneyStage } from "../data/journey";

export function SignatureExperience() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = JOURNEY_STAGES[activeStepIndex];

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-noir py-28 sm:py-36 text-canvas-light selection:bg-champagne selection:text-noir"
      data-cursor="JOURNEY"
    >
      {/* Ambient background glow & radial warmth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.1)_0%,transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-champagne/20 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne uppercase mb-2">
              <Sparkles className="h-3 w-3 text-champagne" />
              <span>03 / THE BEAUTY PROTOCOL</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-canvas-light tracking-tight">
              THE SIGNATURE <span className="font-serif-italic text-champagne">EXPERIENCE.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-xs sm:text-sm text-canvas-light/70 leading-relaxed font-light">
            A 5-act cinematic sanctuary ritual. We orchestrate every sensory touchpoint from private reception to mirror reveal.
          </p>
        </div>

        {/* 5-Stage Stepper Navigation Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 border-b border-champagne/20 pb-8">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                data-cursor="STAGE"
                className={`group relative flex flex-col text-left p-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-noir-surface border border-champagne/50 shadow-xl"
                    : "border border-champagne/10 hover:border-champagne/30 hover:bg-noir-surface/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-editorial text-2xl font-light ${
                      isActive ? "text-champagne" : "text-canvas-light/40 group-hover:text-canvas-light/70"
                    }`}
                  >
                    {stage.step}
                  </span>
                  <span className="font-sans text-[8px] tracking-widest text-champagne/60 uppercase">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <span
                  className={`font-editorial text-sm sm:text-base font-light line-clamp-1 transition-colors ${
                    isActive ? "text-canvas-light font-normal" : "text-canvas-light/60 group-hover:text-canvas-light"
                  }`}
                >
                  {stage.title.replace("THE ", "")}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeStageGlow"
                    className="absolute -bottom-8 left-0 right-0 h-[2px] bg-champagne"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Editorial Showcase */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Stage Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl border border-champagne/30 bg-noir-surface shadow-2xl">
                  <img
                    src={currentStage.image}
                    alt={currentStage.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/20 pointer-events-none" />

                  {/* Stage Number Callout */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-champagne/40 bg-noir/80 px-4 py-1.5 backdrop-blur-md">
                    <span className="font-editorial text-xl text-champagne font-light">
                      ACT {currentStage.step}
                    </span>
                    <span className="h-3 w-[1px] bg-champagne/40" />
                    <span className="font-sans text-[9px] tracking-widest text-canvas-light uppercase">
                      LUCKYGLAMOURS
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-champagne/20 bg-noir/85 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-sans text-champagne">
                      <Clock className="h-4 w-4" />
                      <span>{currentStage.duration}</span>
                    </div>
                    <span className="font-sans text-[10px] tracking-widest text-canvas-light/60 uppercase">
                      PRIVATE ATELIER PROTOCOL
                    </span>
                  </div>
                </div>
              </div>

              {/* Stage Narrative Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] tracking-mega-wide text-champagne uppercase font-semibold">
                    {currentStage.subTitle}
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-5xl font-light text-canvas-light leading-tight">
                    {currentStage.title}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-canvas-light/80 font-light leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Sensory Experience Note */}
                <div className="rounded-2xl border border-champagne/20 bg-noir-surface p-5 space-y-2">
                  <div className="flex items-center gap-2 font-sans text-[9px] tracking-widest text-champagne uppercase font-semibold">
                    <Compass className="h-3.5 w-3.5" />
                    <span>SENSORY ATMOSPHERE</span>
                  </div>
                  <p className="font-editorial text-base text-canvas-light/90 italic">
                    "{currentStage.sensoryNote}"
                  </p>
                </div>

                {/* Technical Highlight */}
                <div className="flex items-center justify-between border-t border-champagne/20 pt-4 text-xs font-sans">
                  <span className="text-canvas-light/60">STAGE HIGHLIGHT:</span>
                  <span className="text-champagne font-medium">{currentStage.highlight}</span>
                </div>

                {/* Quick Next Stage Step Trigger */}
                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev + 1) % JOURNEY_STAGES.length)
                    }
                    data-cursor="NEXT"
                    className="inline-flex items-center gap-3 rounded-full border border-champagne/40 bg-champagne/10 px-6 py-3 font-sans text-xs font-semibold tracking-wider text-canvas-light transition-all hover:bg-champagne hover:text-noir"
                  >
                    <span>NEXT ACT</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <span className="font-sans text-[10px] tracking-widest text-canvas-light/40 uppercase">
                    STEP {activeStepIndex + 1} OF {JOURNEY_STAGES.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
