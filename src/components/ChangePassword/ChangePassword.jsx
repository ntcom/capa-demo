import { Link } from "react-router-dom";
import Input from "../Input";

export const ChangePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/2 bg-[#fff] rounded-[10px] p-[30px]">
      <h2 className="text-2xl text-[#4285F4] font-bold">Thay đổi mật khẩu</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center mt-10"
      >
        <div className="">
          <div className="flex flex-col gap-10">
            {/* <label htmlFor="input2" className="shrink-0 w-[216px] flex">
                <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                  Mật khẩu: <span className="text-[#FF2020]">*</span>
                </p>
              </label>
              <input
                type="password"
                id="input2"
                required
                className="xl:shrink-0 w-full max-w-[400px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
              /> */}
            <Input
              label={"Mật khẩu"}
              id={"code"}
              required={true}
              defaultValue={"#876370"}
              height={"50px"}
            />
            <Input
              label={"Mật khẩu mới"}
              id={"code"}
              required={true}
              defaultValue={"#876370"}
              height={"50px"}
            />
            <Input
              label={"Nhập lại mật khẩu"}
              id={"code"}
              required={true}
              defaultValue={"#876370"}
              height={"50px"}
            />
          </div>
        </div>

        <Link
          to={"/login"}
          className="mt-14 w-full max-w-[300px] mx-auto h-[50px] self-center rounded-[10px] bg-[#4285F4] text-lg text-[#fff] font-bold flex justify-center items-center"
        >
          Thay đổi mật khẩu
        </Link>
      </form>
    </div>
  );
};
