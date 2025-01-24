import React from "react";
import restostar from "@/public/restostar.svg";
import Image from "next/image";
import ring from "@/public/merchring.svg";
import tri from "@/public/merchangle.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import { RestoOverview } from "./resto-services/resto-overview";
import RestoBenefits from "./resto-services/resto-benefits";
import Cta from "@/components/cta";
import hood from "@/public/merchsignature.svg";

const star = <Image src={restostar} alt="RestoStar" width={100} height={100} />;
const merchring = <Image src={ring} alt="MerchRing" width={150} height={150} />;
const triangle = <Image src={tri} alt="MerchAngle" width={50} height={50} />;

const aboutRMerch = [
  {
    title: "Personalised Stationery",
    description:
      "Supply custom-designed pens, notepads, and business cards that keep your brand in customers' minds.",
  },
  {
    title: "Custom Clothing and Apparel",
    description:
      "Create uniquely branded uniforms, t-shirts, and aprons that your staff will wear with pride.",
  },
  {
    title: "Promotional Items",
    description:
      "Develop keychains, mugs, and other promotional items that make great giveaways and keep your brand visible.",
  },
];

const services = ["Apparel Print", "Stationery Print", "Branding", "Design"];

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
              Enhance your branding with RestoMerch’s personalized products.
              From stationery to clothing, we provide custom merchandise
              solutions that help promote and amplify your brand visibility.
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

      <section className="py-24">
        <div className="">
          <div className="grid md:grid-cols-3 gap-8">
            {aboutRMerch.map((item, index) => (
              <div key={index} className="flex items-center space-y-6">
                <div>
                  <h2 className="text-2xl font-medium text-white mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index !== aboutRMerch.length - 1 && (
                  <div className=" $ w-1 h-full bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <RestoOverview /> */}
      <RestoBenefits signature={hood} />

      <section className="py-32">
        <div className="">
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
              And We&apos;ll Do Something
              <br />
              Like This For You
            </h2>
            <p className="text-sm text-white/80">
              Meet the creative minds at RestoRefine Studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-baseline mb-8">
            {/* Top row with layered effect */}
            <div className="relative">
              <div className="absolute -top-5 left-6 w-[85%] h-[330px] bg-[#ABA9A9] rounded-[32px]" />

              <div className="relative w-full h-[330px] bg-[#d9d9d9] rounded-[32px]" />
            </div>
            <div className=" h-[350px] bg-[#d9d9d9] rounded-[32px] lg:col-span-2" />
          </div>

          <div className="flex flex-wrap gap-4">
            {services.map((service) => (
              <button
                key={service}
                className="px-6 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}

export default RMerch;
