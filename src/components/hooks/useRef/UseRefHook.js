import React, { useRef, useEffect } from "react";

export default function UseRefHook() {
  const input = useRef();

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <h1 className="mb-4 fs-2">useRef hook</h1>
        <input type="text" ref={input} className="mb-3 form-control" />
        <button
          className="btn btn-warning"
          onClick={() => {
            return (input.current.value = Math.floor(Math.random() * 7));
          }}
        >
          Random of 7 (useRef on input)
        </button>
      </div>
    </div>
  );
}
