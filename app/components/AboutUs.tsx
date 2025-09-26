"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import glass from "@/assests/Creativity-glass.png";
import creating from "@/assests/creatibg-right.png";


export default function AboutUs() {
  return (
    <section className="text-white">
      <div className="flex justify-between items-center">
        <div className="px-12 mt-8 flex flex-col gap-8">
          <div className="flex gap-2 items-center ">
            <div className="bg-[#71FF49] h-[8px] w-[8px] rounded-full"></div>
            <p className="text-lg tracking-widest uppercase">IN DUBAI</p>
          </div>

          <h1 className="text-[44px] md:text-[84px] font-bold leading-[1]">
            Where <span className="text-primary-main">Creativity</span> <br />{" "}
            Connects.
          </h1>
        </div>

        <div className="relative  w-[273px] h-[273px] -mt-[50px]">
          <Image
            src={creating}
            alt="Moving Image"
            fill
            className="object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="relative  grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-10 ">
        <motion.div
          animate={{ y: [0, -40, 0, 40, 0], x: [0, 20, 0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-[600px]"
        >
          <Image
            src={glass}
            alt="Moving Image"
            fill
            className="object-contain rounded-xl shadow-lg"
          />
        </motion.div>

        <div>
          <p className="text-lg text-[#BBBBBB] leading-relaxed">
            Creating a logo design is an intricate process that should
            incorporate your brand`&apos;`s vision, and for that, you need the best
            logo designers in Dubai. At Moonbox we have a team of creative
            design experts who are exceptional in logo designing in Dubai and
            create logos that capture the distinctiveness and essence of your
            brand. We develop logos by integrating your brand`&apos;` s ethos with
            designers who will closely collaborate with you to bring in a design
            that will highlight your brand`&apos;`s character and resonate with the
            audience. Transform your brand presence with Moonbox, Dubai`&apos;` s most
            professional and influential logo design company.
          </p>
        </div>
      </div>
    </section>
  );
}
