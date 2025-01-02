import React from "react";
import Hero from "./hero";
import { BentoGrid } from "./properties";
import { LogoMarquee } from "./marquee";

function Resto() {
  return (
    <main className="space-y-44">
      <Hero />
      <LogoMarquee />
      <BentoGrid />
    </main>
  );
}

export default Resto;
