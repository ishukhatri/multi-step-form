import React from "react";
import { useSelector } from "react-redux";
import StepNumber from "./step/step-number/StepNumber";
import StepInfo from "./step/step-info/StepInfo";

const Stepper = () => {
  const steps = useSelector((state) => state.form.steps);
  const currentStepIndex = useSelector((state) => state.form.currentStep);

  return (
    <div className="flex flex-row md:flex-col gap-4">
      {steps.map((step, index) => (
        <li key={index} className="list-none">
          <div className={`flex flex-row gap-4`}>
            <StepNumber
              stepNumber={step.stepIndex}
              inProgress={currentStepIndex === step.stepIndex}
            ></StepNumber>
            <div className="hidden md:block">
              <StepInfo
                stepNumber={step.stepIndex}
                stepName={step.title}
              ></StepInfo>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Stepper;
