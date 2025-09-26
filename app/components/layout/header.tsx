"use client";


import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import bullseye from "@/assests/Bullseye-logo.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full flex justify-between md:h-[74px] h-[50px]">
      <div className=" flex items-center justify-between gap-4 h-full  ">
        <div className="md:py-5 py-2 md:px-6 px-4  primary-main h-full flex justify-center items-center">
          <GiHamburgerMenu  />
        </div>
        <div className="relative md:w-[210px] w-[100px] md:h-[60px] h-full ">
          <Image src={bullseye} layout="fill" objectFit="contain" alt="Logo" />
        </div>
      </div>

      <div className=" flex items-center justify-between gap-4 h-full  border-b border-[#F3FF9F]">
        <h1 className="md:text-[24px] text-[14px] text-white">Contact us</h1>

        <div className="md:py-5 py-2 md:px-6 px-4  primary-main h-full flex justify-center items-center">
          <FaArrowRight />
        </div>
      </div>
    </header>
  );
}
