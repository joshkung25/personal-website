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
          description="I'm Josh Kung, a CS and Business student at Northeastern University. I build functional, well-designed applications and enjoy turning ideas into real products. My strengths are in front-end/full-stack development, creative problem solving, and designing user-friendly experiences."
        />
        {/* row block */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* column block */}
          <div className="flex flex-col w-1/2 md:w-3/4 gap-2 items-center">
            <ImageCard
              image="/justshirley_logo_2025.png"
              title="Just Shirley · Brand Website"
              description="Front-end and brand website for a sparkling beverage."
              link="http://www.justshirleysoda.com/"
            />
            <GrayContainer />
          </div>
          <ImageCard
            image="/car_search.webp"
            title="Car Search · Front-end Functionality"
            description="Modifying lists in frontend to search for cars by make, model, and zip code."
            link="/modifying-list"
          />
        </div>
      </div>

      {/* column 2 */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-1/2 md:w-3/4 gap-2 items-center">
            <ImageCard
              image="/blockstartIconSquare_website.png"
              title="Blockstart · Web App"
              description="Full-stack web service to help track athletes."
              link="http://blockstart.net/"
            />
            <GrayContainer />
          </div>
          <ImageCard
            image="/retail_store.jpg"
            title="Wholesale Data Analysis"
            description="Inventory-driven analysis of real wholesale data."
            link="/data-analysis"
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
        description="I'm Josh Kung, a CS and Business student at Northeastern University. I build functional, well-designed applications and enjoy turning ideas into real products. My strengths are in full-stack development, creative problem solving, and designing user-friendly experiences."
      />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-full">
          <ImageCard
            image="/justshirley_logo_2025.png"
            title="Just Shirley · Brand Website"
            description="Timeless taste in a modern package."
            link="http://www.justshirleysoda.com/"
          />
          <ImageCard
            image="/blockstartIconSquare_website.png"
            title="Blockstart · Web App"
            description="Full-stack web service to help track athletes."
            link="http://blockstart.net/"
          />
        </div>
        <ImageCard
          image="/retail_store.jpg"
          title="Wholesale Data Analysis"
          description="Inventory-driven analysis of real wholesale data."
          link="/data-analysis"
        />
        <ImageCard
          image="/car_search.webp"
          title="Car Search · Front-end Functionality"
          description="Modifying lists in frontend to search for cars by make, model, and zip code."
          link="/modifying-list"
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
      className="flex sm:flex-row flex-col w-full items-center min-h-[250px] sm:items-start gap-16 border-2 rounded-lg p-6 md:p-0 
    hover:bg-purple-900/10 dark:hover:bg-purple-900/10 dark:bg-gray-900/50 hover:scale-102 transition-all duration-300"
    >
      <div className="flex flex-col items-start gap-4 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
