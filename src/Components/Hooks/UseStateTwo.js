import React, { useState } from "react";

//when u change data depends on the previous state data always use cbfn in setMethod like under..

function UseStateTwo() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={IncrementFive}>Increment-5</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
}

export default UseStateTwo;
