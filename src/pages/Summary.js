import React from "react";
import SectionBusinessDo from "../components/SummaryPageComponents/SectionBusinessDo";
import SectionPerformance from "../components/SummaryPageComponents/SectionPerformance";
import SectionProductSell from "../components/SummaryPageComponents/SectionProductSell";
import "./Summary.css";

export default function Summary() {
  return (
    <div className="container layoutSummary row">
      <div className="col-12 mb-5">
        <SectionBusinessDo />
      </div>
      <div className="col-12 mb-5">
        <SectionProductSell />
      </div>
      <div className="col-12">
        <SectionPerformance />
      </div>
    </div>
  );
}
