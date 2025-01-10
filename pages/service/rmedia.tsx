import React from "react";
import luxevent from "@/public/mediahero.jpg";
import Image from "next/image";
import mlogo from "@/public/rmedialogo.svg";
import ctabg from "@/public/rmediactabg.jpg";

function RMedia() {
  return (
    <main className="">
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full object-cover absolute top-0 left-0 z-0">
          <Image
            src={luxevent}
            alt="luxevent"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <span className="min-h-screen relative z-10 flex items-center justify-center">
            <Image
              src={mlogo}
              alt="restomedialogo"
              width={100}
              height={100}
              className=""
            />
          </span>
        </div>
      </section>

      <section className="py-24 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="h-[350px] bg-[#d9d9d9] rounded-[32px]"></div>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">What is RestoMedia</h2>
          <p className="text-sm text-white/50">
            RestoMedia manages your social media and content creation,
            delivering high-quality photography and videography that showcases
            the best of your business. We handle your social platforms, ensuring
            engaging content that drives visibility and customer interaction.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-white">
            Take A Look At Some Case Studies
          </h2>
          <p className="text-sm text-white/50">
            Dynamic Social Media and Content Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-baseline mb-8">
          {/* Top row with layered effect */}
          <div className="relative">
            <div className="absolute -top-5 left-6 w-[85%] h-[330px] bg-[#ABA9A9] rounded-[32px]" />

            <div className="relative w-full h-[330px] bg-[#d9d9d9] rounded-[32px]" />
          </div>
          <div className=" h-[350px] bg-[#d9d9d9] rounded-[32px] lg:col-span-2" />
        </div>
      </section>

      <section className="py-12 absolute left-0">
        <div className="flex w-full inset-x-0 overflow-x-hidden">
          <Image
            src={ctabg}
            alt="mediactabackground"
            layout="responsive"
            width={100}
            height={100}
            className="w-full bg-norepeat"
            objectFit="cover"
          />
        </div>
      </section>
    </main>
  );
}

export default RMedia;
