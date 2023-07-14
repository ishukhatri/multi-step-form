"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FormLayout = ({ children }) => {
  const count = useSelector((state) => state.form.totalSteps);
  return (
    <div className="relative bg-theme-sky-blue min-h-screen bg-mobile-bg-image bg-no-repeat bg-contain">
      <div className=""></div>
      {children}
    </div>
  );
};

export default FormLayout;
