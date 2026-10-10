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
    description: "Personalized signature bridal makeup tailored to enhance your natural features, attire palette, and wedding aesthetic. Includes trial consultation, skin preparation, HD/Airbrush technique, lash application, and saree/dupatta draping assistance.",
    occasion: "Main Wedding Ceremony",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Skin prep & HD / Airbrush makeup",
      "Hair styling & floral hair embellishments",
      "Saree, dupatta, or lehenga draping assistance",
      "Lash application & touch-up kit guidance"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "groom-makeup-grooming",
    name: "Groom Makeup & Grooming",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Subtle, camera-ready grooming tailored specifically for grooms. Focuses on skin evening, shine control, beard conditioning, and natural complexion refinement.",
    occasion: "Wedding & Reception Ceremonies",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Hydrating skin prep & complexion evening",
      "Anti-shine matte finish for high-res photography",
      "Beard alignment & hair setting",
      "Subtle under-eye & spot correction"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "engagement-makeup",
    name: "Engagement Makeup",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Radiant, romantic makeup look designed for engagement ring ceremonies and cocktail evenings. Custom color coordination to match your gown or lehenga.",
    occasion: "Engagement & Ring Ceremony",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Luminous skin finish & eye sculpting",
      "Custom hair styling & accessory placement",
      "Outfit draping assistance"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "reception-makeup",
    name: "Reception Makeup",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Glamorous evening makeup with long-wearing coverage formulated to look breathtaking under evening stage lighting and flash photography.",
    occasion: "Wedding Reception & Gala",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "High-definition evening makeup",
      "Statement eye or lip focus",
      "Hairstyling & veil/dupatta setting"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
  },
  {
    id: "party-makeup",
    name: "Party & Celebration Makeup",
    category: "occasion",
    categoryLabel: "Occasion Makeup",
    description: "Chic, polished makeup for birthday celebrations, anniversary galas, sangeet parties, and special evening events.",
    occasion: "Parties & Evening Celebrations",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Customized makeup application",
      "Basic hair styling & setting",
      "Lash application optional"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  },
  {
    id: "wedding-guest-makeup",
    name: "Wedding Guest & Family Makeup",
    category: "occasion",
    categoryLabel: "Occasion Makeup",
    description: "Elegant, long-lasting makeup styling for bridesmaids, mothers, sisters, and wedding guests to complement the bridal party palette.",
    occasion: "Sangeet, Mehendi & Wedding Guests",
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
    description: "Versatile, natural-looking makeup designed for outdoor or indoor pre-wedding concept shoots. Formulated for longevity under outdoor sunlight.",
    occasion: "Pre-Wedding Concept Shoot",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Photo-ready natural skin finish",
      "Outfit change makeup adjustments",
      "Hair touch-ups for outdoor settings"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  },
  {
    id: "special-event-makeup",
    name: "Special Occasion & Editorial Makeup",
    category: "photoshoot",
    categoryLabel: "Pre-Wedding & Shoots",
    description: "Bespoke makeup styling for portfolio shoots, fashion campaigns, award ceremonies, and media appearances.",
    occasion: "Editorial & Media Events",
    startingPrice: "Enquire for pricing",
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'bridal-groom', label: 'Bridal & Groom' },
  { id: 'occasion', label: 'Party & Occasions' },
  { id: 'photoshoot', label: 'Pre-Wedding & Shoots' },
] as const;
