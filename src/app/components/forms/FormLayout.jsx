import React from "react";
import FormGroupIntro from "../common/form-group-intro/FormGroupIntro";

const FormLayout = ({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <FormGroupIntro
          title={title}
          description={description}
        ></FormGroupIntro>
      </div>
      {children}
    </div>
  );
};

export default FormLayout;
