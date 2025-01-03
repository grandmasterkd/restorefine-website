import React from "react";
import Hero from "./hero";
import { BentoGrid } from "./properties";
import { LogoMarquee } from "./marquee";
import { CreativePotential } from "./potential";
import { Insights } from "./insights";
import { Reviews } from "./reviews";

function Resto() {
  return (
    <main className="space-y-44">
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <CreativePotential />
      <Insights />
      <Reviews />
    </main>
  );
}

export default Resto;
