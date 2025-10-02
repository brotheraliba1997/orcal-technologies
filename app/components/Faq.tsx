"use client";

import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react"; // lucide-react icons
import Image from "next/image";
import heartWithoutBackground from "@/assests/heartWithoutcolor.png";
import AnimationBackGround from "./animation/AnimationBackGround";
import TypewriterHTML from "./animation/letterAnimation";
import SectionLabel from "./SectionLabel";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    id: "001",
    question: "What does your brand identity service include?",
    answer:
      "Our brand identity package typically includes logo design, color palette, typography, brand guidelines, and key visual elements.",
  },
  {
    id: "002",
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary, but typically range from 4 to 8 weeks depending on scope.",
  },
  {
    id: "003",
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients worldwide through remote collaboration.",
  },
  {
    id: "004",
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely! We provide maintenance, updates, and support packages.",
  },
  {
    id: "005",
    question: "What platforms do you develop on?",
    answer:
      "We specialize in Next.js, WordPress, Shopify, and custom solutions.",
  },
  {
    id: "006",
    question: "What do you need from me to get started?",
    answer:
      "We’ll need details about your brand, goals, references, and any existing assets.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<any>([]);

  const toggle = (id: any) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (1s)
      once: false, // scroll upar wapas aane pe dobara trigger hoga
    });
  }, []);

  return (
    <section className="text-white  py-20 flex flex-col lg:gap-32 gap-16 relative ">
      <AnimationBackGround>
        <div className="grid lg:grid-cols-8 grid-cols-1  lg:pl-18 pl-4 lg:pr-4  pr-4  justify-between w-full ">
          <div className=" flex flex-col gap-8 col-span-2">
            <SectionLabel label={"Way of work"} />

            <div className="h-[100px]">
              <TypewriterHTML
                html={`<h1 class="text-[44px] md:text-[84px] font-bold leading-[1]">
            <span class="text-primary-main"> FAQ.</span>
          </h1> `}
              />
            </div>
          </div>

          <div className="md:mt-32 mt-16 space-y-6 col-span-5 ">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                data-aos={
                  index === 1  ? "fade-left" : "fade-right"
                }
                className="border-b border-gray-300 pb-4 cursor-pointer"
                onClick={() => toggle(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-4  font-medium md:text-xl text-sm w-full">
                    <p>
                      <span className="text-primary-main mr-1">
                        {openId === faq?.id && "/"}
                      </span>

                      {faq?.id}

                      <span className="text-primary-main ml-1">
                        {openId !== faq?.id && "/"}
                      </span>
                    </p>

                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-4 justify-between ">
                        <h3 className="md:text-xl text-sm font-medium">
                          {" "}
                          {faq.question}
                        </h3>
                        {openId === faq.id ? (
                          <Minus className="md:w-6 w-3 md:h-6 h-3 text-primary-main" />
                        ) : (
                          <Plus className="md:w-6 w-3 md:h-6 h-3 text-primary-main" />
                        )}
                      </div>

                      {openId === faq.id && (
                        <p className="mt-3 text-gray-600 md:text-xl text-sm">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Answer */}
              </div>
            ))}
          </div>
          <div className="lg:block hidden">
            <div className=" w-full flex justify-end absolute left-32  top-16 -z-10">
              <div className="relative  md:w-[200px] w-[100px] md:h-[200px] h-[100px]  -rotate-45">
                <Image
                  src={heartWithoutBackground}
                  alt="Moving Image"
                  fill
                  className="object-contain rounded-xl shadow-lg blur-[20px] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ List */}
      </AnimationBackGround>
    </section>
  );
}
