"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles, Phone, MapPin, Clock } from "lucide-react";

interface NavigationProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function Navigation({ onOpenBooking }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "PHILOSOPHY", href: "#philosophy" },
    { label: "SERVICES", href: "#services" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "TRANSFORMATION", href: "#transformation" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "CRAFTSMANSHIP", href: "#craftsmanship" },
    { label: "THE ARTIST", href: "#artist" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 px-4 sm:px-8" : "py-6 px-6 sm:px-12 md:px-16"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "w-full rounded-full border border-champagne/30 bg-canvas-light/85 px-6 py-2.5 shadow-lg backdrop-blur-md"
              : "w-full bg-transparent"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex shrink-0 flex-col items-start focus:outline-none"
          >
            <span className="font-editorial text-xl sm:text-2xl tracking-[0.2em] text-noir font-medium transition-colors group-hover:text-champagne-dark">
              LUCKYGLAMOURS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden min-w-0 flex-1 items-center justify-between gap-6 mx-8 xl:flex xl:mx-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative whitespace-nowrap font-sans text-[11px] font-medium tracking-[0.2em] text-noir/70 uppercase transition-colors hover:text-noir focus:text-noir focus:outline-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">

            <button
              onClick={() => onOpenBooking()}
              data-cursor="BOOK"
              className="group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-full bg-noir px-5 py-2.5 font-sans text-[11px] font-semibold tracking-ultra-wide text-canvas-light uppercase shadow-md transition-all duration-300 hover:bg-noir-light hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-champagne" />
                BOOK NOW
              </span>
              <span className="absolute inset-0 z-0 scale-x-0 rounded-full bg-champagne/25 transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="flex lg:hidden items-center justify-center h-10 w-10 rounded-full border border-champagne/40 bg-canvas-light/80 text-noir backdrop-blur-sm transition-colors hover:border-champagne"
            >
              <Menu className="h-5 w-5 text-noir" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen High-Fashion Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-noir px-8 py-8 text-canvas-light selection:bg-champagne selection:text-noir"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-champagne/20 pb-6">
              <div>
                <span className="font-editorial text-2xl tracking-widest text-canvas-light uppercase">
                  LUCKYGLAMOURS
                </span>
                <span className="block font-sans text-[9px] tracking-widest text-champagne uppercase">
                  PARIS · NEW YORK · MILAN
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/30 text-canvas-light transition-transform hover:scale-105"
              >
                <X className="h-5 w-5 text-champagne" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="my-auto flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="group flex items-center justify-between py-1.5"
                >
                  <span className="font-editorial text-2xl sm:text-3xl text-canvas-light/90 transition-colors group-hover:text-champagne font-light">
                    {link.label}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-champagne/60 group-hover:text-champagne">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom Atelier Info & CTA */}
            <div className="border-t border-champagne/20 pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-xs font-sans text-canvas-light/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-champagne" />
                  <span>742 Madison Ave, Suite 900</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-champagne" />
                  <span>Tue - Sun · By Reservation</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-champagne py-4 font-sans text-xs font-bold tracking-widest text-noir uppercase shadow-xl transition-all active:scale-[0.98]"
              >
                <span>RESERVE YOUR EXPERIENCE</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
