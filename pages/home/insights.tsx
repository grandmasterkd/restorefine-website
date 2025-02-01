import Image from "next/image";
import ring from "@/public/gloss-ring.svg";
import cone from "@/public/gloss-cone.svg";
import revenue from "@/public/revenuechart.svg";
import workflow from "@/public/workflow.svg";

export function Insights() {
  return (
    <main className="mx-auto space-y-4 sm:space-y-6 md:space-y-8">
      {/* Top Row */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="col-span-1 group relative aspect-square rounded-[24px] bg-transparent border border-white/30 p-4 sm:p-6 md:p-8 flex flex-col justify-end overflow-hidden">
          {/* 3D Object */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-3/4 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44">
            <Image
              src={ring || "/placeholder.svg"}
              alt="Chrome Ring"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-1">
              Business Insights
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              Understanding your needs to deliver tailored solutions.
            </p>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 h-[250px] sm:h-[300px] md:h-[350px] rounded-[24px] bg-[#131313] grid place-items-center">
          <Image
            src={revenue || "/placeholder.svg"}
            alt="annual earnings chart"
            width={350}
            height={350}
            className="w-full h-full px-3 object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>
      </section>

      {/* Bottom Row */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="col-span-1 sm:col-span-2 h-[250px] sm:h-[300px] md:h-[350px] rounded-[24px] bg-[#131313] grid place-items-center">
          <Image
            src={workflow || "/placeholder.svg"}
            alt="resto project flow"
            width={350}
            height={350}
            className="w-full h-full object-contain p-4 sm:p-6 md:p-10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>

        <div className="col-span-1 group relative aspect-square rounded-[32px] bg-transparent border border-white/30 p-4 sm:p-6 md:p-8 flex flex-col justify-end overflow-hidden">
          {/* 3D Object */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-3/4 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44">
            <Image
              src={cone || "/placeholder.svg"}
              alt="Chrome Cone"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-1">
              Interactive Solutions
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              Creating engaging experiences through innovative technology.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
