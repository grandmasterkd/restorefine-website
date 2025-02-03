"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Sample review data - replace with actual data
const reviews = [
  {
    id: 1,
    name: "Raj",
    position: "Himalayan Dine In",
    review:
      "The print quality was amazing, and I couldn't believe how affordable it was compared to my last supplier. Great service and fast delivery!",
    image: "/placeholder.svg",
    companyLogo: "/himalayanlogo.svg",
  },
  {
    id: 2,
    name: "Balraj",
    position: "Favourite Spot",
    review:
      "RestoRefine Studios gave our café a fresh look with a great logo redesign and incredible food photos. The photos really improved our social media presence, which has helped bring in more customers. Highly recommend them for creative and professional work in Glasgow!",
    image: "/placeholder.svg",
    companyLogo: "/placeholder.svg",
  },
  // {
  //   id: 3,
  //   name: "Rohit Acharya",
  //   position: "Co-Founder @ Resto Refine Studios",
  //   review:
  //     "The innovative solutions provided have revolutionized our business operations.",
  //   image: "/placeholder.svg?height=80&width=80",
  //   companyLogo: "/placeholder.svg?height=80&width=80",
  // },
  // {
  //   id: 4,
  //   name: "Louisa Vaslisa",
  //   position: "CEO @ Lova Juices",
  //   review:
  //     "The innovative solutions provided have revolutionized our business operations.",
  //   image: "/placeholder.svg?height=80&width=80",
  //   companyLogo: "/placeholder.svg?height=80&width=80",
  // },
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
      <div className="pt-32 md:pt-44">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
            Our Clients
          </h2>
          <p className="max-w-[80%] md:max-w-[50%] text-sm sm:text-md md:text-base text-white/80">
            Hear firsthand how our solutions have boosted online success for
            users like you.
          </p>
        </div>

        {/* Reviews */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.slice(currentIndex, currentIndex + 2).map((review) => (
              <div
                key={review.id}
                className="rounded-[24px] bg-transparent p-8 border border-white/20"
              >
                {/* Profile */}
                <div className="flex items-center gap-x-6 gap-y-0 mb-6">
                  <div className="relative w-12 h-12">
                    {/* Client Image */}
                    <div className="absolute inset-0 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                      <Image
                        src={review.companyLogo || ""}
                        alt={""}
                        fill
                        className="rounded-full object-cover w-full "
                      />
                    </div>
                    {/* Company Logo - positioned to overlap */}
                    <div className="absolute inset-0 translate-x-4 rounded-full bg-[#2b2b2b] flex items-center justify-center">
                      <Image
                        src={review.image || ""}
                        alt={""}
                        fill
                        className="rounded-full object-cover w-full "
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {review.name}
                    </h3>
                    <p className="text-sm text-white/60">{review.position}</p>
                  </div>
                </div>
                {/* Review Text */}
                <p className="w-full text-sm text-white">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div
            className={`${
              currentIndex < 1 ? "hidden" : "flex"
            } mt-8 justify-end gap-2`}
          >
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
