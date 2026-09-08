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
        <h1
          style={{
            fontSize: "clamp(40px, 17cqi, 92px)",
            lineHeight: 0.92,
            letterSpacing: "-.04em",
            margin: "0 0 20px",
            paddingTop: 4,
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
        {/* one bordered unit, same system as the terminal below it */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            border: rule2,
            background: "var(--pf-ink-2)",
          }}
        >
          <div
            className="grayscale"
            style={{
              width: 108,
              flex: "0 0 108px",
              position: "relative",
              alignSelf: "stretch",
              minHeight: 128,
              overflow: "hidden",
              borderRight: rule1,
              background: "#f3f2f2",
            }}
          >
            <Image
              src={HEADSHOT}
              alt="Josh Kung"
              fill
              sizes="108px"
              priority
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.92 }}
            />
          </div>
          <div
            style={{
              flex: "1 1 150px",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 12,
              padding: "14px 16px",
              fontFamily: mono,
            }}
          >
            {[
              ["based", "Boston, MA"],
              ["prev", "Apple · TinyFish"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: paper(40),
                    flex: "0 0 40px",
                  }}
                >
                  {label}
                </span>
                <span style={{ fontSize: 12.5, color: "#f3f2f2", overflowWrap: "anywhere" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Terminal />
      </Reveal>
    </section>
  );
}
