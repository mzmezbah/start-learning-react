import React, { useContext, useReducer } from "react";
import { CountContext } from "./AppDemo";

function ComponentC() {
  const { reducer, initialState } = useContext(CountContext);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Component C : {count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment - 5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default ComponentC;
