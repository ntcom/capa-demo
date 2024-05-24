import { useState } from "react";
import search from "../../assets/svgs/search.svg";
import plus from "../../assets/svgs/plus.svg";
import arrowDown from "../../assets/svgs/arrow-down.svg";
import calendar from "../../assets/svgs/calendar.svg";
import { Link } from "react-router-dom";
import DeliveryServiceModal from "../../components/Modal/DeliveryServiceModal/DeliveryServiceModal";
import GroupFuncKeys from "../../components/GroupFuncKeys";

const dataTable = [
  {
    stt: 1,
    code: "S00924",
    date: "15/05/2024",
    time: "10:10:44",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: "Sale",
  },
  {
    stt: 2,
    code: "S00923",
    date: "15/05/2024",
    time: "10:09:34",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: "Sale",
  },
  {
    stt: 3,
    code: "S00911",
    date: "14/05/2024",
    time: "17:29:22",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: "Sale",
  },
  {
    stt: 4,
    code: "S00910",
    date: "14/05/2024",
    time: "17:26:33",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: "Draft",
  },
  {
    stt: 5,
    code: "S00902",
    date: "14/05/2024",
    time: "15:43:19",
    product: "AD019",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: "Draft",
  },
  {
    stt: 6,
    code: "S00894",
    date: "13/05/2024",
    time: "14:08:12",
    product: "TRACk1",
    quantity: 1,
    totalPrice: 3984000,
    deposits: 0,
    status: "Sale",
  },
  {
    stt: 7,
    code: "S00892",
    date: "13/05/2024",
    time: "14:00:34",
    product: "TRACK2",
    quantity: 1,
    totalPrice: 1593600,
    deposits: 8,
    status: "Sale",
  },
  {
    stt: 8,
    code: "S00890",
    date: "13/05/2024",
    time: "13:58:24",
    product: "TRACK1",
    quantity: 1,
    totalPrice: 1593600,
    deposits: 8,
    status: "Sale",
  },
  {
    stt: 9,
    code: "S00889",
    date: "13/05/2024",
    time: "13:55:37",
    product: "",
    quantity: 0,
    totalPrice: 0,
    deposits: 0,
    status: "Draft",
  },
  {
    stt: 10,
    code: "S00888",
    date: "13/05/2024",
    time: "13:47:19",
    product: "TRACK0",
    quantity: 1,
    totalPrice: 1992000,
    deposits: 10,
    status: "Sale",
  },
];

export const DeliveryService = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterSelect, setFilterSelect] = useState("all");
  const [soft, setSoft] = useState("new");

  if (openModal) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "unset";
  }

  const renderDataTable = () => {
    return dataTable.map((line) => {
      return (
        <tr
          key={line.stt}
          className="relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
        >
          <td className="w-full max-w-[6.98%] text-[#030229] text-xs text-center font-normal">
            {line.stt}
          </td>
          <td className="w-full max-w-[10.38%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Link
              to={`/delivery-service/${line.code}`}
              className="text-[#4285F4] hover:underline"
            >
              {line.code}
            </Link>
          </td>
          <td className="w-full max-w-[17.17%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <img src={calendar} alt="" className="block shrink-0 w-[12.6px]" />
            {line.date}
          </td>
          <td className="w-full max-w-[21.7%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.product}
          </td>
          <td className="w-full max-w-[8%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.quantity}
          </td>
          <td className="w-full max-w-[15.85%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.totalPrice}
          </td>
          <td className="w-full max-w-[12%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.deposits}
          </td>
          <td
            className={`flex items-center justify-center shrink-0 w-[80px] h-[35px] ${
              line.status === "Sale"
                ? "bg-[rgba(58,151,76,0.1)]"
                : "bg-[rgba(242,147,57,0.1)]"
            } rounded-[22px]`}
          >
            <p
              className={`text-sm font-bold leading-[14px] ${
                line.status === "Sale" ? "text-[#3A974C]" : "text-[#F29339]"
              }`}
            >
              {line.status}
            </p>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h2 className="text-2xl text-[#4285F4] font-bold">Đơn hàng</h2>

      <div className="w-full flex justify-between mt-8">
        <GroupFuncKeys
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          filterSelect={filterSelect}
          setFilterSelect={setFilterSelect}
          soft={soft}
          setSoft={setSoft}
        />

        <div className="flex gap-4">
          <div className="shrink-0 relative inline-flex items-center">
            <input
              type="text"
              className="shrink-0 w-[260px] h-10 p-[12px_35px_12px_16px] rounded-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] outline-none"
              placeholder="Search"
            />
            <div className="shrink-0 w-3 h-3 absolute right-[23px]">
              <img src={search} alt="" />
            </div>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="shink-0 w-full max-w-[122px] h-10 p-[4px_20px] flex items-center justify-center gap-[10px] bg-[#4285F4] rounded-[10px]"
          >
            <div className="shrink-0">
              <img src={plus} alt="" />
            </div>
            <p className="text-[#fff] text-sm font-semibold leading-[18px]">
              Tạo mới
            </p>
          </button>
        </div>
      </div>

      <table className="block xl:table w-full mt-6 overflow-x-scroll">
        <thead>
          <tr className="flex items-center py-5 pr-5">
            <th className="w-[74px] xl:w-full xl:max-w-[6.98%] text-[#030229] text-xs font-normal">
              STT
            </th>
            <th className="w-[110px] xl:w-full xl:max-w-[10.38%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Mã đơn hàng{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[182px] xl:w-full xl:max-w-[17.17%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Ngày đặt hàng{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[230px] xl:w-full xl:max-w-[21.7%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Sản phẩm{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[90px] xl:w-full xl:max-w-[8%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Số lượng{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[168px] xl:w-full xl:max-w-[15.85%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Tổng số tiền{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[130px] xl:w-full xl:max-w-[12%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Đã đặt cọc{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="w-[90px] xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Trạng thái{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
          </tr>
        </thead>

        <tbody>{renderDataTable()}</tbody>
      </table>

      <DeliveryServiceModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
