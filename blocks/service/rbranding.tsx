import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";
// import Cta from "@/components/cta";
import signature from "@/public/restobrandingsignature.svg";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
import money from "@/public/moneystartgraphic.svg";
import { rBrandingServices } from "@/lib/rbrandingServices";
import artefacts from "@/public/services/branding/rbrandinghomemobile.svg";

function RBranding() {
  return (
    <main className="">
      <RestoServicesHero
        titletop="Resto-lutionary Branding"
        titlebottom="For Bold Visions"
        description="With RestoBranding, develop a compelling brand that captures attention. From logo design to complete brand development, including social media graphics, we ensure your brand communicates clearly and effectively across all channels. "
      />

      <section className="absolute top-64 left-0 right-0 lg:top-12 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-0 gap-2">
        <div className="hidden lg:flex">
          <div>
            <Image src={baloon} alt="baloon" width={180} height={180} />
          </div>

          <div>
            <Image src={ball} alt="ball" width={150} height={150} />
          </div>
        </div>
        <div className="block lg:hidden">
          <Image src={artefacts} alt="artefacts" width={300} height={300} />
        </div>
      </section>

      <RestoOverview {...rBrandingServices} />
      <RestoBenefits signature={money} />
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

export default RBranding;
