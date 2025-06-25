"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export interface ProgressCircleProps extends React.ComponentProps<"svg"> {
  value: number; // between 0–100
  showCheck?: boolean;
  className?: string;
  size?: number;
  strokeWidth?: number;
  duration?: number; // seconds
  unique: number;
}

export const ProgressCircle = ({
  value,
  showCheck,
  className,
  size = 16,
  strokeWidth = 1.5,
  duration = 0.4,
  unique,
  ...rest
}: ProgressCircleProps) => {
  const circleSize = size - (size * 2) / 16;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const halfSize = size / 2;

  const progress = useMotionValue(0);
  const dashOffset = useTransform(progress, [0, 100], [circumference, 0]);

  const shouldShowCheck = showCheck && value === 100;

  useEffect(() => {
    animate(progress, value, {
      type: "tween",
      duration,
      ease: "easeInOut",
    });
  }, [value, duration, progress]);

  const common = {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    fill: "none",
    strokeWidth,
  };

  return (
    <svg
      role="progressbar"
      viewBox={`0 0 ${size} ${size}`}
      className={cn("text-fg-success", className)}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      width={size}
      height={size}
      {...rest}
    >
      {shouldShowCheck ? (
        <>
          <defs>
            <mask id={`cutout-${unique}`} maskUnits="userSpaceOnUse">
              {/* Full solid white shape (visible) */}
              <rect x="0" y="0" width="16" height="16" fill="white" />
              {/* The check path in black = cutout */}

              <AnimatePresence>
                <motion.path
                  d="M5.5 8.5L7 10L10.5 6.5"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </AnimatePresence>
            </mask>
          </defs>
          <circle
            {...common}
            className="fill-current stroke-current"
            mask={`url(#cutout-${unique})`}
          />
        </>
      ) : (
        <>
          <circle {...common} className="stroke-current/25" />
          <motion.circle
            {...common}
            stroke="currentColor"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashOffset }}
            strokeLinecap="round"
            className="stroke-current"
            transform={`rotate(-90 ${halfSize} ${halfSize})`}
          />
        </>
      )}
    </svg>
  );
};
