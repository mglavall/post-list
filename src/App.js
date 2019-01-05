import React, { Component } from "react";
import "./App.scss";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="align-center title"> the post list </h1>
        <PostList />
      </div>
    );
  }
}

export default App;
