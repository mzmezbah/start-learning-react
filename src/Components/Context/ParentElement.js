import React, { Component } from 'react'
import ChildA from './ChildA'

export class ParentElement extends Component {
    render() {
        return (
            <div>
                <ChildA />
            </div>
        )
    }
}

export default ParentElement
