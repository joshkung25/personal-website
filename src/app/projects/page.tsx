import React from "react";
import ImageCard from "../image-card";
export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20 gap-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-16 justify-center m-16">
        <ImageCard image="/justshirleylogo2.png" />
        <ImageCard image="/justshirleylogo2.png" />
        <ImageCard image="/justshirleylogo2.png" />
        <ImageCard image="/justshirleylogo2.png" />
        <ImageCard image="/justshirleylogo2.png" />
        <ImageCard image="/justshirleylogo2.png" />
      </div>
    </div>
  );
}
