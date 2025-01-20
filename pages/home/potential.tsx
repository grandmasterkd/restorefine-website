import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import apps from "@/public/serviceapps.svg";
import tray from "@/public/restotray.svg";

export function CreativePotential() {
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Text Content */}

          <div className="col-span-1 w-fit space-y-6">
            <h2 className=" text-3xl font-medium text-white md:text-3xl lg:text-4xl">
              Harness Our Full
              <br />
              Creative Potential
            </h2>
            <div className="max-w-sm text-md text-white/80">
              <p>
                Harness our full creative power to transform your vision into
                reality. We creaft impactful solutions that elevate your brand
                and leave a lasting impression.
              </p>
            </div>

            {/* Custom See More Button */}
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center rounded-full border border-white/30 bg-black px-4 py-2 transition-colors hover:bg-white/5"
            >
              <span className="mr-4 text-sm text-white">See More</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </Link>
          </div>

          {/* Empty Shapes */}
          <div className="ml-0 md:ml-20 col-span-2 grid grid-cols-2 gap-4">
            <div className=" h-[500px] rounded-[24px] bg-[#131313] relative">
              <div className="absolute top-7 left-7 space-y-2">
                <p className=" text-xs font-medium text-white/50">Comfort</p>
                <h2 className="text-md font-medium block text-white/80">
                  All your digital needs <br /> in-one-house
                </h2>
              </div>

              <Image
                src={apps}
                alt="restorefine-service-apps"
                width={200}
                height={200}
                className="w-full absolute bottom-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="h-[500px] rounded-[24px] bg-[#131313] relative">
              <div className="absolute top-7 left-7 space-y-2">
                <p className=" text-xs font-medium text-white/50">Reach</p>
                <h2 className="text-md font-medium block text-white/80">
                  Serve your restaurant <br /> to a global audience
                </h2>
              </div>
              <Image
                src={tray}
                alt="restorefine-servingtray-graphic"
                width={200}
                height={200}
                className="w-full absolute bottom-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        {/* <div className="mt-12 flex justify-end gap-4">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2b2b2b] transition-colors hover:bg-[#3b3b3b]"
            aria-label="Previous slide"
          >
            <ArrowRight className="h-5 w-5 rotate-180 text-white" />
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 transition-colors hover:bg-red-700"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
