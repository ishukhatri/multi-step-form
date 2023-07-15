import Step from "./Step";

export default {
  title: "Components/Stepper/Step",
  component: Step,
};

export const InProgress = () => (
  <Step stepNumber={1} stepName={"Your Info"} inProgress={true} />
);

export const Inactive = () => (
  <Step stepNumber={1} stepName={"Your Info"} inProgress={false} />
);
