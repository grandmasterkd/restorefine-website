import Image from "next/image";
import React from "react";
import hollow from "@/public/servicesherographic.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ServicesHero() {
  return (
    <main className="grid place-items-center min-h-screen gap-y-4">
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-left gap-y-3 md:gap-y-4">
        <div className="text-left flex flex-col items-start gap-y-4">
          <h1 className="relative z-0 text-left font-medium tracking-tight rservicehero text-4xl md:text-6xl">
            <span className="py-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
              Tranforming
              <br />
              Visions Into
              <br />
              Impactful Brands
            </span>
          </h1>
          <p className="w-full lg:w-3/4 text-sm sm:text-base text-white/80 pb-2">
            From concept to creation, we craft brands that resonate, inspire,
            and drive results. Our team blends strategy, creativity, and
            innovation to build identities that stand out in a crowded world.
          </p>
          <div>
            <Link href="/enquire-now" className="flex items-center gap-1">
              <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">
                Lets Craft Something
              </div>
              <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={hollow}
            alt="hollow"
            width={750}
            height={750}
            layout="responsive"
          />
        </div>
      </section>
      <section className="absolute -bottom-10 lg:bottom-0 left-0 right-0 flex overflow-x-hidden bg-transparent py-4 gap-4 rotate">
        <div className="animate-marquee-infinite text-7xl font-bold text-white/60 flex min-w-screen shrink-0 items-center justify-around gap-8">
          RestoWeb. RestoBranding. RestoPrinting. RestoMerch. RestoMedia.
        </div>
        <div className="animate-marquee-infinite text-7xl font-bold text-white/60 flex min-w-screen shrink-0 items-center justify-around gap-8">
          RestoWeb. RestoBranding. RestoPrinting. RestoMerch. RestoMedia.
        </div>
      </section>
    </main>
  );
}

export default ServicesHero;
