import React, { Component } from 'react'

import ChildC from './ChildC'
import UserContext from './CreateContext'

//here use contextType method..

export class ChildB extends Component {
    //also bind context this way
    static contextType = UserContext
    render() {
        const {name,child} = this.context
        return (
            <div>
                <h1> hi this is contextType system & value is name={name} child={child}</h1>
                <ChildC />
            </div>
        )
    }

}

//bind context by this way...

ChildB.contextType = UserContext

export default ChildB
