import React from "react";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px]"></h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center"></div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Ready to switch a career
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Let's get started!
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
