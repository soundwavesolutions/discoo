import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} my-5 text-white px-3 py-1 rounded font-bold text-lg bg-[#ff6000]`}
    >
      {title}
    </button>
  );
};

export default Button;
