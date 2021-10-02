import React, { useReducer } from "react";

//this useReducer() is a hook that used for state management..
//this is related to js array reduce method..

//this is the initial value of state
const initialState = 0;

//this is the reducer fn ...
const reducerFn = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ReduceOne() {

//this useReduce method takes two param - 1st is reduce fn which is a cb fn  & the 2nd is initial value of state which we pass  1st param within the reducerFn..
//this  method return 2 value by using array destructuring method like under ..1st is newState & 2nd is dispatch which is just like setterFn of useState & this dispatchFn take 'action' as param which is second argument reducer cbFn..
  const [count, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment Count</button>
      <button onClick={() => dispatch("decrement")}>Decrement Count</button>
      <button onClick={() => dispatch("reset")}>Reset Count</button>
    </div>
  );
}

export default ReduceOne;
