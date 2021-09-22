import React, {
    Component
} from "react";

// in class component we cannot need to share props as an argument.
//we can set any child element by props like under
//N.B- we cannot return multiple data , if we need to return multiple line of jsx we need to return all code into a div & then return this div.

class Welcome extends Component {

    render() {

        const {
            name,
            children
        } = this.props

        return ( <
                div >
                <
                h1 > Welcome All Buddy!This is {
                    name
                } < /h1> {
                children
            } <
            /div>
    )
}
}

export default Welcome