import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setValueName] = React.useState("");
  const [description, setValueDescription] = React.useState("");

  React.useEffect(() => {
    setValueName(currentUser.name);
    setValueDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setValueName(e.target.value);
  }

  function handleChangeDescription(e) {
    setValueDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile-edit"
      textSubmitBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_name"
        placeholder="Ваши имя и фамилия"
        type="text"
        name="name"
        id="name-input"
        required
        minLength={2}
        maxLength={40}
        onChange={handleChangeName}
        value={name || ""}
      />
      <span className="popup__error-text name-input-error" />
      <input
        className="popup__input popup__input_field_occupation"
        placeholder="Ваша работа"
        type="text"
        name="about"
        id="about-input"
        required
        minLength={2}
        maxLength={200}
        onChange={handleChangeDescription}
        value={description || ""}
      />
      <span className="popup__error-text about-input-error" />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
