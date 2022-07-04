import React from "react";

export default function CardComponent(props) {
  const { width } = props;
  return (
    <div className="card" style={{ width: width }}>
      {props.children}
      <div className="card-footer">Last 7 days</div>
    </div>
  );
}
