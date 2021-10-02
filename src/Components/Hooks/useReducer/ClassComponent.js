import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementState = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementState = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  resetState = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Count: {count}</h2>

        <div>
          <button onClick={this.incrementState}>Increment</button>
          <button onClick={this.decrementState}>Decrement</button>
          <button onClick={this.resetState}>Reset</button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
