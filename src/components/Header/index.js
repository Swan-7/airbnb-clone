import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="logo" className="navbar-logo" />
        </div>
        <div className="search-bar">
          <div className="search-icon-mobile">
            <SearchRoundedIcon style={{ width: '1.15rem', height: '1.15rem' }} className="search-icon" />
          </div>
          <div className="search-text">
            <div className="search-bar-text">Anywhere</div>
            <div className="search-group">
              <div className="search-bar-text text-2">Any Week</div>
              <span className="space-dot">.</span>
              <div className="search-bar-text2 text-2">Add guests</div>
            </div>
          </div>
            <span className="filter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentColor' }} aria-hidden="true" role="presentation" focusable="false">
                <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </span>
          <div className="search-icon-div">
            <SearchRoundedIcon style={{ width: '1.15rem', height: '1.15rem' }} className="search-icon" />
          </div>
        </div>
        <div className="profile-container">
          <div className="airbnb-your-home">Airbnb your home</div>
          <div className="airbnb-your-home">
            <LanguageIcon sx={{ fontSize: "1.2rem" }} />
          </div>
          <div className="profile-div">
            <BasicMenu />
          </div>
        </div>
        <MobileSearchBar />
        <SimpleBottomNavigation />
      </div>
    </div>
  );
}

export default Header;
