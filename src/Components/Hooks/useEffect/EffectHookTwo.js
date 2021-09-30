import React, { useState, useEffect } from "react";

//here we use a second param in useEffect fn, its an array & its solve the problem of calling problem of useEffect() fn..
//bcz when we write some state or fn into this array this useEffect() call only when those state or fn changed otherwise its cannot call anymore..
//if we don't pass anything in this array just declare the second param it can call only once when the component is render..like componentDidMount() method...
//when this useEffect 1st param return something & its return a fn then its works like componentWillUnmount() method..
//we can useEffect() many times in a fn component like under..

function EffectHookTwo() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  const ticks = () => {
    setTime(new Date());
  };

  useEffect(() => {
    document.title = `Count ${count} Times`;
  }, [count]);

  useEffect(() => {
    let interval = setInterval(ticks, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Times: {time.toLocaleTimeString()} </h2>
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

export default EffectHookTwo;
