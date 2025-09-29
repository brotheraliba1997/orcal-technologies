import Image from "next/image";
import logo1 from "@/assests/Bullseye-logo.png";

import Glass from "@/assests/Ephemeral-logo.png";
import person from "@/assests/CloudWatch-logo.png";
import blink from "@/assests/Powersurge-logo.png";
import book from "@/assests/Lightspeed-logo.png";
import bussines from "@/assests/warpspeed-logo.png";

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
    <section className=" text-white py-20 flex flex-col md:gap-32 gap-16 md:px-12 px-4">
      <div className="md:px-12 px-4 mt-8 flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-4 items-center ">
          <div className="primary-main h-[8px] w-[8px] "></div>
          <h2 className="text-lg  uppercase ">Way of work</h2>
        </div>

        <h1 className="text-[44px] md:text-[84px] font-bold leading-[1]">
          Our
          <span className="text-primary-main">Clients</span>
        </h1>
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

            <div className="text-right w-full" > #{idx+1} </div>
          </div>
        ))}
      </div>
    </section>
  );
}
