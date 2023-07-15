import React from "react";
import { useSelector } from "react-redux";
import StepNumber from "./step/step-number/StepNumber";

const Stepper = () => {
  const steps = useSelector((state) => state.form.steps);

  return (
    <div>
      {steps.map((step, index) => (
        <li key={index}>
          <StepNumber number={step.stepIndex}></StepNumber>
        </li>
      ))}
    </div>
  );
};

export default Stepper;
