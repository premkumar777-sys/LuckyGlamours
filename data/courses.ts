export interface BeautyCourse {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  whatYouWillLearn: string[];
  format: string; // e.g. "In-Person Hands-On Training"
  duration: string; // Defaulting to "Contact us for course details"
  eligibility: string;
  fees: string; // Defaulting to "Contact us for course fees"
  placeholderLabel: string;
}

export const ACADEMY_COURSES: BeautyCourse[] = [
  {
    id: "eyebrow-shaping-grooming",
    name: "Eyebrow Shaping & Brow Architecture",
    subtitle: "Master precision facial mapping & brow design techniques",
    description: "Learn fundamental brow symmetry, facial structure mapping, precision tweezing, trimming, and shaping to craft bespoke brows for every face shape.",
    whatYouWillLearn: [
      "Facial geometry & brow mapping",
      "Precision thread control & trimming",
      "Custom brow fill & tinting aesthetics",
      "Client consultation & hygiene standards"
    ],
    format: "In-Person Practical Workshop",
    duration: "Contact us for course details",
    eligibility: "Open to beginners & beauty enthusiasts",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
  },
  {
    id: "threading-techniques",
    name: "Professional Threading Techniques",
    subtitle: "Traditional hair removal precision & speed training",
    description: "Step-by-step practical training in traditional cotton thread manipulation for facial hair removal, including upper lip, chin, forehead, and brow shaping.",
    whatYouWillLearn: [
      "Thread loop holding & tension control",
      "Facial skin prep & soothing post-care",
      "Speed, accuracy, and painless technique tips",
      "Sanitization & client comfort protocols"
    ],
    format: "In-Person Hands-On Practice",
    duration: "Contact us for course details",
    eligibility: "No prior experience required",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
  },
  {
    id: "basic-makeup-techniques",
    name: "Basic & Personal Self-Makeup Masterclass",
    subtitle: "Daily grooming, skin match & effortless makeup skills",
    description: "Designed for individuals wanting to master their daily self-makeup routine. Learn undertone identification, foundation blending, quick day-to-night transitions, and brush maintenance.",
    whatYouWillLearn: [
      "Skin type analysis & primer selection",
      "Color correcting & seamless foundation match",
      "Soft eye makeup & winged liner application",
      "Essential makeup kit curation"
    ],
    format: "Individual or Small Group Sessions",
    duration: "Contact us for course details",
    eligibility: "Open to anyone seeking personal makeup mastery",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
  },
  {
    id: "master-bridal-makeup",
    name: "Master Bridal Makeup Artistry",
    subtitle: "Comprehensive professional bridal styling & HD application",
    description: "In-depth professional training covering traditional and contemporary bridal makeup styles, HD airbrush techniques, dupatta draping, and client management for wedding artists.",
    whatYouWillLearn: [
      "Advanced HD & water-resistant bridal base",
      "Cut-crease & smoked wedding eye looks",
      "Jewelry setting, hair styling & dupatta draping",
      "Bridal portfolio building & client pricing strategy"
    ],
    format: "In-Person Intensive Module",
    duration: "Contact us for course details",
    eligibility: "Basic makeup knowledge recommended",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
  },
  {
    id: "party-event-makeup",
    name: "Party & Glamour Event Makeup",
    subtitle: "High-impact evening looks & trend styling",
    description: "Learn versatile glam makeup techniques for sangeet, cocktail parties, and festive occasions, focusing on glitter application, bold lips, and contoured sculpting.",
    whatYouWillLearn: [
      "Glam eye techniques & glitter adhesion",
      "Facial contouring, highlighting & blush placement",
      "Long-wear setting spray methods",
      "Client look customization"
    ],
    format: "Hands-On Practical Sessions",
    duration: "Contact us for course details",
    eligibility: "Open to aspiring makeup artists",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
  },
  {
    id: "skin-prep-complexion",
    name: "Skin Preparation & Complexion Masterclass",
    subtitle: "Building flawless, long-lasting bases for all skin types",
    description: "Understand the science of skin prep—learning how to hydrate dry patches, balance oily T-zones, smooth texture, and choose correct color correctors.",
    whatYouWillLearn: [
      "Skin type diagnostic & botanical prep oils",
      "Color theory for redness & hyperpigmentation",
      "Dewy vs. velvet matte foundation finishes",
      "Flashback prevention in photography"
    ],
    format: "In-Person Theory & Practical",
    duration: "Contact us for course details",
    eligibility: "Beginners & professional artists",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
  }
];
