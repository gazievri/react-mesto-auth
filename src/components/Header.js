import React from "react";

const Header = ({ src, email, loggedIn, handleLogout, isLoginForm, handleClickMenuLink }) => {

  return (
    <header className="header">
      <img className="logo" src={src} alt="Логотип проекта" />
      <h2 className="header__userLoggedInEmail">{email}</h2>
      <button className="header__menu" type="button" onClick={loggedIn ? handleLogout : handleClickMenuLink}>{loggedIn ? "Выйти" : isLoginForm ? "Регистрация" : "Войти"}</button>
    </header>
  );
}

export default Header;
