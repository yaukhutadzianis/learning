import React from "react";
import { increment, decrement, setValue } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3 d-flex flex-column align-items-start">
        <input
          className="form-control mb-4"
          type="text"
          value={count}
          onChange={(e) => dispatch(setValue(e.target.value))}
        />
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
