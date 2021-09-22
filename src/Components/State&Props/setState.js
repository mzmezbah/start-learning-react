import React, {
    Component
} from 'react'

//Alway use 'setState()' method to change state value...
//it takes two param 1.object 2.cbFn also this cbFn can take two param 1.previousDataOfState 2.propsValue..
//when you change state data which is based on previous state data always try to do it by cbFn param..
//if you want to execute any after update 'state' data then write the code into the cbFn which is the second argument in setState() method..

class setState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            click: 0
        }
    }

    countClick() {

        // this.setState({
        //         click: this.state.click + 1
        //     },
        //     () => {
        //         console.log(this.state.click)
        //     }
        // )

        this.setState(prevData => ({
            click: prevData.click + 1
        }))
    }

    countClickFive() {
        this.countClick()
        this.countClick()
        this.countClick()
        this.countClick()
        this.countClick()
    }

    render() {
        
        const {
            click
        } = this.state

        return ( <
            div >
            <
            h2 > TotalClick - {
                click
            } < /h2> <
            button onClick = {
                () => this.countClickFive()
            } > Click < /button> < /
            div >
        )
    }
}

export default setState