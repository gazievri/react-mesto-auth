import React from "react";
import { Link } from "react-router-dom";

const Register = ({ handleRegister, setIsLoginForm }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    setIsLoginForm(false);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((oldData) => ({ ...oldData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = data;
    handleRegister(email, password);
  }

  return (
    <form
      className="authenticationForm"
      name="sign-up"
      action="#"
      method="get"
      // noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="authenticationForm__title">Регистрация</h2>
      <input
        className="authenticationForm__inputs"
        name="email"
        placeholder="Email"
        type="email"
        required
        onChange={handleChange}
        value={data.email}
        minLength={2}
        maxLength={50}
      ></input>
      <input
        className="authenticationForm__inputs"
        placeholder="Пароль"
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={data.password}
        minLength={8}
        maxLength={20}
      ></input>
      <button className="authenticationForm__submitButton" type="submit">
        Зарегистрироваться
      </button>
      <p className="authenticationForm__toEnter">
        Уже зарегистрированы?
        <Link to="/sign-in" className="authenticationForm__linkToEnter">
          {" "}
          Войти
        </Link>
      </p>
    </form>
  );
};

export default Register;
