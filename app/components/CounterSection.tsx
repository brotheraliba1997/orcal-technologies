import Image from "next/image";
import React from "react";
import counterBottom from "@/assests/counter-bottom-screen.png";

function CounterSection() {
  return (
    <section className="relative h-full bg-gradient-to-b from-[#9B9C8C] to-white overflow-hidden">
      {/* Video inside gradient */}
      <div className="flex justify-center items-center bg-[#999A8C]">
        <div className="relative md:w-[1600px] w-full md:h-[480px] h-[480px] flex items-start justify-center  [clip-path:circle(80%)] overflow-hidden">
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 text-center">
          <div className="hover:backdrop-blur-md hover:bg-white/20 md:p-10 p-2    ">
            <div className="flex flex-col md:justify-start justify-center md:items-start items-center gap-4 px-10">
              <div className="flex gap-2 items-center">
                <div className="primary-main h-[8px] w-[8px] "></div>

                <p className="text-md tracking-widest uppercase ">
                  HAPPY CLIENTS
                </p>
              </div>

              <h2 className="md:text-[80px] text-[44px]  font-bold">98+</h2>
            </div>
          </div>

          <div className="hover:backdrop-blur-md hover:bg-white/20 md:p-10 p-2  ">
            <div className="flex flex-col md:justify-start justify-center md:items-start items-center gap-4 px-10">
              <div className="flex gap-2 items-center">
                <div className="primary-main h-[8px] w-[8px]  "></div>

                <p className="text-md tracking-widest uppercase flex-1  ">
                  Our Revenue
                </p>
              </div>

              <h2 className="md:text-[80px] text-[44px] font-bold">200M</h2>
            </div>
          </div>

          <div className="hover:backdrop-blur-md hover:hover:bg-white/20 md:p-10 p-2 ">
            <div className="flex flex-col md:justify-start justify-center md:items-start items-center gap-4 px-10">
              <div className="flex gap-2 items-center">
                <div className="primary-main h-[8px] w-[8px] "></div>

                <p className="text-md tracking-widest uppercase flex-1  ">
                  Project Don
                </p>
              </div>

              <h2 className="md:text-[80px] text-[44px] font-bold">99%</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
