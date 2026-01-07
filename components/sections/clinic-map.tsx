"use client";

import React from "react";
import { motion } from "framer-motion";

export function ClinicMap() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Find Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visit Century Orthopaedic Specialist Clinic / Klinik Pakar Tulang Century for specialized orthopaedic care. We're conveniently located for easy access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200"
        >
          {/* google maps embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.8!2d103.7630719!3d1.4810142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6d3272511e43%3A0xe263d6aa9d04df52!2sCentury+Orthopaedic+Specialist+Clinic+%2F+Klinik+Pakar+Tulang+Century!5e0!3m2!1sen!2smy!4v1736428800000!5m2!1sen!2smy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Century Orthopaedic Specialist Clinic / Klinik Pakar Tulang Century Location"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
          
          {/* button to open in google maps */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <a
              href="https://maps.app.goo.gl/XnNjUZ3NjReckqqA9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 backdrop-blur-sm bg-opacity-95 hover:bg-opacity-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-3">Location</h3>
            <div className="text-slate-600 text-sm space-y-1 mb-3">
              <p className="font-medium">Century Orthopaedic Specialist Clinic</p>
              <p>8B & 10A, Jalan Harimau,</p>
              <p>Taman Abad, 80250</p>
              <p>Johor Bahru, Johor Darul Ta'zim</p>
            </div>
            <p className="text-slate-600 text-sm mt-3">
              <a
                href="https://maps.app.goo.gl/XnNjUZ3NjReckqqA9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 underline text-blue-600 font-medium"
              >
                View on Google Maps
              </a>
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Contact</h3>
            <p className="text-slate-600 text-sm mb-1">
              <a href="tel:+60107651798" className="hover:text-blue-600 font-medium text-base">
                010-765 1798
              </a>
            </p>
            <p className="text-slate-600 text-xs mt-2">
              For appointments & inquiries
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-3">Operating Hours</h3>
            <div className="text-slate-600 text-sm space-y-2">
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Monday</span>
                <span>9:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Tuesday</span>
                <span>9:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Wednesday</span>
                <span>9:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Thursday</span>
                <span>9:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Friday</span>
                <span>9:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-center items-center gap-4">
                <span className="font-medium">Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-center items-center gap-4 pt-2 border-t border-blue-100">
                <span className="font-medium text-red-600">Sunday</span>
                <span className="text-red-600">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

