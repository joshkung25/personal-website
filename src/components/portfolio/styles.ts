/** Shared inline-style primitives for the portfolio surface.
 *  Tokens themselves live in src/app/portfolio.css. */

export const mono = "ui-monospace, Menlo, monospace";

/** translucent paper — `paper(60)` is 60% of --pf-paper */
export const paper = (pct: number) =>
  `color-mix(in srgb, #f3f2f2 ${pct}%, transparent)`;

export const rule2 = `2px solid ${paper(22)}`;
export const rule1 = `1px solid ${paper(20)}`;

export const SHELL = 1240;

export const sectionLabel = {
  fontFamily: mono,
  fontWeight: 400,
  fontSize: 13,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  margin: 0,
  color: "var(--pf-accent-400)",
} as const;

export const tag = {
  fontFamily: mono,
  fontSize: 10.5,
  padding: "3px 7px",
  border: `1px solid ${paper(22)}`,
  color: paper(75),
} as const;
