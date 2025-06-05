import Image from "next/image";
import React from "react";

export default function ImageCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden border border-solid border-gray-200 cursor-pointer hover:scale-105 hover:opacity-50 transition-all duration-300">
      <Image
        src={image}
        alt="Image Card"
        width={250}
        height={250}
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
        onClick={() => window.open(link, "_blank")}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
