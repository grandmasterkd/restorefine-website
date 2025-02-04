import React from "react";
import Image from "next/image";
import { BoltIcon } from "@heroicons/react/24/solid";

interface BenefitStep {
  title: string;
  image: string;
}

interface RestoBenefitsProps {
  title: string;
  subtitle: string;
  signature: string;
  makeRequest: BenefitStep;
  receiveRefine: BenefitStep;
}

export function RestoBenefits({
  title,
  subtitle,
  signature,
  makeRequest,
  receiveRefine,
}: RestoBenefitsProps) {
  return (
    <main className="py-10 lg:py-32">
      <section className="grid grid-cols-1 lg:grid-cols-3 items-start h-full gap-x-16 lg:gap-y-0 gap-y-6">
        <div className="h-full col-span-1 flex flex-col lg:items-start items-center justify-between lg:gap-0 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#ffffff] md:text-3xl lg:text-4xl mb-2">
              {title.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <p className="text-sm text-[#ffffff]/80">{subtitle}</p>
          </div>

          <Image
            src={signature || "/placeholder.svg"}
            alt="signature"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        <div className="ml-0 lg:ml-20 lg:col-span-2 col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-3">
            <div className="w-full flex items-center gap-x-2">
              <span className="border border-[#ffffff]/40 w-32 h-14 rounded-xl flex items-center justify-center">
                <BoltIcon className="h-8 w-8 text-[#ffffff]" />
              </span>
              <span className="bg-[#ffffff] text-sm text-[#000000] font-semibold rounded-xl w-full h-14 flex items-center justify-center">
                {makeRequest.title}
              </span>
            </div>

            <div className="p-6 w-auto h-[350px] rounded-[24px] bg-[#131313] border border-[#ffffff]/30 md:border-[#ffffff]/10 flex items-center justify-center overflow-hidden">
              <Image
                src={makeRequest.image || "/placeholder.svg"}
                alt="restorefine-make-a-request"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="p-6 w-auto h-[350px] rounded-[24px] bg-[#131313] border border-[#ffffff]/30 md:border-[#ffffff]/10 flex items-center justify-center overflow-hidden">
              <Image
                src={receiveRefine.image || "/placeholder.svg"}
                alt="restorefine-refine-a-request"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="font-semibold bg-[#ffffff] text-sm text-[#000000] rounded-xl w-full h-14 flex items-center justify-center">
              {receiveRefine.title}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RestoBenefits;
