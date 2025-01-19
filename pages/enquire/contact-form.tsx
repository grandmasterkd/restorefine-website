"use client";

import { useFormState } from "./contact-form-context";
import { ProgressIndicator } from "./progress-indicator";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { StepFive } from "./step-five";
import { StepSix } from "./step-six";

export function ContactForm() {
  const { state } = useFormState();

  return (
    <div className="  ">
      <ProgressIndicator />
      {state.currentStep === 1 && <StepOne />}
      {state.currentStep === 2 && <StepTwo />}
      {state.currentStep === 3 && <StepThree />}
      {state.currentStep === 4 && <StepFour />}
      {state.currentStep === 5 && <StepFive />}
      {state.currentStep === 6 && <StepSix />}
    </div>
  );
}
