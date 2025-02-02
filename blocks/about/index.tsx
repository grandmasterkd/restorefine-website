import React from "react";
import AboutHero from "./hero";
import { StrategySection } from "./strategies";
import { Team } from "./team";
// import { Values } from "./values";
import Cta from "@/components/cta";

function AboutUs() {
  return (
    <main>
      <AboutHero />
      <StrategySection />
      <Team />
      {/* <Values /> */}
      <Cta />
    </main>
  );
}

export default AboutUs;
