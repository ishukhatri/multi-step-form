import React from "react";

const StepInfo = ({ stepNumber, stepName }) => {
  return (
    <div className="flex-col">
      <div className="text-theme-light-blue text-xs font-normal">
        STEP {stepNumber}
      </div>
      <div className="text-white text-sm font-bold uppercase tracking-wide">
        {stepName}
      </div>
    </div>
  );
};

export default StepInfo;
