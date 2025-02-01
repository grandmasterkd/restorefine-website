"use client";

import { ArrowLeft } from "lucide-react";
import { useFormState } from "../../contact-form-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SelectedService } from "../selected-service";

const budgetOptions = [
  { id: "£0 - £499", title: "£0 - £499" },
  { id: "£500 - £999", title: "£500 - £999" },
  { id: "£1000 - £2499", title: "£1000 - £2499" },
  { id: "£2500 - £4999", title: "£2500 - £4999" },
  { id: "£5000+", title: "£5000+" },
];

export function StepThree() {
  const { state, dispatch } = useFormState();

  return (
    <div className="">
      <h2 className="mb-2 text-3xl font-semibold">
        <span className="p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
          What Would
          <br />
          Be The Budget
        </span>
      </h2>

      <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 cursor-pointer">
        <div className="order-2 lg:order-1 space-y-4">
          <SelectedService title={state.mainService || ""} />

          <div className="flex items-center rounded-xl border border-white/80 bg-transparent p-4">
            <div className="flex h-5 w-5 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="pl-4 text-md font-normal text-white">
              {state.serviceType}
            </span>
          </div>

          <button
            onClick={() => dispatch({ type: "SET_STEP", payload: 2 })}
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-4 py-2 text-white transition-colors hover:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm">Go Back</span>
          </button>
        </div>

        <div className="order-1 lg:order-2 lg:space-y-0 space-y-12">
          <RadioGroup
            defaultValue={state.budget || undefined}
            onValueChange={(value) => {
              dispatch({ type: "SET_BUDGET", payload: value });
              dispatch({ type: "SET_STEP", payload: 4 });
            }}
            className="flex flex-wrap gap-4 cursor-pointer"
          >
            {budgetOptions.map((option) => (
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
          <div className="grid lg:hidden w-full h-px bg-white/40"></div>
        </div>
      </div>
    </div>
  );
}
