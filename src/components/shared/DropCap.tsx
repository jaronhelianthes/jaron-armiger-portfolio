import React from "react";

interface DropCapProps {
  children: string;
  className?: string;
}

export default function DropCap({ children, className = "" }: DropCapProps) {
  if (!children || children.length === 0) return null;

  const firstLetter = children.charAt(0);
  const remainingText = children.slice(1);

  return (
    <p className={`${className}`} style={{ color: "var(--color-muted)" }}>
      <span
        className="float-left mr-3 mt-1 leading-none"
        style={{
          fontFamily: "var(--font-cinzel-decorative), serif",
          fontSize: "4.5rem",
          lineHeight: "0.8",
          color: "var(--color-fg)",
          fontWeight: 700,
          paddingTop: "0.05em",
        }}
      >
        {firstLetter}
      </span>
      {remainingText}
    </p>
  );
}
