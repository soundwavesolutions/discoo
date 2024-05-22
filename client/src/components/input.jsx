import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full cursor-pointer mb-4 input-wrapper relative">
      <input
        type="text"
        className={`p-[8px_12px] w-full border-[2px] border-[#dbdbdb] text-base font-bold text-[#293033]`}
        placeholder={title}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
