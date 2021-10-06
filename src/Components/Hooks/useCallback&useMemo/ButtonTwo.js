import React from "react";

//here memo cannot work because here we pass the handler props  as reference type data..

function ButtonTwo({ handler, children }) {
  console.log("ButtonClick Two");
  return (
    <div>
      <button type="button" onClick={handler}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(ButtonTwo);
