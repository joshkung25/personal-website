import React from "react";
import Link from "next/link";
import { EMAIL, GITHUB, LINKEDIN } from "@/content/portfolio";
import { mono, paper, rule2, SHELL } from "@/components/portfolio/styles";

export default function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "color-mix(in srgb, #171514 88%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: rule2,
      }}
    >
      <div
        style={{
          maxWidth: SHELL,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          className="pf-toplink"
          style={{ fontFamily: mono, fontSize: 13, color: paper(60), marginRight: "auto" }}
        >
          josh@kung<span style={{ color: "var(--pf-accent-400)" }}> ~/portfolio</span> $
        </Link>
        <nav
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            fontFamily: mono,
            fontSize: 12,
          }}
        >
          <Link className="pf-toplink" href="/#projects">
            Projects
          </Link>
          <Link className="pf-toplink" href="/#experience">
            Experience
          </Link>
          <a className="pf-toplink" href={`mailto:${EMAIL}`}>
            Email
          </a>
          <a className="pf-toplink" href={GITHUB} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="pf-toplink" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
