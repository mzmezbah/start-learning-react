import React, { useReducer } from "react";

//here we use multiple useReducer ..

//when we dealing with multiple state variable & use same state transition then we can use multiple useReduce with same reducer cbFn & same initialState...

const initialState = {
  firstCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + action.value };
    case "decrement":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReduceThree() {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>first Count: {countOne.firstCount}</h1>
      <h1>Second Count: {countTwo.firstCount}</h1>
      <div>
        <button onClick={() => dispatchOne({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchOne({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatchOne({ type: "increment", value: 5 })}>
          Increment - 5
        </button>
      </div>
      <div>
        <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
          Decrement - 5
        </button>
      </div>
      <button onClick={() => dispatchOne({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReduceThree;
