"use client";
import { useState } from "react";
import Image from "next/image";

export default function ServiceCard({ service, idx, services }: any) {
  const [hover, setHover] = useState(false);

  return (
    <>
      {!hover && (
        <div
          className={` ${
            !hover ? "block" : "hidden"
          } text-left w-full md:px-12  px-4 md:py-4 py-4 `}
        >
          #{idx + 1}
        </div>
      )}

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`md:w-full w-[180px] h-[180px] ${!hover ? "md:h-[230px]" : "md:h-[320px]" }  relative rounded-lg overflow-hidden`}
      >
        {/* Image */}
        {!hover && (
          <Image
            src={service.img}
            alt={service.title}
            fill
            className={`object-contain transition-opacity duration-300 ${
              idx === services.length - 1 && "blur-lg"
            }`}
          />
        )}

        {/* Video */}
        {hover && idx !== services.length - 1 && (
          <video
            src="/our-services-video.mp4"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </>
  );
}
