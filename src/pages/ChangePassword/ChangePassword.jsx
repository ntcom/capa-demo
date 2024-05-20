export const ChangePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full bg-[#fff] rounded-[10px] p-[30px]">
      <h2 className="text-2xl text-[#4285F4] font-bold">Thay đổi mật khẩu</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center mt-32"
      >
        <div className="">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-start justify-center">
              <label htmlFor="input2" className="shrink-0 w-[216px] flex">
                <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                  Mật khẩu: <span className="text-[#FF2020]">*</span>
                </p>
              </label>
              <input
                type="password"
                id="input2"
                required
                className="xl:shrink-0 w-full max-w-[400px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
              />
            </div>
            <div className="flex gap-5 items-start justify-center">
              <label htmlFor="input3" className="shrink-0 w-[216px] flex">
                <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                  Mật khẩu mới: <span className="text-[#FF2020]">*</span>
                </p>
              </label>
              <input
                type="password"
                id="input3"
                required
                className="xl:shrink-0 w-full max-w-[400px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
              />
            </div>
            <div className="flex gap-5 items-start justify-center">
              <label htmlFor="input8" className="shrink-0 w-[216px] flex">
                <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                  Nhập lại mật khẩu mới: <span className="text-[#FF2020]">*</span>
                </p>
              </label>
              <input
                type="password"
                id="input8"
                required
                className="xl:shrink-0 w-full max-w-[400px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_30px_8px_20px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
              ></input>
            </div>
          </div>
        </div>

        <button className="mt-14 w-full max-w-[400px] h-[50px] self-center rounded-[10px] bg-[#4285F4] text-[22px] text-[#fff] font-bold">
          Thay đổi mật khẩu
        </button>
      </form>
    </div>
  );
};
