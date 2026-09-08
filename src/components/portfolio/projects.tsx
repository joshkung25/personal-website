import React from "react";
import Image from "next/image";
import Reveal from "@/components/portfolio/reveal";
import { PROJECTS } from "@/content/portfolio";
import { mono, paper, rule2, sectionLabel, SHELL, tag } from "@/components/portfolio/styles";

/** grid child helper — `--span` is read by .pf-grid in portfolio.css */
const cell = (span: number) => ({ ["--span"]: span }) as React.CSSProperties;

/** A void in the field. Carries a label so the gap reads as intent, not omission. */
function Filler({ span, label, note }: { span: number; label: string; note: string }) {
  return (
    <div className="pf-cell pf-filler" style={cell(span)} aria-hidden>
      <span style={{ color: "var(--pf-accent-400)" }}>{label}</span>
      <span>
        {note} <span className="pf-caret" style={{ height: 11, width: 6 }} />
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ maxWidth: SHELL, margin: "24px auto 0", padding: "52px 24px 20px", borderTop: rule2 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 14,
          marginBottom: 26,
          flexWrap: "wrap",
        }}
      >
        <h2 style={sectionLabel}>projects/</h2>
        <span style={{ height: 2, background: paper(22), flex: 1, minWidth: 30 }} />
        <span style={{ fontFamily: mono, fontSize: 12, color: paper(50) }}>
          {PROJECTS.length} repos
        </span>
      </div>

      <div className="pf-grid">
        {PROJECTS.map((p, i) => {
          const external = p.href?.startsWith("http") ?? false;
          // no link yet — the card still renders, it just isn't clickable
          const Card = p.href ? "a" : "div";
          return (
            <React.Fragment key={p.num}>
              {/* the void indents the second row out from under the lead card */}
              {i === 2 && <Filler span={4} label="next/" note="in development" />}
              <Reveal className="pf-cell" style={cell(p.span)}>
                <Card
                  className="pf-card"
                  href={p.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  style={{ height: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "9px 12px",
                      borderBottom: `1px solid ${paper(16)}`,
                      fontFamily: mono,
                      fontSize: 11,
                      color: paper(55),
                    }}
                  >
                    <span style={{ color: "var(--pf-accent-400)" }}>{p.num}</span>
                    <span>{p.slug}</span>
                    <span style={{ marginLeft: "auto", color: "var(--pf-accent-400)" }}>
                      {p.href ? "↗" : "wip"}
                    </span>
                  </div>
                  <div
                    className="grayscale"
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: p.ratio,
                      overflow: "hidden",
                      borderBottom: `1px solid ${paper(16)}`,
                    }}
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 860px) 100vw, 640px"
                      style={{ objectFit: "cover", objectPosition: p.focus ?? "top center" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "16px 14px 18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 10,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "var(--pf-accent-400)",
                      }}
                    >
                      {p.kind}
                    </div>
                    <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.08, letterSpacing: "-.02em" }}>
                      {p.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: paper(68), flex: 1 }}>
                      {p.body}
                    </p>
                    {p.stack.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 2 }}>
                        {p.stack.map((s) => (
                          <span key={s} style={tag}>
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </Reveal>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
