import React, { useReducer } from "react";

//here we work with an state which value is an object..
//here we pass 2 value within the state object & update one value at a time .. so we need to keep update the both value then we need to merge the object like under ..which we done by spread operator..

const initialState = {
  firstCount: 0,
  secondCount: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReduceTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>First Count: {count.firstCount}</h1>
      <h1>Second Count: {count.secondCount}</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          FirstIncrement
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 1 });
          }}
        >
          FirstDecrement
        </button>

        <button
          onClick={() => {
            dispatch({ type: "increment", value: 5 });
          }}
        >
          FirstIncrement-5
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          SecondIncrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          SecondDecrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 5 });
          }}
        >
          SecondDecrement - 5
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ReduceTwo;
