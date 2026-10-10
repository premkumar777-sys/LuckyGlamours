import React from 'react';

export interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | 'hero' | 'auto';
  className?: string;
  src?: string;
  altText?: string;
  subText?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  aspectRatio = 'square',
  className = '',
  src,
  altText,
  subText = 'Image placeholder for future product photograph',
}) => {
  // If an actual image source is provided in the future, render it directly
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-sm bg-ivory ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={altText || label}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>
    );
  }

  // Aspect ratio helper classes
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
    hero: 'aspect-[4/3] md:aspect-[16/10]',
    auto: 'h-full min-h-[220px]',
  }[aspectRatio];

  return (
    <div
      aria-label={label}
      role="img"
      className={`relative w-full ${aspectClasses} rounded-sm bg-ivory-dark/40 border border-sage/60 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-olive/50 ${className}`}
    >
      {/* Delicate floral / botanical accent watermark pattern in background */}
      <div className="absolute inset-2 border border-dashed border-sage/40 pointer-events-none rounded-[2px]" />

      {/* Subtle Camera / Image Icon */}
      <div className="w-12 h-12 mb-3 rounded-full bg-ivory/80 border border-sage/80 flex items-center justify-center text-olive shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      </div>

      {/* Primary Placeholder Label */}
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-charcoal bg-ivory/90 px-3 py-1 rounded border border-sage/60 shadow-2xs max-w-[90%] truncate">
        {label}
      </span>

      {/* Subtext description */}
      <span className="text-[11px] text-charcoal/70 font-sans mt-2 max-w-[85%] leading-tight">
        {subText}
      </span>
    </div>
  );
};
