export interface JourneyStage {
  step: string;
  title: string;
  subTitle: string;
  description: string;
  duration: string;
  sensoryNote: string;
  highlight: string;
  image: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01",
    title: "THE SENSORY CONSULTATION",
    subTitle: "Topographical Analysis & Intention Setting",
    description: "Your session begins with chilled white tea or Laurent-Perrier champagne in our private client salon. We study your facial anatomy, natural muscle movement, bone structure, skin dermal hydration levels, and the exact ambient lighting where you will be seen.",
    duration: "20 MINUTES",
    sensoryNote: "Notes of Moroccan neroli, chilled bergamot, and soft acoustic warmth.",
    highlight: "Facial symmetry mapping & wardrobe chromatic pairing.",
    image: "https://images.unsplash.com/photo-1512290900672-1f4a9b642676?auto=format&fit=crop&w=1200&q=85"
  },
  {
    step: "02",
    title: "BESPOKE ARCHITECTURAL DESIGN",
    subTitle: "Palette Formulation & Light Architecture",
    description: "No two faces receive the same formula. On our Italian marble vanity slab, we hand-blend custom botanical foundations, micro-pigments, and luminous highlighters calibrated specifically to your skin undertone and eye pigmentation.",
    duration: "15 MINUTES",
    sensoryNote: "The rhythmic whisper of pure pigments blending on cold stone.",
    highlight: "Custom-formulated pigments mixed fresh before your eyes.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85"
  },
  {
    step: "03",
    title: "THE COUTURE TRANSFORMATION",
    subTitle: "Precision Layering & Sculptural Artistry",
    description: "With eyes closed on our ergonomic cashmere-draped treatment bed, experience the delicate, rhythmic touch of artisan Japanese brushes. We sculpt cheekbones with ambient light bounce, frame the gaze with bespoke lashes, and sculpt brows hair by microscopic hair.",
    duration: "60 - 90 MINUTES",
    sensoryNote: "Weightless velvet textures melting into warmed skin.",
    highlight: "Zero heavy cake. Breathable, 16-hour camera-enduring elasticity.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    step: "04",
    title: "THE REFINEMENT & VEIL FINISH",
    subTitle: "Micro-Precision & Flash Proofing",
    description: "Every millimeter is inspected under 5 distinct color temperature lights (from warm candlelight to 5600K direct daylight and high-intensity flash). Micro-setting mists lock moisture within while repelling sweat, humidity, and camera shine.",
    duration: "15 MINUTES",
    sensoryNote: "A refreshing cascade of micro-fine French rosewater and cellular peptides.",
    highlight: "Tested against 8K cinema zoom and harsh strobe illumination.",
    image: "https://images.unsplash.com/photo-1522337094138-09724a06d27a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    step: "05",
    title: "THE SIGNATURE REVEAL",
    subTitle: "Mirror Illumination & Atelier Portraiture",
    description: "The private illumination sequence activates. The mirror lights warm up, and you see the transformation for the first time. Not a mask that obscures you, but an elevated, magnetic manifestation of your ultimate beauty aura.",
    duration: "15 MINUTES",
    sensoryNote: "The quiet, breathtaking intake of breath when confidence locks in.",
    highlight: "Private studio portraiture with instant digital touch-up delivery.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
  }
];
