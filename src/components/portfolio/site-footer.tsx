import React from "react";
import { EMAIL, GITHUB, LINKEDIN } from "@/content/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <span className="mr-auto">© {new Date().getFullYear()} Josh Kung</span>
        <a className="hover:text-foreground" href={`mailto:${EMAIL}`}>
          Email
        </a>
        <a className="hover:text-foreground" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="hover:text-foreground" href={GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
