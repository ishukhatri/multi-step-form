"use client";
import React from "react";

import { useSelector } from "react-redux";
import PlanRadioGroup from "@components/forms/form2-plans/Form2-Plans";
import AddonsForm from "@components/forms/form3-addons/Form3-Addons";
import ThankYou from "@components/forms/thank-you/ThankYou";
import Stepper from "../components/stepper/Stepper";
import FinishingUp from "@components/forms/finishing-up/FinishingUp";
import Form from "@components/forms/form1-persoanl-info/Form1-PersonalInfo";

const Main = () => {
  const currentStepIndex = useSelector((state) => state.form.currentStep);
  return (
    <div className="flex flex-col gap-8 md:gap-0 h-screen md:h-auto md:flex-row ">
      <div
        className="rounded-[10px] md:w-[30%] flex items-center mx-auto mt-8 md:m-0 md:items-start
      bg-mobile-bg-image md:bg-desktop-bg-image bg-cover bg-no-repeat md:pt-10 md:pl-8"
      >
        <Stepper></Stepper>
      </div>
      <div className="md:w-[70%]">
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
