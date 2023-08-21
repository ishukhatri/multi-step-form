import React from "react";

const StepNumber = ({ stepNumber, inProgress }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-sm font-bold 
      text-white border border-white w-8 h-8 ${
        inProgress ? "bg-theme-sky-blue text-theme-denim" : "bg-theme-gray"
      }`}
    >
      {stepNumber}
    </div>
  );
};

export default StepNumber;
