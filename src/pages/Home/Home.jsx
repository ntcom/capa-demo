import camera from "../../assets/svgs/camera.svg";
import cardLogo from "../../assets/imgs/logo.png";
import Input from "../../components/Input";
import SelectCustom from "../../components/SelectCustom/SelectCustom";

const nationData = ["Vietnam", "Cuba", "Rusia", "Japan", "USA"];
const cityData = ["Hanoi", "Vinh", "Danang", "Dalat", "TP.HCM"];

const deliveryAddress = [
  {
    id: 1,
    name: "Mr. Nhiem",
    email: "nhiemnguyen@gmail.com",
    phone: "+84 986 999 999",
    address: "123 An Binh City, Bac Tu Liem, Ha Noi, Viet nam",
    default: true,
  },
  {
    id: 2,
    name: "Ms. Yen",
    email: "yenrose@gmail.com",
    phone: "+84 986 999 999",
    address: "789 Tower, Ngoai giao doan, Bac Tu Liem, Ha Noi, Viet nam",
    default: false,
  },
  {
    id: 3,
    name: "Mr. Thang",
    email: "thang123@gmail.com",
    phone: "+84 988 988 988",
    address: "Cau Giay, Ha Noi, Viet nam",
    default: false,
  },
];

export const Home = () => {
  const checkCard = deliveryAddress.filter((item) => {
    if(item.default === true) {
      return item.id;
    }
  } )
  const defaultAddress = checkCard[0].id;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex gap-[30px]">
      <div className="w-1/2 bg-[#fff] rounded-[10px] p-[30px]">
        <p className="text-2xl text-[#030229] font-bold">Hồ sơ của tôi</p>
        <form onSubmit={handleSubmit} className="mt-[30px]">
          <label className="w-[134px] h-[134px] mx-auto bg-[#FAFAFB] rounded-[999px] flex justify-center items-center relative overflow-hidden">
            <input
              type="file"
              name=""
              id=""
              className="absolute w-full h-full cursor-pointer opacity-0"
            />
            <img src={camera} alt="" className="w-7 h-7" />
          </label>

          <div className="flex flex-col gap-5">
            <Input label={"Mã"} id={"code"} defaultValue={"#876370"} height={"50px"} />
            <Input
              label={"Tên"}
              required={true}
              id={"name"}
              defaultValue={"Nguyen Tran Nhiem"}
              height={"50px"}
            />
            <div className="flex gap-[30px]">
              <Input
                label={"Email"}
                required={true}
                id={"email"}
                defaultValue={"nguyennhiem@gmail.com"}
                width={"48%"}
                height={"50px"}
              />
              <Input
                type={'number'}
                label={"Số điện thoại"}
                required={true}
                id={"phonenumber"}
                defaultValue={"0123456789"}
                width={"48%"}
                height={"50px"}
              />
            </div>
            <div className="flex gap-[30px]">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-base text-[#030229] font-semibold mb-[15px]"
                >
                  Quốc gia
                </label>
                <SelectCustom data={nationData} height={"50px"} />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-base text-[#030229] font-semibold mb-[15px]"
                >
                  Tỉnh/ thành phố
                </label>
                <SelectCustom data={cityData} height={"50px"} />
              </div>
            </div>
            <Input
              label={"Địa chỉ"}
              id={"name"}
              value={"123 An Binh City, Bac Tu Liem, Ha Noi, Viet nam"}
              height={"50px"}
            />
          </div>

          <button className="w-full h-[52px] bg-[#4285F4] rounded-[10px] mt-[50px] text-lg text-[#fff] font-bold">
            Cập nhật thông tin
          </button>
        </form>
      </div>
      <div className="w-1/2 bg-[#fff] rounded-[10px] p-[30px]">
        <p className="text-2xl text-[#030229] font-bold">Địa chỉ giao hàng</p>

        {deliveryAddress.map((item) => {
          if (defaultAddress === item.id) {
            return (
              <div
                key={item.id}
                className="w-full p-[25px_32px] bg-[#FAFAFB] rounded-md mt-5 relative"
              >
                <div className="w-[80px]">
                  <img src={cardLogo} alt="" />
                </div>

                <div className="absolute top-3 right-3 p-[1px_4px] border-[1px] border-solid border-[#3A974C] rounded">
                  <p className="text-[10px] text-[#3A974C] font-semibold">
                    mặc định
                  </p>
                </div>

                <div className="flex mt-11">
                  <div className="w-[40%]">
                    <p className="text-[10px] text-[#1f1f1f] font-bold uppercase">
                      RECIPIENT
                    </p>
                    <p className="text-[26px] text-[#828691] font-bold capitalize">
                      {item.name}
                    </p>
                  </div>
                  <div className="w-[60%]">
                    <p className="text-sm text-[#4285F4] text-right">
                      {item.email}
                    </p>
                    <p className="text-sm text-[#4285F4] text-right">
                      {item.phone}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-[#828691] capitalize">
                    {item.address}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="mt-11">
                <div className="w-full border-[1px] border-dashed border-[#B2B2B2] rounded-[10px] p-[20px_25px_12px_25px] relative">
                  <button
                    className="absolute top-[4px] right-[4px] px-2 border-[1px] border-solid border-[#EF9103] rounded text-[10px] text-[#EF9103] font-semibold leading-4"
                  >
                    Đặt làm mặc định
                  </button>
                  <div className="flex">
                    <div className="w-[36%]">
                      <p className="text-[10px] text-[#1f1f1f] font-bold uppercase">
                        RECIPIENT
                      </p>
                      <p className="text-[20px] text-[#828691] font-bold capitalize">
                        {item.name}
                      </p>
                    </div>
                    <div className="w-[40%]">
                      <p className="text-xs text-[#828691] text-left">
                        {item.email}
                      </p>
                      <p className="text-xs text-[#828691] text-left">
                        {item.phone}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-[#828691] capitalize">
                      {item.address}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
