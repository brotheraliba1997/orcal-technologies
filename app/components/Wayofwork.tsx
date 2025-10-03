import Image from "next/image";
import React from "react";

import logo1 from "@/assests/One.png";
import two from "@/assests/two.png";
import Three from "@/assests/Three.png";
import heart from "@/assests/heart-frame.png";
import AnimationBackGround from "./animation/AnimationBackGround";
import TypewriterHTML from "./animation/letterAnimation";
import SectionLabel from "./SectionLabel";
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
    <AnimationBackGround>
      <section className=" text-white md:py-8 py-8 flex flex-col md:gap-32 gap-2 ">
        <div className="flex justify-between items-center md:pl-12 pl-4 ">
          <div className=" flex flex-col lg:gap-8 gap-4">
            <SectionLabel label={"Way of work"} />

            <div className="lg:h-[100px] h-[40px]">
              <TypewriterHTML
                html={` <h1 class="text-[35px] lg:text-[84px] md:text-6xl font-bold leading-[1]">
            Our
            <span class="text-primary-main"> Process</span>
          </h1>`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:gap-0 md:gap-6  lg:grid-cols-2 border-gray-700 md:px-20 px-0">
          {Wayofwork.map((wayofwork, idx) => (
            <div
              key={idx}
              className={`py-8 md:px-12 px-4  flex md:flex-row flex-col   lg:justify-center justify-start lg:items-center items-start md:gap-0 gap-4 ${
                idx === 0 || idx === 1 ? "" : "lg:border-t border-0"
              } ${
                idx === 0 || idx === 2 ? "lg:border-r border-0" : "border-0"
              }   border-gray-700 
             
             `}
            >
              <div className="lg:w-[190px] lg:h-[190px] w-[92] h-[92px] relative ">
                <Image
                  src={wayofwork.img}
                  alt={wayofwork.title}
                  fill
                  className={`object-contain  hover:-rotate-8`}
                />
              </div>
              <div className="flex flex-col gap-8 flex-1">
                <div className="lg:h-[50px] h-[30px]">
                  <TypewriterHTML
                    html={`<h1 class="lg:text-5xl text-4xl font-semibold"> ${wayofwork.title} </h1>`}
                  />
                </div>

                {/* <h1 className="text-5xl font-semibold">{wayofwork.title}</h1> */}
                <p className="text-[#BBBBBB] text-lg leading-relaxed">
                  {wayofwork.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimationBackGround>
  );
}

export default Wayofwork;
