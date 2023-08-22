import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentStep: 2,
    completedSteps: [],
    steps: [
      { title: "your info", stepIndex: 1 },
      { title: "select plan", stepIndex: 2 },
      { title: "add-ons", stepIndex: 3 },
      { title: "summary", stepIndex: 4 },
    ],

    formData: {
      step1: {
        name: "",
        email: "",
        phone: "",
      },
      step2: {
        planSelected: "",
        billingCycle: "",
      },
      step3: {
        addons: [],
      },
      step4: {},
    },
  },
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    completeStep: (state, action) => {
      const step = action.payload;
      if (!state.completedSteps.includes(step)) {
        state.completedSteps.push(step);
      }
    },
    updateFormData: (state, action) => {
      const { step, data } = action.payload;
      state.formData[step] = { ...state.formData[step], ...data };
    },
  },
});

export const { setStep, completeStep, updateFormData } = formSlice.actions;
export default formSlice.reducer;
