// HOC - means Higher Order Component
//its a pattern where a function takes another function as an argument & return a new component..
// this is used for avoid code duplication & re-use code..
//always use this rest of props because it passes those props into the component which is passed on the component directly..
//you can also passes more parameter in hoc but it also need to passed with wrappedComponent params..

import React from "react";

const Hoc = WrappedComponent => {
 class Hoc extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    incrementCount = () => {
      this.setState(prevState => ({count: prevState.count + 1}))
    }

    render() {
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </div>
      );
    }
  }

  return Hoc;
};

export default Hoc;
