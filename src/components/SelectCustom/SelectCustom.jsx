import { useState } from "react";
import arrowDown from "../../assets/svgs/arrow-down.svg";


// eslint-disable-next-line react/prop-types
const SelectCustom = ({ data, width, height }) => {
  const [onSelect, setOnSelect] = useState(false);
  const [selectVal, setSelectVal] = useState(data[0].value || data[0]);

  return (
    <div className="relative w-full flex items-center cursor-pointer">
      <input
        type="text"
        disabled
        value={selectVal}
        placeholder={'Tuyến'}
        className={`w-full max-w-[${width}] h-[${height}] bg-[#FAFAFB] rounded-[10px] p-[8px_30px_8px_20px] outline-none border-[1px] border-solid focus:bg-[#fff] ${
          onSelect && "bg-[#fff] border-[#4285F4]"
        } ${selectVal ? 'text-[#1f1f1f]' : 'text-[#aaa]'} text-sm font-semibold`}
      />
      <img src={arrowDown} alt="" className="absolute right-5 w-[6px]" />
      <label
        onClick={() => {
          if (onSelect) {
            setOnSelect(false);
          } else {
            setOnSelect(true);
          }
        }}
        htmlFor={''}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
      ></label>

      <div
        className={`select-options absolute top-[112%] left-0 w-full ${
          onSelect
            ? "max-h-[134px] overflow-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        } flex flex-col bg-[#fff] rounded-[10px] border-[1px] border-solid border-[#4285F4] transition-all`}
      >
        {data.map((option, index) => {
          return (
            <data
              key={option.id ? option.id : index}
              value={option.value ? option.value : option}
              onClick={(e) => {
                setSelectVal(e.target.value);
                setOnSelect(false);
              }}
              className="p-[10px_20px] hover:bg-[rgb(255_143_107/5%)] transition-all text-sm text-[#1f1f1f] font-medium"
            >
              {option.value ? option.value : option}
            </data>
          );
        })}
      </div>
    </div>
  );
};

export default SelectCustom;
