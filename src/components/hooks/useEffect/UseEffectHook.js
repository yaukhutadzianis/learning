import React, { useState, useEffect, useRef } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  const h1 = useRef("Count clicks");

  useEffect(() => {
    document.title = `Count clicks: ${count}`;
  });

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <h1 ref={h1}>useEffect hook</h1>
        <p>Target will update on every component update and first rendering</p>
        <div class="d-flex">
          <input class="me-2" type="text" value={count} readOnly />
          <button
            class="btn btn-warning me-2"
            onClick={() => setCount(count + 1)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
