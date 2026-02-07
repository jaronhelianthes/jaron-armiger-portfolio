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

const project = PROJECTS[3];

export default function CarvizSection() {
  return (
    <Section id="carviz">
      {/* --- Header --- */}
      <ProjectHeader title={project.title} subtitle="Chief AI Officer" />

      {/* --- Opening prose --- */}
      <div className="mb-20 max-w-2xl">
        <DropCap className="text-lg leading-relaxed tracking-wide">
          Some men build machines. Others build the teams that build the machines. At Carviz, Jaron did both — and the distinction mattered less than the outcome: cameras that could see what a trained mechanic sees, and say it plainly.
        </DropCap>
      </div>

      {/* --- Hero image --- */}
      <FramedBox corners={["top-left", "bottom-right"]} className="mb-20">
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{
            aspectRatio: "16 / 9",
            backgroundColor: "var(--color-accent-cream)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Image
            src={project.imageUrl}
            alt="Carviz — automated vehicle inspection system"
            fill
            className="object-cover"
          />
        </div>
      </FramedBox>

      {/* --- The leadership story --- */}
      <div className="mx-auto mb-20 max-w-3xl">
        <h3
          className="mb-8 text-2xl font-light tracking-tight"
          style={{ color: "var(--color-fg)" }}
        >
          The Work
        </h3>

        <p
          className="text-lg leading-relaxed tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          As Chief AI Officer, he set the technical direction for the entire computer vision pipeline. The problem was real and immediate: vehicles come in damaged, and someone has to say where, and how badly, and what it will cost. For a long time that someone was a person with a clipboard. Carviz made it a camera with a brain.
        </p>

        <p
          className="mt-6 text-lg leading-relaxed tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          Deep learning models trained on thousands of inspections. Dents, scratches, hail damage, tire wear — the system catalogued them with a precision no human eye could sustain across a hundred cars in a day. Not because the human eye is weak, but because it is human, and humans tire, and tired eyes miss things.
        </p>
      </div>

      {/* --- Demo video --- */}
      <FramedBox corners={["top-right"]} className="mb-20">
        <VideoEmbed url={project.videoUrl} title="Carviz — Automated Inspection Demo" />
      </FramedBox>

      {/* --- Leadership detail --- */}
      <div className="mx-auto mb-20 grid max-w-5xl gap-16 md:grid-cols-2">
        <div>
          <h3
            className="mb-6 text-2xl font-light tracking-tight"
            style={{ color: "var(--color-fg)" }}
          >
            The Leadership
          </h3>

          <DropCap className="text-lg leading-relaxed tracking-wide">
            Leadership at a startup is not a title on a door. It is a daily act. Jaron directed the AI team, shaped the product roadmap, and made the hard calls about what to build and what to leave behind. He hired the engineers, reviewed the models, and sat in the rooms where the business met the technology.
          </DropCap>
        </div>

        <div>
          <h3
            className="mb-6 text-2xl font-light tracking-tight"
            style={{ color: "var(--color-fg)" }}
          >
            The Vision
          </h3>

          <p
            className="text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            The vision was straightforward in the way that difficult things often are: take the inspection process, which was slow and subjective and expensive, and make it fast and consistent and reliable. Not by removing people from the equation, but by giving them better instruments.
          </p>

          <p
            className="mt-6 text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            A camera does not replace the mechanic. It sees what the mechanic would see, and it remembers every time, and it does not blink.
          </p>
        </div>
      </div>

      {/* --- Second image placeholder --- */}
      <FramedBox corners={["bottom-left"]} className="mb-20">
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{
            aspectRatio: "16 / 9",
            backgroundColor: "var(--color-accent-cream)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Image
            src="/placeholder-carviz-detail.jpg"
            alt="Carviz — computer vision damage detection detail"
            fill
            className="object-cover"
          />
        </div>
      </FramedBox>

      {/* --- Closing + tech --- */}
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-lg leading-relaxed tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          He built the thing that sees. And in building it, he learned what it means to lead — not from above, but from inside the work itself.
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
