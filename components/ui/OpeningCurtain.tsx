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
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.04, 1], opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Subtle ambient glow pulse behind logo */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 rounded-full bg-olive/25 blur-md pointer-events-none"
              />

              {/* Circular Logo Image */}
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-sage-dark/40 shadow-md bg-ivory-light">
                <img
                  src="/logo.jpg"
                  alt="Lucky Glamours Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-charcoal uppercase"
            >
              LUCKY GLAMOURS
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-sans text-xs tracking-[0.25em] text-earth uppercase max-w-lg"
            >
              BEAUTY ARTISTRY · ACADEMY · BOTANICALS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
