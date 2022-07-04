import React from "react";
import SectionBusinessDo from "../components/SummaryPageComponents/SectionBusinessDo";
import SectionPerformance from "../components/SummaryPageComponents/SectionPerformance";
import SectionProductSell from "../components/SummaryPageComponents/SectionProductSell";
import "./Summary.css";

export default function Summary() {
  return (
    <div className="container layoutSummary">
      <SectionBusinessDo />
      <SectionProductSell />
      <SectionPerformance />
    </div>
  );
}
