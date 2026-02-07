import React from "react";
import Image from "next/image";
import Section from "@/components/shared/Section";
import ProjectHeader from "@/components/shared/ProjectHeader";
import FramedBox from "@/components/shared/FramedBox";
import VideoEmbed from "@/components/shared/VideoEmbed";
import DropCap from "@/components/shared/DropCap";
import { PROJECTS } from "@/lib/constants";

const project = PROJECTS[0];

export default function LibrarianSection() {
  return (
    <Section id="librarian">
      {/* --- Header --- */}
      <ProjectHeader
        title={project.title}
        subtitle="Deal Intelligence for the Modern Fund"
      />


      {/* --- Primary Content Block --- */}
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left column: narrative */}
        <div className="flex flex-col justify-center">
          <FramedBox
            corners={["top-left", "top-right", "bottom-right"]}
            className="p-8 md:p-12"
          >
            <DropCap className="text-lg leading-relaxed md:text-xl">
              There is a room that every fund manager knows. It is full of documents -- pitch decks stacked like cordwood, cap tables dense with figures, legal files bound and unread, spreadsheets that stretch past the edge of understanding. The room is always growing. Nobody has time to read it all, and yet every answer a person needs sits somewhere inside it, waiting quietly to be found.
            </DropCap>

            <p
              className="mt-8 text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--color-muted)" }}
            >
              Librarian connects to that room. It takes the whole data room -- every document, every page, every buried clause -- and makes it something you can simply ask questions about, in plain English, as naturally as you would ask a colleague who happened to have read everything.
            </p>

            <p
              className="mt-8 text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--color-muted)" }}
            >
              Ask it which portfolio companies raised a Series A in the last year. Ask it which files hold the details on IP ownership or convertible notes. It will find the answers, cite the original documents, show you the links, and if you need it, generate a detailed memo right there. It does not guess. It reads.
            </p>
          </FramedBox>
        </div>

        {/* Right column: video + image */}
        <div className="flex flex-col gap-10">
          <FramedBox
            corners={["top-right", "bottom-left"]}
            frameSize={64}
          >
            <VideoEmbed
              url="/demos/Librarian/promo_AAA.mp4"
              title="Librarian -- Demo"
            />
          </FramedBox>
          <FramedBox
            corners={["top-left", "bottom-right"]}
            frameSize={64}
          >
            <VideoEmbed
              url="/demos/Librarian/part_i.mp4"
              title="Librarian -- Demo"
            />
          </FramedBox>
          <FramedBox
            corners={["top-right", "bottom-left"]}
            frameSize={64}
          >
            <VideoEmbed
              url="/demos/Librarian/part_ii.mp4"
              title="Librarian -- Demo"
            />
          </FramedBox>

          {/* <div
            className="relative overflow-hidden rounded-sm"
            style={{
              aspectRatio: "4 / 3",
              backgroundColor: "var(--color-accent-cream)",
              border: "1px solid var(--color-border)",
            }}
          >
            <Image
              src={project.imageUrl}
              alt="Librarian interface preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div> */}
        </div>
      </div>

      {/* --- Secondary Block: Use Cases + Tech --- */}
      <div className="mt-24 grid gap-16 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <DropCap className="text-lg leading-relaxed md:text-xl">
            It is built for the people who do the real work of capital -- the analysts running diligence at midnight, the acquirers sorting through a hundred targets, the corp dev teams at public companies managing pipelines that never stop growing. Librarian gives them back the hours the documents would have taken, and returns something better than speed: certainty.
          </DropCap>
        </div>

        <div className="flex flex-col justify-end">
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--color-muted)" }}
          >
            Built with
          </p>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            {project.tech.join(" / ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
