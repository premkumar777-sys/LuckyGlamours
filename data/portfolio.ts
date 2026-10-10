export interface PortfolioItem {
  id: string;
  code: string;
  title: string;
  category: "Bridal" | "Editorial" | "Red Carpet" | "Skin & Brows";
  subtitle: string;
  story: string;
  palette: string[];
  techniques: string[];
  image: string;
  aspectRatio: "portrait" | "tall" | "square" | "landscape";
  client: string;
  year: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "vogue-scandinavia",
    code: "EDIT / 084",
    title: "L'AURA MINIMALISTE",
    category: "Editorial",
    subtitle: "High-contrast architectural cheekbones and glass-hydrated dermal veil for Vogue Scandinavia.",
    story: "Created under northern natural daylight and severe tungsten key light. We utilized zero matte foundation powders, relying exclusively on light-refracting biological emollients and brushed-up feathered brow architecture.",
    palette: ["#FAF8F5", "#D8BBB1", "#A5855C", "#1A1817"],
    techniques: ["Skin Glassification", "Feathered Micro-Lamination", "Unlined Suede Lips"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "tall",
    client: "Editorial spread, Vogue Scandinavia",
    year: "2026"
  },
  {
    id: "venice-bridal",
    code: "BRIDAL / 019",
    title: "THE VENETIAN PALAZZO BRIDE",
    category: "Bridal",
    subtitle: "Soft rose-gold luminescent eyes and waterproof humidity-proof skin for a grand canal celebration.",
    story: "For this three-day celebration in Venice, the makeup needed to endure boat journeys across the lagoon, sunset humidity, and ballroom candelabra illumination. We layered waterproof micronized silica veils over rose-gold champagne pigments.",
    palette: ["#FFF8F0", "#DECBB3", "#DFC0B5", "#8E704C"],
    techniques: ["Airbrush Skin Architecture", "Waterproof Silk Lashes", "Rose-Gold Wet Eye Sheen"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "portrait",
    client: "Haute Bride, Palazzo Gritti Venice",
    year: "2026"
  },
  {
    id: "cannes-film-festival",
    code: "CARPET / 112",
    title: "CÔTE D'AZUR GOLDEN SIREN",
    category: "Red Carpet",
    subtitle: "Sculpted bronze temple contouring and razor-sharp liquid velvet cat eye at Cannes Film Festival.",
    story: "Designed for Palais des Festivals red carpet flash photography. We balanced warm Mediterranean bronzed contours with crisp graphic liner to anchor the gaze across dozens of photographers' flash bursts.",
    palette: ["#EBE3DA", "#C5A880", "#24211F", "#0E0D0C"],
    techniques: ["Flash-Calibrated Contour", "Micro-Graphic Eyeliner", "Hydra-Gloss 3D Lip"],
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "square",
    client: "International Actress, Festival de Cannes",
    year: "2025"
  },
  {
    id: "sculptural-brows",
    code: "ARCH / 042",
    title: "FEATHERED GOLDEN RATIO",
    category: "Skin & Brows",
    subtitle: "Organic botanical lamination, custom micro-tinting, and natural brow follicle reconstruction.",
    story: "A complete non-invasive reconstruction of sparse arches. Utilizing custom herbal henna pigments layered strand-by-strand with microscopic precision, creating natural lift and youthful cranial proportions.",
    palette: ["#F4EFEA", "#B89368", "#332F2B", "#11100F"],
    techniques: ["Botanical Keratin Lamination", "Micro-Hair Realism", "Caliper Mapping"],
    image: "https://images.unsplash.com/photo-1522337094138-09724a06d27a?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "portrait",
    client: "Campaign, Haute Brow Studio",
    year: "2026"
  },
  {
    id: "paris-fashion-week",
    code: "RUNWAY / 063",
    title: "NOIR VELVET & GLASS COMPLEXION",
    category: "Editorial",
    subtitle: "Deep bordeaux blurred ombre lip paired with bare illuminated dew for Paris Haute Couture Week.",
    story: "Backstage in Paris, contrasting extreme minimalism with saturated dark floral tones. The lips were pressed with pure crimson and blackberry pigments, while the complexion remained hyper-raw and bathed in bio-cellular facial oil.",
    palette: ["#161514", "#4A1525", "#F5F0EB", "#DECBB3"],
    techniques: ["Pressed Velvet Lip Blurring", "Raw Complexion Glow", "Wet-Look Eyelids"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "tall",
    client: "Haute Couture Runway Presentation",
    year: "2026"
  },
  {
    id: "cellular-glass-skin",
    code: "DERMA / 017",
    title: "THE BIOLOGICAL DEW MIRACLE",
    category: "Skin & Brows",
    subtitle: "Post-cryo micro-circulation radiance and transdermal peptide infusion without synthetic concealers.",
    story: "Captured immediately following a 90-minute Cellular Dermal Glow session. Zero base makeup: solely biological peptides, botanical squalane, and cryo-sculpted contours radiating natural health.",
    palette: ["#FAF8F5", "#F4EFEA", "#DFC0B5", "#C5A880"],
    techniques: ["Cryo-Lymphatic Sculpting", "Transdermal Electroporation", "Zero-Powder Glow"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "landscape",
    client: "Luxury Dermal Journal",
    year: "2026"
  }
];
