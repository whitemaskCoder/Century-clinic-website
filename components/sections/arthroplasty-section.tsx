"use client";

import React from "react";
import { motion } from "framer-motion";

export function ArthroplastySection() {
  const services = [
    {
      title: "Total Hip Replacement",
      description: "Advanced techniques for hip joint restoration using state-of-the-art prosthetics and minimally invasive approaches.",
    },
    {
      title: "Total Knee Replacement",
      description: "Comprehensive knee joint replacement procedures with focus on precision, durability, and optimal patient outcomes.",
    },
    {
      title: "Revision Arthroplasty",
      description: "Specialized expertise in complex revision surgeries for failed or worn joint replacements.",
    },
    {
      title: "Minimally Invasive Techniques",
      description: "Utilizing modern minimally invasive surgical approaches to reduce recovery time and improve patient satisfaction.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Arthroplasty Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            With over 2000 successful joint replacement surgeries, Dr. Theva brings unmatched experience and precision to every procedure. Specializing in hip and knee arthroplasty with a focus on patient recovery and long-term outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center p-8 bg-blue-600 rounded-2xl text-white shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            35 Years of Orthopaedic Excellence
          </h3>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            From heading the government orthopaedic service to performing thousands of successful surgeries, Dr. Theva combines decades of experience with the latest techniques in joint replacement surgery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

