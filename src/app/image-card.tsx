import Image from "next/image";
import React from "react";

export default function ImageCard({ image }: { image: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-solid border-gray-200 cursor-pointer hover:scale-105 transition-all duration-300">
      <Image
        src={image}
        alt="Image Card"
        width={250}
        height={250}
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
      />
    </div>
  );
}
