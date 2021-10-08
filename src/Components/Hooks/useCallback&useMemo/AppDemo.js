import React, { useState, useCallback, useMemo } from "react";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import Count from "./Count";
import Title from "./Title";

// here we use useCallback() hook.. Its use for performance optimization..
//its a simple fn & it takes a cbFn & an array as a parameter..
//this cb fn is the main fn & useCallback() always contain the cbFn ..this useCallback() re-render or change only when the dependency of the fn is changed..
// this array contain all the dependency which the cbFn is depends..

function AppDemo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);

  const incrementOne = useCallback(() => {
    //here we use no dependencies so this fn call only once.
    //here prevCount is a part of setCount method
    setCount((prevCount) => prevCount + 1);
  }, []);
  const incrementFive = useCallback(() => {
    //here the cbFn depends on the value of age So its a dependency of cbFn
    //so when age value is changed ,this fn will be re-render..
    setAge(age + 5);
  }, [age]);

  //here we use useMemo() hook..its works like useCallback..but it contain data which is return the cbFn and its stored into the variable like 'isEven' in here & it cannot change unless the dependencies change..

  //so here it saves the unnecessary loading time of while loop in  every rendering & render the cached value unless change the dependencies...

  const isEven = useMemo(() => {
    console.log('this is useMemo')
    let i = 0;
    while (i < 999000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <Title Click="click" prop="Button" />
      <Count text={"Count"} count={count} />
      <ButtonOne handler={incrementOne}>Increment Count</ButtonOne>
      <h3> {isEven ? "Even" : "Odd"}</h3>
      <Count text={"Age"} count={age} />
      <ButtonTwo handler={incrementFive}>Increment Age</ButtonTwo>
    </div>
  );
}

export default AppDemo;
