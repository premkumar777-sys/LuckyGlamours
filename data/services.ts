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
  imageUrl?: string;
}

export const BEAUTY_SERVICES: BeautyService[] = [
  {
    id: "bridal-engagement-makeup",
    name: "Couture Bridal & Engagement Makeup",
    category: "bridal-groom",
    categoryLabel: "Bridal & Groom",
    description: "Signature HD & airbrush makeup tailored for bridal ceremonies, engagement functions, and ring events.",
    occasion: "Wedding & Engagement Ceremonies",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "HD / Airbrush bridal & engagement makeup",
      "Hair styling & accessory / floral placement",
      "Saree, lehenga & dupatta draping",
      "Eyelash application & touch-up kit"
    ],
    placeholderLabel: "[BRIDAL AND GROOM MAKEUP PHOTOGRAPH]",
    imageUrl: "/images/bridal/bride_portrait.jpeg",
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
    imageUrl: "/images/bridal/wedding_couple.jpeg",
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
    imageUrl: "/images/bridal/bride_thali.jpeg",
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
    imageUrl: "/images/bridal/bride_thali.jpeg",
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
    imageUrl: "/images/bridal/bride_portrait.jpeg",
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
    imageUrl: "/images/bridal/wedding_couple_alt.jpeg",
  },
  {
    id: "special-event-makeup",
    name: "Bridal Hair Artistry & Special Styling",
    category: "photoshoot",
    categoryLabel: "Pre-Wedding & Shoots",
    description: "Bespoke traditional hair styling, intricate floral poola jada, and media makeup for celebrations.",
    occasion: "Ceremonies & Editorial Events",
    startingPrice: "Enquire for pricing",
    packageDetails: [
      "Intricate floral braid (poola jada)",
      "Traditional hair ornamentation setting",
      "Saree draping and veil pinning"
    ],
    placeholderLabel: "[BEAUTY SERVICES PHOTOGRAPH]",
    imageUrl: "/images/bridal/bridal_hairstyle.jpeg",
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'bridal-groom', label: 'Bridal & Groom' },
  { id: 'occasion', label: 'Party & Occasions' },
  { id: 'photoshoot', label: 'Pre-Wedding & Shoots' },
] as const;
