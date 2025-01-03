"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Sample review data - replace with actual data
const reviews = [
  {
    id: 1,
    name: "Talia Taylor",
    position: "Digital Marketing Director @ Quantum",
    review:
      "This product has completely transformed how I manage my projects and deadlines.",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "John Smith",
    position: "CEO @ TechCorp",
    review:
      "The innovative solutions provided have revolutionized our business operations.",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Rohit Acharya",
    position: "Co-Founder @ Resto Refine Studios",
    review:
      "The innovative solutions provided have revolutionized our business operations.",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Louisa Vaslisa",
    position: "CEO @ Lova Juices",
    review:
      "The innovative solutions provided have revolutionized our business operations.",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  // Add more reviews as needed
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : prev));
  };

  return (
    <section>
      <div className="mx-auto">
        {/* Header */}
        <div className="mx-auto text-center mb-16">
          <h2 className="text-3xl font-medium text-white md:text-3xl lg:text-4xl">
            Our Clients
          </h2>
          <p className="text-md text-white/80">
            Hear firsthand how our solutions have boosted online
            <br />
            success for users like you.
          </p>
        </div>

        {/* Reviews */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.slice(currentIndex, currentIndex + 2).map((review) => (
              <div
                key={review.id}
                className="rounded-[32px] bg-black p-8 border border-white/10"
              >
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12">
                    {/* Client Image */}
                    <div className="absolute inset-0 rounded-full bg-[#d9d9d9]" />
                    {/* Company Logo - positioned to overlap */}
                    <div className="absolute inset-0 translate-x-4 rounded-full bg-[#2b2b2b]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {review.name}
                    </h3>
                    <p className="text-sm text-white/60">{review.position}</p>
                  </div>
                </div>
                {/* Review Text */}
                <p className="text-xl text-white">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-end gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors
                ${
                  currentIndex === 0
                    ? "bg-[#2b2b2b] cursor-not-allowed"
                    : "bg-[#2b2b2b] hover:bg-[#3b3b3b]"
                }`}
              aria-label="Previous review"
            >
              <ArrowRight className="h-5 w-5 rotate-180 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= reviews.length - 2}
              className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors
                ${
                  currentIndex >= reviews.length - 2
                    ? "bg-[#2b2b2b] cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              aria-label="Next review"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
