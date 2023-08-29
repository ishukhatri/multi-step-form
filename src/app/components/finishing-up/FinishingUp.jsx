import React from "react";
import FormLayout from "../common/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "@/lib/redux/slices/formSlice";
import { title, description } from "@/data/finishingUp";
import {
  selectUserSelectedPlans,
  selectUserSelectedAddons,
  selectIsMonthly,
} from "@/lib/redux/selectors/formSelector";

const FinishingUp = () => {
  const dispatch = useDispatch();
  const selectedPlan = useSelector(selectUserSelectedPlans);
  const selectedAddons = useSelector(selectUserSelectedAddons);

  const isMonthly = useSelector(selectIsMonthly);
  const onSubmit = () => {
    dispatch(setStep(5));
  };

  const planAmount = isMonthly ? selectedPlan.monthly : selectedPlan.yearly;

  // Calculate total amount for the selected addons
  const addonsAmount = selectedAddons.reduce((total, addon) => {
    return total + (isMonthly ? addon.monthly : addon.yearly);
  }, 0);

  // Calculate the final total amount
  const totalAmount = planAmount + addonsAmount;

  return (
    <FormLayout title={title} description={description} onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="bg-theme-light-grey rounded-lg p-4 text-gray-400">
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col gap-1 ">
              <p className="text-sky-950 text-sm font-medium">
                {selectedPlan.name} {isMonthly ? "(Monthly)" : "(Yearly)"}
              </p>
              <p className="text-sm font-normal underline leading-tight">
                Change
              </p>
            </div>
            <p className="text-right text-sky-950 text-sm font-bold leading-tight pb-1">
              {isMonthly
                ? `$${selectedPlan.monthly}/mo`
                : `$${selectedPlan.yearly}/yr`}
            </p>
          </div>
          <div className="h-px opacity-20 bg-gray-400 my-3" />
          <div className="gap-3">
            {selectedAddons.map((addon) => (
              <div key={addon.name} className="gap-3">
                <div className="flex flex-row justify-between">
                  <p className="text-gray-400 text-sm font-normal leading-tight">
                    {addon.displayName}
                  </p>
                  <p className="text-right text-sky-950 text-sm font-normal leading-tight">
                    +
                    {isMonthly ? `$${addon.monthly}/mo` : `$${addon.yearly}/yr`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between px-4">
          <div className="text-gray-400 text-sm font-normal leading-tight">
            Total (per {isMonthly ? "month" : "year"})
          </div>
          <div className="text-right text-indigo-600 text-base font-bold leading-tight">
            ${totalAmount}/{isMonthly ? "mo" : "yr"}
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default FinishingUp;
