import React from "react";
import Reveal from "@/components/portfolio/reveal";
import { ROLES } from "@/content/portfolio";
import { mono, paper, sectionLabel, SHELL } from "@/components/portfolio/styles";

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: SHELL, margin: "0 auto", padding: "56px 24px 24px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 14,
          marginBottom: 34,
          flexWrap: "wrap",
        }}
      >
        <h2 style={sectionLabel}>experience/</h2>
        <span style={{ height: 2, background: paper(22), flex: 1, minWidth: 30 }} />
      </div>

      {ROLES.map((r) => {
        const dot = r.accent ? "var(--pf-accent)" : paper(45);
        return (
          <Reveal key={r.org}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 0.34fr) 28px minmax(0, 1fr)",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  color: paper(55),
                  padding: "22px 12px 22px 0",
                  textAlign: "right",
                }}
              >
                {r.when}
                <div style={{ fontSize: 10.5, color: paper(35), marginTop: 3 }}>{r.sha}</div>
              </div>
              <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <span
                  style={{ position: "absolute", top: 0, bottom: 0, width: 2, background: paper(20) }}
                />
                <span
                  style={{
                    position: "relative",
                    marginTop: 26,
                    width: 13,
                    height: 13,
                    background: dot,
                    border: "2px solid #171514",
                    outline: `2px solid ${dot}`,
                    flex: "none",
                  }}
                />
              </div>
              <div style={{ padding: "18px 0 26px 22px" }}>
                <div className="pf-role" style={{ padding: "16px 16px 18px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 10,
                      flexWrap: "wrap",
                      marginBottom: 8,
                      minWidth: 0,
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 21,
                        lineHeight: 1.1,
                        overflowWrap: "anywhere",
                        minWidth: 0,
                      }}
                    >
                      {r.org}
                    </h4>
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: 11,
                        padding: "2px 8px",
                        border: "1px solid var(--pf-accent)",
                        color: "var(--pf-accent-400)",
                      }}
                    >
                      {r.role}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: paper(70) }}>
                    {r.body}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                    {r.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: mono,
                          fontSize: 10.5,
                          padding: "3px 7px",
                          background: paper(8),
                          color: paper(72),
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
