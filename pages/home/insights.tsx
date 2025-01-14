import Image from "next/image";
import ring from "@/public/gloss-ring.svg";
import cone from "@/public/gloss-cone.svg";

export function Insights() {
  return (
    <main className="mx-auto space-y-8">
      {/* Top Row */}
      <section className="w-full grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-4">
        <div className="col-span-1 group relative aspect-square md:aspect-auto rounded-[32px] bg-transparent border border-white/30 p-8 flex flex-col justify-end overflow-hidden">
          {/* 3D Object */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-3/4 size-44">
            <Image
              src={ring}
              alt="Chrome Ring"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="relative">
            <h3 className="text-2xl font-medium text-white mb-4">
              Business Insights
            </h3>
            <p className="text-white/80">
              Harness our full creative power to transform your vision into
              reality.
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <div className="h-[350px] rounded-[32px] bg-[#d9d9d9]" />
        </div>
      </section>

      {/* Bottom Row */}
      <section className="w-full grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-4">
        <div className="col-span-2">
          <div className="h-[350px] rounded-[32px] bg-[#d9d9d9]" />
        </div>

        <div className="col-span-1 group relative aspect-square md:aspect-auto rounded-[32px] bg-transparent border border-white/30 p-8 flex flex-col justify-end overflow-hidden">
          {/* 3D Object */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-3/4 size-44">
            <Image
              src={cone}
              alt="Chrome Cone"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="relative">
            <h3 className="text-2xl font-medium text-white mb-4">
              Interactive Solutions
            </h3>
            <p className="text-white/80">
              Harness our full creative power to transform your vision into
              reality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
