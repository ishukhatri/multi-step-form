import React from "react";
import Image from "next/image";

const PlanBox = ({ planInfo, billingCycle }) => {
  const { name, monthly, yearly, extra, iconPath } = planInfo;

  return (
    <>
      <Image src={iconPath} width={40} height={40} alt={name} />
      <div className="ml-4">
        <div className="font-medium text-theme-denim text-base leading-4">
          {name}
        </div>
        <div className="text-theme-grey text-sm font-normal leading-tight pt-2">
          ${billingCycle === "monthly" ? `${monthly}/mo` : `${yearly}/yr`}
        </div>
        {billingCycle === "yearly" && (
          <div className="text-xs font-normal leading-tight text-theme-denim pt-1">
            {extra}
          </div>
        )}
      </div>
    </>
  );
};

export default PlanBox;
