import Image from "next/image";
import logo1 from "@/assests/Bullseye-logo.png";

import Glass from "@/assests/Ephemeral-logo.png";
import person from "@/assests/CloudWatch-logo.png";
import blink from "@/assests/Powersurge-logo.png";
import book from "@/assests/Lightspeed-logo.png";
import bussines from "@/assests/warpspeed-logo.png";
import TypewriterHTML from "./animation/letterAnimation";
import SectionLabel from "./SectionLabel";

const services = [
  {
    img: blink,
  },
  {
    img: bussines,
  },
  {
    img: logo1,
  },
  {
    img: Glass,
  },
  {
    img: person,
  },
  {
    img: book,
  },
];

export default function OurClients() {
  return (
    <section className=" text-white lg:py-5 pb-10 flex flex-col md:gap-16 gap-8 md:px-8 px-4">
      <div className="md:px-12  mt-8 flex flex-col gap-8 lg:justify-center lg:items-center">
             <SectionLabel label={"Way of work"} />

        <div className="lg:h-[100px]  h-[60px]">
          <TypewriterHTML
            html={`  <h1 class="text-[44px] md:text-[84px] font-bold leading-[1]">
          Our
          <span class="text-primary-main">Clients</span>
        </h1> `}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-gray-700 ">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`md:py-8 py-4 md:px-12 px-6 flex flex-col bg-[#121212] justify-center h-[200px] items-center  border-[#252525] border 
            
             `}
          >
            <div className="w-[200px] h-[160px] relative">
              <Image
                src={service.img}
                alt="logo"
                fill
                className={`object-contain`}
              />
            </div>

            <div className="text-right w-full"> #{idx + 1} </div>
          </div>
        ))}
      </div>
    </section>
  );
}
