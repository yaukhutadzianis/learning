import React, { useContext, useEffect, useState } from "react";
import { FruitsContext } from "./UseContextHook";

export default function Child(props) {
  const fruits = useContext(FruitsContext);
  const [countApples, setCountApples] = useState(fruits.apples);
  const [countBananas, setCountBananas] = useState(fruits.bananas);

  useEffect(() => {
    fruits.apples = countApples;
    fruits.bananas = countBananas;
  });

  return (
    <div>
      <h1 className="fs-2 mb-4">Values from context:</h1>
      <p className="mb-1">Apples: {countApples}</p>
      <p className="mb-1">Bananas: {countBananas}</p>
      <button
        className="btn btn-warning me-3 mt-4"
        onClick={() => setCountApples(countApples + 1)}
      >
        Increment Context Object.apples
      </button>
      <button
        className="btn btn-warning me-3 mt-4"
        onClick={() => setCountBananas(countBananas + 1)}
      >
        Increment Context Object.bananas
      </button>
    </div>
  );
}
