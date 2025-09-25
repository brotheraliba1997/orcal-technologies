import Image from "next/image";
import logo1 from "@/assests/fire-shop-logo.png";
import Glass from "@/assests/Glass-shop-logo.png";
import person from "@/assests/person-shop-logo.png";
import book from "@/assests/book-shop-logo.png";
import bussines from "@/assests/bussines-shop-logo.png";

const services = [
  {
    img: logo1,
    title: "Company Logo Design",
    desc: "To craft a distinctive and recognizable logo, we narrow down your brand’s colours, logo marks, fonts, and many more.",
  },
  {
    img: Glass,
    title: "Packaging Logo Design",
    desc: "To craft a distinctive and recognizable logo, we narrow down your brand’s colours, logo marks, fonts, and many more.",
  },
  {
    img: person,
    title: "Corporate Identity Design",
    desc: "To craft a distinctive and recognizable logo, we narrow down your brand’s colours, logo marks, fonts, and many more.",
  },
  {
    img: book,
    title: "Stationery Design",
    desc: "To craft a distinctive and recognizable logo, we narrow down your brand’s colours, logo marks, fonts, and many more.",
  },
  {
    img: bussines,
    title: "Website UI/UX Design",
    desc: "To craft a distinctive and recognizable logo, we narrow down your brand’s colours, logo marks, fonts, and many more.",
  },
  {
    img: logo1,
    title: "",
  },
];

export default function OurServices() {
  return (
    <section className=" text-white py-20 flex flex-col gap-32">
      {/* Heading */}
      <div className="px-12 mt-8 flex flex-col gap-8">
        <div className="flex gap-4 items-center ">
          <div className="primary-main h-[8px] w-[8px] "></div>
          <h2 className="text-lg  uppercase ">OUR SERVICES</h2>
        </div>

        <h1 className="text-[44px] md:text-[84px] font-bold leading-[1]">
          One-stop shop for your{" "}
          <span className="text-primary-main">logo & design</span> solution
        </h1>
      </div>

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-gray-700">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-8 flex flex-col justify-center items-center gap-4 border-gray-700 ${
              idx !== services.length - 1 ? "border" : "border-t"
            } `}
          >
            <div className="w-[300px] h-[300px] relative">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
