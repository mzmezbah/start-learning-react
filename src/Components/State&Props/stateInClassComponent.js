import React, {
    Component
} from "react";

// State is same as props..but its a mutable data..we need to pass it within component. but we set & change  data into 'state' in class component like under...

// we need to create a 'state' under the constructor like an object & set new data in the 'state' by using a 'setState()' method like under..

// But the declare system is like as the same of props 'this.state.MessageKey'.


class StateInClassComponent extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Please Subscibe Me'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for Subscribing Me.'
        })
    }

    render() {

        const {
            message
        } = this.state
        
        return ( <
            div >
            <
            h1 > {
                message
            } < /h1> <
            button onClick = {
                () => this.changeMessage()
            } > Subscribe < /button> <
            /div>
        )
    }
}

export default StateInClassComponent;