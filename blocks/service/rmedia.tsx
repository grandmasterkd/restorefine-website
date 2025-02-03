import React from "react";
import luxevent from "@/public/mediahero.jpg";
import Image from "next/image";
import mlogo from "@/public/rmedialogo.svg";
import ctabg from "@/public/rmediactabg.jpg";
import { RestoOverview } from "./resto-services/resto-overview";
import { rMediaServices } from "@/lib/rmediaServices";
import signature from "@/public/restomediasignature.svg";
import bio from "@/public/services/media/restomediabio.jpg";
import { RestoExpectation } from "./resto-services/resto-expectation";

const restoExpectationProps = {
  title: "And These Inspiring Benefits Await You",
  subtitle: " To turn your ideas into impactful solutions",
  partnerCard: {
    title: "Showcase your Business",
    gradient: { from: "#FFE0A7", to: "#483920" },
    backgroundColor: "#C9A585",
  },
  typewriterPhrases: [
    "Enhance Interaction & Attract New Customers",
    "Compelling Video Compositions",
    "Strategy That Speaks Directly To Your Audience",
  ],
  buildingCard: {
    image: "",
    title: "",
    subtitle: "",
  },
  supportCard: {
    avatar: "",
    textImage: "",
    title: "",
    subtitle: "",
  },
  iterationsCard: {
    image: "",
    title: "",
    subtitle: "",
  },
  services: [
    "Photography",
    "Videography",
    "Content Creation",
    "Social Media Strategy",
  ],
};

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
        <div className="relative h-[350px] bg-[#d9d9d9] rounded-[24px]">
          <Image
            src={bio}
            alt="resto media bio"
            fill
            className="absolute rounded-[24px] object-cover w-full"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">What is Resto Media</h2>
          <p className="text-sm text-white/50">
            RestoMedia manages your social media and content creation,
            delivering high-quality photography and videography that showcases
            the best of your business. We handle your social platforms, ensuring
            engaging content that drives visibility and customer interaction.
          </p>
        </div>
      </section>

      <RestoOverview {...rMediaServices} />

      <section className="py-12">
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

      <RestoExpectation {...restoExpectationProps} />

      <section className="absolute inset-x-0 flex w-full overflow-x-hidden bg-transparent py-0 gap-x-4">
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image
            src={signature}
            alt="signature"
            layout="responsive"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image
            src={signature}
            alt="signature"
            layout="responsive"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}

export default RMedia;
