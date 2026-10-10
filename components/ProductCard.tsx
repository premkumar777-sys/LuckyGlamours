import React from 'react';
import { Product } from '../data/products';
import { getWhatsAppProductUrl } from '../config/site';
import { ImagePlaceholder } from './ui/ImagePlaceholder';

export interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const whatsappUrl = getWhatsAppProductUrl(product.name, product.size);

  return (
    <div className="group bg-ivory border border-sage/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-olive/60 hover:shadow-sm">
      <div>
        {/* Product Image Placeholder */}
        <div className="p-3 bg-ivory-dark/20 relative">
          <span className="absolute top-5 left-5 z-10 font-sans text-[10px] uppercase tracking-widest font-semibold bg-ivory/90 text-earth px-2 py-0.5 rounded border border-sage/60">
            {product.categoryLabel}
          </span>
          <ImagePlaceholder
            label={product.placeholderLabel}
            aspectRatio="square"
            src={product.imageUrl}
            altText={product.name}
            subText={`Image placeholder for ${product.name}`}
          />
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl text-charcoal font-medium leading-snug group-hover:text-olive transition-colors">
              {product.name}
            </h3>
            <span className="font-sans text-sm font-semibold text-charcoal shrink-0 bg-sage-light/60 px-2 py-1 rounded">
              ₹{product.priceInINR}
            </span>
          </div>

          <p className="font-sans text-xs text-earth font-medium tracking-wide">
            {product.size}
          </p>

          <p className="font-sans text-xs text-charcoal/70 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-4">
        <button
          type="button"
          onClick={() => onSelectProduct(product)}
          className="w-full text-center bg-transparent border border-sage-dark hover:border-olive text-charcoal hover:text-olive text-[11px] uppercase tracking-wider font-semibold py-2.5 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-olive/40"
        >
          View Details
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
          <span>Order</span>
        </a>
      </div>
    </div>
  );
};
