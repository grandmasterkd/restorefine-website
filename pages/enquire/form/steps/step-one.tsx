"use client";

import Image from "next/image";
import { useFormState } from "../../contact-form-context";
import mesh from "@/public/enqbg.svg";
import light from "@/public/enqlight.svg";

const serviceOptions = [
  { id: "branding", title: "Branding" },
  { id: "web", title: "Web" },
  { id: "media", title: "Media" },
  { id: "print", title: "Print" },
  { id: "merch", title: "Merch" },
  { id: "pos", title: "POS" },
];

export function StepOne() {
  const { state, dispatch } = useFormState();

  return (
    <main className="">
      <div className="text-left">
        <h1 className="mb-2 text-3xl font-semibold">
          <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            What Are You
            <br />
            Looking For?
          </span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {serviceOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              dispatch({ type: "SET_MAIN_SERVICE", payload: option.id });
              dispatch({ type: "SET_STEP", payload: 2 });
            }}
            className={`relative aspect-square rounded-[24px] transition-colors duration-700 transition-all ease-in-out overflow-hidden
              ${
                state.mainService === option.id
                  ? "border border-white bg-white/10"
                  : "border border-[#4D4D4D] bg-gradient-dark hover:border-white"
              }`}
          >
            <Image
              src={mesh || "/placeholder.svg"}
              alt="resto-enquire-mesh-bg"
              width={80}
              height={80}
              className="p-6 absolute top-0 right-0 z-10 w-full object-cover"
            />
            <Image
              src={light || "/placeholder.svg"}
              alt="resto-enquire-mesh-bg"
              width={100}
              height={100}
              className="absolute top-0 right-0 z-0 w-full object-left-bottom opacity-80"
            />
            <span className="relative z-20 flex items-center justify-center font-semibold text-lg text-white">
              {option.title}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}
