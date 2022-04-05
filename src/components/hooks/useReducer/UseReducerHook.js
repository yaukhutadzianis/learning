import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initialState = { count: 0 };

  function countReducer(state, action) {
    switch (action) {
      case "incrementAction":
        return { count: state.count + 1 };
      case "decrementAction":
        return { count: state.count - 1 };

      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <h1 className="fs-3">
          This counter use useReducer hook without useState
        </h1>
        <p>{state.count}</p>
        <button
          className="btn btn-warning me-3"
          onClick={() => dispatch("incrementAction")}
        >
          Increment
        </button>
        <button
          className="btn btn-warning me-3"
          onClick={() => dispatch("decrementAction")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
