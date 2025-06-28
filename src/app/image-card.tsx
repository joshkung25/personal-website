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
  link?: string;
}) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="w-full rounded-lg overflow-hidden border border-solid border-gray-200 cursor-pointer hover:scale-105 hover:opacity-50 transition-all duration-300"
    >
      <Image
        src={image}
        alt="Image Card"
        width={250} //ignore
        height={250} //ignore
        className="w-full max-h-[350px] object-contain"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
