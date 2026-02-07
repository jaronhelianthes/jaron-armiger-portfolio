import React from "react";

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function ProjectHeader({
  title,
  subtitle,
  className = "",
}: ProjectHeaderProps) {
  return (
    <header className={`mb-12 ${className}`}>
      <h2 className="text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg tracking-wide" style={{ color: "var(--color-muted)" }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
