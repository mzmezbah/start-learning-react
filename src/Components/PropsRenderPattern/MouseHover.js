import React, { Component } from 'react'

 class MouseHover extends Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered here {count} Times</h2>
            </div>
        )
    }
}

export default MouseHover
