import Image from "next/image";
import React from "react";

export default function ImageCard({ image }: { image: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-solid border-gray-200">
      <Image src={image} alt="Image Card" width={200} height={200} />
    </div>
  );
}
