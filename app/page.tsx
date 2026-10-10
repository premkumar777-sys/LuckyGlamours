"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { BrandIntroduction } from "../components/BrandIntroduction";
import { ProductGrid } from "../components/ProductGrid";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { MakerStory } from "../components/MakerStory";
import { IngredientsSection } from "../components/IngredientsSection";
import { GiftCollection } from "../components/GiftCollection";
import { CustomerFeedback } from "../components/CustomerFeedback";
import { FAQAccordion } from "../components/FAQAccordion";
import { Footer } from "../components/Footer";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { Product } from "../data/products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-olive selection:text-ivory">
      {/* Section A — Announcement Bar */}
      <AnnouncementBar />

      {/* Section B — Navigation Header */}
      <Header />

      {/* Section C — Editorial Hero */}
      <HeroSection />

      {/* Section D — Brand Introduction */}
      <BrandIntroduction />

      {/* Section E — Shop the Collection */}
      <ProductGrid onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Section F — Featured Artisanal Product */}
      <FeaturedProduct onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Section G — The Maker's Story */}
      <MakerStory />

      {/* Section H — Ingredients & Craftsmanship */}
      <IngredientsSection />

      {/* Section I — Gift Collections */}
      <GiftCollection />

      {/* Section J — Customer Feedback */}
      <CustomerFeedback />

      {/* Section K — FAQ Accordion */}
      <FAQAccordion />

      {/* Section L — Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
