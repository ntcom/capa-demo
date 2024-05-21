import { useState } from "react";
import bgLogin from "../../assets/imgs/bg-login.png";
import user from "../../assets/svgs/user-icon.svg";
import hEyeIcon from "../../assets/svgs/eye-close-icon.svg";
import eyeIcon from "../../assets/svgs/eye-icon.svg";
import chevronRight from "../../assets/svgs/chevron-right.svg";
import google from "../../assets/svgs/google.svg";
import facebook from "../../assets/svgs/facebook.svg";
import apple from "../../assets/svgs/apple.svg";
import vector1 from "../../assets/svgs/login/vector1.svg";
import vector2 from "../../assets/svgs/login/vector2.svg";
import vector3 from "../../assets/svgs/login/vector3.svg";
import vector4 from "../../assets/svgs/login/vector4.svg";
import vector5 from "../../assets/svgs/login/vector5.svg";
import vector6 from "../../assets/svgs/login/vector6.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [eye, setEye] = useState(false);
  const [passVal, setPassVal] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("/");
  };

  return (
    <div
      className="main-login h-screen p-8 flex flex-col justify-center items-center gap-11 relative overflow-hidden"
      style={{
        background: `no-repeat url(${bgLogin})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className="text-[#fff] text-[46px] md:text-[58px] 2xl:text-[68px] font-semibold leading-normal text-center">
          Login
        </h2>
        <p className="text-[#fff] text-xs md:text-sm 2xl:text-base font-normal text-center">
          Create an Capa account!{" "}
          <span>
            <a
              href="/register"
              className="border-b-[1px] border-solid border-[#fff] pb-[1px]"
            >
              Register now!
            </a>
          </span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          background:
            "linear-gradient(116deg, rgba(255, 255, 255, 0.44) -0.2%, rgba(255, 255, 255, 0.00) 122.69%)",
          // backdropFilter: "blur(2px)",
        }}
        className="w-full max-w-[340px] md:max-w-[420px] 2xl:max-w-[480px] p-6 md:p-8 2xl:p-11 rounded-xl flex flex-col items-start gap-5 md:gap-6 2xl:gap-8 z-[998]"
      >
        <div className="w-full flex flex-col gap-2 md:gap-3 2xl:gap-4">
          <label
            htmlFor="username"
            className="text-[#fff] text-sm md:text-lg 2xl:text-xl font-normal"
          >
            Username
          </label>
          <div className="w-full relative flex items-center">
            <input
              type="text"
              className="w-full h-10 md:h-12 2xl:h-14 bg-[#fff] p-[10px_16px_10px_44px] md:p-[12px_24px_12px_54px] 2xl:p-[12px_24px_12px_64px] outline-none rounded-xl text-sm md:text-lg 2xl:text-xl font-normal placeholder:text-[#BABABA]"
              id="username"
              placeholder="Your Username"
              required
            />
            <img
              src={user}
              alt="username"
              className="absolute left-4 sx:left-5 w-4 md:w-5 2xl:w-7 cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 md:gap-3 2xl:gap-4">
          <label
            htmlFor="password"
            className="text-[#fff] text-sm md:text-lg 2xl:text-xl font-normal"
          >
            Password
          </label>
          <div className="w-full relative flex items-center">
            <input
              type={eye ? "text" : "password"}
              className={`w-full h-10 md:h-12 2xl:h-14 bg-[#fff] p-[10px_44px_10px_44px] md:p-[12px_52px_12px_54px] 2xl:p-[12px_60px_12px_64px] outline-none rounded-xl ${
                eye || passVal === ''
                  ? "text-sm md:text-lg 2xl:text-xl"
                  : "text-xl md:text-2xl 2xl:text-[38px] text-[#1f1f1f]"
              } font-normal placeholder:text-sm placeholder:md:text-lg placeholder:2xl:text-xl placeholder:leading-6 placeholder:text-[#BABABA]`}
              id="password"
              placeholder="Your Password"
              required
              onChange={(e) => setPassVal(e.target.value)}
            />
            <div
              onClick={() => setEye(!eye)}
              className="absolute left-4 sx:left-5 w-4 md:w-5 2xl:w-7 cursor-pointer"
            >
              {eye ? (
                <img src={hEyeIcon} alt="eye icon" />
              ) : (
                <img src={eyeIcon} alt="eye icon" />
              )}
            </div>
            <button
              style={{
                background:
                  "linear-gradient(224deg, rgba(210, 0, 98, 0.55) -56.57%, rgba(38, 102, 207, 0.95) 70.27%)",
              }}
              className="absolute right-0 h-full w-10 md:w-12 2xl:w-14 flex justify-center items-center rounded-[0_12px_12px_0]"
            >
              <img src={chevronRight} alt="" className="w-2 lg:w-3 2xl:w-4" />
            </button>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 md:gap-5 lg:gap-6 2xl:gap-8">
          <p className="shrink-0 text-[#fff] text-xs sm:text-sm md:text-base font-normal">
            Or login with
          </p>
          <i className="w-full h-[1px] bg-[rgba(255,255,255,0.44)]"></i>
        </div>

        <ul className="flex items-center gap-2 xs:gap-3 md:gap-5 lg:gap-6 2xl:gap-8">
          <li className="inline-flex">
            <a href="https://google.com" className="inline-flex">
              <img
                src={google}
                alt=""
                className="w-[25px] lg:w-[30px] 2xl:w-[37px]"
              />
            </a>
          </li>
          <li className="inline-flex">
            <a href="https://facebook.com">
              <img
                src={facebook}
                alt=""
                className="w-[20px] lg:w-[25px] 2xl:w-[32px]"
              />
            </a>
          </li>
          <li className="inline-flex">
            <a href="https://apple.com">
              <img
                src={apple}
                alt=""
                className="w-[20px] lg:w-[25px] 2xl:w-[32px]"
              />
            </a>
          </li>
        </ul>
      </form>
      <img
        src={vector1}
        alt=""
        className="absolute max-w-[8%] top-[43%] left-0"
      />
      <img
        src={vector2}
        alt=""
        className="absolute max-w-[5%] top-[13%] left-[24%]"
      />
      <img
        src={vector3}
        alt=""
        className="absolute max-w-[6.6%] bottom-[12%] left-[27%]"
      />
      <img
        src={vector4}
        alt=""
        className="absolute max-w-[8%] top-[25%] right-[22%]"
      />
      <img
        src={vector5}
        alt=""
        className="absolute max-w-[8%] bottom-[26.8%] right-[30.8%]"
      />
      <img
        src={vector6}
        alt=""
        className="absolute max-w-[7%] bottom-[-1.8%] right-[-1%]"
      />
    </div>
  );
};
