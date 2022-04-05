import React from "react";
import Parent from "./Parent";

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

export const FruitsContext = React.createContext();
