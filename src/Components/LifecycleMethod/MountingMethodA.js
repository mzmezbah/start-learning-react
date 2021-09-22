import React, { Component } from 'react'
import MountingMethodB from './MountingMethodB'

//in react lifecycle we can classify it in 4 class ..first one is 'mounting' method its have four method ..these method are under into the class component...
//this method are only available for class component..you must be needed to understand execution sequence of this method..its mostly important in react..

export class MountingMethodA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mezbah'
        }
        console.log('MountingMethodA constructor')

        //this is used only for declare state & binding event handler into this keyword..in this method you must be call super class..
    }

    static getDerivedStateFromProps(props,state){
        console.log('MountingMethodA getDerivedStateMethod')
        return null 

        //this is used in very rare cases.. when a component depends on a props which we passed ..then we can use it ..this static method cannot have access 'this' keyword & this method only can return an object or null..it takes two parameter props & state
        
    }

    componentDidMount(){
        console.log('MountingMethodA componentDidMethod')
        //this method call immediately when something render into the dom
    }

    
    render() {
        console.log('MountingMethodA render')
        return (
            <div>
                parent component
                <MountingMethodB />
            </div>
        )

        // this is the required method we always use this...its return the jsx..
    }
}

export default MountingMethodA
