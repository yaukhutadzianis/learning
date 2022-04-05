import React from "react";
import Parent from "./Parent";
import FruitsContext from "./ThemeContext";

export default function UseContextHook() {
  const fruits = {
    apples: 5,
    bananas: 4
  };

  return (
    <FruitsContext.Provider value={fruits}>
      <Parent />
    </FruitsContext.Provider>
  );
}
