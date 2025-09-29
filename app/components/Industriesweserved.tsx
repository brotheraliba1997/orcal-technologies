"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import heartWithoutBackground from "@/assests/Component 10.png";
import "swiper/css";
import "swiper/css/pagination";

export default function Industriesweserved() {
  const images = [
    heartWithoutBackground,
    heartWithoutBackground,
    heartWithoutBackground,
    heartWithoutBackground,
  ];

  return (
    <div className="md:px-12 px-4 mx-auto py-10 text-white  flex flex-col md:gap-32 gap-16">
      <div className=" mt-8 flex flex-col gap-8">
        <div className="flex gap-4 items-center ">
          <div className="primary-main h-[8px] w-[8px] "></div>
          <h2 className="md:text-lg text-sm  uppercase ">Way of work</h2>
        </div>

        <h1 className="text-[35px] md:text-[84px] font-bold leading-[1]">
          <span className="text-primary-main">Industries </span>
          we served
        </h1>
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
          320: { slidesPerView: 1.2, spaceBetween: 10 }, // mobile
          640: { slidesPerView: 2, spaceBetween: 15 }, // tablet
          1024: { slidesPerView: 2.5, spaceBetween: 20 }, // desktop
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`slide-${idx}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
