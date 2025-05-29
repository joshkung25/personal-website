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
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
      />
    </div>
  );
}
