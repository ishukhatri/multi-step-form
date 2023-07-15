"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FormLayout = ({ children }) => {
  const steps = useSelector((state) => state.form.steps);

  seasons.forEach((season, index) => {
    seasonsList.push(<li key={index}>{season}</li>);
  });

  return (
    <div className="relative bg-theme-sky-blue min-h-screen bg-mobile-bg-image bg-no-repeat bg-contain">
      <div className=""></div>
      {children}
    </div>
  );
};

export default FormLayout;
