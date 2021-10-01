import React from "react";
import ComponentA from "./ComponentA";

//In hooks its provides way of creating & providing context as same as before...
//but its gives use a better way for consume value..like here----

//here use ComponentA element as parent element..

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function Parent() {
  return (
    <div>
      <UserContext.Provider value={"Learning React"}>
        <ChannelContext.Provider value={"Mezbah"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default Parent;
