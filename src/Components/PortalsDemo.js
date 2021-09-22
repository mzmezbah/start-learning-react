import React from 'react'
import ReactDOM from 'react-dom'

//react portals gives us a first-class way to render a child  into dom by breaking parents trees..you can render this child any other div instead of root div where parent component is...

// this method takes 2 param 1st is jsx code 2nd is html node where it rendered..
// it mostly use for creating a Modal/popups..

function PortalsDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>this is portal div</h1>
        </div>,
        document.getElementById('portals-root')
    )
}

export default PortalsDemo
