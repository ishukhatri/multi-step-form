"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const page = () => {
  const count = useSelector((state) => state.form.currentStep);
  return <div>should be on step {JSON.stringify(count)}</div>;
};

export default page;
