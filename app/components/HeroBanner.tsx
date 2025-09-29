"use client";
import React from "react";
import SectionLabel from "./SectionLabel";

export default function HeroBanner() {
  return (
    <section className="relative w-full lg:h-[800px] h-[450px] overflow-hidden">
      <video
        className="absolute  w-full h-full object-cover"
        src="/herobanner.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/50 " />
      <div className="relative z-10  h-full flex flex-col py-28 ">
        <div className="flex flex-col gap-4   text-white  md:px-18  px-10">
          <SectionLabel label={"IN DUBAI"} />

          <div className="flex justify-between md:items-center items-start md:flex-row flex-col">
            <h1 className="md:text-[140px] text-[50px]  font-bold font-Satoshi">
              Leading
            </h1>
            <div className="flex gap-4 md:flex-col flex-col ">
              <p className="text-lg md:text-xl text-primary-main">© 2025 </p>
              <p className="text-lg md:text-xl "> Let your brand stands out</p>
            </div>
          </div>

          <div className="flex gap-4 md:text-[128px] text-[25px] text-primary-main   ">
            <h2 className=" font-semibold  ">
              LOGO Design <span className="text-white">Agency </span>
            </h2>
          </div>
        </div>

        <div></div>

        <div className="flex justify-center items-end">
          <div className="flex flex-col justify-center items-center lg:mt-[80px] mt-[30px]">
            <div className="bg-[#F2FE9E] h-[11px] w-[11px]  rounded-full flex justify-center items-start">
              <div className="w-[1px] md:h-[140px] h-[70px] bg-gradient-to-b from-[#71FF49] to-[#71FF4900]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
