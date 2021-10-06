import React from "react";

//here memo cannot work because here we pass the handler props  as reference type data..

function ButtonOne({ handler, children }) {
  console.log("ButtonClick One");
  return (
    <div>
      <button type="button" onClick={handler}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(ButtonOne);
