import React from "react";
import "./HeaderPage.css";
export default function HeaderPage() {
  return (
    <div
      className="container-fluid headerPageBg pt-3"
      style={{ textAlign: "start" }}
    >
      <img src="/Ellipse3.7.png" alt="logo" className=" me-2 name-logo-width" />
      <h4 className="mt-2">Hello L’Oreal Thailand</h4>
    </div>
  );
}
