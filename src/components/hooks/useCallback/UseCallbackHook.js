import React, { useCallback, useEffect, useState } from "react";

export default function UseCallbackHook() {
  const [b1counter, setB1counter] = useState(0);
  const [b2counter, setB2counter] = useState(0);

  const sum = useCallback(() => {
    return b1counter + b2counter;
  }, [b1counter]);

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <p>Button 1 clicks: {b1counter}</p>
        <p>Button 2 clicks: {b2counter}</p>
        <p className="fw-bold">
          Sum: {sum()} (updated only if useCallback target - Button 1 clicked
        </p>
        <button
          className="btn btn-warning me-3"
          onClick={() => setB1counter(b1counter + 1)}
        >
          Button 1
        </button>
        <button
          className="btn btn-warning me-3"
          onClick={() => setB2counter(b2counter + 1)}
        >
          Button 2
        </button>
      </div>
    </div>
  );
}
