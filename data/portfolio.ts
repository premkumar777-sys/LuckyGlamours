export interface PortfolioCategory {
  id: string;
  label: string;
  placeholderLabel: string;
  description: string;
  imageUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'couple' | 'haldi-mehendi' | 'hair-artistry' | 'trendy' | 'engagement';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  tag?: string;
  altText?: string;
}

export const PORTFOLIO_FILTER_TABS = [
  { id: 'bridal', label: 'Bridal Artistry' },
  { id: 'couple', label: 'Couple & Reception' },
  { id: 'haldi-mehendi', label: 'Haldi & Mehendi' },
  { id: 'hair-artistry', label: 'Hairstyling & Poola Jada' },
  { id: 'trendy', label: 'Modern & Trendy' },
] as const;

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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Existing Portfolio Looks (Preserved Exactly)
  {
    id: "classic-bridal-portrait",
    title: "Signature Couture Bridal Look",
    category: "bridal",
    categoryLabel: "Bridal Makeup",
    description: "Couture wedding day makeup look crafted with precision for traditional and contemporary brides.",
    imageUrl: "/images/bridal/bride_portrait.jpeg",
    tag: "Signature Bridal",
    altText: "Lucky Glamours signature couture bridal makeup portrait"
  },
  {
    id: "classic-wedding-couple",
    title: "Harmonious Wedding Couple Styling",
    category: "couple",
    categoryLabel: "Couple & Groom",
    description: "Subtle, camera-ready grooming and harmonious wedding aesthetic for brides and grooms.",
    imageUrl: "/images/bridal/wedding_couple.jpeg",
    tag: "Wedding Couple",
    altText: "Lucky Glamours wedding couple styling and makeup"
  },
  {
    id: "classic-engagement-ceremony",
    title: "Radiant Engagement & Ritual Look",
    category: "bridal",
    categoryLabel: "Engagement & Rituals",
    description: "Radiant, romantic makeup styles tailored for ring ceremonies, thali rituals, and sacred celebrations.",
    imageUrl: "/images/bridal/bride_thali.jpeg",
    tag: "Engagement & Thali",
    altText: "Lucky Glamours engagement and thali ceremony bride"
  },
  {
    id: "classic-reception-look",
    title: "Gala Evening Reception Glamour",
    category: "couple",
    categoryLabel: "Reception Looks",
    description: "Glamorous evening makeup formulated for stage lighting, flash photography, and evening receptions.",
    imageUrl: "/images/bridal/wedding_couple_alt.jpeg",
    tag: "Reception Glam",
    altText: "Lucky Glamours evening reception couple styling"
  },
  {
    id: "classic-pre-wedding-shoot",
    title: "Pre-Wedding Celebration Styling",
    category: "trendy",
    categoryLabel: "Pre-Wedding Celebrations",
    description: "Natural-looking camera-ready styling for outdoor pre-wedding celebrations and concept shoots.",
    imageUrl: "/images/bridal/wedding_couple.jpeg",
    tag: "Pre-Wedding",
    altText: "Lucky Glamours pre-wedding shoot makeup styling"
  },
  {
    id: "classic-bridal-hairstyle",
    title: "Traditional Bridal Hair & Artistry",
    category: "hair-artistry",
    categoryLabel: "Hairstyling Artistry",
    description: "Intricate South Indian traditional poola jada, ornamentation, and floral hair design artistry.",
    imageUrl: "/images/bridal/bridal_hairstyle.jpeg",
    tag: "Hair & Flowers",
    altText: "Lucky Glamours traditional bridal hairstyle and floral artistry"
  },

  // Additional Real Client Works from LuckyGlamours
  {
    id: "traditional-kanjeevaram-bride",
    title: "Traditional Kanjeevaram Silk Bride",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Authentic South Indian bride in pink & peacock-teal silk saree adorned with antique temple gold jewellery, waist belt, and luminous bridal base.",
    imageUrl: "/images/LuckyGlamours/traditional_bride_pink_teal_kanjeevaram.jpeg",
    tag: "Real Client Bride",
    altText: "Lucky Glamours traditional bride in pink and teal Kanjeevaram silk saree with temple jewellery"
  },
  {
    id: "temple-jewellery-stage-portrait",
    title: "Temple Jewellery Stage Radiance",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Radiant stage close-up highlighting intricate temple necklace, traditional maang tikka, and flawless high-definition bridal glow.",
    imageUrl: "/images/LuckyGlamours/bride_temple_jewellery_stage.jpeg",
    tag: "Stage Radiance",
    altText: "Lucky Glamours bride with temple jewellery and radiant smile on stage"
  },
  {
    id: "south-indian-blue-saree-bride",
    title: "Royal Blue Silk Muhurtham Look",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Graceful South Indian bride framed by marigold floral garland in royal blue Kanjeevaram silk with traditional jhumkas and soft smile.",
    imageUrl: "/images/LuckyGlamours/south_indian_bride_silk_saree.jpeg",
    tag: "Muhurtham Silk",
    altText: "Lucky Glamours South Indian bride in royal blue silk saree at flower doorway"
  },
  {
    id: "floral-backdrop-bride-portrait",
    title: "Floral Arch Bridal Portrait",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Luminous bridal transformation set against celebratory floral backdrop with handcrafted hair accessories and zari saree draping.",
    imageUrl: "/images/LuckyGlamours/bride_blue_saree_portrait.jpeg",
    tag: "Editorial Bride",
    altText: "Lucky Glamours bride in blue saree with floral wreath stage backdrop"
  },
  {
    id: "trendy-bride-sunglasses",
    title: "Chic & Contemporary Bride",
    category: "trendy",
    categoryLabel: "Modern & Trendy",
    description: "Playful, modern bridal styling featuring statement black sunglasses, radiant smile, and intricate mehendi work in blue silk.",
    imageUrl: "/images/LuckyGlamours/trendy_bride_sunglasses.jpeg",
    tag: "Trendy Bride",
    altText: "Lucky Glamours modern trendy bride in sunglasses and blue silk saree"
  },
  {
    id: "haldi-mehendi-yellow-lehenga",
    title: "Radiant Haldi & Mehendi Celebration",
    category: "haldi-mehendi",
    categoryLabel: "Haldi & Mehendi",
    description: "Vibrant yellow attire paired with dewy, fresh morning makeup and delicate floral adornments for pre-wedding haldi ritual.",
    imageUrl: "/images/LuckyGlamours/haldi_mehendi_bride_yellow.jpeg",
    tag: "Haldi Ceremony",
    altText: "Lucky Glamours Haldi and Mehendi bride in yellow lehenga with floral hair accessories"
  },
  {
    id: "haldi-bride-candid-portrait",
    title: "Dewy Haldi Candid Glow",
    category: "haldi-mehendi",
    categoryLabel: "Haldi & Mehendi",
    description: "Candid close-up portrait showcasing natural skin radiance, joyful expression, and lightweight celebratory glam for haldi rituals.",
    imageUrl: "/images/LuckyGlamours/haldi_bride_candid_portrait.jpeg",
    tag: "Candid Haldi",
    altText: "Lucky Glamours candid portrait of Haldi bride in yellow dress"
  },
  {
    id: "haldi-maang-tikka-pose",
    title: "Intricate Mehendi & Maang Tikka",
    category: "haldi-mehendi",
    categoryLabel: "Haldi & Mehendi",
    description: "Graceful bridal pose spotlighting intricate henna artistry on hands, colorful bangles, and sparkling maang tikka.",
    imageUrl: "/images/LuckyGlamours/haldi_bride_maang_tikka.jpeg",
    tag: "Henna & Jewellery",
    altText: "Lucky Glamours Haldi bride adjusting maang tikka showing mehendi hands"
  },
  {
    id: "bridal-poola-jada-floral-braid",
    title: "Bespoke Poola Jada Floral Braid",
    category: "hair-artistry",
    categoryLabel: "Hairstyling Artistry",
    description: "Traditional fresh floral braid weaving red rose petals, jasmine flowers, and poola jada ornaments with yellow celebratory lehenga.",
    imageUrl: "/images/LuckyGlamours/bridal_floral_braid_poola_jada.jpeg",
    tag: "Poola Jada",
    altText: "Lucky Glamours bespoke bridal poola jada fresh floral braid hairstyle"
  },
  {
    id: "reception-navy-blue-couple",
    title: "Midnight Navy Reception Couple",
    category: "couple",
    categoryLabel: "Reception Looks",
    description: "Opulent wedding reception look: Bride in heavily embroidered midnight blue lehenga and diamond choker alongside groom in cream sherwani.",
    imageUrl: "/images/LuckyGlamours/reception_couple_navy_blue.jpeg",
    tag: "Reception Grandeur",
    altText: "Lucky Glamours royal reception couple in navy blue lehenga and cream sherwani"
  },
  {
    id: "wedding-couple-forehead-stage",
    title: "Sacred Stage Moment & Garland Ritual",
    category: "couple",
    categoryLabel: "Couple & Groom",
    description: "Intimate forehead-touching moment on stage; bride in golden yellow bridal silk saree and groom in traditional ivory kurta.",
    imageUrl: "/images/LuckyGlamours/wedding_couple_forehead_stage.jpeg",
    tag: "Wedding Mandap",
    altText: "Lucky Glamours wedding couple touching foreheads on stage during wedding ceremony"
  },
  {
    id: "wedding-couple-intimate-mandap",
    title: "Intimate Mandap Couple Close-up",
    category: "couple",
    categoryLabel: "Couple & Groom",
    description: "Emotion-filled ceremony portrait showcasing exquisite bridal blouse zari embroidery and complementary groom styling.",
    imageUrl: "/images/LuckyGlamours/wedding_couple_intimate_pose.jpeg",
    tag: "Intimate Pose",
    altText: "Lucky Glamours wedding couple intimate close-up on mandap stage"
  }
];
