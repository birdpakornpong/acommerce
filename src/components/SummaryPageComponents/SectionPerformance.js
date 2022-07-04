import React from "react";
import CardComponent from "../CardComponent";
import LineChart from "../ChartComponents/LineChart";
export default function SectionPerformance() {
  return (
    <div style={{ textAlign: "start" }}>
      <h2>How is your shipping performance?</h2>
      <CardComponent width="78rem">
        <LineChart />
      </CardComponent>
    </div>
  );
}
