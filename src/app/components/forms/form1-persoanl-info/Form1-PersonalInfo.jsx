import FormLayout from "../FormLayout";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const PersonalInfoInput = ({ label, name, placeholder, required, pattern }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative w-full flex flex-col justify-center items-start gap-1">
      <label
        htmlFor={name}
        className="text-theme-denim text-sm font-normal mt-1"
      >
        {label}
      </label>
      <input
        {...register(name, { required: true, pattern })}
        placeholder={`${placeholder}`}
        className={`h-10 bg-white rounded border ${
          errors[name] ? "border-theme-red" : "border-theme-light-grey"
        } w-full text-theme-denim placeholder:text-theme-grey font-medium text-base pl-4`}
      />
      {errors[name] && (
        <p className="absolute top-0 right-0 text-right text-theme-red text-sm font-bold">
          {required
            ? `${label} is required.`
            : `Please enter valid ${label.toLowerCase()}.`}
        </p>
      )}
    </div>
  );
};

const Form = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log("Submitting data:", data);
  };

  return (
    <FormLayout
      title={"Personal info"}
      description={"Please provide your name, email address, and phone number."}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <FormProvider {...methods}>
        <form className="flex gap-6 flex-col">
          <PersonalInfoInput
            label="Name"
            name="name"
            placeholder="e.g. Stephen King"
            required={true}
          />
          <PersonalInfoInput
            label="Email Address"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            required={true}
          />
          <PersonalInfoInput
            label="Phone Number"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            pattern={/\d+/}
          />
        </form>
      </FormProvider>
    </FormLayout>
  );
};

export default Form;
