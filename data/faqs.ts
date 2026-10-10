export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_LIST: FAQItem[] = [
  {
    id: "how-to-order",
    question: "How can I place an order for Lucky Glamours products?",
    answer: "Currently, all orders and availability inquiries are placed directly via WhatsApp. Click any 'Order on WhatsApp' button on a product card or detail view to send us a pre-filled message with the product name and size. We will confirm batch availability, final price, and delivery steps with you directly."
  },
  {
    id: "ingredients-used",
    question: "What ingredients are used in your soaps and oils?",
    answer: "We formulate our products using cold-pressed plant oils (coconut, sesame, sweet almond, jojoba), unrefined shea butter, farm-fresh goat milk, raw honey, and natural botanical infusions (saffron, calendula, bhringraj, vetiver). Full ingredients are transparently listed under every product description."
  },
  {
    id: "usage-and-storage",
    question: "How should I use and store handmade cold-process soaps?",
    answer: "Handmade cold-process soap bars retain natural glycerin and contain no synthetic hardening chemicals. To extend the life of your bar, store it on a well-draining wooden soap dish away from continuous water spray between uses, allowing it to air dry."
  },
  {
    id: "available-sizes",
    question: "What are the available sizes for your products?",
    answer: "Our soap bars are standard batch sizes of 120g–125g. Hair oils are bottled in 100ml amber containers, and body oils in 150ml bottles. Custom sizes and custom wedding or event gift boxes can be requested via WhatsApp."
  },
  {
    id: "delivery-and-timelines",
    question: "What are the delivery charges and shipping timelines?",
    answer: "Shipping costs and estimated delivery timelines depend on your location within India and order size. We dispatch orders via reliable courier services once your WhatsApp order is confirmed. Exact delivery timelines will be shared over WhatsApp upon ordering."
  },
  {
    id: "return-policy",
    question: "What is your return or replacement policy?",
    answer: "Due to the intimate personal care nature of handmade soaps and oils, opened or used products cannot be returned. If a product arrives damaged or incorrect during transit, please contact us on WhatsApp within 24 hours of delivery with a photo, and we will assist with a prompt replacement."
  }
];
