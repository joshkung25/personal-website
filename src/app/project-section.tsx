import React from "react";
import ImageCard from "./image-card";

export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center w-full mt-60 gap-16">
      <h1 className="text-white text-4xl font-bold">Projects</h1>
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
    <div className="flex sm:flex-row flex-col justify-between items-center border-2 border-red-500">
      <ImageCard image={image} />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
