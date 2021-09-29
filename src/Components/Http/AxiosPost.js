import axios from "axios";
import React, { Component } from "react";

class AxiosPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  OnChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
      e.preventDefault()
      console.log(this.state)
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  render() {
    const { userId, title, body } = this.state;
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div style={{ marginBottom: "5px", marginLeft: "20px" }}>
            <label>UserId</label>
            <input
              name="userId"
              type="text"
              value={userId}
              onChange={this.OnChangeHandler}
            />
          </div>
          <div style={{ marginBottom: "5px", marginLeft: "20px" }}>
            <label>Title</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.OnChangeHandler}
            />
          </div>
          <div style={{ marginBottom: "5px", marginLeft: "20px" }}>
            <label>Body</label>
            <input
              name="body"
              type="text"
              value={body}
              onChange={this.OnChangeHandler}
            />
          </div>
          <button
            type="submit"
            style={{ marginBottom: "5px", marginLeft: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AxiosPost;
