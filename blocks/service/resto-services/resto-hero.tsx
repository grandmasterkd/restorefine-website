import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface RestoServicesHeroProps {
  titletop: string;
  titlebottom: string;
  description: string;
}

function RestoServicesHero({
  titletop,
  titlebottom,
  description,
}: RestoServicesHeroProps) {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center gap-y-4">
      <h1 className="text-center text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
        <span className="py-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
          {titletop}
          <br />
          {titlebottom}
        </span>
      </h1>
      <p className="min-w-1/2 w-3/5 text-white/80">{description}</p>
      <Link
        href="/enquire-now"
        className="flex items-center gap-1 mt-1 hover:opacity-90"
      >
        <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">
          Lets Craft Something
        </div>
        <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
      </Link>
    </main>
  );
}

export default RestoServicesHero;
