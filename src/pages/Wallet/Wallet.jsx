import { useState } from "react";
import arrowDown from "../../assets/svgs/arrow-down.svg";
import calendar from "../../assets/svgs/calendar.svg";
import GroupFuncKeys from "../../components/GroupFuncKeys";
import search from "../../assets/svgs/search.svg";
import plus from "../../assets/svgs/plus.svg";
import dolar from "../../assets/svgs/dolar.svg";
import {RechargeModal} from '../../components/Modal/RechargeModal/RechargeModal'
import {WithdrawModal} from '../../components/Modal/WithdrawModal/WithdrawModal'

const dataTable = [
  {
    stt: 1,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Nạp tiền 0.0, số dư 1028620422.4000001",
  },
  {
    stt: 2,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Đặt cọc 0.0 đơn mua hàng S00950, số dư 1028620422.4000001",
  },
  {
    stt: 3,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Nạp tiền 0.0, số dư 1028620422.4000001",
  },
  {
    stt: 4,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Đặt cọc 0.0 đơn mua hàng S00950, số dư 1028620422.4000001",
  },
  {
    stt: 5,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Nạp tiền 0.0, số dư 1028620422.4000001",
  },
  {
    stt: 6,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Đặt cọc 0.0 đơn mua hàng S00950, số dư 1028620422.4000001",
  },
  {
    stt: 7,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Nạp tiền 0.0, số dư 1028620422.4000001",
  },
  {
    stt: 8,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Đặt cọc 0.0 đơn mua hàng S00950, số dư 1028620422.4000001",
  },
  {
    stt: 9,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Nạp tiền 0.0, số dư 1028620422.4000001",
  },
  {
    stt: 10,
    date: "16/05/2024",
    time: "11:09:56",
    increase: 5550000,
    decrease: 0,
    surplus: 10115000,
    content: "Đặt cọc 0.0 đơn mua hàng S00950, số dư 1028620422.4000001",
  },
];

export const Wallet = () => {
  const [filterSelect, setFilterSelect] = useState("all");
  const [soft, setSoft] = useState("new");
  const [group, setGroup] = useState("");
  const [openModal, setOpenModal] = useState({
    rechargeModal: false,
    withdrawModal: false
  });

  const renderDataTable = () => {
    return dataTable.map((line) => {
      return (
        <tr
          key={line.stt}
          className="relative w-[1105px] xl:w-auto flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
        >
          <td className="shrink-0 w-full max-w-[76px] xl:w-full xl:max-w-[6.96%] text-[#030229] text-xs text-center font-normal">
            {line.stt}
          </td>
          <td className="shrink-0 w-full max-w-[186px] xl:w-full xl:max-w-[17.03%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <img src={calendar} alt="" className="block shrink-0 w-[12.6px]" />
            {line.date}{' '}{'-'}{' '}{line.time}
          </td>
          <td className="shrink-0 w-full max-w-[164px] xl:w-full xl:max-w-[15.02%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
              {line.increase}
          </td>
          <td className="shrink-0 w-full max-w-[164px] xl:w-full xl:max-w-[15.02%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.decrease}
          </td>
          <td className="shrink-0 w-full max-w-[214px] xl:w-full xl:max-w-[19.6%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.surplus}
          </td>
          <td className="w-full xl:w-full xl:max-w-[21.1%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold">
            {line.content}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h2 className="text-2xl text-[#4285F4] font-bold">Lịch sử giao dịch</h2>

      <div className="w-full flex justify-between mt-8">
        <GroupFuncKeys
          filterSelect={filterSelect}
          setFilterSelect={setFilterSelect}
          soft={soft}
          setSoft={setSoft}
          group={group}
          setGroup={setGroup}
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

          <div className="flex gap-2">
              <button
                onClick={() => setOpenModal({...openModal, rechargeModal: true})}
                className="shink-0 w-full max-w-[122px] h-10 p-[4px_20px] flex items-center justify-center gap-[10px] bg-[#4285F4] rounded-[10px]"
              >
                <div className="shrink-0">
                  <img src={plus} alt="" />
                </div>
                <p className="text-[#fff] text-sm font-semibold leading-[18px] whitespace-nowrap">
                  Nạp tiền
                </p>
              </button>
              <button
                onClick={() => setOpenModal({...openModal, withdrawModal: true})}
                className="shink-0 w-full max-w-[122px] h-10 p-[4px_20px] flex items-center justify-center gap-[10px] bg-[rgba(242,147,57,.9)] rounded-[10px]"
              >
                <div className="shrink-0">
                  <img src={dolar} alt="" />
                </div>
                <p className="text-[#fff] text-sm font-semibold leading-[18px] whitespace-nowrap">
                  Rút tiền
                </p>
              </button>
          </div>
        </div>
      </div>

      <table className="block xl:table w-full mt-6 overflow-x-scroll">
        <thead>
          <tr className="flex items-center py-5 pr-5">
            <th className="shrink-0 w-full max-w-[76px] xl:w-full xl:max-w-[6.96%] text-[#030229] text-xs font-normal">
              STT
            </th>
            <th className="shrink-0 w-full max-w-[186px] xl:w-full xl:max-w-[17.03%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Ngày giao dịch{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="shrink-0 w-full max-w-[164px] xl:w-full xl:max-w-[15.02%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Tăng{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="shrink-0 w-full max-w-[164px] xl:w-full xl:max-w-[15.02%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Giảm{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="shrink-0 w-full max-w-[214px] xl:w-full xl:max-w-[19.6%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Số dư ví{" "}
              <img
                src={arrowDown}
                alt=""
                className={`block shrink-0 w-[7px] h-[6px] ${
                  soft === "old" && "rotate-180"
                }`}
              />
            </th>
            <th className="shrink-0 w-auto xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Nội dung{" "}
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

      <RechargeModal openModal={openModal.rechargeModal} setOpenModal={setOpenModal}/>
      <WithdrawModal openModal={openModal.withdrawModal} setOpenModal={setOpenModal}/>
    </>
  );
};
