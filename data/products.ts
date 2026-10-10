export interface Product {
  id: string;
  name: string;
  category: 'soaps' | 'hair-oils' | 'body-oils' | 'gift-sets';
  categoryLabel: string;
  tagline: string;
  description: string;
  priceInINR: number;
  size: string;
  ingredients: string[];
  directions: string;
  precautions: string;
  placeholderLabel: string;
  imageUrl?: string; // Optional field for future actual product image URL
  isFeatured?: boolean;
}

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: "saffron-calendula-soap",
    name: "Saffron & Calendula Cold-Process Soap Bar",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Slow-cured cold process bar infused with botanical petals",
    description: "Handcrafted in small batches using traditional cold-process saponification. Formulated with cold-pressed coconut oil, raw shea butter, and infused with saffron strands and organic calendula petals for a rich, gentle lather.",
    priceInINR: 350,
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
    isFeatured: true,
  },
  {
    id: "raw-honey-goatmilk-soap",
    name: "Raw Honey & Goat Milk Soothing Bar",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Creamy, unfragranced bar for sensitive daily cleansing",
    description: "A deeply nourishing bar crafted with pure farm-fresh goat milk and raw forest honey. Provides a soft, velvety foam that cleanses without stripping skin of natural moisture.",
    priceInINR: 295,
    size: "120g bar",
    ingredients: [
      "Fresh Farm Goat Milk",
      "Raw Forest Honey",
      "Cold-Pressed Sesame Seed Oil",
      "Extra Virgin Olive Oil",
      "Organic Castor Oil",
      "Distilled Water & Lye"
    ],
    directions: "Work into a rich lather on wet skin during bath or shower. Rinse thoroughly with lukewarm water. Ideal for daily face and body use.",
    precautions: "Contains milk proteins. For external use only. Keep out of reach of children. Store in a well-draining soap container.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
  },
  {
    id: "vetiver-charcoal-soap",
    name: "Vetiver & Earth Charcoal Detox Soap Bar",
    category: "soaps",
    categoryLabel: "Handmade Soap",
    tagline: "Purifying clay and activated charcoal bar with earthy vetiver notes",
    description: "Formulated with activated coconut charcoal and steam-distilled vetiver essential oil. Helps gently lift surface impurities while maintaining comfortable hydration.",
    priceInINR: 320,
    size: "125g bar",
    ingredients: [
      "Activated Coconut Shell Charcoal",
      "Vetiver Essential Oil (Khus)",
      "French Kaolin Clay",
      "Cold-Pressed Coconut Oil",
      "Organic Sunflower Seed Oil",
      "Distilled Water & Lye"
    ],
    directions: "Lather well over damp skin, focusing on oil-prone areas. Rinse completely. Use 3-4 times a week or daily as desired.",
    precautions: "For external use only. Avoid contact with eyes. Discontinue use if skin sensitivity develops.",
    placeholderLabel: "[HANDMADE SOAP PRODUCT IMAGE]",
  },
  {
    id: "brahmi-bhringraj-hair-oil",
    name: "Brahmi & Bhringraj Nourishing Hair Oil",
    category: "hair-oils",
    categoryLabel: "Hair Oil",
    tagline: "Traditional herbal decoction slow-cooked in sesame & coconut base",
    description: "Prepared using traditional infusion methods where dried Bhringraj leaves and Brahmi herbs are gently simmered in cold-pressed sesame and virgin coconut oils.",
    priceInINR: 550,
    size: "100ml bottle",
    ingredients: [
      "Wild Harvested Bhringraj (Eclipta Alba)",
      "Brahmi Herb Extract (Bacopa Monnieri)",
      "Cold-Pressed Black Sesame Oil",
      "Virgin Coconut Oil",
      "Amla (Indian Gooseberry)",
      "Natural Vitamin E (Tocopherol)"
    ],
    directions: "Section dry hair and warm a small quantity of oil between palms. Gently massage into scalp using fingertips for 5–10 minutes. Leave on for at least 45 minutes or overnight before washing with a mild natural soap bar or gentle shampoo.",
    precautions: "For external scalp application only. Contains herbal extracts; patch test behind ear before full scalp application. Store in a cool, dark place away from direct sunlight.",
    placeholderLabel: "[HAIR OIL PRODUCT IMAGE]",
    isFeatured: true,
  },
  {
    id: "hibiscus-scalp-elixir",
    name: "Hibiscus & Coconut Scalp & Strand Elixir",
    category: "hair-oils",
    categoryLabel: "Hair Oil",
    tagline: "Lightweight floral infusion for strand smoothing and scalp comfort",
    description: "Infused with sun-dried red hibiscus petals and curry leaves in pure cold-pressed coconut oil to condition dry strands and promote soft texture.",
    priceInINR: 490,
    size: "100ml bottle",
    ingredients: [
      "Dried Red Hibiscus Flowers",
      "Fresh Curry Leaves Extract",
      "Virgin Cold-Pressed Coconut Oil",
      "Sweet Almond Oil",
      "Essential Oil Aromatics"
    ],
    directions: "Apply a few drops to hair lengths and ends after washing, or massage into scalp as a pre-wash oil treatment.",
    precautions: "External use only. Avoid getting into eyes. Rinse thoroughly if eye contact occurs.",
    placeholderLabel: "[HAIR OIL PRODUCT IMAGE]",
  },
  {
    id: "almond-rose-body-oil",
    name: "Sweet Almond & Rose Body Infusion Oil",
    category: "body-oils",
    categoryLabel: "Body Oil",
    tagline: "Silky, quick-absorbing body oil infused with damask rose petals",
    description: "A luxurious post-bath body treatment combining nutrient-dense cold-pressed sweet almond oil with cold-pressed jojoba and steam-distilled rose oil.",
    priceInINR: 620,
    size: "150ml bottle",
    ingredients: [
      "Cold-Pressed Sweet Almond Oil",
      "Organic Golden Jojoba Seed Oil",
      "Damask Rose Essential Oil",
      "Rose Petals Infusion",
      "Pure Vitamin E"
    ],
    directions: "Apply generously to slightly damp skin immediately after bathing to seal in moisture. Massage gently until absorbed.",
    precautions: "For external body use only. Do not apply on broken or irritated skin. Natural nut oils present.",
    placeholderLabel: "[BODY OIL PRODUCT IMAGE]",
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
  },
  {
    id: "botanical-ritual-gift-box",
    name: "The Botanical Ritual Gift Box",
    category: "gift-sets",
    categoryLabel: "Gift Set",
    tagline: "Thoughtful curation of 3 cold-process soap bars & 1 botanical body oil",
    description: "A beautifully hand-packaged bundle featuring a choice of three signature handmade soaps alongside one 150ml body oil infusion. Ideal for festive gifting, wedding favors, or personal pampering.",
    priceInINR: 1450,
    size: "Custom Gift Set (3 Soaps + 1 Body Oil)",
    ingredients: [
      "Includes 3 x 125g Cold-Process Soap Bars",
      "Includes 1 x 150ml Botanical Body Oil",
      "Handmade Wooden Soap Saver Box"
    ],
    directions: "Inquire via WhatsApp for custom soap selection and personalized handwritten gift card inclusion.",
    precautions: "Custom combinations subject to current batch availability.",
    placeholderLabel: "[GIFT SET PHOTOGRAPH]",
  }
];

export const CATEGORIES = [
  { id: 'soaps', label: 'Handmade Soaps' },
  { id: 'hair-oils', label: 'Hair Oils' },
  { id: 'body-oils', label: 'Body Oils' },
  { id: 'gift-sets', label: 'Gift Sets' },
] as const;
