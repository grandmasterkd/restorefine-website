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
import printsketch from "@/public/printherobg.svg";

function RPrint() {
  return (
    <main className="">
      <RestoServicesHero
        titletop="Creating Long-Lasting"
        titlebottom="Print Impressions"
        description="Expert guidance and execution on all your printing needs. From menus to promotional materials, we ensure high-quality print outputs that truly represent your brand’s excellence. "
      />

      <div className="absolute z-0 left-0 right-0 top-28 min-w-full mx-auto min-h-screen flex flex-col items-center justify-center">
        <Image
          src={printsketch}
          alt="resto print sketch"
          fill
          className="h-full object-none animate-pulse"
        />
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

export default RPrint;
