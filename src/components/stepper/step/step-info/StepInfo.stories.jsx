import StepInfo from "./StepInfo";

export default {
  title: "Components/Stepper/Step/StepInfo",
  component: StepInfo,
};

export const Desktop = () => <StepInfo stepNumber={1} stepName={"Your Info"} />;
