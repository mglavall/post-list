import React, { Component } from "react";
import "./Post.scss";
import userPhoto from "../../assets/user1.jpg";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredImg: false
    };
  }
  onImgMouseEnterHandler() {
    this.setState({ hoveredImg: true });
  }

  onImgMouseLeaveHandler() {
    this.setState({ hoveredImg: false });
  }
  render() {
    return (
      <div className="d-flex flex-wrap mb-2">
        <div className="col-1">
          <img
            className="author-img mb-1"
            alt="Author"
            src={userPhoto}
            onMouseEnter={this.onImgMouseEnterHandler.bind(this)}
            onMouseLeave={this.onImgMouseLeaveHandler.bind(this)}
          />
          <span className={"author-name" + (this.state.hoveredImg ? " hovered" : "")}>Alicia</span>
        </div>
        <article className="post col-11 p-2">
          <div className="text-size-2 mb-2">{this.props.title}</div>
          <div>
            <div>{this.props.body}</div>
          </div>
        </article>
      </div>
    );
  }
}

export default Post;
