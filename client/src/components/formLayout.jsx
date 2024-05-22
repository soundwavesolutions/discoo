import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="w-full py-11 max-w-[960px] mx-auto p-3 flex max-md:flex-wrap gap-6 max-md:justify-center md:justify-between">
      <form
        className="min-w-[300px] w-[300px] p-5 border border-[#dbdbdb] h-fit"
        onSubmit={handleSubmit}
      >
        {title && <h1 className="mb-4 font-[700] text-[19px]">{title}</h1>}
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}
        <div>{children}</div>
      </form>
      <div className="max-md:w-full">
        <img
          className="max-md:hidden"
          src="https://portal.discover.com/applications/login-logout/images/Site_marketing_LRG_at.jpg"
          alt=""
        />
        <img
          className="md:hidden w-full"
          src="https://portal.discover.com/applications/login-logout/images/Site_marketing_SML_at.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FormLayout;
