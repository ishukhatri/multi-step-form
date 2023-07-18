import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control, // Add the 'control' property from the second declaration
  } = useForm({
    mode: "onChange",
  });

  /*
  <div className="Group5 w-[295px] h-[203px] relative">
<div className="Group4 w-[295px] h-[57px] left-0 top-0 absolute flex-col justify-center items-start gap-[3px] inline-flex">
<div className="Name text-sky-950 text-xs font-normal">Name</div>
<div className="Group3 w-[295px] h-10 relative flex-col justify-start items-start flex">
<div className="Rectangle w-[295px] h-10 bg-white rounded border border-gray-300" />
<div className="EGStephenKing text-gray-400 text-[15px] font-medium">e.g. Stephen King</div>
</div>
</div>
<div className="Group4Copy w-[295px] h-[57px] left-0 top-[73px] absolute flex-col justify-center items-start gap-[3px] inline-flex">
<div className="EmailAddress text-sky-950 text-xs font-normal">Email Address</div>
<div className="Group3 w-[295px] h-10 relative flex-col justify-start items-start flex">
<div className="Rectangle w-[295px] h-10 bg-white rounded border border-gray-300" />
<div className="EGStephenkingLor text-gray-400 text-[15px] font-medium">e.g. stephenking@lorem.com</div>
</div>
</div>
<div className="Group4Copy2 w-[295px] h-[57px] left-0 top-[146px] absolute flex-col justify-center items-start gap-[3px] inline-flex">
<div className="PhoneNumber text-sky-950 text-xs font-normal">Phone Number</div>
<div className="Group3 w-[295px] h-10 relative flex-col justify-start items-start flex">
<div className="Rectangle w-[295px] h-10 bg-white rounded border border-gray-300" />
<div className="EG1234567890 text-gray-400 text-[15px] font-medium">e.g. +1 234 567 890</div>
</div>
</div>
</div>*/
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex-col justify-center items-start gap-4 inline-flex w-full">
          <div className="relative w-full flex-col justify-center items-start gap-1 inline-flex">
            <div>
              <label
                htmlFor="name"
                className="text-theme-denim text-sm font-normal mt-1"
              >
                Name
              </label>
            </div>
            <input
              {...register("name", { required: true })}
              placeholder="e.g. Stephen King"
              className={`h-10 bg-white rounded border ${
                errors.name ? "border-theme-red" : "border-theme-light-grey"
              } w-full text-theme-denim placeholder:text-theme-grey font-medium text-base pl-4`}
            />
            {errors.name && (
              <p className="absolute top-0 right-0 text-right text-theme-red text-sm font-bold">
                Name is required.
              </p>
            )}
          </div>
          {/* <div className=" min-w-full flex-col justify-center items-start gap-1 inline-flex text-theme-denim text-xs font-normal">
            <label htmlFor="email">Email Address</label>
            <input
              {...register("email", { required: true })}
              placeholder="e.g. stephenking@lorem.com"
              className="h-10 bg-white rounded border border-gray-300 min-w-full"
            />
            {errors.email && <p>Email is required.</p>}
          </div>
          <div className="min-w-full flex-col justify-center items-start gap-1 inline-flex text-theme-denim text-xs font-normal">
            <label htmlFor="phone">Phone Number</label>
            <input
              {...register("phone", { pattern: /\d+/ })}
              placeholder="e.g. +1 234 567 890"
              className="h-10 bg-white rounded border border-gray-300 min-w-full"
            />
            {errors.phone && <p>Please enter numbers only for phone.</p>}
          </div> */}
          <input type="submit" />
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Form;
