import { useState } from "react";
import check from "../../assets/svgs/check.svg";

// eslint-disable-next-line react/prop-types
const CheckboxCustom = ({ label }) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <div className="flex items-start gap-[10px]">
      <label
        htmlFor="checkbox"
        className={`shrink-0 w-5 h-5 rounded-[2px] ${
          isChecked
            ? "bg-[#4285F4] border-[#4285F4]"
            : "bg-[#fff] border-[#aaa]"
        } border-[1px] border-solid flex justify-center items-center cursor-pointer`}
      >
        <input
          id="checkbox"
          type="checkbox"
          className="opacity-0"
          onChange={(e) => {
            console.log("Check:", e.target.checked);
            setIsChecked(e.target.checked);
          }}
        />
        <div className="absolute flex">
          <img src={check} alt="" />
        </div>
      </label>

      <label htmlFor="checkbox" className="text-xs text-[#1f1f1f] font-medium">
        {label}
      </label>
    </div>
  );
};

export default CheckboxCustom;
