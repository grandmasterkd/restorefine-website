"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Logo Design",
    description:
      "Design distinctive logos that represent your brand’s values and vision.",
  },
  {
    title: "Brand Identity Development",
    description:
      "Develop a cohesive brand identity including colour schemes, typography, and more to ensure brand consistency across all mediums.",
  },
  {
    title: "Social Media Design",
    description:
      "Create captivating graphics tailored for platforms like Instagram, Facebook, and LinkedIn to boost engagement and brand recognition.",
  },
  {
    title: "Brand Strategy Advisory",
    description:
      "Provide expert advice on developing effective brand strategies, including slogans, mission statements, and brand storytelling.",
  },
];

export function RestoOverview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < features.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleFeatures = features.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-0">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
            Define Your Brand Identity
          </h2>
          <p className="text-sm text-white/80">
            Shaping a unique identity through creative strategy.
          </p>
        </div>

        <div className="relative overflow-hidden mb-8">
          <motion.div
            className="flex gap-4"
            initial={false}
            animate={{ x: `${-currentIndex * (100 / 3)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex-none w-full md:w-[calc(33.333%-1.333rem)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[#d9d9d9] rounded-[24px] p-8 h-[350px] flex flex-col justify-end">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs line-clamp-2 text-black/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-4 rounded-full bg-[#303030] text-white disabled:opacity-50 transition-opacity"
            aria-label="Previous features"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + 3 >= features.length}
            className="p-4 rounded-full bg-[#ff0000] text-white disabled:opacity-50 transition-opacity"
            aria-label="Next features"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
