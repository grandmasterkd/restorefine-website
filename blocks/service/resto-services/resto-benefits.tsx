import React from "react";
import Image from "next/image";
import { BoltIcon } from "@heroicons/react/24/solid";
import makereq from "@/public/services/branding/makereqsgraphic.svg";
import medal from "@/public/services/branding/restomedal.svg";

interface RestoSignatureProps {
  signature: string;
}

function RestoBenefits({ signature }: RestoSignatureProps) {
  return (
    <main className="py-10 lg:py-32">
      <section className="grid grid-cols-1 lg:grid-cols-3 items-start h-full gap-x-16 lg:gap-y-0 gap-y-6 ">
        <div className="h-full col-span-1 flex flex-col lg:items-start items-center justify-between lg:gap-0 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl mb-2">
              And We Make It
              <br />
              Easier For You
            </h2>

            <p className="text-sm text-white/80">
              Simplifying the complex, so you can focus on what matters.
            </p>
          </div>

          <Image
            src={signature}
            alt="money"
            width={250}
            height={250}
            className=""
          />
        </div>

        <div className="ml-0 lg:ml-20 lg:col-span-2 col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-3">
            <div className="w-full flex items-center gap-x-2">
              <span className="border border-white/40 w-32 h-14 rounded-xl flex items-center justify-center">
                <BoltIcon className="h-8 w-8 text-white" />
              </span>
              <span className="bg-white text-sm text-black font-semibold rounded-xl w-full h-14 flex items-center justify-center">
                Make Your Request
              </span>
            </div>

            <div className="w-auto h-[350px] rounded-[24px] bg-[#131313] border border-white/10 flex items-center justify-center">
              <Image
                src={makereq || "/placeholder.svg"}
                alt="restorefine-make-a-request"
                width={200}
                height={200}
                className="object-contain w-[70%] transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="w-auto h-[350px] rounded-[24px] bg-[#131313] border border-white/10 flex items-center justify-center">
              <Image
                src={medal || "/placeholder.svg"}
                alt="restorefine-refine-a-request"
                width={200}
                height={200}
                className="object-contain w-[50%] transition-all duration-700 ease-in-out"
              />
            </div>
            <span className="font-semibold bg-white text-sm text-black rounded-xl w-full h-14 flex items-center justify-center">
              Receive and Refine
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RestoBenefits;
