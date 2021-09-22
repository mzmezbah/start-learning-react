import React, { Component } from "react";

//in this pattern we share code by props like under..
//here we pass the code as an argument of props fn which we use in different component.
// just for using this method we just need use some tricks..like here
//we call the props fn here & pass the code as an arg and we use this arg into the root file where we call the component for render...

export class PropsRenderPattern extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default PropsRenderPattern;
