import React, { Component } from 'react'
import InputRefs from './Components/InputRefs'

export class ParentInputRef extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()

        //here focusInput is method of child element..
    }

    render() {
        return (
            <div>
                <InputRefs ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentInputRef
