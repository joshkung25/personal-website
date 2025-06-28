// import Image from "next/image";
import React from "react";

export default function ImageCard({
  image,
  title,
  description,
  link,
  height,
}: {
  image: string;
  title: string;
  description: string;
  link?: string;
  height?: number;
}) {
  return (
    <div
      onClick={() => (window.location.href = link || "/")}
      className="w-full rounded-lg overflow-hidden border border-solid border-gray-200 cursor-pointer hover:scale-105 hover:opacity-50 transition-all duration-300"
    >
      <img
        src={image}
        alt="Image Card"
        width={250} //ignore
        height={250} //ignore
        className={`w-full h-[${height}px] object-cover bg-gray-200`}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
