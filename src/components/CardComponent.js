import React from "react";

export default function CardComponent(props) {
  const { maxWidth } = props;
  return (
    <div className="card" style={{ maxWidth: maxWidth }}>
      {props.children}
      <div className="card-footer">Last 7 days</div>
    </div>
  );
}
