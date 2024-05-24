import { useLocation } from "react-router-dom";

export const DeliveryServiceTransport = () => {
  const { pathname } = useLocation();
  const code = pathname.split('/')[3];

  return (
    <div className="h-full bg-[#fff] rounded-[10px] p-[30px]">
      <div className="w-full h-full relative flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1648722.6259934453!2d105.02821452902081!3d19.679447720793473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!3m2!1d21.0277644!2d105.8341598!4m5!1s0x3138621f4ea8e6a3%3A0x8cb3291b9334e5e2!2zS-G7syBBbmgsIEjDoCBUxKluaA!3m2!1d18.127491199999998!2d106.2577146!5e0!3m2!1svi!2s!4v1716540526051!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-0 right-0 p-[12px_25px] bg-[#fbfbfbb3]">
          <p className="text-xl text-[#10439F] font-extrabold">
            {code} | TRANGHUY | 2024
          </p>
        </div>

        <div className="absolute bottom-[40px] w-[90%] max-w-[1036px] mx-auto p-[20px_35px] bg-[rgb(250,250,250,0.7)] flex items-center justify-between">
          <div className="flex gap-3">
            <p className="text-[15px] text-[#1F1F1F] font-bold">21/05/2024</p>
            <p className="text-[15px] text-[#1F1F1F] font-bold">|</p>
            <p className="text-[15px] text-[#1F1F1F] font-bold">09:40:56</p>
          </div>
          <p className="text-[15px] text-[#1F1F1F] font-bold">
            Đang tới điểm trả tại Kỳ Anh, Hà Tĩnh
          </p>
          <p className="text-[15px] text-[#1F1F1F] font-bold">Vật tư</p>
          <div className="flex gap-[30px]">
            <p className="text-[15px] text-[#1F1F1F] font-bold">
              Xe đầu kéo 12m
            </p>
            <p className="text-[15px] text-[#1F1F1F] font-bold">
              Xe đầu kéo 12m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
