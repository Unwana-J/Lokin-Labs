import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  size?: number;
  className?: string;
  variant?: "olive" | "white";
}

export function BrandLogo({
  size = 28,
  className = "",
  variant = "olive",
}: BrandLogoProps) {
  const src =
    variant === "white"
      ? "/brand/lokin-clover-white.png"
      : "/brand/lokin-clover-olive.png";

  return (
    <Image
      src={src}
      alt="Lokin Labs Logo"
      width={size}
      height={size}
      className={`inline-block select-none ${className}`}
      priority
    />
  );
}
