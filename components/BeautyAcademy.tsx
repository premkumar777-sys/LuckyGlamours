"use client";

import React, { useState } from 'react';
import { ACADEMY_COURSES, BeautyCourse } from '../data/courses';
import { getWhatsAppCourseUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export const BeautyAcademy: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<BeautyCourse | null>(null);

  return (
    <section id="academy" className="py-16 md:py-24 bg-ivory border-b border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest-editorial uppercase text-olive font-semibold block">
            LUCKY GLAMOURS BEAUTY ACADEMY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Practical Beauty & Skill Training Courses
          </h2>
          <p className="font-sans text-sm text-charcoal/70 font-light">
            Master professional beauty techniques through hands-on training in brow shaping, threading, personal self-makeup, and master bridal styling.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ACADEMY_COURSES.map((course) => {
            const whatsappUrl = getWhatsAppCourseUrl(course.name);

            return (
              <div
                key={course.id}
                className="group bg-ivory-light border border-sage/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-olive/60 hover:shadow-sm"
              >
                <div>
                  {/* Course Image Placeholder */}
                  <div className="p-3 bg-ivory relative">
                    <span className="absolute top-5 left-5 z-10 font-sans text-[10px] uppercase tracking-widest font-semibold bg-ivory/90 text-earth px-2 py-0.5 rounded border border-sage/60">
                      Skill Training
                    </span>
                    <ImagePlaceholder
                      label={course.placeholderLabel}
                      aspectRatio="landscape"
                      subText={`Image placeholder for ${course.name} course`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-serif text-xl text-charcoal font-medium group-hover:text-olive transition-colors leading-snug">
                      {course.name}
                    </h3>

                    <p className="font-sans text-xs font-medium text-olive">
                      {course.subtitle}
                    </p>

                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light line-clamp-3">
                      {course.description}
                    </p>

                    <div className="pt-2 border-t border-sage/30 space-y-1 text-[11px] font-sans text-earth">
                      <p><span className="font-semibold text-charcoal">Format:</span> {course.format}</p>
                      <p><span className="font-semibold text-charcoal">Eligibility:</span> {course.eligibility}</p>
                      <p><span className="font-semibold text-charcoal">Duration & Fees:</span> {course.duration}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] font-serif font-medium text-charcoal block mb-1">Key Curriculum Skills:</span>
                      <ul className="space-y-1 text-[11px] font-sans text-charcoal/80">
                        {course.whatYouWillLearn.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-olive shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(course)}
                    className="w-full text-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-[11px] uppercase tracking-wider font-semibold py-2.5 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-olive/40"
                  >
                    View Syllabus
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-olive hover:bg-olive-dark text-ivory text-[11px] uppercase tracking-wider font-semibold py-2.5 rounded-sm transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-olive/40"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Detail Modal */}
        {selectedCourse && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0" onClick={() => setSelectedCourse(null)} aria-hidden="true" />
            <div className="relative bg-ivory border border-sage/80 rounded-sm w-full max-w-2xl overflow-hidden shadow-2xl z-10 p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-sage/40 pb-4">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-earth font-semibold block">
                    Beauty Academy Training Module
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-charcoal">{selectedCourse.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="p-1 text-charcoal/70 hover:text-charcoal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs font-sans text-charcoal/80">
                <ImagePlaceholder
                  label={selectedCourse.placeholderLabel}
                  aspectRatio="landscape"
                  subText={`Detailed training placeholder for ${selectedCourse.name}`}
                />
                <p className="text-sm leading-relaxed">{selectedCourse.description}</p>
                
                <div className="p-3 bg-sage-light/40 rounded border border-sage/40 grid grid-cols-1 sm:grid-cols-3 gap-2 text-earth">
                  <div>
                    <span className="font-semibold block text-charcoal">Format:</span>
                    <span>{selectedCourse.format}</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-charcoal">Eligibility:</span>
                    <span>{selectedCourse.eligibility}</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-charcoal">Duration & Fees:</span>
                    <span>{selectedCourse.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-semibold block text-charcoal text-sm">Full Practical Syllabus:</span>
                  <ul className="space-y-1.5">
                    {selectedCourse.whatYouWillLearn.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-sage/40 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="px-5 py-2.5 text-xs uppercase font-semibold border border-sage-dark text-charcoal rounded-sm"
                >
                  Close
                </button>
                <a
                  href={getWhatsAppCourseUrl(selectedCourse.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-olive text-ivory text-xs uppercase font-semibold px-6 py-2.5 rounded-sm"
                >
                  Enquire Batch Details on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
