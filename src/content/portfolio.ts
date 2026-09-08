import type { Background, Project, Role } from "@/types/portfolio";

/* ── knobs ──────────────────────────────────────────────────────────────── */
export const BACKGROUND: Background = "flat";
export const EMAIL = "joshuahkung@gmail.com";
export const GITHUB = "https://github.com/joshkung25";
export const LINKEDIN = "https://www.linkedin.com/in/josh-kung/";
export const HEADSHOT = "/josh.jpg";

/* ── content ────────────────────────────────────────────────────────────── */
export const PROJECTS: Project[] = [
  {
    num: "01",
    slug: "fetch-ai/",
    kind: "Fullstack web app",
    title: "Fetch AI",
    body: "An AI document assistant — drop your files in once, then retrieve across any chat instance with natural-language semantic search instead of hunting for the PDF you swear you uploaded.",
    stack: ["Next.js", "TypeScript", "Postgres", "vector search", "LLM APIs"],
    img: "/docsai_thumbnail.png",
    href: "https://www.fetchfileai.com/",
    ratio: "16 / 9",
    span: 7,
  },
  {
    num: "02",
    slug: "critter/",
    kind: "Mobile app",
    title: "Critter",
    body: "A mobile app for sharing your taste in media — rank the movies and shows you actually loved, and see what the people whose taste you trust are watching.",
    stack: ["SwiftUI", "iOS"],
    img: "/critter.png",
    ratio: "16 / 9",
    focus: "center",
    span: 5,
  },
  {
    num: "03",
    slug: "blockstart/",
    kind: "Fullstack web service",
    title: "Blockstart",
    body: "Tracking platform for track athletes and coaches — meets, results and season progression in one place, built to be read on a phone between events.",
    stack: ["Next.js", "Postgres", "auth"],
    img: "/blockstart_thumbnail.png",
    href: "http://blockstart.net/",
    ratio: "4 / 3",
    span: 4,
  },
  {
    num: "04",
    slug: "just-shirley/",
    kind: "Brand website",
    title: "Just Shirley",
    body: "Front-end and brand site for a sparkling beverage — responsive layout, motion and type built around the product identity.",
    stack: ["Next.js", "motion", "responsive"],
    img: "/justshirley_thumbnail.png",
    href: "http://www.justshirleysoda.com/",
    ratio: "4 / 3",
    span: 4,
  },
];

export const ROLES: Role[] = [
  {
    when: "2026",
    sha: "a4f19c2",
    org: "Apple",
    role: "swe intern",
    accent: true,
    body: "AI platform and integration work for a quality engineering team — LLM insights, evals and MCP servers, built and shipped to the engineers who gate what goes out to an enormous number of devices.",
    tags: ["AI platform", "LLM evals", "MCP", "internal tooling"],
  },
  {
    when: "2025",
    sha: "7b02de1",
    org: "TinyFish",
    role: "swe intern",
    accent: true,
    body: "Built a fullstack app using AI to streamline an internal marketing process: backend extraction across multiple platforms, an agentic workflow over LLMs and scraping frameworks, a Next.js frontend, and the database architecture holding it together.",
    tags: ["Next.js", "LLM agents", "web scraping", "db design"],
  },
  {
    when: "2022 — Dec 2026",
    sha: "init",
    org: "Northeastern University",
    role: "cs + business",
    body: "Combined CS and business curriculum with co-op cycles in between. Graduating December 2026.",
    tags: ["Boston, MA", "B.S."],
  },
];

export const TERM_LINES = [
  "$ whoami",
  "fullstack dev — AI platforms & systems",
  "northeastern cs + business, dec 2026",
  "",
  "$ ls ~/now",
  "fetch-ai/   blockstart/",
  "",
  "$ _",
];

export const TERM_FULL = TERM_LINES.join("\n");
