export interface MacroDetail {
  id: string;
  stepNumber: string;
  title: string;
  focusArea: string;
  description: string;
  artisanTechnique: string;
  toolsUsed: string;
  image: string;
}

export const MACRO_DETAILS: MacroDetail[] = [
  {
    id: "detail-lips",
    stepNumber: "01",
    title: "VELVETEEN OMBRE LIP SCULPT",
    focusArea: "LIPS ARCHITECTURE",
    description: "Multi-tonal border gradient fading inward to a plush cashmere center. We hand-blend custom botanical pigments to contour the natural vermilion border without visible lines.",
    artisanTechnique: "Sub-layer stain blotting followed by wax-free botanical micro-pigment press.",
    toolsUsed: "Handmade Japanese flat-edge kolinsky lip brush #04.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "detail-skin",
    stepNumber: "02",
    title: "CELLULAR TRANSLUCENT DEW",
    focusArea: "DERMAL LUMINOSITY",
    description: "Skin that bounces ambient light rather than absorbing it with heavy powder. We layer micro-molecular squalane and crushed pearl suspension directly over active facial acupressure points.",
    artisanTechnique: "Electroporated hydration veil beneath 10-micron breathable airbrush sheen.",
    toolsUsed: "Chilled pure rose quartz gua sha & custom ceramic airbrush nozzle.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "detail-brows",
    stepNumber: "03",
    title: "FEATHERED MICRO-STRAND REALISM",
    focusArea: "BROW COUTURE",
    description: "Every single brow hair is analyzed for direction, tension, and velocity. We hand-draw microscopic hair-strokes that harmonize invisibly with natural follicles.",
    artisanTechnique: "Organic botanical lamination paired with custom multi-chromatic micro-strokes.",
    toolsUsed: "Diamond-sharpened Swiss micro-tweezers & 000 sable detailer.",
    image: "https://images.unsplash.com/photo-1522337094138-09724a06d27a?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "detail-eyes",
    stepNumber: "04",
    title: "SMOKY LIQUID SILK DEPTH",
    focusArea: "OCULAR DEFINITION",
    description: "A seamless transition from velvet midnight carbon to warm amber hues. Engineered to enhance your iris pigmentation with zero fallout or harsh cut-crease lines.",
    artisanTechnique: "Layered cream-to-powder diffusion with wet mineral crystal micro-press.",
    toolsUsed: "Hakuhodo dome blending brush & Japanese charcoal carbon liner.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "detail-pigments",
    stepNumber: "05",
    title: "PURE ARTISANAL PIGMENTS & BRUSHES",
    focusArea: "THE ATELIER TOOLS",
    description: "We use exclusively custom-milled mineral pigments from Grasse, France and handcrafted wooden-handle brushes crafted in Kumano, Japan by generational master brushmakers.",
    artisanTechnique: "Individual color alchemy: each client's base shade is mixed fresh at the vanity.",
    toolsUsed: "Kumano cedar-handled natural bristles & marble mixing slab.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85"
  }
];
