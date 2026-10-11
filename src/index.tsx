"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

const defaultColors = [
  "#7c3aed", // violet
  "#0055A4", // French blue
  "#FA0C00", // red
  "#FFCE00", // gold
  "#008C45", // Italian green
  "#AA151B", // Spanish red
  "#21468B", // Dutch blue
  "#006600", // Portuguese green
  "#006AA7", // Swedish blue
  "#a78bfa", // light violet
];

const generatePath = (yBase: number, amplitude: number, seed: number) => {
  const points: string[] = [];
  for (let x = -100; x <= 1500; x += 200) {
    const y = yBase + Math.sin(x / 250 + seed) * amplitude;
    points.push(`${x} ${y.toFixed(0)}`);
  }
  return `M ${points.join(" L ")}`;
};

export interface BackgroundRainbowLinesProps {
  children?: React.ReactNode;
  className?: string;
  /** Background color behind the lines. Defaults to near-black. */
  backgroundColor?: string;
  /** Custom color palette for the lines. Defaults to an EU-flag-inspired palette. */
  colors?: string[];
  /** Number of animated lines. Defaults to 24. */
  lineCount?: number;
}

export const BackgroundRainbowLines = ({
  children,
  className,
  backgroundColor = "#060608",
  colors = defaultColors,
  lineCount = 24,
}: BackgroundRainbowLinesProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden",
        className
      )}
      // Inline layout so the component also works without Tailwind CSS.
      style={{ position: "relative", overflow: "hidden", backgroundColor }}
    >
      <RainbowSVG colors={colors} lineCount={lineCount} />
      {children}
    </div>
  );
};

const RainbowSVG = ({ colors, lineCount }: { colors: string[]; lineCount: number }) => {
  // Unique ids, so several instances on one page don't share gradients.
  const uid = React.useId().replace(/:/g, "");
  const reduceMotion = useReducedMotion();

  const lines = React.useMemo(
    () =>
      Array.from({ length: lineCount }).map((_, i) => ({
        d: generatePath(i * 30 - 60, 40 + (i % 5) * 8, i * 0.7),
        color: colors[i % colors.length],
        delay: (i % 8) * 0.4,
        duration: 6 + (i % 4),
      })),
    [colors, lineCount]
  );

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      viewBox="0 0 1400 700"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {lines.map((line, i) => (
          <linearGradient key={i} id={`brl-${uid}-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={line.color} stopOpacity="0" />
            <stop offset="50%" stopColor={line.color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={line.color} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {lines.map((line, i) =>
        reduceMotion ? (
          // Respect "reduce motion": draw the lines once, without animation.
          <path key={i} d={line.d} stroke={`url(#brl-${uid}-${i})`} strokeWidth={1} opacity={0.6} />
        ) : (
          <motion.path
            key={i}
            d={line.d}
            stroke={`url(#brl-${uid}-${i})`}
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
            transition={{ duration: line.duration, repeat: Infinity, ease: "linear", delay: line.delay }}
          />
        )
      )}
    </svg>
  );
};
