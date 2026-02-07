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

const project = PROJECTS[1];

export default function CapConnectSection() {
  return (
    <Section id="capconnect">
      {/* --- Header --- */}
      <ProjectHeader
        title={project.title}
        subtitle="Investor Discovery Through the Graph"
      />

      {/* --- Opening prose --- */}
      <div className="mb-20 max-w-2xl">
        <FramedBox
          corners={["top-left", "bottom-right"]}
          className="mb-5"
          frameSize={64}
        >
          <VideoEmbed
            url="/demos/CapConnect/i_dashboard_edit_ii.mp4"
            title="CapConnect -- Demo"
          />
        </FramedBox>
        <DropCap className="text-lg leading-relaxed tracking-wide">
          Capital has always moved along invisible lines -- old affiliations, shared tables, a handshake ten years back that nobody wrote down. The relationships between people, firms, and the investments that bind them form a vast, quiet network. Most of it stays hidden. CapConnect makes it visible.
        </DropCap>
        
      </div>

      <FramedBox corners={["top-left", "bottom-left"]} className="mb-20">
        <VideoEmbed url="/demos/CapConnect/Sequence_02_3.mp4" title="CapConnect — Platform Demo" />
      </FramedBox>

      {/* --- Hero image placeholder --- */}
      {/* <FramedBox corners={["top-right", "bottom-left"]} className="mb-20">
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{
            aspectRatio: "21 / 9",
            backgroundColor: "var(--color-accent-cream)",
            border: "1px solid var(--color-border)",
          }}
        >
          <Image
            src={project.imageUrl}
            alt="Prospector platform — territory map view"
            fill
            className="object-cover"
          />
        </div>
      </FramedBox> */}

      {/* --- The story continues --- */}
      <div className="mx-auto mb-20 grid max-w-5xl gap-16 md:grid-cols-2">
        <div>
          <p
            className="text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            Capital has always moved along invisible lines -- old affiliations, shared tables, a handshake ten years back that nobody wrote down. The relationships between people, firms, and the investments that bind them form a vast, quiet network. Most of it stays hidden. CapConnect makes it visible.
          </p>

          <p
            className="mt-6 text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            It is an investor discovery platform built on a hybrid of semantic search and graph reasoning. The system models people, firms, co-investments, and shared affiliations across two layers -- vector embeddings in Pinecone for meaning, and a Neo4j knowledge graph for structure. Requests move through a multi-agent LangGraph backend that knows when to search, when to traverse, and when to combine both.
          </p>
        </div>

        <div>
          <p
            className="text-lg leading-relaxed tracking-wide"
            style={{ color: "var(--color-muted)" }}
          >
            The result is precise. Investor matches grounded in real-world proximity. Warm introduction paths drawn from shared networks and thematic relevance. Not guesses -- maps. The kind of map a person could walk.
          </p>

        </div>
      </div>

      {/* --- Demo video --- */}
      {/* <FramedBox corners={["bottom-right"]} className="mb-20">
        <VideoEmbed url="/demos/CapConnect/Sequence 02_3.mp4" title="Prospector — Platform Demo" />
      </FramedBox> */}



      {/* --- Closing + tech --- */}
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-lg leading-relaxed tracking-wide"
          style={{ color: "var(--color-muted)" }}
        >
          CapConnect, your path to capital.
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
