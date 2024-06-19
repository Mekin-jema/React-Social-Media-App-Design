import React, { useState } from "react";
import "./post.scss";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Share from "@mui/icons-material/Share";
import FileCopy from "@mui/icons-material/FileCopy";

const Post = ({ post }) => {
  // State to manage likes and comments
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  // Function to handle like button click
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Function to handle comment submission
  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Function to handle copying the post link
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  // Function to handle sharing the post
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.userName,
          text: "Check out this post!",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Share not supported in this browser");
    }
  };

  return (
    <div className="post">
      <div className="postHeader">
        <img src={post.userProfilePic} alt="User" className="userProfilePic" />
        <span className="userName">{post.userName}</span>
      </div>
      <img src={post.image} alt="Post" className="postImage" />
      <div className="postActions">
        <span onClick={handleLike}>
          {liked ? <Favorite className="liked" /> : <FavoriteBorder />}
        </span>
        <span>
          <ChatBubbleOutline />
        </span>
        <span onClick={handleCopy}>
          <FileCopy />
        </span>
        <span onClick={handleShare}>
          <Share />
        </span>
      </div>
      <div className="postLikes">
        {likes} {likes === 1 ? "like" : "likes"}
      </div>
      <div className="postComments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
      <form className="commentForm" onSubmit={handleComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
