import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroupIntro from "../common/form-group-intro/FormGroupIntro";
import { setStep } from "@/lib/redux/slices/formSlice";

const FormLayout = ({ title, description, onSubmit, children }) => {
  const dispatch = useDispatch();
  const currentStepIndex = useSelector((state) => state.form.currentStep);

  return (
    <>
      <div className="flex flex-col gap-6 justify-between bg-white rounded-[10px] shadow px-6 py-8 mb-24">
        <FormGroupIntro
          title={title}
          description={description}
        ></FormGroupIntro>
        {children}
      </div>
      <div
        id="button-bar"
        className="bg-white fixed bottom-0 left-0 w-screen p-4"
      >
        <div className="flex justify-between">
          {console.log("currentStepIndex1", currentStepIndex)}
          {currentStepIndex > 1 && (
            <button onClick={() => dispatch(setStep(currentStepIndex - 1))}>
              Back
            </button>
          )}
          {currentStepIndex < 4 && (
            <button
              className="rounded bg-theme-denim py-3 px-4 text-white text-sm leading-4 font-medium"
              onClick={() => {
                // onSubmit();
                dispatch(setStep(currentStepIndex + 1));
              }}
            >
              Next
            </button>
          )}
          {currentStepIndex === 4 && <button onClick={onSubmit}>Submit</button>}
        </div>
      </div>
    </>
  );
};

export default FormLayout;
