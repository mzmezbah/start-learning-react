import React, { useRef, useState } from "react";

//this is use for access any dom node directly..

function InputRef() {
  const [value, setValue] = useState([1,1,1,1,1,1,1,1,1])
  console.log(value)
  const inputRef = useRef();

  const submitValue = (e) => {
    setValue((prevData) => {
      prevData.push(inputRef.current.value);
    })
    inputRef.current.value = "";
  };

  let data = value.map( (li,i) => <li key={i}>{li}</li>)
  console.log(data)
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={submitValue}>Submit Value</button>
      <div>{data}</div>
    </div>
  );
}

export default InputRef;
