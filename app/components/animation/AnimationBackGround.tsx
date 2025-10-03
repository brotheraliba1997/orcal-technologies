
import React from "react";

export default function AnimationBackGround({ children }: any) {
  return (
    <div className="relative w-full h-full  text-white lg:my-20  my-5">
      {/* Blob 1 */}
      <div
        className="absolute top-20 lg:left-20 left-0 md:w-[300px] w-[100px] md:h-[300px] h-[100px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(243,255,159,0.8) 40%, rgba(243,255,159,0.2) 100%)",
          filter: "blur(160px)",
          animation: "move1 3s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      ></div>

      {/* Blob 2 */}
      <div
        className="absolute lg:right-32 right-0 top-40 md:w-[300px] w-[50px] md:h-[100px] h-[50px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(243,255,159,0.8) 40%, rgba(255,200,150,0.2) 100%)",
          filter: "blur(160px)",
          animation: "move2 3s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      ></div>

      {/* Blob 3 */}
      <div
        className="absolute bottom-20 lg:left-1/2 left-0 md:w-[300px] w-[100px] md:h-[300px] h-[100px] rounded-full lg:-translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(243,255,159,0.8) 40%, rgba(150,200,255,0.2) 100%)",
          filter: "blur(160px)",
          animation: "move3 3s ease-in-out infinite",
          willChange: "transform, opacity",
        }}
      ></div>

      <div className="  flex items-center justify-center h-full ">
        {children}
      </div>
    </div>
  );
}
