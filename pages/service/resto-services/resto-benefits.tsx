import React from "react";
import money from "@/public/moneystartgraphic.svg";
import Image from "next/image";
// import { ZapIcon } from "lucide-react";
import { BoltIcon } from "@heroicons/react/24/solid";

function RestoBenefits() {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-3 items-start h-full gap-x-16">
        <div className="h-full col-span-1 flex flex-col items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium text-white md:text-3xl lg:text-4xl mb-2">
              And We Make It
              <br />
              Easier For You
            </h2>

            <p className="text-sm text-white/80">
              Meet the creative minds at RestoRefine Studios.
            </p>
          </div>

          <Image
            src={money}
            alt="money"
            width={250}
            height={250}
            className=""
          />
        </div>

        <div className="ml-20 col-span-2 grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-2">
            <div className="w-full flex items-center gap-x-2">
              <span className="border border-white/40 w-32 h-14 rounded-xl flex items-center justify-center">
                <BoltIcon className="h-8 w-8 text-white" />
              </span>
              <span className="bg-white text-sm text-black rounded-xl w-full h-14 flex items-center justify-center">
                Lightening Fast Delivery
              </span>
            </div>

            <div className="w-auto h-[350px] rounded-3xl bg-[#d9d9d9]" />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="w-auto h-[350px] rounded-3xl bg-[#d9d9d9]" />
            <span className="bg-white text-sm text-black rounded-xl w-full h-14 flex items-center justify-center">
              Bespoke Pricing
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RestoBenefits;
