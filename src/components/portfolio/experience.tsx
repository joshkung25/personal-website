import React from "react";
import Image from "next/image";
import Section from "@/components/portfolio/section";
import Tag from "@/components/portfolio/tag";
import { ROLES } from "@/content/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="rounded-[28px] border bg-card px-5 py-2 sm:px-8">
        {ROLES.map((r, i) => {
          const last = i === ROLES.length - 1;
          return (
            <li key={r.org} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 py-6 sm:gap-x-6">
              {/* timeline spine, runs from this logo to the next */}
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute top-[4.75rem] bottom-[-1.5rem] left-6 w-px -translate-x-1/2 bg-border"
                />
              )}
              <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-2xl border bg-white">
                <Image src={r.logo} alt={`${r.org} logo`} width={28} height={28} className="size-7 object-contain" />
              </span>

              <div className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{r.org}</h3>
                  <p className="text-sm text-muted-foreground tabular-nums">{r.when}</p>
                </div>
                <p className="mt-0.5 text-[15px] text-muted-foreground">
                  {r.role}, {r.where}
                </p>
                <ul className="mt-4 flex max-w-2xl flex-col gap-2.5">
                  {r.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-[15px] leading-relaxed text-foreground/80 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-brand/60"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                {r.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
