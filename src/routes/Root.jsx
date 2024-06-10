import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Weather from '../components/Weather/Weather'

export const Root = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const [weatherPopup, setWeatherPopup] = useState(true)

  useEffect(() => {
    if (pathname === "/") {
      navigation("delivery-service");
    }
  }, [pathname]);

  return (
    <div className="w-full h-auto min-h-screen flex">
      <Sidebar />
      <div className="w-full max-w-[calc(100%_-_218px)] ml-[218px] 2xl:ml-[268px] min-h-screen p-[30px] bg-[#FAFAFB]">
        <Outlet />
      </div>
      {weatherPopup && <Weather setWeatherPopup={setWeatherPopup}/>}
    </div>
  );
};
