const Header = ({ src, email, loggedIn, handleLogout }) => {
  return (
    <header className="header">
      <img className="logo" src={src} alt="Логотип проекта" />
      <h2 className="header__userLoggedInEmail">{email}</h2>
      <button className="header__menu" type="button" onClick={loggedIn ? handleLogout : undefined}>{loggedIn ? "Выйти" : "Регистрация"}</button>
    </header>
  );
}

export default Header;
