"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, X, Layers, Calendar, User } from "lucide-react";
import { PORTFOLIO_ITEMS, PortfolioItem } from "../data/portfolio";

export function EditorialPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = ["All", "Bridal", "Editorial", "Red Carpet", "Skin & Brows"];

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-noir py-28 sm:py-36 text-canvas-light selection:bg-champagne selection:text-noir"
      data-cursor="PORTFOLIO"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(197,168,128,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-champagne/20 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne uppercase mb-2">
              <Sparkles className="h-3 w-3 text-champagne" />
              <span>05 / THE ATELIER ARCHIVE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light text-canvas-light tracking-tight">
              EDITORIAL <span className="font-serif-italic text-champagne">PORTFOLIO.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="FILTER"
                className={`rounded-full px-4 py-2 font-sans text-[11px] font-semibold tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? "bg-champagne text-noir shadow-lg"
                    : "border border-champagne/25 text-canvas-light/70 hover:border-champagne hover:text-canvas-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical High-Fashion Magazine Gallery */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span mapping
            const colSpan =
              index % 4 === 0
                ? "md:col-span-7"
                : index % 4 === 1
                ? "md:col-span-5"
                : index % 4 === 2
                ? "md:col-span-5"
                : "md:col-span-7";

            const aspectClass =
              item.aspectRatio === "tall"
                ? "aspect-[3/4]"
                : item.aspectRatio === "portrait"
                ? "aspect-[4/5]"
                : item.aspectRatio === "landscape"
                ? "aspect-[16/10]"
                : "aspect-square";

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colSpan} group relative cursor-pointer`}
                onClick={() => setActiveProject(item)}
                data-cursor="VIEW"
              >
                {/* Image Container with Luxury Frame */}
                <div
                  className={`relative overflow-hidden rounded-3xl border border-champagne/25 bg-noir-surface shadow-2xl ${aspectClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Code Tag Top Left */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="rounded-full bg-noir/70 px-3 py-1 font-sans text-[9px] font-semibold tracking-widest text-champagne backdrop-blur-md border border-champagne/25 uppercase">
                      {item.code}
                    </span>
                    <span className="rounded-full bg-champagne/15 px-3 py-1 font-sans text-[9px] text-canvas-light backdrop-blur-md uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Typography reveal */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                    <span className="font-sans text-[9px] tracking-widest text-champagne uppercase font-medium">
                      {item.category} TRANSFORMATION
                    </span>
                    <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-light text-canvas-light group-hover:text-champagne transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-sans text-xs text-canvas-light/75 font-light">
                      {item.subtitle}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-champagne/25 pt-3">
                      <span className="font-sans text-[10px] tracking-widest text-canvas-light/60 uppercase">
                        {item.client}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-champagne group-hover:underline">
                        <span>View Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-noir/90 p-4 sm:p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-champagne/30 bg-noir-light p-6 sm:p-10 shadow-2xl text-canvas-light"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close project modal"
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 text-champagne hover:bg-champagne hover:text-noir transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 font-sans text-[10px] tracking-widest text-champagne uppercase mb-2">
                <span>{activeProject.code}</span>
                <span>·</span>
                <span>{activeProject.category}</span>
                <span>·</span>
                <span>{activeProject.year}</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-5xl font-light text-canvas-light">
                {activeProject.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-champagne font-light">
                {activeProject.subtitle}
              </p>

              {/* Large Image */}
              <div className="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-champagne/20 bg-noir-surface">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Story & Breakdown */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-champagne/20 pt-6">
                <div className="md:col-span-7 space-y-4">
                  <h4 className="font-sans text-xs font-bold tracking-widest text-champagne uppercase">
                    EDITORIAL CASE STUDY
                  </h4>
                  <p className="font-sans text-sm text-canvas-light/80 font-light leading-relaxed">
                    {activeProject.story}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-6">
                  {/* Techniques */}
                  <div>
                    <span className="block font-sans text-[10px] font-bold tracking-widest text-champagne uppercase mb-2">
                      TECHNIQUES APPLIED
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techniques.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-noir-surface border border-champagne/30 px-3 py-1 font-sans text-xs text-canvas-light/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Palette breakdown */}
                  <div>
                    <span className="block font-sans text-[10px] font-bold tracking-widest text-champagne uppercase mb-2">
                      CHROMATIC PALETTE
                    </span>
                    <div className="flex items-center gap-3">
                      {activeProject.palette.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div
                            className="h-8 w-8 rounded-full border border-champagne/40 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                          <span className="font-mono text-[9px] text-canvas-light/50">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
