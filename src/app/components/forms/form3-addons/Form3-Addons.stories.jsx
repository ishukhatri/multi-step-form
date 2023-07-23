import React from "react";
import AddonsForm from "./Form3-Addons";

export default {
  title: "Components/form2-addons/AddonsForm",
  component: AddonsForm,
  argTypes: {
    billingCycle: {
      control: "select",
      options: ["monthly", "yearly"],
    },
  },
};

const Template = (args) => <AddonsForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  billingCycle: "monthly",
};

export const WithDifferentProps = Template.bind({});
WithDifferentProps.args = {
  billingCycle: "yearly",
};
