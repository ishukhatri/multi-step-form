import PlanRadioGroup from "./PlanRadioGroup";

export default {
  title: "Components/form2-plan-selector/PlanRadioGroup",
  component: PlanRadioGroup,
};

export const mobile = () => <PlanRadioGroup />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const desktop = () => <PlanRadioGroup />;
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
