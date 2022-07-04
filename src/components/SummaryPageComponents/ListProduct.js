import React from "react";
import "./ListProduct.css";

export default function ListProduct() {
  const mockData = [
    { id: 1, name: "BabyLove Easy Tape Small - 30 Pcs", seller: "Lazada SG" },
    { id: 2, name: "BabyLove Easy Tape Small - 30 Pcs", seller: "Lazada SG" },
    { id: 3, name: "BabyLove Easy Tape Small - 30 Pcs", seller: "Lazada SG" },
  ];
  return (
    <div>
      <ol className="list-group">
        {mockData.map((product, index) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={index}
            >
              <span>{index + 1}</span>
              <div className="ms-5 me-5">
                <img src="/logo192.png" alt="logo" className="img-size" />
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{product.name}</div>
                Content for list item
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">25,000 THB</div>
                800 sold
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
