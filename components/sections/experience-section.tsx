"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ExperienceSection() {
  const experiences = [
    {
      period: "1998 - 2016",
      title: "Head of Department",
      organization: "Government Orthopaedic Service",
      description: "Led the orthopaedic department, overseeing complex cases and training the next generation of surgeons.",
    },
    {
      period: "1989 - Present",
      title: "Orthopaedic Specialist",
      organization: "Private Practice",
      description: "Specializing in arthroplasty and joint replacement surgery with a focus on patient-centered care.",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-sky-50 to-white overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Distinguished Career
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A lifetime dedicated to orthopaedic excellence and innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 md:p-12 shadow-md hover:shadow-lg hover:scale-105 transition-all border border-blue-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="text-blue-600 font-semibold text-lg mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-xl text-slate-700 font-medium mb-4">
                    {exp.organization}
                  </div>
                  <p className="text-slate-600 text-lg">
                    {exp.description}
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

