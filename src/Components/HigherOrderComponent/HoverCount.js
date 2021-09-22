import React, { Component } from 'react'
import Hoc from './Hoc'

export class HoverCount extends Component {
    render() {
        const {count,incrementCount , name} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} Times {name}</h1>
            </div>
        )
    }
}

export default Hoc(HoverCount)
