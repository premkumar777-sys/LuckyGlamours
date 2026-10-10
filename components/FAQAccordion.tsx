"use client";

import React, { useState } from 'react';
import { FAQS_LIST } from '../data/faqs';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-ivory border-b border-sage/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            HELP & FREQUENT QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Everything you need to know about our handmade soaps, ingredient sourcing, and ordering process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-ivory-light border border-sage/60 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-charcoal hover:text-olive transition-colors focus:outline-none focus:ring-2 focus:ring-olive/50"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center text-earth shrink-0 transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-5 font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light border-t border-sage/30 pt-3 animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
