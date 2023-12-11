import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/login.jsx";
import User from "./pages/User.jsx";
import Reserve from "./pages/Reserve.jsx";
import Music from "./pages/music.jsx";
import Editprofile from "./pages/editprofile.jsx";
import Payment from "./pages/payment";
import Receipt from "./components/receipt";
import Status from "./pages/Status";
import Refund from "./components/Refund";
import Tapsmain from "./pages/admin/Taps";
import { CookiesProvider } from 'react-cookie';
import MusicDashboard from "./pages/admin/music.jsx";
import UserDashboard from "./pages/admin/User.jsx";
import DetailReserve from "./pages/admin/Detailreserve.jsx";
import Cancel from "./pages/admin/Cancel.jsx";
import Homeadmin from "./pages/admin/Homeadmin.jsx";
import StatusDetail from "./pages/statusdetail.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Signin />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "reserve",
    element: <Reserve />,
  },
  {
    path: "music",
    element: <Music />,
  },
  {
    path: "Editprofile",
    element: <Editprofile />,
  },
  {
    path: "payment/:id1/:id2",
    element: <Payment />,
  },
  {
    path: "receipt/:id1/:id2/:id3",
    element: <Receipt />,
  },
  {
    path: "reserve/status",
    element: <Status />,
  },
  {
    path: "reserve/status/detail/:id",
    element: <StatusDetail />,
  },
  {
    path: "reserve/refund/:id",
    element: <Refund />,
  },
  {
    path: "admin/reserve",
    element: <Tapsmain />,
  },
  {
    path: "admin/music",
    element: <MusicDashboard />,
  },
  {
    path: "admin/user",
    element: <UserDashboard />,
  },
  {
    path:"admin/reserve/detail/:id",
    element: <DetailReserve />
  },
  {
    path:"admin/reserve/cancel",
    element: <Cancel />
  },
  {
    path:"admin/",
    element: <Homeadmin />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
