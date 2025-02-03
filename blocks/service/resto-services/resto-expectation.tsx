"use client";

import { TypewriterText } from "@/components/typewriterText";
import Image from "next/image";
import globe from "@/public/services/branding/globe.png";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";

const services = [
  "Product Design",
  "Social Media",
  "Landing Pages",
  "Logos",
  "Brand Guidelines",
  "Icons",
  "Branding",
  "Slide Decks",
  "Visual Identity",
  "Restaurant Menu Design",
];

const phrases = [
  "Transparent Communication & Collaboration",
  "Holistic Brand Strategy Implementation",
  "User Experience Research",
];

export function RestoExpectation() {
  return (
    <section className="py-32">
      <div className="">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
            And These Inspiring
            <br />
            Benefits Await You
          </h2>
          <p className="text-sm text-white/80">
            To turn your ideas into impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end mb-8">
          {/* Top row with layered effect */}
          <div className="relative">
            <div className="absolute -top-5 left-6 w-[85%] h-[280px] sm:h-[330px] bg-[#ae0404] rounded-[24px]" />
            <div className="relative w-full h-[280px] sm:h-[330px] bg-gradient-to-br from-[#ff0000] to-[#a90909] rounded-[24px] overflow-hidden flex items-center justify-center">
              <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");
              `}</style>
              <h3
                className="text-center"
                style={{
                  fontFamily: "'Homemade Apple', cursive",
                  transform: "rotate(-10deg)",
                  maxWidth: "80%",
                  lineHeight: 1.4,
                }}
              >
                <span className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl">
                  Partner <span className="text-[#000000]">with</span>
                  <br />
                  Creativity
                </span>
              </h3>
            </div>
          </div>
          <div className="h-[280px] sm:h-[330px] md:h-[350px] bg-gradient-to-br from-[#ffffff] to-[#c9c9c9] rounded-[24px] lg:col-span-2 p-6 sm:p-8 flex justify-center">
            <TypewriterText phrases={phrases} />
          </div>

          {/* Bottom row */}
          <section className="h-[180px] sm:h-[200px] rounded-[24px] p-4 sm:p-6 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[#000000] bg-gradient-radial from-[#000000] from-65% to-[#ff0000] to-100%"></div>
            <div className="flex items-center gap-4 relative z-10">
              <Image
                src={globe || "/placeholder.svg?height=80&width=80"}
                alt="Globe"
                width={80}
                height={80}
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20 coil"
              />
              <div className="text-[#ffffff]">
                <h3 className="text-xl sm:text-2xl font-semibold">Building</h3>
                <span className="flex items-center gap-x-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#ffffff]/70">
                    For
                  </h3>
                  <h3 className="text-xl sm:text-2xl font-semibold">Future</h3>
                </span>
              </div>
            </div>
          </section>
          <section className="h-[180px] sm:h-[200px] bg-gradient-to-br from-[#1B1B1B] to-[#000000] rounded-[24px] relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-[24px]"
              style={{
                background: "linear-gradient(135deg, #9C9C9C 0%, #363636 31%)",
                padding: "0.5px",
              }}
            >
              <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-[#1B1B1B] to-[#000000]"></div>
            </div>

            <div className="absolute top-6 left-6 flex flex-col lg:flex-row items-start lg:items-center p-0 gap-3">
              <Image
                src={avatar || "/placeholder.svg?height=80&width=80"}
                alt="Communications Support Avatar"
                width={80}
                height={80}
                className=" object-contain w-[70px]"
              />
              <Image
                src={commstext || "/placeholder.svg?height=80&width=80"}
                alt="Communications Support Text"
                width={80}
                height={80}
                className=" object-contain w-[160px]"
              />
            </div>

            <div className="absolute bottom-5 left-5 ">
              <h3 className="text-xl sm:text-2xl text-[#ffffff] font-semibold">
                Reliable 24h Support
              </h3>
              <p className="text-xs text-[#ffffff]/60">
                This means just as much to us, reach us anytime
              </p>
            </div>
          </section>

          <section className="h-[180px] sm:h-[200px] bg-gradient-to-br from-[#1B1B1B] to-[#000000] rounded-[24px] relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-[24px]"
              style={{
                background: "linear-gradient(135deg, #9C9C9C 0%, #363636 31%)",
                padding: "0.5px",
              }}
            >
              <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-[#1B1B1B] to-[#000000]"></div>
            </div>

            <div className="flex items-center justify-center p-0">
              <Image
                src={pulse || "/placeholder.svg?height=80&width=80"}
                alt="Resto Iterations Pulse"
                width={80}
                height={80}
                className="absolute bottom-6 object-contain w-[80%]"
              />
            </div>

            <div className="absolute bottom-5 left-5 ">
              <h3 className="text-xl sm:text-2xl text-[#ffffff] font-semibold">
                Iterations
              </h3>
              <p className="text-xs text-[#ffffff]/60">
                As many needed to achieve excellence
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          {services.map((service) => (
            <button
              key={service}
              className="px-6 py-3 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
