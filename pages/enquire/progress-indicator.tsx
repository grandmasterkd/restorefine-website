import { useFormState } from "./contact-form-context";
import Image from "next/image";
import star from "@/public/restostar.svg";

type ProgressStep = {
  step: number;
  isActive: boolean;
};

export function ProgressIndicator() {
  const { state, dispatch } = useFormState();
  const currentStep = state.currentStep;

  const steps: ProgressStep[] = [
    { step: 1, isActive: currentStep >= 1 },
    { step: 2, isActive: currentStep >= 2 },
    { step: 3, isActive: currentStep >= 3 },
    { step: 4, isActive: currentStep >= 4 },
    { step: 5, isActive: currentStep >= 5 },
    { step: 6, isActive: currentStep >= 6 },
  ];

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      dispatch({ type: "SET_STEP", payload: step });
    }
  };

  const completedStep = <Image src={star} alt="star" width={30} height={30} />;

  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((step, index) => (
        <div
          key={step.step}
          className="flex items-center flex-1 last:flex-none"
        >
          <button
            onClick={() => handleStepClick(step.step)}
            disabled={!step.isActive}
            className={`flex h-16 w-16 items-center justify-center rounded-full text-xl font-medium shrink-0 transition-colors
              ${
                step.isActive
                  ? step.step === currentStep
                    ? "border-2 border-white bg-transparent text-white"
                    : "bg-white text-black hover:bg-white/80"
                  : "bg-[#2b2b2b] text-white cursor-not-allowed"
              }`}
          >
            {step.isActive && step.step < currentStep
              ? completedStep
              : step.step}
          </button>
          {index < steps.length - 1 && (
            <div
              className={`h-[2px] flex-grow ${
                step.isActive ? "bg-white" : "bg-[#2b2b2b]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
