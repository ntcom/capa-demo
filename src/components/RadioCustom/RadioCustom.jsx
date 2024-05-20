import { useState } from "react";

const RadioCustom = ({ data }) => {
  const defaultChecked = data.name === "info" ? "CapaGroup" : "NTVP";

  const [selectedInput, setSelectedInput] = useState(defaultChecked);

  const handleChange = (inputValue) => {
    setSelectedInput(inputValue);
  };

  const RadioInput = ({ name, label, value, isChecked, handleChange }) => {
    const handleRadioChange = (e) => {
      const { id } = e.currentTarget;
      handleChange(id); // Send back id to radio group for comparison
    };

    return (
      <div className="flex gap-[15px] relative">
        <input
          type="radio"
          className="current-radio"
          name={name}
          id={value}
          defaultChecked={isChecked}
          onClick={handleRadioChange}
        />
        <span className="custom-radio"></span>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor={value}
            className={`text-sm text-[#1F1F1F] ${
              data.name === "info" && "font-semibold"
            }`}
          >
            {label}
          </label>

          {data.name === "info" && (
            <p className="text-xs text-[#1f1f1fcc]">{data.location}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <RadioInput
        name={data.name}
        value={data.value}
        label={data.label}
        isChecked={selectedInput === data.value}
        handleChange={handleChange}
      />
    </div>
  );
};

export default RadioCustom;
