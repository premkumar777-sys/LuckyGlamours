export interface SiteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  announcement: string;
  whatsappNumber: string; // International format without + or spaces, e.g., '919876543210'
  whatsappDisplayNumber: string;
  email: string;
  instagramUrl: string;
  youtubeUrl: string;
  locationPlaceholder: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Lucky Glamours",
  tagline: "Beauty Artistry · Bridal · Beauty Academy · Botanical Skincare",
  subTagline: "Professional makeup artistry, bridal styling, skill training courses, and handcrafted botanical soaps & oils.",
  announcement: "Special Offer: Handcrafted Botanical Soaps from ₹199 (Up to 38% OFF) · Order on WhatsApp",
  
  // WhatsApp business number: 9347647145 (+919347647145)
  whatsappNumber: "919347647145", 
  whatsappDisplayNumber: "+91 93476 47145",
  
  email: "hello@luckyglamours.com",
  instagramUrl: "https://www.instagram.com/luckyglamours_",
  youtubeUrl: "https://www.youtube.com/@luckyglamours",
  locationPlaceholder: "India · Studio & On-Location Bridal Services · Nationwide Dispatch for Oils & Soaps",
};

/**
 * Generates a WhatsApp URL for product orders (Soaps & Oils).
 */
export function getWhatsAppProductUrl(
  productName: string,
  size?: string,
  price?: number,
  originalPrice?: number
): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const sizeString = size ? `, ${size}` : "";
  const priceString = price
    ? ` (Offer Price: ₹${price}${originalPrice ? ` | MRP: ₹${originalPrice}` : ""})`
    : "";
  const text = `Hello Lucky Glamours! I am interested in ordering ${productName}${sizeString}${priceString}. Please confirm availability and delivery details.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp URL for beauty & bridal service inquiries.
 */
export function getWhatsAppServiceUrl(serviceName: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const text = `Hello Lucky Glamours! I would like to enquire about ${serviceName}. Please share availability, package details, and pricing.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp URL for Beauty Academy course inquiries.
 */
export function getWhatsAppCourseUrl(courseName: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const text = `Hello Lucky Glamours! I am interested in your ${courseName} training. Please share the syllabus, duration, fees, and upcoming batch details.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp URL for general or portfolio inquiries.
 */
export function getWhatsAppGeneralUrl(subject = "General Inquiry"): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const text = `Hello Lucky Glamours! I would like to inquire about ${subject}. Please share more details.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
