import React, { useState, useRef, useEffect } from "react";

//here is the second uses of useRef ..We can use it as a generic container which can contain mutable data..lke under..

function UseRefAsContainer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(preValue => preValue +1)
        }, 1000);
        return ()=>{clearInterval(intervalRef.current)}
    },[timer])

  return <div>Timer - {timer}
  <button onClick={()=>{clearInterval(intervalRef.current)}}>Destroy Timer</button></div>;
}

export default UseRefAsContainer;
