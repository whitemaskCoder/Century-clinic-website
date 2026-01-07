"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function SurgicalGallery() {
  const images = [
    "/images/07b29ca0-0081-4be3-b66f-e016833a18cd.jpg",
    "/images/1175f527-94a3-4fa5-9d04-0b99643550dc.jpg",
    "/images/2dc25c6b-6531-45f3-a258-49743398dfda.jpg",
    "/images/e206a4c9-1b58-4af4-8718-35f38b4b6d42.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Surgical Excellence in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Witness the precision and expertise that comes with over 35 years of orthopaedic surgery experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <CardContainer containerClassName="w-full h-full py-0" className="w-full h-full">
                <CardBody className="relative w-full h-full group">
                  <CardItem translateZ={50} className="w-full h-full">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl bg-gradient-to-br from-blue-100 to-sky-100">
                      <Image
                        src={src}
                        alt={`Surgical procedure ${index + 1} - Dr. Theva`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardItem translateZ={60} className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-lg font-semibold">
                          Arthroplasty Surgery
                        </p>
                        <p className="text-white/90 text-sm">
                          Professional surgical team at work
                        </p>
                      </CardItem>
                    </div>
                  </CardItem>
                  <CardItem translateZ={20} className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* modal to show full size image when clicked */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Surgical procedure - Dr. Theva"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
                  aria-label="Close image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

