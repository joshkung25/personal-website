import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HEADSHOT } from "@/content/portfolio";

const LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center gap-2 rounded-full border bg-card/80 py-1.5 pr-1.5 pl-2 shadow-[0_1px_2px_rgba(20,22,27,0.04),0_8px_24px_-12px_rgba(20,22,27,0.12)] backdrop-blur-md">
        <Link
          href="/"
          className="mr-auto flex items-center gap-2.5 rounded-full pr-3 text-[15px] font-medium outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <span className="relative size-8 overflow-hidden rounded-full bg-muted">
            <Image src={HEADSHOT} alt="" fill sizes="32px" className="object-cover" />
          </span>
          Josh Kung
        </Link>
        <nav aria-label="Sections" className="hidden items-center sm:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="h-9 rounded-full px-4">
          <Link href="/#contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}
