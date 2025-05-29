"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectSection from "../project-section";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={2}
          className="mt-60"
          style={{ zIndex: 3 }}
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className={`text-xl sm:text-2xl -mb-4 ${roboto.className}`}>
              Josh Kung
            </h2>
            <h1
              className={`text-4xl sm:text-6xl font-bold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent p-4`}
            >
              Some Things I&apos;ve Built.
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1.75}
          className="flex flex-col items-center mt-90"
          style={{ zIndex: 3 }}
        >
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full transition-colors flex items-center justify-center bg-foreground text-background gap-2 relative hover:bg-gradient-to-br hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="/projects"
            >
              Explore now
            </a>
            <a
              className="rounded-full hover:text-black hover:dark:text-white border border-solid border-black/[.5] dark:border-white/[.5] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:dark:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me
            </a>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} factor={1} style={{ zIndex: 0 }}>
          <div className="w-full h-full bg-[url('/firewatch_background_extended_transparent_2.png')] dark:bg-[url('/firewatch_background_extended_night.png')] bg-cover bg-center bg-repeat-x z-[1]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} factor={1} style={{ zIndex: 2 }}>
          <div className="w-full h-full bg-[url('/firewatch_background_trees.png')] dark:bg-[url('/firewatch_background_night_trees.png')] bg-cover bg-center bg-repeat-x z-[1]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={1} factor={2} style={{ zIndex: 1 }}>
          <div className="w-full h-full flex flex-col bg-[#290452] dark:bg-[#08081d]">
            <ProjectSection />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
