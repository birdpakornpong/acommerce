import React from "react";
import CardComponent from "../CardComponent";
import MultitypeChart from "../ChartComponents/MultitypeChart";
import "./SectionBusinessDo.css";

export default function SectionBusinessDo() {
  return (
    <div style={{ textAlign: "start" }}>
      <h1>Summary</h1>
      <h2>How is your business doing?</h2>
      <CardComponent>
        <div className="row layout-header-card" style={{ textAlign: "center" }}>
          <div className="col block-header">
            <h3>40.51M</h3>
            <h5>GMV $</h5>
          </div>
          <div className="col  block-header">
            <h3>40.51M</h3>
            <h5>GMV $</h5>
          </div>
          <div className="col  block-header">
            <h3>40.51M</h3>
            <h5>GMV $</h5>
          </div>
          <div className="col  block-header">
            <h3>40.51M</h3>
            <h5>GMV $</h5>
          </div>
          <div className="col block-header">
            <h3>40.51M</h3>
            <h5>GMV $</h5>
          </div>
          <div className="col  block-header">
            <h3>40.51M</h3>
            <h5>GMV $</h5>
          </div>
        </div>
        <MultitypeChart />
      </CardComponent>
    </div>
  );
}
