import React, { Component } from "react";
import axios from "axios";
import Post from "./Post/Post";

class PostList extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        //Error handling
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return <div className="container">{posts} </div>;
  }
}

export default PostList;
