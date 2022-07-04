import React from "react";
import CardComponent from "../CardComponent";
import TabComponent from "./TabComponent";
import "./SectionProductSell.css";

export default function SectionProductSell() {
  return (
    <div style={{ textAlign: "start" }}>
      <h2 className="text-head-section">How are your products selling?</h2>
      <CardComponent maxWidth="50rem">
        <TabComponent />
      </CardComponent>
    </div>
  );
}
