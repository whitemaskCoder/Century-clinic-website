// Root layout component - wraps all pages in the application
// Sets up the HTML structure and global styles

import type { Metadata } from "next";
import "./globals.css";

// SEO metadata for the website
export const metadata: Metadata = {
  title: "Dr. Theva - Orthopaedic Specialist | Century Clinic",
  description: "35 years of orthopaedic excellence. Over 2000 joint replacement surgeries. Head of Department (1998-2016). Specializing in arthroplasty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Antialiased class for smooth font rendering */}
      <body className="antialiased">{children}</body>
    </html>
  );
}


