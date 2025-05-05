import star from "@/public/restostar.svg";
import Image from "next/image";

const strategies = [
  {
    title: "Reach Out",
    description:
      "We start by listening to you to understand your goals and what you're aiming to achieve. This ensures we are aligned from the very begining, no matter what your project might be",
  },
  {
    title: "Evaluate",
    description:
      "Next we access your current situation or initial ideas. We identify what you need to succeed, whether its starting something new or improving something existing.",
  },
  {
    title: "Strategize",
    description:
      "With a clear understading of your needs, we craft a tailored plan designed specifically to address your unique challenges. This strategy sets the path for effective action.",
  },
  {
    title: "Transform",
    description:
      "We put our plan into action, focusing on making the necessary changes to achieve your goals. This phase is all about bringing your vision to life with precision and care.",
  },
  {
    title: "Optimize",
    description:
      "After implementation we don't just walk away, we continue to refine and adjust our approach based on feedback and results, ensuring that you receive ongoing benefits and support.",
  },
];

const restoStar = <Image src={star} alt="star" width={50} height={50} />;

export function StrategySection() {
  return (
    <section className="pt-16">
      <div className="">
        <div className="mx-auto mb-16">
          <h2 className="text-2xl font-medium text-white md:text-2xl lg:text-3xl">
            Our Strategy For Work
          </h2>
          <p className="text-white/80">Our service is simple as RESTO</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
            <div className="border-r border-white/20" />
            <div className="border-r border-white/20" />
          </div>

          {strategies.map((strategy, index) => (
            <div
              key={index}
              className={`space-y-2 relative ${
                index >= 3 ? "lg:col-span-2" : ""
              } ${index === 4 ? "lg:col-start-2" : ""}`}
            >
              {restoStar}
              <h3 className="text-xl font-medium text-white">
                {strategy.title}
              </h3>
              <p className="pt-2 text-sm text-white/80">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
