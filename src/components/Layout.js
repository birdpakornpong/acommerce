import React from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from "./LayoutComponents/HeaderPage";
import Navbar from "./LayoutComponents/Navbar";
import Sidebar from "./LayoutComponents/Sidebar";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="bg-header-page">
        <Navbar />
        <HeaderPage />
      </div>
      <div className="layout-page">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
