export interface Ingredient {
  name: string;
  botanicalName?: string;
  category: 'Oils & Butters' | 'Botanicals & Herbs' | 'Essential Oils & Aromatics';
  role: string;
  description: string;
  precautions?: string;
}

export const INGREDIENTS_LIST: Ingredient[] = [
  {
    name: "Cold-Pressed Virgin Coconut Oil",
    botanicalName: "Cocos Nucifera",
    category: "Oils & Butters",
    role: "Deep moisture & gentle cleansing base",
    description: "Extracted without heat treatment to preserve natural fatty acids. Serves as the rich, lather-producing foundation in our cold-process soaps and hair oils.",
    precautions: "Non-comedogenic on body, but high oil concentration should be thoroughly rinsed when used on facial areas."
  },
  {
    name: "Raw Unrefined Shea Butter",
    botanicalName: "Vitellaria Paradoxa",
    category: "Oils & Butters",
    role: "Emollient bar hardener & skin barrier protection",
    description: "Sourced directly in unrefined form to retain its natural vitamin E and A content, imparting a dense, moisturizing quality to soap bars.",
  },
  {
    name: "Kashmiri Saffron",
    botanicalName: "Crocus Sativus",
    category: "Botanicals & Herbs",
    role: "Traditional botanical infusion",
    description: "Whole saffron threads steeped slow in base oils to impart natural warmth, subtle aroma, and golden hues.",
    precautions: "Natural botanical color may vary slightly between small artisanal batches."
  },
  {
    name: "Wild Harvested Bhringraj",
    botanicalName: "Eclipta Alba",
    category: "Botanicals & Herbs",
    role: "Traditional hair & scalp tonic",
    description: "Renowned in Indian botanical traditions for conditioning dry scalps and supporting hair strand strength when slow-cooked in sesame base oil.",
  },
  {
    name: "Organic Calendula Flower Petals",
    botanicalName: "Calendula Officinalis",
    category: "Botanicals & Herbs",
    role: "Mild visual texture & surface soothing",
    description: "Golden dried flower petals embedded gently into soap bars to provide soft physical tactile interest during cleansing.",
  },
  {
    name: "Cold-Pressed Black Sesame Oil",
    botanicalName: "Sesamum Indicum",
    category: "Oils & Butters",
    role: "Traditional warming body & hair oil base",
    description: "Unrefined oil pressed from black sesame seeds, deeply valued in traditional self-care rituals for its rich texture and natural stability.",
  }
];
