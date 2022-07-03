const Header = ({ src }) => {
  return (
    <header className="header">
      <img className="logo" src={src} alt="Логотип проекта" />
      <h2 className="header__userLoggedInEmail">email</h2>
      <nav className="header__menu">Регистрация</nav>
    </header>
  );
}

export default Header;
