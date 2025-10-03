"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import heartWithoutBackground from "@/assests/Component 10.png";
import heartWithout1 from "@/assests/slider 1.png";
import heartWithout2 from "@/assests/slider 2.png";
import heartWithout3 from "@/assests/slider 3.png";
import heartWithout4 from "@/assests/slider 4.png";
import heartWithout5 from "@/assests/slider 5.png";
import heartWithout6 from "@/assests/slider 6.png";

import "swiper/css";
import "swiper/css/pagination";
import FlipCard from "./animation/FlipCard";
import TypewriterHTML from "./animation/letterAnimation";
import SectionLabel from "./SectionLabel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Industriesweserved() {
  const [showImageList, setShowImageList] = useState<boolean>(false);
  const images = [
    {
      firstImage: heartWithoutBackground,
      lastImage: heartWithout1,
    },

    {
      firstImage: heartWithout2,
      lastImage: heartWithout3,
    },

    {
      firstImage: heartWithout4,
      lastImage: heartWithout5,
    },

    {
      firstImage: heartWithout6,
      lastImage: heartWithout5,
    },
  ];

  const imagesList = [
    heartWithoutBackground,
    heartWithout1,
    heartWithout2,
    heartWithout3,
    heartWithout4,
    heartWithout5,
    heartWithout6,
    heartWithout5,
  ];

  const outsideClickRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target as Node)
      ) {
        setShowImageList(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="lg:block hidden md:px-12 px-4 mx-auto py-10 text-white  flex flex-col md:gap-32 gap-16">
        <div className=" mt-8 flex flex-col gap-8">
          <SectionLabel label={"Way of work"} />
          <div className="lg:h-[140px] h-[100px]">
            <TypewriterHTML
              html={`<h1 class="text-[35px] md:text-6xl lg:text-[84px] font-bold leading-[1]">
          <span class="text-primary-main">Industries </span>
          we served
        </h1> `}
            />
          </div>
        </div>
        <Swiper
          direction="horizontal"
          slidesPerView={2.5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <FlipCard image={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:hidden block px-4  py-10" ref={outsideClickRef}>
        <div className=" mt-8 flex flex-col gap-8 text-white">
          <SectionLabel label={"Way of work"} />
          <div className="h-[100px]">
            <TypewriterHTML
              html={`<h1 class="text-[35px] md:text-6xl lg:text-[84px] font-bold leading-[1]">
          <span class="text-primary-main">Industries </span>
          we served
        </h1> `}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {imagesList
            ?.slice(0, showImageList ? imagesList?.length : 3)
            .map((srcimg, idx) => (
              <div key={idx} className="relative h-[210px]">
                <Image
                  src={srcimg}
                  alt={`slide`}
                  fill
                  className=" object-cover rounded-2xl"
                />
              </div>
            ))}
        </div>

        <div
          className="text-white pt-8 text-center text-lg underline"
          onClick={() => setShowImageList(!showImageList)}
        >
          View More
        </div>
      </div>
    </>
  );
}
