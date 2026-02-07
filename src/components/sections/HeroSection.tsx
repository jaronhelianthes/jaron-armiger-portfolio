import React from "react";
import { Section, FramedBox, Crest, DropCap } from "@/components/shared";
import { IDENTITY } from "@/lib/constants";
import Image from "next/image";
import VideoEmbed from "@/components/shared/VideoEmbed";
import Link from "next/link";
import { Link2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <Section id="hero" className="flex items-center justify-center">
      <FramedBox
        corners={["top-left", "top-right", "bottom-left", "bottom-right"]}
        className="py-20 md:py-28 lg:py-36 mt-11"
        frameSize={96}
      >
        <div className="flex flex-col items-center text-center">
          {/* The Crest — coat of arms, the first thing you see */}
          {/* <Crest size={100} className="mb-14" /> */}
          <div className="shadow-xl rounded-lg  mb-5">
            <Image
              src="/prof_square.jpg"
              alt="Helianthes Studio crest"
              width={100}
              height={100}
              className="object-contain rounded-lg shadow-xl drop-shadow-xl"
              style={{ filter: 'drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.5))' }}
              priority
            />
          </div>

          {/* Name — large, unhurried, like a name carved in stone */}
          <h1 className="mb-4 text-3xl font-light tracking-tight md:text-7xl lg:text-8xl font-bold">
            {IDENTITY.name}
          </h1>

          {/* Headline — the quiet subtitle beneath the name */}
          <p
            className="mb-16 text-base tracking-widest uppercase md:text-lg"
            style={{ color: "var(--color-muted)" }}
          >
            Founder @ {IDENTITY.studioAccented}
          </p>

          {/* <Image
            src={"/branding/Home - Desktop.png"}
            alt="Librarian interface preview"
            className="object-cover mb-12"
            width={777}
            height={777}
          /> */}
          <Link
            href="https://www.helianthes.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-row items-center transition-transform duration-300 ease-out hover:skew-x-[-55deg]"
          >
            <Link2 color="#10735e" size={23} className="mr-2" />
            <span className="text-[#10735e]">helianthes.studio</span>
          </Link>

            <VideoEmbed
              url="/branding/helianthes_home.mp4"
              title="Librarian -- Demo"
              className="w-[500px] mb-40"
            />
          

          {/* Philosophy — the opening passage, illuminated */}
          <div className="mx-auto max-w-2xl text-left">
            <DropCap className="text-lg leading-relaxed md:text-xl">
              {IDENTITY.bio}
            </DropCap>
          </div>

          {/* Creative philosophy — a second, quieter breath */}
          <div className="mx-auto mt-12 max-w-2xl text-left">
            <p
              className="text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-muted)" }}
            >
              {IDENTITY.philosophy}
            </p>
          </div>
        </div>
      </FramedBox>
    </Section>
  );
}
