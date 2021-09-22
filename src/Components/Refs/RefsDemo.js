import React, { Component } from 'react'

//By this Refs feature we can access any dom node directly..for this we need to follow under this steps..
//1.we need to declare React.createRef() in the constructor..then write the this property in the html tags by using 'ref=' attribute..by this name you can access this tags like under...
//her its this property gives us a current object like under..

// we  can also use this refs feature to access node another way ..its easier &

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
       this.domNode = React.createRef()
    }
    
    componentDidMount(){
        this.domNode.current.focus()

        console.log(this.domNode)
    }
    

    ClickEvent =()=> {
        alert(`Your input is - ${this.domNode.current.value}`)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.domNode} />
                <button onClick={this.ClickEvent}>Submit</button>
            </div>
        )
    }
}

export default RefsDemo
