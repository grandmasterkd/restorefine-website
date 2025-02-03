import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import fadedbar from "@/public/ctabg.svg";

function Cta() {
  return (
    <main className="py-20 relative flex items-center justify-center">
      <div className="absolute top-0 md:top-36 z-10 grid place-items-center text-center space-y-1 md:space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Ready To Transform <br className="hidden md:inline-flex " />
          Your Business
        </h2>
        <div className="max-w-md text-md text-white/80">
          <p>Get in touch and start with our all-in-one solution</p>
        </div>

        {/* Custom See More Button */}
        <Link
          href="/enquire-now"
          className="mt-8 inline-flex items-center rounded-full border border-white/30 bg-transparent px-5 py-3 transition-colors hover:bg-white/30"
        >
          <span className="mr-2 md:mr-4 text-sm text-white">
            Talk To Us Today
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5 text-white" />
          </span>
        </Link>
      </div>

      <Image
        src={fadedbar}
        alt="resto-cta-bg"
        layout="responsive"
        className="rotate-180 opacity-90 rounded-[24px] hidden md:flex"
      />
    </main>
  );
}

export default Cta;
