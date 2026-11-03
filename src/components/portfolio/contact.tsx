import React from "react";
import Section from "@/components/portfolio/section";
import ContactForm from "@/components/portfolio/contact-form";
import CopyEmail from "@/components/portfolio/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/icons";
import { GITHUB, LINKEDIN } from "@/content/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="flex flex-col rounded-[28px] bg-primary p-7 text-primary-foreground sm:p-8">
          <p className="font-display text-2xl leading-snug font-medium tracking-tight">
            Hiring, building something, or just want to talk shop? I read everything that lands in
            my inbox.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/65">
            Send a note with the form and it goes straight to my email. I usually reply within a
            day or two.
          </p>
          <div className="mt-8 flex flex-col gap-2 lg:mt-auto lg:pt-10">
            <CopyEmail />
            <div className="grid grid-cols-2 gap-2">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 text-[15px] transition-colors outline-none hover:bg-white/15 focus-visible:ring-[3px] focus-visible:ring-white/40"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 text-[15px] transition-colors outline-none hover:bg-white/15 focus-visible:ring-[3px] focus-visible:ring-white/40"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-[28px] border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
