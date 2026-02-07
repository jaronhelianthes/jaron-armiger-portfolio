import React from "react";
import Image from "next/image";
import { BRAND_ASSETS } from "@/lib/constants";

interface CrestProps {
  size?: number;
  className?: string;
}

export default function Crest({ size = 48, className = "" }: CrestProps) {
  return (
    <Image
      src={BRAND_ASSETS.crest}
      alt="Helianthes Studio crest"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
      style={{ filter: 'drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.5))' }}
    />
  );
}
