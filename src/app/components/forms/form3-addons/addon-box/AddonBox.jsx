import React from "react";

const AddonBox = ({ addon, billingCycle }) => {
  return (
    <div>
      <div className="flex flex-col flex-1 gap-1 ">
        <p className="text-sky-950 text-sm font-medium">{addon.displayName}</p>
        <p className="text-gray-400 text-xs font-normal leading-tight">
          {addon.desc}
        </p>
      </div>
      <p className="text-right text-indigo-600 text-xs font-normal leading-tight">
        +$
        {billingCycle === "monthly"
          ? `${addon.monthly}/mo`
          : `${addon.yearly}/yr`}
      </p>
    </div>
  );
};

export default AddonBox;
