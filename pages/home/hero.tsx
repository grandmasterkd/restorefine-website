import Link from "next/link";
// import herobg from "@/public/home-hero-bg.svg";
// import Image from "next/image";

export default function Hero() {
  return (
    <main className="bg-black relative flex min-h-screen flex-col items-center justify-center gap-y-1 pt-2 text-center">
      {/* Background Image */}

      {/* <Image
        src={herobg}
        width={1920}
        height={1080}
        className="pt-44 absolute z-0 object-cover opacity-40"
        alt="Background"
      /> */}

      <div
        className="mb-6 inline-flex rounded-full border border-white/10 bg-black/50 px-4 py-2"
        style={{
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="mr-2 rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">
          NEW
        </span>
        <span className="text-sm text-white">
          Latest addition to our portfolio
        </span>
      </div>
      {/* Heading */}
      <h1 className="mb-6 text-center text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
          Elevate Your Business
          <br />
          Beyond Digital
        </span>
      </h1>
      {/* Description */}
      <p className="mx-auto mb-12 max-w-3xl text-md font-normal text-white/80 sm:text-xl">
        RestoRefine Studios drives your brands growth with strategic solutions
        that boost visibility, engage customers, and seamlessly connect the
        digital and physical worlds.
      </p>
      {/* CTA Button */}
      <div className="w-fit rounded-xl border border-white/20 p-2.5">
        <Link
          href="/start"
          className="relative inline-flex items-center justify-center rounded-lg border border-white/10 bg-white px-6 py-2 text-base font-medium text-black transition-colors hover:bg-white/90"
          style={{
            boxShadow: `
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(0, 0, 0, 0.05) inset,
              0 0 10px rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          Enquire Now
        </Link>
      </div>
    </main>
  );
}
