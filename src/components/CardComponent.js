import React from "react";
import "./CardComponent.css";

export default function CardComponent(props) {
  const { maxWidth } = props;
  return (
    <div className="card card-custom" style={{ maxWidth: maxWidth }}>
      {props.children}
      <div className="card-footer bg-white">Last 7 days</div>
    </div>
  );
}
