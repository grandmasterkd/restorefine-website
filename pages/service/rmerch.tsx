import React from "react";
import restostar from "@/public/restostar.svg";
import Image from "next/image";
import ring from "@/public/merchring.svg";
import tri from "@/public/merchangle.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RestoOverview } from "./resto-services/resto-overview";
import RestoBenefits from "./resto-services/resto-benefits";

const star = <Image src={restostar} alt="RestoStar" width={100} height={100} />;
const merchring = <Image src={ring} alt="MerchRing" width={150} height={150} />;
const triangle = <Image src={tri} alt="MerchAngle" width={50} height={50} />;

function RMerch() {
  return (
    <main className="py-44">
      <section className="relative z-10 flex flex-col items-center justify-center text-center gap-y-4">
        <h1 className="text-center text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
          <span className="py-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            Finally You Can
            <br />
            Print, Wear and Impress
          </span>
        </h1>

        <Link
          href="/enquire-now"
          className="flex items-center gap-1 mt-1 hover:opacity-90"
        >
          <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">
            Lets Craft Something
          </div>
          <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
        </Link>
      </section>

      <section className="pt-16 pb-36">
        <div className="">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-md w-[350px] text-white leading-relaxed">
              we create immersive journeys that captivate audiences and drive
              engagement. With strategy-led design and seamless functionality,
              RestoWeb brings your brand&apos;s digital presence to life.
            </p>

            <div className="relative flex items-center justify-center">
              {merchring}
              <span className="absolute">{triangle}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Left column */}
            <div className="mt-12 grid gap-4">
              <div className="h-[200px] bg-[#d9d9d9] rounded-[32px]" />
              <div className="h-[300px] bg-[#d9d9d9] rounded-[32px]" />
            </div>

            {/* Center column */}
            <div className="relative">
              <div className="absolute -top-24 z-10 left-1/2 -translate-x-1/2">
                {star}
              </div>
              <div className="absolute -top-12 z-0 h-[700px] bg-[#d9d9d9] rounded-[32px] w-full h-full" />
            </div>

            {/* Right column */}
            <div className="mt-12 grid gap-4">
              <div className="h-[300px] bg-[#d9d9d9] rounded-[32px]" />
              <div className="h-[200px] bg-[#d9d9d9] rounded-[32px]" />
            </div>
          </div>
        </div>
      </section>

      <RestoOverview />
      <RestoBenefits />
    </main>
  );
}

export default RMerch;
