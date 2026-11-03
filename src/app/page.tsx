import React from "react";
import Hero from "@/components/portfolio/hero";
import Projects from "@/components/portfolio/projects";
import Skills from "@/components/portfolio/skills";
import Experience from "@/components/portfolio/experience";
import Contact from "@/components/portfolio/contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
