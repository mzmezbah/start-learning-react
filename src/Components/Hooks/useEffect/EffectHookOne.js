import React, { useState, useEffect } from "react";

//here we use useEffect , its a simple fn which take two param 1st is cbFn & 2nd is array...
// we use it for side effects in react , because we cannot use life cycle method in fn component ..
//here this useEffect() fn call every times when something render in dom & update in dom..

function EffectHookOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count} Times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click : {count}
      </button>
    </div>
  );
}

export default EffectHookOne;
