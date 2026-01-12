"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<any>) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] inline-flex items-center justify-center",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingButton duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-32 w-32 opacity-[1] blur-[90px]",
              borderClassName
            )}
            style={{
              filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.9)) drop-shadow(0 0 60px rgba(37, 99, 235, 0.7)) drop-shadow(0 0 90px rgba(14, 165, 233, 0.5))",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(37, 99, 235, 0.6)",
            }}
          />
        </MovingButton>
        <MovingButton duration={(duration || 2000) * 1.5} rx="30%" ry="30%">
          <div
            className={cn(
              "h-24 w-24 opacity-[0.9] blur-[60px]",
              borderClassName
            )}
            style={{
              filter: "drop-shadow(0 0 25px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 50px rgba(37, 99, 235, 0.6))",
              boxShadow: "0 0 30px rgba(14, 165, 233, 0.7), 0 0 60px rgba(59, 130, 246, 0.5)",
            }}
          />
        </MovingButton>
        <MovingButton duration={(duration || 2000) * 0.7} rx="30%" ry="30%">
          <div
            className={cn(
              "h-16 w-16 opacity-[0.7] blur-[40px]",
              borderClassName
            )}
            style={{
              filter: "drop-shadow(0 0 15px rgba(14, 165, 233, 0.9))",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
            }}
          />
        </MovingButton>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingButton = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & React.ComponentPropsWithoutRef<"div">) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

