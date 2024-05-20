import close from "../../../assets/svgs/close.svg";
import ptchvc from "../../../assets/imgs/qr-code/phan-thi-cam-ha-vietcom.png";
import nhcvc from "../../../assets/imgs/qr-code/nguyen-huy-chien-vietcom.png";
import ptchtc from "../../../assets/imgs/qr-code/phan-thi-cam-ha-techcom.png";
import nhcmb from "../../../assets/imgs/qr-code/nguyen-huy-chien-mb.png";

const listQRCode = [
  {
    id: 1,
    bank: "Vietcombank",
    number: "0181003615148",
    user: "Phan Thị Cẩm Hà",
    qrCode: ptchvc,
    type: "US",
  },
  {
    id: 2,
    bank: "Vietcombank",
    number: "1013006202",
    user: "Nguyễn Huy Chiến",
    qrCode: nhcvc,
    type: "US",
  },
  {
    id: 3,
    bank: "Techcombank",
    number: "19020226550013",
    user: "Phan Thị Cẩm Hà",
    qrCode: ptchtc,
    type: "CN",
  },
  {
    id: 4,
    bank: "Quân đội (MB)",
    number: "0001142282858",
    user: "Nguyễn Huy Chiến",
    qrCode: nhcmb,
    type: "CN",
  },
];

// eslint-disable-next-line react/prop-types
export const RechargeModal = ({ openModal, setOpenModal }) => {
  if (openModal) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "unset";
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 ${
        openModal ? "opacity-100" : "h-0 overflow-hidden opacity-0"
      } bg-[rgb(31_31_31/30%)] flex justify-center items-center p-5 lg:p-0 transition-all`}
    >
      <div className="w-full max-w-[1000px] h-full max-h-[800px] bg-[#fff] p-[25px] rounded-[10px]">
        <div className="flex justify-between gap-5 items-center">
          <h3 className="text-[24px] text-[#4285F4] font-extrabold">
            Hướng dẫn nạp tiền vào ví
          </h3>

          <button
            onClick={() => setOpenModal({ ...openModal, rechargeModal: false })}
            className="shrink-0 w-[40px] h-[40px] rounded-[100px] bg-[rgb(231_29_54/5%)] flex justify-center items-center"
          >
            <img src={close} alt="" className="w-3 h-3" />
          </button>
        </div>

        <div className="mt-8 overflow-y-auto max-h-[88%] pr-[4px]">
          <div className="p-5 bg-[rgb(255,143,107,.05)]">
            <p className="text-xl text-[#FF8F6B] font-semibold">
              <span className="text-[#FF2020]">*</span> Để nạp tiền vào ví, quý khách vui lòng thực hiện chuyển khoản vào
              một trong các số tài phía dưới:
            </p>
            <p className="text-base text-[#1f1f1f] font-bold mt-3 pl-4">
              Nội dung chuyển khoản:{" "}
              <span className="text-[#1083FF]">*Mã khách hàng*</span>
            </p>
            <p className="text-base text-[#1f1f1f] font-medium mt-3">
              <span className="text-[#FF8F6B] font-bold">Lưu ý:</span> Vui lòng
              lưu lại biên lai thanh toán để thực hiện việc đối soát. Việc nạp
              tiền sẽ được xử lý tối đa 24h. Nếu sau khoảng thời gian này bạn
              chưa thấy ví được nạp thêm, vui lòng liên hệ với chúng tôi để được
              hỗ trợ.
            </p>
          </div>

          <div className="flex justify-between gap-7 mt-6">
            <div>
              <div className="border-[1px] border-dashed border-[#1083FF] rounded-md p-2">
                <p className="text-lg text-[#FF8F6B] font-bold text-center">
                  Tài khoản nhận tiền đơn hàng tuyến Âu Mỹ
                </p>
              </div>
              <ul className="border-[1px] border-dashed border-[#1083FF] rounded-md mt-3 p-5 flex flex-col gap-6">
                {listQRCode.map((item) => {
                  return (
                    item.type === "US" && (
                      <li
                        key={item.id}
                        className="flex gap-5 bg-[#FBFBFB] p-[25px_20px] rounded drop-shadow-[0px_4px_8px_rgba(31,31,31,0.15)]"
                      >
                        <ul className="flex flex-col gap-5">
                          <li className="flex items-center gap-3">
                            <p className="w-[100px] text-xs text-[#1f1f1f] font-bold">
                              Tên ngân hàng
                            </p>
                            <p className="w-[100px] text-xs text-[#1083FF] font-medium whitespace-nowrap">
                              {item.bank}
                            </p>
                          </li>
                          <li className="flex items-center gap-3">
                            <p className="w-[100px] text-xs text-[#1f1f1f] font-bold">
                              Số tài khoản
                            </p>
                            <p className="w-[100px] text-xs text-[#1083FF] font-medium whitespace-nowrap">
                              {item.number}
                            </p>
                          </li>
                          <li className="flex items-center gap-3">
                            <p className="w-[100px] text-xs text-[#1f1f1f] font-bold">
                              Tên chủ tài khoản
                            </p>
                            <p className="w-[100px] text-xs text-[#1083FF] font-medium whitespace-nowrap">
                              {item.user}
                            </p>
                          </li>
                        </ul>
                        <div className="w-[120px] h-[90px]">
                          <img src={item.qrCode} alt="" />
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>

            <div>
              <div className="border-[1px] border-dashed border-[#FF8F6B] rounded-md p-2">
                <p className="text-lg text-[#FF8F6B] font-bold text-center">
                  Tài khoản nhận tiền đơn hàng tuyến Trung
                </p>
              </div>
              <ul className="border-[1px] border-dashed border-[#FF8F6B] rounded-md mt-3 p-5 flex flex-col gap-6">
                {listQRCode.map((item) => {
                  return (
                    item.type === "CN" && (
                      <li
                        key={item.id}
                        className="flex gap-5 bg-[#FBFBFB] p-[25px_20px] rounded drop-shadow-[0px_4px_8px_rgba(31,31,31,0.15)]"
                      >
                        <ul className="flex flex-col gap-5">
                          <li className="flex items-center gap-3">
                            <p className="w-[100px] text-xs text-[#1f1f1f] font-bold">
                              Tên ngân hàng
                            </p>
                            <p className="w-[100px] text-xs text-[#1083FF] font-medium whitespace-nowrap">
                              {item.bank}
                            </p>
                          </li>
                          <li className="flex items-center gap-3">
                            <p className="w-[100px] text-xs text-[#1f1f1f] font-bold">
                              Số tài khoản
                            </p>
                            <p className="w-[100px] text-xs text-[#1083FF] font-medium whitespace-nowrap">
                              {item.number}
                            </p>
                          </li>
                          <li className="flex items-center gap-3">
                            <p className="w-[100px] text-xs text-[#1f1f1f] font-bold">
                              Tên chủ tài khoản
                            </p>
                            <p className="w-[100px] text-xs text-[#1083FF] font-medium whitespace-nowrap">
                              {item.user}
                            </p>
                          </li>
                        </ul>
                        <div className="w-[120px] h-[90px]">
                          <img src={item.qrCode} alt="" />
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[15px] text-[#1f1f1f] font-medium">
              Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của chúng tôi!
              Mọi thông tin cần hỗ trợ vui lòng liên hệ Hotline:{" "}
              <span className="text-[#4285F4]">0886 788 247</span>&ensp;|&ensp;
              <span className="text-[#4285F4]">09999999999</span> Trân trọng!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
