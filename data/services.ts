export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  duration: string;
  price: string;
  description: string;
  fullOverview: string;
  keySteps: string[];
  recommendedFor: string;
  image: string;
  gallery: string[];
  badges: string[];
}

export const SERVICES: Service[] = [
  {
    id: "couture-bridal",
    number: "01",
    title: "HAUTE COUTURE BRIDAL",
    category: "BRIDAL ATELIER",
    tagline: "Timeless serenity, luminous skin architecture, and enduring elegance for your most momentous chapter.",
    duration: "180 MIN + PREVIEW",
    price: "FROM $850",
    description: "An bespoke full-spectrum bridal metamorphosis. Includes pre-wedding cellular skin preparation, trial session, and day-of couture application engineered to look breathtaking in ambient light and 8K cinema.",
    fullOverview: "Every bride possesses an irreplicable aura. Our signature bridal experience begins weeks prior with dermal hydration protocols and cranial contour analysis. On the wedding day, we craft a weightless veil of light-reactive pigments, bespoke lash clusters, and humidity-impermeable setting alchemy designed for 16-hour endurance.",
    keySteps: [
      "In-depth facial topography & gown neckline harmony analysis",
      "Cellular oxygen infusion & hyaluronic dermal priming",
      "Micro-customized airbrush complexion veil",
      "Hand-placed bespoke mink or featherweight silk lashes",
      "Deluxe bridal touch-up coffret with personalized lip formula"
    ],
    recommendedFor: "Haute couture brides, destination ceremonies, editorial bridal campaigns.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Signature Experience", "VIP Atelier", "Includes Trial"]
  },
  {
    id: "editorial-glamour",
    number: "02",
    title: "RED CARPET & EDITORIAL GLAM",
    category: "HIGH FASHION",
    tagline: "Camera-calibrated dimension, high-contrast bone structure sculpting, and commanding modern allure.",
    duration: "90 MIN",
    price: "FROM $420",
    description: "Tailored for film premieres, galas, fashion editorial spreads, and high-visibility appearances where lighting transitions between harsh flash, cinematic spotlights, and candlelit ambiance.",
    fullOverview: "Engineered specifically for optical perfection under intensive flash and changing Kelvin temperatures. We sculpt your bone structure using light reflection principles rather than heavy powder layers, giving you an effortlessly statuesque finish that feels breathable and looks magnetic.",
    keySteps: [
      "Facial lymphatic drainage massage with chilled rose quartz",
      "Chromatic skin evening with microscopic optical diffusers",
      "Custom smoky eye architecture & liquid velvet liner",
      "Dimensional 3D lip shaping with satin lacquer finish",
      "Infrared flash calibration check prior to departure"
    ],
    recommendedFor: "Galas, film premieres, awards ceremonies, fashion week presentations.",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Award-Winning", "Flash-Proof"]
  },
  {
    id: "brow-architecture",
    number: "03",
    title: "SCULPTURAL BROW ARCHITECTURE",
    category: "FACIAL ARCHITECTURE",
    tagline: "The golden ratio applied to brow geometry: micro-feathering, lamination, and bespoke organic tinting.",
    duration: "75 MIN",
    price: "FROM $210",
    description: "Your brows anchor facial symmetry. We assess brow bone structure, natural hair growth vectors, and eye shape to sculpt a bespoke, elevated arch that lifts the entire face without appearing drawn-on.",
    fullOverview: "Moving far beyond generic templates, our brow architecture uses botanical keratin lamination, microscopic tweezing, and multi-tonal organic henna or Italian cream dyes. The result is lush, feathered brows that frame your gaze with effortless authority.",
    keySteps: [
      "Bespoke golden-ratio caliper mapping & bone alignment",
      "Keratin infusion lamination for supple directionality",
      "Artisan thread & tweezer sculpting along natural growth vectors",
      "Multi-dimensional custom tint blending for realistic hair depth",
      "Peptide-dense growth serum sealing treatment"
    ],
    recommendedFor: "Sparse brows, asymmetric arches, full fluffy editorial revival.",
    image: "https://images.unsplash.com/photo-1522337094138-09724a06d27a?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Bespoke Geometry", "Keratin Infused"]
  },
  {
    id: "haute-lash",
    number: "04",
    title: "HAUTE LASH COUTURE",
    category: "LASH ARTISTRY",
    tagline: "Bespoke cashmere-weight fiber extensions applied with microscope precision for mesmerizing depth.",
    duration: "120 MIN",
    price: "FROM $320",
    description: "Individual, weightless cashmere lashes fanned and balanced strand-by-strand to amplify your natural eye contour, offering fluttering elegance without straining natural follicles.",
    fullOverview: "Our lash master artisans sculpt custom maps tailored to your lid shape, from soft cat-eye elongations to doe-eyed Parisian wet-look textures. Every fiber is hypoallergenic, ultra-matte or subtle silk sheen, bonded with medical-grade flexible polymer.",
    keySteps: [
      "Eye shape analysis (almond, hooded, upturned, monolid)",
      "Hydrating marine collagen under-eye hydrogel cocoon",
      "Precision isolation and multi-length 0.03mm cashmere application",
      "Nanomist sealant for instant bond crystallization & zero fumes",
      "Custom bamboo spoolie and cashmere conditioning cleanser gift"
    ],
    recommendedFor: "Effortless everyday glamour, vacation luxury, dramatic screen presence.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Weightless Cashmere", "Micro-Mapped"]
  },
  {
    id: "cellular-dermal-glow",
    number: "05",
    title: "CELLULAR DERMAL GLOW & CRYO-INFUSION",
    category: "SKINCARE COUTURE",
    tagline: "Deep sub-dermal hydration, cryo-sculpting, and biological stem-cell infusion for uncompromised radiance.",
    duration: "105 MIN",
    price: "FROM $380",
    description: "An avant-garde clinical aesthetic treatment combining ultrasonic pore purification, cooled oxygen jet infusion, and sculpting buccal massage for an otherworldly dewy glass finish.",
    fullOverview: "Skin that radiates light from within requires cellular vitality. We begin with enzyme smoothing, followed by transdermal electroporation of rare Swiss botanical stem cells and 24-karat gold colloidal peptides. Liquid nitrogen-cooled cryo-globes firm and define cheekbones and jawline.",
    keySteps: [
      "Double cleanse with fermented camellia & botanical enzymes",
      "Ultrasonic cavitation cleansing and targeted extraction",
      "Electroporation with active peptide & copper tripeptide serum",
      "Sculpting intra-oral buccal and lymphatic drainage massage",
      "Sub-zero cryo-wand contouring & custom biocellulose collagen mask"
    ],
    recommendedFor: "Pre-event instant glass skin, dullness, texture renewal, anti-fatigue.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512290900672-1f4a9b642676?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Glass Skin", "Cryo-Sculpting", "Clinical Grade"]
  },
  {
    id: "evening-signature",
    number: "06",
    title: "PARTY & EVENING SIGNATURE LOOK",
    category: "BESPOKE OCCASION",
    tagline: "Seductive evening aesthetics tailored to candlelit dining, private soirées, and gallery openings.",
    duration: "75 MIN",
    price: "FROM $290",
    description: "An exquisite balance of luminous skin, tailored lip drama, and magnetic gaze definition designed to captivate under evening illumination.",
    fullOverview: "Evening makeup requires calculated contrast. We create a soft matte satin canvas with hyper-targeted light bounce points on the high cheekbones and clavicles, paired with sculpted graphic or smudged couture eyes and tailored long-wear lip finishes.",
    keySteps: [
      "Rapid flash-glow dermal awakening sheet mask",
      "Velvet-finish color correction & high-beam contouring",
      "Custom metallic or matte eye wash with layered depth",
      "Transfer-resistant precision lip shaping",
      "Decolletage shimmer & silk setting veil"
    ],
    recommendedFor: "Private dinner parties, charity galas, opera nights, milestone birthdays.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Evening Radiance", "Fast-Track Available"]
  },
  {
    id: "complete-metamorphosis",
    number: "07",
    title: "THE COMPLETE ATELIER METAMORPHOSIS",
    category: "EXCLUSIVE SIGNATURE",
    tagline: "The ultimate 360-degree private studio takeover: full dermal prep, brow sculpting, lashes, hair, and haute makeup.",
    duration: "300 MIN (HALF-DAY)",
    price: "FROM $1,450",
    description: "Our crowning studio experience. The entire LuckyGlamours private atelier is reserved exclusively for you with our Founder & Master Aesthetician, accompanied by champagne service and personalized beauty styling.",
    fullOverview: "A transformative sanctuary experience. Every aspect of your beauty architecture is reimagined: from cellular facial sculpting and brow architecture to customized hair styling, couture makeup, and a high-resolution beauty portrait session to capture your elevated aura.",
    keySteps: [
      "Exclusive private suite reservation with concierge bar & champagne",
      "Full Cellular Dermal Glow & Cryo-Infusion treatment",
      "Sculptural Brow Architecture & custom Keratin Lash Couture",
      "Haute Couture makeup transformation with custom blend pigments",
      "Editorial hair sculpting and wardrobe styling finishing",
      "Private studio beauty portraiture with 5 retouched digital masters"
    ],
    recommendedFor: "Metamorphosis days, milestone transformations, luxury gifting, VIPs.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
    ],
    badges: ["Private Studio Takeover", "Champagne Service", "Portrait Session"]
  }
];
