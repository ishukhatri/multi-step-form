import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PlanBox from "./PlanBox";
import SwitchToggle from "../billing-period-selector/SwitchToggle";

const PlanRadioGroup = ({ billingCycle }) => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const { handleSubmit } = useForm({});

  const onSubmit = () => {
    console.log(selectedPlan);
  };

  const plans = [
    {
      name: "Arcade",
      monthly: 9,
      yearly: 90,
      extra: "2 months free",
      iconPath: "/assets/images/icon-arcade.svg",
    },
    {
      name: "Advanced",
      monthly: 12,
      yearly: 120,
      extra: "2 months free",
      iconPath: "/assets/images/icon-advanced.svg",
    },
    {
      name: "Pro",
      monthly: 15,
      yearly: 150,
      extra: "2 months free",
      iconPath: "/assets/images/icon-pro.svg",
    },
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row md:gap-5 gap-3"
      >
        {plans.map((plan) => (
          <label
            key={plan.name}
            className="flex justify-start items-start pt-[14px] pb-[18px] px-4 rounded-lg 
          hover:bg-theme-very-light-grey border border-theme-light-grey hover:border-theme-purple 
          md:min-w-[140px] md:min-h-[160px]"
          >
            <input
              type="radio"
              name="plan"
              value={plan.name}
              checked={selectedPlan === plan.name}
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedPlan(e.target.value);
              }}
              className="hidden"
            />
            <PlanBox planInfo={plan} billingCycle={billingCycle} />
          </label>
        ))}
        <input type="submit" />
      </form>
      <SwitchToggle></SwitchToggle>
    </>
  );
};

export default PlanRadioGroup;
