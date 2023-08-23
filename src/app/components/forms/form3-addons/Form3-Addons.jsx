import React from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../FormLayout";

const AddonBox = ({ addon, isMonthly }) => {
  return (
    <div className="flex flex-row grow items-center">
      <div className="flex flex-col flex-1 gap-1 ">
        <p className="text-sky-950 text-sm font-medium">{addon.displayName}</p>
        <p className="text-gray-400 text-xs font-normal leading-tight">
          {addon.desc}
        </p>
      </div>
      <p className="text-right text-indigo-600 text-xs font-normal leading-tight">
        +$
        {isMonthly ? `${addon.monthly}/mo` : `${addon.yearly}/yr`}
      </p>
    </div>
  );
};

const AddonLabel = ({ addon, register, isMonthly }) => {
  return (
    <label
      key={addon.name}
      className="flex flex-row items-center px-4 py-3 gap-4 bg-white rounded-lg border border-gray-300"
    >
      <input
        type="checkbox"
        name={`${addon.name}`} // Use a unique name for each checkbox
        value="true" // Set a value for the checkbox
        {...register(`${addon.name}`)} // Register the checkbox with useForm
        className="h-5 w-5 checked:text-red-600 default:text-red-600 border-gray-300 rounded"
      />
      <AddonBox addon={addon} isMonthly={isMonthly} />
    </label>
  );
};

const AddonsForm = ({ isMonthly = false }) => {
  const {
    handleSubmit,
    control,
    register, // Destructure the register function
  } = useForm();

  const onSubmit = (data) => {
    console.log("inner on submit called!!", data);
  };

  const title = "Pick add-ons";
  const desc = "Add-ons help enhance your gaming experience.";
  const addons = [
    {
      name: "OnlineService",
      displayName: "Online service",
      desc: "Access to multiplayer games",
      monthly: 1,
      yearly: 10,
    },
    {
      name: "LargerStorage",
      displayName: "Larger storage",
      desc: "Extra 1TB of cloud save",
      monthly: 2,
      yearly: 20,
    },
    {
      name: "CustomizableProfile",
      displayName: "Customizable profile",
      desc: "Custom theme on your profile",
      monthly: 2,
      yearly: 20,
    },
  ];

  return (
    <FormLayout
      title={title}
      description={desc}
      onSubmit={handleSubmit(onSubmit)}
    >
      <form>
        <div className="flex flex-col gap-3">
          {addons.map((addon) => (
            <AddonLabel
              key={addon.name}
              addon={addon}
              register={register}
              isMonthly={isMonthly}
            />
          ))}
        </div>
      </form>
    </FormLayout>
  );
};

export default AddonsForm;
