import React from "react";
import Section from "@/components/portfolio/section";
import Tag from "@/components/portfolio/tag";
import { SKILLS } from "@/content/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="rounded-[28px] border bg-card">
        <dl className="divide-y">
          {SKILLS.map((g) => (
            <div
              key={g.label}
              className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8"
            >
              <dt className="text-sm font-medium text-muted-foreground sm:w-36 sm:shrink-0">
                {g.label}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s} className="px-3.5 py-1.5 text-sm">
                    {s}
                  </Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
