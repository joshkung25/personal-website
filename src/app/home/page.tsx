"use client";
import React, { useRef } from "react";
// import { Roboto } from "next/font/google";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ProjectSection from "../project-section";
import Image from "next/image";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function Home() {
  const parallaxRef = useRef<IParallax>(null);

  const scrollToProjects = () => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(0.6); // Scroll to the second page (projects)
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Parallax ref={parallaxRef} pages={2}>
        <ParallaxLayer
          offset={0}
          speed={2}
          className="mt-40"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center md:gap-20">
            <div className="w-32 h-32 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-4">
              <Image
                src="/linkedin_1_small_cropped.png"
                width={160}
                height={160}
                alt="Josh Kung profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-8">
              <h1
                className={`text-4xl sm:text-6xl font-bold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent p-4`}
              >
                Hi, I&apos;m Josh
              </h1>
              <div className="flex gap-4 items-center flex-row">
                <a
                  className="cursor-pointer rounded-full transition-colors flex items-center justify-center bg-foreground text-background gap-2 relative hover:bg-gradient-to-br hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                  onClick={scrollToProjects}
                >
                  Explore
                </a>
                <a
                  className="rounded-full hover:text-black hover:dark:text-white border border-solid border-black/[.5] dark:border-white/[.5] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:dark:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                  href="https://www.linkedin.com/in/josh-kung/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} factor={1} style={{ zIndex: 0 }}>
          <div className="w-full h-full bg-[url('/firewatch_background_extended_transparent_2.png')] dark:bg-[url('/firewatch_background_extended_night.png')] bg-cover bg-center bg-repeat-x z-[1]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6} factor={1} style={{ zIndex: 1 }}>
          <div className="w-full h-full bg-[url('/firewatch_background_trees.png')] dark:bg-[url('/firewatch_background_night_trees.png')] bg-cover bg-center bg-repeat-x z-[1]" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.98}
          speed={0.6}
          factor={1}
          style={{ zIndex: 2 }}
        >
          <div className="w-full h-[120px] bg-[#290452] dark:bg-[#08081d]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.33} speed={1} factor={1} style={{ zIndex: 5 }}>
          <div className="w-full h-full bg-[url('/firewatch_background_notrees_white.png')] dark:bg-[url('/firewatch_background_notrees_night.png')] bg-cover bg-center bg-repeat-x z-[1]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={1} factor={2} style={{ zIndex: 3 }}>
          <div className="w-full h-full flex flex-col bg-[#ffffff] dark:bg-[#08081d] mt-35">
            <div id="projects">
              <ProjectSection />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
