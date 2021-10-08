import React from 'react'

// function ForwardRefInput() {
//     return (
//         <div>
//             <input />
//         </div>
//     )
// }

// here we use 'React.forwardRef()' method for Refs..here we use functional component..
//this forwardRef method take a parameter here we pass this arrow fn as a parameter ..normally a fnComponent take props as a argument but when we pass the fn into the forwardRef method it takes two parameter props & ref which is passed form the parent element ref attribute..then simply we use this param into the child element ref attribute..which call the parent element input ref..

const ForwardRefInput = React.forwardRef((props,refAttribute) => {
    return (
        <div>
            <input ref={refAttribute} />
        </div>
    )
})

export default ForwardRefInput
