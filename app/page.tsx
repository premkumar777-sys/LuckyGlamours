"use client";

import React, { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { BrandIntro } from "../components/BrandIntro";
import { ServicesExplorer } from "../components/ServicesExplorer";
import { SignatureExperience } from "../components/SignatureExperience";
import { Transformation } from "../components/Transformation";
import { EditorialPortfolio } from "../components/EditorialPortfolio";
import { BeautyDetails } from "../components/BeautyDetails";
import { ArtistStory } from "../components/ArtistStory";
import { Testimonials } from "../components/Testimonials";
import { BookingExperience } from "../components/BookingExperience";
import { ContactConcierge } from "../components/ContactConcierge";
import { Footer } from "../components/Footer";

export default function Home() {
  const [modalBookingOpen, setModalBookingOpen] = useState(false);
  const [selectedServiceIdForModal, setSelectedServiceIdForModal] = useState<string | undefined>(
    undefined
  );

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceIdForModal(serviceId);
    setModalBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setModalBookingOpen(false);
  };

  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      {/* Luxury Navigation Header */}
      <Navigation onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Brand Philosophy: "BEAUTY IS NOT A TEMPLATE." */}
      <BrandIntro />

      {/* Immersive Haute Services Collection Explorer */}
      <ServicesExplorer onOpenBooking={handleOpenBooking} />

      {/* The 5-Stage Signature Experience Journey */}
      <SignatureExperience />

      {/* Interactive Before / After Metamorphosis Slider */}
      <Transformation />

      {/* Asymmetrical Editorial Magazine Portfolio */}
      <EditorialPortfolio />

      {/* Craftsmanship: Macro Beauty Details Gallery */}
      <BeautyDetails />

      {/* The Artist Behind The Transformation */}
      <ArtistStory onOpenBooking={() => handleOpenBooking()} />

      {/* Editorial Typographic Testimonials */}
      <Testimonials />

      {/* Dedicated Concierge Multi-Step Booking Section */}
      <BookingExperience />

      {/* Atelier Contact & Inquiries */}
      <ContactConcierge onOpenBooking={() => handleOpenBooking()} />

      {/* Footer Colophon */}
      <Footer />

      {/* Modal Booking Overlay when triggered from Hero/Nav/Services */}
      {modalBookingOpen && (
        <BookingExperience
          isModal={true}
          initialServiceId={selectedServiceIdForModal}
          onCloseModal={handleCloseBooking}
        />
      )}
    </main>
  );
}
