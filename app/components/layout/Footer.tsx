"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import SocialFAQs from "../SocialFAQs";
import Image from "next/image";
import bullseye from "@/assests/Bullseye-logo.png";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingSpinner from "../common/spinner";
import AOS from "aos";
import "aos/dist/aos.css";

interface Form {
  email: string;
}

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState<Form>({
    email: "",
  });
  const [loading, setLoading] = useState<boolean>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandleChange = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const dataSubmited = await axios.post("/api/news-letter", formData);
      console.log(dataSubmited?.data?.message);
      setLoading(false);
      setFormData({ email: "" });

      toast.success(dataSubmited?.data?.message);
    } catch (err: any) {
      setLoading(false);

      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="lg:pt-[60px] pt-[40px] md:px-6 px-6   flex flex-col md:gap-12 gap-8">
        <div className="grid lg:grid-cols-8 grid-cols-1 md:gap-12 gap-4">
          <div className="flex flex-col gap-8 md:col-span-3 ">
            <h2 className="text-4xl text-white">Stay connected</h2>

            <h4 className="text-[18px]  text-[#AAA9AD]">
              Join our newsletter for tips, updates, and project highlights—only
              the good stuff.
            </h4>

            <div className="bg-[#16171b] py-3 px-2 w-full rounded-md flex gap-2 justify-between border border-[#222327]">
              <input
                type="email"
                className="bg-transparent border-none px-4  placeholder-white w-full focus:placeholder-gray-300 text-white"
                placeholder="Enter email address*"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />

              {loading ? (
                <LoadingSpinner />
              ) : (
                <div
                  className="bg-white p-4 flex justify-center items-center rounded-full "
                  onClick={submitHandleChange}
                >
                  <FaArrowRight />
                </div>
              )}
            </div>
          </div>

          <div className="flex col-span-2 lg:justify-center justify-start ">
            <div className="flex flex-col gap-3 text-[18px] text-white  ">
              <h3 className="font-semibold text-[20px] mb-2">Main Links</h3>
              <Link href="/" className="hover:text-[#AAA9AD] ">
                Home
              </Link>
              <Link href="#" className="hover:text-[#AAA9AD] transition-colors">
                About Us
              </Link>
              <Link href="#" className="hover:text-[#AAA9AD] transition-colors">
                Projects
              </Link>
              <Link href="#" className="hover:text-[#AAA9AD] transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex lg:justify-end justify-start  lg:col-span-2">
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

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-x-2 gap-y-8">
          <div>
            <SocialFAQs />
          </div>

          <div
            data-aos="fade-up"
            className="relative w-full md:h-[176px] h-[100px] col-span-2"
          >
            <Image
              src={bullseye}
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>
        </div>

        <div className="border-t border-gray-600 text-white md:py-8 py-4 flex justify-between items-center w-full md:px-4 px-0">
          <h2 className="md:text-[16px] text-[12px] text-white">Copyrights</h2>
          <div className="flex md:gap-4 gap-2 md:text-[16px] text-[12px]">
            <h2 className=" ">© 2025 All rights reserved </h2>
            <h2 className=" ">Privacy Policy </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
