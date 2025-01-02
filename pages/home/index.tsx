import React from "react";
import Hero from "./hero";
import { BentoGrid } from "./properties";
import { LogoMarquee } from "./marquee";
import { CreativePotential } from "./potential";
import { Insights } from "./insights";

function Resto() {
  return (
    <main className="space-y-44">
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <CreativePotential />
      <Insights />
    </main>
  );
}

export default Resto;
