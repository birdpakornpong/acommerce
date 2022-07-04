import React from "react";
import "./Navbar.css";
import { BsBellFill, BsPersonFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container-fluid">
          <img src="/Group.png" alt="logo" className="mx-1 me-3 logo-width" />
          <div style={{ textAlign: "start" }} className="mt-3 font-color-name">
            {isDesktopOrLaptop ? (
              <>
                <h4>Partner Portal | L’Oreal Thailand</h4>
                <p>Partner Portal {">"} Dashboard</p>
              </>
            ) : (
              <h6>Partner Portal | L’Oreal Thailand</h6>
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <BsBellFill className="icon-size"></BsBellFill>
              </li>
              <li className="nav-item px-4">
                <BsPersonFill className="icon-size" />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#!">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
