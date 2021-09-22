import React, { Component } from 'react'
import Children from './Children'

// we try to access parent element from the child ..
//we also try to pass a method as a props of children..
//here we also needed to use 2 types eventHandle bind system from method 1 is parent & 2 is child

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ParentName: 'parent'
        }
        this.greedParent = this.greedParent.bind(this)
    }

    greedParent(childNode){
        alert(`Hello ${this.state.ParentName} from ${childNode}`)
    }
    

    render() {
        return (
            <div>
                <Children greedParent={this.greedParent}  /> 
            </div>
        )
    }
}

export default Parent
