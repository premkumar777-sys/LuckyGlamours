export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  occasion: string;
  location: string;
  ratingStars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-01",
    quote: "I didn't just feel beautiful. I felt completely, unmistakably myself — only elevated to a level I didn't know existed. The makeup lasted through twelve hours of tears, laughter, and humid Venetian breezes without a single touch-up.",
    author: "Genevieve De La Tour",
    role: "Haute Couture Bride",
    occasion: "Venice Canal Wedding",
    location: "Paris / Venice",
    ratingStars: 5
  },
  {
    id: "t-02",
    quote: "Under the relentless flashbulbs of the Met Gala steps, there is nowhere for heavy makeup to hide. LuckyGlamours understands facial architecture like a classical sculptor. The skin looked like liquid silk on high-definition broadcast.",
    author: "Camille Laurent",
    role: "Editorial Fashion Director",
    occasion: "Metropolitan Museum Costume Gala",
    location: "New York",
    ratingStars: 5
  },
  {
    id: "t-03",
    quote: "Most artists impose their favorite look onto your face. LuckyGlamours listened to how I move, how I laugh, and how I hold my head. The transformation was so subtle yet commanding that everyone remarked on my radiance, not my makeup.",
    author: "Astrid Lindholm",
    role: "Film Producer & Jury Member",
    occasion: "Cannes Film Festival Premiere",
    location: "Stockholm / Cannes",
    ratingStars: 5
  },
  {
    id: "t-04",
    quote: "The brow architecture and cellular glow treatment completely restructured my facial proportions. I threw away my foundation three days later because my bare skin was glowing with such clarity.",
    author: "Dr. Vivienne Chen",
    role: "Architectural Designer & Art Patron",
    occasion: "Bespoke Private Metamorphosis",
    location: "London / Milan",
    ratingStars: 5
  }
];
