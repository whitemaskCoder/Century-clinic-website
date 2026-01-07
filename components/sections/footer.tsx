"use client";

import React from "react";
import { motion } from "framer-motion";
import { MovingBorder } from "@/components/ui/moving-border";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Century Clinic
            </h3>
            <p className="text-slate-300 mb-4 text-lg">
              Specialized orthopaedic care with over 35 years of experience. Dr. Theva specializes in arthroplasty and joint replacement surgery.
            </p>
            <MovingBorder
              borderRadius="0.5rem"
              containerClassName="w-auto h-auto inline-block"
              duration={2000}
              as="a"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              borderClassName="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500"
              className="px-8 py-3 text-white font-semibold bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Make An Appointment
            </MovingBorder>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="text-slate-300 space-y-3">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="text-slate-300 space-y-3">
              <li>
                <p className="text-slate-300 font-medium mb-1">Address:</p>
                <p className="text-slate-400 text-sm mb-2">8B & 10A, Jalan Harimau,</p>
                <p className="text-slate-400 text-sm mb-2">Taman Abad, 80250</p>
                <p className="text-slate-400 text-sm mb-3">Johor Bahru, Johor Darul Ta'zim</p>
                <a 
                  href="https://maps.app.goo.gl/XnNjUZ3NjReckqqA9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white underline transition-colors text-blue-400"
                >
                  View on Google Maps
                </a>
              </li>
              <li className="text-slate-300 mt-2">
                <p className="text-slate-300 font-medium mb-1">Phone:</p>
                <a href="tel:+60107651798" className="hover:text-white text-blue-400">
                  010-765 1798
                </a>
              </li>
              <li className="text-slate-300 mt-2">
                <p className="text-slate-300 font-medium mb-1">Hours:</p>
                <p className="text-slate-400 text-sm">Mon-Fri: 9:00 AM - 4:30 PM</p>
                <p className="text-slate-400 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                <p className="text-slate-400 text-sm">Sun: Closed</p>
              </li>
              <li className="text-slate-300">Specialization:</li>
              <li className="text-slate-400">• Arthroplasty</li>
              <li className="text-slate-400">• Joint Replacement</li>
              <li className="text-slate-400">• Orthopaedic Surgery</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} MEDIX AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

