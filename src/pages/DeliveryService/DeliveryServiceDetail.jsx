import download from "../../assets/svgs/download.svg";
import print from "../../assets/svgs/print.svg";
import cardAva from "../../assets/imgs/card-ava.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const DeliveryServiceDetail = () => {
  const location = useLocation()
  const getPath = location.pathname.split('/')[3]

  return (
    <div className="w-full h-full bg-[#fff] rounded-[10px] p-[30px_80px]">
      <div className="w-full flex items-center justify-end gap-6">
        <button>
          <img src={download} alt="" />
        </button>
        <button>
          <img src={print} alt="" />
        </button>
      </div>

      <div className="p-[36px_40px] bg-[#FBFBFB] rounded-md flex mt-5">
        <div className="w-1/2">
          <div className="flex w-[80px] h-[80px] rounded overflow-hidden">
            <img src={cardAva} alt="" />
          </div>

          <div className="mt-[30px]">
            <p className="text-[11px] text-[#1F2229] font-bold uppercase">
              Nhân viên kinh doanh
            </p>
            <p className="tetx-[22px] text-[#828691] font-bold capitalize mt-[18px]">
              Công ty Cổ phần Capa Group
            </p>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-3">
              <p className="w-[26px] text-xs text-[#09F] text-right">Mail:</p>{" "}
              <Link to={"/"} className="tetx-[11px] text-[#828691]">
              banhang@tranghuy.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-[26px] text-xs text-[#09F] text-right">Tax:</p>{" "}
              <Link to={"/"} className="tetx-[11px] text-[#828691]">
                +84 999 999 999
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <p className="text-2xl text-[#1F2229] font-extrabold text-right">Đơn bán hàng {getPath}</p>
            <p className="text-2xl text-[#1083FF] font-bold text-right mt-[16px]">4.565.000 ₫</p>
          </div>
          
          <div className="mt-8">
            <div>
              <p className="text-xs text-[#1F2229] font-bold text-right uppercase">Ngày đặt hàng</p>
              <p className="text-xs text-[#828691] font-semibold text-right uppercase">16 / 05 / 2024</p>
            </div>
            <div className="mt-[16px]">
              <p className="text-xs text-[#1F2229] font-bold text-right uppercase">Ngày hết hạn</p>
              <p className="text-xs text-[#828691] font-semibold text-right uppercase">21 / 05 / 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[50px] overflow-auto">
        <ul className="flex">
          <li className="w-[316px] min-w-[250px] xl:w-[31.73%]"><p className="text-sm text-[#828691] font-bold">Sản phẩm</p></li>
          <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-sm text-[#828691] font-bold whitespace-nowrap">Số lượng</p></li>
          <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-sm text-[#828691] font-bold whitespace-nowrap">Khối lượng</p></li>
          <li className="w-[162px] min-w-[100px] xl:w-[16.26%]"><p className="text-sm text-[#828691] font-bold whitespace-nowrap">Đơn giá</p></li>
          <li className="w-[110px] min-w-[90px] xl:w-[12.05%]"><p className="text-sm text-[#828691] font-bold whitespace-nowrap">Thuế</p></li>
          <li className="w-[128px] min-w-[90px] xl:w-[12.85%]"><p className="text-sm text-[#828691] font-bold whitespace-nowrap text-right">Thành tiền</p></li>
        </ul>

        <div className="mt-[18px] flex flex-col items-end gap-[10px]">
          <ul className="w-full flex pb-1 border-b-[1px] border-solid border-[#E7E8EC]">
            <li className="w-[316px] min-w-[250px] xl:w-[31.73%]"><p className="text-xs text-[#1F2229] font-medium">Máy tính HP 333</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">1</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[162px] min-w-[100px] xl:w-[16.26%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">5,550,000 đ</p></li>
            <li className="w-[110px] min-w-[90px] xl:w-[12.05%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[128px] min-w-[90px] xl:w-[12.85%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap text-right">5,550,000 đ</p></li>
          </ul>
          <ul className="w-full flex pb-1 border-b-[1px] border-solid border-[#E7E8EC]">
            <li className="w-[316px] min-w-[250px] xl:w-[31.73%]"><p className="text-xs text-[#1F2229] font-medium">Dịch vụ vận chuyển Cali - Hà Nội</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">11kg</p></li>
            <li className="w-[162px] min-w-[100px] xl:w-[16.26%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">4,565,000 đ</p></li>
            <li className="w-[110px] min-w-[90px] xl:w-[12.05%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[128px] min-w-[90px] xl:w-[12.85%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap text-right">4,565,000 đ</p></li>
          </ul>

          <ul className="w-full flex pb-1 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-[59.2%] before:w-full before:h-[1px] before:bg-[#E7E8EC]">
            <li className="w-[316px] min-w-[250px] xl:w-[31.73%]"><p className="text-xs text-[#1F2229] font-medium">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[162px] min-w-[100px] xl:w-[16.26%]"><p className="text-xs text-[#828691] font-bold whitespace-nowrap uppercase">TỔNG PHỤ</p></li>
            <li className="w-[110px] min-w-[90px] xl:w-[12.05%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[128px] min-w-[90px] xl:w-[12.85%]"><p className="text-xs text-[#1F2229] font-medium text-right whitespace-nowrap">10,115,000 đ</p></li>
          </ul>
          <ul className="w-full flex pb-1 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-[59.2%] before:w-full before:h-[1px] before:bg-[#E7E8EC]">
            <li className="w-[316px] min-w-[250px] xl:w-[31.73%]"><p className="text-xs text-[#1F2229] font-medium">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[162px] min-w-[100px] xl:w-[16.26%]"><p className="text-xs text-[#828691] font-bold whitespace-nowrap uppercase">DISCOUNT 5%</p></li>
            <li className="w-[110px] min-w-[90px] xl:w-[12.05%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[128px] min-w-[90px] xl:w-[12.85%]"><p className="text-xs text-[#1F2229] font-medium text-right whitespace-nowrap">5,550,000 đ</p></li>
          </ul>
          <ul className="w-full flex pb-1 relative overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-[59.2%] before:w-full before:h-[1px] before:bg-[#E7E8EC]">
            <li className="w-[316px] min-w-[250px] xl:w-[31.73%]"><p className="text-xs text-[#1F2229] font-medium">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[140px] min-w-[90px] xl:w-[14.056%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[162px] min-w-[100px] xl:w-[16.26%]"><p className="text-sm text-[#1F1F1F] font-bold whitespace-nowrap uppercase">TOTAL</p></li>
            <li className="w-[110px] min-w-[90px] xl:w-[12.05%]"><p className="text-xs text-[#1F2229] font-medium whitespace-nowrap">{' '}</p></li>
            <li className="w-[128px] min-w-[90px] xl:w-[12.85%]"><p className="text-xs text-[#1083FF] font-bold text-right whitespace-nowrap">4,565,000 đ</p></li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-end mt-10">
        <div className="shrink-0 w-full xl:max-w-[40.8%]">
          <p className="text-[10px] text-[#828691] text-right">Chuyển tiền vào tài khoản doanh nghiệp bên dưới. Vui lòng bao gồm hóa đơn của bạn.</p>
          <div className="flex items-center justify-end gap-5 mt-3">
            <div className="flex items-center gap-[10px]">
              <p className="text-[11px] text-[#828691] font-semibold">Bank:</p>
              <p className="text-[11px] text-[#1F2229] font-semibold">MB Bank</p>
            </div>
            <span className="shrink-0 w-[6px] h-[6px] rounded-[100px] bg-[#09F]"></span>
            <div className="flex items-center gap-[10px]">
              <p className="text-[11px] text-[#828691] font-semibold">STK:</p>
              <p className="text-[11px] text-[#1083FF] font-semibold">0986999999</p>
            </div> 
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-[#1F2229] font-bold">Lưu ý:</p>

        <p className="text-xs text-[#828691] font-semibold mt-3">Tất cả số tiền đều bằng tiền Việt. Vui lòng thực hiện thanh toán trong vòng 15 ngày kể từ ngày phát hành hóa đơn này. Thuế không được tính dựa trên Đạo luật thuế giá trị gia tăng (Tôi không chịu trách nhiệm về thuế VAT).
          <br />
          <br />
          Cảm ơn bạn đã tin tưởng chúng tôi <br />
          Chữ ký
        </p>
      </div>

      <div className="mt-[35px] p-[15px_0_4px] border-t-[1px] border-solid border-[#E7E8EC] flex justify-between">
        <div>
          <p className="text-[10px] text-[#828691] font-bold">Capa Group</p>
          <p className="text-[10px] text-[#828691] mt-[5px]">111 Ngoai Giao Doan, Bac Tu Liem, Ha Noi</p>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <p className="w-[24px] text-[10px] text-[#09F] font-bold text-right">Mail:</p>
            <Link to={'/'} className="text-[10px] text-[#828691]">contact@capagroup.com</Link>
          </div>
          <div className="flex gap-3 items-center">
            <p className="w-[24px] text-[10px] text-[#09F] font-bold text-right">Tax:</p>
            <Link to={'/'} className="text-[10px] text-[#828691]">+84 999 999 999</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-[#828691] text-right">Công ty được đăng ký trong sổ đăng ký kinh doanh theo số. 87650000</p>
        </div>
      </div>
    </div>
  );
};
