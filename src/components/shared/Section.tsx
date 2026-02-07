import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  fullHeight = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative flex w-full flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24 ${
        fullHeight ? "min-h-screen" : ""
      } ${className}`}
    >
      <div className="w-full" style={{ maxWidth: "var(--max-width-content)" }}>
        {children}
      </div>
    </section>
  );
}
