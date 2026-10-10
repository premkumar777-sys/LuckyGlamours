"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  Check,
  ChevronRight,
  ChevronLeft,
  User,
  Mail,
  Phone,
  Wine,
  Heart,
  FileCheck,
  ArrowUpRight,
  X
} from "lucide-react";
import { SERVICES, Service } from "../data/services";
import { MagneticButton } from "./ui/MagneticButton";

interface BookingExperienceProps {
  initialServiceId?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export function BookingExperience({
  initialServiceId,
  isModal = false,
  onCloseModal,
}: BookingExperienceProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>("2026-10-12");
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");
  const [guestDetails, setGuestDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    occasion: "Haute Couture Bridal",
    sensitivities: "",
    refreshment: "Laurent-Perrier Champagne",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [referenceCode, setReferenceCode] = useState("LG-2026-8849");

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const selectedService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const times = [
    { label: "MORNING ILLUMINATION", slots: ["09:00 AM", "10:30 AM", "11:45 AM"] },
    { label: "AFTERNOON SERENITY", slots: ["01:30 PM", "02:45 PM", "03:30 PM"] },
    { label: "GOLDEN HOUR VIP", slots: ["05:00 PM", "06:30 PM"] },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "LG-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(randomRef);
    setBookingConfirmed(true);
    setStep(5);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setStep(1);
  };

  const content = (
    <div className="relative mx-auto w-full max-w-5xl rounded-3xl border border-champagne/30 bg-noir-light text-canvas-light p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.15)_0%,transparent_60%)]" />

      {/* Modal Close Button */}
      {isModal && onCloseModal && (
        <button
          onClick={onCloseModal}
          aria-label="Close reservation modal"
          className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 text-champagne hover:bg-champagne hover:text-noir transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {/* Header */}
      <div className="border-b border-champagne/20 pb-6">
        <div className="flex items-center gap-2.5 text-[10px] font-sans tracking-[0.3em] text-champagne uppercase mb-2">
          <Sparkles className="h-3 w-3 text-champagne" />
          <span>BESPOKE CONCIERGE RESERVATION</span>
        </div>
        <h3 className="font-editorial text-3xl sm:text-5xl font-light text-canvas-light">
          RESERVE YOUR <span className="font-serif-italic text-champagne">EXPERIENCE.</span>
        </h3>
        <p className="mt-2 font-sans text-xs sm:text-sm text-canvas-light/70 font-light">
          Private atelier appointments require no immediate payment. Our concierge contacts you within 2 hours to confirm your custom requirements.
        </p>

        {/* Multi-step progress bar */}
        {!bookingConfirmed && (
          <div className="mt-8 flex items-center justify-between">
            {[
              { num: 1, name: "Service" },
              { num: 2, name: "Date" },
              { num: 3, name: "Time" },
              { num: 4, name: "Details" },
              { num: 5, name: "Confirm" },
            ].map((s) => (
              <div
                key={s.num}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  if (s.num <= step) setStep(s.num as any);
                }}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-sans text-xs font-semibold transition-all ${
                    s.num === step
                      ? "border-2 border-champagne bg-champagne text-noir shadow-lg"
                      : s.num < step
                      ? "border border-champagne/40 bg-champagne/20 text-champagne"
                      : "border border-champagne/20 text-canvas-light/40"
                  }`}
                >
                  {s.num < step ? <Check className="h-3.5 w-3.5" /> : s.num}
                </div>
                <span
                  className={`hidden sm:inline font-sans text-[10px] tracking-widest uppercase ${
                    s.num === step ? "text-champagne font-bold" : "text-canvas-light/50"
                  }`}
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step Content */}
      <div className="mt-8 min-h-[380px]">
        <AnimatePresence mode="wait">
          {/* STEP 1: SERVICE SELECTION */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-2xl font-light text-canvas-light">
                  01 / Select Your Haute Service
                </h4>
                <span className="font-sans text-xs text-champagne">
                  {SERVICES.length} Curated Protocols
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                      selectedServiceId === s.id
                        ? "border-champagne bg-noir-surface shadow-xl"
                        : "border-champagne/20 bg-noir-surface/40 hover:border-champagne/40 hover:bg-noir-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-[9px] tracking-widest text-champagne uppercase font-semibold">
                        {s.category}
                      </span>
                      <span className="font-sans text-xs font-bold text-champagne">
                        {s.price}
                      </span>
                    </div>

                    <h5 className="font-editorial text-xl font-light text-canvas-light group-hover:text-champagne transition-colors">
                      {s.title}
                    </h5>
                    <p className="mt-1 line-clamp-2 font-sans text-xs text-canvas-light/70 font-light">
                      {s.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-champagne/15 pt-2 text-[10px] font-sans text-canvas-light/60">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-champagne" />
                        {s.duration}
                      </span>
                      <span className="text-champagne font-medium">
                        {selectedServiceId === s.id ? "SELECTED" : "TAP TO SELECT"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-champagne/20">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-3.5 font-sans text-xs font-bold tracking-widest text-noir uppercase shadow-xl hover:bg-champagne-light transition-all"
                >
                  <span>CONTINUE TO DATE</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: DATE SELECTION */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-2xl font-light text-canvas-light">
                  02 / Select Your Date
                </h4>
                <span className="font-sans text-xs text-champagne">
                  Autumn / Winter 2026 Season
                </span>
              </div>

              {/* Editorial Date Picker Grid */}
              <div className="rounded-2xl border border-champagne/25 bg-noir-surface p-6">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-champagne/15">
                  <span className="font-editorial text-2xl text-canvas-light font-light">
                    OCTOBER 2026
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-champagne uppercase">
                    ATELIER HOURS: 09:00 - 19:30
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-xs font-sans mb-3 text-canvas-light/50">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {[
                    "", "", "", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                  ].map((day, i) => {
                    if (day === "") return <div key={i} className="p-3" />;
                    const dateStr = `2026-10-${String(day).padStart(2, "0")}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`group relative rounded-xl p-3 font-sans text-xs transition-all ${
                          isSelected
                            ? "bg-champagne font-bold text-noir shadow-lg scale-105"
                            : "hover:bg-noir-light text-canvas-light border border-champagne/15"
                        }`}
                      >
                        <span>{day}</span>
                        {/* Dot indicator for open VIP sessions */}
                        {!isSelected && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-champagne/60" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-champagne/20">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 font-sans text-xs text-canvas-light/60 hover:text-canvas-light"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>BACK</span>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-3.5 font-sans text-xs font-bold tracking-widest text-noir uppercase shadow-xl hover:bg-champagne-light transition-all"
                >
                  <span>CONTINUE TO TIME</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: TIME SELECTION */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-2xl font-light text-canvas-light">
                  03 / Select Appointment Slot
                </h4>
                <span className="font-sans text-xs text-champagne">
                  Date: {selectedDate}
                </span>
              </div>

              <div className="space-y-6">
                {times.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <span className="font-sans text-[10px] tracking-mega-wide text-champagne uppercase font-semibold">
                      {section.label}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {section.slots.map((t) => {
                        const isSelected = selectedTime === t;
                        return (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`flex items-center justify-between rounded-xl border p-4 font-sans text-xs transition-all ${
                              isSelected
                                ? "border-champagne bg-champagne text-noir font-bold shadow-lg"
                                : "border-champagne/20 bg-noir-surface text-canvas-light hover:border-champagne/40"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5" />
                              {t}
                            </span>
                            {isSelected && <Check className="h-4 w-4 text-noir" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-champagne/20">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 font-sans text-xs text-canvas-light/60 hover:text-canvas-light"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>BACK</span>
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-3.5 font-sans text-xs font-bold tracking-widest text-noir uppercase shadow-xl hover:bg-champagne-light transition-all"
                >
                  <span>ENTER GUEST DETAILS</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: GUEST DOSSIER */}
          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-2xl font-light text-canvas-light">
                  04 / Guest Dossier & Preferences
                </h4>
                <span className="font-sans text-xs text-champagne">
                  Confidential & Private
                </span>
              </div>

              <form onSubmit={handleConfirm} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne uppercase mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        placeholder="Madame Genevieve Dupont"
                        value={guestDetails.fullName}
                        onChange={(e) =>
                          setGuestDetails({ ...guestDetails, fullName: e.target.value })
                        }
                        className="w-full rounded-xl border border-champagne/30 bg-noir-surface px-4 py-3 font-sans text-xs text-canvas-light placeholder-canvas-light/30 focus:border-champagne focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne uppercase mb-1.5">
                      Private Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="genevieve@dupont.com"
                      value={guestDetails.email}
                      onChange={(e) =>
                        setGuestDetails({ ...guestDetails, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-champagne/30 bg-noir-surface px-4 py-3 font-sans text-xs text-canvas-light placeholder-canvas-light/30 focus:border-champagne focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne uppercase mb-1.5">
                      Phone / Mobile *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 349-2810"
                      value={guestDetails.phone}
                      onChange={(e) =>
                        setGuestDetails({ ...guestDetails, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-champagne/30 bg-noir-surface px-4 py-3 font-sans text-xs text-canvas-light placeholder-canvas-light/30 focus:border-champagne focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne uppercase mb-1.5">
                      Occasion / Event
                    </label>
                    <select
                      value={guestDetails.occasion}
                      onChange={(e) =>
                        setGuestDetails({ ...guestDetails, occasion: e.target.value })
                      }
                      className="w-full rounded-xl border border-champagne/30 bg-noir-surface px-4 py-3 font-sans text-xs text-canvas-light focus:border-champagne focus:outline-none"
                    >
                      <option value="Haute Couture Bridal">Haute Couture Bridal</option>
                      <option value="Red Carpet / Film Gala">Red Carpet / Film Gala</option>
                      <option value="Editorial & High Fashion">Editorial & High Fashion</option>
                      <option value="Milestone Celebration">Milestone Celebration</option>
                      <option value="Private Self-Care Atelier">Private Self-Care Atelier</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne uppercase mb-1.5">
                      Skin Sensitivities / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sensitive under-eyes, fragrance preference"
                      value={guestDetails.sensitivities}
                      onChange={(e) =>
                        setGuestDetails({ ...guestDetails, sensitivities: e.target.value })
                      }
                      className="w-full rounded-xl border border-champagne/30 bg-noir-surface px-4 py-3 font-sans text-xs text-canvas-light placeholder-canvas-light/30 focus:border-champagne focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-champagne uppercase mb-1.5">
                      Complimentary Atelier Refreshment
                    </label>
                    <select
                      value={guestDetails.refreshment}
                      onChange={(e) =>
                        setGuestDetails({ ...guestDetails, refreshment: e.target.value })
                      }
                      className="w-full rounded-xl border border-champagne/30 bg-noir-surface px-4 py-3 font-sans text-xs text-canvas-light focus:border-champagne focus:outline-none"
                    >
                      <option value="Laurent-Perrier Champagne">Laurent-Perrier Champagne</option>
                      <option value="Chilled Ceremonial Uji Matcha">Chilled Ceremonial Uji Matcha</option>
                      <option value="Sparkling Jasmine Blossom Elixir">Sparkling Jasmine Blossom Elixir</option>
                      <option value="Filtered Ice Water & Citrus">Filtered Ice Water & Citrus</option>
                    </select>
                  </div>
                </div>

                {/* Summary Voucher Callout */}
                <div className="mt-6 rounded-2xl border border-champagne/40 bg-champagne/10 p-4 flex items-center justify-between">
                  <div>
                    <span className="block font-sans text-[9px] tracking-widest text-champagne uppercase">
                      SUMMARY
                    </span>
                    <span className="font-editorial text-lg text-canvas-light">
                      {selectedService.title}
                    </span>
                    <span className="block font-sans text-xs text-canvas-light/70">
                      {selectedDate} at {selectedTime} · {selectedService.price}
                    </span>
                  </div>
                  <span className="rounded-full bg-champagne px-3 py-1 font-sans text-xs font-bold text-noir">
                    NO PRE-PAYMENT
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-champagne/20">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 font-sans text-xs text-canvas-light/60 hover:text-canvas-light"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>BACK</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-champagne px-10 py-4 font-sans text-xs font-bold tracking-widest text-noir uppercase shadow-2xl hover:bg-champagne-light transition-all"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>CONFIRM APPOINTMENT</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 5: CONFIRMATION CERTIFICATE / VOUCHER */}
          {step === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 text-center space-y-8"
            >
              {/* Gold Crest Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-champagne bg-champagne/15 shadow-2xl">
                <Sparkles className="h-9 w-9 text-champagne animate-pulse" />
              </div>

              <div>
                <span className="font-sans text-xs tracking-[0.35em] text-champagne uppercase">
                  CONFIRMATION DOSSIER
                </span>
                <h4 className="mt-2 font-editorial text-4xl sm:text-6xl font-light text-canvas-light">
                  YOUR EXPERIENCE IS RESERVED.
                </h4>
                <p className="mt-2 font-sans text-sm text-canvas-light/70 max-w-lg mx-auto font-light">
                  Welcome to the LuckyGlamours sanctuary. Our atelier concierge will contact you within two hours to personalize your suite preparations.
                </p>
              </div>

              {/* Luxury Digital Ticket Pass */}
              <div className="mx-auto max-w-md rounded-3xl border border-champagne/40 bg-noir-surface p-6 sm:p-8 text-left space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-champagne/20 pb-4">
                  <div>
                    <span className="block font-sans text-[8px] tracking-widest text-champagne uppercase">
                      RESERVATION PASS
                    </span>
                    <span className="font-editorial text-xl text-canvas-light">
                      LUCKYGLAMOURS
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block font-sans text-[8px] tracking-widest text-canvas-light/50 uppercase">
                      REFERENCE
                    </span>
                    <span className="font-mono text-xs font-bold text-champagne">
                      {referenceCode}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-sans">
                  <div className="flex justify-between">
                    <span className="text-canvas-light/50">SERVICE:</span>
                    <span className="text-canvas-light font-medium">{selectedService.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-canvas-light/50">DATE & TIME:</span>
                    <span className="text-champagne font-medium">{selectedDate} · {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-canvas-light/50">GUEST:</span>
                    <span className="text-canvas-light font-medium">{guestDetails.fullName || "Guest of Honor"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-canvas-light/50">REFRESHMENT:</span>
                    <span className="text-canvas-light font-medium">{guestDetails.refreshment}</span>
                  </div>
                  <div className="flex justify-between border-t border-champagne/15 pt-2">
                    <span className="text-canvas-light/50">ESTIMATED INVESTMENT:</span>
                    <span className="text-canvas-light font-bold">{selectedService.price}</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-sans text-canvas-light/40 border-t border-champagne/15 text-center">
                  742 Madison Ave, Suite 900, New York · Private Concierge: +1 (212) 840-7720
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="rounded-full border border-champagne/30 px-6 py-3 font-sans text-xs tracking-wider text-canvas-light hover:border-champagne transition-colors"
                >
                  RESERVE ANOTHER EXPERIENCE
                </button>

                {isModal && onCloseModal && (
                  <button
                    onClick={onCloseModal}
                    className="rounded-full bg-champagne px-8 py-3 font-sans text-xs font-bold tracking-wider text-noir uppercase transition-all hover:bg-champagne-light"
                  >
                    CLOSE & RETURN TO ATELIER
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center bg-noir/90 p-4 sm:p-6 backdrop-blur-lg overflow-y-auto">
        {content}
      </div>
    );
  }

  return (
    <section id="booking" className="relative w-full overflow-hidden bg-noir py-28 sm:py-36 px-4 sm:px-8">
      {content}
    </section>
  );
}
