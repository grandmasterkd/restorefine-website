import silverRing from "@/public/metallic-abstract-silver-shape.png";
import Image from "next/image";
import nfc from "@/public/resto-nfc-des.svg";
import dashboard from "@/public/Macbook_Air_Mockup_mod.png";
import menu from "@/public/himalayan-menu.svg";
import stationery from "@/public/Essential-Stationery-Mockup.png";

export function BentoGrid() {
  return (
    <section className="">
      {/* Text Content */}
      <div className=" text-center mb-16">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={silverRing}
            alt="silver ring"
            width={130}
            height={130}
            className=""
          />
        </div>

        <h2 className="mb-4 text-3xl font-medium text-white md:text-3xl lg:text-4xl font-medium text-white ">
          Not Reinventing The Wheel,
          <br />
          Just Giving You Better
        </h2>
        <p className="text-lg text-white/80">
          RestoRefine Studios is your all-in-one digital partner, dedicated to
          <br />
          the vibrant world of hospitality.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Large Rectangles */}
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313] grid place-items-center">
            <Image
              src={nfc}
              alt="restorefine-nfc"
              width={400}
              height={400}
              className="object-cover mt-2 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313] flex flex-col items-end justify-end">
            <Image
              src={dashboard}
              alt="resto-dashboard"
              width={470}
              height={470}
              className="object contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Small Rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313] grid place-items-center">
            <Image
              src={menu}
              alt="himalayan-dine-in-menu"
              width={180}
              height={180}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313]" />
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313] grid place-items-center">
            <Image
              src={stationery}
              alt="restorefine-cards"
              width={230}
              height={230}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
