import React from "react";
import StepInfo from "./step-info/StepInfo";
import StepNumber from "./step-number/StepNumber";

const Step = ({ stepNumber, stepName, inProgress }) => {
  /**
     * <div className="Group7 w-[135px] h-[33px] relative flex-col justify-start items-start inline-flex">
    
</div>
     */
  return (
    <div className="inline-flex gap-4">
      <StepNumber
        stepName={stepName}
        stepNumber={stepNumber}
        inProgress={inProgress}
      />
      <StepInfo stepName={stepName} stepNumber={stepNumber} />
    </div>
  );
};

export default Step;
