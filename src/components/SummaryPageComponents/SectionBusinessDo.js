import React from "react";
import CardComponent from "../CardComponent";
import MultitypeChart from "../ChartComponents/MultitypeChart";
import "./SectionBusinessDo.css";

export default function SectionBusinessDo() {
  const mockData = [
    { id: 1, title: "40.51M", subTitle: "GMV $" },
    { id: 2, title: "-100.00%", subTitle: "vs Last Month" },
    { id: 3, title: "1.23 M", subTitle: "No of Order" },
    { id: 4, title: "-100.00%", subTitle: "vs Last Month" },
    { id: 5, title: "32.97", subTitle: "AOV($)" },
    { id: 6, title: "-100.00%", subTitle: "vs Last Month" },
  ];
  return (
    <div style={{ textAlign: "start" }}>
      <h1 style={{ color: "white" }} className="mb-3 text-head">
        Summary
      </h1>
      <h2 style={{ color: "white" }} className="mb-3">
        How is your business doing?
      </h2>
      <CardComponent>
        <div
          className="row layout-header-card border-custom mb-4"
          style={{ textAlign: "center" }}
        >
          {mockData.map((data, index) => {
            return (
              <div className="col-2 block-header" key={index}>
                <section>
                  <h3>{data.title}</h3>
                  <h5>{data.subTitle}</h5>
                </section>
              </div>
            );
          })}
        </div>
        <MultitypeChart />
      </CardComponent>
    </div>
  );
}
