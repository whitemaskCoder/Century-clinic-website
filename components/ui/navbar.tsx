"use client";

// Navigation bar component - fixed at the top of the page
// Includes logo, navigation links, and appointment button
// Responsive design with mobile menu toggle

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/moving-border";

export function Navbar() {
  // State to control mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items with their corresponding section IDs
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* clinic logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white"></div>
            </div>
            <span className="text-2xl font-bold text-slate-800">Century Clinic</span>
          </motion.div>

          {/* navigation menu for desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const element = document.querySelector(item.link);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "px-4 py-2 text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 relative group"
                )}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="ml-4"
            >
              <MovingBorder
                borderRadius="0.5rem"
                containerClassName="w-auto h-auto"
                duration={2000}
                as="a"
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                borderClassName="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500"
                className="px-6 py-2.5 text-white font-semibold bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                Make An Appointment
              </MovingBorder>
            </motion.div>
          </div>

          {/* mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector(item.link);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="block text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2">
              <MovingBorder
                borderRadius="0.5rem"
                containerClassName="w-full"
                duration={2000}
                as="a"
                href="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                borderClassName="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500"
                className="w-full text-center px-6 py-3 text-white font-semibold bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                Make An Appointment
              </MovingBorder>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

