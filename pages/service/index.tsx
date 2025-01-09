import React from "react";
import ServicesHero from "./hero";
import ServiceTypes from "./serviceTypes";
import Cta from "@/components/cta";

function RestoServices() {
  return (
    <main>
      <ServicesHero />
      <ServiceTypes />
      <Cta />
    </main>
  );
}

export default RestoServices;
