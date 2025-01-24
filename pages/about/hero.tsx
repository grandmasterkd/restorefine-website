import React from "react";
import funnel from "@/public/aboutherographic.svg";
import Image from "next/image";
import huddle from "@/public/companyhuddle.jpg";

function AboutHero() {
  return (
    <main className="">
      <section className="min-h-screen flex justify-between items-center">
        <h1 className="mb-4 text-6xl font-medium">
          <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            Refining Your
            <br />
            Vision, Amplifying
            <br />
            Your Impact
          </span>
        </h1>

        <div>
          <Image src={funnel} alt="Funnel" width={450} height={450} />
        </div>
      </section>

      <section className="space-y-6">
        <div className="aspect-video rounded-[24px] bg-[#131313]">
          <Image
            src={huddle}
            alt="resto huddle up"
            layout="reponsive"
            width={1920}
            height={1080}
            className="w-fit rounded-[24px] object-contain grayscale scale-100 hover:scale-110 hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>

        <div className="">
          <h2 className="text-2xl font-medium text-white md:text-2xl lg:text-3xl">
            About Us
          </h2>
          <div className="max-w-full text-sm text-white/80">
            <p>
              RestoRefine Studios is your all-in-one digital partner, dedicated
              to the vibrant world of hospitality. From quaint cafes to bustling
              restaurants, we craft customized digital experiences that capture
              the essence of each venue. Our team, driven by a passion for
              culinary excellence and service, offers a suite of services
              designed to enhance every aspect of your online presence. Whether
              it&apos;s through captivating website design, engaging social
              media content, or stunning visual storytelling with photography
              and videography, we ensure your business stands out in the digital
              landscape.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutHero;
