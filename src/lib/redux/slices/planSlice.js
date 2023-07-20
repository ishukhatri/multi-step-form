import { createSlice } from "@reduxjs/toolkit";
//todo this should not be a slice but a data.json file
const plansSlice = createSlice({
  name: "plans",
  initialState: {
    plans: [
      {
        name: "Arcade",
        monthly: 9,
        yearly: 90,
        extra: "2 months free",
        icon: "",
      },
      {
        name: "Advanced",
        monthly: 12,
        yearly: 120,
        extra: "2 months free",
        icon: "",
      },
      {
        name: "Pro",
        monthly: 15,
        yearly: 150,
        extra: "2 months free",
        icon: "",
      },
    ],
    addons: [
      {
        name: "Online Service",
        desc: "Access to multiplayer games",
        monthly: 1,
        yearly: 10,
      },
      {
        name: "Larger Storage",
        desc: "Extra 1TB of cloud save",
        monthly: 2,
        yearly: 20,
      },
      {
        name: "Customizable profile",
        desc: "Custom theme on your profile",
        monthly: 2,
        yearly: 20,
      },
    ],
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
