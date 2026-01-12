// Tailwind CSS configuration file
// Defines custom colors, animations, and design tokens for the project

import type { Config } from "tailwindcss";

const config: Config = {
  // Files where Tailwind should look for class names
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color variables for theming
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Custom shimmer animation for loading effects
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      // Keyframes for the shimmer animation
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;


