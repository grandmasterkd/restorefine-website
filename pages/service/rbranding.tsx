import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";

function RBranding() {
  return (
    <main>
      <section className=" min-h-screen flex flex-col items-center justify-center text-center gap-y-4">
        <h1 className="text-6xl font-medium">
          <span className="py-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            Resto-lutionary Branding
            <br />
            For Bold Visions
          </span>
        </h1>
        <p className="w-1/2 text-white/80">
          Our branding process dives deep to understand your goals, ensuring
          every element of your identity speaks with clarity and impact.
        </p>
        <Link
          href="/enquire-now"
          className="flex items-center gap-1 mt-1 hover:opacity-90"
        >
          <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">
            Lets Craft Something
          </div>
          <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
        </Link>

        <div className="absolute left-0 right-0 top-12 h-full flex items-center justify-between">
          <div>
            <Image src={baloon} alt="baloon" width={200} height={180} />
          </div>

          <div>
            <Image src={ball} alt="ball" width={150} height={150} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default RBranding;
