"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen sm:p-20 gap-10 bg-[url('/firewatch_background_extended.png')] dark:bg-none bg-contain bg-scroll bg-center transition-[background-image] duration-400">
      <div className="flex flex-col items-center justify-center mt-40">
        <h2 className={`text-2xl -mb-4 ${roboto.className}`}>Josh Kung</h2>
        <h1
          className={`text-6xl font-bold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent p-4`}
        >
          Some Things I&apos;ve Built.
        </h1>
      </div>
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
    </div>
  );
}
