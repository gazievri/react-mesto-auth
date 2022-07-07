import React from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, setIsLoginForm }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    setIsLoginForm(true);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((oldData) => ({ ...oldData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = data;
    handleLogin(email, password);
  }

  return (
    <form
      className="authenticationForm"
      // noValidate
      action="#"
      method="get"
      name="sign-in"
      onSubmit={handleSubmit}
    >
      <h2 className="authenticationForm__title">Вход</h2>
      <input
        className="authenticationForm__inputs"
        placeholder="Email"
        name="email"
        type="email"
        required
        onChange={handleChange}
        value={data.email}
      ></input>
      <input
        className="authenticationForm__inputs"
        placeholder="Пароль"
        name="password"
        type="password"
        required
        onChange={handleChange}
        value={data.password}
      ></input>
      <button className="authenticationForm__submitButton" type="submit">
        Войти
      </button>
      <p className="authenticationForm__toEnter">
        Не зарегистрированы?
        <Link to="/sign-up" className="authenticationForm__linkToEnter">
          {" "}
          Регистрация
        </Link>
      </p>
    </form>
  );
};

export default Login;
