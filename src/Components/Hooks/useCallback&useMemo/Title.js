import React from "react";
//here we use memo for render this fn only when this props is changed..
function Title({ Click, prop }) {
  console.log("this is title");
  return (
    <div>
      <h1>
        Let's {Click} the {prop}
      </h1>
    </div>
  );
}

export default React.memo(Title);
