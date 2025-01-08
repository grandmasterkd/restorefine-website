"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Rohit Archaya",
    position: "Head Of Sales",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Harpreet Singh",
    position: "Creative Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sweta",
    position: "Software Developer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "King",
    position: "Creative",
    image: "/placeholder.svg?height=400&width=400",
  },
  // Additional team members can be added here
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < teamMembers.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24">
      <div className="">
        <div className=" mx-auto mb-16 space-y-4">
          <h2 className="text-2xl font-medium text-white md:text-2xl lg:text-3xl">
            Our Team
          </h2>
          <p className="text-sm text-white/80">
            Meet the creative minds at RestoRefine Studios.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              initial={false}
              animate={{ x: `${-currentIndex * (100 / 3)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-full md:w-[calc(33.333%-1.333rem)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aspect-square rounded-[32px] bg-[#d9d9d9] mb-6" />
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-white/80">{member.position}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-4 rounded-full bg-[#303030] text-white disabled:opacity-50 transition-opacity"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + 3 >= teamMembers.length}
              className="p-4 rounded-full bg-[#ff0000] text-white disabled:opacity-50 transition-opacity"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
