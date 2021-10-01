import React,{useContext} from 'react'
import {UserContext,ChannelContext} from './Parent'

// we use useContext() for consume the value to the child component..
// here we need to import create context from the parent element & pass them to the useContext() fn ..then we use the value as much as easier from past like under...

function ComponentB() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h1>I am {channel} & i am {user}</h1>
        </div>
    )
}

export default ComponentB
