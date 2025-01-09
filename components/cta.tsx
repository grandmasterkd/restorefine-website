import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <main className="grid place-items-center text-center space-y-6">
      <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
        Ready To Transform
        <br />
        Your Business
      </h2>
      <div className="max-w-md text-md text-white/80">
        <p>Get in touch and start with our all-in-one solution</p>
      </div>

      {/* Custom See More Button */}
      <Link
        href="/enquire-now"
        className="group mt-8 inline-flex items-center rounded-full border border-white/30 bg-black px-6 py-3 transition-colors hover:bg-white/5"
      >
        <span className="mr-4 text-lg text-white">Talk To Us Today</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-5 w-5 text-white" />
        </span>
      </Link>
    </main>
  );
}

export default Cta;
