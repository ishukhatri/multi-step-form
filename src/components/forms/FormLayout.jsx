import React from "react";
import { setStep } from "@/lib/redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

import FormGroupIntro from "../common/form-group-intro/FormGroupIntro";

const FormLayout = ({ title, description, onSubmit, children }) => {
  const dispatch = useDispatch();
  const currentStepIndex = useSelector((state) => state.form.currentStep);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="form flex flex-col mx-4 md:mx-0 gap-6 md:gap-8 bg-white px-6 py-8 md:p-0 rounded-[10px]">
        <FormGroupIntro
          title={title}
          description={description}
        ></FormGroupIntro>
        {children}
      </div>
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
                // onSubmit();
                dispatch(setStep(currentStepIndex + 1));
              }}
            >
              Next Step
            </button>
          )}
          {currentStepIndex === 5 && <button onClick={onSubmit}>Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
