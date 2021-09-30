import React, { Component } from "react";

class classComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      time: new Date(),
    };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} Times`;
    this.interval = setInterval(this.ticks, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} Times`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  ticks = () => {
    this.setState({ time: new Date() });
  };

  addClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count, time } = this.state;
    return (
      <div>
        <h2>Times: {time.toLocaleTimeString()}</h2>
        <button onClick={this.addClick}>Count: {count}</button>
      </div>
    );
  }
}

export default classComponent;
