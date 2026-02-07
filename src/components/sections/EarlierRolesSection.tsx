import React from "react";
import { Section, FramedBox, DropCap } from "@/components/shared";
import { EARLIER_ROLES } from "@/lib/constants";

export default function EarlierRolesSection() {
  return (
    <Section id="earlier-roles">
      <FramedBox corners={["top-left"]} className="py-16 md:py-20">
        {/* Section heading — understated, a nod rather than a declaration */}
        <header className="mb-12">
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">
            Earlier Roles
          </h2>
          <p
            className="mt-3 text-sm tracking-widest uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            CTO &amp; Founding Engineer
          </p>
        </header>

        {/* Body — dignified, brief, like the plaque beside a lesser-known
            painting that still deserves its wall */}
        <div className="max-w-2xl">
          <DropCap className="text-lg leading-relaxed">
            {`Before the studio bore its name, there were the proving grounds. ${EARLIER_ROLES.summary} Each venture was a draft of the thing to come — imperfect, necessary, honest in the way that early work always is. The code was written in rooms where the heat didn't always work, for companies that didn't always last. But the craft survived every one of them.`}
          </DropCap>

          <p
            className="mt-8 text-base leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            These were years of building from nothing — of standing up
            infrastructure on bare metal and bare budgets, of mentoring
            engineers who were, like him, learning the terrain by walking it.
            The startups rose and fell as startups do. What remained was the
            instinct: to build things that hold.
          </p>
        </div>
      </FramedBox>
    </Section>
  );
}
