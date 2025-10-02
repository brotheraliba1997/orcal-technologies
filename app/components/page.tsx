"use client";
import Image from "next/image";
import mathew from "@/assests/mathew.png";
import creating from "@/assests/hinobe.jpg";
import runestudios from "@/assests/runestudios.jpg";
import SectionLabel from "./SectionLabel";
import TypewriterHTML from "./animation/letterAnimation";

export default function ScrollImages() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:py-20 py-10 lg:px-4 px-4  gap-12 text-white">
        <SectionLabel label={"OUR SERVICES"} />

        {/* <h1 className="text-[35px] md:text-6xl lg:text-[84px] font-bold leading-[1]">
          View our
          <span className="text-primary-main"> works</span>
        </h1> */}

        <div className="h-[100px]">
          <TypewriterHTML
            html={`<h1 class="text-[35px] md:text-6xl lg:text-[84px] font-bold leading-[1]">
                                                                                    View our
                                                      <span class="text-primary-main"> works</span>
                                                                                             </h1>`}
          />
        </div>

        <div className="lg:h-[300vh] md:h-[1200px] h-[720px] relative w-full ">
          {/* Image 1 */}
          <div className="lg:h-screen md:h-[400px]  h-[240px] sticky top-0 z-10 ">
            <Image
              src={mathew}
              alt="Image 1"
              className="w-full h-full lg:object-cover"
              priority
            />

            {/* Top Left Label */}
            <div className="flex flex-col lg:justify-between justify-center lg:gap-0 gap-8 absolute top-0 px-6 pt-6 pb-12 h-full  text-white w-full">
              <div className="w-fit">
                <div className="border border-[#F3FF9F] rounded-full px-3 py-2 lg:px-8 lg:py-3 text-white text-xs md:text-sm font-medium backdrop-blur-sm flex justify-center">
                  Logo Design
                </div>
              </div>

              <div className="text-white space-y-2">
                <p className="text-xs lg:text-sm uppercase tracking-widest">
                  Art Direction
                </p>
                <h2 className="text-lg lg:text-[30.4px] font-bold">
                  Mathew Company Branding
                </h2>
                <p className="text-sm lg:text-lg opacity-80">
                  2023 - by Moonbox Studio
                </p>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="lg:h-screen md:h-[400px] h-[240px] sticky top-0 z-20 bg-black">
            <Image
              src={creating}
              alt="Image 2"
              className="w-full h-full lg:object-cover"
            />

            <div className="flex flex-col lg:justify-between justify-center lg:gap-0 gap-8 absolute top-0 px-6 pt-6 pb-12 h-full  text-white w-full">
              <div className="w-fit">
                <div className="border border-[#F3FF9F] rounded-full px-3 py-2 lg:px-8 lg:py-3 text-white text-xs lg:text-sm font-medium backdrop-blur-sm flex justify-center">
                  Packaging
                </div>
              </div>

              <div className="text-white space-y-2">
                <p className="text-xs lg:text-sm uppercase tracking-widest">
                  Marketing
                </p>
                <h2 className="text-lg lg:text-[30.4px] font-bold">
                  Hinobe Agency Branding
                </h2>
                <p className="text-sm lg:text-lg opacity-80">
                  2023 - by Swiss Studio
                </p>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="lg:h-screen md:h-[400px] h-[240px] sticky top-0 z-30 bg-black">
            <Image
              src={runestudios}
              alt="Image 3"
              className="w-full h-full lg:object-cover"
            />

            <div className="flex flex-col lg:justify-between justify-center lg:gap-0 gap-8 absolute top-0 px-6 pt-6 pb-12 h-full  text-white w-full">
              <div className="w-fit">
                <div className="border border-[#F3FF9F] rounded-full px-3 py-2 lg:px-8 lg:py-3 text-white text-xs lg:text-sm font-medium backdrop-blur-sm flex justify-center">
                  Campaign
                </div>
              </div>

              <div className="text-white space-y-2">
                <p className="text-xs lg:text-sm uppercase tracking-widest">
                  Creative Direction
                </p>
                <h2 className="text-lg lg:text-[30.4px] font-bold">
                  Rune Studios Identity
                </h2>
                <p className="text-sm lg:text-lg opacity-80">
                  2023 - by Moonbox Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
