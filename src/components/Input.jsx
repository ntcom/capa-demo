const Input = ({ label, required, id, value, width, height }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-base text-[#030229] font-semibold">
        {label} {required && <span className="text-[#FF2020]">*</span>}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={()=>{}}
        className={`w-full !max-w-[${width}] h-[${height}] bg-[#FAFAFB] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4] mt-[15px] text-[#1f1f1f]`}
      />
    </div>
  );
};

export default Input;
