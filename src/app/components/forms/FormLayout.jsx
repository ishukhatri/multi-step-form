import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroupIntro from "../common/form-group-intro/FormGroupIntro";
import { setStep } from "@/lib/redux/slices/formSlice";

const FormLayout = ({ title, description, onSubmit, children }) => {
  const dispatch = useDispatch();
  const currentStepIndex = useSelector((state) => state.form.currentStep);

  return (
    <div>
      <div className="flex flex-col gap-6 justify-between bg-white rounded-[10px] shadow px-6 py-8 mb-24 md:mr-20">
        <FormGroupIntro
          title={title}
          description={description}
        ></FormGroupIntro>
        {children}
      </div>
      <div
        id="button-bar"
        className="bg-white fixed md:static bottom-0 left-0 w-screen md:w-auto p-4"
      >
        <div className="flex justify-between">
          {console.log("currentStepIndex1", currentStepIndex)}
          <button
            onClick={() => dispatch(setStep(currentStepIndex - 1))}
            className={`curentStepIndex < 2 ? "hidden" :""`}
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
