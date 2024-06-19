import React from "react";
import "./post.scss";
const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt="" />
            <div className="details">
              <link
                to={`/profile/${post.Id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{post.name}</span>
                <span className="date">2 min ago</span>
              </link>
            </div>
          </div>
        </div>
        <div className="content"></div>
        <div className="info"></div>
      </div>
    </div>
  );
};

export default Post;
