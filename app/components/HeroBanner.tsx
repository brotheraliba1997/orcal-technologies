"use client";
import React from "react";
import SectionLabel from "./SectionLabel";

import TypewriterHTML from "./animation/letterAnimation";


export default function HeroBanner() {
  return (
    <section className="relative w-full lg:h-[800px] md:h-[600px] h-[500px] overflow-hidden">
      <video
        className="absolute  w-full h-full object-cover"
        src="/herobanner.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/50 " />
      <div className="relative z-10  h-full flex flex-col py-28 ">
        <div className="flex flex-col gap-4    text-white  md:px-18  px-6">
          <SectionLabel label={"IN DUBAI"} />

          <div className="flex justify-between lg:items-center items-start lg:flex-row flex-col lg:gap-0 md:gap-8">
            <div className="lg:h-[150px] h-[80px]">
              <TypewriterHTML
                html={`<h1 class="lg:text-[140px] md:text-9xl  text-[67.09px] text-white font-bold font-Satoshi ">Loadings</h1>`}
              />
            </div>
            <div className="lg:block hidden">

               <div className="flex gap-4 md:flex-col flex-col ">
              <p className="text-lg lg:text-xl text-primary-main">© 2025 </p>
              <p className="text-lg lg:text-xl md:text-4xl ">
                {" "}
                Let your brand stands out
              </p>
            </div>

            </div>

           
          </div>

          <div className="h-[140px]">
            <TypewriterHTML
              html={`<div class="flex gap-4 lg:text-[128px] md:text-[50px] text-[55px] text-primary-main  leading-[1] ">     
                <h2 class=" font-semibold  ">
              LOGO Design <span class="text-white text-right w-full lg:inline block   ">Agency </span>
            </h2>
          </div>`}
            />
          </div>
        </div>

        {/* <MyComponent /> */}

        {/* <p className="typewriter  w-[300px]">
        <span className="text-white">Hamza </span>
        <span className="text-sky-400">Ali </span>
        <span className="text-pink-400">Rizvi</span>
      </p> */}

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
