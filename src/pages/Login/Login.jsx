import { useState } from "react";

export const Login = () => {
  const [eye, setEye] = useState(false);
  const [passVal, setPassVal] = useState(null);

  return (
    <div
      className="main-login h-screen p-8 flex flex-col justify-center items-center gap-11"
      style={{
        background: "no-repeat url('src/assets/imgs/bg-login.png')",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className="text-[#fff] text-5xl sm:text-[70px] md:text-[88px] font-semibold leading-normal text-center">
          Login
        </h2>
        <p className="text-[#fff] text-xs sm:text-sm md:text-base font-normal text-center">
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
        action=""
        style={{
          background:
            "linear-gradient(116deg, rgba(255, 255, 255, 0.44) -0.2%, rgba(255, 255, 255, 0.00) 122.69%)",
          // backdropFilter: "blur(2px)",
        }}
        className="w-full max-w-[620px] p-6 sx:p-11 rounded-xl flex flex-col items-start gap-5 sm:gap-8"
      >
        <div className="w-full flex flex-col gap-2 sm:gap-4">
          <label
            htmlFor="username"
            className="text-[#fff] text-sm sx:text-xl md:text-2xl font-normal"
          >
            Username
          </label>
          <div className="w-full relative flex items-center">
            <input
              type="text"
              className="w-full h-11 sm:h-16 md:h-20 bg-[#fff] p-[10px_16px_10px_54px] sx:p-[10px_24px_10px_84px] outline-none rounded-xl text-sm sx:text-xl md:text-2xl font-normal placeholder:text-[#BABABA]"
              id="username"
              placeholder="Your Username"
            />
            <img
              src="src/assets/svgs/user-icon.svg"
              alt="username"
              className="absolute left-5 sx:left-6 w-6 sx:w-9 cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 sm:gap-4">
          <label
            htmlFor="password"
            className="text-[#fff] text-sm sx:text-xl md:text-2xl font-normal"
          >
            Password
          </label>
          <div className="w-full relative flex items-center">
            <input
              type={eye ? "text" : "password"}
              className={`w-full h-11 sm:h-16 md:h-20 bg-[#fff] p-[10px_40px_10px_54px] sx:p-[10px_84px] outline-none rounded-xl ${
                eye || passVal === null
                  ? "text-sm sx:text-xl md:text-2xl"
                  : "text-xl sx:text-2xl md:text-[38px] text-[#1f1f1f]"
              } font-normal placeholder:text-sm placeholder:sx:text-xl placeholder:md:text-2xl placeholder:leading-6 placeholder:text-[#BABABA]`}
              id="password"
              placeholder="Your Password"
              onChange={(e) => setPassVal(e.target.value)}
            />
            <div
              onClick={() => setEye(!eye)}
              className="absolute left-5 sx:left-6 w-6 sx:w-9 cursor-pointer"
            >
              {eye ? (
                <img src="src/assets/svgs/eye-close-icon.svg" alt="eye icon" />
              ) : (
                <img src="src/assets/svgs/eye-icon.svg" alt="eye icon" />
              )}
            </div>
            <button
              style={{
                background:
                  "linear-gradient(224deg, rgba(210, 0, 98, 0.55) -56.57%, rgba(38, 102, 207, 0.95) 70.27%)",
              }}
              className="absolute right-0 h-full w-10 sx:w-20 p-[8px_12px] sx:p-[10px_24px] flex justify-center items-center rounded-[0_12px_12px_0]"
            >
              <img
                src="src/assets/svgs/chevron-right.svg"
                alt=""
                className="w-3 sx:w-5"
              />
            </button>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 sm:gap-5 md:gap-8">
          <p className="shrink-0 text-[#fff] text-xs sm:text-sm md:text-base font-normal">
            Or login with
          </p>
          <i className="w-full h-[1px] bg-[rgba(255,255,255,0.44)]"></i>
        </div>

        <ul className="flex items-center sx:gap-3 sm:gap-5 md:gap-8">
          <li className="inline-flex">
            <a href="https://google.com" className="inline-flex">
              <img
                src="src/assets/svgs/google.svg"
                alt=""
                className="w-[calc(100%-18px)] sm:w-[calc(100%-8px)] md:w-auto"
              />
            </a>
          </li>
          <li className="inline-flex">
            <a href="https://facebook.com">
              <img
                src="src/assets/svgs/facebook.svg"
                alt=""
                className="w-[calc(100%-18px)] sm:w-[calc(100%-8px)] md:w-auto"
              />
            </a>
          </li>
          <li className="inline-flex">
            <a href="https://apple.com">
              <img
                src="src/assets/svgs/apple.svg"
                alt=""
                className="w-[calc(100%-18px)] sm:w-[calc(100%-8px)] md:w-auto"
              />
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};
