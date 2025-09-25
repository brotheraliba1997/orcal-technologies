import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import SocialFAQs from "../SocialFAQs";
import Image from "next/image";
import bullseye from "@/assests/Bullseye-logo.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="pt-[150px] px-10 pb-8 flex flex-col gap-32">
        <div className="grid grid-cols-8 gap-12">
          <div className="flex flex-col gap-8 col-span-3 ">
            <h2 className="text-4xl text-white">Stay connected</h2>

            <h4 className="text-[18px]  text-[#AAA9AD]">
              Join our newsletter for tips, updates, and project highlights—only
              the good stuff.
            </h4>

            <div className="bg-[#16171b] py-3 px-2 rounded-md flex gap-2 justify-between border border-[#222327]">
              <input
                type="email"
                className="bg-transparent border-none px-4 placeholder-white w-full focus:placeholder-gray-300"
                placeholder="Enter email address*"
              />
              <div className="bg-white p-3 flex justify-center items-center rounded-full ">
                <FaArrowRight />
              </div>
            </div>
          </div>

          <div className="flex col-span-2 justify-center ">
            <div className="flex flex-col gap-3 text-[18px] text-white  ">
              <h3 className="font-semibold text-[20px] mb-2">Main Links</h3>
              <Link href="/" className="hover:text-[#AAA9AD] ">
                Home
              </Link>
              <Link
                href="#"
                className="hover:text-[#AAA9AD] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="hover:text-[#AAA9AD] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="hover:text-[#AAA9AD] transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="flex justify-end  col-span-2">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3 text-[18px] text-white  ">
                <h3 className="font-semibold text-[20px] mb-2 transition-colors">
                  Get in touch
                </h3>

                <p className="hover:text-primary-main transition-colors cursor-pointer">
                  +1 (415) 555-0167
                </p>

                <Link
                  href="mailto:example@gmail.com"
                  className="hover:text-primary-main transition-colors text-[28px]"
                >
                  example@gmail.com
                </Link>
              </div>

              <div className="flex flex-col gap-3 text-white">
                <p className="text-gray-300">Offline</p>

                <p className="font-medium">Bullseye</p>
                <p className="text-[20px]">
                  1238 Echo Ridge Blvd, Suite 400 <br />
                  San Francisco
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div>
            <SocialFAQs />
          </div>

          <div className="relative w-full h-[176px] col-span-2">
            <Image
              src={bullseye}
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>
        </div>

        <div className="border-t border-gray-600 text-white py-8 flex justify-between items-center w-full px-4">
          <h2 className="text-[16px] text-white">Copyrights</h2>
          <div className="flex gap-4 text-[16px]">
            <h2 className=" ">© 2025 All rights reserved </h2>
            <h2 className=" ">Privacy Policy </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
