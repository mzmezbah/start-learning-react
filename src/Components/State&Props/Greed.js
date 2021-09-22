import React from "react";

// here props is an immutable data. it return us an object with attribute which we pass in our main declare file & we dynamically use it in out component. like under.....

function Greed(props) {
    
    const {
        name
    } = props

    return ( <
        h1 > Hello Word!I am {
            name
        }. < /h1>
    )
}


export default Greed;