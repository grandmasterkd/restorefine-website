import star from "@/public/restostar.svg";
import Image from "next/image";

const strategies = [
  {
    title: "Reach Out",
    description:
      "We engage in a detailed consultation to align with your vision and goals, demonstrating our commitment to understanding and fulfilling your specific needs from the very first interaction.",
  },
  {
    title: "Evaluate",
    description:
      "We conduct an exhaustive analysis of your digital presence and market dynamics, using our expertise to uncover underutilized opportunities and areas needing enhancement. This evaluation is instrumental in paving the way for strategic improvements that drive competitive advantage.",
  },
  {
    title: "Strategize",
    description:
      "Leveraging our deep industry knowledge and innovative tools, we craft a comprehensive, custom strategy designed to address your unique challenges and maximize your market impact. This strategic plan is your roadmap to digital excellence, ensuring all initiatives are precise and goal oriented.",
  },
  {
    title: "Transform",
    description:
      "We meticulously implement the agreed-upon strategies, managing every detail to ensure flawless execution. Whether enhancing your website, creating compelling content, or executing targeted marketing campaigns, our actions are designed to elevate your brand and enhance your market presence dramatically.",
  },
  {
    title: "Optimize",
    description:
      "Beyond initial success, we continue to refine and optimize our strategies. By analysing performance data and integrating your feedback, we adapt and evolve our approaches to ensure sustained success and scalability. This continuous optimization cycle guarantees that your business not only meets but exceeds market standards and expectations.",
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
