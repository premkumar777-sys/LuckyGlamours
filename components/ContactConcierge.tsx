"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowUpRight, Send, Check } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

interface ContactConciergeProps {
  onOpenBooking: () => void;
}

export function ContactConcierge({ onOpenBooking }: ContactConciergeProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Haute Couture Bridal Inquiries",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", inquiryType: "Haute Couture Bridal Inquiries", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-canvas-cream py-28 sm:py-36 text-noir selection:bg-noir selection:text-canvas-light"
      data-cursor="CONTACT"
    >
      {/* Background ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,168,128,0.25)_0%,transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne-dark uppercase mb-4 border-b border-champagne/30 pb-4">
          <Sparkles className="h-3 w-3 text-champagne-dark" />
          <span>09 / PRIVATE INQUIRIES & CONCIERGE</span>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dramatic Editorial Headline & Atelier Coordinates */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-light text-noir leading-[0.92] tracking-tight">
                LET'S CREATE <br />
                <span className="font-serif-italic text-champagne-dark font-normal">
                  YOUR LOOK.
                </span>
              </h2>

              <p className="mt-8 font-sans text-base text-noir/75 max-w-lg font-light leading-relaxed">
                Whether you are stepping onto a red carpet, walking down the aisle of an Italian villa, or seeking a complete personal transformation, we invite you to the private atelier.
              </p>

              {/* Direct Booking CTA */}
              <div className="mt-10">
                <MagneticButton
                  onClick={onOpenBooking}
                  variant="primary"
                  cursorText="RESERVE"
                >
                  <span>BOOK YOUR EXPERIENCE</span>
                  <ArrowUpRight className="h-4 w-4 text-champagne" />
                </MagneticButton>
              </div>

              {/* Atelier Details Grid */}
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-champagne/30 pt-8 text-xs font-sans">
                <div className="space-y-2">
                  <span className="block font-bold tracking-widest text-champagne-dark uppercase">
                    MADISON AVENUE ATELIER
                  </span>
                  <div className="flex items-start gap-2 text-noir/80">
                    <MapPin className="h-4 w-4 text-champagne-dark shrink-0 mt-0.5" />
                    <span>742 Madison Avenue, Suite 900, New York, NY 10065</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block font-bold tracking-widest text-champagne-dark uppercase">
                    PARIS RESIDENCY
                  </span>
                  <div className="flex items-start gap-2 text-noir/80">
                    <MapPin className="h-4 w-4 text-champagne-dark shrink-0 mt-0.5" />
                    <span>18 Place Vendôme, 75001 Paris, France</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block font-bold tracking-widest text-champagne-dark uppercase">
                    VIP CONCIERGE LINE
                  </span>
                  <div className="flex items-center gap-2 text-noir/80">
                    <Phone className="h-4 w-4 text-champagne-dark shrink-0" />
                    <span>+1 (212) 840-7720 / +33 1 42 68 55 00</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block font-bold tracking-widest text-champagne-dark uppercase">
                    ATELIER HOURS
                  </span>
                  <div className="flex items-center gap-2 text-noir/80">
                    <Clock className="h-4 w-4 text-champagne-dark shrink-0" />
                    <span>Tue – Sun: 09:00 – 19:30 (By Reservation)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Concierge Direct Message Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl border border-champagne/30 bg-canvas-light p-8 sm:p-10 shadow-2xl"
            >
              <span className="font-sans text-[10px] tracking-mega-wide text-champagne-dark uppercase font-semibold">
                CONFIDENTIAL ATELIER INQUIRY
              </span>
              <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-light text-noir">
                Inquire With Concierge
              </h3>

              {formSubmitted ? (
                <div className="my-10 text-center space-y-4 py-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-champagne/20 text-champagne-dark">
                    <Check className="h-7 w-7" />
                  </div>
                  <h4 className="font-editorial text-2xl text-noir">
                    Message Dispatched With Honor.
                  </h4>
                  <p className="font-sans text-xs text-noir/70 max-w-sm mx-auto">
                    Elena and our concierge team have received your request and will contact you directly within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne-dark uppercase mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lady Genevieve Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-champagne/30 bg-canvas-cream/60 px-4 py-3 font-sans text-xs text-noir placeholder-noir/40 focus:border-noir focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne-dark uppercase mb-1.5 font-medium">
                      Private Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="genevieve@dupont.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-champagne/30 bg-canvas-cream/60 px-4 py-3 font-sans text-xs text-noir placeholder-noir/40 focus:border-noir focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne-dark uppercase mb-1.5 font-medium">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full rounded-xl border border-champagne/30 bg-canvas-cream/60 px-4 py-3 font-sans text-xs text-noir focus:border-noir focus:outline-none"
                    >
                      <option value="Haute Couture Bridal Inquiries">Haute Couture Bridal Inquiries</option>
                      <option value="Editorial & Fashion Week Direction">Editorial & Fashion Week Direction</option>
                      <option value="Red Carpet & Gala Bookings">Red Carpet & Gala Bookings</option>
                      <option value="Private Half-Day Studio Metamorphosis">Private Half-Day Studio Metamorphosis</option>
                      <option value="Media & Press Relations">Media & Press Relations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne-dark uppercase mb-1.5 font-medium">
                      Vision / Event Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your upcoming occasion, gown silhouette, date, or specific aesthetic goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-champagne/30 bg-canvas-cream/60 px-4 py-3 font-sans text-xs text-noir placeholder-noir/40 focus:border-noir focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="SUBMIT"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-noir py-4 font-sans text-xs font-bold tracking-widest text-canvas-light uppercase shadow-xl hover:bg-noir-light transition-all"
                  >
                    <span>DISPATCH CONCIERGE INQUIRY</span>
                    <Send className="h-3.5 w-3.5 text-champagne" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
