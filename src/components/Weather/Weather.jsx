import { useEffect, useState } from "react";
import cloud from "../../assets/svgs/weather/5.svg";
import wind from "../../assets/svgs/weather/wind.svg";
import close from "../../assets/svgs/close.svg";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function Weather({ setWeatherPopup }) {
  const [weatherData, setWeatherData] = useState("");

  const getWeatherData = async () => {
    const { data } = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=ha noi&appid=b18d73b5030f0270705dfbe70574b17e"
    );
    setWeatherData(data);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgb(31,31,31,.3)] flex justify-center items-center">
      <div className="relative w-[615px] h-[300px] rounded-[60px] bg-[linear-gradient(125deg,#67E1D2_5.59%,#54A8FF_93.57%)] p-5 flex">
        <button
          onClick={() => setWeatherPopup(false)}
          className="w-8 absolute -top-6 -right-6 p-1"
        >
          <img src={close} alt="" />
        </button>
        <img
          src={cloud}
          alt=""
          className="absolute top-[-20%] left-0 w-[16vw]"
        />
        <div className="self-end p-[20px_20px_0_20px]">
          <p className="temp-gradient">{weatherData.main?.temp - 272.15}ºC</p>
        </div>
        <div className="mt-6 flex-grow">
          <div>
            <p className="text-4xl text-[#fff] font-extrabold text-center mt-6 whitespace-nowrap">
              Xin chào, Nhiệm
            </p>
            <p className="text-2xl text-[#fff] font-semibold text-center mt-3">
              {weatherData.name === "Hanoi" && "Hà Nội"}{" "}
              {weatherData.weather?.[0].main === "Clouds"
                ? "nhiều mây"
                : weatherData.weather?.[0].description === "light rain" && "có mưa nhẹ"}
            </p>
          </div>
          <div className="flex justify-end mr-12">
            <img src={wind} alt="" className="w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
