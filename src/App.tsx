import React, { useState } from "react";

export function App() {
  const [valor, setValor] = useState(0);

  function modificarCount() {
    setValor(valor + 1);
  }
  return <div onClick={modificarCount}>Count: {valor}</div>;
}
