import React from "react";

const FormGroupIntro = ({ title, description }) => {
  return (
    <div className="flex-col justify-center items-start gap-2 inline-flex">
      <div className="font-bold text-2xl text-theme-denim">{title}</div>
      <div className="font-normal text-base text-theme-grey leading-6">
        {description}
      </div>
    </div>
  );
};

export default FormGroupIntro;
