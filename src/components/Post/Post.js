import React from "react";
import "./Post.scss";
import userPhoto from "../../assets/user1.jpg";

const post = props => (
  <div className="d-flex mb-2">
    <div className="col-1">
      <img className="author-img" alt="Author" src={userPhoto} />
    </div>
    <article className="post col-11 p-2">
      <div className="text-size-2 mb-2">{props.title}</div>
      <div>
        <div>{props.body}</div>
      </div>
    </article>
  </div>
);

export default post;
