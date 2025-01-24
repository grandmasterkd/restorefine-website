"use client";

import { ArrowLeft } from "lucide-react";
import { useFormState } from "../../contact-form-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SelectedService } from "../selected-service";

const serviceTypeOptions = {
  branding: [
    { id: "logo-design", title: "Logo Design" },
    { id: "brand-identity", title: "Brand Identity" },
    { id: "brand-strategy", title: "Brand Strategy" },
    { id: "rebranding", title: "Rebranding" },
  ],
  web: [
    { id: "web-design", title: "Web Design" },
    { id: "website-development", title: "Website Development" },
    { id: "ecommerce", title: "Ecommerce" },
    { id: "seo", title: "SEO" },
    { id: "website-redesign", title: "Website Redesign" },
  ],
  media: [
    { id: "photography", title: "Photography" },
    { id: "videography", title: "Videography" },
    { id: "social-media", title: "Social Media Management" },
    { id: "content-creation", title: "Content Creation" },
  ],
  print: [
    { id: "menus", title: "Menus" },
    { id: "flyers", title: "Flyers" },
    { id: "posters", title: "Posters" },
    { id: "packaging", title: "Packaging" },
    { id: "business-cards", title: "Business Cards" },
  ],
  merch: [
    { id: "custom-apparel", title: "Custom Apparel" },
    { id: "branding-merch", title: "Branding Merch" },
    { id: "promotional", title: "Promotional" },
  ],
  pos: [
    { id: "software", title: "Software" },
    { id: "setup", title: "Setup" },
  ],
};

export function StepTwo() {
  const { state, dispatch } = useFormState();
  const options = state.mainService
    ? serviceTypeOptions[state.mainService as keyof typeof serviceTypeOptions]
    : [];

  return (
    <div className="">
      <h2 className="mb-2 text-3xl font-semibold">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
          What Type Of Services
          <br />
          Do You Need
        </span>
      </h2>

      <div className="grid gap-16 lg:grid-cols-2 cursor-pointer">
        <SelectedService title={state.mainService || ""} />

        <div>
          <RadioGroup
            defaultValue={state.serviceType || undefined}
            onValueChange={(value) => {
              dispatch({ type: "SET_SERVICE_TYPE", payload: value });
              dispatch({ type: "SET_STEP", payload: 3 });
            }}
            className="flex flex-wrap gap-4"
          >
            {options.map((option) => (
              <div
                key={option.id}
                className="flex grow items-center rounded-xl border border-white/80 bg-transparent p-4 hover:bg-white/20"
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="h-5 w-5 border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:before:bg-white"
                />
                <Label
                  htmlFor={option.id}
                  className="pl-4 text-md font-normal text-white cursor-pointer"
                >
                  {option.title}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <button
        onClick={() => dispatch({ type: "SET_STEP", payload: 1 })}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-4 py-2 text-white transition-colors hover:bg-white/10"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span className="text-sm">Go Back</span>
      </button>
    </div>
  );
}
