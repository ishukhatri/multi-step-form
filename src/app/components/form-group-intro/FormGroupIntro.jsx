import React from "react";

const FormGroupIntro = ({ title, description }) => {
  return (
    <div className="">
      <div className="font-bold text-2xl leading-7 text-theme-denim">
        {title}
      </div>
      <div className="mt-2 font-normal text-base text-theme-grey">
        {description}
      </div>
    </div>
  );
};

export default FormGroupIntro;
