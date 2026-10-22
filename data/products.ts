export interface Product {
  id: string;
  name: string;
  category: 'soaps' | 'hair-oils' | 'body-oils' | 'gift-sets';
  categoryLabel: string;
  tagline: string;
  description: string;
  priceInINR: number;
  originalPriceInINR?: number; // MRP before discount (Flipkart/Amazon reference)
  size: string;
  ingredients: string[];
  directions: string;
  precautions: string;
  placeholderLabel: string;
  imageUrl?: string; // Optional field for future actual product image URL
  isFeatured?: boolean;
}

export function getProductDiscountPercentage(originalPrice?: number, currentPrice?: number): number | null {
  if (originalPrice && currentPrice && originalPrice > currentPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  }
  return null;
}

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: "saffron-calendula-soap",
    name: "Saffron & Calendula Cold-Process Soap Bar",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Slow-cured cold process bar infused with botanical petals",
    description: "Handcrafted in small batches using traditional cold-process saponification. Formulated with cold-pressed coconut oil, raw shea butter, and infused with saffron strands and organic calendula petals for a rich, gentle lather.",
    priceInINR: 199,
    originalPriceInINR: 299,
    size: "125g bar",
    ingredients: [
      "Cold-Pressed Virgin Coconut Oil",
      "Raw Unrefined Shea Butter",
      "Kashmiri Saffron (Crocus Sativus)",
      "Organic Calendula Flower Petals",
      "Pure Sweet Almond Oil",
      "Sustainably Sourced Palm Oil",
      "Distilled Water & Lye (Saponifying agent)"
    ],
    directions: "Lather with warm water between wet palms. Gently apply lather over face and body in circular motions, avoiding direct eye contact. Rinse thoroughly and allow the bar to drain dry on a slotted soap dish between uses.",
    precautions: "For external use only. Perform a patch test before first use. If irritation occurs, discontinue use immediately. Store in a dry, cool place away from direct water stream to extend bar life.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
    imageUrl: "/images/products/flower_glow_soap.jpg",
    isFeatured: true,
  },
  {
    id: "raw-honey-goatmilk-soap",
    name: "Raw Honey & Aloe Vera Soothing Bar",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Creamy, botanical aloe vera bar for gentle daily cleansing",
    description: "A deeply nourishing bar crafted with pure succulent aloe vera and raw forest honey. Provides a soft, velvety foam that cleanses without stripping skin of natural moisture.",
    priceInINR: 199,
    originalPriceInINR: 299,
    size: "120g bar",
    ingredients: [
      "Fresh Aloe Vera Gel Extract",
      "Raw Forest Honey",
      "Cold-Pressed Sesame Seed Oil",
      "Extra Virgin Olive Oil",
      "Organic Castor Oil",
      "Distilled Water & Lye"
    ],
    directions: "Work into a rich lather on wet skin during bath or shower. Rinse thoroughly with lukewarm water. Ideal for daily face and body use.",
    precautions: "Contains botanical extracts. For external use only. Keep out of reach of children. Store in a well-draining soap container.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
    imageUrl: "/images/products/aloe_vera_soap.jpg",
  },
  {
    id: "vetiver-charcoal-soap",
    name: "Manjistha & Botanical Cleansing Bar",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Ayurvedic floral carved bar for clear, radiant skin",
    description: "Handcrafted with wild manjistha root extract and cold-pressed botanical oils. Helps gently clear skin blemishes, fade tan, and even complexion tone naturally.",
    priceInINR: 199,
    originalPriceInINR: 299,
    size: "125g bar",
    ingredients: [
      "Pure Manjistha Root Extract",
      "Cold-Pressed Coconut Oil",
      "Vetiver Essential Oil (Khus)",
      "Organic Sunflower Seed Oil",
      "Distilled Water & Lye"
    ],
    directions: "Lather well over damp skin, focusing on oil-prone areas. Rinse completely. Use 3-4 times a week or daily as desired.",
    precautions: "For external use only. Avoid contact with eyes. Discontinue use if skin sensitivity develops.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
    imageUrl: "/images/products/manjistha_soap.jpg",
  },
  {
    id: "brahmi-bhringraj-hair-oil",
    name: "Lucky Herbal Hair Growth Oil",
    category: "hair-oils",
    categoryLabel: "Hair Oil",
    tagline: "Traditional herbal decoction slow-infused for hair strength & scalp nourishment",
    description: "Prepared using traditional infusion methods where black sesame, rosemary, hibiscus, and Ayurvedic herbs are gently slow-infused in cold-pressed oils for stronger, longer, healthier hair.",
    priceInINR: 550,
    size: "100ml bottle",
    ingredients: [
      "Black Sesame Seed Oil",
      "Fresh Rosemary & Mint Leaves",
      "Red Hibiscus Flower Blossoms",
      "Tea Tree & Vetiver Roots",
      "Tulsi & Curry Leaves",
      "Atimadhuram (Licorice) Extract"
    ],
    directions: "Section dry hair and warm a small quantity of oil between palms. Gently massage into scalp using fingertips for 5–10 minutes. Leave on for at least 45 minutes or overnight before washing.",
    precautions: "For external scalp application only. Contains herbal extracts; patch test behind ear before full scalp application. Store in a cool, dark place away from direct sunlight.",
    placeholderLabel: "[HAIR OIL PRODUCT IMAGE]",
    imageUrl: "/images/products/hair_growth_oil.jpg",
    isFeatured: true,
  },
  {
    id: "hibiscus-scalp-elixir",
    name: "Carrot & Turmeric Radiant Herbal Soap",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Nutrient-rich carrot extract & wild turmeric bar for bright, fresh skin",
    description: "Infused with cold-pressed carrot extract and pure golden turmeric. Helps reduce tan, revitalize dull skin, and provide a radiant natural glow.",
    priceInINR: 199,
    originalPriceInINR: 299,
    size: "125g bar",
    ingredients: [
      "Fresh Carrot Extract",
      "Golden Wild Turmeric",
      "Virgin Cold-Pressed Coconut Oil",
      "Sweet Almond Oil",
      "Distilled Water & Lye"
    ],
    directions: "Work into a rich lather on wet skin during bath or shower. Rinse thoroughly with water.",
    precautions: "External use only. Avoid getting into eyes. Rinse thoroughly if eye contact occurs.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
    imageUrl: "/images/products/carrot_herbal_soap.jpg",
  },
  {
    id: "almond-rose-body-oil",
    name: "Lucky Herbal Handcrafted Artisan Soaps",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Pure organic botanical bars handcrafted with love and care",
    description: "Authentic Lucky Herbal cold-process soap bars formulated with natural oils, botanical flowers, and skin-loving herbs. Each bar is carefully cured for superior mildness.",
    priceInINR: 249,
    originalPriceInINR: 399,
    size: "125g bar",
    ingredients: [
      "Virgin Coconut Oil",
      "Organic Plant Extracts",
      "Botanical Flower Infusions",
      "Raw Shea Butter",
      "Pure Essential Oils"
    ],
    directions: "Apply generously to damp skin during bath or shower. Store on a draining soap dish between uses.",
    precautions: "For external body use only. Do not apply on broken or irritated skin.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
    imageUrl: "/images/products/lucky_herbal_soaps_real.jpeg",
  },
  {
    id: "sesame-cardamom-body-oil",
    name: "Sesame & Cardamom Warming Body Oil",
    category: "body-oils",
    categoryLabel: "Body Oil",
    tagline: "Comforting botanical blend for evening self-care massage",
    description: "Crafted with unrefined black sesame oil and infused with aromatic green cardamom pods and vetiver root to provide a soothing, warming sensory ritual.",
    priceInINR: 580,
    size: "150ml bottle",
    ingredients: [
      "Unrefined Pressed Sesame Seed Oil",
      "Crushed Green Cardamom Infusion",
      "Vetiver Root Extract",
      "Sunflower Seed Base Oil",
      "Natural Tocopherol"
    ],
    directions: "Warm a generous pump in hands and massage over legs, arms, and torso before bedtime or warm shower.",
    precautions: "External use only. Discontinue if skin reacts.",
    placeholderLabel: "[BODY OIL PRODUCT IMAGE]",
    imageUrl: "/images/products/hair_growth_oil.jpg",
  },
  {
    id: "botanical-ritual-gift-box",
    name: "The Botanical Ritual Gift Box",
    category: "gift-sets",
    categoryLabel: "Gift Set",
    tagline: "Thoughtful curation of handcrafted Lucky Herbal soaps & hair oil",
    description: "A beautifully hand-packaged bundle featuring a choice of signature Lucky Herbal handmade soaps alongside our nourishing botanical hair growth oil. Ideal for festive gifting, wedding favors, or personal pampering.",
    priceInINR: 1450,
    size: "Custom Gift Set (3 Soaps + 1 Oil)",
    ingredients: [
      "Includes 3 x 125g Cold-Process Soap Bars",
      "Includes 1 x 100ml Botanical Hair Growth Oil",
      "Handmade Wooden Soap Saver Box"
    ],
    directions: "Inquire via WhatsApp for custom soap selection and personalized handwritten gift card inclusion.",
    precautions: "Custom combinations subject to current batch availability.",
    placeholderLabel: "[GIFT SET PHOTOGRAPH]",
    imageUrl: "/images/products/lucky_herbal_soaps_real.jpeg",
  }
];

export const CATEGORIES = [
  { id: 'soaps', label: 'Handmade Soaps' },
  { id: 'hair-oils', label: 'Hair Oils' },
  { id: 'body-oils', label: 'Body Oils' },
  { id: 'gift-sets', label: 'Gift Sets' },
] as const;
