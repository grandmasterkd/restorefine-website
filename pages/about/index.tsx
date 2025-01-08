import React from "react";
import AboutHero from "./hero";
import { StrategySection } from "./strategies";
import { Team } from "./team";
import { Values } from "./values";

function AboutUs() {
  return (
    <main>
      <AboutHero />
      <StrategySection />
      <Team />
      <Values />
    </main>
  );
}

export default AboutUs;
