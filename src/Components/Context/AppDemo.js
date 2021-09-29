import React from 'react'
import { UserProvider } from './CreateContext'
import ParentElement from './ParentElement'

function AppDemo() {
    return (
        <div>
            <UserProvider value={{name:'mezbah',child:'C'}}>
                <ParentElement />
            </UserProvider>
        </div>
    )
}

export default AppDemo
