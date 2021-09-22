import React, { Component } from 'react'

//in react we can create a form like under...


export class form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic:''
        }
    }

    usernameHandler= event => {
        this.setState({
            username: event.target.value,

        })
    }

    commentsHandler = event => {
        this.setState({
            comments: event.target.value
        })
    }

    topicHandler = event => {
        this.setState({
            topic: event.target.value
        })
    }

    submitForm = event => {
        const {username,comments,topic} = this.state
        alert(`${username} ${comments} ${topic}`)
        event.preventDefault()
    }

    render() {
        const {username,comments,topic} = this.state
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={username} onChange={this.usernameHandler} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.commentsHandler}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.topicHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <input type='submit' value='Submit' />
                </div>
            </form>
        )
    }
}

export default form
