"use client";

import React, { useEffect } from 'react';
import { Product, getProductDiscountPercentage } from '../data/products';
import { getWhatsAppProductUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const discountPercent = getProductDiscountPercentage(product.originalPriceInINR, product.priceInINR);
  const whatsappUrl = getWhatsAppProductUrl(
    product.name,
    product.size,
    product.priceInINR,
    product.originalPriceInINR
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-ivory border border-sage/80 rounded-sm w-full max-w-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-sage/40 flex items-center justify-between bg-ivory-light shrink-0">
          <span className="font-sans text-xs uppercase tracking-widest text-earth font-semibold">
            {product.categoryLabel}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details modal"
            className="p-1 text-charcoal/70 hover:text-charcoal rounded focus:outline-none focus:ring-2 focus:ring-olive/50"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Image Placeholder */}
            <div className="md:col-span-5 bg-ivory-dark/30 p-2 border border-sage/50 rounded-sm relative">
              {discountPercent && (
                <span className="absolute top-4 right-4 z-10 font-sans text-xs font-bold uppercase tracking-wider bg-emerald-800 text-ivory px-2.5 py-0.5 rounded shadow-xs">
                  {discountPercent}% OFF
                </span>
              )}
              <ImagePlaceholder
                label={product.placeholderLabel}
                aspectRatio="square"
                src={product.imageUrl}
                altText={product.name}
                subText={`Image placeholder for ${product.name}`}
              />
            </div>

            {/* Product Overview */}
            <div className="md:col-span-7 space-y-4">
              <h2 id="modal-product-title" className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                {product.name}
              </h2>

              {/* Flipkart / Amazon Style Price Box */}
              <div className="space-y-1.5 p-3.5 bg-ivory-light border border-sage/60 rounded">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-3xl font-semibold text-olive">
                    ₹{product.priceInINR}
                  </span>
                  {product.originalPriceInINR && (
                    <>
                      <span className="text-base font-sans text-charcoal/50 line-through">
                        M.R.P.: ₹{product.originalPriceInINR}
                      </span>
                      <span className="text-xs font-sans font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-2 py-0.5 rounded-full">
                        {discountPercent}% OFF
                      </span>
                    </>
                  )}
                  <span className="text-xs font-sans text-earth bg-sage-light/80 px-2.5 py-1 rounded">
                    {product.size}
                  </span>
                </div>
                {product.originalPriceInINR && (
                  <p className="text-xs font-sans text-emerald-700 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>Special Deal: You Save ₹{product.originalPriceInINR - product.priceInINR} ({discountPercent}% off MRP)</span>
                  </p>
                )}
              </div>

              <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="p-3 bg-ivory-dark/30 border border-sage/40 rounded text-xs text-earth">
                <span className="font-semibold block text-charcoal">Batch Availability Note:</span>
                Handmade in small batches. Please verify current batch availability directly via WhatsApp.
              </div>
            </div>

          </div>

          {/* Complete Ingredients */}
          <div className="space-y-2 pt-4 border-t border-sage/40">
            <h3 className="font-serif text-lg font-medium text-charcoal">Complete Ingredients</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-charcoal/80">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Directions for Use */}
          <div className="space-y-2 pt-4 border-t border-sage/40">
            <h3 className="font-serif text-lg font-medium text-charcoal">Directions for Use</h3>
            <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
              {product.directions}
            </p>
          </div>

          {/* Relevant Precautions */}
          <div className="space-y-2 pt-4 border-t border-sage/40">
            <h3 className="font-serif text-lg font-medium text-charcoal">Relevant Precautions</h3>
            <p className="font-sans text-xs text-earth leading-relaxed bg-sage-light/40 p-3 rounded border border-sage/40">
              {product.precautions}
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-sage/40 bg-ivory-light flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-center sm:text-left">
            <div className="flex items-baseline gap-2 justify-center sm:justify-start">
              <span className="block font-serif text-2xl font-semibold text-charcoal">₹{product.priceInINR}</span>
              {product.originalPriceInINR && (
                <>
                  <span className="text-xs font-sans text-charcoal/50 line-through">₹{product.originalPriceInINR}</span>
                  <span className="text-xs font-sans font-bold text-emerald-700">({discountPercent}% off)</span>
                </>
              )}
            </div>
            <span className="block text-[11px] text-earth font-sans">WhatsApp Ordering Only · Small-Batch Handcrafted</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-ivory text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-olive/50"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Order This Item on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
