"use client";

import Image from "next/image";
import quiknest from "@/public/quiknest.svg";
import masala from "@/public/masala.svg";
import fresh from "@/public/freshvibe.svg";
import spot from "@/public/favoritespot.svg";

const logos = [
  {
    name: "QUIKNEST",
    url: quiknest,
    filter: "",
  },
  {
    name: "masala moves",
    url: masala,
    filter: "",
  },
  {
    name: "freshvibe",
    url: fresh,
    filter: "",
  },
  {
    name: "FAVOURITE SPOT",
    url: spot,
    filter: "",
  },
];

export function LogoMarquee() {
  return (
    <main className="w-full">
      <h1 className="text-white/70 mb-4">Trusted By Top Innovative Teams</h1>
      <section className="relative flex w-full overflow-x-hidden bg-black py-4">
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-8">
          {logos.map((logo, index) => (
            <Image
              key={`${logo.name}-1-${index}`}
              src={logo.url}
              alt={logo.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain opacity-30 hover:opacity-100"
              style={{ filter: logo.filter }}
            />
          ))}
        </div>
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-8">
          {logos.map((logo, index) => (
            <Image
              key={`${logo.name}-2-${index}`}
              src={logo.url}
              alt={logo.name}
              width={180}
              height={60}
              className="h-12 w-auto object-contain opacity-30 hover:opacity-100"
              style={{ filter: logo.filter }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
