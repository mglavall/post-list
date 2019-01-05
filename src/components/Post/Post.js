import React from "react";
import "./Post.css";

const post = props => (
  <div>
    <img alt="Author" src="../../assets/user1.jpg" />
    <article className="post">
      <h1>{props.title}</h1>
      <div>
        <div>{props.body}</div>
      </div>
    </article>
  </div>
);

export default post;
