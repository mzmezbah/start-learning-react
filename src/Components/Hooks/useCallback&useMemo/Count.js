import React from "react";

//here we use memo for render this component only when the props is changed..

function Count({ text, count }) {
  console.log(`this is ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);
