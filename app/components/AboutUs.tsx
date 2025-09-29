"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import glass from "@/assests/Creativity-glass.png";
import creating from "@/assests/creatibg-right.png";
import SectionLabel from "./SectionLabel";
// import AnimationBackGround from "./AnimationBackGround";


export default function AboutUs() {
  return (

    <> 

{/* <AnimationBackGround > */}

   <section className="text-white  ">
      <div className="flex justify-between items-center ">
        <div className="md:px-12 px-4 md:mt-8  mt-4 flex flex-col gap-8 ">
          <SectionLabel label={"About Us"} />

          <h1 className="text-[30px] md:text-[84px] font-bold leading-[1]">
            Where <span className="text-primary-main">Creativity</span> <br />{" "}
            Connects.
          </h1>
        </div>

        <div className="relative md:w-[273px] w-[100px] md:h-[273px] h-[100px] md:-mt-[50px] -mt-[50px]  ">
          <Image
            src={creating}
            alt="Moving Image"
            fill
            className="object-contain "
          />
        </div>
      </div>

      <div className="relative  grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:px-10 px-4 ">
        <motion.div
          animate={{ y: [0, -40, 0, 40, 0], x: [0, 20, 0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full lg:h-[600px] h-[300px]"
        >
          <Image
            src={glass}
            alt="Moving Image"
            fill
            className="object-contain"
          />
        </motion.div>

        <div>
          <p className="md:text-lg text-sm text-[#BBBBBB] leading-relaxed">
            Creating a logo design is an intricate process that should
            incorporate your brand`&apos;`s vision, and for that, you need the
            best logo designers in Dubai. At Moonbox we have a team of creative
            design experts who are exceptional in logo designing in Dubai and
            create logos that capture the distinctiveness and essence of your
            brand. We develop logos by integrating your brand`&apos;` s ethos
            with designers who will closely collaborate with you to bring in a
            design that will highlight your brand`&apos;`s character and
            resonate with the audience. Transform your brand presence with
            Moonbox, Dubai`&apos;` s most professional and influential logo
            design company.
          </p>
        </div>
      </div>
    </section>
 {/* </AnimationBackGround> */}

     </>




 
  );
}
