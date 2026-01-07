import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}

