"use client";
import React from "react";

import PlanRadioGroup from "@/app/components/forms/form2-plans/Form2-Plans";
import AddonsForm from "@/app/components/forms/form3-addons/Form3-Addons";
import ThankYou from "@/app/components/thank-you/ThankYou";
import Stepper from "@/app/components/stepper/Stepper";
import FinishingUp from "@/app/components/finishing-up/FinishingUp";
import Form from "@/app/components/forms/form1-persoanl-info/Form1-PersonalInfo";
import { selectCurrentStep } from "@/lib/redux/selectors/formSelector";

import { useSelector } from "react-redux";

const Main = () => {
  const currentStepIndex = useSelector(selectCurrentStep);

  return (
    <div
      className="outer-container h-screen flex flex-col gap-8 bg-mobile-bg-image bg-contain bg-no-repeat
      md:flex-row md:gap-0 md:p-4 md:w-[940px] md:h-[600px] md:bg-none md:bg-white md:shadow md:rounded-2xl "
    >
      <div
        className="stepper-container flex pt-10 justify-center
        md:w-[30%] md:rounded-xl md:justify-start md:pl-8 md:items-start 
        md:bg-desktop-bg-image md:bg-cover md:bg-no-repeat"
      >
        <Stepper></Stepper>
      </div>
      <div className="form-with-button-holder md:w-[70%] md:px-20 md:mx-auto md:mt-10 md:mb-4">
        {currentStepIndex === 1 && <Form />}
        {currentStepIndex === 2 && <PlanRadioGroup />}
        {currentStepIndex === 3 && <AddonsForm />}
        {currentStepIndex === 4 && <FinishingUp />}
        {currentStepIndex === 5 && <ThankYou />}
      </div>
    </div>
  );
};

export default Main;
