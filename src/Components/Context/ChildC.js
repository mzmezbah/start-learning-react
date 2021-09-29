import React, { Component } from "react";
import { UserConsumer } from "./CreateContext";

export class ChildC extends Component {
  render() {
    return (
      <UserConsumer>
        {({name,child}) => {
            return (
                <div>
                  <h1>Hello {name} this is child {child}.</h1>
                </div>
              )
        }}
      </UserConsumer>
    )
  }
}

export default ChildC;
