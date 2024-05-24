import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import infoIcon from "../../assets/svgs/info.svg";
import infoIconActive from "../../assets/svgs/info-active.svg";
import passwordIcon from "../../assets/svgs/password.svg";
import passwordIconActive from "../../assets/svgs/password-active.svg";
// import walletIcon from "../../assets/svgs/wallet.svg";
// import walletIconActive from "../../assets/svgs/wallet-active.svg";
import contractIcon from "../../assets/svgs/contract.svg";
import contractIconActive from "../../assets/svgs/contract-active.svg";
// import getIcon from "../../assets/svgs/get.svg";
// import getIconActive from "../../assets/svgs/get-active.svg";
import { useLocation } from "react-router-dom";
import upgrade from "../../assets/svgs/upgrade.svg";
import ava from "../../assets/imgs/ava.png";
import logout from "../../assets/svgs/logout.svg";

const navs = [
  {
    id: 1,
    name: "Hồ sơ của tôi",
    icon: infoIcon,
    iconActive: infoIconActive,
    link: "/profile",
  },
  {
    id: 2,
    name: "Đổi mật khẩu",
    icon: passwordIcon,
    iconActive: passwordIconActive,
    link: "/change-password",
  },
  // {
  //   id: 3,
  //   name: "Ví",
  //   icon: walletIcon,
  //   iconActive: walletIconActive,
  //   link: "/wallet",
  //   children: [
  //     {
  //       id: 11,
  //       name: "Lịch sử giao dịch",
  //     },
  //     {
  //       id: 12,
  //       name: "Nạp tiền",
  //     },
  //     {
  //       id: 13,
  //       name: "Rút tiền",
  //     },
  //   ],
  // },
  {
    id: 4,
    name: "Đơn hàng",
    icon: contractIcon,
    iconActive: contractIconActive,
    link: "/delivery-service",
  },
  // {
  //   id: 5,
  //   name: "Đơn hàng mua hộ",
  //   icon: getIcon,
  //   iconActive: getIconActive,
  //   link: "/order-service",
  // },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="fixed top-0 left-0 bottom-0 shrink-0 w-[218px] 2xl:w-[268px] h-screen bg-[#fff] flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-[15px] p-[50px_20px]">
        <Link to={"/"} className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <img src={logo} alt="" className="w-[150px]" />
        </Link>
        {/* <Link to={"/"} className="text-[#4285F4] text-2xl font-bold">
          TRANGHUY
        </Link> */}
      </div>

      <nav className="w-full">
        {navs.map((nav) => {
          return (
            <Link
              to={nav.link}
              className="block py-[15px] hover:bg-[linear-gradient(90deg,rgba(66,133,244,.2)_0%,rgba(66,133,244,0.00)_30.98%)]"
              style={{
                background:
                  pathname === nav.link &&
                  "linear-gradient(90deg, rgba(66, 133, 244, .2) 0%, rgba(66, 133, 244, 0.00) 30.98%)",
              }}
              key={nav.id}
            >
              <div className="px-[30px] flex items-center gap-4">
                <img
                  src={pathname === nav.link ? nav.iconActive : nav.icon}
                  alt=""
                  className="shrink-0 w-5 h-5"
                />
                <p
                  className={`text-base ${
                    pathname === nav.link
                      ? "text-[#4285F4]"
                      : "text-[#03022980]"
                  } font-bold whitespace-nowrap`}
                >
                  {nav.name}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-[166px] w-full max-w-[77.06%] h-[145px] mx-auto  bg-[#80abff1a] rounded-[20px] p-[15px] flex flex-col items-center justify-between">
        <div className="w-[50%]">
          <img src={upgrade} alt="" />
        </div>
        <button className="w-full h-[33px] rounded-[10px] bg-[#4285F4] shadow-[0px_4px_4px_0px_rgba(31,31,31,0.25)] self-end">
          <p className="text-xs text-[#fff] font-semibold">Cập nhật ngay</p>
        </button>
      </div>

      <div className="absolute bottom-10 flex justify-between gap-[22px] items-center">
        <div className="flex items-center gap-[10px]">
          <button className="shrink-0 block w-[45px] h-[45px] rounded-xl overflow-hidden">
            <img src={ava} alt="" />
          </button>
          <div>
            <p className="text-sm text-[#1f1f1f] font-bold">Tony Nhiem</p>
            <p className="text-sm text-[#1f1f1f99] font-medium">Free Account</p>
          </div>
        </div>
        <button className="shrink-0 flex">
          <img src={logout} alt="" />
        </button>
      </div>
    </aside>
  );
};
