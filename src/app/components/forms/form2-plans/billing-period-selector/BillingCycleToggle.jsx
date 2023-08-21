import React, { useState } from "react";

const SwitchToggle = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    console.log("isMonthly", isMonthly);
    setIsMonthly(!isMonthly);
  };

  return (
    <label
      className="bg-theme-very-light-grey rounded-lg flex py-3 gap-6 justify-center
    text-right text-theme-denim text-sm font-medium"
    >
      <input
        type="checkbox"
        checked={isMonthly}
        onChange={handleToggle}
        className="hidden"
      />
      <p>Monthly</p>
      <div
        className="relative inline-block w-10 h-5 bg-theme-denim rounded-xl cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 ${
            isMonthly ? "transform translate-x-5" : "transform translate-x-0"
          } bg-white rounded-full transition-transform`}
        />
      </div>
      <p>Yearly</p>
    </label>
  );
};

export default SwitchToggle;
