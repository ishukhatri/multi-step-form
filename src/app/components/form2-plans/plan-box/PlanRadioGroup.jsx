import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  plan: yup.string().required("Please select a plan"),
});

const RadioGroup = () => {
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data.plan);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="plan"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <PlanBox name="Plan 1" rate="$10" iconPath="/path/to/plan1.png" />
            <PlanBox name="Plan 2" rate="$20" iconPath="/path/to/plan2.png" />
            {errors.plan && <p>{errors.plan.message}</p>}
            <input type="submit" />
          </>
        )}
      />
      {/* billing plan switch */}
    </form>
  );
};

export default RadioGroup;
