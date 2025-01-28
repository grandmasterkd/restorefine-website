"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import rohit from "@/public/staffportrait_rohit.jpg";
import harpreet from "@/public/staffportrait_hapreet.jpg";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Rohit Archaya",
    position: "Head Of Sales",
    image: rohit,
    profile: "https://www.linkedin.com/in/acharya-rohit/",
  },
  {
    name: "Harpreet Singh",
    position: "Creative Director",
    image: harpreet,
    profile: "https://www.linkedin.com/in/harpreet00/",
  },
  // {
  //   name: "Sweta",
  //   position: "Software Developer",
  //   image: "/placeholder.svg?height=400&width=400",
  // },
  // {
  //   name: "King",
  //   position: "Creative",
  //   image: "/placeholder.svg?height=400&width=400",
  // },
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
    <section className="pb-44">
      <div className="">
        <div className=" mx-auto mb-8">
          <h2 className="text-2xl font-medium text-white md:text-2xl lg:text-3xl">
            The Founders
          </h2>
          <p className="text-sm text-white/80">
            Meet the creative minds behind RestoRefine Studios.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex items-start gap-x-6"
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
                  <div className="aspect-square rounded-[24px] relative mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="absolute z-0 right-0 w-full object-cover grayscale scale-100 hover:scale-105 hover:grayscale-0 duration-700 ease-in-out transition-all cursor-pointer rounded-[24px]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-white/70">{member.position}</p>
                    </div>

                    <Link href={member.profile} target="_blank">
                      {" "}
                      <span className="w-7 text-white/30 hover:text-white duration-500 ease-in-out cursor-pointer text-3xl font-extrabold">
                        in
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* <div className="flex justify-end gap-4 mt-8">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
