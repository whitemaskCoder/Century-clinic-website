"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { MovingBorder } from "@/components/ui/moving-border";

export function HeroSection() {
  const words = ["Arthroplasty", "Joint Replacement", "Orthopaedic Excellence"];
  const heroWords = ["EXCELLENCE", "EXPERTISE", "EXPERIENCE"];
  
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full flex md:items-center md:justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-white antialiased bg-grid-white/[0.02] overflow-hidden pt-20">
      {/* background image for hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-sky-100/50 to-blue-50/50" />
        <Image
          src="/images/07b29ca0-0081-4be3-b66f-e016833a18cd.jpg"
          alt="Surgical excellence - Dr. Theva"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-10"
        fill="#2563eb"
      />
      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-20">
        <div className="text-center space-y-8">
          {/* the three big words that show up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {heroWords.map((word, index) => (
              <motion.h1
                key={word}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="text-5xl md:text-8xl lg:text-9xl font-bold text-slate-800 leading-tight"
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>

          {/* doctor name section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-6">
              Dr. Theva
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-2 flex-wrap mb-6"
          >
            <span className="text-xl md:text-2xl font-semibold text-slate-600">
              Specialist in
            </span>
            <FlipWords words={words} className="text-xl md:text-2xl font-bold text-blue-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-slate-600 font-normal">
              35 years of orthopaedic excellence, leading innovation in joint replacement surgery
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <MovingBorder
              borderRadius="0.5rem"
              containerClassName="w-auto h-auto"
              duration={2000}
              as="a"
              href="#services"
              borderClassName="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              All Services
            </MovingBorder>
            <MovingBorder
              borderRadius="0.5rem"
              containerClassName="w-auto h-auto"
              duration={2000}
              as="a"
              href="#contact"
              borderClassName="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all"
            >
              Get In Touch
            </MovingBorder>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

