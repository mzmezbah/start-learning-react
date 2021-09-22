import React, { Component } from 'react'

export class MountingMethodB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mezbah'
        }
        console.log('MountingMethodB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('MountingMethodB getDerivedStateMethod')
        return null 
        
    }

    componentDidMount(){
        console.log('MountingMethodB componentDidMethod')
    }

    
    render() {
        console.log('MountingMethodB render')
        return (
            <div>
                Child component
            </div>
        )
    }
}

export default MountingMethodB
