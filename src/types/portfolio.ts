export type Project = {
  num: string;
  slug: string;
  kind: string;
  title: string;
  body: string;
  stack: string[];
  img: string;
  /** omit while there is nothing to link to yet */
  href?: string;
  ratio: string;
  /** object-position for the thumbnail crop — defaults to "top center" */
  focus?: string;
  /** columns to occupy in the 12-column feed grid */
  span: number;
};

export type Role = {
  when: string;
  sha: string;
  org: string;
  role: string;
  body: string;
  tags: string[];
  accent?: boolean;
};

/** background ground for the page — see .pf-bg--* in portfolio.css */
export type Background = "grid" | "dots" | "rules" | "glow" | "flat";
