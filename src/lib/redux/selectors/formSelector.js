import { createSelector } from "reselect";
import { plans } from "@/data/plans";
import { addons } from "@/data/addons";

const selectFormSlice = (state) => state.form;

export const selectCurrentStep = createSelector(
  selectFormSlice,
  (formSlice) => formSlice.currentStep
);

export const selectStepData = (step) =>
  createSelector(
    selectFormSlice,
    (formSlice) => formSlice.formData[`step${step}`]
  );

export const selectIsMonthly = createSelector(
  selectFormSlice,
  (formSlice) => formSlice.formData.step2.isMonthly
);

export const selectUserSelectedPlans = createSelector(
  selectFormSlice,
  (formSlice) => {
    const selected = formSlice.formData.step2;
    return plans.find((plan) => plan.name === selected.plan);
  }
);

export const selectUserSelectedAddons = createSelector(
  selectFormSlice,
  (formSlice) => {
    const selected = formSlice.formData.step3;
    return addons.filter((addon) => selected[addon.name]);
  }
);
