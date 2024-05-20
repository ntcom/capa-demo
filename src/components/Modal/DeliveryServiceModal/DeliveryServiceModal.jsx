import close from "../../../assets/svgs/close.svg";
import plus from "../../../assets/svgs/plus2.svg";
import SelectCustom from "../../SelectCustom/SelectCustom";
import CheckboxCustom from "../../CheckboxCustom/CheckboxCustom";
import RadioCustom from "../../RadioCustom/RadioCustom";

const dataSelect = [
  {
    id: 1,
    type: 'Tuyến',
    value: "Tuyến Trung Quốc - Hà Nội ký gửi",
  },
  {
    id: 2,
    type: 'Tuyến',
    value: "Tuyến Oregon(Mỹ) - Hà Nội ký gửi",
  },
  {
    id: 3,
    type: 'Tuyến',
    value: "Thanh toán hộ USD - VND 1",
  },
];

const deliveryData = [
  {
    id: 1,
    name: "delivery",
    label:
      "Nhận hàng tại văn phòng (Áp dụng với khách hàng đến văn phòng trực tiếp nhận hàng)",
    value: "NTVP",
  },
  {
    id: 2,
    name: "delivery",
    label:
      "Chuyển phát nhanh (24h-72h) (Khách hàng tự thanh toán cước khi nhận hàng)",
    value: "CPN",
  },
  {
    id: 3,
    name: "delivery",
    label: "Chuyển phát chậm/Gửi nhà xe",
    value: "CPC",
  },
];

const infoData = [
  {
    id: 4,
    name: "info",
    label: "Công ty Cổ phần Capa Group | 09999999999",
    location:
      "B12/D21 Khu đô thị mới Cầu Giấy, Ngõ 100 Dịch Vọng Hậu, Hà Nội, Vietnam",
    value: "CapaGroup",
  },
  {
    id: 5,
    name: "info",
    label: "Công ty Cổ phần Alaric | 0888888888",
    location: "3Q9X+J2W, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội, Vietnam",
    value: "Alaric",
  },
  {
    id: 6,
    name: "info",
    label: "Mr. Nhiem | 0969969969",
    location:
      "232 Phạm Văn Đồng, Khu đô thị Thành phố Giao lưu, Bắc Từ Liêm, Hà Nội, Vietnam",
    value: "Mr.Nhiem",
  },
];

