import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="rounded bg-theme-denim py-3 px-4 text-white text-sm leading-4 font-medium">
        {text}
      </button>
    </div>
  );
};

export default Button;
