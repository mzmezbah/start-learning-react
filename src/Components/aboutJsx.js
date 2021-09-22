import React from 'react';

const JsxInReact = () => {
    // return (
    //     // code with jsx
    //     <
    //     div >
    //     <
    //     h1 > It 's with JSX</h1> < /
    //     div >
    // )
    //code without Jsx
    return React.createElement('div', {
        id: 'wrapper'
    }, React.createElement('h1', 'null', "It's without JSX"))
}

export default JsxInReact;