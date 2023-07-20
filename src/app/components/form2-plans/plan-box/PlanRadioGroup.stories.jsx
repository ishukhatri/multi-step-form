import React from "react";
import PlanRadioGroup from "./PlanRadioGroup";

export default {
  title: "Components/form2-plans",
  component: PlanRadioGroup,
  argTypes: {
    billingCycle: {
      control: "select",
      options: ["monthly", "yearly"],
    },
  },
};

const Template = (args) => <PlanRadioGroup {...args} />;

export const mobile = Template.bind({});
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};
mobile.args = {
  billingCycle: "monthly",
};

export const desktop = Template.bind({});
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
desktop.args = {
  billingCycle: "yearly",
};
