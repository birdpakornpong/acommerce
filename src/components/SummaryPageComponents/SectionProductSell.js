import React from "react";
import CardComponent from "../CardComponent";
import TabComponent from "./TabComponent";

export default function SectionProductSell() {
  return (
    <div style={{ textAlign: "start" }}>
      <h2>How are your products selling?</h2>
      <CardComponent width="50rem">
        <TabComponent />
      </CardComponent>
    </div>
  );
}
