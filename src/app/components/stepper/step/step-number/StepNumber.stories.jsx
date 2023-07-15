import StepNumber from "./StepNumber";

export default {
  title: "Components/Stepper/Step/StepNumber",
  component: StepNumber,
};

export const Inavtive = () => <StepNumber number={1} inProgress={false} />;
export const Active = () => <StepNumber number={1} inProgress={true} />;
