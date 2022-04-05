import React, { useContext } from "react";
import FruitsContext from "./ThemeContext";

export default function Child(props) {
  const fruits = useContext(FruitsContext);

  return (
    <div>
      <h1 className="fs-2">Getting values from context:</h1>
      {fruits.apples}
    </div>
  );
}
