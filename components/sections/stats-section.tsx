"use client";

// Statistics section component
// Displays Dr. Theva's key achievements and experience numbers
// Uses animated count-up effect for visual appeal

import React from "react";
import { motion } from "framer-motion";
import { CountUpNumber } from "@/components/ui/countdown-number";

export function StatsSection() {
  // Statistics data with animation delays for staggered effect
  const stats = [
    {
      number: 2000,
      label: "Joint Replacement Surgeries",
      suffix: "+",
      delay: 0.1,
    },
    {
      number: 35,
      label: "Years of Experience",
      suffix: "",
      delay: 0.2,
    },
    {
      number: 18,
      label: "Years as Head of Department",
      suffix: "",
      delay: 0.3,
    },
  ];

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
            Proven Track Record
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Decades of expertise in orthopaedic surgery and joint replacement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all border border-blue-100"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                <CountUpNumber value={stat.number} delay={stat.delay * 1000} />
                {stat.suffix}
              </div>
              <div className="text-xl text-slate-700 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

