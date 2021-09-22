import React, { Component } from 'react'

//In lifecycle Update method -- we have 5 method..

export class LifecycleUpdateMethod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 'Hello'
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log('it is getDerivedStateFromProps')
        return null
        //this is invoked immediately when a component is re-rendered ..this is used in some rare case..when state depends on props..
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('this is shouldComponentUpdate method')
        return true

        //this is invoked before re-render a component ..its used for performance optimization..it return true 0r false..it compare previous & next state and return true false..by depending on it its return it ..if it return false 'componentDidUpdate' cannot work..used very rare case..
    }

    changeBtnValue = () => {
        this.setState({
            value:'Hey Buddy!'
        })
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('this is getSnapshotBeforeUpdate method')
        return null
        //it called before the changes from dom..it use for capture something before render..it return value or null..this value pass as a third parameter of the 'componentDidUpdate' method.. used very rare case ...
    }

    componentDidUpdate(prevState){
        if(prevState.value !== this.state.value){
           console.log('this is componentDidUpdate method')
        }

        //this is just call after update data is re-rendered..
    }

    render() {
        return (
            <div>
                <button onClick={this.changeBtnValue}>{this.state.value}</button>
            </div>
        )
    }
}

export default LifecycleUpdateMethod
