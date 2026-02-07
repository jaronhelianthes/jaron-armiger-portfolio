import React from "react";
import Image from "next/image";
import { BRAND_ASSETS } from "@/lib/constants";

type CornerPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-middle"
  | "bottom-middle";

interface FramedBoxProps {
  children: React.ReactNode;
  corners?: CornerPosition[];
  className?: string;
  frameSize?: number;
}

const CORNER_MAP: Record<CornerPosition, { src: string; style: React.CSSProperties }> = {
  "top-left": {
    src: BRAND_ASSETS.frame.topLeft,
    style: { top: -12, left: -12 },
  },
  "top-right": {
    src: BRAND_ASSETS.frame.topRight,
    style: { top: -12, right: -12 },
  },
  "bottom-left": {
    src: BRAND_ASSETS.frame.bottomLeft,
    style: { bottom: -12, left: -12 },
  },
  "bottom-right": {
    src: BRAND_ASSETS.frame.bottomRight,
    style: { bottom: -12, right: -12 },
  },
  "top-middle": {
    src: BRAND_ASSETS.frame.topMiddle,
    style: { top: -12, left: "50%", transform: "translateX(-50%)" },
  },
  "bottom-middle": {
    src: BRAND_ASSETS.frame.bottomMiddle,
    style: { bottom: -12, left: "50%", transform: "translateX(-50%)" },
  },
};

export default function FramedBox({
  children,
  corners = ["top-left", "bottom-right"],
  className = "",
  frameSize = 80,
}: FramedBoxProps) {
  return (
    <div className={`relative ${className}`}>
      {corners.map((corner) => {
        const config = CORNER_MAP[corner];
        return (
          <div
            key={corner}
            className="pointer-events-none absolute z-10"
            style={{
              ...config.style,
              width: frameSize,
              height: frameSize,
            }}
          >
            <Image
              src={config.src}
              alt=""
              width={frameSize}
              height={frameSize}
              className="h-full w-full object-contain"
              aria-hidden="true"
              style={{ 
                filter: `drop-shadow(${corner.includes('left') ? '8px' : '-8px'} ${corner.includes('bottom') ? '-8px' : '8px'} 2px rgba(0, 0, 0, 0.5))` 
              }}
            />
          </div>
        );
      })}
      <div className="relative z-0">{children}</div>
    </div>
  );
}
