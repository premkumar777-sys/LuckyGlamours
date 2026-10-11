export interface PortfolioCategory {
  id: string;
  label: string;
  placeholderLabel: string;
  description: string;
  imageUrl?: string;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "bridal",
    label: "Bridal Makeup",
    placeholderLabel: "[BRIDAL MAKEUP PORTFOLIO IMAGE]",
    description: "Couture wedding day makeup looks crafted for traditional and contemporary brides.",
    imageUrl: "/images/bridal/bride_portrait.jpeg",
  },
  {
    id: "groom",
    label: "Groom & Couple Makeup",
    placeholderLabel: "[GROOM MAKEUP PORTFOLIO IMAGE]",
    description: "Subtle, camera-ready grooming and harmonious wedding looks for brides and grooms.",
    imageUrl: "/images/bridal/wedding_couple.jpeg",
  },
  {
    id: "engagement",
    label: "Engagement & Ceremonies",
    placeholderLabel: "[ENGAGEMENT MAKEUP IMAGE]",
    description: "Radiant, romantic makeup styles for ring ceremonies, thali rituals, and engagements.",
    imageUrl: "/images/bridal/bride_thali.jpeg",
  },
  {
    id: "reception",
    label: "Reception Looks",
    placeholderLabel: "[RECEPTION MAKEUP IMAGE]",
    description: "Glamorous evening makeup formulated for stage lighting and wedding receptions.",
    imageUrl: "/images/bridal/wedding_couple_alt.jpeg",
  },
  {
    id: "pre-wedding",
    label: "Pre-Wedding Celebrations",
    placeholderLabel: "[PRE-WEDDING SHOOT IMAGE]",
    description: "Natural-looking camera-ready styling for pre-wedding celebrations and shoots.",
    imageUrl: "/images/bridal/wedding_couple.jpeg",
  },
  {
    id: "party",
    label: "Bridal Hair & Floral Artistry",
    placeholderLabel: "[EVENT MAKEUP IMAGE]",
    description: "Intricate South Indian traditional poola jada and floral hair design artistry.",
    imageUrl: "/images/bridal/bridal_hairstyle.jpeg",
  }
];
