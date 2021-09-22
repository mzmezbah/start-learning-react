import React, { PureComponent } from 'react'

// pureComponent are as same as component ..but difference is it cannot render the component without change of the value of state or props..its use for performance boosts..
//if you use pureComponent in parent element it also prevent to unnecessary render to the child element..

export class PureComponents extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             id:1
        }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                id: 1
            })
        },2000)
        //here this method call every 2sec later & assign a new stateValue  in the state but value is 1 ..so pure component does not render it again again..
    }
    

    render() {
        console.log('this is my id')
        return (
            <div>
                <h1>your id is={this.state.id}</h1>
            </div>
        )
    }
}

export default PureComponents
