import React from "react";
import { setStep } from "@/lib/redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

import FormLayoutMainPart from "./FormLayoutMainPart";
import { selectCurrentStep } from "@/lib/redux/selectors/formSelector";

const BottomBar = ({ onSubmit }) => {
  const currentStepIndex = useSelector(selectCurrentStep);
  const dispatch = useDispatch();
  return (
    <div className="button-bar bg-white fixed md:static bottom-0 left-0 w-screen md:w-auto p-4 md:p-0">
      <div className="flex justify-between">
        {console.log("currentStepIndex1", currentStepIndex)}
        <button
          onClick={() => dispatch(setStep(currentStepIndex - 1))}
          className={currentStepIndex < 2 ? "invisible" : ""}
        >
          Back
        </button>
        {currentStepIndex < 5 && (
          <button
            className="rounded bg-theme-denim py-3 px-4 text-white text-sm leading-4 font-medium"
            onClick={() => {
              onSubmit();
            }}
          >
            Next Step
          </button>
        )}
        {currentStepIndex === 5 && <button onClick={onSubmit}>Submit</button>}
      </div>
    </div>
  );
};

const FormLayout = ({ title, description, onSubmit, children }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <FormLayoutMainPart title={title} description={description}>
        {children}
      </FormLayoutMainPart>
      <BottomBar onSubmit={onSubmit}></BottomBar>
    </div>
  );
};

export default FormLayout;
