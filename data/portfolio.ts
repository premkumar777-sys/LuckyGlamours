export interface PortfolioCategory {
  id: string;
  label: string;
  placeholderLabel: string;
  description: string;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "bridal",
    label: "Bridal Makeup",
    placeholderLabel: "[BRIDAL MAKEUP PORTFOLIO IMAGE]",
    description: "Couture wedding day makeup looks crafted for traditional and contemporary brides."
  },
  {
    id: "groom",
    label: "Groom Makeup",
    placeholderLabel: "[GROOM MAKEUP PORTFOLIO IMAGE]",
    description: "Subtle, camera-ready grooming and complexion refinement for grooms."
  },
  {
    id: "engagement",
    label: "Engagement Looks",
    placeholderLabel: "[ENGAGEMENT MAKEUP IMAGE]",
    description: "Radiant, romantic makeup styles for ring ceremonies and engagement celebrations."
  },
  {
    id: "reception",
    label: "Reception Looks",
    placeholderLabel: "[RECEPTION MAKEUP IMAGE]",
    description: "Glamorous evening makeup formulated for high-definition flash photography."
  },
  {
    id: "pre-wedding",
    label: "Pre-Wedding Shoots",
    placeholderLabel: "[PRE-WEDDING SHOOT IMAGE]",
    description: "Natural-looking makeup designed for outdoor pre-wedding photography."
  },
  {
    id: "party",
    label: "Party & Event Makeup",
    placeholderLabel: "[EVENT MAKEUP IMAGE]",
    description: "Chic makeup styling for wedding guests, galas, and festive celebrations."
  }
];
