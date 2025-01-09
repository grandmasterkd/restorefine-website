import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";

function RBranding() {
  return (
    <main>
      <RestoServicesHero
        titletop="Resto-lutionary Branding"
        titlebottom="For Bold Visions"
        description="Our branding process dives deep to understand your goals, ensuring every element of your identity speaks with clarity and impact. "
      />

      <div className="absolute left-0 right-0 top-12 h-full flex items-center justify-between">
        <div>
          <Image src={baloon} alt="baloon" width={200} height={180} />
        </div>

        <div>
          <Image src={ball} alt="ball" width={150} height={150} />
        </div>
      </div>

      <RestoOverview />
    </main>
  );
}

export default RBranding;
