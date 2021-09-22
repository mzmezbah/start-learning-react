import React, {
    Component
} from 'react'


// this error handling life cycle mehtod have 2 method..
//1st is static getDerivedStateFromError(error) & 2nd is componentDidCatch(error,info)
//this error handling system cannot work when error happen in any event..
// here this.props.children refers the components which we actually rendering..

class errorHandlingMethod extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        //this method is used for render a fallback UI after an error is thrown..its render a fallback UI for those component which have error..cannot break the whole App..
        return {
            hasError: true
        }
    }

    componentDidCatch(error,info){
        //this method is used for show the error & error information..
        console.log(error ,info)
    }

    render() {
        if (this.state.hasError) {
            return <h1 > something error happen < /h1>
        }
        return this.props.children
    }
}

export default errorHandlingMethod