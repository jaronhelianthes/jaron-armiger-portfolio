import React from "react";
import { Section, FramedBox, Crest, VideoEmbed, DropCap } from "@/components/shared";
import { IDENTITY } from "@/lib/constants";

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaron-armiger-607bbb24b/",
  },
  {
    label: "Email",
    href: "mailto:jaron@helianthes.studio",
  },
  {
    label: "GitHub",
    href: "https://github.com/HELIANTHES",
  },
] as const;

export default function ContactSection() {
  return (
    <Section id="contact">
      <FramedBox
        corners={["top-left", "bottom-right"]}
        className="py-16 md:py-24"
      >
        <div className="flex flex-col items-center text-center">
          {/* Closing words — clean, direct, unhurried */}
          <h2 className="mb-6 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
            Fw the vibe? Hmu 🤙
          </h2>
          <DropCap className="text-lg leading-relaxed tracking-wide mb-11">
            Building at the edge between the known and the unknown... to build with new technologies, new principles, new colors. That is the dream 🦉; 
          </DropCap>

          <FramedBox
            corners={["top-left", "top-right", "bottom-right", "bottom-left"]}
            className="mb-5 w-[777px]"
            frameSize={44}
          >
            <VideoEmbed
              url="/branding/contact.mov"
              title="CapConnect -- Demo"
            />
          </FramedBox>
          

          {/* Contact links — simple, quiet, like an address on the back
              of a letter */}
          {/* <div className="mb-16 flex flex-wrap items-center justify-center gap-6">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:opacity-70"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-fg)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div> */}

          {/* The Crest — small, a wax seal closing the letter */}
          <Crest size={177} className="mt-7 mb-7" />

          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            {IDENTITY.studioAccented}
          </p>
        </div>
      </FramedBox>
    </Section>
  );
}
