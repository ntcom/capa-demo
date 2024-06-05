import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.jsx";
import { DeliveryService } from "./pages/DeliveryService/DeliveryService.jsx";
import { DeliveryServiceDetail } from "./pages/DeliveryService/DeliveryServiceDetail.jsx";
import { OrderService } from "./pages/OrderService/OrderService.jsx";
import { Wallet } from "./pages/Wallet/Wallet.jsx";
import { DeliveryServiceTransport } from "./pages/DeliveryService/DeliveryServiceTransport.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Home />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "delivery-service",
        element: <DeliveryService />,
        
      },
      {
        path: "delivery-service/:deliveryServiceId",
        element: <DeliveryServiceDetail />
      },
      {
        path: "delivery-service/transport/:deliveryServiceId",
        element: <DeliveryServiceTransport />
      },
      {
        path: "order-service",
        element: <OrderService />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
