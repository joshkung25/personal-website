import React from "react";
import { EMAIL } from "@/content/portfolio";
import { mono, paper, rule2, SHELL } from "@/components/portfolio/styles";

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: rule2, marginTop: 32 }}>
      <div
        style={{
          maxWidth: SHELL,
          margin: "0 auto",
          padding: "20px 24px 30px",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          alignItems: "baseline",
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color: paper(45),
        }}
      >
        <span>exit 0 — © {new Date().getFullYear()} josh kung</span>
        <span style={{ marginLeft: "auto" }}>
          <a
            href={`mailto:${EMAIL}`}
            style={{ color: "var(--pf-accent-400)", textDecoration: "none" }}
          >
            {EMAIL}
          </a>
        </span>
      </div>
    </footer>
  );
}
