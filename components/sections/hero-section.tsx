"use client";

// Hero section component - the main landing area of the website
// Features Dr. Theva's photo, credentials, and call-to-action buttons

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { MovingBorder } from "@/components/ui/moving-border";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function HeroSection() {
  // Words that flip/rotate in the specialist section
  const words = ["Arthroplasty", "Joint Replacement", "Orthopaedic Excellence"];
  // Main hero words that appear large on the page
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* left side - text content */}
          <div className="text-center md:text-left space-y-8 flex-1">
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
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight"
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                Dr. Theva
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center justify-center md:justify-start gap-2 flex-wrap mb-6"
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
              className="max-w-3xl mb-8"
            >
              <p className="text-lg md:text-xl text-slate-600 font-normal">
                35 years of orthopaedic excellence, leading innovation in joint replacement surgery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4"
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

          {/* right side - Dr. Theva's photo with 3D card effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full md:w-auto"
          >
            <CardContainer className="w-full md:w-[400px] lg:w-[500px]">
              <CardBody className="relative group/card w-full h-[500px] md:h-[600px] lg:h-[700px]">
                <CardItem
                  translateZ={50}
                  className="w-full h-full"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/DR theva pic.jpeg"
                      alt="Dr. Theva - Orthopaedic Specialist"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* gradient overlay for better visual */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
                    {/* glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-200/50 shadow-[0_0_40px_rgba(59,130,246,0.3)]" />
                  </div>
                </CardItem>
                {/* floating elements for extra depth */}
                <CardItem
                  translateZ={80}
                  rotateX={10}
                  rotateY={-10}
                  className="absolute -top-4 -right-4 w-32 h-32 opacity-60"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl" />
                </CardItem>
                <CardItem
                  translateZ={100}
                  rotateX={-10}
                  rotateY={10}
                  className="absolute -bottom-4 -left-4 w-40 h-40 opacity-40"
                >
                  <div className="w-full h-full bg-gradient-to-tr from-teal-400/30 to-blue-400/30 rounded-full blur-2xl" />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

