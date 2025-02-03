"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/profile";

interface ModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function Modal({ member, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[80] h-[75%] md:w-[60%] overflow-hidden rounded-[24px] overflow-y-auto bg-black border border-white/20"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <div className=" grid md:grid-cols-2">
              <div className="aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-10 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="mb-1 text-2xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-white/70">{member.position}</p>
                  <Link
                    href={member.profile}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <span className="text-lg font-extrabold">in</span>
                    <span>LinkedIn</span>
                  </Link>
                </div>
                <div className="space-y-4 text-white/80">
                  {member.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
