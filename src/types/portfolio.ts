export type Project = {
  title: string;
  kind: string;
  body: string;
  stack: string[];
  img: string;
  /** omit while there is nothing to link to yet */
  href?: string;
  /** object-position for the thumbnail crop — defaults to "top center" */
  focus?: string;
};

export type Role = {
  org: string;
  role: string;
  when: string;
  where: string;
  /** path under /public */
  logo: string;
  points: string[];
  tags: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};
