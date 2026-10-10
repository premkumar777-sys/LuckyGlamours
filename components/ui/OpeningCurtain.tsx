"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function OpeningCurtain() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Quick, cinematic intro: auto-dismisses after 1.6s
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 0,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-noir text-canvas-light selection:bg-champagne selection:text-noir"
          onClick={() => setIsOpen(false)}
        >
          {/* Subtle ambient gold radial glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.15)_0%,transparent_70%)]" />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Atelier Crest / Monogram */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-champagne/40 bg-noir-light/60 backdrop-blur-md"
            >
              <span className="font-editorial text-2xl tracking-widest text-champagne">LG</span>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.25em] text-canvas-light uppercase"
            >
              LUCKYGLAMOURS
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="mt-4 font-sans text-xs sm:text-sm tracking-[0.35em] text-champagne uppercase max-w-lg"
            >
              A BEAUTY EXPERIENCE DEFINED BY YOU.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeInOut" }}
              className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-champagne to-transparent"
            />
          </div>

          {/* Quick skip note */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 font-sans text-[10px] tracking-widest text-canvas-light/50 uppercase"
          >
            ENTERING THE ATELIER · TAP TO BYPASS
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
