const initialState = {
  currentStep: 1,
  completedSteps: [],
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
};

export default initialState;
