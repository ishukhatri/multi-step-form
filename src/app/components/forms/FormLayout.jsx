import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroupIntro from "../common/form-group-intro/FormGroupIntro";
import { setStep } from "@/lib/redux/slices/formSlice";

const FormLayout = ({ title, description, onSubmit, children }) => {
  const dispatch = useDispatch();
  const currentStepIndex = useSelector((state) => state.form.currentStep);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-[10px] shadow px-6 py-8 flex flex-col flex-grow gap-6">
        <FormGroupIntro
          title={title}
          description={description}
        ></FormGroupIntro>
        {children}
      </div>
      <div id="button-bar" className="flex-shrink-0">
        {console.log("currentStepIndex1", currentStepIndex)}
        {currentStepIndex > 1 && (
          <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
        )}
        {currentStepIndex < 4 && (
          <button
            className="rounded bg-theme-denim py-3 px-4 text-white text-sm leading-4 font-medium"
            onClick={() => {
              onSubmit();
              dispatch(setStep(currentStepIndex + 1));
            }}
          >
            Next
          </button>
        )}
        {currentStepIndex === 4 && <button onClick={onSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default FormLayout;
