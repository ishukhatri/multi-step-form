"use client";
import React from "react";

import { useSelector } from "react-redux";
import Form from "../components/form1-persoanl-info/Form1-PersonalInfo";
import PlanRadioGroup from "../components/form2-plans/plan-box/PlanRadioGroup";
import AddonsForm from "../components/form3-addons/AddonsForm";
import ThankYou from "../components/thank-you/ThankYou";
import Stepper from "../components/stepper/Stepper";
import FinishingUp from "../components/finishing-up/FinishingUp";

const Main = () => {
  const currentStepIndex = useSelector((state) => state.form.currentStep);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center mx-auto mt-8">
        <Stepper></Stepper>
      </div>
      <div className="bg-white rounded-[10px] shadow px-6 py-8">
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
