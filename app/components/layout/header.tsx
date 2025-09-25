"use client";


import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import bullseye from "@/assests/Bullseye-logo.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full flex justify-between h-[74px]">
      <div className=" flex items-center justify-between gap-4 h-full ">
        <div className="py-5 px-6  primary-main h-full flex justify-center items-center">
          <GiHamburgerMenu />
        </div>
        <div className="relative w-[210px] h-[60px] ">
          <Image src={bullseye} layout="fill" objectFit="contain" alt="Logo" />
        </div>
      </div>

      <div className=" flex items-center justify-between gap-4 h-full  border-b border-[#F3FF9F]">
        <h1 className="text-[24px] text-white">Contact us</h1>

        <div className="py-5 px-6  primary-main h-full flex justify-center items-center">
          <FaArrowRight />
        </div>
      </div>
    </header>
  );
}
