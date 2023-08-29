import { createSelector } from "reselect";

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
