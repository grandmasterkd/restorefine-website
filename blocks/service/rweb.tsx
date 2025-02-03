import React from "react";
import RestoServicesHero from "./resto-services/resto-hero";
import mesh from "@/public/restowebheromesh.svg";
import Image from "next/image";
import { RestoOverview } from "./resto-services/resto-overview";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
// import Cta from "@/components/cta";
import websignature from "@/public/websignature.svg";
import { rWebServices } from "@/lib/rwebServices";
import signature from "@/public/restowebsignature.svg";

function RWeb() {
  return (
    <main>
      <RestoServicesHero
        titletop="Crafting Web"
        titlebottom="Experiences That Connect"
        description="we create immersive journeys that captivate audiences and drive engagement. With strategy-led design and seamless functionality, RestoWeb brings your brand’s digital presence to life. "
      />

      <div className="absolute z-0 top-0 flex flex-col h-full items-center justify-center opacity-80">
        <Image
          src={mesh}
          alt="mesh"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>

      <RestoOverview {...rWebServices} />
      <RestoBenefits signature={websignature} />
      <RestoExpectation />
      {/* <Cta /> */}
      <section className="absolute inset-x-0 flex w-full overflow-x-hidden bg-transparent py-0 gap-x-4">
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image
            src={signature}
            alt="signature"
            layout="responsive"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image
            src={signature}
            alt="signature"
            layout="responsive"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}

export default RWeb;
