"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className={cn("relative inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: -20, rotateX: -90 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            },
          }}
          exit={{
            opacity: 0,
            y: 20,
            rotateX: 90,
            transition: {
              duration: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            },
          }}
          className="inline-block relative"
        >
          {words[currentWord].split("").map((letter, index) => (
            <motion.span
              key={`${currentWord}-${letter}-${index}`}
              initial={{ opacity: 0, y: -20, rotateX: -90 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  delay: index * 0.02,
                  duration: 0.4,
                  ease: [0.21, 0.47, 0.32, 0.98],
                },
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

