import React, { useContext } from "react";
import { CountContext } from "./AppDemo";

function ComponentA() {
  const Counter = useContext(CountContext);
  return (
    <div>
      <h1>Component A : {Counter.count}</h1>
      <div>
        <button onClick={() => Counter.dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => Counter.dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => Counter.dispatch({ type: "increment", value: 5 })}>
          Increment - 5
        </button>
        <button onClick={() => Counter.dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default ComponentA;
