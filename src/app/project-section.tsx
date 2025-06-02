import React from "react";
import ImageCard from "./image-card";

export default function ProjectSection() {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 sm:px-20 mt-40">
      <div className="flex flex-col flex-1 gap-2">
        <GrayContainer
          title="About Me"
          description="Hi, I’m Josh Kung — a Northeastern University CS and Business student.
I’m a builder at heart with a passion for creating applications that are not only functional but thoughtfully designed. I thrive at the intersection of technology and entrepreneurship, where I can take ideas from concept to execution. My strengths lie in creative problem solving, front-end development, and product thinking — especially when it comes to designing experiences that people love to use."
        />
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-3/4 gap-2 items-center">
            <ImageCard image="/justshirleylogo2.png" />
            <GrayContainer />
          </div>
          <GrayContainer
            title="Gray Container"
            description="This is a gray container."
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-3/4 gap-2 items-center">
            <ImageCard image="/justshirleylogo2.png" />
            <GrayContainer />
          </div>
          <GrayContainer
            title="Gray Container"
            description="This is a gray container."
          />
        </div>
        <GrayContainer
          title="Gray Container"
          description="This is a gray container."
        />
      </div>
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

function GrayContainer({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex sm:flex-row flex-col w-full items-center min-h-[300px] sm:items-start gap-16 border-2 rounded-lg p-6 md:p-0 hover:scale-105 transition-all duration-300 bg-gray-900/50">
      <div className="flex flex-col items-start gap-4 p-4">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
}
