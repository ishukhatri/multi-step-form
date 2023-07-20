import React from "react";

const PlanBox = ({ plan, checked, onChange }) => {
  const { name, rate, extra, iconPath, value } = plan;

  return (
    <label
      className="flex justify-start items-start pt-[14px] pb-[18px] px-4 rounded-lg 
      hover:bg-theme-very-light-grey border border-theme-light-grey hover:border-theme-purple"
    >
      <input
        type="radio"
        name="plan"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <Image src={iconPath} width={40} height={40} alt={name} />
      <div className="ml-4">
        <div className="font-medium text-theme-denim text-base leading-4">
          {name}
        </div>
        <div className="text-theme-grey font-normal text-sm leading-5 pt-2">
          {rate}
        </div>
        {extra && (
          <div className="font-normal text-xs text-theme-denim pt-1">
            {extra}
          </div>
        )}
      </div>
    </label>
  );
};

export default PlanBox;
