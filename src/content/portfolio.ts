import type { Project, Role, SkillGroup } from "@/types/portfolio";

export const NAME = "Josh Kung";
export const EMAIL = "joshuahkung@gmail.com";
export const GITHUB = "https://github.com/joshkung25";
export const LINKEDIN = "https://www.linkedin.com/in/josh-kung/";
export const HEADSHOT = "/josh.jpg";
export const LOCATION = "Palo Alto and Boston";

export const INTRO =
  "I'm a fullstack developer who likes the problems under the interface: retrieval, data, and the plumbing that has to hold. I study CS and business at Northeastern and graduate in December 2026.";

export const PROJECTS: Project[] = [
  {
    title: "Fetch AI",
    kind: "Fullstack web app",
    body: "An AI document assistant. Drop your files in once, then find anything with natural-language search. A multi-step RAG pipeline routes each question by intent, from single-passage lookups to answers drawn across documents.",
    stack: ["Next.js", "FastAPI", "ChromaDB", "RAG", "Supabase", "Docker", "AWS EC2"],
    img: "/docsai_thumbnail.png",
    href: "https://www.fetchfileai.com/",
  },
  {
    title: "Critter",
    kind: "iOS app",
    body: "A social app for your taste in media. Rank the movies and shows you actually loved, and see what the people whose taste you trust are watching.",
    stack: ["SwiftUI", "iOS"],
    img: "/critter.png",
    focus: "center",
  },
  {
    title: "Blockstart",
    kind: "Fullstack web service",
    body: "A web service that helps track athletes through college recruiting, with NCAA program and results data scraped and kept current.",
    stack: ["TypeScript", "React", "MUI", "Java", "AWS EC2"],
    img: "/blockstart_thumbnail.png",
    href: "http://blockstart.net/",
  },
  {
    title: "Just Shirley",
    kind: "Brand website",
    body: "The website for a sparkling beverage brand: responsive layout, motion, and type built around the product's identity.",
    stack: ["Next.js", "Motion", "Responsive design"],
    img: "/justshirley_thumbnail.png",
    href: "http://www.justshirleysoda.com/",
  },
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Swift"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "SwiftUI", "HTML & CSS"] },
  { label: "Backend", items: ["FastAPI", "Pydantic", "REST APIs", "Supabase", "ChromaDB"] },
  { label: "AI", items: ["LLM evaluation", "RAG", "MCP servers", "Agentic workflows"] },
  { label: "Infra & testing", items: ["Docker", "Kubernetes", "AWS (EC2, S3)", "Jenkins CI/CD", "pytest", "Playwright", "Git"] },
];

export const ROLES: Role[] = [
  {
    org: "Apple",
    role: "Software Engineer Intern",
    when: "Jan – Aug 2026",
    where: "San Diego, CA",
    logo: "/logos/apple.svg",
    points: [
      "Built the LLM evaluation framework behind MQE Intelligence, benchmarking 180+ model, prompt, and parameter configurations. The model and prompt changes it drove cut annual inference cost by 50%.",
      "Built the official Python client and MCP server for the internal triage platform, powering org-wide dashboards and AI agents.",
      "Started an AI self-healing layer for UI automation that recovers broken elements at runtime, cutting flaky test failures 15% team-wide.",
    ],
    tags: ["Python", "LLM evals", "MCP", "Agents"],
  },
  {
    org: "TinyFish",
    role: "Software Engineer Intern",
    when: "Jul – Dec 2024",
    where: "Palo Alto, CA",
    logo: "/logos/tinyfish.png",
    points: [
      "Built a fullstack app with agentic AI workflows that automate internal marketing across channels, raising outreach efficiency 400%.",
      "Led the Next.js and Tailwind frontend for human-in-the-loop work with agents.",
      "Migrated the production Chrome extension to the WXT framework.",
    ],
    tags: ["Next.js", "Tailwind CSS", "LLM agents", "WXT"],
  },
  {
    org: "Northeastern University",
    role: "B.S. Computer Science and Business Administration",
    when: "Sep 2022 – Dec 2026",
    where: "Boston, MA",
    logo: "/logos/northeastern.png",
    points: [
      "Khoury College of Computer Sciences, 3.7 GPA.",
      "Coursework in software engineering, object-oriented design, data structures and algorithms, and database design.",
      "Competed on the Division 1 varsity track and field team, CAA Outdoor Champions.",
    ],
    tags: [],
  },
];
