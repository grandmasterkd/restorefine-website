"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

export function TypewriterText({
  phrases,
  typingSpeed = 20,
  deletingSpeed = 20,
  delayBetweenPhrases = 3000,
}: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          timeout = setTimeout(() => {
            setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenPhrases);
        }
      } else {
        if (currentText.length > 0) {
          timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentPhraseIndex,
    isDeleting,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayBetweenPhrases,
  ]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative px-6">
        <h3 className="text-black text-2xl md:text-3xl font-semibold text-left">
          {currentText}
        </h3>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-0 -right-[1px] w-[2px] h-[2em] bg-[#000000]"
          style={{ marginTop: "0.1em" }}
        />
      </div>
    </div>
  );
}
