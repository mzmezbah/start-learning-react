import React, { Component } from "react";
import axios from "axios";

class AxiosGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      let response = await axios.get(
        "https://raddy.co.uk/wp-json/wp/v2/posts/"
      )
      // console.log(response.data[3].title.rendered);
      this.setState(() => ({ posts: response.data }));
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { posts } = this.state;
    // console.log(posts);
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <a href={post.id}>
              <img src={post.thumbnail_url} alt="imageProperty"/>
              <h3>{post.title.rendered}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default AxiosGet;
