import React, { Component } from 'react'


// in class component , this keyword is mosly complicated part in js...
//here we can bind 'this' keyword with event handler in event in 4 ways.like under ..
//here no 2 & 4 is highly recommended for use & no 3 is use when we need to pass any parameter...

 class eventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }
        // this.changeEvent = this.changeEvent.bind(this)
    }
    // changeEvent(){
    //     this.setState({
    //         message: 'how are you'
    //     })
    // }

    changeEvent = ()=> {
        this.setState({
            message: 'how are you'
        })
    }
    render() {

        const {message} = this.state

        return (
            <div>
                <h1>{message}</h1>
                {/* <button onClick={this.changeEvent.bind(this)}>click</button> */} 
                {/* <button onClick={this.changeEvent}>click</button> */}
                {/* <button onClick={() => this.changeEvent()}>click</button> */}
                <button onClick={this.changeEvent}>click</button>
                
            </div>
        )
    }
}

export default eventBind
