import React from "react";
import Image from "next/image";
import {
  Section,
  FramedBox,
  ProjectHeader,
  VideoEmbed,
  DropCap,
} from "@/components/shared";
import { PROJECTS } from "@/lib/constants";

const project = PROJECTS[2];

export default function ProspectorSection() {
  return (
    <Section id="prospector">
      {/* --- Header --- */}
      <ProjectHeader title={project.title} subtitle="Geo-Mapping Platform for Salespeople" />

      {/* --- Opening prose --- */}
      <div className="mb-20 max-w-2xl">
        <FramedBox
          corners={["top-left", "bottom-right"]}
          className="mb-5"
          frameSize={64}
        >
          <VideoEmbed
            url="/demos/Prospector/login.mp4"
            title="CapConnect -- Demo"
          />
        </FramedBox>
        <DropCap className="text-lg leading-relaxed tracking-wide">
          There was a time when a man walked into new country with nothing but his eyes and his nerve. He read the land the way you read a face — the color of the dirt, the bend of the creek, the way the grass lay down after rain. He knew where the gold was before he turned a single stone.
        </DropCap>
      </div>

      {/* --- Hero image placeholder --- */}
      <FramedBox corners={["top-right", "bottom-left"]} className="mb-20">
        <VideoEmbed url="/demos/Prospector/app_use.mp4" title="Prospector — Platform Demo" />
      </FramedBox>

      {/* --- The story continues --- */}
      <div className="mx-auto mb-20 grid max-w-5xl gap-16 md:grid-cols-2">
        <div>
          <p
            className="text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            The salespeople are the prospectors now. They drive the same roads, knock the same doors, and stake their claims in territories drawn not on parchment but on screens. The gold is still there. It just takes a different kind of eye.
          </p>

          <p
            className="mt-6 text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            Prospector is the tool that gives them that eye. A geo-mapping platform that lays the territory bare — every lead, every account, every stretch of unclaimed ground — and lets a rep see what is already there, waiting beneath the surface.
          </p>
        </div>

        <div>
          <p
            className="text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            The Gold Rush theme is not decoration. It is the truth of the thing. Sales is prospecting. Always has been. The platform leans into that honestly — the language, the interface, the way it frames the work. Because when you call a thing what it is, people understand it in their bones.
          </p>

          <p
            className="mt-6 text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            Cold territory becomes warm ground. A blank map fills with meaning. And the rep who once drove blind now drives with purpose, the way the old prospectors followed the creek beds west.
          </p>
        </div>
      </div>


      {/* --- How it works --- */}
      <div className="mx-auto mb-20 max-w-3xl">
        <h3
          className="mb-8 text-2xl font-light tracking-tight"
          style={{ color: "var(--color-fg)" }}
        >
          The Method
        </h3>

        <DropCap className="text-lg leading-relaxed tracking-wide">
          You draw the territory. The platform fills it with everything that matters — accounts, contacts, activity history, open pipeline. It layers data the way a geologist layers a survey map: what is on the surface, what is just underneath, and what runs deep.
        </DropCap>

        <p
          className="mt-6 text-lg leading-relaxed tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          Reps plan their routes. Managers see the whole field. And the data that used to live in spreadsheets — scattered, inert, half-forgotten — now lives where it belongs: on the map, in the land, close to the work.
        </p>
      </div>

      {/* --- Second image placeholder --- */}
      {/* <FramedBox corners={["top-left"]} className="mb-20">
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{
            aspectRatio: "16 / 9",
            backgroundColor: "var(--color-accent-cream)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Image
            src="/placeholder-prospector-detail.jpg"
            alt="Prospector platform — territory detail view"
            fill
            className="object-cover"
          />
        </div>
      </FramedBox> */}

      {/* --- Closing + tech --- */}
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-lg leading-relaxed tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          A man needs good tools and honest ground. Prospector gives both.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-4 py-1.5 text-xs tracking-widest uppercase"
              style={{
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
