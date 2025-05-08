import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 gap-10 bg-[url('/firewatch_background.jpg')] dark:bg-[url('/firewatch_background_night4.png')] bg-cover bg-center bg-fixed transition-[background-image] duration-400">
      <>
        <h1 className="text-6xl font-bold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent p-4 font-serif">
          some things i&apos;ve built.
        </h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full transition-colors flex items-center justify-center bg-foreground text-background gap-2 relative hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/projects"
          >
            Explore now
          </a>
          <a
            className="rounded-full text-white hover:text-black border border-solid border-white/[.5] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </div>
      </>
    </div>
  );
}