// eslint-disable-next-line react/prop-types
const DeliveryServiceModal = ({ openModal, setOpenModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 ${
        openModal ? "opacity-100" : "h-0 overflow-hidden opacity-0"
      } bg-[rgb(31_31_31/30%)] flex justify-center items-center p-5 lg:p-0 transition-all`}
    >
      <div className="w-full max-w-[600px] h-full max-h-[760px] bg-[#fff] p-[25px] rounded-[10px]">
        <div className="flex justify-between gap-5 items-center">
          <h3 className="text-[24px] text-[#4285F4] font-extrabold">
            Tạo đơn hàng ký gửi
          </h3>

          <button
            onClick={() => setOpenModal(false)}
            className="shrink-0 w-[40px] h-[40px] rounded-[100px] bg-[rgb(231_29_54/5%)] flex justify-center items-center"
          >
            <img src={close} alt="" className="w-3 h-3" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-[40px] flex flex-col">
          <div className="max-h-[486px] overflow-y-auto pr-[4px]">
            <div className="flex flex-col gap-[18px]">
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input1" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Tuyến: <span className="text-[#FF2020]">*</span>
                  </p>
                </label>
                <SelectCustom data={dataSelect} height={'45px'}/>
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input2" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Mã tracking: <span className="text-[#FF2020]">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="input2"
                  required
                  className="w-full max-w-[415px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                />
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input3" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Loại hàng hoá: <span className="text-[#FF2020]">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="input3"
                  required
                  className="w-full max-w-[415px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                />
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input4" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Giá trị hàng(USD): <span className="text-[#FF2020]">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="input4"
                  required
                  className="w-full max-w-[415px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                />
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input5" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Số kiện:
                  </p>
                </label>
                <input
                  type="text"
                  id="input5"
                  className="w-full max-w-[415px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                />
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input6" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Cân nặng(kg):
                  </p>
                </label>
                <input
                  type="text"
                  id="input6"
                  className="w-full max-w-[415px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                />
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input7" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Kích thước(cm):
                  </p>
                </label>
                <div className="w-full flex items-center justify-between">
                  <input
                    type="text"
                    id="input7"
                    placeholder="Dài"
                    className="w-full max-w-[120px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                  />
                  <input
                    type="text"
                    id="input7"
                    placeholder="Rộng"
                    className="w-full max-w-[120px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                  />
                  <input
                    type="text"
                    id="input7"
                    placeholder="Cao"
                    className="w-full max-w-[120px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_16px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                  />
                </div>
              </div>
              <div className="flex gap-[18px] justify-between items-start">
                <label htmlFor="input8" className="shrink-0 w-[146px] flex">
                  <p className="text-base text-[#1f1f1f] font-semibold">
                    Ghi chú:
                  </p>
                </label>
                <textarea
                  name="textarea"
                  id="input8"
                  rows={3}
                  className="w-full max-w-[415px] h-[45px] bg-[#F7F7F8] rounded-[10px] p-[8px_30px_8px_20px] outline-none border-[1px] border-solid focus:bg-[#fff] focus:border-[#4285F4]"
                ></textarea>
              </div>
            </div>

            <hr className="my-[30px]" />

            <div>
              <p className="text-lg text-[#1F1F1F] font-bold">
                THÔNG TIN CHUYỂN PHÁT
              </p>

              <ul className="mt-1 bg-[rgb(255_143_107/5%)] p-[18px] flex flex-col items-start gap-[16px]">
                {deliveryData.map((data, index) => {
                  return (
                    <li key={data.id}>
                      <RadioCustom data={data} index={index} />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-10">
              <div className="flex justify-between items-end">
                <p className="text-lg text-[#1F1F1F] font-bold">
                  THÔNG TIN NGƯỜI NHẬN
                </p>

                <button
                  type="button"
                  className="text-xs text-[#FF8F6B] italic flex items-center gap-[5px]"
                >
                  <img src={plus} alt="" className="shrink-0 w-[10px]" />
                  Thêm địa chỉ giao hàng
                </button>
              </div>

              <ul className="mt-1 bg-[#fff] p-[18px] flex flex-col items-start gap-[16px]">
                {infoData.map((addr, index) => {
                  if (infoData[index <= 3 && index])
                    return (
                      <li key={addr.id}>
                        <RadioCustom data={addr} />
                      </li>
                    );
                })}
                <button
                  type="button"
                  className="max-w-[60px] mx-auto text-xs text-[#FF8F6B] underline"
                >
                  Xem thêm
                </button>
              </ul>

              <div className="w-full bg-[rgb(255_143_107/5%)] p-[15px]">
                <p className="text-sm text-[#1F1F1F] italic">
                  Khách hàng cần điền đầy đủ thông tin để thuận lợi cho quá
                  trình thông quan và phân loại hàng hóa. Thông tin thiếu hoặc
                  không chính xác công ty sẽ lưu tại khu vực hàng hóa chưa phân
                  loại của công ty và tính phí lưu kho. Quý khách có thể tham
                  khảo thêm về chính sách và điều kiện về hàng ký gửi của Pakago{" "}
                  <a
                    href="http://103.214.8.198:7723/vi/dieu-khoan-va-chinh-sach"
                    className="text-[#4285F4] underline"
                  >
                    tại đây
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xl text-[#FF8F6B] font-bold">
                  Pakago không vận chuyển:
                </p>
                <ul className="mt-[14px] list-disc pl-5 flex flex-col gap-2">
                  <li className="text-sm text-[#1F1F1F]">
                    Mỹ Phẩm, nguyên vật liệu mỹ phẩm
                  </li>
                  <li className="text-sm text-[#1F1F1F]">
                    Thực ẩm, thức uống, thực phẩm chức năng, thực phẩm bánh kẹo,
                    trà, sữa bột ...
                  </li>
                  <li className="text-sm text-[#1F1F1F]">
                    Thuốc lá, thuốc lá điện tử, tinh dầu, shisha ...
                  </li>
                  <li className="text-sm text-[#1F1F1F]">
                    Hóa chất, dung dịch, các loại bột ...
                  </li>
                  <li className="text-sm text-[#1F1F1F]">
                    Các mặt hàng{" "}
                    <span className="text-[13px] text-[#FF2020] font-bold">
                      CẤM NHẬP KHẨU
                    </span>{" "}
                    theo quy định pháp luật Việt Nam.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-[28px]">
            <CheckboxCustom
              label={
                "Bằng việc ấn nút đánh dấu bên cạnh, quý khách đồng ý với chính sách vận chuyển và những mặt hàng cấm vận chuyển của Pakago"
              }
            />
          </div>

          <button className="mt-[32px] w-full max-w-[430px] h-[50px] self-center rounded-[10px] bg-[#4285F4] text-[22px] text-[#fff] font-bold">
            Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryServiceModal;
