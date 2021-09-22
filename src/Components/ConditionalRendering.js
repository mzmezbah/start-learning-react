import React, { Component } from "react";
class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true  
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return isLoggedIn && <div>The element is true</div>

    // return isLoggedIn ? (<div>The element is True</div>) : (<div>The element is False</div>)

    // let elementTrue = <div> The element is True </div>;
    // let elementFalse = <div> The element is False </div>;
    
    // if(isLoggedIn){
    //     return elementTrue
    // }else{
    //     return elementFalse 
    // }

    // if (isLoggedIn) {
    //     return ( <
    //         div > The condition is True < /div>
    //     )
    // } else {
    //     return ( <
    //         div > The Condition is False < /div>
    //     )
    // }
  }
}

export default ConditionalRendering;
