export interface BeautyService {
  id: string;
  name: string;
  category: 'bridal-groom' | 'occasion' | 'photoshoot';
  categoryLabel: string;
  description: string;
  occasion: string;
  startingPrice?: string; // e.g. "Enquire for pricing" or "₹15,000 onwards"
  packageDetails?: string[];
  placeholderLabel: string;
}

export const BEAUTY_SERVICES: BeautyService[] = [
  {
    id: "bridal-makeup",
    name: "Couture Bridal Makeup",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Signature HD & airbrush bridal makeup with customized skin prep, lash setting, and saree/dupatta draping.",
    occasion: "Main Wedding Ceremony",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "HD / Airbrush bridal makeup & skin prep",
      "Hair styling & floral hair placement",
      "Saree / lehenga dupatta draping",
      "Eyelash application & touch-up kit"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "groom-makeup-grooming",
    name: "Groom Makeup & Grooming",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Subtle, camera-ready grooming focusing on skin evening, anti-shine finish, and natural complexion refinement.",
    occasion: "Wedding & Reception",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Hydrating skin prep & tone evening",
      "Anti-shine matte finish for photos",
      "Beard alignment & hair setting"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "engagement-makeup",
    name: "Engagement Makeup",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Radiant, romantic makeup look tailored to complement your ring ceremony gown or lehenga.",
    occasion: "Engagement Ceremony",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Luminous skin finish & eye sculpting",
      "Hair styling & accessory setting",
      "Outfit draping assistance"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "reception-makeup",
    name: "Reception Makeup",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Glamorous high-definition evening makeup designed for stage lighting and flash photography.",
    occasion: "Wedding Reception & Gala",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "HD evening glam makeup",
      "Statement eye or lip styling",
      "Hairstyling & veil / dupatta setting"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "party-makeup",
    name: "Party & Celebration Makeup",
    category: "occasion",
    categoryLabel: "Occasion Makeup",
    description: "Chic, polished makeup styling for birthdays, anniversaries, sangeet, and festive celebrations.",
    occasion: "Parties & Festive Events",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Customized party makeup",
      "Hair styling & setting",
      "Optional lash application"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  },
  {
    id: "wedding-guest-makeup",
    name: "Wedding Guest & Family Makeup",
    category: "occasion",
    categoryLabel: "Occasion Makeup",
    description: "Elegant, long-lasting makeup styling for bridesmaids, mothers, sisters, and wedding guests.",
    occasion: "Sangeet, Mehendi & Guests",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Soft HD complexion styling",
      "Hair blow-dry or bun styling",
      "Dupatta pinning assistance"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  },
  {
    id: "pre-wedding-photoshoot",
    name: "Pre-Wedding Photoshoot Makeup",
    category: "photoshoot",
    categoryLabel: "Pre-Wedding & Shoots",
    description: "Natural, camera-focused makeup crafted for outdoor and concept pre-wedding photography.",
    occasion: "Pre-Wedding Shoot",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Camera-ready natural skin finish",
      "On-set touch-ups & outfit tweaks",
      "Hair setting for outdoor weather"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  },
  {
    id: "special-event-makeup",
    name: "Special Occasion & Editorial Makeup",
    category: "photoshoot",
    categoryLabel: "Pre-Wedding & Shoots",
    description: "Bespoke high-fashion and media makeup for portfolio shoots, awards, and editorial events.",
    occasion: "Editorial & Media Events",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "High-fashion editorial makeup",
      "Theme-based hair styling",
      "Photography lighting optimization"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'bridal-groom', label: 'Bridal & Groom' },
  { id: 'occasion', label: 'Party & Occasions' },
  { id: 'photoshoot', label: 'Pre-Wedding & Shoots' },
] as const;
