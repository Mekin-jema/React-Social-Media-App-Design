import React from "react";
import "./profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LanguageIcon from "@mui/icons-material/Language";
import { EmailOutlined, MoreVert } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from "../post/Post";

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
              <FacebookIcon fontsize="large" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontsize="large" />
            </a>
            <a href="https://www.telegram.com/">
              <TelegramIcon fontsize="large" />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon fontsize="large" />
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
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
