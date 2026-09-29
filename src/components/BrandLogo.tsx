import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * Lokin Labs — Interlocking L monogram mark.
 *
 * Two L-shapes rotated 180° of each other, drawn with even-odd fill so their
 * overlapping corners appear transparent, creating a "linked / lokin" weave.
 *
 * Grid: 24×24. Bar width: 6 units.
 *   L1 (bottom-left L): vertical bar x=3–9, horizontal bar y=15–21
 *   L2 (top-right L):   vertical bar x=15–21, horizontal bar y=3–9
 * Overlapping corners (where the two weave through each other):
 *   top-left  (3–9, 3–9)   → even-odd = transparent
 *   bottom-right (15–21, 15–21) → even-odd = transparent
 */
export function BrandLogo({
  size = 28,
  className = "",
  color = "white",
}: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none shrink-0 ${className}`}
      aria-label="Lokin Labs logo mark"
    >
      <path
        /* L1: down the left, across the bottom */
        /* L2: up the right, across the top (180° rotation of L1) */
        d="M3 3 L9 3 L9 15 L21 15 L21 21 L3 21 Z
           M21 21 L15 21 L15 9 L3 9 L3 3 L21 3 Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
