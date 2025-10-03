"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Label {
  label: string;
}

function SectionLabel({ label }: Label) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (1s)
      once: false, // scroll upar wapas aane pe dobara trigger hoga
    });
  }, []);

  return (
    <div data-aos="fade-right" className="flex gap-2 items-center">
      <div className="primary-main h-[8px] w-[8px] "></div>
      <p className="md:text-lg text-lg tracking-widest uppercase "> {label} </p>
    </div>
  );
}

export default SectionLabel;
