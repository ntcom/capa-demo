import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/svgs/logo.svg';
import infoIcon from '../../assets/svgs/info.svg';
import infoIconActive from '../../assets/svgs/info-active.svg';
import passwordIcon from '../../assets/svgs/password.svg';
import passwordIconActive from '../../assets/svgs/password-active.svg';
import walletIcon from '../../assets/svgs/wallet.svg';
import walletIconActive from '../../assets/svgs/wallet-active.svg';
import contractIcon from '../../assets/svgs/contract.svg';
import contractIconActive from '../../assets/svgs/contract-active.svg';
import getIcon from '../../assets/svgs/get.svg';
import getIconActive from '../../assets/svgs/get-active.svg';

const navs = [
  {
    id: 1,
    name: "Hồ sơ của tôi",
    icon: infoIcon,
    iconActive: infoIconActive,
    link: '/profile'
  },
  {
    id: 2,
    name: "Đổi mật khẩu",
    icon: passwordIcon,
    iconActive: passwordIconActive,
    link: '/change-password',
  },
  {
    id: 3,
    name: "Ví",
    icon: walletIcon,
    iconActive: walletIconActive,
    link: '/wallet',
    children: [
      {
        id: 11,
        name: "Lịch sử giao dịch",
      },
      {
        id: 12,
        name: "Nạp tiền",
      },
      {
        id: 13,
        name: "Rút tiền",
      },
    ],
  },
  {
    id: 4,
    name: "Đơn hàng ký gửi",
    icon: contractIcon,
    iconActive: contractIconActive,
    link: '/order/delivery-service'
  },
  {
    id: 5,
    name: "Đơn hàng mua hộ",
    icon: getIcon,
    iconActive: getIconActive,
    link: '/order/order-service'
  },
];

export const Sidebar = () => {
  const [navActive, setNavActive] = useState(1);

  return (
    <aside className="fixed top-0 left-0 bottom-0 shrink-0 w-[218px] 2xl:w-[268px] h-screen bg-[#fff]">
      <div className="flex items-center justify-center gap-[15px] p-[50px_20px]">
        <Link to={"/"} className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <img src={logo} alt="" />
        </Link>
        <Link to={"/"} className="text-[#4285F4] text-2xl font-semibold">
          Capa
        </Link>
      </div>

      <nav>
        {navs.map((nav) => {
          return (
            <Link
              to={nav.link}
              className="block py-[15px] hover:bg-[linear-gradient(90deg,rgba(66,133,244,.2)_0%,rgba(66,133,244,0.00)_30.98%)]"
              style={{
                background:
                  navActive === nav.id &&
                  "linear-gradient(90deg, rgba(66, 133, 244, .2) 0%, rgba(66, 133, 244, 0.00) 30.98%)",
              }}
              key={nav.id}
              onClick={() => setNavActive(nav.id)}
            >
              <div className="px-[30px] flex items-center gap-4">
                <img
                  src={navActive === nav.id ? nav.iconActive : nav.icon}
                  alt=""
                  className="shrink-0 w-5 h-5"
                />
                <p
                  className={`text-base ${
                    navActive === nav.id ? "text-[#4285F4]" : "text-[#03022980]"
                  } font-bold whitespace-nowrap`}
                >
                  {nav.name}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
