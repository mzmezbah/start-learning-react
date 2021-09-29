import React, { Component } from 'react'
import AxiosGet from './AxiosGet'
import AxiosPost from './AxiosPost'

//In react, it cannot have any particular way to send or fetch data to the server..Actually it does not recognize that the server exists..
//In react, its only reads props & state and render the UI..
//So, if you communicate with server then you need to use Http library like - axios .. for communicate server..
//then we can use the server data by props & state to the react component...

export class AppDemo extends Component {
    render() {
        return (
            <div>
                {/* <AxiosGet /> */}
                <AxiosPost />
            </div>
        )
    }
}

export default AppDemo
