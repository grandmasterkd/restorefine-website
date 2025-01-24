"use client";

import { useFormState } from "./contact-form-context";
import { ProgressIndicator } from "./form/progress-indicator";
import { StepOne } from "./form/steps/step-one";
import { StepTwo } from "./form/steps/step-two";
import { StepThree } from "./form/steps/step-three";
import { StepFour } from "./form/steps/step-four";
import { StepFive } from "./form/steps/step-five";
import { StepSix } from "./form/steps/step-six";

export function ContactForm() {
  const { state } = useFormState();

  return (
    <div className="">
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
