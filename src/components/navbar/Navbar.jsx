import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <link to="/" style={{ textDecoration: "none" }}>
          <span>Your Social Media</span>
        </link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default NavBar;
