import React from "react";
import Image from "next/image";
import { Section, FramedBox, DropCap } from "@/components/shared";

export default function BerkeleySection() {
  return (
    <Section id="berkeley">
      <FramedBox
        corners={["top-right", "bottom-left"]}
        className="py-16 md:py-24"
        frameSize={88}
      >
        {/* Section heading — the origin, the weight of it */}
        <header className="mb-14">
          <h2 className="text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
            Berkeley
          </h2>
          <p
            className="mt-4 text-sm tracking-widest uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            Origin Story
          </p>
        </header>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column — the story */}
          <div>
            {/* [BERKELEY_COPY_TBD] — Jaron's own words will replace this.
                The following is a Steinbeck-voice draft of the arc:
                conventional success -> Berkeley -> creative discovery ->
                dropout -> self-taught -> Helianthes Studio */}

            <DropCap className="text-lg leading-relaxed md:text-xl">
              {`He arrived at Berkeley the way most arrive at places they are meant to leave — with certainty. The path had been conventional and the grades had been good and the future had been the kind of future that parents describe at dinner parties with satisfaction. [BERKELEY_COPY_TBD]`}
            </DropCap>

            <p
              className="mt-8 text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-muted)" }}
            >
              But Berkeley is a city that does not let a man keep the story he
              brought with him. Somewhere between the lectures and the late
              nights he wandered into the creative departments — film,
              design, the strange territories where logic bends toward
              feeling. And something in him answered. Not loudly. The way a
              tuning fork answers a struck note. [BERKELEY_COPY_TBD]
            </p>

            <p
              className="mt-8 text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-muted)" }}
            >
              He dropped out. That is the plain way to say it, and there is no
              decoration that makes it easier. He left the sure thing for the
              unsure thing, which is the oldest wager a young person can make.
              But he did not leave empty. He left with a question that would
              take years to answer: what happens when you build technology the
              way you would compose a film — with precision, with emotional
              intent, with the understanding that a tool can also be a work
              of art? [BERKELEY_COPY_TBD]
            </p>

            <p
              className="mt-8 text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-muted)" }}
            >
              He taught himself to code the way earlier men taught themselves
              to build — by building. There was no curriculum, no degree at
              the end, only the work and what it demanded of him. The
              languages came one by one: Python, then TypeScript, then the
              frameworks and the cloud architectures and the machine learning
              pipelines that would become his trade. Each one was a tool
              picked up because the thing he was making required it.
              [BERKELEY_COPY_TBD]
            </p>

            <p
              className="mt-8 text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-muted)" }}
            >
              In time the work became the studio, and the studio became
              H&eacute;lianth&egrave;s — named for the sunflower, which turns
              its face toward the light not out of decision but out of nature.
              The creative eye he discovered at Berkeley never left. It is
              there in every interface he designs, every architecture he draws,
              every system that carries, beneath its engineering, the unmistakable
              mark of someone who builds not only to function, but to resonate.
              [BERKELEY_COPY_TBD]
            </p>
          </div>

          {/* Right column — placeholder image */}
          <div className="flex items-start justify-center">
            <div
              className="relative w-full overflow-hidden rounded-sm"
              style={{
                aspectRatio: "3 / 4",
                backgroundColor: "var(--color-accent-cream)",
                border: "1px solid var(--color-border)",
                maxWidth: 480,
              }}
            >
              <Image
                src="/placeholder-berkeley.jpg"
                alt="Berkeley — origin story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              {/* Fallback when image doesn't load */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span
                  className="text-sm tracking-wide"
                  style={{ color: "var(--color-muted)" }}
                >
                  [ Berkeley imagery placeholder ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </FramedBox>
    </Section>
  );
}
