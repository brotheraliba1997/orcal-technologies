"use client";
import Image from "next/image";
import React from "react";
import counterBottom from "@/assests/counter-bottom-screen.png";

import CountUp from "react-countup";

function CounterSection() {
  return (
    <section className="relative h-full bg-gradient-to-b from-[#9B9C8C] to-white overflow-hidden">
      {/* Video inside gradient */}
      <div className="flex justify-center items-center bg-[#999A8C]">
        <div className="relative md:w-[1600px] w-full lg:h-[480px] md:h-[520px] h-[480px] flex items-start justify-center  [clip-path:circle(80%)] overflow-hidden">
          <Image
            className=" object-cover  object-bottom md:-mt-[100px] -mt-[180px]   sepia hue-rotate-180"
            src="/counter-section.gif"
            alt="counter-section"
            layout="fill"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 ">
        <div className="relative w-full h-[50vh] flex items-start justify-center ">
          <Image
            className=" object-cover "
            src={counterBottom}
            alt="counter-section"
            layout="fill"
          />
        </div>
      </div>

      <div className="absolute md:bottom-0 bottom-10   left-0 right-0 z-10   text-white ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-0 text-center">
          <div className="hover:backdrop-blur-md hover:bg-white/20 md:p-8  p-2    ">
            <div className="flex flex-col lg::justify-start justify-center lg:items-start items-center gap-4 px-10">
              <div className="flex gap-2 items-center">
                <div className="primary-main h-[8px] w-[8px] "></div>

                <p className="text-md tracking-widest uppercase ">
                  HAPPY CLIENTS
                </p>
              </div>

              <h1 className="lg:text-[80px] md:text-6xl text-[44px] font-bold">
                <CountUp start={0} end={98} duration={3} separator="+" />
                <span className="font-medium">+</span>
              </h1>
            </div>
          </div>

          <div className="hover:backdrop-blur-md hover:bg-white/20 md:p-10 p-2  ">
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-4 px-10">
              <div className="flex gap-2 items-center">
                <div className="primary-main h-[8px] w-[8px]  "></div>

                <p className="text-md tracking-widest uppercase flex-1  ">
                  Our Revenue
                </p>
              </div>

              <h1 className="lg:text-[80px] md:text-6xl text-[44px] font-bold">
                <CountUp start={50} end={200} duration={3} separator="+" />
                <span className="font-medium">M</span>
              </h1>
            </div>
          </div>

          <div className="hover:backdrop-blur-md hover:hover:bg-white/20 md:p-10 p-2 ">
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center gap-4 px-10">
              <div className="flex gap-2 items-center">
                <div className="primary-main h-[8px] w-[8px] "></div>

                <p className="text-md tracking-widest uppercase flex-1  ">
                  Project Don
                </p>
              </div>

              <h2 className="lg:text-[80px] md:text-6xl  text-[44px] font-bold">
                99%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
