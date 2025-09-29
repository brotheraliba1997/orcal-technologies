import Image from "next/image";
import React from "react";

import logo1 from "@/assests/One.png";
import two from "@/assests/two.png";
import Three from "@/assests/Three.png";
import heart from "@/assests/heart-frame.png";
// import heartWithoutBackground from "@/assests/heartWithoutcolor.png";

function Wayofwork() {
  const Wayofwork = [
    {
      img: logo1,
      title: "Think",
      desc: "We concrete your brand’s foundation with a strong strategy, establishing clearly defined goals and a messaging framework",
    },
    {
      img: two,
      title: "Create",
      desc: "We concrete your brand’s foundation with a strong strategy, establishing clearly defined goals and a messaging framework",
    },
    {
      img: Three,
      title: "Think",
      desc: "We concrete your brand’s foundation with a strong strategy, establishing clearly defined goals and a messaging framework",
    },
    {
      img: heart,
      title: "Delivery",
      desc: "We concrete your brand’s foundation with a strong strategy, establishing clearly defined goals and a messaging framework",
    },
  ];
  return (
    <section className=" text-white md:py-32 py-16 flex flex-col md:gap-32 gap-16 ">
      <div className="flex justify-between items-center md:pl-12 pl-4 ">
        <div className=" flex flex-col gap-8">
          <div className="flex gap-4 items-center ">
            <div className="primary-main h-[8px] w-[8px] "></div>
            <h2 className="md:text-lg text-md uppercase ">Way of work</h2>
          </div>

          <h1 className="text-[35px] lg:text-[84px] md:text-6xl font-bold leading-[1]">
            Our
            <span className="text-primary-main"> Process</span>
          </h1>
        </div>

        {/* <div className="relative  md:w-[231px] w-[80px] md:h-[231px] h-[80px] -mt-[50px] -rotate-45">
          <Image
            src={heartWithoutBackground}
            alt="Moving Image"
            fill
            className="object-contain rounded-xl shadow-lg  md:ml-[80px] ml-[20px]"
          />
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:gap-6  lg:grid-cols-2 border-gray-700 md:px-20 px-4">
        {Wayofwork.map((wayofwork, idx) => (
          <div
            key={idx}
            className={`py-8 md:px-12 px-4  flex md:flex-row flex-col   justify-center items-center md:gap-0 gap-4 ${
              idx === 0 || idx === 1 ? "" : "lg:border-t border-0"
            } ${
              idx === 0 || idx === 2 ? "lg:border-r border-0" : "border-0"
            }   border-gray-700 
             
             `}
          >
            <div className="w-[190px] h-[190px] relative ">
              <Image
                src={wayofwork.img}
                alt={wayofwork.title}
                fill
                className={`object-contain `}
              />
            </div>
            <div className="flex flex-col gap-12 flex-1">
              <h1 className="text-5xl font-semibold">{wayofwork.title}</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {wayofwork.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wayofwork;
