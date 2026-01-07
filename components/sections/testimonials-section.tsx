"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Dr. Theva's expertise in joint replacement surgery is unmatched. After my hip replacement, I'm pain-free and can walk normally again. Truly grateful for his skill and care.",
      name: "Patient",
      title: "Hip Replacement Patient",
    },
    {
      quote: "After 18 years as Head of Department in government service, Dr. Theva brings incredible experience to every procedure. My knee replacement was a complete success.",
      name: "Patient",
      title: "Knee Replacement Patient",
    },
    {
      quote: "Over 35 years of experience shows in every consultation. Dr. Theva's approach is thorough, professional, and puts patients at ease. Highly recommended for arthroplasty procedures.",
      name: "Patient",
      title: "Orthopaedic Patient",
    },
    {
      quote: "More than 2000 successful surgeries speak for themselves. Dr. Theva's surgical precision and post-operative care made my recovery smooth and quick.",
      name: "Patient",
      title: "Joint Replacement Patient",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Patients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testimonials from patients who have experienced Dr. Theva's expertise in orthopaedic surgery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-blue-600 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-blue-200">
                  <p className="font-bold text-slate-800 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

