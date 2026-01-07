"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-neutral-950",
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px] dark:bg-grid-white/[0.02]" />
      <div className="absolute left-0 right-0 top-0 h-[400px] bg-gradient-to-b from-white to-transparent dark:from-neutral-950" />
      <div className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />
    </div>
  );
};

