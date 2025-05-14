import Image from "next/image";
import React from "react";

export default function ImageCard({ image }: { image: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-solid border-gray-200">
      <Image
        src={image}
        alt="Image Card"
        width={250}
        height={250}
        className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
      />
    </div>
  );
}
