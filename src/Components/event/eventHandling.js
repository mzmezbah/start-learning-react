import React from 'react'

//In jsx, we need to be use camelCase for event name...
//for handler, we write the handler into the carly Bracket 
// if the handler is a fn then just write the fn name not call the fn like under...
// in class component, everything is same but if the handler is a method you need to write the method name with this keyword like 'this.methodName'....

function eventHandlingWithFnComponent() {
    function clickHandler() {
        console.log('iAmClicked')
    }
    return ( <
        div >
        <
        button onClick = {
            clickHandler
        } > Click Me < /button> <
        /div>
    )
}

export default eventHandlingWithFnComponent