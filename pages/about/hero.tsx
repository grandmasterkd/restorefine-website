import React from "react";
import funnel from "@/public/aboutherographic.svg";
import Image from "next/image";
import huddle from "@/public/companyhuddle.jpg";

function AboutHero() {
  return (
    <main className="">
      <section className="min-h-screen flex justify-between items-center">
        <h1 className="mb-4 text-6xl font-medium">
          <span className="p-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
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
              At RestoRefine Studios, we set out with a clear goal: to become
              Scotland’s top all-in-one agency, headquartered in Glasgow and
              serving businesses across the nation. Our vision stems from a deep
              understanding of the challenges faced by businesses and
              hospitality sectors in finding a reliable one-stop solution for
              all their needs.
              <br />
              <br />
              From web design and custom apparel to promotional materials and
              much more, we are here to simplify the process and deliver
              exceptional results. We built this agency on the values of clear
              communication, affordability, and a deep commitment to
              understanding and meeting our clients’ unique needs.
              <br />
              <br />
              At RestoRefine Studios, our clients are at the heart of everything
              we do. Your success is our success, and we are dedicated to going
              above and beyond to provide outstanding service and impactful
              solutions for your business.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutHero;
