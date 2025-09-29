"use client";
import Image from "next/image";
import mathew from "@/assests/mathew.png";
import creating from "@/assests/hinobe.jpg";
import runestudios from "@/assests/runestudios.jpg";
import SectionLabel from "./SectionLabel";

export default function ScrollImages() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:py-20 py-10 px-10 md:gap-24 gap-8 text-white">
        <SectionLabel label={"OUR SERVICES"} />

        <h1 className="text-[35px] md:text-[84px] font-bold leading-[1]">
          View our
          <span className="text-primary-main"> works</span>
        </h1>

        <div className="md:h-[300vh] h-[200vh] relative">
          {/* Image 1 */}
          <div className="md:h-screen h-[400px] sticky top-0 z-10 ">
            {/* Background Image */}
            <Image
              src={mathew}
              alt="Image 1"
              className="w-full h-full md:object-cover object-contain"
              priority
            />

            {/* Top Left Label */}
            <div className="flex flex-col md:justify-between justify-center md:gap-0   gap-12 absolute top-0 px-10 md:pt-10 md:pb-24 h-full">
              <div className=" w-fit">
                <div className="border border-[#F3FF9F] rounded-full md:px-8 px-4  md:py-3 py-2 text-white md:text-sm text-xs font-medium backdrop-blur-sm flex justify-center">
                  Logo Design
                </div>
              </div>

              <div className=" text-white space-y-2">
                <p className="md:text-sm text-xs uppercase tracking-widest">
                  Art Direction
                </p>

                <h2 className="md:text-[30.4px] text-[18px] font-bold">
                  Mathew Company Branding
                </h2>
                <p className="md:text-lg text-sm opacity-80">
                  2023 - by Moonbox Studio
                </p>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="md:h-screen  h-[400px] sticky top-0 z-20">

            
            <Image
              src={creating}
              alt="Image 2"
              className="w-full h-full md:object-cover object-contain"
            />

            {/* <div className="flex flex-col justify-between absolute top-0 px-10 pt-10 pb-24 h-full">
              <div className=" w-fit">
                <div className="  border border-[#F3FF9F] rounded-full px-8  py-3 text-white text-sm font-medium backdrop-blur-sm flex justify-center">
                  Packaging
                </div>
              </div>

              <div className=" text-white space-y-2">
                <p className="text-sm uppercase tracking-widest">Marketing</p>

                <h2 className="text-[30.4px] font-bold">
                  Hinobe Agency Branding
                </h2>
                <p className="text-lg opacity-80">2023 - by Swiss Studio</p>
              </div>
            </div> */}

            <div className="flex flex-col md:justify-between justify-center md:gap-0   gap-12 absolute top-0 px-10 md:pt-10 md:pb-24 h-full">
              <div className=" w-fit">
                <div className="border border-[#F3FF9F] rounded-full md:px-8 px-4  md:py-3 py-2 text-white md:text-sm text-xs font-medium backdrop-blur-sm flex justify-center">
                  Logo Design
                </div>
              </div>

              <div className=" text-white space-y-2">
                <p className="md:text-sm text-xs uppercase tracking-widest">
                  Art Direction
                </p>

                <h2 className="md:text-[30.4px] text-[18px] font-bold">
                  Mathew Company Branding
                </h2>
                <p className="md:text-lg text-sm opacity-80">
                  2023 - by Moonbox Studio
                </p>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="md:h-screen h-[400px] sticky top-0 z-30">
            <Image
              src={runestudios}
              alt="Image 3"
             className="w-full h-full md:object-cover object-contain"
            />

            {/* <div className="flex flex-col justify-between absolute top-0 px-10 pt-10 pb-24 h-full">
              <div className=" w-fit">
                <div className="  border border-[#F3FF9F] rounded-full px-8  py-3 text-white text-sm font-medium backdrop-blur-sm flex justify-center">
                  Packaging
                </div>
              </div>

              <div className=" text-white space-y-2">
                <p className="text-sm uppercase tracking-widest">Marketing</p>

                <h2 className="text-[30.4px] font-bold">
                  Hinobe Agency Branding
                </h2>
                <p className="text-lg opacity-80">2023 - by Swiss Studio</p>
              </div>
            </div> */}


              <div className="flex flex-col md:justify-between justify-center md:gap-0   gap-12 absolute top-0 px-10 md:pt-10 md:pb-24 h-full">
              <div className=" w-fit">
                <div className="border border-[#F3FF9F] rounded-full md:px-8 px-4  md:py-3 py-2 text-white md:text-sm text-xs font-medium backdrop-blur-sm flex justify-center">
                  Logo Design
                </div>
              </div>

              <div className=" text-white space-y-2">
                <p className="md:text-sm text-xs uppercase tracking-widest">
                  Art Direction
                </p>

                <h2 className="md:text-[30.4px] text-[18px] font-bold">
                  Mathew Company Branding
                </h2>
                <p className="md:text-lg text-sm opacity-80">
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
