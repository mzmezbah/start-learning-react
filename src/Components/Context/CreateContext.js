import React from 'react';


// this is for pass data through the component tree without having to pass props down manually at every level..
//for this u need to create context ,context provider & context consumer..
//use provider in the parent component of this component tree which trees child we need to use & pass the props into the  value key which u need to use in the child component ..
//then use the consumer to the child which we need to use but within this consume tag we need to pass a cbFn & it takes the props which we pass into the provider & its return the jsx which u need to render..  

// const x = React.createContext('defaultValue') you can also set default value into the context but it works only when provider is no available..

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}


//for using context type system u can export  the create context like this & use the context into the child how we use here in ChildB
//but this system have some limitation 1.cannot use multiple context in one component..2. only available for class component..

export default UserContext