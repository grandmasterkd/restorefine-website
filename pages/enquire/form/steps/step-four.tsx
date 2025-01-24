"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useFormState } from "../../contact-form-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectedService } from "../selected-service";

const timelineOptions = [
  { id: "asap", title: "ASAP" },
  { id: "1-2-weeks", title: "1-2 Weeks" },
  { id: "1-month", title: "1 Month" },
  { id: "1-3-months", title: "1-3 Months" },
  { id: "flexible", title: "Flexible" },
  { id: "other", title: "Other" },
];

export function StepFour() {
  const { state, dispatch } = useFormState();
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTimeline, setCustomTimeline] = useState("");

  const handleTimelineChange = (value: string) => {
    if (value === "other") {
      setShowCustomInput(true);
      dispatch({ type: "SET_TIMELINE", payload: value });
    } else {
      setShowCustomInput(false);
      dispatch({ type: "SET_TIMELINE", payload: value });
      dispatch({ type: "SET_STEP", payload: 5 });
    }
  };

  const handleCustomTimelineSubmit = () => {
    if (customTimeline.trim()) {
      dispatch({ type: "SET_CUSTOM_TIMELINE", payload: customTimeline });
      dispatch({ type: "SET_STEP", payload: 5 });
    }
  };

  return (
    <div className="">
      <h2 className="mb-2 text-3xl font-semibold">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
          What&apos;s Your Ideal
          <br />
          Timeline For The Project
        </span>
      </h2>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <SelectedService title={state.mainService || ""} />

          <div className="flex items-center rounded-xl border border-white/80 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-md font-normal text-white">
              {state.serviceType}
            </span>
          </div>

          <div className="flex items-center rounded-xl border border-white/80 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-md font-normal text-white">
              {state.budget}
            </span>
          </div>

          <button
            onClick={() => dispatch({ type: "SET_STEP", payload: 3 })}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-4 py-2 text-white transition-colors hover:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm">Go Back</span>
          </button>
        </div>

        <div className="space-y-6">
          <RadioGroup
            defaultValue={state.timeline || undefined}
            onValueChange={handleTimelineChange}
            className="flex flex-wrap gap-4 cursor-pointer"
          >
            {timelineOptions.map((option) => (
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

          {showCustomInput && (
            <div className="space-y-4">
              <Input
                value={customTimeline}
                onChange={(e) => setCustomTimeline(e.target.value)}
                placeholder="Enter your preferred timeline"
                className="border-white/50 bg-transparent text-white placeholder:text-white/50"
              />
              <button
                onClick={handleCustomTimelineSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-opacity hover:opacity-90"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
