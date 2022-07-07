import React from "react";
import MobileMenu from "./MobileMenu";
import burgerMenu from "../images/burger-menu-line.svg";
import closeMenuIcon from "../images/close-icon-mobile-menu.svg";

const Header = ({
  src,
  email,
  loggedIn,
  handleLogout,
  isLoginForm,
  handleClickMenuLink,
  isMobileMenuOpen,
  handleClickOpenMobileMenu,
}) => {
  return (
    <div>
      <MobileMenu
        email={email}
        handleLogout={handleLogout}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <header className="header">
        <img className="logo" src={src} alt="Логотип проекта" />
        <div></div>
        <h2 className="header__userLoggedInEmail">{email}</h2>
        <button
          className="header__menu"
          type="button"
          onClick={loggedIn ? handleLogout : handleClickMenuLink}
        >
          {loggedIn ? "Выйти" : isLoginForm ? "Регистрация" : "Войти"}
        </button>
        <button
          className="header__burger"
          type="button"
          onClick={handleClickOpenMobileMenu}
          style={{
            backgroundImage: `url(${
              isMobileMenuOpen ? closeMenuIcon : burgerMenu
            })`,
          }}
        ></button>
      </header>
    </div>
  );
};

export default Header;
