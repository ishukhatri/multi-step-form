import React from "react";
import Image from "next/image";

const PlanBox = ({ name, rate, extra, iconPath }) => {
  return (
    <div
      className="flex justify-start items-start pt-[14px] pb-[18px] px-4 rounded-lg 
    hover:bg-theme-very-light-grey border border-theme-light-grey hover:border-theme-purple"
    >
      <Image
        src={"/assets/images/icon-arcade.svg"}
        width={40}
        height={40}
      ></Image>
      <div className="ml-[14px]">
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
    </div>
  );
};

export default PlanBox;
