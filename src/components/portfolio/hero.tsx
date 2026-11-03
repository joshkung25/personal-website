import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/icons";
import { GITHUB, HEADSHOT, INTRO, LINKEDIN, LOCATION } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="hero-in flex flex-col items-center pt-16 text-center sm:pt-24">
      <div className="relative size-32 overflow-hidden rounded-full bg-muted ring-[6px] ring-card shadow-[0_12px_32px_-12px_rgba(20,22,27,0.28)] sm:size-36">
        <Image
          src={HEADSHOT}
          alt="Josh Kung"
          fill
          sizes="144px"
          priority
          className="object-cover"
        />
      </div>

      <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.035em] sm:text-7xl">
        Hi, I&apos;m Josh.
      </h1>

      <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-muted-foreground sm:text-lg">
        {INTRO}
      </p>

      <div className="mt-9 flex flex-col items-center gap-4">
        <div className="grid w-full max-w-xs grid-cols-2 gap-2.5 sm:flex sm:max-w-none sm:justify-center">
          <Button asChild size="lg" className="col-span-2 h-11 rounded-full px-6 text-[15px]">
            <Link href="/#contact">
              <Mail />
              Contact me
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 rounded-full bg-card px-5 text-[15px]">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="size-4 text-[#0A66C2]" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 rounded-full bg-card px-5 text-[15px]">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </Button>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
          {LOCATION}, open to full-time roles from January 2027
        </p>
      </div>
    </section>
  );
}
