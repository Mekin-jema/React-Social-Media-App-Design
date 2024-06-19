import React from "react";
import "./profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LanguageIcon from "@mui/icons-material/Language";
import { EmailOutlined, MoreVert } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SocialMediaPostPage from "../post/SocialMediaPostPage";
import SocialMediaStoryPost from "../Story/SocialMediaStoryPost";

const Profile = () => {
  const posts = [
    {
      userProfilePic:
        "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
      userName: "Mekin J.",
      image:
        "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
      likes: 10,
      comments: ["Nice post!", "Great picture!", "Love it!"],
    },
    {
      userProfilePic:
        "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
      userName: "Mekin J.",
      image:
        "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
      likes: 10,
      comments: ["Nice post!", "Great picture!", "Love it!"],
    },
    {
      userProfilePic:
        "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
      userName: "Mekin J.",
      image:
        "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
      likes: 10,
      comments: ["Nice post!", "Great picture!", "Love it!"],
    },
  ];

  // const stories = [
  //   {
  //     id: 1,
  //     img: "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
  //     userName: "Alice",
  //   },
  //   {
  //     id: 2,
  //     img: "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
  //     userName: "Alice",
  //   },
  //   {
  //     id: 3,
  //     img: "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
  //     userName: "Alice",
  //   },
  //   {
  //     id: 4,
  //     img: "https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg",
  //     userName: "Alice",
  //   },
  // ];

  return (
    <div className="profile">
      <div className="img">
        <img
          src="https://t3.ftcdn.net/jpg/04/58/64/76/360_F_458647644_QMgurK1ooH0uxNWuyelKdvIl5kysrPbP.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://img.freepik.com/premium-photo/young-asian-man-holding-bottle-water-cafe_1015980-468899.jpg?size=626&ext=jpg"
          alt=""
          className="ProfilePic"
        />
      </div>
      <div className="ProfileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.telegram.com/">
              <TelegramIcon fontSize="large" />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <div className="userName">
              <span>Mekin J.</span>
            </div>
            <div className="items">
              <div className="item">
                <AddLocationIcon />
                <span>Ethiopia</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Amharic</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <SocialMediaPostPage key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
