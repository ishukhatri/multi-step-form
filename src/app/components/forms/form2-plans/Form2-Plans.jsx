import React, { useState } from "react";
import FormLayout from "../FormLayout";
import Image from "next/image";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setStep } from "@/lib/redux/slices/formSlice";

const SwitchToggle = ({ isMonthly, onToggle }) => {
  return (
    <label
      className="bg-theme-very-light-grey rounded-lg flex py-3 gap-6 justify-center
      text-right text-theme-denim text-sm font-medium"
    >
      <input
        type="checkbox"
        checked={isMonthly}
        // onChange={handleToggle}
        className="hidden"
      />
      <p className={`${isMonthly ? "text-sky-950" : "text-gray-400"}`}>
        Monthly
      </p>
      <div
        className="relative w-10 h-5 bg-theme-denim rounded-xl cursor-pointer"
        onClick={onToggle}
      >
        <div
          className={`absolute top-1 left-1 w-3 h-3 transition-transform
          ${isMonthly ? "transform translate-x-0" : "transform translate-x-5"}
          bg-white rounded-full`}
        />
      </div>
      <p className={`${isMonthly ? "text-gray-400" : "text-sky-950"}`}>
        Yearly
      </p>
    </label>
  );
};

const PlanBox = ({ planInfo, isMonthly }) => {
  const { name, monthly, yearly, extra, iconPath } = planInfo;

  return (
    <div className="flex gap-4 flex-row md:flex-col md:gap-10 justify-start ">
      <Image src={iconPath} width={40} height={40} alt={name} />
      <div className="">
        <div className="font-medium text-theme-denim text-base leading-4">
          {name}
        </div>
        <div className="text-theme-grey text-sm font-normal leading-tight pt-2">
          ${isMonthly ? `${monthly}/mo` : `${yearly}/yr`}
        </div>
        <div
          className={`text-xs font-normal leading-tight text-theme-denim pt-1 ${
            isMonthly ? "invisible" : ""
          }`}
        >
          {extra}
        </div>
      </div>
    </div>
  );
};

const PlanLabel = ({ plan, selectedPlan, isMonthly, onInputChange }) => {
  return (
    <label
      className={`flex justify-start items-start pt-[14px] pb-[18px] px-4 rounded-lg 
        border border-theme-light-grey hover:border-theme-purple 
        md:min-w-[140px] md:min-h-[160px] ${
          selectedPlan === plan.name
            ? "bg-slate-50 border border-theme-purple"
            : ""
        }`}
    >
      <input
        type="radio"
        name="plan"
        value={plan.name}
        checked={selectedPlan === plan.name}
        onChange={onInputChange}
        className="hidden"
      />
      <PlanBox planInfo={plan} isMonthly={isMonthly} />
    </label>
  );
};

const PlanRadioGroup = () => {
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

  const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("Submitting data:", data);
    dispatch(setStep(2));
  };

  const [selectedPlan, setSelectedPlan] = useState("Arcade");

  const { handleSubmit } = useForm({});

  const [isMonthly, setIsMonthly] = useState(false); // Lifted state

  const handleToggle = () => {
    setIsMonthly((prevIsMonthly) => {
      console.log("isMonthly", prevIsMonthly);
      const updatedIsMonthly = !prevIsMonthly;
      console.log("isMonthlyAfterUpdate", updatedIsMonthly);
      return updatedIsMonthly;
    });
  };
  const handlePlanChange = (e) => {
    console.log(e.target.value);
    setSelectedPlan(e.target.value);
  };

  return (
    <FormLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row md:gap-5 gap-3"
      >
        {plans.map((plan) => (
          <PlanLabel
            key={plan.name}
            plan={plan}
            selectedPlan={selectedPlan}
            isMonthly={isMonthly}
            onInputChange={handlePlanChange}
          />
        ))}
      </form>
      <SwitchToggle isMonthly={isMonthly} onToggle={handleToggle} />
    </FormLayout>
  );
};

export default PlanRadioGroup;
