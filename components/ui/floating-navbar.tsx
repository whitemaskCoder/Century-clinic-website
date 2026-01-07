"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious() ?? 0;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border-2 border-cyan-300 dark:border-cyan-500 rounded-full dark:bg-gradient-to-r dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(navItem.link);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "relative dark:text-cyan-200 items-center flex space-x-1 text-purple-700 dark:hover:text-cyan-300 hover:text-purple-600 cursor-pointer font-medium"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <button className="border-2 text-sm font-medium relative border-cyan-400 dark:border-cyan-400 text-white dark:text-white px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transition-all">
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

