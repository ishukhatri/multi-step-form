import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentStep: 1,
    steps: [
      { title: "your info", stepIndex: 1 },
      { title: "select plan", stepIndex: 2 },
      { title: "add-ons", stepIndex: 3 },
      { title: "summary", stepIndex: 4 },
    ],
    formData: {
      step1: {},
      step2: {},
      step3: {},
    },
  },
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormData: (state, action) => {
      console.log("updating data....");
      const { step, data } = action.payload;
      state.formData[`step${step}`] = {
        ...state.formData[`step${step}`],
        ...data,
      };
    },
  },
});

export const { setStep, updateFormData } = formSlice.actions;
export default formSlice.reducer;
