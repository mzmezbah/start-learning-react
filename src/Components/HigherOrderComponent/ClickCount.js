import React, { Component } from 'react'
import Hoc from './Hoc';

export class ClickCount extends Component {
    render() {
        const {count,incrementCount,name} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Click {count} On {name}</button>
            </div>
        )
    }
}

export default Hoc(ClickCount)
