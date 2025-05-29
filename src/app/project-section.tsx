import React from "react";
import ImageCard from "./image-card";

export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center gap-16 px-4 sm:px-20">
      <h1 className="text-white text-4xl font-bold mt-20">Projects</h1>
      <ProjectCard
        title="Just Shirley"
        description="Just Shirley is a platform for creating and sharing custom Shirley templates."
        image="/justshirleylogo2.png"
      />
      <ProjectCard
        title="Just Shirley"
        description="Just Shirley is a platform for creating and sharing custom Shirley templates."
        image="/justshirleylogo2.png"
      />
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex sm:flex-row flex-col w-full items-center sm:items-start gap-16 border-2 rounded-lg p-6 md:p-0 hover:scale-105 transition-all duration-300">
      <ImageCard image={image} />
      <div className="flex flex-col items-start gap-4 p-4">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
