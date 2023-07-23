import React from "react";
import { useForm } from "react-hook-form";
import AddonBox from "./addon-box/AddonBox";
import FormLayout from "../FormLayout";

const AddonsForm = ({ billingCycle }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register, // Destructure the register function
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
    <FormLayout title={title} description={desc}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          {addons.map((addon) => (
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
              <AddonBox addon={addon} billingCycle={billingCycle}></AddonBox>
            </label>
          ))}
        </div>
      </form>
    </FormLayout>
  );
};

export default AddonsForm;
