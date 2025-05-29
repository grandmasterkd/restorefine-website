"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "@/components/modal";
import { teamMembers, type TeamMember } from "@/lib/profile";

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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

  return (
    <section className="pt-20 pb-44">
      <div className="">
        <div className="mx-auto mb-8">
          <h2 className="text-2xl font-medium text-white md:text-2xl lg:text-3xl">
            The Founders
          </h2>
          <p className="text-sm text-white/80">
            Meet the creative minds behind RestoRefine Studios.
            <br />{" "}
            <span className="text-white/50">
              {" "}
              Click on image to view profile{" "}
            </span>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex flex-col lg:flex-row items-start gap-6"
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
                  <div
                    className="aspect-square rounded-[24px] relative mb-3"
                    onClick={() => setSelectedMember(member)}
                  >
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="absolute z-0 right-0 w-full object-cover object-top grayscale scale-100 hover:scale-105 hover:grayscale-0 duration-700 ease-in-out transition-all cursor-pointer rounded-[24px]"
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
                      <span className="w-7 text-white/30 hover:text-white duration-500 ease-in-out cursor-pointer text-3xl font-extrabold">
                        in
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
}
