import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
  color?: string;
}

export function BrandLogo({
  size = 28,
  className = "",
  color = "currentColor",
}: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lokin Labs Logo"
    >
      {/* 4-Petal Interlocking Clover Mark */}
      <g
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top Petal */}
        <path d="M 50 44 C 40 34 32 20 40 12 C 48 4 50 16 50 24 C 50 16 52 4 60 12 C 68 20 60 34 50 44 Z" />

        {/* Bottom Petal */}
        <path d="M 50 56 C 40 66 32 80 40 88 C 48 96 50 84 50 76 C 50 84 52 96 60 88 C 68 80 60 66 50 56 Z" />

        {/* Left Petal */}
        <path d="M 44 50 C 34 40 20 32 12 40 C 4 48 16 50 24 50 C 16 50 4 52 12 60 C 20 68 34 60 44 50 Z" />

        {/* Right Petal */}
        <path d="M 56 50 C 66 40 80 32 88 40 C 96 48 84 50 76 50 C 84 50 96 52 88 60 C 80 68 66 60 56 50 Z" />

        {/* Central Interlocking Square Knot */}
        <rect
          x="41"
          y="41"
          width="18"
          height="18"
          transform="rotate(45 50 50)"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
}
