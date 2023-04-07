import React, { useState, useEffect } from "react";

export function App() {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log("Valor cambió", valor);
  }, [valor]);

  function modificarCount() {
    setValor(valor + 1);
  }

  return <div onClick={modificarCount}>Count: {valor}</div>;
}
