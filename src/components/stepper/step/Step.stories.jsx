import Step from "./Step";

export default {
  title: "Components/Stepper/Step",
  component: Step,
};

export const mobile = () => (
  <Step stepNumber={1} stepName={"Your Info"} inProgress={true} />
);
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const desktop = () => (
  <Step stepNumber={1} stepName={"Your Info"} inProgress={false} />
);
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
