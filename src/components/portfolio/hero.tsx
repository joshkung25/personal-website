import React from "react";
import Image from "next/image";
import Reveal from "@/components/portfolio/reveal";
import Terminal from "@/components/portfolio/terminal";
import { HEADSHOT } from "@/content/portfolio";
import { mono, paper, rule1, rule2, SHELL } from "@/components/portfolio/styles";

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: SHELL,
        margin: "0 auto",
        padding: "64px 24px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
        gap: 40,
        alignItems: "end",
        // drives the 17cqi headline clamp — keep both or the headline stops scaling
        containerType: "inline-size",
      }}
    >
      <Reveal style={{ minWidth: 0 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "var(--pf-accent-400)",
            border: "1px solid var(--pf-accent)",
            padding: "4px 10px",
            marginBottom: 26,
          }}
        >
          <span
            style={{ width: 7, height: 7, background: "var(--pf-accent)", display: "block" }}
          />
          status: open — 2027 new grad
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 17cqi, 92px)",
            lineHeight: 0.92,
            letterSpacing: "-.04em",
            margin: "0 0 20px",
            color: "#f3f2f2",
            overflowWrap: "anywhere",
          }}
        >
          JOSH
          <br />
          KUNG<span style={{ color: "var(--pf-accent)" }}>.</span>
        </h1>
        <p
          style={{
            fontFamily: mono,
            fontSize: 14.5,
            lineHeight: 1.7,
            maxWidth: "min(46ch, 100%)",
            margin: "0 0 26px",
            color: paper(74),
          }}
        >
          Fullstack dev drawn to the problems under the interface — retrieval, data, the plumbing
          that has to hold.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="pf-btn pf-btn--primary" href="#projects">
            See the work →
          </a>
          <a className="pf-btn pf-btn--ghost" href="#experience">
            Experience →
          </a>
        </div>
      </Reveal>

      <Reveal style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "stretch", flexWrap: "wrap" }}>
          <div
            className="grayscale"
            style={{
              width: 96,
              flex: "0 0 96px",
              border: rule2,
              position: "relative",
              aspectRatio: "3 / 4",
              overflow: "hidden",
              background: "#f3f2f2",
            }}
          >
            <Image
              src={HEADSHOT}
              alt="Josh Kung"
              fill
              sizes="96px"
              priority
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.92 }}
            />
          </div>
          <div
            style={{
              flex: "1 1 130px",
              minWidth: 0,
              overflowWrap: "anywhere",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: 8,
              fontFamily: mono,
              fontSize: 11,
              color: paper(55),
              borderBottom: rule1,
              paddingBottom: 8,
            }}
          >
            <div style={{ color: "#f3f2f2", fontSize: 12.5 }}>Boston, MA</div>
            <div>prev: Apple · TinyFish</div>
          </div>
        </div>

        <Terminal />
      </Reveal>
    </section>
  );
}
