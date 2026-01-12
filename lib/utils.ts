// Utility function for merging Tailwind CSS classes
// Combines clsx and tailwind-merge to handle class conflicts properly

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names and merges Tailwind classes intelligently
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


