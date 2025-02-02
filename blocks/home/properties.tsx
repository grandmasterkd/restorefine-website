import silverRing from "@/public/metallic-abstract-silver-shape.png";
import Image from "next/image";
import nfc from "@/public/resto-nfc-des.svg";
import dashboard from "@/public/Macbook_Air_Mockup_mod.png";
import menu from "@/public/himalayan-menu.svg";
import stationery from "@/public/Essential-Stationery-Mockup.png";
import shirt from "@/public/resto-customtshirt.png";

export function BentoGrid() {
  return (
    <section className="">
      {/* Text Content */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-16 gap-y-3 md:gap-y-4">
        <div className="">
          <Image
            src={silverRing}
            alt="silver ring"
            width={120}
            height={120}
            sizes="(max-width: 900px) 50px"
            className="hidden md:block"
          />
        </div>

        <h2 className="max-w-[100%] md:max-w-[50%] text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
          Not Reinventing The Wheel, Just Giving You Better
        </h2>
        <p className="max-w-[80%] md:max-w-[50%] text-sm sm:text-md md:text-base text-white/80">
          Your all-in-one digital partner, dedicated to the vibrant world of
          hospitality.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Large Rectangles */}
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313] grid place-items-center p-4 md:p-0">
            <Image
              src={nfc}
              alt="restorefine-nfc"
              width={400}
              height={400}
              className="object-cover mt-2 grayscale-none md:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="aspect-[4/3] rounded-[24px] bg-[#131313] flex flex-col items-end justify-end pl-4 pt-4 md:pl-0 md:pt-0">
            <Image
              src={dashboard}
              alt="resto-dashboard"
              width={470}
              height={470}
              className="object contain grayscale-none md:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Small Rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-[270px] rounded-[24px] bg-[#131313] grid place-items-center">
            <Image
              src={menu}
              alt="himalayan-dine-in-menu"
              width={180}
              height={180}
              className="object-contain grayscale-none md:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="h-[270px] rounded-[24px] bg-[#131313] grid place-items-center">
            <Image
              src={shirt}
              alt="restorefine-custom-shirt"
              width={190}
              height={190}
              className="object-contain grayscale-none md:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="h-[270px] rounded-[24px] bg-[#131313] grid place-items-center">
            <Image
              src={stationery}
              alt="restorefine-cards"
              width={230}
              height={230}
              className="object-contain grayscale-none md:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
