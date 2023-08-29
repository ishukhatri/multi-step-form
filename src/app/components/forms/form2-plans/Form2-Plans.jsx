import React, { useState } from "react";
import FormLayout from "../FormLayout";
import Image from "next/image";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setStep, updateFormData } from "@/lib/redux/slices/formSlice";
import { selectStepData } from "@/lib/redux/selectors/formSelector";

const SwitchToggle = () => {
  const { register, watch } = useFormContext();
  const isMonthly = watch("isMonthly");
  return (
    <label
      className="bg-theme-very-light-grey rounded-lg flex py-3 gap-6 justify-center
      text-right text-theme-denim text-sm font-medium"
    >
      <input
        type="checkbox"
        checked={isMonthly}
        className="hidden"
        {...register("isMonthly")}
      />
      <p className={`${isMonthly ? "text-sky-950" : "text-gray-400"}`}>
        Monthly
      </p>
      <div className="relative w-10 h-5 bg-theme-denim rounded-xl cursor-pointer">
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

const PlanLabel = ({ plan }) => {
  const { register, watch } = useFormContext();
  const selectedPlan = watch("plan");
  const isMonthly = watch("isMonthly");
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
        {...register("plan")}
        value={plan.name}
        checked={selectedPlan === plan.name}
        className="hidden"
      />
      <PlanBox planInfo={plan} isMonthly={isMonthly} />
    </label>
  );
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

const PlanRadioGroup = () => {
  const data = useSelector(selectStepData(2));
  const methods = useForm({
    defaultValues: {
      ...data,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("Submitting data:", data);
    dispatch(updateFormData({ step: 2, data }));
    dispatch(setStep(3));
  };

  return (
    <FormLayout
      title={"Select your plan"}
      description={"You have the option of monthly or yearly billing."}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <FormProvider {...methods}>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:gap-5 gap-3">
            {plans.map((plan) => (
              <PlanLabel key={plan.name} plan={plan} isMonthly={false} />
            ))}
          </div>
          <SwitchToggle isMonthly={false} onToggle={() => {}} />
        </form>
      </FormProvider>
    </FormLayout>
  );
};

export default PlanRadioGroup;
