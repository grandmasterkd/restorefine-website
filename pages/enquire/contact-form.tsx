"use client";

import { useFormState } from "./contact-form-context";
import { ProgressIndicator } from "./progress-indicator";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { StepFive } from "./step-five";

export function ContactForm() {
  const { state } = useFormState();

  return (
    <div className="container mx-auto max-w-4xl space-y-12">
      <ProgressIndicator />
      {state.currentStep === 1 && <StepOne />}
      {state.currentStep === 2 && <StepTwo />}
      {state.currentStep === 3 && <StepThree />}
      {state.currentStep === 4 && <StepFour />}
      {state.currentStep === 5 && <StepFive />}
    </div>
  );
}
