"use client";

import { ArrowLeft } from "lucide-react";
import { useFormState } from "./contact-form-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const serviceTypeOptions = [
  { id: "logo-design", title: "Logo Design" },
  { id: "brand-identity", title: "Brand Identity" },
  { id: "brand-strategy", title: "Brand Strategy" },
  { id: "rebranding", title: "Re-branding" },
];

const budgetOptions = [
  { id: "tier1", title: "£0 - £499" },
  { id: "tier2", title: "£500 - £999" },
  { id: "tier3", title: "£1000 - £2499" },
  { id: "tier4", title: "£2500 - £4999" },
  { id: "tier5", title: "£5000+" },
];

const timelineOptions = [
  { id: "asap", title: "ASAP" },
  { id: "1-2-weeks", title: "1-2 Weeks" },
  { id: "1-month", title: "1 Month" },
  { id: "1-3-months", title: "1-3 Months" },
  { id: "flexible", title: "Flexible" },
];

export function StepFour() {
  const { state, dispatch } = useFormState();

  const getServiceTypeTitle = (id: string | null) => {
    return serviceTypeOptions.find((option) => option.id === id)?.title || "";
  };

  const getBudgetTitle = (id: string | null) => {
    return budgetOptions.find((option) => option.id === id)?.title || "";
  };

  return (
    <div className="mx-auto">
      <h2 className="mb-12 text-5xl font-medium">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
          What&apos;s Your Ideal
          <br />
          Timeline For The Project
        </span>
      </h2>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          {/* Selected service tile from step 1 */}
          <div className="aspect-square rounded-[32px] bg-[#d9d9d9]" />

          {/* Selected service type from step 2 */}
          <div className="flex items-center rounded-xl border border-white/80 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-xl font-normal text-white">
              {getServiceTypeTitle(state.serviceType)}
            </span>
          </div>

          {/* Selected budget from step 3 */}
          <div className="flex items-center rounded-xl border border-white/80 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-xl font-normal text-white">
              {getBudgetTitle(state.budget)}
            </span>
          </div>

          {/* Back button */}
          <button
            onClick={() => dispatch({ type: "SET_STEP", payload: 3 })}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span>Go Back</span>
          </button>
        </div>

        <div>
          <RadioGroup
            defaultValue={state.timeline || undefined}
            onValueChange={(value) => {
              dispatch({ type: "SET_TIMELINE", payload: value });
              dispatch({ type: "SET_STEP", payload: 5 });
            }}
            className="flex flex-wrap gap-4"
          >
            {timelineOptions.map((option) => (
              <div
                key={option.id}
                className="flex grow items-center rounded-xl border border-white/80 bg-transparent p-4"
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="h-5 w-5 border-2 border-white text-white data-[state=checked]:bg-white data-[state=checked]:before:bg-white"
                />
                <Label
                  htmlFor={option.id}
                  className="pl-4 text-xl font-normal text-white"
                >
                  {option.title}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
