import React, { useState, useEffect, useRef } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  const getCurrentDate = () => {
    const currentDate = new Date();

    return (
      String(currentDate.getHours()).padStart(2, "0") +
      ":" +
      String(currentDate.getMinutes()).padStart(2, "0") +
      ":" +
      String(currentDate.getSeconds()).padStart(2, "0")
    );
  };

  const datetime = useRef(getCurrentDate());

  useEffect(() => {
    datetime.current.innerHTML = getCurrentDate();
    return {};
  }, [count]);

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <p className="mb-0 d-inline me-2">
          Current time - at component rerender or mounted:
        </p>
        <p className="fw-bold text-warning d-inline" ref={datetime}></p>
        <div className="d-flex mt-3">
          <button
            className="btn btn-warning me-2"
            onClick={() => setCount(count + 1)}
          >
            Update State
          </button>
        </div>
      </div>
    </div>
  );
}
