import SelectCustom from "../../../components/SelectCustom/SelectCustom";
import close from "../../../assets/svgs/close.svg";

const listBanks = [
  "MB Bank",
  "Vietcombank",
  "Techcombank",
  "VPBank",
  "ACB",
  "BIDV",
];

// eslint-disable-next-line react/prop-types
export const WithdrawModal = ({ openModal, setOpenModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 ${
        openModal ? "opacity-100" : "h-0 overflow-hidden opacity-0"
      } bg-[rgb(31_31_31/30%)] flex justify-center items-center p-5 lg:p-0 transition-all`}
    >
      <div className="w-full max-w-[900px] bg-[#fff] p-[25px_25px_80px_25px] rounded-[10px]">
        <div className="flex justify-between gap-5 items-center">
          <h3 className="text-[24px] text-[#4285F4] font-extrabold">
            Tạo đơn rút tiền từ ví
          </h3>

          <button
            onClick={() => setOpenModal({ ...openModal, withdrawModal: false })}
            className="shrink-0 w-[40px] h-[40px] rounded-[100px] bg-[rgb(231_29_54/5%)] flex justify-center items-center"
          >
            <img src={close} alt="" className="w-3 h-3" />
          </button>
        </div>

        <div className="mt-12 flex gap-[26px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-grow"
          >
            <div className="">
              <div className="flex flex-col gap-[18px]">
                <div className="flex gap-5 items-start">
                  <label htmlFor="input2" className="shrink-0 w-[216px] flex">
                    <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                      Số tiền rút:{" "}
                      <span className="text-sm text-[#4285F4]">(1)</span>
                      <span className="text-[#FF2020]">*</span>
                    </p>
                  </label>
                  <input
                    type="text"
                    id="input2"
                    required
                    className="w-full max-w-[326px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                  />
                </div>
                <div className="flex gap-5 items-start">
                  <label htmlFor="input1" className="shrink-0 w-[216px] flex">
                    <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                      Ngân hàng:{" "}
                      <span className="text-sm text-[#4285F4]">(2)</span>
                      <span className="text-[#FF2020]">*</span>
                    </p>
                  </label>
                  <div className="w-full max-w-[326px]">
                    <SelectCustom data={listBanks} height={"45px"} />
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <label htmlFor="input3" className="shrink-0 w-[216px] flex">
                    <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                      Số tài khoản ngân hàng:{" "}
                      <span className="text-sm text-[#4285F4]">(3)</span>
                      <span className="text-[#FF2020]">*</span>
                    </p>
                  </label>
                  <input
                    type="text"
                    id="input3"
                    required
                    className="w-full max-w-[326px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                  />
                </div>
                <div className="flex gap-5 items-start">
                  <label htmlFor="input8" className="shrink-0 w-[216px] flex">
                    <p className="text-base text-[#1f1f1f] font-semibold whitespace-nowrap">
                      Ghi chú:
                    </p>
                  </label>
                  <textarea
                    name="textarea"
                    id="input8"
                    rows={3}
                    className="w-full max-w-[326px] h-[45px] bg-[#FAFAFB] rounded-[10px] p-[8px_30px_8px_20px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                  ></textarea>
                </div>
              </div>
            </div>

            <button className="mt-[32px] w-full max-w-[326px] h-[50px] self-center rounded-[10px] bg-[#4285F4] text-[22px] text-[#fff] font-bold">
              Xác nhận
            </button>
          </form>

          <div className="w-full max-w-[274px]">
            <div className="w-full max-w-[274px] border-[1px] border-dashed border-[#4285F4] rounded-md p-[20px_12px] relative">
              <p className="absolute top-[-17px] left-[14px] text-[22px] text-[#4285F4] font-bold px-1 bg-[#fff]">
                Số dư
              </p>
              <p className="text-2xl text-[#FF8F6B] font-bold tracking-widest">
                948,245,422
              </p>
            </div>

            <div className="w-full max-w-[274px] border-[1px] border-dashed border-[#4285F4] rounded-md p-3 mt-[30px]">
              <p className="text-base text-[#4285F4] font-bold">Ghi chú:</p>
              <ul className="pl-3">
                <li className="text-xs text-[#1F1F1F] font-medium">
                  <span className="text-[#4285F4]">(1)</span> Điền số tiền muốn
                  giao dịch
                </li>
                <li className="text-xs text-[#1F1F1F] font-medium">
                  <span className="text-[#4285F4]">(2)</span> Chọn ngân hàng
                  nhận tiền
                </li>
                <li className="text-xs text-[#1F1F1F] font-medium">
                  <span className="text-[#4285F4]">(3)</span> Nhập số tài khoản
                  ngân hàng nhận tiền
                </li>
              </ul>

              <p className="text-base text-[#FF8F6B] font-bold mt-5">Lưu ý:</p>
              <p className="text-xs text-[#1F1F1F] italic mt-[10px] ml-3">
                Tránh trường hợp giao dịch tiền không thành công. Quý khách vui
                lòng kiểm tra thông tin tài khoản ngân hàng chính xác trước khi
                thêm mới
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
