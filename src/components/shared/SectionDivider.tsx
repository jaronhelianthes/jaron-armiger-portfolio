import React from "react";
import Image from "next/image";
import { BRAND_ASSETS } from "@/lib/constants";

interface SectionDividerProps {
  variant?: "ornament" | "line";
  className?: string;
}

export default function SectionDivider({
  variant = "ornament",
  className = "",
}: SectionDividerProps) {
  if (variant === "line") {
    return (
      <div className={`flex w-full items-center justify-center py-12 ${className}`}>
        <div
          className="h-px w-24"
          style={{ backgroundColor: "var(--color-border)" }}
        />
      </div>
    );
  }

  return (
    <div className={`flex w-full items-center justify-center py-12 ${className}`}>
      <div className="relative h-16 w-[177px]">
        <Image
          src={BRAND_ASSETS.frame.topMiddle}
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
