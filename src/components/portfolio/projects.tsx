import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/portfolio/section";
import Tag from "@/components/portfolio/tag";
import { PROJECTS } from "@/content/portfolio";
import type { Project } from "@/types/portfolio";

function ProjectCard({ p }: { p: Project }) {
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={p.img}
          alt=""
          fill
          sizes="(min-width: 640px) 480px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          style={{ objectPosition: p.focus ?? "top center" }}
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{p.kind}</p>
          </div>
          {p.href ? (
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="size-4" />
            </span>
          ) : (
            <span className="shrink-0 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
              In development
            </span>
          )}
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{p.body}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </>
  );

  const shell =
    "group flex h-full flex-col rounded-[28px] border bg-card p-3 outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-ring/50";

  return p.href ? (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title}, opens site`}
      className={`${shell} hover:shadow-[0_16px_40px_-20px_rgba(20,22,27,0.25)]`}
    >
      {body}
    </a>
  ) : (
    <div className={shell}>{body}</div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Things I've built and shipped, from AI tools to brand sites."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <li key={p.title}>
            <ProjectCard p={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
