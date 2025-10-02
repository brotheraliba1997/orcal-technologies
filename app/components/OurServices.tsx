
import logo1 from "@/assests/fire-shop-logo.png";
import blink from "@/assests/our-service-blink.png";
import Glass from "@/assests/Glass-shop-logo.png";
import person from "@/assests/person-shop-logo.png";
import book from "@/assests/book-shop-logo.png";
import bussines from "@/assests/bussines-shop-logo.png";
import SectionLabel from "./SectionLabel";
import TypewriterHTML from "./animation/letterAnimation";
import ServiceCard from "./ServiceCard";

const services = [
  {
    img: logo1,
    title: "Company Logo Design",
    desc: "To craft a distinctive and recognizable logo, we narrow down your brand’s colourss, logo marks, fonts, and many more.",
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
    img: blink,
    title: "",
  },
];

export default function OurServices() {
  return (
    <section className=" text-white lg:py-20 py-10 flex flex-col md:gap-32 gap-2">
      <div className="md:px-12 px-4 mt-8 flex flex-col gap-8">
        <SectionLabel label={"OUR SERVICES"} />

        <div className="h-[200px]">
          <TypewriterHTML
            html={` <h1 class="text-[35px] md:text-6xl lg:text-[84px] font-bold leading-[1]">
          One-stop shop for your
          <span class="text-primary-main">logo & design</span> solution
        </h1>`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-gray-700 md:px-0 px-4  ">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`  flex flex-col justify-center items-center lg:gap-8 gap-4 hover:border-[#F3FF9F] border-gray-700  ${
              idx !== services.length - 1 ? "border" : "border-t"
            } `}
          >
            <ServiceCard service={service} idx={idx} services={services} />

            <div className="h-[100px] md:px-12 px-4 md:py-8 py-4 ">
              <TypewriterHTML
                html={`<h1 class="lg:text-5xl text-2xl font-semibold">
              ${service.title}
            </h1>`}
              />
            </div>

            <p className="text-gray-400 lg:text-lg text-md leading-relaxed md:px-12 px-4 md:py-8 py-4 ">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
