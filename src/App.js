import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="align-center title"> The post list </h1>
        <PostList />
      </div>
    );
  }
}

export default App;
