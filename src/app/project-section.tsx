import React from "react";
import ImageCard from "./image-card";

export default function ProjectSection() {
  return (
    <div>
      <div className="hidden md:block">
        <LargeProjectSection />
      </div>
      <div className="block md:hidden">
        <ProjectSectionSmall />
      </div>
    </div>
  );
}

export function LargeProjectSection() {
  return (
    // main
    <div className="flex flex-col md:flex-row gap-4 px-4 sm:px-20 mt-40">
      {/* column 1 */}
      <div className="flex flex-col flex-1 gap-2">
        <GrayContainer
          title="About Me"
          description="Hi, I'm Josh Kung — a Northeastern University CS and Business student.
I'm a builder at heart with a passion for creating applications that are not only functional but thoughtfully designed. I thrive at the intersection of technology and entrepreneurship, where I can take ideas from concept to execution. My strengths lie in creative problem solving, front-end development, and product thinking — especially when it comes to designing experiences that people love to use."
        />
        {/* row block */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* column block */}
          <div className="flex flex-col w-1/2 md:w-3/4 gap-2 items-center">
            <ImageCard
              image="/justshirleylogo2.png"
              title="Just Shirley"
              description="Timeless taste in a modern package."
              link="http://www.justshirleysoda.com/"
            />
            <GrayContainer />
          </div>
          <GrayContainer
            title="Gray Container"
            description="This is a gray container."
          />
        </div>
      </div>

      {/* column 2 */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-1/2 md:w-3/4 gap-2 items-center">
            <ImageCard
              image="/blockstartIconSquare_website.png"
              title="Blockstart"
              description="Enter your marks. Find your school."
              link="http://blockstart.net/"
            />
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

export function ProjectSectionSmall() {
  return (
    <div className="flex flex-col gap-4 px-4 mt-40">
      <GrayContainer
        title="About Me"
        description="Hi, I'm Josh Kung — a Northeastern University CS and Business student.
I'm a builder at heart with a passion for creating applications that are not only functional but thoughtfully designed. I thrive at the intersection of technology and entrepreneurship, where I can take ideas from concept to execution. My strengths lie in creative problem solving, front-end development, and product thinking — especially when it comes to designing experiences that people love to use."
      />
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-4 w-full">
          <ImageCard
            image="/justshirleylogo2.png"
            title="Just Shirley"
            description="Timeless taste in a modern package."
            link="http://www.justshirleysoda.com/"
          />
          <ImageCard
            image="/blockstartIconSquare_website.png"
            title="Blockstart"
            description="Enter your marks. Find your school."
            link="http://blockstart.net/"
          />
        </div>
        <ImageCard
          image="/justshirleylogo2.png"
          title="Just Shirley"
          description="Timeless taste in a modern package."
          link="http://www.justshirleysoda.com/"
        />
      </div>
    </div>
  );
}

export function GrayContainer({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div
      className="flex sm:flex-row flex-col w-full items-center min-h-[300px] sm:items-start gap-16 border-2 rounded-lg p-6 md:p-0 
    hover:bg-purple-900/10 dark:hover:bg-purple-900/10 dark:bg-gray-900/50 hover:scale-102 transition-all duration-300"
    >
      <div className="flex flex-col items-start gap-4 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
