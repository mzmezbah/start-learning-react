import React from "react";
import ButtonClick from "./ButtonClick";
import MouseHover from "./MouseHover";
import PropsRenderPattern from "./PropsRenderPattern";

function AppDemo() {
  return (
    <React.Fragment>
      <PropsRenderPattern
        render={(count, increment) => (
          <ButtonClick count={count} incrementCount={increment} />
        )}
      />
      <PropsRenderPattern
        render={(x, y) => <MouseHover count={x} incrementCount={y} />}
      />
    </React.Fragment>
  );
}

export default AppDemo;
