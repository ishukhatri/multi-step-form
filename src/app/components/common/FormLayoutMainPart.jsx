import React from "react";
import FormGroupIntro from "@components/common/form-group-intro/FormGroupIntro";

const FormLayoutMainPart = ({ title, description, children }) => {
  return (
    <div className="form flex flex-col mx-4 md:mx-0 gap-6 md:gap-8 bg-white px-6 py-8 md:p-0 rounded-[10px]">
      {title && (
        <FormGroupIntro
          title={title}
          description={description}
        ></FormGroupIntro>
      )}
      {children}
    </div>
  );
};

export default FormLayoutMainPart;
