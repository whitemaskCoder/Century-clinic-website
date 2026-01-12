"use client";

// Main page component for Century Clinic website
// This is the homepage that displays all the sections about Dr. Theva

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
    // Main container with gradient background - medical blue theme
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      {/* Navigation bar at the top */}
      <Navbar />
      
      {/* Hero section - first thing visitors see */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Statistics section showing Dr. Theva's achievements */}
      <StatsSection />
      
      {/* About section - Dr. Theva's experience and background */}
      <section id="about">
        <ExperienceSection />
      </section>
      
      {/* Testimonials from patients */}
      <TestimonialsSection />
      
      {/* Services section - Arthroplasty information */}
      <section id="services">
        <ArthroplastySection />
      </section>
      
      {/* Gallery showing surgical procedures */}
      <section id="gallery">
        <SurgicalGallery />
      </section>
      
      {/* Contact section with clinic map */}
      <section id="contact">
        <ClinicMap />
      </section>
      
      {/* Footer with contact information */}
      <Footer />
    </main>
  );
}

