import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";
import Cta from "@/components/cta";
import signature from "@/public/restobrandingsignature.svg";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
import money from "@/public/moneystartgraphic.svg";

function RBranding() {
  return (
    <main className="">
      <RestoServicesHero
        titletop="Resto-lutionary Branding"
        titlebottom="For Bold Visions"
        description="With RestoBranding, develop a compelling brand that captures attention. From logo design to complete brand development, including social media graphics, we ensure your brand communicates clearly and effectively across all channels. "
      />

      <div className="absolute left-0 right-0 top-12 h-full flex items-center justify-between">
        <div>
          <Image src={baloon} alt="baloon" width={180} height={180} />
        </div>

        <div>
          <Image src={ball} alt="ball" width={150} height={150} />
        </div>
      </div>

      <RestoOverview />
      <RestoBenefits signature={money} />
      <RestoExpectation />
      <Cta />
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
