import React from "react";

import Image from "next/image";
import counterBottom from "@/assests/mathew.png";
// import hinobe from "@/assests/hinobe.jpg";
// import runestudios from "@/assests/runestudios.jpg";

function Viewourworks() {
  return (
    <div className="w-full md:px-12 px-4 flex flex-col md:gap-16 gap-8 py-16">
      <section className="relative h-screen">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="relative w-full md:h-full h-[400px]  ">
              <Image
                className=" object-contain "
                src={counterBottom}
                alt="Section 1"
                layout="fill"
              />
            </div>

            <div className="absolute md:top-6 top-4 md:left-6 left-4 border border-white rounded-full px-4 py-2 text-white">
              Lorem ipsum dolor sit amet
            </div>

            <div className="absolute md:bottom-6 bottom-2 md:left-6 left-3 text-white space-y-1 bg-white">
              <p>Marketing</p>
              <p>Hinobe Agency Branding</p>
              <p>2023 - by Swiss Studio</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative h-screen">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="relative w-full h-full  ">
              <Image
                className=" object-cover "
                src={hinobe}
                alt="Section 1"
                layout="fill"
              />
            </div>
            <div className="absolute top-6 left-6 border border-white rounded-full px-4 py-2 text-white">
              Dolor sit amet consectetur
            </div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p>Design</p>
              <p>Hinobe Agency Branding</p>
              <p>2023 - by Swiss Studio</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="relative h-screen">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="relative w-full h-full  ">
              <Image
                className=" object-cover "
                src={runestudios}
                alt="Section 1"
                layout="fill"
              />
            </div>
            <div className="absolute top-6 left-6 border border-white rounded-full px-4 py-2 text-white">
              Adipiscing elit sed do
            </div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p>Branding</p>
              <p>Hinobe Agency Branding</p>
              <p>2023 - by Swiss Studio</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Viewourworks;
