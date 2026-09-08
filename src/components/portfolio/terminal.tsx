"use client";

import React, { useEffect, useState } from "react";
import { TERM_FULL } from "@/content/portfolio";
import { mono, paper, rule1, rule2 } from "@/components/portfolio/styles";

/** whoami.sh — types itself out, unless the viewer asked for less motion. */
export default function Terminal() {
  const [typed, setTyped] = useState(TERM_FULL.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTyped(0);
    const id = window.setInterval(() => {
      setTyped((t) => {
        if (t >= TERM_FULL.length) {
          window.clearInterval(id);
          return t;
        }
        return Math.min(TERM_FULL[t] === "\n" ? t + 1 : t + 2, TERM_FULL.length);
      });
    }, 26);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div style={{ border: rule2, background: "var(--pf-ink-2)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 10px",
          borderBottom: rule1,
        }}
      >
        <span style={{ width: 9, height: 9, background: "var(--pf-accent)" }} />
        <span style={{ width: 9, height: 9, background: paper(30) }} />
        <span style={{ width: 9, height: 9, background: paper(30) }} />
        <span style={{ fontFamily: mono, fontSize: 11, color: paper(50), marginLeft: 6 }}>
          whoami.sh
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "16px 14px 20px",
          fontFamily: mono,
          fontSize: 12.5,
          lineHeight: 1.85,
          color: "#f3f2f2",
          whiteSpace: "pre-wrap",
          minHeight: 152,
        }}
      >
        {TERM_FULL.slice(0, typed)}
        <span className="pf-caret" />
      </pre>
    </div>
  );
}
