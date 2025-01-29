import React from "react";
import Hero from "./hero";
import { BentoGrid } from "./properties";
import { LogoMarquee } from "./marquee";
import { CreativePotential } from "./potential";
import { Insights } from "./insights";
import { Reviews } from "./reviews";
import Cta from "@/components/cta";

function Resto() {
  return (
    <main className="">
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <CreativePotential />
      <Insights />
      <Reviews />
      <Cta />
    </main>
  );
}

export default Resto;
