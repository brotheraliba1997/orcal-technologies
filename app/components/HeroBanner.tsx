"use client";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      <video
        className="absolute  w-full h-full object-cover"
        src="/herobanner.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/50 " />
      <div className="relative z-10  h-full flex flex-col justify-center ">
        <div className=" text-white pl-8 pr-32">
          <div className="flex gap-2 items-center">
            <div className="primary-main h-[8px] w-[8px] "></div>

            <p className="text-lg tracking-widest uppercase ">IN DUBAI</p>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="text-[140px] font-bold ">LEADING</h1>
            <div className="flex gap-4 flex-col">
              <p className="text-2xl md:text-xl text-primary-main">© 2025 </p>
              <p className="text-2xl md:text-xl "> Let your brand stands out</p>
            </div>
          </div>

          <div className="flex gap-4 text-[108px] text-primary-main">
            <h2 className=" font-semibold  ">LOGO Design</h2>
            <h2 className="text-white">Agency</h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-[40px]">
          <div className="bg-[#71FF49] h-[11px] w-[11px]  rounded-full flex justify-center items-start">
            <div className="w-[2px] h-[100px] bg-gradient-to-b from-[#71FF49] to-[#71FF4900]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
