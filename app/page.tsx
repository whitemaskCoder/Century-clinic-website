"use client";

import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ArthroplastySection } from "@/components/sections/arthroplasty-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SurgicalGallery } from "@/components/sections/surgical-gallery";
import { ClinicMap } from "@/components/sections/clinic-map";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <StatsSection />
      <section id="about">
        <ExperienceSection />
      </section>
      <TestimonialsSection />
      <section id="services">
        <ArthroplastySection />
      </section>
      <section id="gallery">
        <SurgicalGallery />
      </section>
      <section id="contact">
        <ClinicMap />
      </section>
      <Footer />
    </main>
  );
}

