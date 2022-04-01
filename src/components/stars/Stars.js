import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function Stars({ style = {}, totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div
      className="container-fluid py-5 bg-light"
      style={{ padding: "5px", ...style }}
    >
      <div className="container py-3">
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
        <p>
          {selectedStars} of {totalStars} stars
        </p>
      </div>
    </div>
  );
}
