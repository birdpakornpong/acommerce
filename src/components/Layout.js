import React from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from "./LayoutComponents/HeaderPage";
import Navbar from "./LayoutComponents/Navbar";
import Sidebar from "./LayoutComponents/Sidebar";
import { useMediaQuery } from "react-responsive";
import "./Layout.css";

export default function Layout() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 1224px)",
  // });

  return (
    <>
      <div className="bg-header-page">
        <Navbar />
        <HeaderPage />
      </div>
      <div className="layout-page">
        {isDesktopOrLaptop && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
}
