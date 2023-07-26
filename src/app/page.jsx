"use client";
import React from "react";

import PlanRadioGroup from "@components/forms/form2-plans/Form2-Plans";
import AddonsForm from "@components/forms/form3-addons/Form3-Addons";
import ThankYou from "@components/forms/thank-you/ThankYou";
import Stepper from "@components/stepper/Stepper";
import FinishingUp from "@components/forms/finishing-up/FinishingUp";
import Form from "@components/forms/form1-persoanl-info/Form1-PersonalInfo";

import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const currentStepIndex = useSelector((state) => state.form.currentStep);

  return (
    <div
      className="outer-container md:p-4 md:w-[940px] md:h-[600px] md:bg-white flex flex-col 
    md:flex-row gap-8 md:gap-0 h-screen md:rounded-xl"
    >
      <div
        className="side-bar-with-stepper rounded-[10px] md:w-[30%] flex items-center md:pt-10 md:pl-8
          md:items-start bg-mobile-bg-image md:bg-desktop-bg-image bg-cover bg-no-repeat"
      >
        <Stepper></Stepper>
      </div>
      <div className="form-n-button-holder md:w-[70%] md:px-20 md:mx-auto md:mt-10 md:mb-4">
        {currentStepIndex == 1 && <Form />}
        {currentStepIndex == 2 && <PlanRadioGroup />}
        {currentStepIndex == 3 && <AddonsForm />}
        {currentStepIndex == 4 && <FinishingUp />}
        {currentStepIndex == 5 && <ThankYou />}
      </div>
    </div>
  );
};

export default Main;
