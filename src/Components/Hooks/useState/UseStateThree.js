import React, { useState } from "react";

//in class component setState can automatically merged  an  update value into the state object ..
//but in hooks useState it cannot automatically merged an update object , u need to do it manually like under using spread operator..
//here we use state variable as an object..

function UseStateThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
        placeholder="First Name"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
        placeholder="Last Name"
      />
      <h2>Your first Name: {name.firstName}</h2>
      <h2>Your last Name: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default UseStateThree;
