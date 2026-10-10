"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { PillarsOverview } from "../components/PillarsOverview";
import { BeautyServices } from "../components/BeautyServices";
import { MakeupPortfolio } from "../components/MakeupPortfolio";
import { BeautyAcademy } from "../components/BeautyAcademy";
import { ProductGrid } from "../components/ProductGrid";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { GiftCollection } from "../components/GiftCollection";
import { MakerStory } from "../components/MakerStory";
import { FAQAccordion } from "../components/FAQAccordion";
import { Footer } from "../components/Footer";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { Product } from "../data/products";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-olive selection:text-ivory">
      {/* Main Header Navigation */}
      <Header />

      {/* 3-Pillar Hero Section */}
      <HeroSection />

      {/* Explore Lucky Glamours 3 Pillars */}
      <PillarsOverview />

      {/* Beauty & Makeup Services */}
      <BeautyServices />

      {/* Bridal & Event Portfolio */}
      <MakeupPortfolio />

      {/* Beauty Academy & Training Courses */}
      <BeautyAcademy />

      {/* Shop Soaps & Oils Collection */}
      <ProductGrid onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Featured Artisanal Product Spotlight */}
      <FeaturedProduct onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Botanical Gift Collections */}
      <GiftCollection />

      {/* About Lucky Glamours & Founder Story */}
      <MakerStory />

      {/* Frequently Asked Questions */}
      <FAQAccordion />

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
