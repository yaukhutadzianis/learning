import React from "react";
import Child from "./Child";

export default function Parent(props) {
  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <Child />
      </div>
    </div>
  );
}
