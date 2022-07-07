const MobileMenu = ({ email, handleLogout, isMobileMenuOpen }) => {
  return (
    <div className={`mobile-menu ${isMobileMenuOpen && "mobile-menu_opened"}`}>
      <h2 className="mobile-menu__email">{email}</h2>
      <button
        className="mobile-menu__exit"
        type="button"
        onClick={handleLogout}
      >
        Выйти
      </button>
    </div>
  );
};

export default MobileMenu;
