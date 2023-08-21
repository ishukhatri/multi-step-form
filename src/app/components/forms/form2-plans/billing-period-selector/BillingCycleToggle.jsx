import React, { useState } from "react";

const SwitchToggle = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    setIsMonthly((prevIsMonthly) => {
      console.log("isMonthly", prevIsMonthly);
      const updatedIsMonthly = !prevIsMonthly;
      console.log("isMonthlyAfterUpdate", updatedIsMonthly);
      return updatedIsMonthly;
    });
  };

  return (
    <label
      className="bg-theme-very-light-grey rounded-lg flex py-3 gap-6 justify-center
      text-right text-theme-denim text-sm font-medium"
    >
      <input
        type="checkbox"
        checked={isMonthly}
        // onChange={handleToggle}
        className="hidden"
      />
      <p className={`${isMonthly ? "text-sky-950" : "text-gray-400"}`}>
        Monthly
      </p>
      <div
        className="relative w-10 h-5 bg-theme-denim rounded-xl cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1 left-1 w-3 h-3 transition-transform
          ${isMonthly ? "transform translate-x-0" : "transform translate-x-5"}
          bg-white rounded-full`}
        />
      </div>
      <p className={`${isMonthly ? "text-gray-400" : "text-sky-950"}`}>
        Yearly
      </p>
    </label>
  );
};

export default SwitchToggle;
