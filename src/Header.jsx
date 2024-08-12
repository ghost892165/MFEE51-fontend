import React, { useState } from "react";
import "./styles/header.css"; // 引入CSS文件

const Header = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const handleHamburgerClick = () => {
    setNavBarVisible(true);
  };

  const handleCloseClick = () => {
    setNavBarVisible(false);
  };

  return (
    <header className="homeNavBar">
      <span className="navItemLeft" id="navHome">
        首頁
      </span>
      <span className="navItemLeft" id="navReserve">
        預約服務
      </span>
      <div className="logoBg">
        <div>
          <img id="navBarLogo" src="/imgs/logo.png" alt="Logo" />
        </div>
      </div>
      <span className="navItemRight" id="navShop">
        購物
      </span>
      <span className="navItemRight" id="navEdu">
        衛教知識
      </span>
      <div className="navIcon">
        <a href="#">
          <i style={{ color: "black" }} className="fa-regular fa-user"></i>
        </a>
        <a href="#">
          <i
            style={{ color: "black" }}
            className="fa-solid fa-cart-shopping"
          ></i>
        </a>
      </div>

      <div className="hamburger" onClick={handleHamburgerClick}>
        <img src="https://img.icons8.com/stamp/32/menu.png" alt="Menu" />
      </div>

      {navBarVisible && (
        <div className="navBarShowOut">
          <a href="#home" onClick={handleCloseClick}>
            首頁
          </a>
          <a href="#reserve" onClick={handleCloseClick}>
            預約服務
          </a>
          <a href="#shop" onClick={handleCloseClick}>
            購物
          </a>
          <a href="#edu" onClick={handleCloseClick}>
            衛教知識
          </a>
          <img
            className="closeNavBarShowOut"
            src="https://img.icons8.com/ios-glyphs/60/FFFFFF/delete-sign.png"
            alt="Close"
            onClick={handleCloseClick}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
