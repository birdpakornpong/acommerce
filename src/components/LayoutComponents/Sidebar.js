import React from "react";
import {
  BsBank2,
  BsBagDashFill,
  BsCalendarDateFill,
  BsCalendar3,
  BsCashCoin,
  BsCloudHaze2Fill,
  BsDice5Fill,
  BsDiagram3,
  BsEmojiExpressionlessFill,
} from "react-icons/bs";
import "./SideBar.css";
export default function Sidebar() {
  return (
    <>
      <div className="bg-custom" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action  p-2 button-sidebar"
              href="#!"
            >
              <BsBank2 className="icon-width" />
              <p className="font-sidebar">Hide Menu</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsBagDashFill className="icon-width" />
              <p className="font-sidebar">Summary</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsCalendarDateFill className="icon-width" />
              <p className="font-sidebar">Performance</p>
              <p className="font-sidebar">Dashboards</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsCalendar3 className="icon-width" />
              <p className="font-sidebar">Items and</p>
              <p className="font-sidebar">Inventory</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsCashCoin className="icon-width" />
              <p className="font-sidebar">Purchase</p>
              <p className="font-sidebar">Orders</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsCloudHaze2Fill className="icon-width" />
              <p className="font-sidebar">Sales Orders</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsDice5Fill className="icon-width" />
              <p className="font-sidebar">Return</p>
              <p className="font-sidebar">Merchandise</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsDiagram3 className="icon-width" />
              <p className="font-sidebar">Supplier</p>
            </button>
          </div>
          <div className="padding-button">
            <button
              className="list-group-item list-group-item-action p-2 button-sidebar"
              href="#!"
            >
              <BsEmojiExpressionlessFill className="icon-width" />
              <p className="font-sidebar">Delivery</p>
              <p className="font-sidebar">Management</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
