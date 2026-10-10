"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function OpeningCurtain() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Quick brand reveal auto-dismissing after 1.2s
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-ivory text-charcoal selection:bg-olive selection:text-ivory"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-4">
            {/* Monogram Crest */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-sage bg-ivory-light shadow-xs"
            >
              <span className="font-serif text-xl tracking-wider text-olive font-medium">LG</span>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-medium tracking-wide text-charcoal uppercase"
            >
              LUCKY GLAMOURS
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-xs tracking-[0.25em] text-earth uppercase max-w-lg"
            >
              BOTANICAL SKINCARE & ARTISAN OILS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
