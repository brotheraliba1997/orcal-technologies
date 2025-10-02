"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import glass from "@/assests/Creativity-glass.png";
import creating from "@/assests/creatibg-right.png";
import SectionLabel from "./SectionLabel";
import AnimationBackGround from "./animation/AnimationBackGround";

import TypewriterHTML from "./animation/letterAnimation";

export default function AboutUs() {
  return (
    <>
      <AnimationBackGround>
        <section className="text-white  ">
          <div className="flex justify-between items-center ">
            <div className="md:px-12 px-4 lg:mt-8  mt-4 flex flex-col gap-8 ">
              <SectionLabel label={"About Us"} />

              {/* <h1 className="text-[30px] lg:text-[84px] md:text-5xl font-bold leading-[1]">
                Where <span className="text-primary-main">Creativity</span>{" "}
                <br /> Connects.
              </h1> */}

              <div className="h-[200px]">
                <TypewriterHTML
                  html={`<h1 class="text-[30px] lg:text-[84px] md:text-5xl font-bold leading-[1]">
                Where <span class="text-primary-main">Creativity</span>
                <br /> Connects.
              </h1>`}
                />
              </div>

              {/* <Hero /> */}
            </div>

            <div className="relative lg:w-[273px] md:w-[150px] w-[100px] lg:h-[273px] md:h-[150px] h-[100px] lg:-mt-[50px] md:mt-[40px] -mt-[140px]  ">
              <Image
                src={creating}
                alt="Moving Image"
                fill
                className="object-contain "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:px-10 px-4  w-screen">
            <motion.div
              animate={{ y: [0, -40, 0, 40, 0], x: [0, 20, 0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full lg:h-[600px] md:h-[500px] h-[300px]"
            >
              <Image
                src={glass}
                alt="Moving Image"
                fill
                className="object-contain"
              />
            </motion.div>

            

            <div className="h-[200px] w-full">
              <TypewriterHTML
                html={`<p class="lg:text-2xl md:text-2xl text-sm text-[#BBBBBB] leading-relaxed">
                Creating a logo design is an intricate process that should
                incorporate your brand's vision, and for that, you need
                the best logo designers in Dubai. At Moonbox we have a team of
                creative design experts who are exceptional in logo designing in
                Dubai and create logos that capture the distinctiveness and
                essence of your brand. We develop logos by integrating your
                brand 's ethos with designers who will closely
                collaborate with you to bring in a design that will highlight
                your brand's character and resonate with the audience.
                Transform your brand presence with Moonbox, Dubai' s most
                professional and influential logo design company.
              </p>`}
              />
            </div>
          </div>
        </section>
      </AnimationBackGround>
    </>
  );
}
