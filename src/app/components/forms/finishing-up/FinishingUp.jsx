import React from "react";
import FormLayout from "../FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "@/lib/redux/slices/formSlice";

const FinishingUp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.formData);
  const onSubmit = () => {
    dispatch(setStep(5));
  };

  return (
    <FormLayout
      title={"Finishing up"}
      description={"Double-check everything looks OK before confirming."}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="bg-theme-light-grey rounded-lg p-4 text-gray-400">
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col gap-1 ">
              <p className="text-sky-950 text-sm font-medium">
                {data.step2.plan} {data.isMonthly ? "(Monthly)" : "Yearly"}
              </p>
              <p className="text-sm font-normal underline leading-tight">
                Change
              </p>
            </div>
            <p className="text-right text-sky-950 text-sm font-bold leading-tight pb-1">
              $9/mo
            </p>
          </div>
          <div className="h-px opacity-20 bg-gray-400 my-3" />
          <div className="gap-3">
            <div className="flex flex-row justify-between ">
              <p className="text-gray-400 text-sm font-normal leading-tight">
                Online service
              </p>
              <p className="text-right text-sky-950 text-sm font-normal leading-tight">
                +$1/mo
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-4">
          <div className="text-gray-400 text-sm font-normal leading-tight">
            Total (per month)
          </div>
          <div className="text-right text-indigo-600 text-base font-bold leading-tight">
            +$12/mo
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default FinishingUp;
