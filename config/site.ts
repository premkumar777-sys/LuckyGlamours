export interface SiteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  announcement: string;
  whatsappNumber: string; // International format without + or spaces, e.g., '919876543210'
  whatsappDisplayNumber: string; // Formatted for display
  email: string;
  instagramUrl: string;
  locationPlaceholder: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Lucky Glamours",
  tagline: "Haute Botanical Skincare & Artisan Oils",
  subTagline: "Handcrafted soaps & slow-infused hair and body oils made in small artisanal batches.",
  announcement: "Handcrafted with care · Discover our collection",
  
  // EDITABLE: Replace this with the actual business WhatsApp number (e.g., '91XXXXXXXXXX')
  whatsappNumber: "919876543210", 
  whatsappDisplayNumber: "+91 98765 43210 (Configure your number in config/site.ts)",
  
  email: "hello@luckyglamours.com", // EDITABLE: Place actual email when available
  instagramUrl: "https://instagram.com/luckyglamours", // EDITABLE: Place actual handle
  locationPlaceholder: "Handcrafted in India · Dispatching Nationwide",
};

/**
 * Generates a pre-filled WhatsApp click-to-chat URL for ordering or inquiring about a specific product.
 */
export function getWhatsAppProductUrl(productName: string, size?: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const sizeString = size ? `, ${size}` : "";
  const text = `Hello Lucky Glamours! I am interested in ${productName}${sizeString}. Please share the current price, availability, and delivery details.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a pre-filled WhatsApp click-to-chat URL for general inquiries or gift sets.
 */
export function getWhatsAppGeneralUrl(subject = "General Inquiry"): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const text = `Hello Lucky Glamours! I would like to inquire about ${subject}. Please share more details.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
