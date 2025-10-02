import Image from "next/image";
import React from "react";

export default function FlipCard({ image }: any) {
  const { firstImage, lastImage } = image;
  return (
    <div className="group [perspective:1000px] lg:w-[534px] w-full lg:h-[329px] h-[210px]">
      <div className="relative w-full h-full transition-transform duration-900 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      
        <div className="absolute inset-0  rounded-xl text-white flex items-center justify-center [backface-visibility:hidden]">
          <Image
            src={firstImage}
            alt={`slide`}
            fill
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="absolute inset-0  rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            src={lastImage}
            alt={`slide`}
            fill
            className="w-[534px] h-[329px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}




