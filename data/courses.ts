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
  imageUrl?: string;
}

export const ACADEMY_COURSES: BeautyCourse[] = [
  {
    id: "eyebrow-shaping-threading",
    name: "Eyebrow Shaping & Professional Threading",
    subtitle: "Master precision facial mapping, thread control & brow design",
    description: "Learn fundamental brow symmetry, facial structure mapping, precision cotton thread control, tweezing, trimming, and shaping to craft bespoke brows for every face shape.",
    whatYouWillLearn: [
      "Facial geometry & brow mapping",
      "Thread loop holding & tension control",
      "Precision trimming & shaping techniques",
      "Client consultation & hygiene standards"
    ],
    format: "In-Person Practical Workshop",
    duration: "Contact us for course details",
    eligibility: "Open to beginners & beauty enthusiasts",
    fees: "Contact us for course details",
    placeholderLabel: "[COURSE PHOTOGRAPH]",
    imageUrl: "/images/bridal/bride_portrait.jpeg",
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
    imageUrl: "/images/bridal/bride_thali.jpeg",
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
    imageUrl: "/images/bridal/bridal_hairstyle.jpeg",
  }
];
